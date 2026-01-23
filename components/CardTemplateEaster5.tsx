'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Wind, Sun, Sprout, Bird } from 'lucide-react';
import {CardTemplateProps} from "../lib/types";


export default function CardTemplateEasterMeadow({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Éveil' : 'Awakening';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#f8faf7] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
        >
            {/* 1. Fond avec dégradé de rosée matinale */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#ecfdf5_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#fefce8_0%,transparent_50%)]" />

            {/* 2. Éléments flottants organiques */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-emerald-200/40"
                        style={{ left: `${i * 20}%`, top: `${Math.random() * 100}%` }}
                        animate={{ y: [0, -30, 0], x: [0, 10, 0], rotate: [0, 360] }}
                        transition={{ duration: 10 + i, repeat: Infinity, ease: "linear" }}
                    >
                        <Sprout size={40 + i * 10} strokeWidth={0.5} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu Layout "Botanique" */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Header épuré */}
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-emerald-600/60">
                            <Bird size={14} />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Printemps • 2026</span>
                        </div>
                        <h1 className="text-4xl font-serif text-slate-800 tracking-tight italic">
                            {title}
                        </h1>
                    </div>
                    <div className="text-emerald-500/20">
                        <Sun size={48} strokeWidth={1} />
                    </div>
                </div>

                {/* Section Image "Ovale" (Style Œuf de Pâques) */}
                <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-emerald-100/50 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative w-52 h-64 rounded-t-full rounded-b-[100px] overflow-hidden border-4 border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-white transition-transform duration-700 group-hover:scale-105">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                                    <Flower size={60} className="text-emerald-200" strokeWidth={1} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Message Bloc */}
                <div className="mt-auto pt-8">
                    <div className="text-center relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-emerald-200">
                            <Wind size={20} />
                        </div>
                        <p className="text-slate-600 font-sans text-base leading-relaxed mb-6 font-light">
                            &#34;{poem}&#34;
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-8 bg-emerald-100" />
                            <span className="text-sm font-black text-emerald-800 tracking-widest uppercase">{name}</span>
                            <div className="h-[1px] w-8 bg-emerald-100" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}