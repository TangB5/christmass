'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, ShieldCheck, ChevronRight, Circle } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYLuxury({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'L\'Ascension' : 'The Ascent';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#080808] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
        >
            {/* 1. Texture de fond (Marbre sombre subtil) */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />

            {/* Ligne de lumière verticale */}
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />

            {/* 2. Contenu Layout "Architectural" */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Top Section */}
                <div className="flex justify-between items-end mb-12">
                    <div className="space-y-1">
                        <p className="text-[10px] font-mono text-white/40 tracking-[0.5em] uppercase">Private Event</p>
                        <h1 className="text-4xl font-serif text-white tracking-tighter uppercase italic leading-none">
                            {title}
                        </h1>
                    </div>
                    <Clock3 size={32} className="text-white/10" strokeWidth={1} />
                </div>

                {/* Portrait Section (Carré parfait centré) */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="relative w-48 h-48">
                        {/* Cadre ornemental fin */}
                        <div className="absolute -inset-4 border border-white/5 rounded-full rotate-45" />
                        <div className="absolute -inset-2 border border-white/10 rounded-full -rotate-12" />

                        <div className="w-full h-full rounded-full overflow-hidden border-[1px] border-white/30 p-2">
                            <div className="w-full h-full rounded-full overflow-hidden grayscale contrast-125 brightness-75">
                                {imageUrl ? (
                                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                        <ShieldCheck size={40} className="text-white/5" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <p className="text-white text-xs font-black tracking-[0.6em] uppercase mb-2">{name}</p>
                        <div className="flex justify-center gap-1">
                            {[1, 2, 3].map(i => <Circle key={i} size={4} className="fill-white/20 text-transparent" />)}
                        </div>
                    </div>
                </div>

                {/* Footer Poème (Typographie serif élégante) */}
                <div className="mt-auto pt-8 border-t border-white/10">
                    <div className="flex gap-4">
                        <ChevronRight className="text-white/20 shrink-0" size={20} />
                        <p className="text-white/70 font-serif italic text-base md:text-lg leading-snug">
                            &#34;{poem}&#34;
                        </p>
                    </div>
                    <div className="mt-6 flex justify-end items-center gap-4">
                        <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest italic">Jan_01_2026</span>
                        <div className="h-[1px] w-12 bg-white/20" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}