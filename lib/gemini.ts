import fetch from "node-fetch";
import { Language, Gender, GeneratedPoem } from "./types";

const API_KEY = process.env.GEMINI_API_KEY!;

// Configuration du retry
const MAX_RETRIES = 3;
const INITIAL_DELAY = 2000; // 2 secondes

/**
 * Fonction utilitaire pour attendre
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Appelle l’API avec gestion du retry et de l'attente exponentielle
 */
async function callGenerateContentWithRetry(prompt: string, retryCount = 0): Promise<string> {
    // 1. On utilise le nom exact récupéré dans ton "Get Code"
    const modelName = "gemini-3-flash-preview";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user", // Ajout du rôle comme dans ton exemple Python
                    parts: [{ text: prompt }]
                }]
            }),
        });

        // 2. Gestion du Quota (429)
        if (res.status === 429 && retryCount < 3) {
            const delay = 5000 * (retryCount + 1);
            console.warn(`Quota Gemini 3 atteint. Réessai dans ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return callGenerateContentWithRetry(prompt, retryCount + 1);
        }

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Erreur API (${res.status}): ${errorText}`);
        }

        const data = await res.json() as any;

        const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!content) {
            throw new Error("L'IA a renvoyé une réponse vide.");
        }

        return content;

    } catch (error) {
        // En cas d'échec critique du modèle Preview, on peut forcer un repli sur 1.5
        if (retryCount >= 2) {
            console.error("Échec définitif sur Gemini 3, vérifiez votre quota sur Google AI Studio.");
        }
        throw error;
    }
}

/**
 * Génère les poèmes (Utilise désormais la fonction avec Retry)
 */
export async function generatePoems(
    name: string,
    gender: Gender,
    language: Language
): Promise<GeneratedPoem[]> {
    const genderText = {
        boy: language === "fr" ? "garçon" : "boy",
        girl: language === "fr" ? "fille" : "girl",
        neutral: language === "fr" ? "personne" : "person",
    };

    // Utilisation d'un prompt optimisé pour réduire la taille de réponse
    const prompt = `Act as a holiday poet. Generate exactly 4 short poems (4 lines) for ${name} (${genderText[gender]}) in ${language === 'fr' ? 'French' : 'English'}.
    1. Classic style
    2. Modern style
    3. For a child
    4. Elegant & Luxury
    Return ONLY a JSON array: [{"template_id": 1, "poem": "..."}, ...]`;

    const text = await callGenerateContentWithRetry(prompt);

    // Nettoyage de la réponse au cas où l'IA ajoute des balises ```json
    const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonMatch = cleanedText.match(/\[[\s\S]*\]/);

    if (!jsonMatch) throw new Error("Format JSON invalide reçu de l'IA");

    return JSON.parse(jsonMatch[0]) as GeneratedPoem[];
}