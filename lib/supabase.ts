import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client pour le frontend
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const supabaseAdmin = createClient(
    supabaseUrl,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Fonction pour uploader une image
export async function uploadImage(file: File, fileName: string) {
    try {
        const { data, error } = await supabase.storage
            .from('card-images')
            .upload(fileName, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) throw error;

        // Obtenir l'URL publique
        const { data: { publicUrl } } = supabase.storage
            .from('card-images')
            .getPublicUrl(data.path);

        return publicUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

// Fonction pour supprimer une image
export async function deleteImage(filePath: string) {
    try {
        const { error } = await supabase.storage
            .from('card-images')
            .remove([filePath]);

        if (error) throw error;
        return true;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
}