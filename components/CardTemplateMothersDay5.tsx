'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Heart, Sun, Leaf } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayPeony({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'À ma maman chérie' : 'To my dearest Mom';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#F9FBF9] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
        >
            {/* 1. Fond : Dégradé Naturel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fdf2f8_0%,#f0fdf4_100%)] opacity-70" />

            {/* 2. Éléments botaniques flottants */}
            <motion.div
                animate={{ rotate: [0, 10, 0], y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-10 -left-10 text-pink-200/40"
            >
                <Flower size={200} strokeWidth={1} />
            </motion.div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-10 z-10 items-center justify-between">

                {/* Header : Élégance discrète */}
                <div className="text-center space-y-2">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center gap-2 text-pink-300">
                        <Leaf size={14} />
                        <div className="w-8 h-[1px] bg-pink-200 self-center" />
                        <Leaf size={14} className="rotate-90" />
                    </motion.div>
                    <h1 className="text-3xl font-serif italic text-slate-800 tracking-tight">
                        {title}
                    </h1>
                </div>

                {/* Section Image : Le Médaillon de Lin */}
                <div className="relative">
                    <div className="absolute -inset-6 bg-white/50 blur-3xl rounded-full animate-pulse" />
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="relative w-48 h-64 bg-white rounded-[10rem] shadow-2xl p-3 border border-pink-50"
                    >
                        <div className="w-full h-full rounded-[9rem] overflow-hidden bg-slate-50 border border-slate-100">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover brightness-105" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
                                    <Heart size={48} strokeWidth={1} className="text-pink-200 fill-pink-50" />
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Footer : Poème en "Bulle de soie" */}
                <div className="w-full space-y-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-sm border border-pink-100/50"
                    >
                        <p className="text-slate-600 text-center font-serif italic leading-relaxed text-base">
                            "{poem}"
                        </p>
                    </motion.div>

                    <div className="flex flex-col items-center">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-pink-400 mb-1">Je t'aime</span>
                        <span className="text-2xl font-serif text-slate-900 tracking-tighter">{name}</span>
                    </div>
                </div>
            </div>

            {/* Texture papier grainé */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
        </motion.div>
    );
}