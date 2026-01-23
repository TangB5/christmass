'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Activity, Gamepad2, Terminal } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayCyber({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'LEVEL UP DAD' : 'SUPER DAD V2.0';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-cyan-500/20"
        >
            {/* 1. Fond : Circuit Board & Glow */}
            <div className="absolute inset-0 opacity-10"
                 style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #06b6d4 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px]" />

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10 text-cyan-400">

                {/* Header : HUD Display */}
                <div className="flex justify-between items-start mb-8 border-b border-cyan-500/30 pb-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <Activity size={14} className="animate-pulse" />
                            <span className="text-[10px] font-mono tracking-widest uppercase">Status: Legendary</span>
                        </div>
                        <h1 className="text-4xl font-black italic tracking-tighter text-white">
                            {title}
                        </h1>
                    </div>
                    <Gamepad2 size={32} className="text-purple-400" />
                </div>

                {/* Portrait : "Data Frame" */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative group">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-dashed border-cyan-500/30 rounded-full"
                        />
                        <div className="relative w-44 h-44 bg-slate-900 border-2 border-cyan-400 rounded-2xl overflow-hidden p-1 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-150 brightness-110" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-black">
                                    <Cpu size={48} className="text-cyan-900" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

                {/* Footer : Code Block Poème */}
                <div className="mt-8 space-y-4">
                    <div className="bg-black/60 border border-cyan-500/30 rounded-xl p-5 font-mono text-sm relative overflow-hidden">
                        <Terminal size={14} className="absolute top-2 right-2 opacity-20" />
                        <p className="text-cyan-50 leading-relaxed italic">
                            {`> "${poem}"`}
                        </p>
                    </div>

                    <div className="flex justify-between items-end pt-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-purple-400 uppercase">Auth: User_{name.replace(/\s/g, '_')}</span>
                            <span className="text-2xl font-black text-white tracking-widest uppercase">{name}</span>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <Zap key={i} size={14} className={i === 2 ? 'text-slate-700' : 'text-yellow-400'} fill="currentColor" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}