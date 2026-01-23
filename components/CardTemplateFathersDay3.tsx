'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap, Award, Crown } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate3FathersDay({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Bonne Fête Papa')
        : 'Happy Father\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0f172a] rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-[#1e293b]"
        >
            {/* 1. Fond : Grille Technique (Blueprint) */}
            <div className="absolute inset-0 opacity-20"
                 style={{
                     backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px)`,
                     backgroundSize: '24px 24px'
                 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-500/20" />

            {/* 2. Éléments Décoratifs Flottants (Épurés) */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 text-blue-500/10"
                >
                    <ShieldCheck size={280} />
                </motion.div>
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-10 px-6 z-10">

                {/* Header : Style Insigne */}
                <div className="text-center">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="flex items-center justify-center gap-2 mb-2"
                    >
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]">Numéro #1</span>
                        <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    </motion.div>

                    <h1 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                        {title}
                    </h1>
                </div>

                {/* Portrait : Style Médaille / Octogonal */}
                <div className="relative group">
                    <motion.div
                        initial={{ scale: 0.5, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="relative z-10"
                    >
                        {/* Cadre en acier brossé */}
                        <div className="p-1.5 bg-gradient-to-tr from-slate-400 via-white to-slate-400 rounded-3xl shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                            <div className="w-44 h-44 rounded-[1.4rem] overflow-hidden bg-slate-800 border-2 border-slate-900">
                                {imageUrl ? (
                                    <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[1.1]" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-slate-900">
                                        <Crown size={64} className="text-blue-500/30" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Badges de Victoire */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-4 -left-4 bg-yellow-500 text-slate-900 p-2.5 rounded-xl shadow-lg border-2 border-white"
                        >
                            <Trophy size={20} fill="currentColor" />
                        </motion.div>
                        <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-2.5 rounded-xl shadow-lg border-2 border-white">
                            <Zap size={20} fill="currentColor" />
                        </div>
                    </motion.div>
                </div>

                {/* Bloc Poème : "Dark Mode" Premium */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
                >
                    {/* Accent de côté */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500" />

                    <div className="flex justify-between items-center mb-4 text-slate-500">
                        <Award size={18} />
                        <div className="h-[1px] flex-1 mx-4 bg-slate-800" />
                        <span className="text-xs font-mono">2026</span>
                    </div>

                    <p className="text-slate-200 text-center font-bold leading-relaxed italic text-base md:text-lg">
                        "{poem}"
                    </p>

                    <div className="mt-6 text-center">
                        <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 uppercase tracking-tighter">
                            — {name}
                        </span>
                    </div>
                </motion.div>

                {/* Footer discret : Icônes de Force */}
                <div className="flex gap-6 opacity-30">
                    <Star size={12} className="text-white" />
                    <Star size={12} className="text-white" />
                    <Star size={12} className="text-white" />
                </div>
            </div>
        </motion.div>
    );
}