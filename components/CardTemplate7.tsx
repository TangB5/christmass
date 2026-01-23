'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Star, Send } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNoelMidnight({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Nuit Magique' : 'Silent Night';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800"
        >
            {/* 1. Fond Gradient "Cosmique" */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#020617_100%)]" />

            {/* 2. Étoiles Scintillantes (Particules fines) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: Math.random() * 2 + 1 + 'px',
                            height: Math.random() * 2 + 1 + 'px',
                        }}
                        animate={{ opacity: [0, 0.8, 0] }}
                        transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
                    />
                ))}
            </div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-10 z-10">
                <div className="flex flex-col items-center mb-8">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="text-slate-400 mb-4"
                    >
                        <Moon size={32} strokeWidth={1} />
                    </motion.div>
                    <h1 className="text-3xl font-serif tracking-[0.3em] text-white uppercase text-center leading-relaxed">
                        {title}
                    </h1>
                </div>

                {/* Cadre Image "Givré" */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-slate-500 to-white opacity-20 blur-md rounded-2xl group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-52 h-64 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-700" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Star size={40} className="text-slate-700" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Poème */}
                <div className="mt-8">
                    <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-3xl p-6 relative">
                        <Sparkles className="absolute -top-3 -left-3 text-slate-400" size={24} />
                        <p className="text-slate-300 text-center font-light leading-relaxed italic">
                            "{poem}"
                        </p>
                        <div className="mt-4 flex flex-col items-center gap-2">
                            <span className="text-[10px] tracking-[0.5em] text-slate-500 uppercase font-bold">{name}</span>
                            <div className="h-4 w-[1px] bg-gradient-to-b from-slate-500 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}