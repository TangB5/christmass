'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    Sparkles,
    TreePine,
    Gift,
    Zap,
    Snowflake,
    Compass,
    CircleDot
} from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate2({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? 'Joyeuses Fêtes' : 'Happy Holidays';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#022c22] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
            {/* 1. Fond Dynamique Émeraude */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#065f46_0%,transparent_50%),radial-gradient(circle_at_100%_100%,#064e3b_0%,#022c22_100%)]" />

            {/* 2. Pattern Géométrique "Tech-Winter" */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />

            {/* 3. Icônes Flottantes (Éclats) */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-emerald-400/30"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
                    >
                        <Sparkles size={i * 5 + 10} />
                    </motion.div>
                ))}
            </div>

            {/* 4. Contenu Layout Moderne */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Header : Minimaliste & Puissant */}
                <div className="flex justify-between items-start mb-8">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <CircleDot size={12} className="text-christmas-gold animate-pulse" />
                            <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-300/60 font-bold">Special Edition</span>
                        </div>
                        <h1 className="text-4xl font-black text-white tracking-tighter leading-none">
                            {title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? "text-christmas-gold block" : "block"}>
                                    {word}
                                </span>
                            ))}
                        </h1>
                    </motion.div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-christmas-gold/20"
                    >
                        <Compass size={60} strokeWidth={1} />
                    </motion.div>
                </div>

                {/* Center : Image Preview avec Effet Néon */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-3xl group-hover:bg-emerald-500/40 transition-colors" />
                            <div className="relative w-44 h-44 rounded-3xl overflow-hidden border border-white/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                <Image src={imageUrl} alt={name} fill className="object-cover" />
                            </div>
                        </div>
                    ) : (
                        <div className="relative py-10">
                            <h2 className="text-7xl font-black text-white/10 uppercase tracking-tighter absolute inset-0 flex items-center justify-center scale-150">
                                {name}
                            </h2>
                            <h2 className="text-5xl font-black text-white relative z-10 tracking-tight drop-shadow-2xl">
                                {name}
                            </h2>
                        </div>
                    )}
                </motion.div>

                {/* Footer : Bloc Poème en Verre Dépoli */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-auto"
                >
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden group">
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex justify-center gap-4 mb-4 text-emerald-500/40">
                            <TreePine size={16} />
                            <Snowflake size={16} className="animate-spin-slow" />
                            <Gift size={16} />
                        </div>

                        <p className="text-emerald-50/90 text-center text-sm md:text-base leading-relaxed font-light tracking-wide italic relative z-10">
                            "{poem}"
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-2">
                            <div className="h-[1px] w-4 bg-emerald-500/30" />
                            <Zap size={10} className="text-christmas-gold fill-christmas-gold" />
                            <div className="h-[1px] w-4 bg-emerald-500/30" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}