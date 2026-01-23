'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Gem, Heart } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayRoyal({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Fête des Mères' : 'Mother\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#2D161B] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#E9C3C9]/20"
        >
            {/* 1. Fond : Gradient Satiné */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1a0b0e] via-[#4A1E26] to-[#2D161B]" />

            {/* 2. Reflets de lumière dorés */}
            <motion.div
                animate={{ opacity: [0.1, 0.3, 0.1], x: [-100, 100, -100] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#E9C3C9]/10 to-transparent skew-x-12"
            />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-12 z-10 items-center justify-between">

                {/* Header : Sceau d'Or Rose */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-[#E9C3C9]/40"
                    >
                        <Sparkles size={24} />
                    </motion.div>
                    <h1 className="text-3xl font-serif text-[#E9C3C9] tracking-[0.2em] uppercase font-light text-center">
                        {title}
                    </h1>
                    <div className="w-12 h-[1px] bg-[#E9C3C9]/30" />
                </div>

                {/* Section Image : Cadre Bijou */}
                <div className="relative">
                    <div className="absolute -inset-8 bg-[#E9C3C9]/5 blur-3xl rounded-full" />
                    <div className="relative w-40 h-40 rounded-full p-[2px] bg-gradient-to-b from-[#E9C3C9] to-transparent shadow-[0_0_40px_rgba(233,195,201,0.2)]">
                        <div className="w-full h-full rounded-full overflow-hidden border border-black/40">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[0.8]" />
                            ) : (
                                <div className="w-full h-full bg-[#1a0b0e] flex items-center justify-center">
                                    <Gem size={40} className="text-[#E9C3C9]/20" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer : Message Or Rose */}
                <div className="w-full text-center space-y-8">
                    <div className="relative">
                        <Star size={16} className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#E9C3C9]/20" />
                        <p className="text-[#E9C3C9]/90 font-serif italic text-lg leading-relaxed">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex gap-2 mb-2">
                            <Heart size={10} className="text-[#E9C3C9] fill-[#E9C3C9]" />
                            <Heart size={10} className="text-[#E9C3C9] fill-[#E9C3C9]" />
                            <Heart size={10} className="text-[#E9C3C9] fill-[#E9C3C9]" />
                        </div>
                        <span className="text-2xl font-serif text-[#E9C3C9] tracking-widest uppercase">
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}