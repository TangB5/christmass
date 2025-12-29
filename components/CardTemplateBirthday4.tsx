'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Sparkles } from 'lucide-react';

interface CardTemplate4Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate4Birthday({ name, poem, imageUrl, language }: CardTemplate4Props) {
    const title = language === 'fr' ? 'Anniversaire' : 'Birthday';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-950 via-blue-950 to-black rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Pattern Luxueux */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant-bday" width="70" height="70" patternUnits="userSpaceOnUse">
                            <circle cx="35" cy="35" r="2" fill="white"/>
                            <path d="M35 25 L40 30 L35 35 L30 30 Z" fill="white" opacity="0.4"/>
                            <circle cx="10" cy="10" r="1.5" fill="white"/>
                            <circle cx="60" cy="60" r="1.5" fill="white"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant-bday)" />
                </svg>
            </div>

            {/* Étoiles Dorées de Célébration */}
            <div className="absolute inset-0">
                {[...Array(35)].map((_, i) => {
                    const colors = ['#FBBF24', '#F59E0B', '#60A5FA', '#F472B6', '#A78BFA'];
                    return (
                        <motion.div
                            key={i}
                            className="absolute"
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
                        >
                            <Star
                                className={`w-${Math.random() > 0.5 ? '1' : '2'} h-${Math.random() > 0.5 ? '1' : '2'}`}
                                style={{ color: colors[i % colors.length] }}
                                fill="currentColor"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Spotlight Doré */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-yellow-400/10 to-transparent rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Bordure Élégante */}
            <div className="absolute inset-6 border border-yellow-400/30 rounded-lg" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">
                {/* Header avec Couronne */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-3"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Award className="text-yellow-400 w-12 h-12 mx-auto" />
                    </motion.div>
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        <span className="text-yellow-400 text-xl">★</span>
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <h1 className="text-4xl font-serif text-yellow-400 tracking-wide">
                        {title}
                    </h1>
                </motion.div>

                {/* Image/Nom avec Aura Célébration */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full"
                                animate={{
                                    scale: [1, 1.4, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 6, repeat: Infinity }}
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
                            {/* Étoiles Tournantes */}
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
                                        scale: [1, 1.3, 1],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                >
                                    <Star className="text-yellow-400 w-4 h-4" fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-400 text-center"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(251, 191, 36, 0.5)',
                                    '0 0 30px rgba(251, 191, 36, 0.7)',
                                    '0 0 20px rgba(251, 191, 36, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Poème Célébration */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-yellow-400/20 shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Sparkles className="text-yellow-400 w-5 h-5" />
                        </div>
                        <p className="text-gray-200 text-center whitespace-pre-line leading-loose font-serif italic">
                            {poem}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Star className="text-yellow-400 w-5 h-5" fill="currentColor" />
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
                        className="w-8 h-px bg-gradient-to-r from-transparent to-yellow-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                    <span className="text-yellow-400 text-sm">★</span>
                    <motion.div
                        className="w-8 h-px bg-gradient-to-l from-transparent to-yellow-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </motion.div>
    );
}