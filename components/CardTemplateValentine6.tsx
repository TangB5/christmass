'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Star } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateCosmic({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? "Mon Univers" : "My Universe";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2rem] overflow-hidden"
        >
            {/* Étoiles Scintillantes */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 3,
                        height: Math.random() * 3,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
                />
            ))}

            {/* Aurore / Nébuleuse en arrière-plan */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_#4c1d95_0%,_transparent_50%)]" />

            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10 text-center">

                {/* Header */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-2"
                >
                    <Moon className="text-indigo-300 w-6 h-6 animate-pulse" fill="currentColor" />
                    <h1 className="text-indigo-100 text-sm tracking-[0.4em] uppercase font-light">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait "Eclipse" */}
                <div className="relative">
                    {/* Anneau de lumière (Corona) */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -inset-4 rounded-full bg-indigo-500/20 blur-xl"
                    />

                    <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-indigo-300/30">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover mix-blend-lighten" />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-tr from-slate-900 to-indigo-900 flex items-center justify-center">
                                <Star className="text-white/20" size={40} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Message Flottant */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-xs"
                    >
                        <p className="text-indigo-50/90 text-xl font-light leading-relaxed tracking-wide italic">
                            "{poem}"
                        </p>
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="h-12 w-[1px] bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0" />
                        <span className="text-indigo-300 text-sm font-medium tracking-widest uppercase">
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}