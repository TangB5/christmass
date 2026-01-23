'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cake, PartyPopper, Gift, Star } from 'lucide-react';

interface CardTemplate3Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate3Birthday({ name, poem, imageUrl, language }: CardTemplate3Props) {
    const title = language === 'fr' ? 'Bon Anniversaire !' : 'Happy Birthday!';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FFFAF0] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
        >
            {/* 1. Fond Dynamique Festif */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100" />

            {/* Cercles de couleurs "Lollipop" */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-64 h-64 bg-pink-300/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"
            />

            {/* 2. Éléments Décoratifs (Confettis statiques + Emojis discrets) */}
            <div className="absolute inset-0 pointer-events-none">
                {['🎈', '✨', '🎉', '🎁'].map((emoji, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-3xl"
                        style={{ left: `${10 + i * 25}%`, top: `${15 + (i % 2) * 50}%` }}
                        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-10 px-6 z-10">

                {/* Header : Titre avec effet Pop */}
                <div className="text-center">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="inline-block bg-white px-6 py-2 rounded-full shadow-sm border border-pink-100 mb-4"
                    >
                        <div className="flex items-center gap-2">
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-500">Special Day</span>
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                        </div>
                    </motion.div>

                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 leading-tight">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Central & Joyeux */}
                <div className="relative">
                    <motion.div
                        animate={{ rotate: [0, 3, -3, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="relative z-10"
                    >
                        <div className="p-3 bg-white rounded-[2rem] shadow-xl rotate-3">
                            <div className="w-40 h-40 rounded-[1.5rem] overflow-hidden bg-slate-100">
                                {imageUrl ? (
                                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-orange-300">
                                        <Cake size={60} className="text-white" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Badges Flottants */}
                        <div className="absolute -bottom-2 -right-4 bg-yellow-400 text-white p-3 rounded-2xl shadow-lg -rotate-12 border-4 border-white">
                            <PartyPopper size={20} />
                        </div>
                    </motion.div>

                    {/* Nom de la personne */}
                    <div className="mt-6 text-center">
                        <h2 className="text-3xl font-black text-slate-800 tracking-tighter">
                            {name}
                        </h2>
                        <div className="h-1.5 w-12 bg-pink-500 mx-auto mt-1 rounded-full" />
                    </div>
                </div>

                {/* Message : Glassmorphism pour le confort de lecture */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full max-w-sm bg-white/60 backdrop-blur-md border border-white rounded-[2rem] p-6 shadow-lg"
                >
                    <div className="flex justify-center gap-2 mb-3">
                        <Gift size={16} className="text-blue-500" />
                        <div className="h-[1px] w-12 bg-slate-200 self-center" />
                        <Cake size={16} className="text-pink-500" />
                    </div>

                    <p className="text-slate-700 text-center font-medium leading-relaxed italic">
                        "{poem}"
                    </p>
                </motion.div>

                {/* Footer discret */}
                <p className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                    Celebration 2026
                </p>
            </div>
        </motion.div>
    );
}