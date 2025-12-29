'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    Sparkles,
    Star,
    Flower2
} from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate1Valentine({ name, poem, imageUrl, language ,isBusiness = false}: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Joyeuse Saint-Valentin' : 'Je t\'aime')
        : (isBusiness ? 'Happy Valentine\'s Day' : 'I Love You');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#4a0e0e] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(255,20,68,0.4)] border-4 border-pink-200/20"
        >
            {/* Fond Rose/Rouge Romantique */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-600 to-red-700" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,182,193,0.3)_0%,transparent_50%)]" />

            {/* Cœurs Flottants */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${-10 + Math.random() * 20}%`,
                        }}
                        animate={{
                            y: ['0vh', '110vh'],
                            x: [0, Math.sin(i) * 30],
                            rotate: [0, 360],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 5,
                        }}
                    >
                        <Heart
                            size={Math.random() * 20 + 15}
                            className="text-pink-200/30"
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Particules Scintillantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`sparkle-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Sparkles className="text-pink-200" size={8} />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Romantique */}
            <div className="absolute inset-6 border-2 border-pink-200/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-pink-200"><Heart size={24} fill="currentColor" /></div>
            <div className="absolute top-4 right-4 text-pink-200"><Heart size={24} fill="currentColor" /></div>
            <div className="absolute bottom-4 left-4 text-pink-200"><Flower2 size={24} /></div>
            <div className="absolute bottom-4 right-4 text-pink-200"><Flower2 size={24} /></div>

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
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Heart className="text-pink-100 w-5 h-5" fill="currentColor" />
                        <div className="h-[1px] w-8 bg-pink-200/50" />
                        <Heart className="text-pink-100 w-5 h-5" fill="currentColor" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 drop-shadow-[0_0_20px_rgba(255,182,193,0.8)]">
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
                                className="absolute inset-0 bg-pink-300/50 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-pink-200 shadow-[0_0_30px_rgba(255,182,193,0.6)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Cœurs autour du portrait */}
                            <motion.div
                                className="absolute -top-2 -right-2"
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Heart size={20} className="text-pink-200" fill="currentColor" />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-pink-50 tracking-tighter drop-shadow-[0_5px_15px_rgba(255,20,68,0.5)]">
                                {name}
                            </h2>
                            <motion.div
                                className="w-12 h-1 bg-pink-200 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(255,182,193,0.8)]"
                                animate={{ scaleX: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
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
                    <div className="relative p-6 rounded-3xl bg-white/15 backdrop-blur-xl border border-pink-200/30 shadow-2xl overflow-hidden group">
                        <motion.div
                            className="absolute -top-4 -right-4 text-pink-200/10"
                            animate={{
                                rotate: [0, 10, -10, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Heart size={80} fill="currentColor" />
                        </motion.div>

                        <p className="text-pink-50 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex items-center gap-4"
                >
                    <div className="flex -space-x-2">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-red-400 border border-pink-200/50 flex items-center justify-center text-white shadow-lg"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3
                                }}
                            >
                                <Heart size={12} fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pink-100/80">
                        Avec Amour ♥
                    </span>
                </motion.div>
            </div>

            {/* Overlay Romantique */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/sakura.png')]" />
        </motion.div>
    );
}