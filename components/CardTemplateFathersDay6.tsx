'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Pencil, Layout, MoveUpRight } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayBlueprint({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Le Pilier' : 'The Pillar';

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative w-full aspect-[3/4] bg-[#003366] rounded-[2.5rem] overflow-hidden shadow-2xl p-6"
        >
            {/* 1. Grille de plan d'architecte */}
            <div className="absolute inset-0 opacity-20"
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* 2. Mesures techniques aux bords */}
            <div className="absolute top-10 left-0 w-full flex justify-between px-10 text-white/30 font-mono text-[8px]">
                <span>10.05.2026</span>
                <span>COORD: 48.8566° N</span>
                <span>REF: DAD-01</span>
            </div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col z-10 border border-white/20 rounded-2xl p-8 bg-[#003366]/40 backdrop-blur-sm">

                {/* Header : Typographie technique */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <Ruler size={16} className="text-cyan-400" />
                        <div className="h-[1px] flex-1 bg-cyan-400/30" />
                    </div>
                    <h1 className="text-4xl font-black text-white uppercase tracking-tighter italic">
                        {title}
                    </h1>
                </div>

                {/* Portrait : "Draft" style */}
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute -top-4 -right-4 text-cyan-400/20"><Layout size={120} /></div>
                    <div className="relative w-48 h-48 border-2 border-white/60 p-1">
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
                        <div className="w-full h-full bg-slate-900 overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover opacity-80 contrast-125 mix-blend-screen" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Pencil size={40} className="text-white/10" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer : Zone de données */}
                <div className="mt-8 space-y-4">
                    <div className="flex gap-4">
                        <MoveUpRight className="text-cyan-400 shrink-0" />
                        <p className="text-cyan-50 font-mono text-sm leading-relaxed text-left border-l border-cyan-400/40 pl-4">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex justify-between items-end pt-4 border-t border-white/10">
                        <div className="flex flex-col">
                            <span className="text-[8px] text-white/40 uppercase font-mono">Certified Legend</span>
                            <span className="text-2xl font-black text-white tracking-widest">{name}</span>
                        </div>
                        <div className="w-12 h-12 bg-white text-[#003366] flex items-center justify-center font-black rounded-sm">
                            #1
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}