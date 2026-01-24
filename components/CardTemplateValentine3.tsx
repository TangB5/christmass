'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardTemplateProps } from "@/lib/types";
import { Heart, Sparkles } from 'lucide-react';

export default function CardTemplateValentineFinal({ name, poem, imageUrl, language }: CardTemplateProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#500724] rounded-[3rem] overflow-hidden shadow-[0_20px_80px_rgba(153,27,27,0.5)] border-[4px] border-white/10 group"
        >
            {/* --- TEXTURE : SOIE ROUGE PROFOND --- */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#991b1b] via-[#450a0a] to-[#7f1d1d] z-0" />
            <div className="absolute inset-0 opacity-30 mix-blend-soft-light pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]" />

            {/* --- ANIMATION : PÉTALES DE ROSES FLOTTANTS --- */}
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -50, x: Math.random() * 400, opacity: 0, rotate: 0 }}
                        animate={{
                            y: [0, 600],
                            x: [null, Math.random() * 300],
                            opacity: [0, 0.8, 0],
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 2
                        }}
                        className="absolute text-rose-300/40"
                    >
                        {/* On simule un pétale avec un coeur déformé */}
                        <Heart size={Math.random() * 20 + 10} fill="currentColor" className="blur-[1px]" />
                    </motion.div>
                ))}
            </div>

            {/* --- EFFET : GLOW ROSE POUDRÉ --- */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-rose-500/30 rounded-full blur-[100px] z-0" />

            <div className="relative h-full flex flex-col z-20 p-8 md:p-10">

                {/* HEADER : LUXE & OR ROSE */}
                <header className="flex flex-col items-center mb-6">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart className="text-rose-400 fill-rose-400 mb-2 shadow-[0_0_15px_rgba(251,113,133,0.5)]" size={28} />
                    </motion.div>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
                </header>

                {/* IMAGE : LE MÉDAILLON D'AMOUR */}
                <div className="relative w-full h-[40%] flex justify-center mb-8">
                    <div className="relative aspect-square h-full">
                        {/* Bordures ornementales */}
                        <div className="absolute inset-[-8px] rounded-full border-2 border-dashed border-rose-300/30 animate-spin-slow" />
                        <div className="absolute inset-[-15px] rounded-full border-[1px] border-rose-400/20" />

                        <div className="relative h-full w-full rounded-full overflow-hidden border-[6px] border-white shadow-2xl">
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    crossOrigin="anonymous"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                                    <Sparkles size={40} className="text-white/50" />
                                </div>
                            )}
                            {/* Reflet satiné sur la photo */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-transparent to-white/10" />
                        </div>
                    </div>
                </div>

                {/* POÈME : DÉPOSE SUR DE LA DENTELLE MODERNE */}
                <div className="flex-1 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-100 mb-4 tracking-tight drop-shadow-md">
                        {name}
                    </h2>

                    <div className="relative w-full bg-white/5 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 shadow-inner">
                        <div className="max-h-[140px] overflow-y-auto custom-scrollbar-valentine pr-2">
                            <p className="text-lg md:text-xl font-medium leading-relaxed text-rose-50/90 font-serif italic text-center">
                                "{poem}"
                            </p>
                        </div>
                        {/* Petites icônes décoratives */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#500724] px-4 py-1 rounded-full border border-white/10 text-rose-300 flex gap-2">
                            <Sparkles size={10} />
                            <Sparkles size={10} />
                            <Sparkles size={10} />
                        </div>
                    </div>
                </div>

                {/* FOOTER : SIGNATURE ÉLÉGANTE */}
                <footer className="mt-8 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-rose-300/60 mb-1">
                        {language === 'fr' ? 'Mon Cœur à Toi' : 'My Heart is Yours'}
                    </p>
                    <p className="text-[12px] font-serif italic text-white/30 tracking-widest">
                        Saint-Valentin 2026
                    </p>
                </footer>
            </div>

            <style jsx>{`
                .custom-scrollbar-valentine::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar-valentine::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-valentine::-webkit-scrollbar-thumb {
                    background: rgba(244, 114, 182, 0.3);
                    border-radius: 10px;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
            `}</style>
        </motion.div>
    );
}