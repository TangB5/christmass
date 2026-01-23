'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Square, Triangle, Palette, Quote } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayGallery({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Une Nouvelle Année' : 'A New Year';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#F5F2ED] rounded-[2.5rem] overflow-hidden shadow-2xl p-6"
        >
            {/* 1. Formes abstraites en fond */}
            <div className="absolute top-20 -right-10 w-40 h-40 bg-[#E8DCC4] rounded-full mix-blend-multiply opacity-60" />
            <div className="absolute bottom-40 -left-10 w-32 h-64 bg-[#D1C7B7] rounded-full mix-blend-multiply opacity-40 rotate-12" />

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col z-10 border border-black/5 rounded-[1.8rem] p-8">

                {/* Header : Typographie fine */}
                <div className="mb-10 flex justify-between items-start">
                    <div className="space-y-1">
                        <h1 className="text-3xl font-serif font-light text-slate-900 tracking-tighter">
                            {title}
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Volume XXVI</p>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[#E8DCC4] rounded-full" />
                        <div className="w-2 h-2 bg-black rounded-full" />
                    </div>
                </div>

                {/* Portrait : Fenêtre Asymétrique */}
                <div className="flex-1 flex items-center justify-center mb-10">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-full h-full border border-black/10 rounded-2xl rotate-3" />
                        <div className="relative w-44 h-56 bg-white shadow-2xl rounded-2xl overflow-hidden p-2">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-xl" />
                            ) : (
                                <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                                    <Palette size={40} strokeWidth={0.5} className="text-slate-300" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Poème & Signature */}
                <div className="space-y-6">
                    <div className="relative">
                        <Quote size={20} className="text-black/5 absolute -top-4 -left-2" />
                        <p className="text-slate-600 font-serif italic text-lg leading-relaxed text-center px-4">
                            {poem}
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-[1px] bg-black/20" />
                        <span className="text-sm font-black uppercase tracking-widest text-slate-900">
                            {name}
                        </span>
                    </div>
                </div>
            </div>

            {/* Texture de papier discrète */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        </motion.div>
    );
}