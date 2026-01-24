'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Flower2, Sparkles } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate1MothersDay({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Mères' : 'Bonne Fête Maman')
        : 'Happy Mother\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#FFF9F9] rounded-[2.5rem] overflow-hidden shadow-[0_30px_100px_rgba(251,113,133,0.3)] border-[1px] border-rose-200/50 group"
        >
            {/* --- FOND : MESH GRADIENT DOUX & TEXTURE LIN --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFE4E6_0%,transparent_50%),radial-gradient(circle_at_bottom_left,#FFEDF5_0%,transparent_50%)]" />
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-10 bg-[url('https://www.transparenttextures.com/patterns/white-linen.png')]" />

            {/* --- ÉLÉMENTS FLOTTANTS : PÉTALES AÉRIENS --- */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{
                            y: [0, 600],
                            x: [0, Math.sin(i) * 50],
                            rotate: 360,
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 1.5
                        }}
                        className="absolute"
                        style={{ left: `${(i * 15) % 100}%` }}
                    >
                        <Flower2 size={Math.random() * 20 + 10} className="text-rose-300/40" />
                    </motion.div>
                ))}
            </div>

            {/* --- CONTENU --- */}
            <div className="relative h-full flex flex-col z-20 p-6 md:p-10 lg:p-12">

                {/* HEADER : ÉLÉGANCE OR ROSE */}
                <header className="flex flex-col items-center mb-6 md:mb-10 text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="mb-4 p-3 rounded-full bg-rose-50 border border-rose-100 shadow-sm"
                    >
                        <Heart className="text-rose-400 fill-rose-400" size={20} />
                    </motion.div>
                    <h1 className="text-2xl md:text-4xl font-serif font-black italic text-rose-900 tracking-tight leading-tight">
                        {title}
                    </h1>
                    <div className="h-[1.5px] w-16 bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-4" />
                </header>

                {/* VISUEL CENTRAL : CADRE "MÉDAILLON" RESPONSIVE */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6 md:gap-8">
                    <div className="relative group">
                        {/* Aura lumineuse */}
                        <div className="absolute inset-[-20px] bg-rose-200/30 blur-[40px] rounded-full animate-pulse" />

                        {imageUrl ? (
                            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-[8px] border-white shadow-[0_15px_35px_rgba(0,0,0,0.1)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    crossOrigin="anonymous"
                                />
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]" />
                            </div>
                        ) : (
                            <div className="py-6 text-center">
                                <h2 className="text-4xl md:text-6xl font-serif italic font-bold text-rose-800 tracking-tighter">
                                    {name}
                                </h2>
                            </div>
                        )}

                        {/* Petites fleurs décoratives autour du cadre */}
                        <Flower2 className="absolute -top-2 -right-2 text-rose-400 bg-white rounded-full p-1 shadow-md" size={32} />
                        <Heart className="absolute -bottom-2 -left-2 text-rose-300 fill-rose-300 bg-white rounded-full p-1.5 shadow-md" size={28} />
                    </div>

                    {/* ZONE DE TEXTE : EFFET PAPIER PRESSÉ */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-full max-w-md bg-white/40 backdrop-blur-sm border border-white/60 rounded-[2rem] p-6 md:p-8 shadow-[0_10px_30px_rgba(251,113,133,0.1)]"
                    >
                        <div className="max-h-[140px] md:max-h-[180px] overflow-y-auto custom-scrollbar-mom">
                            <p className="text-base md:text-xl font-serif italic leading-relaxed text-rose-900/80 text-center">
                                "{poem}"
                            </p>
                        </div>

                        <div className="mt-4 flex justify-center gap-1.5">
                            <Sparkles size={12} className="text-rose-300" />
                            <div className="h-[1px] w-8 bg-rose-200 self-center" />
                            <Sparkles size={12} className="text-rose-300" />
                        </div>
                    </motion.div>
                </div>

                {/* FOOTER : SIGNATURE DISCRÈTE */}
                <footer className="mt-8 flex flex-col items-center gap-3">
                    <span className="px-4 py-1 rounded-full bg-rose-100/50 text-[10px] font-black uppercase tracking-[0.3em] text-rose-800/60">
                        {language === 'fr' ? 'Créé avec amour' : 'Made with love'}
                    </span>
                    <div className="flex items-center gap-4 w-full">
                        <div className="h-[0.5px] flex-1 bg-rose-200/50" />
                        <span className="text-[12px] font-serif italic text-rose-400">2026</span>
                        <div className="h-[0.5px] flex-1 bg-rose-200/50" />
                    </div>
                </footer>
            </div>

            <style jsx>{`
                .custom-scrollbar-mom::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar-mom::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-mom::-webkit-scrollbar-thumb {
                    background: rgba(251, 113, 133, 0.2);
                    border-radius: 10px;
                }
            `}</style>
        </motion.div>
    );
}