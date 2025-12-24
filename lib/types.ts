// Types pour l'application

export type Language = 'fr' | 'en';

export type Gender = 'boy' | 'girl' | 'neutral';

export type TemplateId = 1 | 2 | 3 | 4;

export interface CardData {
    id: string;
    name: string;
    gender: Gender;
    language: Language;
    template_id: TemplateId;
    poem: string;
    image_url?: string;
    share_token: string;
    created_at: string;
}

export interface CardFormData {
    name: string;
    gender: Gender;
    language: Language;
    image?: File;
}

export interface GeneratedPoem {
    template_id: TemplateId;
    poem: string;
}

export interface BatchContact {
    name: string;
    gender: Gender;
    email?: string;
    phone?: string;
}

export interface BatchGenerationResult {
    success: boolean;
    card?: CardData;
    error?: string;
    contact: BatchContact;
}

export interface ShareOptions {
    whatsapp: boolean;
    facebook: boolean;
    email: boolean;
    copyLink: boolean;
}