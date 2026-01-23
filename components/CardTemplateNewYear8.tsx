'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Disc, Zap, MoveUpRight } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYDisco({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'CÉLÉBRATION' : 'CELEBRATION';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#050010] rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
            {/* 1. Glows de couleurs (Aura) */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/30 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
            </div>

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header Style Ticket de Concert */}
                <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-8">
                    <div className="space-y-1">
                        <p className="text-white/40 text-[9px] font-black tracking-widest uppercase">Volume_2026</p>
                        <h1 className="text-2xl font-black text-white italic tracking-tighter">
                            {title}
                        </h1>
                    </div>
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                        <Disc size={24} className="text-purple-400 animate-spin-slow" />
                    </div>
                </div>

                {/* Section Image "Grand Angle" */}
                <div className="relative flex-1 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[2rem] p-[1px]">
                        <div className="w-full h-full bg-[#050010] rounded-[2rem] overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover mix-blend-screen opacity-80" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Music size={48} className="text-white/10" />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Badge flottant */}
                    <div className="absolute -bottom-4 -right-4 bg-white text-black px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2">
                        <Zap size={14} fill="black" />
                        <span className="text-[10px] font-black uppercase tracking-tighter">{name}</span>
                    </div>
                </div>

                {/* Message Poème */}
                <div className="space-y-6">
                    <p className="text-white/80 font-medium text-lg leading-snug tracking-tight italic">
                        "{poem}"
                    </p>
                    <div className="flex justify-between items-end">
                        <div className="flex gap-1">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-purple-500/40 rounded-full" />
                            ))}
                        </div>
                        <div className="flex items-center gap-2 text-white/20">
                            <span className="text-[10px] font-mono tracking-widest uppercase">Launch_2026</span>
                            <MoveUpRight size={14} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Effet Scanline (Lignes TV) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
        </motion.div>
    );
}