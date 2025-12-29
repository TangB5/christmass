'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate4Valentine({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Joyeuse Saint-Valentin' : 'Mon Amour')
        : (isBusiness ? 'Happy Valentine\'s Day' : 'My Love');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-rose-950 via-red-950 to-slate-950 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Pattern Romantique */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant-val" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M30 15 Q35 10, 40 15 Q45 20, 40 25 L30 35 L20 25 Q15 20, 20 15 Q25 10, 30 15" fill="white" opacity="0.3"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant-val)" />
                </svg>
            </div>

            {/* Pétales de Rose Dorés */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-rose-300 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* Bordure Élégante */}
            <div className="absolute inset-6 border border-rose-300/30 rounded-lg" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">
                {/* Header Romantique */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-3"
                >
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        <Heart className="text-rose-300 w-5 h-5" fill="currentColor" />
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <h1 className="text-4xl font-serif text-rose-300 tracking-wide italic">
                        {title}
                    </h1>
                </motion.div>

                {/* Image/Nom avec Halo Romantique */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-rose-400/30 blur-2xl rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-rose-300 shadow-2xl">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Cœurs Dorés Autour */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        rotate: [0 + i * 60, 360 + i * 60],
                                        x: [0, 90 * Math.cos((i * Math.PI) / 3)],
                                        y: [0, 90 * Math.sin((i * Math.PI) / 3)],
                                        opacity: [0.3, 0.7, 0.3],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                >
                                    <Heart className="text-rose-300 w-3 h-3" fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-300 text-center"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(253, 164, 175, 0.5)',
                                    '0 0 30px rgba(253, 164, 175, 0.7)',
                                    '0 0 20px rgba(253, 164, 175, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Poème Romantique */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-rose-300/20 shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Heart className="text-rose-300 w-5 h-5" fill="currentColor" />
                        </div>
                        <p className="text-rose-100 text-center whitespace-pre-line leading-loose font-serif italic">
                            {poem}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Sparkles className="text-rose-300 w-5 h-5" />
                        </div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex items-center gap-3"
                >
                    <motion.div
                        className="w-8 h-px bg-gradient-to-r from-transparent to-rose-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                    <Heart className="text-rose-300 w-3 h-3" fill="currentColor" />
                    <motion.div
                        className="w-8 h-px bg-gradient-to-l from-transparent to-rose-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/sakura.png')]" />
        </motion.div>
    );
}