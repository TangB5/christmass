import { NextRequest, NextResponse } from 'next/server';
import { generatePoems } from '@/lib/gemini';
import { Language, Gender, EventType } from '@/lib/types';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, gender, language, eventType } = body;


        if (!name || !gender || !language || !eventType) {
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


        const validGenders = ['boy', 'girl', 'neutral', 'man', 'woman', 'male', 'female'];
        if (!validGenders.includes(gender)) {
            return NextResponse.json(
                { error: 'Invalid gender' },
                { status: 400 }
            );
        }

        // Générer les 4 poèmes
        const poems = await generatePoems(
            name,
            gender as Gender,
            language as Language,
            eventType as EventType
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