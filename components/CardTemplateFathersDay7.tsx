'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Newspaper, Star, Type } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayVintage({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'L\'HOMME DE L\'ANNÉE' : 'MAN OF THE YEAR';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#E8E2D2] rounded-[1rem] overflow-hidden shadow-2xl p-6 border-[1px] border-black/10"
        >
            {/* 1. Texture Papier Journal Vieilli */}
            <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/old-map.png')]" />

            {/* 2. Contenu Layout style Gazette */}
            <div className="relative h-full border-2 border-black/80 flex flex-col p-4">

                {/* Header Journal */}
                <div className="border-b-4 border-double border-black pb-2 text-center mb-4">
                    <div className="flex justify-between text-[8px] font-serif font-bold uppercase mb-1">
                        <span>Édition Spéciale</span>
                        <span>Dimanche, Mai 2026</span>
                        <span>Prix: Inestimable</span>
                    </div>
                    <h1 className="text-4xl font-serif font-black tracking-tighter text-black uppercase">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Gravure Rétro */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="relative w-full aspect-square bg-white border border-black p-1 shadow-inner">
                        <div className="w-full h-full overflow-hidden grayscale contrast-150 brightness-90 sepia-[0.3]">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-slate-200">
                                    <Newspaper size={48} className="text-black/20" />
                                </div>
                            )}
                        </div>
                        {/* Effet trame d'impression */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
                    </div>
                    <p className="mt-2 text-[10px] font-serif italic text-black/60 border-b border-black/20 pb-1 w-full text-center">
                        Fig. 1 : Un père exemplaire immortalisé pour la postérité.
                    </p>
                </div>

                {/* Zone Article (Poème) */}
                <div className="mt-4 flex-1">
                    <div className="columns-1 gap-4 h-full">
                        <div className="relative">
                            <Quote size={16} className="text-black/20 absolute -left-2 -top-2" />
                            <p className="text-black font-serif text-sm leading-snug text-justify first-letter:text-4xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                                {poem}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Signature Signature */}
                <div className="mt-4 pt-2 border-t-2 border-black flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase">Officiellement Reconnu :</span>
                        <span className="text-3xl font-serif font-bold text-black tracking-tighter">{name}</span>
                    </div>
                    <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center rotate-12">
                        <Star size={24} fill="black" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}