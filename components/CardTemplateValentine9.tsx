'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Cloud, Music, Sparkles } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateSunset({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Mon Amour' : 'My Love';
    const subTitle = language === 'fr' ? 'Édition Cœur' : 'Heart Edition';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50"
        >
            {/* 1. Fond Dégradé "Aura" */}
            <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-purple-100 to-orange-100" />

            {/* 2. Orbes de lumière flous */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-pink-400/30 rounded-full blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-orange-300/30 rounded-full blur-[80px]" />

            {/* 3. Texture de bruit subtile */}
            <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} />

            {/* 4. Contenu */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header Doux */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm mb-2">
                            <Sparkles size={10} className="text-rose-500" />
                            <span className="text-[10px] uppercase tracking-widest text-rose-800 font-bold">{subTitle}</span>
                        </div>
                        <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600 font-bold italic tracking-tight">
                            {title}
                        </h1>
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-white p-3 rounded-full shadow-lg text-rose-500"
                    >
                        <Heart size={24} fill="currentColor" />
                    </motion.div>
                </div>

                {/* Center : Photo Cercle avec Onde */}
                <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative">
                        {/* Cercles animés derrière */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0 border border-rose-300/50 rounded-full"
                                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                                transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
                            />
                        ))}

                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_40px_-10px_rgba(255,100,100,0.3)] z-10">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-orange-200 flex items-center justify-center">
                                    <Heart size={48} className="text-white opacity-50" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer : Carte Blanche Flottante */}
                <div className="mt-auto">
                    <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] p-6 shadow-xl text-center">
                        <div className="flex justify-center gap-3 mb-3 text-rose-400">
                            <Stars size={14} />
                            <Cloud size={14} />
                            <Music size={14} />
                        </div>
                        <p className="text-slate-700 font-medium text-sm leading-relaxed font-sans">
                            {poem}
                        </p>
                        <div className="mt-4 text-xs font-bold text-rose-500 uppercase tracking-widest">
                            — {name} —
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}