'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Wind, Sun, Heart, Scissors } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayBoho({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Cueillir le jour' : 'Seize the day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FAF7F2] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#F2EDE4]"
        >
            {/* 1. Fond texture papier aquarelle */}
            <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            {/* 2. Tâches d'aquarelle diffuses */}
            <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-orange-100 rounded-full blur-[80px] opacity-60" />
            <div className="absolute bottom-[-5%] right-[-5%] w-64 h-64 bg-green-100 rounded-full blur-[80px] opacity-60" />

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10 text-[#5D574F]">

                {/* Header Artistique */}
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-orange-400/60">
                            <Wind size={14} />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Anniversaire Boho</span>
                        </div>
                        <h1 className="text-3xl font-serif italic font-light tracking-tight">
                            {title}
                        </h1>
                    </div>
                    <Sun size={32} strokeWidth={1} className="text-orange-200" />
                </div>

                {/* Section Image : Cadre découpé main */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-2 border border-dashed border-[#D4CDBC] rounded-[2.5rem] rotate-3" />
                        <div className="relative w-48 h-60 bg-white rounded-[2rem] shadow-lg overflow-hidden p-2 -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-[1.5rem] sepia-[0.1]" />
                            ) : (
                                <div className="w-full h-full bg-[#F2EDE4] flex items-center justify-center rounded-[1.5rem]">
                                    <Flower size={48} strokeWidth={1} className="text-[#D4CDBC]" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Message & Signature */}
                <div className="mt-8 space-y-6 text-center">
                    <div className="relative inline-block px-10">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#D4CDBC]" />
                        <p className="text-lg font-serif italic leading-relaxed text-[#7A7165]">
                            "{poem}"
                        </p>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-[#D4CDBC]" />
                    </div>

                    <div className="flex flex-col items-center pt-2">
                        <Heart size={16} fill="#FCA5A5" className="text-transparent mb-3" />
                        <span className="text-2xl font-serif tracking-tight lowercase underline decoration-[#D4CDBC] underline-offset-8 decoration-1">
                            {name}
                        </span>
                    </div>
                </div>
            </div>

            {/* Eléments botaniques aux coins */}
            <div className="absolute top-4 right-4 text-[#D4CDBC]/30 rotate-45"><Scissors size={14} /></div>
        </motion.div>
    );
}