'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Zap, Layers, Share2, Star } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayHolo({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'ÉCLAT TOTAL' : 'TOTAL SHINE';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
            {/* 1. Fond Animé Iridescent */}
            <motion.div
                animate={{
                    background: [
                        'linear-gradient(45deg, #e0f2fe 0%, #fdf2f8 50%, #f0fdf4 100%)',
                        'linear-gradient(45deg, #f0fdf4 0%, #e0f2fe 50%, #fdf2f8 100%)',
                        'linear-gradient(45deg, #fdf2f8 0%, #f0fdf4 50%, #e0f2fe 100%)'
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-70"
            />

            {/* 2. Cercles de lumière diffus */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-300 blur-[100px] opacity-30 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 blur-[100px] opacity-30 animate-pulse" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header Floating */}
                <div className="flex justify-between items-center mb-6">
                    <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white shadow-sm">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-cyan-600">
                            Edition 2026
                        </span>
                    </div>
                    <Layers size={20} className="text-fuchsia-400" />
                </div>

                {/* Portrait "Float" */}
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute w-48 h-48 bg-gradient-to-tr from-cyan-400 to-fuchsia-400 rounded-full blur-2xl opacity-20 scale-125" />
                    <div className="relative w-44 h-44 rounded-full p-1 bg-white shadow-2xl overflow-hidden group">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-full">
                                <Sparkle size={48} className="text-fuchsia-200" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Petits éléments flottants */}
                    <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 right-10 text-yellow-400"><Star size={20} fill="currentColor"/></motion.div>
                    <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 left-10 text-cyan-400"><Zap size={20} fill="currentColor"/></motion.div>
                </div>

                {/* Footer Message & Glass Box */}
                <div className="mt-6 space-y-6">
                    <h1 className="text-4xl font-black text-center text-slate-900 tracking-tighter leading-none italic">
                        {title}
                    </h1>

                    <div className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] p-6 shadow-xl">
                        <p className="text-slate-700 text-center font-bold leading-relaxed">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                                <Share2 size={14} className="text-white" />
                            </div>
                            <span className="text-sm font-black uppercase">{name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">#BdayCelebration</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}