'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Square, Circle, Triangle, Minus } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayStudio({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Père.' : 'Father.';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-white rounded-[2rem] overflow-hidden shadow-2xl p-12"
        >
            {/* 1. Éléments Géométriques Minimalistes */}
            <div className="absolute top-12 left-12 text-slate-100"><Square size={120} strokeWidth={1} /></div>
            <div className="absolute bottom-12 right-12 text-slate-100"><Circle size={100} strokeWidth={1} /></div>

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col z-10">

                {/* Header : Typographie Suisse */}
                <div className="mb-12">
                    <h1 className="text-6xl font-black text-slate-900 tracking-[ -0.05em] leading-none mb-4">
                        {title}
                    </h1>
                    <div className="w-12 h-2 bg-slate-900" />
                </div>

                {/* Portrait : Style Portfolio */}
                <div className="flex-1 relative">
                    <div className="absolute inset-0 bg-slate-50 -m-4 rotate-1" />
                    <div className="relative w-full h-full bg-white shadow-xl grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center border border-slate-100">
                                <Triangle size={48} className="text-slate-200" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer : Épure Totale */}
                <div className="mt-12 flex flex-col gap-6">
                    <p className="text-slate-500 font-serif text-xl italic leading-relaxed max-w-[90%]">
                        "{poem}"
                    </p>

                    <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                        <span className="text-3xl font-light text-slate-900 tracking-tighter">
                            {name}
                        </span>
                        <div className="flex items-center gap-2">
                            <Minus size={20} className="text-slate-300" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}