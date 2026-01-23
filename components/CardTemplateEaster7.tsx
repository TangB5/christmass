'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Sparkles, Gem, Leaf, Award } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateEasterGoldenEgg({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Trésor de Pâques' : 'Easter Treasure';

    const goldGradient = "bg-gradient-to-b from-[#e2c07d] to-[#926339]";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#1a0f02] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-[#e2c07d]/20"
        >
            {/* 1. Fond Noir avec Texture Subtile */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-orchid.png')]" />

            {/* 2. Rayons Dorés Célestes */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(226,192,125,0.1)_0%,transparent_70%)] opacity-40" />

            {/* 3. Particules Dorées Fines */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-[#e2c07d]/30"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.2, 0.5] }}
                        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 5 }}
                    >
                        <Sparkles size={Math.random() * 10 + 5} />
                    </motion.div>
                ))}
            </div>

            {/* 4. Cadre Ornemental Fin */}
            <div className="absolute inset-8 border border-[#e2c07d]/10 rounded-lg" />
            <div className="absolute inset-10 border border-[#e2c07d]/30 rounded-lg" />

            {/* 5. Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between py-16 px-12 z-10 text-center">

                {/* Header: Sceau de Qualité */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-6"
                >
                    <div className="flex justify-center items-center gap-6">
                        <div className="w-12 h-[0.5px] bg-[#e2c07d]/40" />
                        <Diamond className="text-[#e2c07d] w-3 h-3 fill-[#e2c07d] rotate-45" />
                        <div className="w-12 h-[0.5px] bg-[#e2c07d]/40" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#f3e2b3] to-[#c5a059] tracking-[0.5em] uppercase font-light">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait Section: L'effet "Médaillon en Oeuf" */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            {/* Halo d'or pulsant */}
                            <div className="absolute inset-0 bg-[#e2c07d]/5 blur-3xl rounded-[50%_50%_60%_40%/60%_60%_40%_40%] scale-150 animate-pulse" />
                            <div className="relative w-44 h-56 rounded-[50%_50%_60%_40%/60%_60%_40%_40%] p-[2px] bg-gradient-to-b from-[#e2c07d]/60 to-transparent">
                                <div className="w-full h-full rounded-[50%_50%_60%_40%/60%_60%_40%_40%] overflow-hidden border border-black/50">
                                    <img
                                        src={imageUrl}
                                        alt={name}
                                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                        crossOrigin="anonymous"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="relative">
                            <h2 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#f3e2b3] to-[#c5a059] tracking-tighter italic">
                                {name}
                            </h2>
                            <div className="w-20 h-[1px] bg-[#e2c07d]/40 mx-auto mt-4" />
                        </div>
                    )}
                </motion.div>

                {/* Poem Section: Typographie Royale */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 1 }}
                    className="w-full max-w-md relative"
                >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[#e2c07d]/20">
                        <Award size={24} strokeWidth={1} />
                    </div>

                    <div className="py-8 border-y border-[#e2c07d]/10">
                        <p className="text-gray-400 text-center leading-[2] font-serif italic text-base md:text-lg tracking-wide">
                            &#34;{poem}&#34;
                        </p>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[#e2c07d]/20">
                        <Leaf size={20} strokeWidth={1} />
                    </div>
                </motion.div>

                {/* Footer: Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="pt-8 space-y-2"
                >
                    <p className="text-[#e2c07d]/50 text-[9px] tracking-[0.6em] uppercase font-bold">
                        Collection Printemps • 2026
                    </p>
                    <div className="flex justify-center opacity-30">
                        <Gem size={16} className="text-[#e2c07d]" />
                    </div>
                </motion.div>
            </div>

            {/* Reflet de lumière diagonal furtif */}
            <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />
        </motion.div>
    );
}