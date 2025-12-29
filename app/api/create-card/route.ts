import { NextRequest, NextResponse } from 'next/server';
import { generateShareToken } from '@/lib/utils';
import {supabaseAdmin} from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, gender, language, template_id, poem, image_url } = body;

        // Validation
        if (!name || !gender || !language || !template_id || !poem) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (!['fr', 'en'].includes(language)) {
            return NextResponse.json(
                { error: 'Invalid language' },
                { status: 400 }
            );
        }

        if (!['boy', 'girl', 'neutral'].includes(gender)) {
            return NextResponse.json(
                { error: 'Invalid gender' },
                { status: 400 }
            );
        }

        if (![1, 2, 3, 4].includes(template_id)) {
            return NextResponse.json(
                { error: 'Invalid template_id' },
                { status: 400 }
            );
        }

        // Générer un token unique pour le partage
        const shareToken = generateShareToken();

        // Insérer dans la base de données
        const { data, error } = await supabaseAdmin
            .from('cards')
            .insert({
                name,
                gender,
                language,
                template_id,
                poem,
                image_url: image_url || null,
                share_token: shareToken,
            })
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to create card' },
                { status: 500 }
            );
        }

        return NextResponse.json({ card: data });
    } catch (error) {
        console.error('Error creating card:', error);
        return NextResponse.json(
            { error: 'Failed to create card' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const shareToken = searchParams.get('token');

        if (!shareToken) {
            return NextResponse.json(
                { error: 'Token is required' },
                { status: 400 }
            );
        }

        // Récupérer la carte depuis la base de données
        const { data, error } = await supabaseAdmin
            .from('cards')
            .select('*')
            .eq('share_token', shareToken)
            .single();

        if (error || !data) {
            return NextResponse.json(
                { error: 'Card not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ card: data });
    } catch (error) {
        console.error('Error fetching card:', error);
        return NextResponse.json(
            { error: 'Failed to fetch card' },
            { status: 500 }
        );
    }
}