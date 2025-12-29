import { Language, Gender, EventType, TemplateId, GeneratedPoem } from '@/lib/types';

export const eventService = {
    /**
     * Upload d'une image vers le serveur
     */
    async uploadImage(file: File): Promise<string> {
        const formData = new FormData();
        formData.append('file', file);

        const res = await fetch('/api/upload-image', {
            method: 'POST',
            body: formData
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Upload failed');
        }

        const data = await res.json();
        return data.imageUrl;
    },

    /**
     * Génération des poèmes via l'IA
     */
    async generatePoems(params: {
        name: string,
        gender: Gender,
        language: Language,
        eventType: EventType,
        user_id: string // Ajout de l'ID utilisateur ici
    }): Promise<GeneratedPoem[]> {
        const res = await fetch('/api/generate-poem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: params.name,
                gender: params.gender,
                language: params.language,
                eventType: params.eventType,
                user_id: params.user_id,
            }),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Gemini error');
        }

        const data = await res.json();
        if (!data.poems || data.poems.length === 0) throw new Error('No poems');

        return data.poems;
    },

    /**
     * Création finale de la carte de partage
     */
    async createCard(params: {
        name: string,
        gender: Gender,
        language: Language,
        eventType: EventType,
        templateId: TemplateId,
        poem: string,
        imageUrl: string | null
    }) {
        const res = await fetch('/api/create-card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: params.name,
                gender: params.gender,
                language: params.language,
                event_type: params.eventType,
                template_id: params.templateId,
                poem: params.poem,
                image_url: params.imageUrl,
            }),
        });

        if (!res.ok) throw new Error('Erreur de création');

        return await res.json();
    }
};

