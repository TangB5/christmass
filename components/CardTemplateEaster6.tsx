'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Palette, Sparkles, Cherry } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateEasterLuxe({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'La Récolte' : 'The Harvest';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#fffcf5] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
        >
            {/* 1. Texture de fond "Tissage" subtile */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/washi.png')]" />

            {/* 2. Cercles pastels décoratifs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-100 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-[80px]" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Badge du haut */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/80 backdrop-blur px-4 py-1.5 rounded-full border border-orange-100 shadow-sm flex items-center gap-2">
                        <Palette size={12} className="text-orange-400" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-orange-900">Collection de Pâques</span>
                    </div>
                </div>

                {/* Section Image Bento */}
                <div className="relative flex-1 bg-white rounded-[2rem] p-4 shadow-inner border border-stone-100 overflow-hidden mb-8 group">
                    <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        ) : (
                            <div className="w-full h-full bg-stone-50 flex items-center justify-center">
                                <Gift size={48} className="text-stone-200" strokeWidth={1} />
                            </div>
                        )}
                        {/* Overlay Gradient Soft */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-200/20 via-transparent to-transparent" />
                    </div>
                </div>

                {/* Message & Signature */}
                <div className="space-y-6 text-center">
                    <div className="flex justify-center gap-3 text-pink-300">
                        <Sparkles size={16} />
                        <h1 className="text-2xl font-serif font-black text-stone-800 tracking-tight">{title}</h1>
                        <Cherry size={16} />
                    </div>

                    <p className="text-stone-500 font-medium text-sm md:text-base leading-relaxed italic px-2">
                        &#34;{poem}&#34;
                    </p>

                    <div className="flex flex-col items-center pt-4">
                        <div className="h-8 w-[1px] bg-stone-200 mb-2" />
                        <span className="text-xs font-black text-stone-900 uppercase tracking-[0.3em]">
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}