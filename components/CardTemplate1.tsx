'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    TreePine,
    Sparkles,
    Gift,
    Star,
    Snowflake,
    ShieldCheck
} from 'lucide-react';

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate1({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Joyeux Noël' : 'Merry Christmas';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#450a0a] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/5"
        >
            {/* 1. Fond "Velours" Profond avec Vignettage */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-900 to-[#2a0505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

            {/* 2. Animation de Neige Améliorée */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/20"
                        initial={{ y: -20, x: Math.random() * 100 + '%' }}
                        animate={{
                            y: '110vh',
                            x: `${(Math.random() * 100) + (Math.sin(i) * 10)}%`,
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 5,
                        }}
                    >
                        <Snowflake size={Math.random() * 15 + 10} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Cadre Ornemental (Coins dorés) */}
            <div className="absolute inset-6 border border-christmas-gold/30 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-christmas-gold/60"><Star size={24} fill="currentColor" /></div>
            <div className="absolute top-4 right-4 text-christmas-gold/60"><Star size={24} fill="currentColor" /></div>
            <div className="absolute bottom-4 left-4 text-christmas-gold/60"><Star size={24} fill="currentColor" /></div>
            <div className="absolute bottom-4 right-4 text-christmas-gold/60"><Star size={24} fill="currentColor" /></div>

            {/* 4. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header Section */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="h-[1px] w-8 bg-christmas-gold/50" />
                        <Sparkles className="text-christmas-gold w-5 h-5 animate-pulse" />
                        <div className="h-[1px] w-8 bg-christmas-gold/50" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-christmas-gold via-[#fef08a] to-[#a16207] drop-shadow-sm italic">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait ou Nom Calligraphié */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            {/* Halo lumineux derrière l'image */}
                            <div className="absolute inset-0 bg-christmas-gold/30 blur-2xl rounded-full scale-110 animate-pulse" />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-christmas-gold shadow-2xl overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-white tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
                                {name}
                            </h2>
                            <div className="w-12 h-1 bg-christmas-gold mx-auto mt-2 rounded-full shadow-[0_0_10px_gold]" />
                        </div>
                    )}
                </motion.div>

                {/* Zone du Poème (Style "Givre") */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-sm"
                >
                    <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group">
                        {/* Motif de neige discret en fond du texte */}
                        <div className="absolute top-0 right-0 p-2 text-white/5 group-hover:rotate-12 transition-transform">
                            <TreePine size={60} />
                        </div>

                        <p className="text-white text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-6"
                >
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-christmas-red border border-christmas-gold/30 flex items-center justify-center text-christmas-gold shadow-lg">
                            <Gift size={14} />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-christmas-green border border-christmas-gold/30 flex items-center justify-center text-white shadow-lg">
                            <TreePine size={14} />
                        </div>
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-christmas-gold/80">
                        Édition Magique 2024
                    </span>
                </motion.div>
            </div>

            {/* Overlay Grainé pour texture papier/velours */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </motion.div>
    );
}