'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flower, Wind, Sun } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate3MothersDay({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Mères' : 'Bonne Fête Maman')
        : 'Happy Mother\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#FFF9F9] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white"
        >
            {/* 1. Fond : Gradient de soie et formes douces */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFE4E6_0%,transparent_60%)] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#FFF1F2_0%,transparent_60%)]" />

            {/* 2. Micro-interactions : Étincelles flottantes */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-rose-300/40"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5
                        }}
                    >
                        <Sparkles size={16} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-10 px-8 z-10">

                {/* Header : Élégance et Clarté */}
                <div className="text-center space-y-2">
                    <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex items-center justify-center gap-3 text-rose-400"
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                            <Flower size={18} />
                        </motion.div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Célébration</span>
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                            <Flower size={18} />
                        </motion.div>
                    </motion.div>

                    <h1 className="text-4xl font-serif italic text-rose-900 tracking-tight leading-tight">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Forme Organique "Soft Edge" */}
                <div className="relative">
                    <motion.div
                        animate={{
                            borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "60% 40% 30% 70% / 50% 60% 40% 60%", "40% 60% 70% 30% / 40% 50% 60% 50%"]
                        }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="relative w-48 h-56 bg-white p-2 shadow-xl border border-rose-50 overflow-hidden"
                    >
                        <div className="w-full h-full overflow-hidden rounded-[inherit]">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[1.05]" />
                            ) : (
                                <div className="w-full h-full bg-rose-50 flex items-center justify-center">
                                    <Heart size={48} className="text-rose-200 fill-rose-100" />
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Badge flottant "Je t'aime" */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full p-3 border border-rose-100"
                    >
                        <Heart size={20} className="text-rose-500 fill-rose-500" />
                    </motion.div>
                </div>

                {/* Bloc Poème : "Bulle de Sérénité" */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full bg-white/60 backdrop-blur-md border border-white rounded-[2rem] p-6 shadow-sm relative"
                >
                    <div className="flex justify-center gap-1 mb-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-200" />
                        ))}
                    </div>

                    <p className="text-rose-800 text-center font-serif italic leading-relaxed text-lg">
                        "{poem}"
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-1">
                        <span className="text-2xl font-serif text-rose-900 tracking-tighter lowercase underline decoration-rose-200 decoration-2 underline-offset-4">
                            {name}
                        </span>
                    </div>
                </motion.div>

                {/* Footer Iconique */}
                <div className="flex gap-4 items-center opacity-30 text-rose-400">
                    <Wind size={14} />
                    <Sun size={14} />
                    <Wind size={14} />
                </div>
            </div>
        </motion.div>
    );
}