'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sparkles } from 'lucide-react';

interface CardTemplate4Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate4Easter({ name, poem, imageUrl, language }: CardTemplate4Props) {
    const title = language === 'fr' ? 'Joyeuses Pâques' : 'Happy Easter';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Pattern Floral Art Déco */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant-easter" width="80" height="80" patternUnits="userSpaceOnUse">
                            <circle cx="40" cy="40" r="3" fill="white"/>
                            <path d="M40 30 L45 35 L40 40 L35 35 Z" fill="white" opacity="0.5"/>
                            <path d="M30 40 L35 45 L40 40 L35 35 Z" fill="white" opacity="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant-easter)" />
                </svg>
            </div>

            {/* Paillettes Printanières */}
            <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: i % 3 === 0 ? '#E9D5FF' : i % 3 === 1 ? '#FEF08A' : '#86EFAC',
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
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
            <div className="absolute inset-6 border border-purple-300/30 rounded-lg" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">
                {/* Header Printanier */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-3"
                >
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        <Flower className="text-purple-300 w-5 h-5" />
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <h1 className="text-4xl font-serif text-purple-300 tracking-wide">
                        {title}
                    </h1>
                </motion.div>

                {/* Image/Nom avec Couronne Florale */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-yellow-400/20 blur-2xl rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-purple-300 shadow-2xl">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Fleurs en Couronne */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        rotate: [0 + i * 45, 360 + i * 45],
                                        x: [0, 95 * Math.cos((i * Math.PI) / 4)],
                                        y: [0, 95 * Math.sin((i * Math.PI) / 4)],
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                >
                                    <Flower className="text-yellow-300 w-3 h-3" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-yellow-300 to-green-300 text-center"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(216, 180, 254, 0.5)',
                                    '0 0 30px rgba(216, 180, 254, 0.7)',
                                    '0 0 20px rgba(216, 180, 254, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Poème Printanier */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-purple-300/20 shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Flower className="text-purple-300 w-5 h-5" />
                        </div>
                        <p className="text-purple-100 text-center whitespace-pre-line leading-loose font-serif italic">
                            {poem}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Sparkles className="text-yellow-300 w-5 h-5" />
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
                        className="w-8 h-px bg-gradient-to-r from-transparent to-purple-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                    <span className="text-purple-300 text-sm">✦</span>
                    <motion.div
                        className="w-8 h-px bg-gradient-to-l from-transparent to-purple-300"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/flowers.png')]" />
        </motion.div>
    );
}