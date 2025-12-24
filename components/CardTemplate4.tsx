'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Diamond,
    Star,
    Snowflake,
    Crown,
    Infinity as InfinityIcon,
    Award
} from 'lucide-react';

interface CardTemplate4Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate4({ name, poem, imageUrl, language }: CardTemplate4Props) {
    const title = language === 'fr' ? 'Meilleurs Vœux' : 'Season\'s Greetings';


    const goldGradient = "bg-gradient-to-b from-[#926339] via-[#e2c07d] to-[#926339]";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative w-full aspect-[3/4] bg-[#050505] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5"
        >
            {/* 1. Texture de Fond (Grain subtil) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />

            {/* 2. Éclairage Radial (Vignettage de luxe) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#1e293b_0%,transparent_70%)] opacity-40" />

            {/* 3. Particules Dorées "Poussière d'Étoiles" */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-christmas-gold/20"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{
                            opacity: [0, 0.4, 0],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        <Sparkles size={Math.random() * 10 + 5} />
                    </motion.div>
                ))}
            </div>

            {/* 4. Cadre Double "Hairline" */}
            <div className="absolute inset-8 border border-christmas-gold/10 rounded-lg" />
            <div className="absolute inset-10 border border-christmas-gold/30 rounded-lg" />

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
                        <div className="w-12 h-[0.5px] bg-christmas-gold/40" />
                        <Diamond className="text-christmas-gold w-3 h-3 fill-christmas-gold rotate-45" />
                        <div className="w-12 h-[0.5px] bg-christmas-gold/40" />
                    </div>
                    <h1 className="text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#e2c07d] to-[#926339] tracking-[0.5em] uppercase font-light">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait Section: L'effet "Médaillon" */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            {/* Halo d'or pulsant */}
                            <div className="absolute inset-0 bg-christmas-gold/5 blur-3xl rounded-full scale-150 animate-pulse" />
                            <div className="relative w-44 h-44 rounded-full p-[2px] bg-gradient-to-b from-christmas-gold/60 to-transparent">
                                <div className="w-full h-full rounded-full overflow-hidden border border-black/50">
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
                            <h2 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-[#e2c07d] to-[#926339] tracking-tighter italic">
                                {name}
                            </h2>
                            <div className="w-20 h-[1px] bg-christmas-gold/40 mx-auto mt-4" />
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-christmas-gold/20">
                        <Crown size={24} strokeWidth={1} />
                    </div>

                    <div className="py-8 border-y border-christmas-gold/10">
                        <p className="text-gray-400 text-center leading-[2] font-serif italic text-base md:text-lg tracking-wide">
                            "{poem}"
                        </p>
                    </div>

                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-christmas-gold/20">
                        <Award size={20} strokeWidth={1} />
                    </div>
                </motion.div>

                {/* Footer: Signature de la collection */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="pt-8 space-y-2"
                >
                    <p className="text-christmas-gold/50 text-[9px] tracking-[0.6em] uppercase font-bold">
                        Collection Privée • 2024
                    </p>
                    <div className="flex justify-center opacity-30">
                        <InfinityIcon size={16} className="text-christmas-gold" />
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