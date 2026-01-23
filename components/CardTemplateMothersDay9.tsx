'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Diamond, PenTool, Sparkles } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayArtDeco({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'À une femme d\'exception' : 'To an exceptional woman';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#3D2B2F] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#C49B92]/20"
        >
            {/* 1. Motifs Géométriques Art Déco */}
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #C49B92 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

            <div className="absolute inset-0 border-[1px] border-[#C49B92]/30 m-6 flex items-center justify-center">
                <div className="w-[95%] h-[95%] border-[1px] border-[#C49B92]/20" />
            </div>

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col p-12 z-10 items-center justify-between text-[#EEDCD9]">

                {/* Header : Titre Architecturaux */}
                <div className="text-center space-y-4">
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity }}>
                        <Diamond size={20} className="mx-auto text-[#C49B92]" />
                    </motion.div>
                    <h1 className="text-sm font-black uppercase tracking-[0.5em] leading-tight max-w-[200px] mx-auto">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Cadre Octogonal */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-[#C49B92]/10 blur-2xl rounded-full" />
                    <div className="relative w-40 h-40 clip-path-hexagon bg-[#C49B92] p-[2px]">
                        <div className="w-full h-full bg-[#3D2B2F] clip-path-hexagon overflow-hidden p-1">
                            <div className="w-full h-full clip-path-hexagon overflow-hidden grayscale contrast-125">
                                {imageUrl ? (
                                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                                        <Landmark size={40} className="text-[#C49B92]/20" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer : Typographie Serif Puissante */}
                <div className="w-full space-y-8 text-center">
                    <p className="text-[#C49B92] font-serif italic text-lg leading-relaxed px-4 border-l border-r border-[#C49B92]/30">
                        "{poem}"
                    </p>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-4 items-center">
                            <div className="h-px w-8 bg-[#C49B92]/40" />
                            <span className="text-3xl font-serif tracking-widest uppercase">
                                {name}
                            </span>
                            <div className="h-px w-8 bg-[#C49B92]/40" />
                        </div>
                        <span className="text-[10px] tracking-[0.8em] uppercase text-[#C49B92]/60">Maman d'Amour</span>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .clip-path-hexagon {
                    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
                }
            `}</style>
        </motion.div>
    );
}