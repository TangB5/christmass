'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Award } from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate4FathersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Papa')
        : ' DAD\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Pattern Géométrique Tech */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant-dad" width="70" height="70" patternUnits="userSpaceOnUse">
                            <path d="M35 10 L50 35 L35 60 L20 35 Z" stroke="white" fill="none" strokeWidth="0.5"/>
                            <circle cx="35" cy="35" r="2" fill="white"/>
                            <path d="M10 10 L20 10 L15 20 Z" fill="white" opacity="0.3"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant-dad)" />
                </svg>
            </div>

            {/* Lignes Géométriques Lumineuses */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                        style={{
                            left: 0,
                            right: 0,
                            top: `${(i * 5)}%`,
                            opacity: 0.1,
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            {/* Particules Chrome */}
            <div className="absolute inset-0">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: i % 2 === 0 ? '#93C5FD' : '#38BDF8',
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
            <div className="absolute inset-6 border border-cyan-400/30 rounded-lg" />

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">
                {/* Header Distinguished */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-3"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Shield className="text-cyan-400 w-10 h-10 mx-auto" />
                    </motion.div>
                    <div className="flex items-center justify-center gap-3">
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                        <span className="text-cyan-400 text-xl">◆</span>
                        <motion.div
                            className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                    </div>
                    <h1 className="text-5xl font-serif text-cyan-400 tracking-wide">
                        {title}
                    </h1>
                </motion.div>

                {/* Image/Nom avec Badge d'Honneur */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-2xl rounded-full"
                                animate={{
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <div className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-cyan-400 shadow-2xl">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Badge Rotatif d'Excellence */}
                            <motion.div
                                className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 border-2 border-cyan-400 shadow-lg"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Award className="text-white w-6 h-6" />
                            </motion.div>
                            {/* Étoiles d'Honneur */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        rotate: [0 + i * 90, 360 + i * 90],
                                        x: [0, 100 * Math.cos((i * Math.PI) / 2)],
                                        y: [0, 100 * Math.sin((i * Math.PI) / 2)],
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                >
                                    <Star className="text-cyan-400 w-3 h-3" fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 text-center"
                            animate={{
                                textShadow: [
                                    '0 0 20px rgba(34, 211, 238, 0.5)',
                                    '0 0 30px rgba(34, 211, 238, 0.7)',
                                    '0 0 20px rgba(34, 211, 238, 0.5)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Poème Distinguished */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-cyan-400/20 shadow-2xl">
                        <div className="flex justify-center mb-4">
                            <Shield className="text-cyan-400 w-5 h-5" />
                        </div>
                        <p className="text-cyan-100 text-center whitespace-pre-line leading-loose font-serif italic">
                            {poem}
                        </p>
                        <div className="flex justify-center mt-4">
                            <Star className="text-cyan-400 w-5 h-5" fill="currentColor" />
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
                        className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                    <span className="text-cyan-400 text-sm">◆</span>
                    <motion.div
                        className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    />
                </motion.div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        </motion.div>
    );
}