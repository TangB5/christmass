'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Trophy, PartyPopper } from 'lucide-react';

interface CardTemplate3Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate3NewYear({ name, poem, imageUrl, language }: CardTemplate3Props) {
    const title = language === 'fr' ? 'Bonne Année' : 'Happy New Year';
    const year = "2026";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
            {/* Effets de lumière en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] bg-amber-500/20 blur-[100px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-purple-600/20 blur-[100px] rounded-full"
                />
            </div>

            {/* Particules de Confettis Dorés (Subtils) */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, 20, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between p-8 z-10">

                {/* Header Élégant */}
                <div className="text-center mt-4">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
                    >
                        <Star size={12} fill="currentColor" />
                        Grand Cru {year}
                        <Star size={12} fill="currentColor" />
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-6xl font-black italic text-white leading-none tracking-tighter uppercase"
                        style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    >
                        {title.split(' ')[0]} <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700">
                            {title.split(' ')[1]}
                        </span>
                    </motion.h1>
                </div>

                {/* Photo de profil type "Badge Studio" */}
                <motion.div
                    whileHover={{ scale: 1.05, rotate: 0 }}
                    className="relative w-40 h-40 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-[2.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 shadow-xl" />
                    <div className="absolute inset-0.5 bg-[#020617] rounded-[2.4rem] rotate-6 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                        {imageUrl ? (
                            <img src={imageUrl} className="w-full h-full object-cover" alt={name} />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-white/5">
                                <span className="text-5xl font-black text-amber-500">{name[0]}</span>
                            </div>
                        )}
                    </div>

                    {/* Badge Nom */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1.5 rounded-xl shadow-2xl">
                        <span className="text-black text-xs font-black uppercase tracking-widest whitespace-nowrap">
                            {name}
                        </span>
                    </div>
                </motion.div>

                {/* Boîte de texte Minimaliste */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-[2rem] p-6 mb-2"
                >
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <Sparkles key={i} size={14} className="text-amber-500/50" />
                        ))}
                    </div>
                    <p className="text-gray-200 text-center italic font-serif text-lg leading-relaxed px-2">
                        "{poem}"
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                    </div>
                </motion.div>

                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">
                    Sende Studio • {year}
                </div>
            </div>
        </motion.div>
    );
}