import { NextRequest, NextResponse } from 'next/server';
import { generatePoems } from '@/lib/gemini';
import { Language, Gender } from '@/lib/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, gender, language } = body;

        // Validation
        if (!name || !gender || !language) {
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

        // Générer les 4 poèmes
        const poems = await generatePoems(
            name,
            gender as Gender,
            language as Language
        );

        return NextResponse.json({ poems });
    } catch (error) {
        console.error('Error generating poems:', error);
        return NextResponse.json(
            { error: 'Failed to generate poems' },
            { status: 500 }
        );
    }
}