'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Joystick, Zap, Rocket, Gamepad2, Ghost } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateBirthdayArcade({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'NIVEAU SUPÉRIEUR' : 'LEVEL UP';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#020024] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.3)] border-4 border-[#1e1b4b]"
        >
            {/* 1. Grille Tron-style au sol */}
            <div className="absolute inset-0 opacity-20"
                 style={{ backgroundImage: 'linear-gradient(transparent 95%, #8b5cf6 95%), linear-gradient(90deg, transparent 95%, #8b5cf6 95%)', backgroundSize: '30px 30px', perspective: '500px', transform: 'rotateX(60deg) translateY(100px)' }} />

            {/* 2. Éléments 8-bit flottants */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute top-10 left-10 text-cyan-400 opacity-50"><Ghost size={32}/></motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="absolute bottom-40 right-10 text-yellow-400 opacity-50"><Zap size={24} fill="currentColor"/></motion.div>
            </div>

            {/* 3. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10 items-center justify-between">

                {/* Header Score */}
                <div className="w-full flex justify-between items-center border-b-2 border-dashed border-cyan-500/30 pb-4">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Score: 2026</span>
                        <h1 className="text-2xl font-black text-white italic tracking-tighter">
                            {title}
                        </h1>
                    </div>
                    <Gamepad2 size={32} className="text-fuchsia-500 animate-pulse" />
                </div>

                {/* Portrait : Écran CRT */}
                <div className="relative">
                    <div className="absolute -inset-4 bg-fuchsia-500/20 blur-2xl rounded-lg" />
                    <div className="relative w-48 h-48 md:w-96 md:h-96 bg-[#111] border-4 border-cyan-500 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover scanline opacity-90" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Rocket size={60} className="text-white/10" />
                            </div>
                        )}
                        {/* Effet Scanline */}
                        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />
                    </div>
                </div>

                {/* Zone Poème : Fenêtre de Dialogue */}
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="w-full bg-[#1e1b4b]/80 backdrop-blur-md border-l-4 border-fuchsia-500 p-4"
                >
                    <p className="font-mono text-sm text-cyan-100 leading-relaxed">
                        <span className="text-fuchsia-400 mr-2">{'>'}</span>
                        "{poem}"
                    </p>
                </motion.div>

                {/* Footer Player Name */}
                <div className="w-full flex justify-center">
                    <div className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-sm skew-x-[-12deg]">
                        <span className="text-white font-black uppercase tracking-widest text-lg drop-shadow-md">
                            {name}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}