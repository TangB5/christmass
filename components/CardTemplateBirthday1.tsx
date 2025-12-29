'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Star,
    Gift,
    PartyPopper,
    Cake
} from 'lucide-react';

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate1Birthday({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Joyeux Anniversaire' : 'Happy Birthday';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#1a1a2e] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(255,152,0,0.4)] border-4 border-orange-200/20"
        >
            {/* Fond Festif Coloré */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-blue-600" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

            {/* Confettis Animés */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(30)].map((_, i) => {
                    const colors = ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400', 'bg-purple-400', 'bg-red-400'];
                    return (
                        <motion.div
                            key={i}
                            className={`absolute w-2 h-3 ${colors[i % 6]} rounded-sm`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-5%',
                            }}
                            animate={{
                                y: ['0vh', '110vh'],
                                x: [0, Math.sin(i) * 50, Math.cos(i) * 50],
                                rotate: [0, 360, 720],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: 'linear',
                                delay: Math.random() * 5,
                            }}
                        />
                    );
                })}
            </div>

            {/* Ballons Flottants */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => {
                    const colors = ['text-red-400', 'text-blue-400', 'text-yellow-400', 'text-green-400', 'text-purple-400', 'text-pink-400'];
                    return (
                        <motion.div
                            key={`balloon-${i}`}
                            className={`absolute ${colors[i]}`}
                            style={{
                                left: `${10 + i * 15}%`,
                                bottom: '-10%',
                            }}
                            animate={{
                                y: [0, -10, 0],
                                x: [0, Math.sin(i) * 10, 0],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <div className="relative">
                                <div className="w-8 h-10 rounded-full opacity-40" style={{ background: 'currentColor' }} />
                                <div className="w-[1px] h-12 bg-current opacity-30 mx-auto" />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Étoiles Scintillantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`star-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Star className="text-yellow-200" size={8} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Festif */}
            <div className="absolute inset-6 border-2 border-yellow-300/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-yellow-300"><PartyPopper size={24} /></div>
            <div className="absolute top-4 right-4 text-pink-300"><Gift size={24} /></div>
            <div className="absolute bottom-4 left-4 text-blue-300"><Sparkles size={24} /></div>
            <div className="absolute bottom-4 right-4 text-orange-300"><Cake size={24} /></div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header avec Animation */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-3"
                        animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <PartyPopper className="text-yellow-200 w-6 h-6" />
                        <Cake className="text-pink-200 w-6 h-6" />
                        <PartyPopper className="text-blue-200 w-6 h-6" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
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
                                className="absolute inset-0 bg-gradient-to-r from-orange-400/40 to-pink-400/40 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.4, 1.1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-white shadow-[0_0_30px_rgba(255,152,0,0.6)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Étoiles décoratives tournantes */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        rotate: [0 + (i * 90), 360 + (i * 90)],
                                        x: [0, 80 * Math.cos((i * Math.PI) / 2)],
                                        y: [0, 80 * Math.sin((i * Math.PI) / 2)],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Star size={12} className="text-yellow-300" fill="currentColor" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-200 to-blue-200 tracking-tighter drop-shadow-[0_5px_15px_rgba(255,152,0,0.5)]">
                                {name}
                            </h2>
                            <motion.div
                                className="w-16 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(255,152,0,0.8)]"
                                animate={{ scaleX: [1, 1.3, 1] }}
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
                    <div className="relative p-6 rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 shadow-2xl overflow-hidden group">
                        <motion.div
                            className="absolute top-2 right-2 text-yellow-300/10"
                            animate={{
                                rotate: [0, 360],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Gift size={60} />
                        </motion.div>

                        <p className="text-white text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer Festif */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="flex -space-x-2">
                        {['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400'].map((color, i) => (
                            <motion.div
                                key={i}
                                className={`w-8 h-8 rounded-full ${color} border-2 border-white/50 flex items-center justify-center shadow-lg`}
                                animate={{
                                    y: [0, -8, 0],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.1
                                }}
                            >
                                <Star size={10} className="text-white" fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-yellow-100/80">
                        Célébration Spéciale
                    </span>
                </motion.div>
            </div>

            {/* Overlay Festif */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        </motion.div>
    );
}