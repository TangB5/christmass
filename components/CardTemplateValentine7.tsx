'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Crown, Zap, Anchor, Fingerprint, Activity } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMidnight({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'LÉGENDE' : 'LEGEND';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-slate-800"
        >
            {/* 1. Fond Technologique */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e293b_0%,#020617_70%)]" />
            <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            {/* 2. Contenu Principal */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header : "System Status" */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-1">
                            <Activity size={12} className="text-cyan-400 animate-pulse" />
                            <span className="text-[9px] font-mono text-cyan-400/70 uppercase tracking-widest">Profile_Certified</span>
                        </div>
                        <h1 className="text-5xl font-black text-white tracking-tighter uppercase leading-none">
                            {title}
                        </h1>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-2 bg-amber-500/20 blur-lg rounded-full animate-pulse" />
                        <div className="relative bg-slate-900 p-3 rounded-2xl border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                            <Crown size={24} className="text-amber-400" />
                        </div>
                    </div>
                </div>

                {/* Section Image : Cadre "Dossier" */}
                <div className="flex-[1.2] flex items-center justify-center mb-8">
                    <div className="relative w-48 h-56">
                        {/* Angles décoratifs */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-cyan-500" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-500" />

                        <div className="h-full w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-2xl group">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-700">
                                    <Fingerprint size={80} strokeWidth={1} />
                                    <span className="text-[10px] font-mono mt-2">NO_DATA_FOUND</span>
                                </div>
                            )}

                            {/* Overlay de donnée */}
                            <div className="absolute top-2 right-2 bg-cyan-500 text-[8px] font-mono text-black px-1.5 py-0.5 rounded uppercase font-bold">
                                Live_Stream
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bloc Poème : "Data Insight" */}
                <div className="flex-1 flex flex-col justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-6 relative overflow-hidden"
                    >
                        {/* Barre de progression style tech */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-800">
                            <motion.div
                                animate={{ width: ['0%', '100%'] }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="h-full bg-cyan-500"
                            />
                        </div>

                        <div className="flex gap-4 mb-4 text-cyan-400/40">
                            <Anchor size={16} />
                            <Zap size={16} />
                            <Award size={16} />
                        </div>

                        <p className="text-slate-100 font-mono text-sm leading-relaxed border-l-2 border-cyan-500 pl-4 italic">
                            "{poem}"
                        </p>

                        <div className="mt-6 flex justify-between items-center">
                            <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                            <span className="text-sm font-black text-black bg-cyan-400 px-4 py-1 rounded-sm skew-x-[-12deg] tracking-widest uppercase">
                                {name}
                            </span>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Overlay final "Scan Line" */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-[10%] w-full animate-scan" />
        </motion.div>
    );
}