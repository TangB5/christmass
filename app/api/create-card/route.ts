import { NextRequest, NextResponse } from 'next/server';
import { generateShareToken } from '@/lib/utils';
import {supabaseAdmin} from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            name,
            gender,
            language,
            poem,
            image_url,
            event_type,
            user_id
        } = body;

        const template_id = body.template_id || body.templateId;

        if (!name || !gender || !language || !template_id || !poem || !event_type) {
            console.log("Validation échouée. Reçu:", { name, template_id, event_type });
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const shareToken = generateShareToken();

        const { data, error } = await supabaseAdmin
            .from('cards')
            .insert({
                name,
                gender,
                language,
                template_id: Number(template_id),
                poem,
                event_type,
                image_url: image_url || null,
                share_token: shareToken,
                user_id: user_id || null
            })
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
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