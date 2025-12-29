'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

interface CardTemplate4Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate4NewYear({ name, poem, imageUrl, language }: CardTemplate4Props) {
    const title = language === 'fr' ? 'Bonne Année' : 'Happy New Year';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-950 via-indigo-950 to-black rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Pattern Élégant */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant-ny" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="2" fill="white"/>
                            <circle cx="0" cy="0" r="2" fill="white"/>
                            <circle cx="60" cy="60" r="2" fill="white"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant-ny)" />
                </svg>
            </div>

            {/* Particules Dorées Subtiles */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Bordure Élégante */}
            <div className="absolute inset-6 border border-yellow-400/30 rounded-lg" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">
                {/* Header Élégant avec 2025 */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-3"
                >
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        <span className="text-yellow-400 text-xl">✦</span>
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <motion.div
                        className="text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(250, 204, 21, 0.5)',
                                '0 0 30px rgba(250, 204, 21, 0.7)',
                                '0 0 20px rgba(250, 204, 21, 0.5)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        2026
                    </motion.div>
                    <h1 className="text-3xl font-serif text-yellow-400 tracking-wide">
                        {title}
                    </h1>
                </motion.div>

                {/* Image/Nom Centré */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-yellow-400 shadow-2xl">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 text-center"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(250, 204, 21, 0.5)',
                                    '0 0 30px rgba(250, 204, 21, 0.7)',
                                    '0 0 20px rgba(250, 204, 21, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Poème Élégant */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-yellow-400/20 shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Sparkles className="text-yellow-400" size={20} />
                        </div>
                        <p className="text-gray-200 text-center whitespace-pre-line leading-loose font-serif italic">
                            {poem}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Star className="text-yellow-400" size={20} fill="currentColor" />
                        </div>
                    </div>
                </motion.div>

                {/* Footer Décoratif */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex items-center gap-3"
                >
                    <motion.div
                        className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                    <span className="text-yellow-400 text-sm">✦</span>
                    <motion.div
                        className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Overlay Texturé */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </motion.div>
    );
}