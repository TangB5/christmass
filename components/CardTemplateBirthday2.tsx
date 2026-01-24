'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Gift, Star, Sparkles } from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplateBirthdayHolographic({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? 'Joyeux Anniversaire' : 'Happy Birthday';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-[#050505] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10"
        >
            {/* --- FOND : MESH GRADIENT HOLOGRAPHIQUE --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#4f46e5_0%,transparent_50%),radial-gradient(circle_at_100%_100%,#ec4899_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#06b6d4_0%,transparent_50%)] opacity-40" />

            {/* TEXTURE DE GRAIN (Effet papier photo brillant) */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none mix-blend-overlay z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* --- SPHÈRES 3D FLOTTANTES --- */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i
                    }}
                    className="absolute rounded-full blur-2xl opacity-30"
                    style={{
                        width: `${100 + i * 50}px`,
                        height: `${100 + i * 50}px`,
                        left: `${(i * 25) % 100}%`,
                        top: `${(i * 30) % 100}%`,
                        background: i % 2 === 0 ? '#fbbf24' : '#8b5cf6'
                    }}
                />
            ))}

            <div className="relative h-full flex flex-col z-20 p-6 md:p-10">

                {/* --- HEADER : BADGE NÉON --- */}
                <header className="flex items-center justify-between mb-8">
                    <div className="px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [0, 20, -20, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <PartyPopper size={20} className="text-yellow-400" />
                        </motion.div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Special Day</span>
                    </div>
                    <Star className="text-white/20" size={20} />
                </header>

                {/* --- SECTION CENTRALE : PHOTO & NOM --- */}
                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative group">
                        {/* Anneau lumineux dynamique */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-10px] border border-dashed border-cyan-400/40 rounded-[2.5rem]"
                        />

                        <div className="relative bg-white/5 backdrop-blur-3xl rounded-[2rem] p-4 border border-white/20 shadow-2xl">
                            {imageUrl ? (
                                <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-inner">
                                    <img
                                        src={imageUrl}
                                        alt={name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        crossOrigin="anonymous"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent" />
                                </div>
                            ) : (
                                <div className="w-32 h-32 md:w-44 md:h-44 flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent rounded-xl">
                                    <h2 className="text-5xl font-black text-white/10 italic">#1</h2>
                                </div>
                            )}

                            {/* Petit badge flottant sur l'image */}
                            <div className="absolute -top-3 -right-3 bg-cyan-400 text-black p-2 rounded-lg rotate-12 shadow-lg">
                                <Sparkles size={16} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center space-y-2">
                        <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 leading-none">
                            {name}
                        </h1>
                        <p className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase">
                            {title}
                        </p>
                    </div>
                </div>

                {/* --- ZONE POÈME : EFFET CARTE POSÉE --- */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="relative mt-8 group-hover:-translate-y-2 transition-transform duration-500"
                >
                    {/* Effet de lueur sous la carte */}
                    <div className="absolute inset-0 bg-pink-500/20 blur-xl rounded-3xl" />

                    <div className="relative bg-white rounded-3xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
                        {/* Décoration "Tape" style néon */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-cyan-400 rounded-b-full shadow-[0_0_10px_#22d3ee]" />

                        <div className="flex items-center gap-3 mb-4">
                            <Cake className="text-pink-500" size={18} />
                            <div className="h-[1px] flex-1 bg-gray-100" />
                        </div>

                        <div className="max-h-[120px] overflow-y-auto custom-scrollbar-party pr-2">
                            <p className="text-sm md:text-base text-gray-800 text-center font-medium italic leading-relaxed">
                                {poem}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-between items-center text-gray-300">
                            <Gift size={14} />
                            <div className="flex gap-1">
                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-cyan-400/30" />)}
                            </div>
                            <Sparkles size={14} />
                        </div>
                    </div>
                </motion.div>

                {/* --- FOOTER : ÉDITION --- */}
                <footer className="mt-8 flex justify-center">
                    <div className="flex items-center gap-3 opacity-30 group-hover:opacity-60 transition-opacity">
                        <div className="h-[1px] w-8 bg-white" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white">Edition 2026</span>
                        <div className="h-[1px] w-8 bg-white" />
                    </div>
                </footer>
            </div>

            <style jsx>{`
                .custom-scrollbar-party::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar-party::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-party::-webkit-scrollbar-thumb {
                    background: #f472b6;
                    border-radius: 10px;
                }
            `}</style>
        </motion.div>
    );
}