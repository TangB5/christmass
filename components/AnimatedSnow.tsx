'use client';

import React, { useEffect, useState } from 'react';

interface Snowflake {
    id: number;
    left: number;
    animationDuration: number;
    opacity: number;
    size: number;
}

export default function AnimatedSnow() {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    useEffect(() => {
        const flakes: Snowflake[] = [];
        for (let i = 0; i < 50; i++) {
            flakes.push({
                id: i,
                left: Math.random() * 100,
                animationDuration: Math.random() * 3 + 7,
                opacity: Math.random() * 0.6 + 0.4,
                size: Math.random() * 3 + 2,
            });
        }
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute animate-snow-fall"
                    style={{
                        left: `${flake.left}%`,
                        animationDuration: `${flake.animationDuration}s`,
                        opacity: flake.opacity,
                        width: `${flake.size}px`,
                        height: `${flake.size}px`,
                    }}
                >
                    <div className="w-full h-full bg-white rounded-full shadow-lg" />
                </div>
            ))}
        </div>
    );
}