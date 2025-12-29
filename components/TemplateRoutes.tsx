// components/TemplateRouter.tsx
import { EventType, TemplateId } from '@/lib/types';

// Import tous les templates de Noël (existants)
import CardTemplate1Christmas from '@/components/CardTemplate1';
import CardTemplate2Christmas from '@/components/CardTemplate2';
import CardTemplate3Christmas from '@/components/CardTemplate3';
import CardTemplate4Christmas from '@/components/CardTemplate4';

// Import templates Nouvel An
import CardTemplate1NewYear from '@/components/CardTemplateNewYear1';
import CardTemplate2NewYear from '@/components/CardTemplateNewYear2';
import CardTemplate3NewYear from '@/components/CardTemplateNewYear3';
import CardTemplate4NewYear from '@/components/CardTemplateNewYear4';

// Import templates Saint-Valentin
import CardTemplate1Valentine from '@/components/CardTemplateValentine1';
import CardTemplate2Valentine from '@/components/CardTemplateValentine2';
import CardTemplate3Valentine from '@/components/CardTemplateValentine3';
import CardTemplate4Valentine from '@/components/CardTemplateValentine4';

// Import templates Pâques
import CardTemplate1Easter from '@/components/CardTemplateEaster1';
import CardTemplate2Easter from '@/components/CardTemplateEaster2';
import CardTemplate3Easter from '@/components/CardTemplateEaster3';
import CardTemplate4Easter from '@/components/CardTemplateEaster4';

// Import templates Anniversaire
import CardTemplate1Birthday from '@/components/CardTemplateBirthday1';
import CardTemplate2Birthday from '@/components/CardTemplateBirthday2';
import CardTemplate3Birthday from '@/components/CardTemplateBirthday3';
import CardTemplate4Birthday from '@/components/CardTemplateBirthday4';

// Import templates Fête des Mères
import CardTemplate1MothersDay from '@/components/CardTemplateMothersDay1';
import CardTemplate2MothersDay from '@/components/CardTemplateMothersDay2';
import CardTemplate3MothersDay from '@/components/CardTemplateMothersDay3';
import CardTemplate4MothersDay from '@/components/CardTemplateMothersDay4';

// Import templates Fête des Pères
import CardTemplate1FathersDay from '@/components/CardTemplateFathersDay1';
import CardTemplate2FathersDay from '@/components/CardTemplateFathersDay2';
import CardTemplate3FathersDay from '@/components/CardTemplateFathersDay3';
import CardTemplate4FathersDay from '@/components/CardTemplateFathersDay4';


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
    },
    newyear: {
        1: CardTemplate1NewYear,
        2: CardTemplate2NewYear,
        3: CardTemplate3NewYear,
        4: CardTemplate4NewYear,
    },
    valentine: {
        1: CardTemplate1Valentine,
        2: CardTemplate2Valentine,
        3: CardTemplate3Valentine,
        4: CardTemplate4Valentine,
    },
    easter: {
        1: CardTemplate1Easter,
        2: CardTemplate2Easter,
        3: CardTemplate3Easter,
        4: CardTemplate4Easter,
    },
    birthday: {
        1: CardTemplate1Birthday,
        2: CardTemplate2Birthday,
        3: CardTemplate3Birthday,
        4: CardTemplate4Birthday,
    },
    mothersday: {
        1: CardTemplate1MothersDay,
        2: CardTemplate2MothersDay,
        3: CardTemplate3MothersDay,
        4: CardTemplate4MothersDay,
    },
    fathersday: {
        1: CardTemplate1FathersDay,
        2: CardTemplate2FathersDay,
        3: CardTemplate3FathersDay,
        4: CardTemplate4FathersDay,
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
    return TEMPLATE_MAP[eventType][templateId];
}

/**
 * Hook personnalisé pour obtenir tous les templates d'un événement
 * @param eventType - Type d'événement
 * @returns Array de templates avec leurs métadonnées
 */
export function useEventTemplates(eventType: EventType, language: 'fr' | 'en') {
    const labels = {
        fr: {
            1: 'Classique',
            2: 'Moderne',
            3: 'Enfantin',
            4: 'Élégant',
        },
        en: {
            1: 'Classic',
            2: 'Modern',
            3: 'Playful',
            4: 'Elegant',
        },
    };

    return [
        {
            id: 1 as TemplateId,
            Component: getTemplateComponent(eventType, 1),
            label: labels[language][1],
        },
        {
            id: 2 as TemplateId,
            Component: getTemplateComponent(eventType, 2),
            label: labels[language][2],
        },
        {
            id: 3 as TemplateId,
            Component: getTemplateComponent(eventType, 3),
            label: labels[language][3],
        },
        {
            id: 4 as TemplateId,
            Component: getTemplateComponent(eventType, 4),
            label: labels[language][4],
        },
    ];
}