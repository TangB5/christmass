'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars, Palette, Candy, PartyPopper } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayPaperCut({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Ta Journée' : 'Your Day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FF7EB3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white"
        >
            {/* 1. Couches de Papier (Effet profondeur) */}
            <div className="absolute inset-0 bg-[#FF7EB3]" />
            <div className="absolute inset-4 bg-[#FF758C] rounded-[1.8rem] shadow-inner" />
            <div className="absolute inset-8 bg-[#FA8072] rounded-[1.5rem] shadow-inner" />
            <div className="absolute inset-12 bg-[#fdfcf0] rounded-[1.2rem] shadow-2xl" />

            {/* 2. Éléments "Découpés" en fond */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Heart className="absolute top-20 left-10 rotate-12" size={100} fill="currentColor" />
                <Stars className="absolute bottom-20 right-10 -rotate-12" size={120} fill="currentColor" />
            </div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-16 z-10 items-center justify-between">

                {/* Header Pop */}
                <div className="text-center">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-[#FF758C] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 shadow-lg"
                    >
                        {title}
                    </motion.div>
                    <h1 className="text-4xl font-black text-[#FF758C] tracking-tighter">
                        HAPPY <span className="text-[#FA8072]">BDAY</span>
                    </h1>
                </div>

                {/* Section Image : Polaroid Style */}
                <motion.div
                    whileHover={{ rotate: 0 }}
                    className="relative bg-white p-3 pb-10 shadow-xl -rotate-3 border border-zinc-100"
                >
                    <div className="w-40 h-40 bg-zinc-100 overflow-hidden">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Palette size={40} className="text-zinc-200" />
                            </div>
                        )}
                    </div>
                    {/* Nom écrit à la main */}
                    <p className="absolute bottom-2 left-0 w-full text-center font-serif italic text-[#FF758C] text-xl">
                        {name}
                    </p>
                    {/* Petit sticker */}
                    <div className="absolute -top-4 -right-4 bg-yellow-400 p-2 rounded-full shadow-lg rotate-12">
                        <PartyPopper size={16} className="text-white" />
                    </div>
                </motion.div>

                {/* Message Poème */}
                <div className="w-full space-y-4">
                    <div className="flex justify-center gap-2">
                        <Candy size={16} className="text-[#FF758C]" />
                        <div className="h-[1px] w-12 bg-[#FF758C]/20 self-center" />
                        <Candy size={16} className="text-[#FA8072]" />
                    </div>
                    <p className="text-zinc-600 text-center font-medium leading-relaxed italic text-sm md:text-base px-2">
                        {poem}
                    </p>
                </div>

                {/* Footer Fun */}
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#FF758C]' : 'bg-[#FA8072]'}`} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}