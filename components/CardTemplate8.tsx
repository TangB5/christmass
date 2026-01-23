'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Circle, Bookmark, Heart } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNoelForest({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Héritage' : 'Heritage';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0c1a16] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
        >
            {/* 1. Texture de fond (Grain organique) */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            {/* 2. Contenu Layout "Studio" */}
            <div className="relative h-full flex flex-col p-0 z-10">

                {/* Image haute (Style Galerie) */}
                <div className="w-full h-[45%] relative">
                    {imageUrl ? (
                        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-[#162a24] flex items-center justify-center">
                            <TreePine size={60} className="text-[#0c1a16]" strokeWidth={1} />
                        </div>
                    )}
                    {/* Badge flottant sur l'image */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <Circle size={8} className="fill-emerald-500 text-emerald-500" />
                        <span className="text-[8px] font-mono text-white tracking-widest uppercase">Premium_Noël.2026</span>
                    </div>
                </div>

                {/* Zone de texte basse */}
                <div className="flex-1 bg-[#0c1a16] p-10 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <h1 className="text-2xl font-serif text-emerald-100 tracking-tighter italic">
                            {title}
                        </h1>
                        <Bookmark size={20} className="text-emerald-800" />
                    </div>

                    <p className="text-emerald-50/70 font-sans text-base leading-relaxed tracking-wide font-light flex-1">
                        {poem}
                    </p>

                    {/* Footer Signature */}
                    <div className="mt-8 flex justify-between items-end">
                        <div>
                            <p className="text-[10px] text-emerald-800 uppercase tracking-widest mb-1">De la part de</p>
                            <p className="text-xl font-serif text-white">{name}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-emerald-800 flex items-center justify-center">
                            <Heart size={18} className="text-emerald-800" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Effet de bordure interne fine */}
            <div className="absolute inset-4 border border-white/5 rounded-[1.8rem] pointer-events-none" />
        </motion.div>
    );
}