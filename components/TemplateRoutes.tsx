// components/TemplateRouter.tsx
import { EventType, TemplateId } from '@/lib/types';

// Import tous les templates de Noël (existants)
import CardTemplate1Christmas from '@/components/CardTemplate1';
import CardTemplate2Christmas from '@/components/CardTemplate2';
import CardTemplate3Christmas from '@/components/CardTemplate3';
import CardTemplate4Christmas from '@/components/CardTemplate4';
import CardTemplate5Christmas from '@/components/CardTemplate5';
import CardTemplate6Christmas from '@/components/CardTemplate6';
import CardTemplate7Christmas from '@/components/CardTemplate7';
import CardTemplate8Christmas from '@/components/CardTemplate8';
import CardTemplate9Christmas from '@/components/CardTemplate9';
import CardTemplate10Christmas from '@/components/CardTemplate10';

// Import templates Nouvel An
import CardTemplate1NewYear from '@/components/CardTemplateNewYear1';
import CardTemplate2NewYear from '@/components/CardTemplateNewYear2';
import CardTemplate3NewYear from '@/components/CardTemplateNewYear3';
import CardTemplate4NewYear from '@/components/CardTemplateNewYear4';
import CardTemplate5NewYear from '@/components/CardTemplateNewYear5';
import CardTemplate6NewYear from '@/components/CardTemplateNewYear6';
import CardTemplate7NewYear from '@/components/CardTemplateNewYear7';
import CardTemplate8NewYear from '@/components/CardTemplateNewYear8';
import CardTemplate9NewYear from '@/components/CardTemplateNewYear9';
import CardTemplate10NewYear from '@/components/CardTemplateNewYear10';


// Import templates Saint-Valentin
import CardTemplate1Valentine from '@/components/CardTemplateValentine1';
import CardTemplate2Valentine from '@/components/CardTemplateValentine2';
import CardTemplate3Valentine from '@/components/CardTemplateValentine3';
import CardTemplate4Valentine from '@/components/CardTemplateValentine4';
import CardTemplate5Valentine from '@/components/CardTemplateValentine5';
import CardTemplate6Valentine from '@/components/CardTemplateValentine6';
import CardTemplate7Valentine from '@/components/CardTemplateValentine7';
import CardTemplate8Valentine from '@/components/CardTemplateValentine8';
import CardTemplate9Valentine from '@/components/CardTemplateValentine9';
import CardTemplate10Valentine from '@/components/CardTemplateValentine10';
// Import templates Pâques
import CardTemplate1Easter from '@/components/CardTemplateEaster1';
import CardTemplate2Easter from '@/components/CardTemplateEaster2';
import CardTemplate3Easter from '@/components/CardTemplateEaster3';
import CardTemplate4Easter from '@/components/CardTemplateEaster4';
import CardTemplate5Easter from '@/components/CardTemplateEaster5';
import CardTemplate6Easter from '@/components/CardTemplateEaster6';
import CardTemplate7Easter from '@/components/CardTemplateEaster7';
import CardTemplate8Easter from '@/components/CardTemplateEaster8';
import CardTemplate9Easter from '@/components/CardTemplateEaster9';
import CardTemplate10Easter from '@/components/CardTemplateEaster10';


// Import templates Anniversaire
import CardTemplate1Birthday from '@/components/CardTemplateBirthday1';
import CardTemplate2Birthday from '@/components/CardTemplateBirthday2';
import CardTemplate3Birthday from '@/components/CardTemplateBirthday3';
import CardTemplate4Birthday from '@/components/CardTemplateBirthday4';
import CardTemplate5Birthday from '@/components/CardTemplateBirthday5';
import CardTemplate6Birthday from '@/components/CardTemplateBirthday6';
import CardTemplate7Birthday from '@/components/CardTemplateBirthday7';
import CardTemplate8Birthday from '@/components/CardTemplateBirthday8';
import CardTemplate9Birthday from '@/components/CardTemplateBirthday9';
import CardTemplate10Birthday from '@/components/CardTemplateBirthday10';


// Import templates Fête des Mères
import CardTemplate1MothersDay from '@/components/CardTemplateMothersDay1';
import CardTemplate2MothersDay from '@/components/CardTemplateMothersDay2';
import CardTemplate3MothersDay from '@/components/CardTemplateMothersDay3';
import CardTemplate4MothersDay from '@/components/CardTemplateMothersDay4';
import CardTemplate5MothersDay from '@/components/CardTemplateMothersDay5';
import CardTemplate6MothersDay from '@/components/CardTemplateMothersDay6';
import CardTemplate7MothersDay from '@/components/CardTemplateMothersDay7';
import CardTemplate8MothersDay from '@/components/CardTemplateMothersDay8';
import CardTemplate9MothersDay from '@/components/CardTemplateMothersDay9';
import CardTemplate10MothersDay from '@/components/CardTemplateMothersDay10';


// Import templates Fête des Pères
import CardTemplate1FathersDay from '@/components/CardTemplateFathersDay1';
import CardTemplate2FathersDay from '@/components/CardTemplateFathersDay2';
import CardTemplate3FathersDay from '@/components/CardTemplateFathersDay3';
import CardTemplate4FathersDay from '@/components/CardTemplateFathersDay4';
import CardTemplate5FathersDay from '@/components/CardTemplateFathersDay5';
import CardTemplate6FathersDay from '@/components/CardTemplateFathersDay6';
import CardTemplate7FathersDay from '@/components/CardTemplateFathersDay7';
import CardTemplate8FathersDay from '@/components/CardTemplateFathersDay8';
import CardTemplate9FathersDay from '@/components/CardTemplateFathersDay9';
import CardTemplate10FathersDay from '@/components/CardTemplateFathersDay10';



