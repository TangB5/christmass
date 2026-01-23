import fetch from "node-fetch";
import { Language, Gender, GeneratedPoem, TemplateId, EventType } from "./types";
import { getEventConfig } from './events';

const API_KEY = process.env.GEMINI_API_KEY!;
const MAX_RETRIES = 3;

/**
 * Dictionnaire de contextes pour les différents événements
 */
const getEventContext = (eventType: EventType, language: Language) => {


    const contexts: Record<string, Record<Language, string>> = {
        christmas: {
            fr: 'Noël et une bonne année',
            en: 'Merry Christmas and Happy New Year',
        },
        newyear: {
            fr: 'une excellente nouvelle année pleine de bonheur et de réussite',
            en: 'a wonderful new year full of happiness and success',
        },
        valentine: {
            fr: 'une joyeuse Saint-Valentin avec tout mon amour',
            en: "a happy Valentine's Day with all my love",
        },
        easter: {
            fr: 'de joyeuses Pâques pleines de renouveau et de joie',
            en: 'a happy Easter full of renewal and joy',
        },
        birthday: {
            fr: 'un joyeux anniversaire rempli de bonheur',
            en: 'a happy birthday filled with joy',
        },
        mothersday: {
            fr: 'une merveilleuse fête des mères',
            en: "a wonderful Mother's Day",
        },
        fathersday: {
            fr: 'une superbe fête des pères',
            en: "a great Father's Day",
        },
    };

    // On vérifie si la clé existe
    const event = contexts[eventType];

    if (!event) {
        console.error(`⚠️ L'événement "${eventType}" n'est pas reconnu. Retour à Noël.`);
        return contexts['christmas'][language];
    }

    return event[language] || event['fr'];
};
/**
 * Appelle l’API Gemini avec gestion du retry et Quota (429)
 */
async function callGenerateContentWithRetry(prompt: string, retryCount = 0): Promise<string> {
    const modelName = "gemini-3-flash-preview";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${API_KEY}`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    role: "user",
                    parts: [{ text: prompt }]
                }]
            }),
        });

        if (res.status === 429 && retryCount < MAX_RETRIES) {
            const delay = 5000 * (retryCount + 1);
            console.warn(`Quota Gemini atteint. Réessai ${retryCount + 1}/${MAX_RETRIES} dans ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return callGenerateContentWithRetry(prompt, retryCount + 1);
        }

        if (!res.ok) {
            const errorText = await res.text();
            throw new Error(`Erreur API (${res.status}): ${errorText}`);
        }

        const data = await res.json() as any;
        const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!content) throw new Error("L'IA a renvoyé une réponse vide.");
        return content;

    } catch (error) {
        if (retryCount >= MAX_RETRIES - 1) {
            console.error("Échec définitif sur Gemini après retries.");
        }
        throw error;
    }
}

/**
 * Génère 4 poèmes pour un événement spécifique
 */
