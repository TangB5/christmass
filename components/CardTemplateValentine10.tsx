'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateGoldLuxury({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? "Précieux" : "Precious";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Courbe de Bézier "Apple"
            className="relative w-full aspect-[3/4] bg-[#0a0a0a] overflow-hidden p-6 flex flex-col items-center justify-between shadow-2xl"
        >
            {/* 1. Texture de bruit (Grain) pour effet papier luxe */}
            <div className="absolute inset-0 opacity-20 pointer-events-none z-0 mix-blend-overlay"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
            />

            {/* 2. Liseré Doré fin */}
            <div className="absolute inset-4 border border-[#D4AF37] opacity-30 z-10" />

            {/* Contenu */}
            <div className="relative z-20 w-full h-full flex flex-col items-center">

                {/* Header Titre Doré */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-8 mb-6"
                >
                    <h1 className="text-5xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-[#F3E5AB] via-[#D4AF37] to-[#806210] drop-shadow-sm">
                        {title}
                    </h1>
                </motion.div>

                {/* Cadre Photo "Arche" */}
                <div className="relative w-48 h-64 mb-6">
                    <div className="absolute inset-0 border border-[#D4AF37]/50 rounded-t-full transform translate-x-1 translate-y-1" />
                    <div className="w-full h-full rounded-t-full overflow-hidden border-2 border-[#D4AF37] bg-neutral-900 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                        {imageUrl ? (
                            <motion.img
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10, ease: "linear" }}
                                src={imageUrl}
                                alt={name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-800" />
                        )}
                    </div>
                </div>

                {/* Texte Poème */}
                <div className="w-full px-4 text-center">
                    <Quote size={20} className="text-[#D4AF37] mx-auto mb-2 opacity-50" />
                    <p className="text-sm md:text-base font-serif italic text-[#e5e5e5] leading-loose tracking-wide opacity-90">
                        {poem}
                    </p>
                </div>

                {/* Signature Signature */}
                <div className="mt-auto mb-4 border-t border-[#D4AF37]/30 pt-4 w-32 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                        {name}
                    </p>
                </div>
            </div>

            {/* Effet de reflet qui passe */}
            <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-30 pointer-events-none"
            />
        </motion.div>
    );
}