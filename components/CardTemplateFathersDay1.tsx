'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Star,
    Sparkles,
    Shield,
    Award,
    Heart
} from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate1FathersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {

    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Bonne Fête Papa')
        : 'Happy Father\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0a1929] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(25,118,210,0.4)] border-4 border-blue-200/20"
        >
            {/* Fond Bleu Élégant et Fort */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-600 to-blue-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(66,165,245,0.2)_0%,transparent_60%)]" />

            {/* Motif Géométrique Moderne */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>

            {/* Étoiles de Fierté */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Star
                            size={Math.random() * 10 + 6}
                            className="text-blue-200"
                            fill="currentColor"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Badges Flottants */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={`badge-${i}`}
                        className="absolute text-blue-300/20"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 2) * 40}%`,
                        }}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Award size={30 + i * 3} />
                    </motion.div>
                ))}
            </div>

            {/* Lueurs Brillantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`glow-${i}`}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 0.6, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Sparkles className="text-cyan-300" size={8} />
                    </motion.div>
                ))}
            </div>

            {/* Cadre Fort et Élégant */}
            <div className="absolute inset-6 border-2 border-blue-200/40 rounded-[1.5rem]" />
            <div className="absolute top-4 left-4 text-blue-200"><Shield size={24} /></div>
            <div className="absolute top-4 right-4 text-blue-200"><Star size={24} fill="currentColor" /></div>
            <div className="absolute bottom-4 left-4 text-cyan-200"><Award size={24} /></div>
            <div className="absolute bottom-4 right-4 text-blue-200"><Heart size={24} fill="currentColor" /></div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10 text-center">

                {/* Header Distingué */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <motion.div
                        className="flex items-center justify-center gap-2 mb-3"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="h-[1px] w-8 bg-blue-200/60" />
                        <Shield className="text-blue-200 w-5 h-5" />
                        <div className="h-[1px] w-8 bg-blue-200/60" />
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-100 via-blue-200 to-cyan-300 drop-shadow-[0_0_20px_rgba(66,165,245,0.5)]">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait ou Nom avec Badge d'Honneur */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 blur-2xl rounded-full scale-110"
                                animate={{
                                    scale: [1.1, 1.3, 1.1],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <div className="relative w-40 h-40 rounded-full border-[6px] border-blue-200 shadow-[0_0_30px_rgba(25,118,210,0.6)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                            {/* Badge d'Excellence */}
                            <motion.div
                                className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-2 border-2 border-white shadow-lg"
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <Award size={20} className="text-white" />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-200 tracking-tighter drop-shadow-[0_5px_15px_rgba(25,118,210,0.5)]">
                                {name}
                            </h2>
                            <motion.div
                                className="w-16 h-1 bg-gradient-to-r from-blue-300 to-cyan-400 mx-auto mt-2 rounded-full shadow-[0_0_15px_rgba(66,165,245,0.8)]"
                                animate={{ scaleX: [1, 1.3, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </div>
                    )}
                </motion.div>

                {/* Zone du Poème Sophistiqué */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="w-full max-w-sm"
                >
                    <div className="relative p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-blue-200/30 shadow-2xl overflow-hidden group">
                        <motion.div
                            className="absolute top-2 right-2 text-blue-300/10"
                            animate={{
                                rotate: [0, -10, 10, 0],
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <Shield size={70} />
                        </motion.div>
                        <div className="absolute -bottom-4 -left-4 text-cyan-300/10">
                            <Star size={60} fill="currentColor" />
                        </div>

                        <p className="text-blue-50 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
                            {poem}
                        </p>
                    </div>
                </motion.div>

                {/* Footer Distinguished */}
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
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-blue-100/50 flex items-center justify-center shadow-lg"
                                animate={{
                                    y: [0, -5, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            >
                                <Star size={11} className="text-white" fill="currentColor" />
                            </motion.div>
                        ))}
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-blue-100/80">
                        Avec Admiration
                    </span>
                </motion.div>
            </div>

            {/* Overlay Élégant */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]" />
        </motion.div>
    );
}