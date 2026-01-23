'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Zap, Palette, Smile } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateEasterHolo({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'ÉCLAT' : 'SHINE';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl"
        >
            {/* 1. Fond Iridescent Animé */}
            <motion.div
                animate={{
                    background: [
                        'linear-gradient(45deg, #f0f9ff 0%, #fae8ff 50%, #f0fdf4 100%)',
                        'linear-gradient(45deg, #f0fdf4 0%, #f0f9ff 50%, #fae8ff 100%)',
                        'linear-gradient(45deg, #fae8ff 0%, #f0fdf4 50%, #f0f9ff 100%)'
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-60"
            />

            {/* 2. Contenu Layout "Pop-Luxe" */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Header Style Badge */}
                <div className="flex justify-between items-center mb-8">
                    <div className="bg-black text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                        <Sparkle size={12} fill="white" />
                        {title}
                    </div>
                    <Smile size={24} className="text-pink-400" />
                </div>

                {/* Image Section "Floating Mirror" */}
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute w-60 h-60 bg-gradient-to-tr from-cyan-300 via-fuchsia-300 to-yellow-300 rounded-full blur-2xl opacity-30 animate-pulse" />

                    <div className="relative w-56 h-56 rounded-[3rem] overflow-hidden border-2 border-white shadow-2xl rotate-3">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-white/40 backdrop-blur-md flex items-center justify-center">
                                <Palette size={48} className="text-fuchsia-300" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Message Stylisé */}
                <div className="mt-8 space-y-6">
                    <p className="text-slate-800 font-black text-xl leading-tight tracking-tight uppercase italic text-center">
                        "{poem}"
                    </p>

                    <div className="flex justify-between items-center border-t border-black/5 pt-4">
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-black rounded-full" />
                            ))}
                        </div>
                        <span className="text-sm font-black italic underline decoration-pink-400 decoration-4 underline-offset-4 uppercase">
                            {name}
                        </span>
                        <Zap size={16} fill="black" />
                    </div>
                </div>
            </div>

            {/* Reflet arc-en-ciel furtif */}
            <motion.div
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
        </motion.div>
    );
}