import { NextRequest, NextResponse } from 'next/server';
import { generatePoems } from '@/lib/gemini';
import { Language, Gender, EventType } from '@/lib/types';
import { createClient } from '@supabase/supabase-js'; // Import de Supabase
import { v4 as uuidv4 } from 'uuid'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        // On récupère user_id envoyé par le service
        const { name, gender, language, eventType, user_id } = body;

        // Validation (on ajoute user_id dans les champs requis)
        if (!name || !gender || !language || !eventType) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }


        const poems = await generatePoems(
            name,
            gender as Gender,
            language as Language,
            eventType as EventType
        );


        if (user_id) {
            const { error: dbError } = await supabase
                .from('cards')
                .insert([{
                    // Colonnes obligatoires (is_nullable: NO)
                    name: name,
                    gender: gender,
                    language: language,
                    event_type: eventType,
                    template_id: body.template_id || 1,
                    poem: poems[0].poem,
                    share_token: uuidv4(),
                    user_id: user_id,
                    image_url: body.imageUrl || null,
                    business_name: body.businessName || null,
                    is_public: false
                }]);

            if (dbError) {
                console.error('Erreur insertion Supabase:', dbError);

            }
        }

        return NextResponse.json({ poems });
    } catch (error) {
        console.error('Error generating poems:', error);
        return NextResponse.json(
            { error: 'Failed to generate poems' },
            { status: 500 }
        );
    }
}