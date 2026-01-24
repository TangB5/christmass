'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    Star,
    Gift,
    PartyPopper,
    Cake,
    Crown
} from 'lucide-react';

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplateBirthdayPremium({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Joyeux Anniversaire' : 'Happy Birthday';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0F172A] rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-[1px] border-white/10 group"
        >
            {/* --- FOND : MESH GRADIENT "NIGHT PARTY" --- */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#4338ca_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#db2777_0%,transparent_40%),radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0f172a_100%)]" />

            {/* TEXTURE DE GRAIN / POUSSIÈRE D'ÉTOILE */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

            {/* --- CONFETTIS GÉOMÉTRIQUES ANIMÉS --- */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{
                            y: [0, 600],
                            x: [0, Math.sin(i) * 100],
                            rotate: 360,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 7,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.5
                        }}
                        className={`absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                            i % 3 === 0 ? 'bg-yellow-400' : i % 3 === 1 ? 'bg-pink-500' : 'bg-cyan-400'
                        } blur-[0.5px]`}
                        style={{ left: `${Math.random() * 100}%` }}
                    />
                ))}
            </div>

            {/* --- CONTENU --- */}
            <div className="relative h-full flex flex-col z-20 p-6 md:p-10">

                {/* HEADER : ICONES NÉON */}
                <header className="flex justify-between items-start mb-4 md:mb-8">
                    <motion.div
                        animate={{ rotate: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    >
                        <Crown className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" size={24} />
                    </motion.div>
                    <div className="text-right">
                        <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-white/40">VIP Invitation</span>
                        <div className="flex gap-1 justify-end mt-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#db2777]" />
                            <div className="w-8 h-[2px] bg-pink-500/20 self-center" />
                        </div>
                    </div>
                </header>

                {/* VISUEL CENTRAL : PORTRAIT ÉCLATANT --- */}
                <div className="flex-1 flex flex-col items-center justify-center gap-6">
                    <div className="relative group">
                        {/* Cercles d'énergie derrière la photo */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-[-15px] border border-dashed border-white/20 rounded-full"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-[-30px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-[40px] rounded-full"
                        />

                        {imageUrl ? (
                            <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full border-[6px] border-white/90 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    crossOrigin="anonymous"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                            </div>
                        ) : (
                            <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full bg-white/5 backdrop-blur-xl border-2 border-white/20 flex items-center justify-center">
                                <span className="text-5xl md:text-7xl font-black text-white/10 uppercase tracking-tighter">{name[0]}</span>
                            </div>
                        )}

                        {/* Badge Nom flottant */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white rounded-full shadow-xl">
                            <h2 className="text-sm md:text-lg font-black text-indigo-950 whitespace-nowrap uppercase tracking-widest">
                                {name}
                            </h2>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                            {title}
                        </h1>
                    </div>
                </div>

                {/* ZONE DE TEXTE : GLASSMORPHE --- */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full max-w-sm mx-auto mt-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
                >
                    <div className="max-h-[120px] md:max-h-[150px] overflow-y-auto custom-scrollbar-bday pr-2">
                        <p className="text-sm md:text-lg font-medium leading-relaxed text-white/90 italic text-center font-serif">
                            "{poem}"
                        </p>
                    </div>
                </motion.div>

                {/* FOOTER : TECH & PARTY --- */}
                <footer className="mt-8 flex justify-between items-end">
                    <div className="flex gap-3">
                        <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                            <Gift size={18} />
                        </div>
                        <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                            <Cake size={18} />
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-1">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[8px] font-black text-white/60 uppercase tracking-widest">Live Celebration</span>
                        </div>
                        <p className="text-[10px] font-mono text-white/30 italic">EST. 2026 • STUDIO ART</p>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                .custom-scrollbar-bday::-webkit-scrollbar {
                    width: 3px;
                }
                .custom-scrollbar-bday::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-bday::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
            `}</style>
        </motion.div>
    );
}