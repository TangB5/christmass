'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flower2, Bird, Sun } from 'lucide-react';

interface CardTemplate3Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate3Easter({ name, poem, imageUrl, language }: CardTemplate3Props) {
    const title = language === 'fr' ? 'Joyeuses Pâques' : 'Happy Easter';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#fdfcf0] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white"
        >
            {/* 1. Fond Dégradé Printanier */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-yellow-50 to-green-100" />

            {/* Formes organiques diffuses */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-200/40 rounded-full blur-[80px]"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-green-200/40 rounded-full blur-[80px]"
            />

            {/* 2. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-10 px-6 z-10">

                {/* Header : Titre & Soleil */}
                <div className="text-center relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-6 -right-8 text-yellow-400/60"
                    >
                        <Sun size={32} />
                    </motion.div>

                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-green-600 leading-tight tracking-tight">
                        {title}
                    </h1>
                    <div className="flex justify-center gap-2 mt-1">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">Printemps 2026</span>
                    </div>
                </div>

                {/* Portrait : Style "Oeuf Moderne" */}
                <div className="relative group">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        {/* Cadre en forme d'oeuf asymétrique */}
                        <div className="p-2 bg-white rounded-[60%_60%_70%_70%/80%_80%_60%_60%] shadow-xl border border-white/50">
                            <div className="w-40 h-52 rounded-[60%_60%_70%_70%/80%_80%_60%_60%] overflow-hidden bg-slate-50">
                                {imageUrl ? (
                                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-yellow-100 to-green-100">
                                        <Bird size={48} className="text-green-400" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Badges Décoratifs fixés sur le cadre */}
                        <div className="absolute -top-2 -left-2 bg-purple-400 text-white p-2.5 rounded-full shadow-lg border-4 border-white">
                            <Flower2 size={18} />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white p-2.5 rounded-full shadow-lg border-4 border-white">
                            <span className="text-lg leading-none">🐰</span>
                        </div>
                    </motion.div>
                </div>

                {/* Message : Bento Box Soft */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full max-w-sm bg-white/80 backdrop-blur-sm border border-white rounded-[2rem] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                >
                    <div className="flex justify-center gap-3 mb-4 text-slate-300">
                        <Sparkles size={14} className="text-yellow-400" />
                        <div className="h-[1px] w-8 bg-slate-100 self-center" />
                        <span className="text-xl">🥚</span>
                        <div className="h-[1px] w-8 bg-slate-100 self-center" />
                        <Sparkles size={14} className="text-purple-400" />
                    </div>

                    <p className="text-slate-700 text-center font-medium leading-relaxed italic text-sm md:text-base">
                        &#34;{poem}&#34;
                    </p>

                    <div className="mt-4 text-center">
                        <span className="text-lg font-black text-purple-600 tracking-tight italic">
                            — {name}
                        </span>
                    </div>
                </motion.div>

                {/* Footer discret */}
                <div className="flex gap-4 opacity-20">
                    <Flower2 size={12} />
                    <Flower2 size={12} />
                    <Flower2 size={12} />
                </div>
            </div>
        </motion.div>
    );
}