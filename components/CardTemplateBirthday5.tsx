'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, GlassWater, Trophy, ShieldCheck } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayPrestige({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Édition Spéciale' : 'Special Edition';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#c5a059]/10"
        >
            {/* 1. Fond : Gradient de profondeur */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1a1a1a_0%,#050505_100%)]" />

            {/* 2. Particules d'or qui flottent */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#c5a059] rounded-full"
                        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            y: [0, -40, 0],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                    />
                ))}
            </div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-10 z-10 items-center">

                {/* Header : Sceau d'or */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-8 flex flex-col items-center gap-2"
                >
                    <Crown size={28} className="text-[#c5a059]" strokeWidth={1.5} />
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
                    <h1 className="text-[10px] font-black tracking-[0.6em] uppercase text-[#c5a059]">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait : Médaillon Royal */}
                <div className="relative mb-10">
                    <div className="absolute -inset-4 bg-[#c5a059]/10 blur-3xl rounded-full" />
                    <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-b from-[#f3e2b3] via-[#c5a059] to-[#926339]">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-black">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale brightness-110" />
                            ) : (
                                <div className="w-full h-full bg-[#111] flex items-center justify-center">
                                    <Trophy size={48} className="text-[#c5a059]/20" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Bloc Texte : Typographie Serif Luxe */}
                <div className="flex-1 flex flex-col items-center text-center space-y-6">
                    <h2 className="text-4xl font-serif italic text-transparent bg-clip-text bg-gradient-to-b from-[#f3e2b3] to-[#c5a059] tracking-tighter">
                        {name}
                    </h2>

                    <div className="relative px-4">
                        <Sparkles className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#c5a059]/30" size={20} />
                        <p className="text-zinc-400 font-serif text-lg leading-relaxed italic">
                            "{poem}"
                        </p>
                    </div>
                </div>

                {/* Footer : Signature */}
                <div className="mt-8 flex items-center gap-8">
                    <GlassWater size={20} className="text-zinc-800" />
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">Est. 2026</span>
                        <div className="w-8 h-1 bg-[#c5a059] mt-1 rounded-full" />
                    </div>
                    <ShieldCheck size={20} className="text-zinc-800" />
                </div>
            </div>
        </motion.div>
    );
}