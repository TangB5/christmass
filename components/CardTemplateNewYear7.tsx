'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Crown, Sparkles, ChevronUp } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYGatsby({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Élégance' : 'Elegance';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0c0c0c] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#c5a059]/20"
        >
            {/* 1. Motif de fond Art Déco (Lignes dorées fines) */}
            <div className="absolute inset-0 opacity-[0.07]"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23c5a059' stroke-width='1'/%3E%3C/svg%3E")` }} />

            {/* 2. Cadre Géométrique Or */}
            <div className="absolute inset-6 border border-[#c5a059]/30" />
            <div className="absolute inset-8 border border-[#c5a059]/10" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col items-center p-12 z-10 text-center">

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-6 text-[#c5a059]"
                >
                    <Crown size={32} strokeWidth={1} />
                </motion.div>

                <h1 className="text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#f3e2b3] to-[#c5a059] tracking-[0.4em] uppercase mb-8">
                    {title}
                </h1>

                {/* Section Image en Diamant */}
                <div className="relative w-48 h-48 mb-10">
                    <div className="absolute inset-0 rotate-45 border-2 border-[#c5a059] overflow-hidden bg-zinc-900 shadow-2xl">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover -rotate-45 scale-150" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center -rotate-45">
                                <Wine size={40} className="text-[#c5a059]/20" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Bloc Poème */}
                <div className="flex-1 flex flex-col justify-center">
                    <div className="relative px-4">
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#c5a059]/40"><Sparkles size={20}/></span>
                        <p className="text-[#f3e2b3]/80 font-serif italic text-lg leading-relaxed">
                            "{poem}"
                        </p>
                        <div className="mt-6 flex flex-col items-center">
                            <p className="text-[#c5a059] font-bold text-xs tracking-[0.5em] uppercase mb-1">{name}</p>
                            <div className="w-12 h-[1px] bg-[#c5a059]/40" />
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-[10px] text-[#c5a059]/30 tracking-[0.8em] uppercase font-mono italic">MCMXXVI</p>
                </div>
            </div>
        </motion.div>
    );
}