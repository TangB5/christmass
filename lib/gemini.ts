import { GoogleGenerativeAI } from '@google/generative-ai';
import { Language, Gender, GeneratedPoem } from './types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function generatePoems(
    name: string,
    gender: Gender,
    language: Language
): Promise<GeneratedPoem[]> {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const genderText = {
        boy: language === 'fr' ? 'garçon' : 'boy',
        girl: language === 'fr' ? 'fille' : 'girl',
        neutral: language === 'fr' ? 'personne' : 'person'
    };

    const prompt = language === 'fr'
        ? `Génère 4 poèmes courts et festifs (4-6 lignes chacun) pour souhaiter un joyeux Noël et une bonne année à ${name}, un(e) ${genderText[gender]}. 
    
Chaque poème doit :
- Être unique et personnalisé avec le nom ${name}
- Avoir un style différent (classique, moderne, enfantin, élégant)
- Contenir des vœux de Noël et du Nouvel An
- Être chaleureux et joyeux

Format de réponse STRICT (JSON uniquement) :
[
  {"template_id": 1, "poem": "texte du poème 1"},
  {"template_id": 2, "poem": "texte du poème 2"},
  {"template_id": 3, "poem": "texte du poème 3"},
  {"template_id": 4, "poem": "texte du poème 4"}
]`
        : `Generate 4 short festive poems (4-6 lines each) to wish ${name}, a ${genderText[gender]}, a Merry Christmas and Happy New Year.

Each poem should:
- Be unique and personalized with the name ${name}
- Have a different style (classic, modern, childlike, elegant)
- Contain Christmas and New Year wishes
- Be warm and joyful

STRICT response format (JSON only):
[
  {"template_id": 1, "poem": "poem 1 text"},
  {"template_id": 2, "poem": "poem 2 text"},
  {"template_id": 3, "poem": "poem 3 text"},
  {"template_id": 4, "poem": "poem 4 text"}
]`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Extraire le JSON de la réponse
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) {
            throw new Error('Invalid response format from Gemini');
        }

        const poems: GeneratedPoem[] = JSON.parse(jsonMatch[0]);
        return poems;
    } catch (error) {
        console.error('Error generating poems:', error);
        throw error;
    }
}

export async function generateSinglePoem(
    name: string,
    gender: Gender,
    language: Language,
    templateId: number
): Promise<string> {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const genderText = {
        boy: language === 'fr' ? 'garçon' : 'boy',
        girl: language === 'fr' ? 'fille' : 'girl',
        neutral: language === 'fr' ? 'personne' : 'person'
    };

    const styles = {
        1: language === 'fr' ? 'classique et traditionnel' : 'classic and traditional',
        2: language === 'fr' ? 'moderne et joyeux' : 'modern and cheerful',
        3: language === 'fr' ? 'enfantin et ludique' : 'childlike and playful',
        4: language === 'fr' ? 'élégant et poétique' : 'elegant and poetic'
    };

    const prompt = language === 'fr'
        ? `Génère un poème court et festif (4-6 lignes) de style ${styles[templateId as keyof typeof styles]} pour souhaiter un joyeux Noël et une bonne année à ${name}, un(e) ${genderText[gender]}. Le poème doit être personnalisé avec le nom ${name}, chaleureux et joyeux. Retourne UNIQUEMENT le texte du poème, sans aucun titre ni formatage.`
        : `Generate a short festive poem (4-6 lines) in ${styles[templateId as keyof typeof styles]} style to wish ${name}, a ${genderText[gender]}, a Merry Christmas and Happy New Year. The poem should be personalized with the name ${name}, warm and joyful. Return ONLY the poem text, without any title or formatting.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error('Error generating single poem:', error);
        throw error;
    }
}