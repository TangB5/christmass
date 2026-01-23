'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Heart, Sparkles, Wind } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayEthereal({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Douce Maman' : 'Gentle Soul';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FDFDFD] rounded-[3rem] overflow-hidden shadow-2xl p-6"
        >
            {/* 1. Fond : Lumière Cinématique et Grain */}
            <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
            <div className="absolute -top-1/4 -left-1/4 w-full h-full bg-orange-50/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-50/30 rounded-full blur-[100px]" />

            {/* 2. Micro-animations : Particules de lumière */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-orange-200/40"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i
                        }}
                    >
                        <Sparkles size={12} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu principal avec bordure flottante */}
            <div className="h-full w-full border border-slate-100/50 rounded-[2.5rem] flex flex-col p-8 relative z-10">

                {/* Header : Minimalisme Pur */}
                <div className="flex justify-between items-start">
                    <div className="space-y-1">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-orange-300/60"
                        >
                            <Sun size={28} strokeWidth={1} />
                        </motion.div>
                    </div>
                    <div className="text-right">
                        <h1 className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-400 mb-1">
                            {title}
                        </h1>
                        <div className="h-px w-8 bg-orange-100 ml-auto" />
                    </div>
                </div>

                {/* Section Image : Morphing Blob */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                        {/* Blob animé en arrière-plan */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                borderRadius: ["42% 58% 70% 30% / 45% 45% 55% 55%", "55% 45% 35% 65% / 35% 55% 45% 65%", "42% 58% 70% 30% / 45% 45% 55% 55%"]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-br from-orange-50 to-rose-50 blur-2xl"
                        />

                        <motion.div
                            animate={{
                                borderRadius: ["42% 58% 70% 30% / 45% 45% 55% 55%", "55% 45% 35% 65% / 35% 55% 45% 65%", "42% 58% 70% 30% / 45% 45% 55% 55%"]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="relative w-full h-full overflow-hidden border-[6px] border-white shadow-2xl"
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover scale-110 sepia-[0.1] brightness-[1.02]"
                                />
                            ) : (
                                <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                    <Cloud size={48} strokeWidth={1} className="text-slate-200" />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Footer : Typographie Poétique */}
                <div className="space-y-10 text-center pb-4">
                    <div className="relative">
                        <Wind size={20} className="absolute -top-6 left-1/2 -translate-x-1/2 text-orange-100" />
                        <p className="text-slate-600 font-serif italic text-xl leading-relaxed px-4">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <motion.div
                            animate={{ width: [0, 40, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-[1px] bg-slate-200"
                        />
                        <span className="text-3xl font-serif text-slate-800 tracking-tighter">
                            {name}
                        </span>
                        <div className="flex gap-2">
                            <Heart size={10} className="text-rose-200 fill-rose-100" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}