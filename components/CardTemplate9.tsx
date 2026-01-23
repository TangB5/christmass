'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Star, Heart, Mountain } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNoelPaperCraft({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Douce Nuit' : 'Holy Night';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FDFBF7] rounded-[2.5rem] overflow-hidden shadow-2xl p-6"
        >
            {/* 1. Fond avec texture papier grainé */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            {/* 2. Formes de "Papier Découpé" en arrière-plan */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E2E8F0] clip-path-mountain opacity-50 shadow-inner"
                 style={{ clipPath: 'polygon(0% 100%, 0% 60%, 20% 40%, 45% 70%, 70% 30%, 100% 60%, 100% 100%)' }} />

            {/* 3. Contenu Layout */}
            <div className="relative h-full border-[1px] border-black/5 rounded-[1.8rem] flex flex-col p-8 z-10">

                {/* Header Style "Étiquette" */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white px-6 py-2 shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-full border border-black/5 flex items-center gap-3">
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                        <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-slate-700">{title}</h1>
                        <Star size={14} className="text-amber-500 fill-amber-500" />
                    </div>
                </div>

                {/* Section Image "Polaroid" */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <motion.div
                        whileHover={{ rotate: 0 }}
                        initial={{ rotate: -2 }}
                        className="bg-white p-3 pb-12 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-black/5 rotate-[-2deg] transition-transform"
                    >
                        <div className="w-44 h-44 overflow-hidden bg-slate-100">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover sepia-[0.2]" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <Mountain size={48} strokeWidth={1} />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Footer avec Typographie "Machine à écrire" */}
                <div className="mt-8 text-center space-y-4">
                    <p className="font-mono text-sm text-slate-600 leading-relaxed px-2">
                        {poem}
                    </p>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-[1px] bg-slate-300 mb-2" />
                        <span className="font-serif italic text-lg text-slate-900">{name}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}