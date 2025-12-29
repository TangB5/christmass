// app/api/batch-generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateSinglePoem } from '@/lib/gemini';
import { generateShareToken } from '@/lib/utils';
import { Language, Gender, TemplateId, BatchGenerationResult, EventType } from '@/lib/types';
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(request: NextRequest) {
    console.log('🚀 [BATCH] Démarrage de la génération groupée optimisée...');

    try {
        const body = await request.json();
        const {
            contacts,
            language,
            template_id,
            eventType,
            logoUrl,
            userId,
            businessName
        } = body;

        // --- VALIDATIONS ---
        if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
            return NextResponse.json({ error: 'Contacts array is required' }, { status: 400 });
        }

        /**
         * 💡 STRATÉGIE D'ÉCONOMIE DE TOKENS :
         * On demande à Gemini de générer UN SEUL poème qui contient un marqueur spécial [[NAME]].
         * Ensuite, on remplace ce marqueur localement pour chaque contact.
         */
        const placeholder = "[[NAME]]";

        // On construit le nom de référence pour Gemini :
        // Si businessName est fourni, on peut faire un mix "[[NAME]] de la part de businessName"
        // ou simplement demander à Gemini d'utiliser le placeholder.
        const referenceName = businessName ? `${placeholder} (de la part de ${businessName})` : placeholder;

        console.log('🤖 [GEMINI] Génération du template unique avec placeholder...');

        let basePoemData: any;
        try {
            basePoemData = await generateSinglePoem(
                referenceName,
                'neutral' as Gender, // Neutre pour le template
                language as Language,
                eventType as EventType,
                template_id as TemplateId
            );
        } catch (error: any) {
            console.error('❌ [GEMINI] Erreur API :', error.message);
            return NextResponse.json({ error: 'Failed to generate template' }, { status: 500 });
        }

        const templateText = basePoemData.poem;
        const results: BatchGenerationResult[] = [];

        // --- 2. PERSONNALISATION LOCALE & INSERTION ---
        console.log(`🔄 [PROCESS] Personnalisation de ${contacts.length} cartes...`);

        for (const contact of contacts) {
            try {
                const { name, gender, phone, email } = contact;

                if (!name) {
                    results.push({ success: false, error: 'Missing name', contact });
                    continue;
                }


                let personalizedPoem = templateText.replace(new RegExp('\\[\\[NAME\\]\\]', 'g'), name);

                // Sécurité : si Gemini a écrit le nom de l'entreprise au lieu du placeholder
                if (businessName && personalizedPoem.includes(businessName) && !personalizedPoem.includes(name)) {
                    // On peut choisir de laisser tel quel ou d'ajouter le nom
                }

                const shareToken = generateShareToken();

                // INSERTION DANS LA DB
                const { data, error: dbError } = await supabaseAdmin
                    .from('cards')
                    .insert({
                        name,
                        gender,
                        language,
                        template_id,
                        event_type: eventType,
                        poem: personalizedPoem,
                        image_url: logoUrl || null,
                        share_token: shareToken,
                        user_id: userId || null,
                        business_name: businessName || null,
                        phone: phone || null
                    })
                    .select()
                    .single();

                if (dbError) {
                    results.push({ success: false, error: 'DB Error', contact });
                } else {
                    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
                    results.push({
                        success: true,
                        card: data,
                        contact,
                        shareUrl: `${baseUrl}/preview/${shareToken}`
                    });
                }
            } catch (error: any) {
                results.push({ success: false, error: 'Processing error', contact });
            }
        }

        return NextResponse.json({ results });

    } catch (error: any) {
        console.error('💥 [CRITICAL] Erreur fatale:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}