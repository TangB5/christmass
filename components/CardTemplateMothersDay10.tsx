'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Heart, Sparkles, Sprout } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateMothersDayFloralMax({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Un bouquet de bonheur' : 'A bouquet of joy';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FFF5F7] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
        >
            {/* 1. Éléments floraux massifs en fond */}
            <div className="absolute -top-10 -right-10 text-pink-100 opacity-50 rotate-12">
                <Flower2 size={250} />
            </div>
            <div className="absolute -bottom-20 -left-10 text-rose-100 opacity-50 -rotate-12">
                <Flower2 size={300} />
            </div>

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10 items-center justify-between">

                {/* Header Pop */}
                <div className="text-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-rose-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-flex items-center gap-2"
                    >
                        <Heart size={10} fill="white" /> {title}
                    </motion.div>
                </div>

                {/* Section Portrait : Cercle Éclatant */}
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-6 border-2 border-dashed border-rose-200 rounded-full"
                    />
                    <div className="relative w-44 h-44 rounded-full bg-white p-2 shadow-2xl border-4 border-rose-50">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[1.2]" />
                            ) : (
                                <div className="w-full h-full bg-rose-50 flex items-center justify-center">
                                    <Sprout size={48} className="text-rose-200" />
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Petites étincelles */}
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 right-0 text-yellow-400"><Sparkles size={24} /></motion.div>
                </div>

                {/* Message & Signature */}
                <div className="w-full space-y-6 text-center">
                    <div className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-8 shadow-inner border border-rose-100">
                        <p className="text-rose-900 font-serif italic text-xl leading-relaxed">
                            "{poem}"
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="h-px w-12 bg-rose-200 mb-2" />
                        <span className="text-3xl font-serif text-rose-600 tracking-tight">
                            {name}
                        </span>
                        <div className="flex gap-1 mt-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-rose-300 rounded-full" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}