export async function generatePoems(
    name: string,
    gender: Gender,
    language: Language,
    eventType: EventType
): Promise<GeneratedPoem[]> {

    const eventConfig = getEventConfig(eventType);


    const eventContext = getEventContext(eventType, language);
    const genderLabels: any = {
        fr: {
            boy: "garçon", girl: "fille",
            man: "homme", woman: "femme",
            male: "homme", female: "femme",
            neutral: "personne"
        },
        en: {
            boy: "boy", girl: "girl",
            man: "man", woman: "woman",
            male: "man", female: "woman",
            neutral: "person"
        }
    };

    const label = genderLabels[language][gender] || genderLabels[language]['neutral'];

    // 3. Extraction sécurisée du nom du thème (Fallbacks si undefined)
    const themeName = eventConfig?.name
        ? (language === 'fr' ? eventConfig.name.fr : eventConfig.name.en)
        : (language === 'fr' ? 'Fête' : 'Celebration');

    const prompt = `Act as a professional poet and linguist. Generate 10 unique festive poems to wish ${eventContext} to ${name} (${label}) in ${language === 'fr' ? 'French' : 'English'}. 
Theme: ${themeName}.

SPECIFIC CONTENT RULES:
- For ODD template IDs (1, 3, 5, 7, 9): Generate a 4-line poem. The first 2 lines must explore the ETYMOLOGY or deep meaning of the name "${name}", and the last 2 lines must be festive wishes.
- For EVEN template IDs (2, 4, 6, 8, 10): Generate an ACROSTIC poem where each line starts with a letter of the name "${name}". The number of lines MUST equal the number of letters in the name.

STYLES MAPPING:
1. Classic & Traditional (Style: Etymology, 4 lines)
2. Modern & Cheerful (Style: Acrostic, length based on name)
3. Childlike & Playful (Style: Etymology, 4 lines)
4. Elegant & Luxury (Style: Acrostic, length based on name)
5. Vintage Scrapbook (Style: Etymology, 4 lines)
6. Cosmic Minimalist (Style: Acrostic, length based on name)
7. Neo-Brutalist Pop (Style: Etymology, 4 lines)
8. Botanical Zen (Style: Acrostic, length based on name)
9. Cinematic Dark (Style: Etymology, 4 lines)
10. Bauhaus Geometric (Style: Acrostic, length based on name)

Requirements:
- Tone: Warm, creative, and strictly following the assigned style.
- Return ONLY a JSON array of 10 objects.
- For acrostics, ensure the lines are poetic and not just single words.
- For etymology, be linguistically accurate yet poetic.

Format: [
  {"template_id": 1, "poem": "..."},
  {"template_id": 2, "poem": "..."},
  {"template_id": 3, "poem": "..."},
  {"template_id": 4, "poem": "..."},
  {"template_id": 5, "poem": "..."},
  {"template_id": 6, "poem": "..."},
  {"template_id": 7, "poem": "..."},
  {"template_id": 8, "poem": "..."},
  {"template_id": 9, "poem": "..."},
  {"template_id": 10, "poem": "..."}
]`;
    const text = await callGenerateContentWithRetry(prompt);

    const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const jsonMatch = cleanedText.match(/\[[\s\S]*\]/);

    if (!jsonMatch) throw new Error("Format JSON invalide reçu de l'IA");

    return JSON.parse(jsonMatch[0]) as GeneratedPoem[];
}

/**
 * Génère un seul poème selon un template précis ou par défaut
 */
export async function generateSinglePoem(
    companyName: string,
    gender: Gender,
    language: Language,
    eventType: EventType,
    templateId: TemplateId = 1
): Promise<GeneratedPoem> {

    const eventContext = getEventContext(eventType, language);

    const prompt = `Act as a professional corporate communications expert. 
    Generate a formal and elegant greeting (6 short lines) in ${language === 'fr' ? 'French' : 'English'}.
    
    IMPORTANT: Use the placeholder "[[NAME]]" to represent the recipient's name within the poem.
    The message is sent on behalf of the company: ${companyName}.
    
    Context: Wishing ${eventContext}.
    Tone: Professional, formal, "Vouvoiement" (if French), business-appropriate.
    
    Requirements:
    - The poem MUST include "[[NAME]]" (e.g., "Cher(e) [[NAME]]" or "À l'attention de [[NAME]]").
    - Mention that these wishes come from ${companyName}.
    - Express professional gratitude and best wishes for the event.
    - Return ONLY a JSON object.
    
    Format: {"template_id": ${templateId}, "poem": "..."}`;

    try {
        const text = await callGenerateContentWithRetry(prompt);

        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);

        if (!jsonMatch) throw new Error("Format JSON invalide");

        return JSON.parse(jsonMatch[0]) as GeneratedPoem;
    } catch (error) {
        console.error("Erreur dans generateSinglePoem Business:", error);
        // Fallback avec le marqueur pour ne pas casser la boucle de remplacement
        return {
            template_id: templateId,
            poem: language === 'fr'
                ? `Cher(e) [[NAME]], toute l'équipe de ${companyName} vous souhaite ${eventContext} et une pleine réussite.`
                : `Dear [[NAME]], the ${companyName} team wishes you a ${eventContext} and great success.`
        };
    }
}