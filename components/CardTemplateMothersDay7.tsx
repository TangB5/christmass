'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Paperclip, StickyNote, PenTool, Camera } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayCollage({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Petits Bonheurs' : 'Sweet Memories';

    return (
        <motion.div
            initial={{ opacity: 0, rotate: -1 }}
            animate={{ opacity: 1, rotate: 0 }}
            className="relative w-full aspect-[3/4] bg-[#F4F4F4] rounded-[2rem] overflow-hidden shadow-2xl p-8"
        >
            {/* 1. Fond texture papier quadrillé discret */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

            {/* 2. Éléments de décorations "Scotch" */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/60 backdrop-blur-sm rotate-2 z-20 shadow-sm border border-white/40" />
            <div className="absolute bottom-12 right-10 w-16 h-16 bg-pink-200/30 rounded-full blur-xl" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col z-10">

                {/* Header Style "Étiquette" */}
                <div className="mb-8 self-start">
                    <div className="bg-white px-4 py-2 shadow-md -rotate-2 border-l-4 border-pink-400">
                        <h1 className="text-xl font-mono text-slate-800 uppercase tracking-tighter flex items-center gap-2">
                            <Camera size={14} className="text-pink-400" />
                            {title}
                        </h1>
                    </div>
                </div>

                {/* Portrait : Style Photo Polaroid Revisitée */}
                <div className="flex-1 flex items-center justify-center">
                    <motion.div
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="relative bg-white p-4 pb-12 shadow-2xl rotate-3 border border-slate-100"
                    >
                        <div className="w-44 h-52 bg-slate-50 overflow-hidden relative">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Heart size={40} className="text-pink-100" />
                                </div>
                            )}
                            {/* Reflet de vitre */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                        </div>
                        <Paperclip className="absolute -top-4 -right-2 text-slate-400 rotate-12" size={24} />
                    </motion.div>
                </div>

                {/* Zone Poème : "Note Manuscrite" */}
                <div className="mt-8 relative">
                    <div className="absolute -top-4 -left-2 text-pink-300">
                        <PenTool size={20} />
                    </div>
                    <div className="bg-white/40 border-t border-b border-pink-100 py-6 px-4">
                        <p className="text-slate-700 text-center font-serif italic text-lg leading-relaxed">
                            "{poem}"
                        </p>
                    </div>
                </div>

                {/* Footer Signature */}
                <div className="mt-6 flex justify-between items-end">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Signé avec amour</span>
                        <span className="text-3xl font-serif text-pink-500 tracking-tighter lowercase">{name}</span>
                    </div>
                    <StickyNote size={24} className="text-yellow-200 fill-yellow-100 -rotate-12" />
                </div>
            </div>
        </motion.div>
    );
}