type TemplateComponent = React.ComponentType<{
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
    isBusiness?: boolean;
}>;

// Mapping de tous les templates par événement et par ID
const TEMPLATE_MAP: Record<EventType, Record<TemplateId, TemplateComponent>> = {
    christmas: {
        1: CardTemplate1Christmas,
        2: CardTemplate2Christmas,
        3: CardTemplate3Christmas,
        4: CardTemplate4Christmas,
        5: CardTemplate5Christmas,
        6: CardTemplate6Christmas,
        7: CardTemplate7Christmas,
        8: CardTemplate8Christmas,
        9: CardTemplate9Christmas,
        10: CardTemplate10Christmas,
    },
    newyear: {
        1: CardTemplate1NewYear,
        2: CardTemplate2NewYear,
        3: CardTemplate3NewYear,
        4: CardTemplate4NewYear,
        5: CardTemplate5NewYear,
        6: CardTemplate6NewYear,
        7: CardTemplate7NewYear,
        8: CardTemplate8NewYear,
        9: CardTemplate9NewYear,
        10: CardTemplate10NewYear,
    },
    valentine: {
        1: CardTemplate1Valentine,
        2: CardTemplate2Valentine,
        3: CardTemplate3Valentine,
        4: CardTemplate4Valentine,
        5: CardTemplate5Valentine,
        6: CardTemplate6Valentine,
        7: CardTemplate7Valentine,
        8: CardTemplate8Valentine,
        9: CardTemplate9Valentine,
        10: CardTemplate10Valentine,
    },
    easter: {
        1: CardTemplate1Easter,
        2: CardTemplate2Easter,
        3: CardTemplate3Easter,
        4: CardTemplate4Easter,
        5: CardTemplate5Easter,
        6: CardTemplate6Easter,
        7: CardTemplate7Easter,
        8: CardTemplate8Easter,
        9: CardTemplate9Easter,
        10: CardTemplate10Easter,
    },
    birthday: {
        1: CardTemplate1Birthday,
        2: CardTemplate2Birthday,
        3: CardTemplate3Birthday,
        4: CardTemplate4Birthday,
        5: CardTemplate5Birthday,
        6: CardTemplate6Birthday,
        7: CardTemplate7Birthday,
        8: CardTemplate8Birthday,
        9: CardTemplate9Birthday,
        10: CardTemplate10Birthday,
    },
    mothersday: {
        1: CardTemplate1MothersDay,
        2: CardTemplate2MothersDay,
        3: CardTemplate3MothersDay,
        4: CardTemplate4MothersDay,
        5: CardTemplate5MothersDay,
        6: CardTemplate6MothersDay,
        7: CardTemplate7MothersDay,
        8: CardTemplate8MothersDay,
        9: CardTemplate9MothersDay,
        10: CardTemplate10MothersDay,
    },
    fathersday: {
        1: CardTemplate1FathersDay,
        2: CardTemplate2FathersDay,
        3: CardTemplate3FathersDay,
        4: CardTemplate4FathersDay,
        5: CardTemplate5FathersDay,
        6: CardTemplate6FathersDay,
        7: CardTemplate7FathersDay,
        8: CardTemplate8FathersDay,
        9: CardTemplate9FathersDay,
        10: CardTemplate10FathersDay,
    },
};

/**
 * Fonction pour récupérer le bon composant template
 * @param eventType - Type d'événement (christmas, newyear, etc.)
 * @param templateId - ID du template (1, 2, 3, 4)
 * @returns Le composant React correspondant
 */
export function getTemplateComponent(
    eventType: EventType,
    templateId: TemplateId
): TemplateComponent {
    const eventTemplates = TEMPLATE_MAP[eventType];

    if (!eventTemplates) {
        console.error(`L'événement "${eventType}" n'existe pas dans TEMPLATE_MAP`);
        return TEMPLATE_MAP.christmas[1];
    }

    const Component = eventTemplates[templateId];

    if (!Component) {
        console.error(`Le template ID "${templateId}" n'existe pas pour ${eventType}`);
        return eventTemplates[1];
    }

    return Component;
}

/**
 * Hook personnalisé pour obtenir tous les templates d'un événement
 * @param eventType - Type d'événement
 * @returns Array de templates avec leurs métadonnées
 */
export function useEventTemplates(eventType: EventType, language: 'fr' | 'en') {
    const labels = {
        fr: {
            1: 'Classique',      // Style standard
            2: 'Moderne',        // Ton premier template émeraude
            3: 'Enfantin',       // Style Playful / Fun
            4: 'Élégant',        // Version Vogue (Editorial)
            5: 'Néo-Brutaliste', // Ton code original (Impactant)
            6: 'Astral',         // Version Glassmorphism (Futuriste)
            7: 'Luxe',           // Version Gold (L'Orfèvre)
            8: 'Cinématique',    // Version Director's Cut (Storytelling)
            9: 'Douceur',        // Version Sunset (Aura/Romantique)
            10: 'Prestige',      // Version Midnight (Architect/Dark)
        },
        en: {
            1: 'Classic',
            2: 'Modern',
            3: 'Playful',
            4: 'Elegant',
            5: 'Neo-Brutalist',
            6: 'Astral',
            7: 'Luxury',
            8: 'Cinematic',
            9: 'Softness',
            10: 'Prestige',
        }
    };

    return Array.from({ length: 10 }, (_, i) => {
        const id = (i + 1) as TemplateId;
        return {
            id,
            Component: getTemplateComponent(eventType, id),
            label: labels[language][id],
        };
    });
}