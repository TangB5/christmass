'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Watch, Anchor, Shield } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayClassic({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'À un Homme d\'Honneur' : 'To a Man of Honor';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#2A1B12] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#3D2B1F]"
        >
            {/* 1. Fond texture cuir surpiqué */}
            <div className="absolute inset-0 opacity-40 bg-[url('/leather.png')]" />

            {/* 2. Bordure dorée fine (style filet de maroquinerie) */}
            <div className="absolute inset-4 border border-[#C5A059]/30 rounded-[1.8rem] pointer-events-none" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-10 z-10 items-center justify-between">

                {/* Header : Sceau de qualité */}
                <div className="text-center space-y-3">
                    <div className="flex items-center justify-center gap-4 text-[#C5A059]">
                        <div className="h-[1px] w-12 bg-[#C5A059]/40" />
                        <Anchor size={20} strokeWidth={1.5} />
                        <div className="h-[1px] w-12 bg-[#C5A059]/40" />
                    </div>
                    <h1 className="text-2xl font-serif text-[#E5D5B7] tracking-[0.2em] uppercase font-light">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Cadre "Montre" / Circulaire */}
                <div className="relative">
                    <div className="absolute -inset-4 border-2 border-[#C5A059]/10 rounded-full animate-[spin_20s_linear_infinite]"
                         style={{  }} />
                    <div className="relative w-44 h-44 md:w-80 md:h-80 rounded-full p-2 bg-[#C5A059] shadow-2xl overflow-hidden">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#2A1B12]">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover sepia-[0.3] contrast-125" />
                            ) : (
                                <div className="w-full h-full bg-[#1A100B] flex items-center justify-center">
                                    <Watch size={48} className="text-[#C5A059]/20" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer : Message sur Parchemin Sombre */}
                <div className="w-full space-y-8">
                    <div className="relative bg-[#1A100B]/60 backdrop-blur-md rounded-2xl p-6 border-l-4 border-[#C5A059]">
                        <p className="text-[#E5D5B7]/90 text-center font-serif italic text-lg leading-relaxed">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-[10px] tracking-[0.6em] uppercase text-[#C5A059] mb-2">Excellence & Force</span>
                        <span className="text-3xl font-serif text-white tracking-widest uppercase italic">
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}