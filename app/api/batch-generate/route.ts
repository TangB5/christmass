import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { generateSinglePoem } from '@/lib/gemini';
import { generateShareToken, delay } from '@/lib/utils';
import { Language, Gender, TemplateId, BatchContact, BatchGenerationResult } from '@/lib/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { contacts, language, template_id } = body;

        // Validation
        if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
            return NextResponse.json(
                { error: 'Contacts array is required' },
                { status: 400 }
            );
        }

        if (!['fr', 'en'].includes(language)) {
            return NextResponse.json(
                { error: 'Invalid language' },
                { status: 400 }
            );
        }

        if (![1, 2, 3, 4].includes(template_id)) {
            return NextResponse.json(
                { error: 'Invalid template_id' },
                { status: 400 }
            );
        }

        const results: BatchGenerationResult[] = [];

        // Traiter chaque contact
        for (const contact of contacts) {
            try {
                const { name, gender } = contact;

                // Validation du contact
                if (!name || !gender) {
                    results.push({
                        success: false,
                        error: 'Missing name or gender',
                        contact,
                    });
                    continue;
                }

                if (!['boy', 'girl', 'neutral'].includes(gender)) {
                    results.push({
                        success: false,
                        error: 'Invalid gender',
                        contact,
                    });
                    continue;
                }

                // Générer le poème
                const poem = await generateSinglePoem(
                    name,
                    gender as Gender,
                    language as Language,
                    template_id as TemplateId
                );

                // Générer un token unique
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
                        image_url: null,
                        share_token: shareToken,
                    })
                    .select()
                    .single();

                if (error) {
                    console.error('Supabase error for contact:', name, error);
                    results.push({
                        success: false,
                        error: 'Database error',
                        contact,
                    });
                } else {
                    results.push({
                        success: true,
                        card: data,
                        contact,
                    });
                }

                // Délai pour éviter le rate limiting de Gemini API
                await delay(1000);
            } catch (error) {
                console.error('Error processing contact:', contact.name, error);
                results.push({
                    success: false,
                    error: 'Processing error',
                    contact,
                });
            }
        }

        return NextResponse.json({ results });
    } catch (error) {
        console.error('Error in batch generation:', error);
        return NextResponse.json(
            { error: 'Failed to process batch generation' },
            { status: 500 }
        );
    }
}