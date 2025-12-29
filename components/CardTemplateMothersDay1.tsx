'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Heart,
    Sparkles,
    Flower2,
    Star
} from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate1MothersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Mères' : 'Bonne Fête Maman')
        : 'Happy Mother\'s Day';
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#4a1942] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(233,30,99,0.4)] border-4 border-pink-200/20"
        >
            {/* Fond Rose Doux et Tendre */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-400 to-rose-600" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />

            {/* Pétales de Fleurs qui Tombent */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: '-5%',
                        }}
                        animate={{
                            y: ['0vh', '110vh'],
                            x: [0, Math.sin(i * 0.5) * 40],
                            rotate: [0, 360, 720],
                        }}
                        transition={{
                            duration: Math.random() * 12 + 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: Math.random() * 8,
                        }}
                    >
                        <Flower2
                            size={Math.random() * 15 + 10}
                            className="text-pink-300/40"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Papillons Délicats */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`butterfly-${i}`}
                        className="absolute text-white/30"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${20 + (i % 2) * 30}%`,
                        }}
                        animate={{
                            x: [0, 30, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <span className="text-2xl">🦋</span>
                    </motion.div>
                ))}
            </div>

            {/* Cœurs Flottants */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`heart-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0.8, 1.2, 0.8],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Heart
                            size={Math.random() * 12 + 8}
                            className="text-rose-300/30"
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Floral Délicat */}
            <div className="absolute inset-6 border-2 border-pink-100/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-pink-100"><Flower2 size={24} /></div>
            <div className="absolute top-4 right-4 text-pink-100"><Flower2 size={24} /></div>
            <div className="absolute bottom-4 left-4 text-rose-200"><Heart size={24} fill="currentColor" /></div>
            <div className="absolute bottom-4 right-4 text-rose-200"><Heart size={24} fill="currentColor" /></div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header avec Couronne de Fleurs */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        <Flower2 className="text-pink-100 w-5 h-5" />
                        <Heart className="text-rose-100 w-4 h-4" fill="currentColor" />
                        <Flower2 className="text-pink-100 w-5 h-5" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-50 via-pink-100 to-rose-200 drop-shadow-[0_0_20px_rgba(255,182,193,0.6)]">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait ou Nom avec Décoration Florale */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            <motion.div
                                className="absolute inset-0 bg-pink-300/40 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-pink-100 shadow-[0_0_30px_rgba(233,30,99,0.5)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Couronne de Fleurs Autour */}
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                    }}
                                    animate={{
                                        rotate: [0 + (i * 45), 360 + (i * 45)],
                                        x: [0, 90 * Math.cos((i * Math.PI) / 4)],
                                        y: [0, 90 * Math.sin((i * Math.PI) / 4)],
                                    }}
                                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                >
                                    <Flower2 size={14} className="text-pink-200" />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-pink-50 tracking-tighter drop-shadow-[0_5px_15px_rgba(233,30,99,0.5)]">
                                {name}
                            </h2>
                            <motion.div
                                className="w-12 h-1 bg-gradient-to-r from-pink-200 to-rose-300 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(233,30,99,0.6)]"
                                animate={{ scaleX: [1, 1.3, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    )}
                </motion.div>

                {/* Zone du Poème avec Fond Doux */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-sm"
                >
                    <div className="relative p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-pink-100/40 shadow-2xl overflow-hidden group">
                        <motion.div
                            className="absolute -bottom-6 -right-6 text-rose-200/10"
                            animate={{
                                rotate: [0, 20, -20, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            <Heart size={100} fill="currentColor" />
                        </motion.div>
                        <div className="absolute top-4 left-4 text-pink-200/10">
                            <Flower2 size={50} />
                        </div>

                        <p className="text-pink-50 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer Tendre */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 border-2 border-pink-100/50 flex items-center justify-center shadow-lg"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    y: [0, -4, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            >
                                <Heart size={11} className="text-white" fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-pink-100/80">
                        Avec Tendresse ♥
                    </span>
                </motion.div>
            </div>

            {/* Overlay Doux */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/light-wool.png')]" />
        </motion.div>
    );
}