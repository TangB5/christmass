import { NextRequest, NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import {uploadImage} from "@/lib/supabaseClient";

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json(
                { error: 'No file provided' },
                { status: 400 }
            );
        }


        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.' },
                { status: 400 }
            );
        }

        // Vérifier la taille du fichier (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                { error: 'File too large. Maximum size is 5MB.' },
                { status: 400 }
            );
        }

        // Générer un nom de fichier unique
        const fileExtension = file.name.split('.').pop();
        const fileName = `${nanoid()}.${fileExtension}`;

        // Upload vers Supabase
        const imageUrl = await uploadImage(file, fileName);

        return NextResponse.json({ imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json(
            { error: 'Failed to upload image' },
            { status: 500 }
        );
    }
}