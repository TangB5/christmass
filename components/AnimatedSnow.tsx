'use client';

import React, { useEffect, useState } from 'react';
import { EventType } from '@/lib/types';

interface Particle {
    id: number;
    left: number;
    duration: number;
    delay: number;
    opacity: number;
    size: number;
    content: React.ReactNode;
}

export default function EventParticles({ eventId }: { eventId: EventType }) {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const createParticles = () => {
            const newParticles: Particle[] = [];
            const count = 40;

            for (let i = 0; i < count; i++) {
                newParticles.push({
                    id: i,
                    left: Math.random() * 100,
                    duration: Math.random() * 5 + 7, // Un peu plus lent pour le réalisme
                    delay: Math.random() * 5,
                    opacity: Math.random() * 0.5 + 0.4,
                    size: Math.random() * 10 + 10,
                    content: getParticleContent(eventId),
                });
            }
            setParticles(newParticles);
        };

        createParticles();
    }, [eventId]);

    const getParticleContent = (type: EventType) => {
        switch (type) {
            case 'christmas':
                return <div className="bg-white rounded-full blur-[1px] w-full h-full shadow-[0_0_8px_white]" />;

            case 'newyear':
                const nyColors = ['#FFD700', '#C0C0C0', '#FFFFFF', '#FFDF00'];
                return (
                    <div
                        className="rotate-45 w-full h-full"
                        style={{
                            backgroundColor: nyColors[Math.floor(Math.random() * nyColors.length)],
                            borderRadius: '2px'
                        }}
                    />
                );

            case 'valentine':
                const heartColors = ['❤️', '💖', '💝', '💕'];
                return <span>{heartColors[Math.floor(Math.random() * heartColors.length)]}</span>;

            case 'easter':
                const easterItems = ['🥚', '🐰', '🐣'];
                return <span>{easterItems[Math.floor(Math.random() * easterItems.length)]}</span>;

            case 'birthday':
                const bdayItems = ['🎉', '✨', '🎈', '🎁'];
                return <span>{bdayItems[Math.floor(Math.random() * bdayItems.length)]}</span>;

            case 'mothersday':
                return <span className="filter drop-shadow-sm">🌸</span>;

            case 'fathersday':
                // Utilisation d'étoiles dorées ou bleues pour un look élégant
                return <span className="filter drop-shadow-sm">⭐</span>;

            default:
                return <div className="bg-white/20 rounded-full w-full h-full" />;
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute animate-particle-fall flex items-center justify-center"
                    style={{
                        left: `${p.left}%`,
                        top: '-10%',
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        opacity: p.opacity,
                        fontSize: `${p.size}px`,
                        width: (eventId === 'christmas' || eventId === 'newyear') ? `${p.size}px` : 'auto',
                        height: (eventId === 'christmas' || eventId === 'newyear') ? `${p.size}px` : 'auto',
                    } as any}
                >
                    {p.content}
                </div>
            ))}
        </div>
    );
}