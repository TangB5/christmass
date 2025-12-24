'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Diamond, Star, Snowflake, Zap } from 'lucide-react';

interface CardTemplate4Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate4({ name, poem, imageUrl, language }: CardTemplate4Props) {
    const title = language === 'fr' ? 'Meilleurs Vœux' : 'Season\'s Greetings';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Elegant Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="elegant" width="60" height="60" patternUnits="userSpaceOnUse">
                            <circle cx="30" cy="30" r="1" fill="white"/>
                            <circle cx="0" cy="0" r="1" fill="white"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#elegant)" />
                </svg>
            </div>

            {/* Subtle Golden Particles (Lucide Stars) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-christmas-gold/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Sparkles size={Math.random() * 12 + 4} />
                    </motion.div>
                ))}
            </div>

            {/* Elegant Border */}
            <div className="absolute inset-6">
                <div className="w-full h-full border border-christmas-gold/20 rounded-lg backdrop-shadow-sm" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-between p-10 z-10">

                {/* Elegant Header */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center space-y-4"
                >
                    <div className="flex justify-center items-center gap-4">
                        <motion.div
                            className="w-16 h-px bg-gradient-to-r from-transparent via-christmas-gold to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                        <Diamond className="text-christmas-gold w-4 h-4 fill-christmas-gold animate-pulse" />
                        <motion.div
                            className="w-16 h-px bg-gradient-to-r from-transparent via-christmas-gold to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                    </div>
                    <h1 className="text-4xl font-serif text-christmas-gold tracking-[0.2em] uppercase">
                        {title}
                    </h1>
                </motion.div>

                {/* Centered Image or Name */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            <div className="absolute inset-0 bg-christmas-gold/10 blur-2xl rounded-full group-hover:bg-christmas-gold/20 transition-all" />
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border border-christmas-gold/50 shadow-[0_0_30px_rgba(196,30,58,0.2)]">
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <Snowflake className="absolute -top-2 -right-2 text-christmas-gold/40 w-8 h-8 rotate-12" />
                        </div>
                    ) : (
                        <motion.h2
                            className="text-7xl font-serif text-christmas-gold text-center tracking-tighter"
                            animate={{
                                textShadow: [
                                    '0 0 15px rgba(255, 215, 0, 0.3)',
                                    '0 0 25px rgba(255, 215, 0, 0.5)',
                                    '0 0 15px rgba(255, 215, 0, 0.3)',
                                ],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            {name}
                        </motion.h2>
                    )}
                </motion.div>

                {/* Elegant Poem */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full max-w-lg"
                >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-2xl relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4">
                            <Star className="text-christmas-gold w-5 h-5 fill-christmas-gold" />
                        </div>

                        <p className="text-gray-300 text-center whitespace-pre-line leading-relaxed font-serif italic text-lg">
                            "{poem}"
                        </p>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gray-900 px-4">
                            <Star className="text-christmas-gold w-5 h-5 fill-christmas-gold" />
                        </div>
                    </div>
                </motion.div>

                {/* Footer Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-christmas-gold/40 text-[10px] tracking-[0.5em] uppercase">Est. 2024</span>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-[0.5px] bg-christmas-gold/30" />
                        <Zap className="text-christmas-gold w-3 h-3 fill-christmas-gold" />
                        <div className="w-12 h-[0.5px] bg-christmas-gold/30" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}