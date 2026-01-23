'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Circle, Compass, Shell } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateEasterCeramic({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Équilibre' : 'Balance';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#F4F1EA] rounded-[2.5rem] overflow-hidden shadow-2xl border-[16px] border-[#E9E4D9]"
        >
            {/* 1. Texture de grès / céramique */}
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]" />

            {/* 2. Formes abstraites organiques */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-[#D4CDBC] rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-[-5%] right-[-5%] w-48 h-48 bg-[#C5BBA4] rounded-full blur-2xl opacity-30" />

            {/* 3. Contenu Layout "Minimaliste" */}
            <div className="relative h-full flex flex-col p-8 z-10 text-[#4A453C]">

                {/* Header Signature */}
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-1">
                        <p className="text-[8px] font-mono tracking-[0.5em] uppercase opacity-50">Handcrafted_2026</p>
                        <h1 className="text-3xl font-serif font-light tracking-tighter italic">
                            {title}
                        </h1>
                    </div>
                    <Shell size={28} strokeWidth={1} className="opacity-40" />
                </div>

                {/* Image Section "Arches" */}
                <div className="flex-1 px-4 mb-8">
                    <div className="w-full h-full rounded-t-full rounded-b-lg overflow-hidden border border-[#D4CDBC] shadow-inner bg-[#E9E4D9]">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover sepia-[0.3] contrast-90" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Leaf size={40} strokeWidth={1} className="opacity-20" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Poème */}
                <div className="mt-auto space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-[1px] h-12 bg-[#D4CDBC]" />
                        <p className="font-serif italic text-lg leading-relaxed opacity-80">
                            &#34;{poem}&#34;
                        </p>
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest mb-1">De la part de</span>
                            <span className="text-2xl font-serif lowercase italic">{name}</span>
                        </div>
                        <Compass size={20} strokeWidth={1} className="mb-1 opacity-40" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}