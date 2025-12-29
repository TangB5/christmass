import {
    TreePine,
    PartyPopper,
    Heart,
    Egg,
    Cake,
    Flower2,
    UserRound,
    LucideIcon
} from 'lucide-react';
import { EventConfig, EventType } from './types';

export const EVENTS: Record<EventType, EventConfig> = {
    christmas: {
        id: 'christmas',
        name: {
            fr: 'Noël',
            en: 'Christmas',
        },
        description: {
            fr: 'Cartes de vœux pour Noël',
            en: 'Christmas greeting cards',
        },
        icon: TreePine,
        colors: {
            primary: '#C41E3A', // Rouge Noël
            secondary: '#165B33', // Vert Noël
            accent: '#FFD700', // Or
        },
        available: true,
    },
    newyear: {
        id: 'newyear',
        name: {
            fr: 'Nouvel An',
            en: 'New Year',
        },
        description: {
            fr: 'Cartes de vœux pour le Nouvel An',
            en: 'New Year greeting cards',
        },
        icon: PartyPopper, // Icône Lucide
        colors: {
            primary: '#FFD700', // Or
            secondary: '#C0C0C0', // Argent
            accent: '#FF6B9D', // Rose festif
        },
        available: true,
    },
    valentine: {
        id: 'valentine',
        name: {
            fr: 'Saint-Valentin',
            en: "Valentine's Day",
        },
        description: {
            fr: "Cartes d'amour pour la Saint-Valentin",
            en: "Love cards for Valentine's Day",
        },
        icon: Heart, // Icône Lucide
        colors: {
            primary: '#FF1744', // Rouge amour
            secondary: '#F8BBD0', // Rose clair
            accent: '#D81B60', // Rose foncé
        },
        available: true,
    },
    easter: {
        id: 'easter',
        name: {
            fr: 'Pâques',
            en: 'Easter',
        },
        description: {
            fr: 'Cartes de vœux pour Pâques',
            en: 'Easter greeting cards',
        },
        icon: Egg, // Icône Lucide
        colors: {
            primary: '#9C27B0', // Violet
            secondary: '#FFEB3B', // Jaune
            accent: '#4CAF50', // Vert printemps
        },
        available: true,
    },
    birthday: {
        id: 'birthday',
        name: {
            fr: 'Anniversaire',
            en: 'Birthday',
        },
        description: {
            fr: 'Cartes pour souhaiter un joyeux anniversaire',
            en: 'Cards to wish happy birthday',
        },
        icon: Cake, // Icône Lucide
        colors: {
            primary: '#FF9800', // Orange
            secondary: '#2196F3', // Bleu
            accent: '#E91E63', // Rose
        },
        available: true,
    },
    mothersday: {
        id: 'mothersday',
        name: {
            fr: 'Fête des Mères',
            en: "Mother's Day",
        },
        description: {
            fr: 'Cartes pour célébrer les mamans',
            en: 'Cards to celebrate mothers',
        },
        icon: Flower2, // Icône Lucide
        colors: {
            primary: '#E91E63', // Rose
            secondary: '#F06292', // Rose clair
            accent: '#AD1457', // Rose foncé
        },
        available: true,
    },
    fathersday: {
        id: 'fathersday',
        name: {
            fr: 'Fête des Pères',
            en: "Father's Day",
        },
        description: {
            fr: 'Cartes pour célébrer les papas',
            en: 'Cards to celebrate fathers',
        },
        icon: UserRound, // Icône Lucide
        colors: {
            primary: '#1976D2', // Bleu
            secondary: '#42A5F5', // Bleu clair
            accent: '#0D47A1', // Bleu foncé
        },
        available: true,
    },
};


export const getEventConfig = (eventType: EventType): EventConfig => {

    return EVENTS[eventType] || EVENTS.christmas;
};

export const getAvailableEvents = (): EventConfig[] => {
    return Object.values(EVENTS).filter(event => event.available);
};