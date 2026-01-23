'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Activity, Cpu, ArrowUpRight, Globe } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYNeoHorizon({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'HORIZON' : 'HORIZON';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border border-blue-500/20"
        >
            {/* 1. Grid Technique en fond */}
            <div className="absolute inset-0 opacity-[0.05]"
                 style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* 2. Glow Central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[120px] rounded-full" />

            {/* 3. Contenu Layout "System UI" */}
            <div className="relative h-full flex flex-col p-8 z-10 text-blue-50">

                {/* Top Bar Stats */}
                <div className="flex justify-between items-start mb-10 border-l border-blue-500/50 pl-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Activity size={10} className="text-blue-400 animate-pulse" />
                            <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-blue-400">Status: Active</span>
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter italic">
                            {title} <span className="text-blue-500">2026</span>
                        </h1>
                    </div>
                    <Cpu size={24} strokeWidth={1} className="text-blue-500/40" />
                </div>

                {/* Main Frame Image */}
                <div className="flex-1 relative mb-8 group">
                    <div className="absolute -inset-1 bg-blue-500/20 rounded-[2rem] blur-sm" />
                    <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-blue-400/30">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale brightness-125 group-hover:grayscale-0 transition-all duration-700" />
                        ) : (
                            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                <Target size={48} className="text-blue-500/20" />
                            </div>
                        )}
                        {/* UI Overlay sur l'image */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                                <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Message Block */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                        <Globe size={14} className="text-blue-500" />
                    </div>
                    <p className="font-mono text-xs md:text-sm leading-relaxed text-blue-100/80">
                        <span className="text-blue-500 mr-2">{'>'}</span>
                        "{poem}"
                    </p>
                    <div className="flex justify-between items-end pt-2">
                        <div className="space-y-1">
                            <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Protocol Sender</p>
                            <p className="text-xl font-black tracking-tight">{name}</p>
                        </div>
                        <div className="text-[8px] font-mono text-blue-500/40">
                            COORD: 48.8566° N, 2.3522° E
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}