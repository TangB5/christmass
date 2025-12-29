'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Star,
    PartyPopper,
    Clock,
    Zap
} from 'lucide-react';

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate1NewYear({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Bonne Année' : 'Happy New Year';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0a0a1a] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10"
        >
            {/* Fond Nuit Étoilée avec Or */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)]" />

            {/* Animation d'Étoiles Scintillantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Star size={Math.random() * 8 + 4} className="text-yellow-300" fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Feux d'Artifice Animés */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`firework-${i}`}
                        className="absolute"
                        style={{
                            left: `${20 + (i % 4) * 20}%`,
                            top: `${20 + Math.floor(i / 4) * 40}%`,
                        }}
                        animate={{
                            scale: [0, 2, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    >
                        <Zap className="text-yellow-400" size={20} />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Doré Élégant */}
            <div className="absolute inset-6 border-2 border-yellow-400/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-yellow-300"><PartyPopper size={24} /></div>
            <div className="absolute top-4 right-4 text-yellow-300"><PartyPopper size={24} /></div>
            <div className="absolute bottom-4 left-4 text-yellow-300"><Sparkles size={24} /></div>
            <div className="absolute bottom-4 right-4 text-yellow-300"><Sparkles size={24} /></div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Clock className="text-yellow-300 w-6 h-6" />
                        <span className="text-yellow-300 text-xs font-bold">2026</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-orange-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait ou Nom */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.5)] overflow-hidden">
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
                            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300 tracking-tighter drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                                {name}
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-2 rounded-full shadow-[0_0_15px_gold]" />
                        </div>
                    )}
                </motion.div>

                {/* Zone du Poème */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-sm"
                >
                    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-yellow-900/20 to-purple-900/20 backdrop-blur-xl border border-yellow-400/30 shadow-2xl overflow-hidden group">
                        <motion.div
                            className="absolute top-2 right-2 text-yellow-300/10"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles size={60} />
                        </motion.div>

                        <p className="text-yellow-50 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-6"
                >
                    <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border border-yellow-300/50 flex items-center justify-center text-white shadow-lg"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            >
                                <Star size={12} fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-yellow-300/80">
                        Nouvelle Année 2025
                    </span>
                </motion.div>
            </div>

            {/* Overlay Scintillant */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </motion.div>
    );
}