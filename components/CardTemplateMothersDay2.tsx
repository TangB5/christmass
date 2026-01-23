'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Heart, Sparkles, Wind } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate2MothersDay({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Mères' : 'Bonne Fête Maman')
        : 'Happy Mother\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-[#FFF5F7] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white"
        >
            {/* 1. Fond : Dégradé de Pétales Doux */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#FFEDF0_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFCCD5_0%,transparent_50%)] opacity-60" />

            {/* 2. Éléments Décoratifs : Fleurs en Parallaxe */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-200/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            rotate: [0, 45, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Flower2 size={60 + i * 20} strokeWidth={0.5} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col p-10 z-10 items-center justify-between">

                {/* Header : Élégance Soft-Touch */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center space-y-2"
                >
                    <div className="flex justify-center items-center gap-2 mb-1">
                        <Sparkles size={14} className="text-rose-400" />
                        <span className="text-[10px] font-bold text-rose-300 uppercase tracking-[0.4em]">Douceur & Amour</span>
                        <Sparkles size={14} className="text-rose-400" />
                    </div>
                    <h1 className="text-4xl font-serif italic text-rose-900 tracking-tight leading-tight">
                        {title}
                    </h1>
                </motion.div>

                {/* Section Image : Le Cadre Organique */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative"
                >
                    {/* Blob animé derrière l'image */}
                    <motion.div
                        animate={{
                            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                        }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute -inset-4 bg-pink-100/50 blur-xl"
                    />

                    <div className="relative p-2 bg-white rounded-[2rem] shadow-xl border border-rose-50 overflow-hidden">
                        <div className="w-44 h-44 rounded-[1.6rem] overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[1.1]" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-rose-50">
                                    <Heart size={64} className="text-rose-200 fill-rose-100" />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Badge flottant Butterfly */}
                    <motion.div
                        animate={{ x: [0, 5, 0], y: [0, -10, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-4 -right-4 text-3xl drop-shadow-md"
                    >
                        🦋
                    </motion.div>
                </motion.div>

                {/* Bloc Poème : La Note de Tendresse */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full bg-white/70 backdrop-blur-md border border-white rounded-[2.5rem] p-8 shadow-sm relative overflow-hidden"
                >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-rose-100">
                        <Wind size={40} />
                    </div>

                    <p className="text-rose-900 text-center font-serif italic leading-relaxed text-xl mb-6">
                        "{poem}"
                    </p>

                    <div className="flex flex-col items-center">
                        <div className="h-px w-8 bg-rose-200 mb-2" />
                        <span className="text-2xl font-serif text-rose-800 tracking-tighter lowercase">
                            {name}
                        </span>
                    </div>
                </motion.div>

                {/* Footer : Micro-icônes */}
                <div className="flex gap-6 opacity-20 text-rose-400">
                    <Heart size={12} fill="currentColor" />
                    <Heart size={12} fill="currentColor" />
                    <Heart size={12} fill="currentColor" />
                </div>
            </div>
        </motion.div>
    );
}