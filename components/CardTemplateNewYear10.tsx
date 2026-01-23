'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Minus, Bookmark } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNYVogue({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'La Nouvelle Ere' : 'The New Era';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-white rounded-[2.5rem] overflow-hidden shadow-2xl p-4"
        >
            {/* Border interne fine style "Galerie" */}
            <div className="absolute inset-4 border border-black/5 rounded-[1.8rem]" />

            <div className="relative h-full flex flex-col z-10">
                {/* Header Editorial */}
                <div className="p-6 text-center space-y-2">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Minus size={20} strokeWidth={1} />
                        <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-black">Issue 2026</span>
                        <Minus size={20} strokeWidth={1} />
                    </div>
                    <h1 className="text-4xl font-serif italic font-light text-black tracking-tighter">
                        {title}
                    </h1>
                </div>

                {/* Image Artistique (Marge asymétrique) */}
                <div className="flex-1 px-4">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-100 group shadow-lg">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Star size={48} strokeWidth={0.5} className="text-black/10" />
                            </div>
                        )}
                        {/* Overlay subtile */}
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>
                </div>

                {/* Footer Message & Signature */}
                <div className="p-8 space-y-6">
                    <div className="relative">
                        <Quote size={20} className="text-black/10 absolute -top-4 -left-2" />
                        <p className="text-zinc-600 font-serif text-lg leading-relaxed text-center px-4">
                            {poem}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <div className="h-[40px] w-[1px] bg-black/10" />
                        <div className="flex items-center gap-6">
                            <Bookmark size={14} strokeWidth={1} className="text-zinc-300" />
                            <span className="text-sm font-black uppercase tracking-widest text-black underline underline-offset-8">
                                {name}
                            </span>
                            <Bookmark size={14} strokeWidth={1} className="text-zinc-300" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}