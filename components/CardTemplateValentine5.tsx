'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Flower2 } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateVintage({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr' ? "Billet Doux" : "Love Note";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#f4f1ea] rounded-sm overflow-hidden shadow-[5px_5px_15px_rgba(0,0,0,0.1)] border-[#e8e4d9] border-[12px]"
        >
            {/* Texture de papier vieilli */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />

            {/* Décoration : Lignes de cahier */}
            <div className="absolute inset-0 flex flex-col px-10 py-20 gap-[1.5rem] opacity-20">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-rose-900" />
                ))}
            </div>

            <div className="relative h-full flex flex-col items-center justify-between p-8 z-10">
                {/* Header Style "Timbre" */}
                <div className="w-full flex justify-between items-start">
                    <div className="border-2 border-rose-900/30 p-2 rounded-sm rotate-[-5deg] bg-white shadow-sm">
                        <p className="text-[10px] font-mono uppercase text-rose-900/60 leading-none">Valentine's Post<br/>Feb 14, 2026</p>
                    </div>
                    <Bookmark className="text-rose-800/40 fill-current" size={32} />
                </div>

                {/* Photo style Polaroid */}
                <motion.div
                    whileHover={{ rotate: 0 }}
                    transition={{ type: 'spring' }}
                    className="relative bg-white p-4 pb-10 shadow-lg transform rotate-3 border border-black/5"
                >
                    {/* Effet Ruban Adhésif (Washi Tape) */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-rose-200/50 backdrop-blur-sm border border-white/20 rotate-[-2deg] z-20" />

                    <div className="w-40 h-40 md:w-80  md:h-80 bg-gray-100 overflow-hidden grayscale-[30%] contrast-[110%]">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-200"><Flower2 size={48} /></div>
                        )}
                    </div>
                    <p className="absolute bottom-2 left-0 w-full text-center font-serif italic text-gray-600 tracking-tighter">
                        {name}
                    </p>
                </motion.div>

                {/* Poème Typed (Style machine à écrire) */}
                <div className="w-full max-w-xs mb-8">
                    <h1 className="font-serif text-2xl text-rose-900/80 mb-4 border-b border-rose-900/10 inline-block italic">
                        {title}
                    </h1>
                    <p className="font-mono text-sm md:text-base text-stone-800 leading-relaxed indent-4">
                        {poem}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}