'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Timer, Radio, Share2, Sparkles } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYTimesSquare({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'EXPLOSION' : 'EXPLOSION';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-black rounded-[2.5rem] overflow-hidden shadow-2xl isolate"
        >
            {/* 1. Background dynamique Néon */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#1e1b4b_0%,#000_70%)]" />

            {/* Cercles néons animés */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-fuchsia-600 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500 rounded-full blur-[100px]"
            />

            {/* 2. Contenu Layout "High Energy" */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header Style "Broadcasting" */}
                <div className="flex justify-between items-start mb-6">
                    <div className="bg-white text-black px-3 py-1 font-black text-[10px] tracking-tighter rounded-sm">
                        LIVE 2026
                    </div>
                    <div className="flex gap-2">
                        <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-red-600 rounded-full" />
                        <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase italic">New_Era_Signal</span>
                    </div>
                </div>

                {/* Titre Impactant avec contour (Text-Stroke) */}
                <div className="mb-6 overflow-hidden">
                    <motion.h1
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        className="text-7xl font-black text-white leading-[0.8] tracking-tighter"
                    >
                        {title}<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>2026</span>
                    </motion.h1>
                </div>

                {/* Photo avec effet de distorsion légère */}
                <div className="flex-1 relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 to-cyan-400 rounded-3xl opacity-20 blur-sm" />
                    <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-150 contrast-110" />
                        ) : (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                <Radio size={48} className="text-white/20" />
                            </div>
                        )}
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                            </div>
                            <span className="text-white font-bold text-sm tracking-widest uppercase">{name}</span>
                        </div>
                    </div>
                </div>

                {/* Message style "Chat/Subtitle" */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                    <div className="flex items-center gap-2 mb-2 text-fuchsia-400">
                        <Sparkles size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Resolution</span>
                    </div>
                    <p className="text-white/90 font-medium text-sm leading-relaxed italic">
                        &#34;{poem}&#34;
                    </p>
                </div>
            </div>
        </motion.div>
    );
}