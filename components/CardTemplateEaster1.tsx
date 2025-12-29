'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Star,
    Flower,
    Sun,
    Cloud
} from 'lucide-react';

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate1Easter({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Joyeuses Pâques' : 'Happy Easter';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#2d1b4e] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(156,39,176,0.4)] border-4 border-yellow-200/20"
        >
            {/* Fond Printanier Violet/Jaune */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-purple-500 to-purple-800" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,235,59,0.2)_0%,transparent_50%)]" />

            {/* Nuages Doux */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={`cloud-${i}`}
                        className="absolute"
                        style={{
                            left: `${20 + i * 25}%`,
                            top: `${10 + (i % 2) * 20}%`,
                        }}
                        animate={{
                            x: [0, 20, 0],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Cloud className="text-white/30" size={40 + i * 10} />
                    </motion.div>
                ))}
            </div>

            {/* Œufs Colorés qui Tombent */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => {
                    const colors = ['text-yellow-300', 'text-pink-300', 'text-blue-300', 'text-green-300'];
                    return (
                        <motion.div
                            key={i}
                            className={`absolute ${colors[i % 4]}`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-5%',
                            }}
                            animate={{
                                y: ['0vh', '110vh'],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: Math.random() * 8,
                            }}
                        >
                            <div className="w-4 h-5 rounded-full opacity-50" style={{ background: 'currentColor' }} />
                        </motion.div>
                    );
                })}
            </div>

            {/* Fleurs Printanières */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`flower-${i}`}
                        className="absolute text-yellow-300/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Flower size={15 + Math.random() * 10} />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Printanier */}
            <div className="absolute inset-6 border-2 border-yellow-300/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-yellow-300"><Flower size={24} /></div>
            <div className="absolute top-4 right-4 text-yellow-300"><Flower size={24} /></div>
            <div className="absolute bottom-4 left-4 text-green-300"><Flower size={24} /></div>
            <div className="absolute bottom-4 right-4 text-green-300"><Flower size={24} /></div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header avec Soleil */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-3"
                        animate={{
                            rotate: [0, 360],
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Sun className="text-yellow-300 w-6 h-6" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-300 to-green-300 drop-shadow-[0_0_15px_rgba(255,235,59,0.5)]">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <span className="text-yellow-300 text-2xl">🐰</span>
                        <span className="text-pink-300 text-2xl">🥚</span>
                        <span className="text-green-300 text-2xl">🌷</span>
                    </div>
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
                                className="absolute inset-0 bg-gradient-to-r from-yellow-300/30 to-purple-400/30 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 8, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-yellow-300 shadow-[0_0_30px_rgba(255,235,59,0.5)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Fleurs décoratives */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: `${i * 25}%`,
                                        left: i % 2 === 0 ? '-10px' : 'auto',
                                        right: i % 2 === 1 ? '-10px' : 'auto',
                                    }}
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                >
                                    <Flower size={16} className="text-pink-300" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-purple-300 tracking-tighter drop-shadow-[0_5px_15px_rgba(156,39,176,0.5)]">
                                {name}
                            </h2>
                            <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-green-400 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(255,235,59,0.8)]" />
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
                    <div className="relative p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-yellow-300/30 shadow-2xl overflow-hidden group">
                        <div className="absolute -bottom-4 -left-4 text-green-300/10">
                            <Flower size={80} />
                        </div>
                        <div className="absolute top-2 right-2 text-yellow-300/10">
                            <Sun size={60} />
                        </div>

                        <p className="text-white text-sm md:text-base leading-relaxed font-medium italic relative z-10">
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
                        {['bg-yellow-400', 'bg-pink-400', 'bg-purple-400', 'bg-green-400'].map((color, i) => (
                            <motion.div
                                key={i}
                                className={`w-8 h-8 rounded-full ${color} border-2 border-white/50 flex items-center justify-center shadow-lg`}
                                animate={{
                                    y: [0, -5, 0],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            >
                                <Sparkles size={10} className="text-white" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-yellow-200/80">
                        Printemps 2025
                    </span>
                </motion.div>
            </div>

            {/* Overlay Floral */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/flowers.png')]" />
        </motion.div>
    );
}