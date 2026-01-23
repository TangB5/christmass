'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Award, Zap, Target, Cpu } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate2FathersDay({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Bonne Fête Papa')
        : 'Happy Father\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, perspective: 1000, rotateX: 10 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-[#020617] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-blue-500/30"
        >
            {/* 1. Fond : Gradient Dynamique & Grille Cyber */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-[#020617] to-slate-950" />
            <div className="absolute inset-0 opacity-[0.15]"
                 style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* 2. Éléments Décoratifs "HUD" */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Coins Techniques */}
                <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg" />
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-cyan-400/50 rounded-br-lg" />

                {/* Icônes flottantes subtiles */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-500/20"
                >
                    <Cpu size={100} />
                </motion.div>
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col p-10 z-10 items-center justify-between">

                {/* Header : Titre Impactant */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center space-y-2"
                >
                    <div className="flex justify-center items-center gap-2 mb-1">
                        <Zap size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-[0.4em] uppercase">Security Level: Maximum</span>
                    </div>
                    <h1 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg uppercase">
                        {title}
                    </h1>
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.2, 1, 0.2] }}
                                transition={{ delay: i * 0.1, duration: 2, repeat: Infinity }}
                                className="h-1 w-6 bg-blue-500 rounded-full"
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Section Image : Le Médaillon Technologique */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative"
                >
                    <div className="absolute -inset-6 bg-blue-500/20 blur-[60px] rounded-full animate-pulse" />
                    <div className="relative p-2 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                        <div className="w-44 h-44 rounded-2xl overflow-hidden bg-slate-900 border-2 border-white/20">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <Shield size={64} className="text-blue-500/30" />
                                </div>
                            )}
                        </div>
                        {/* Badge Flottant */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-4 -right-4 bg-yellow-500 text-slate-950 p-3 rounded-2xl shadow-xl border-2 border-white"
                        >
                            <Award size={20} fill="currentColor" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bloc Poème : "Glassmorphism" Dark */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-3 opacity-20">
                        <Target size={20} className="text-cyan-400" />
                    </div>

                    <p className="text-blue-100 text-center font-medium italic leading-relaxed text-lg mb-6">
                        "{poem}"
                    </p>

                    <div className="flex flex-col items-center border-t border-white/10 pt-4">
                        <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest mb-1">Authenticated Signature</span>
                        <span className="text-2xl font-black text-white tracking-widest uppercase">
                            {name}
                        </span>
                    </div>
                </motion.div>

                {/* Footer : Status Bar */}
                <div className="flex gap-4 items-center opacity-40 text-blue-400">
                    <Star size={12} fill="currentColor" />
                    <div className="h-px w-20 bg-blue-500/50" />
                    <Star size={12} fill="currentColor" />
                </div>
            </div>
        </motion.div>
    );
}