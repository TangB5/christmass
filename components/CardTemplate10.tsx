'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkle, Zap, Layers, Globe } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNoelCrystal({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'ÉCLAT' : 'RADIANCE';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#f8fafc] rounded-[2.5rem] overflow-hidden shadow-2xl group"
        >
            {/* 1. Effet de Prisme (Gradient animé en fond) */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 0% 0%, #e0f2fe 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, #fef3c7 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 0%, #e0f2fe 0%, transparent 50%)'
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 opacity-50"
            />

            {/* 2. Lignes cinétiques ultra-fines */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }} />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Header Tech-Luxe */}
                <div className="flex justify-between items-center mb-8">
                    <div className="bg-black text-white px-3 py-1 rounded-sm text-[10px] font-black tracking-[0.4em] uppercase">
                        {title}
                    </div>
                    <Globe size={18} className="text-slate-400 animate-spin-slow" strokeWidth={1} />
                </div>

                {/* Section Image "Floating" */}
                <div className="flex-1 flex items-center justify-center relative">
                    {/* Cadre de verre flottant */}
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-3xl rounded-[2rem] border border-white/50 shadow-xl" />

                    <div className="relative w-full h-full p-4">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-[1.5rem] shadow-2xl brightness-105" />
                        ) : (
                            <div className="w-full h-full bg-slate-100 rounded-[1.5rem] flex items-center justify-center">
                                <Sparkle size={48} className="text-slate-300" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Info-Graphics */}
                <div className="mt-8 grid grid-cols-12 gap-4 items-end">
                    <div className="col-span-8">
                        <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-2">Message de fin d'année</p>
                        <p className="text-slate-900 font-sans text-base leading-tight font-medium">
                            {poem}
                        </p>
                    </div>
                    <div className="col-span-4 text-right">
                        <div className="inline-block border-t-2 border-black pt-2">
                            <p className="text-xs font-black uppercase leading-none">{name}</p>
                            <p className="text-[8px] text-slate-400 mt-1">S_NR: 2026-X</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reflet arc-en-ciel sur le bord */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30" />
        </motion.div>
    );
}