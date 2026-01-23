'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Droplet, Star, Feather, Sun } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateEasterGlass({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Renouveau' : 'Renewal';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[radial-gradient(circle_at_top_left,#fefce8_0%,#f0f9ff_100%)] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/80"
        >
            {/* 1. Dégradé de fond doux */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fef3c7_0%,transparent_60%)] opacity-30" />

            {/* 2. Formes de verre dépoli flottantes */}
            <motion.div
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-3/5 h-3/5 bg-white/30 backdrop-blur-3xl rounded-[3rem] border border-white/50 shadow-inner"
            />
            <motion.div
                animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
                className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-white/20 backdrop-blur-2xl rounded-[3rem] border border-white/30 shadow-inner"
            />

            {/* 3. Contenu Layout "Aérien" */}
            <div className="relative h-full flex flex-col p-8 z-10">

                {/* Header avec motifs de plumes */}
                <div className="flex justify-between items-start mb-8">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="flex items-center gap-2 mb-2 text-pink-300">
                            <Feather size={16} strokeWidth={1} />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Édition Lumière</span>
                        </div>
                        <h1 className="text-4xl font-serif text-slate-800 tracking-tight italic">
                            {title}
                        </h1>
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-yellow-300/40"
                    >
                        <Sun size={40} strokeWidth={1} />
                    </motion.div>
                </div>

                {/* Section Image "Flottante" */}
                <div className="flex-1 flex items-center justify-center py-4">
                    <div className="relative w-52 h-52 bg-white/70 backdrop-blur-md rounded-full border border-white/80 shadow-xl p-2 group">
                        <div className="w-full h-full rounded-full overflow-hidden border border-white/50">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-700" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                                    <Droplet size={48} className="text-blue-200" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Poème avec blocs transparents */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-auto"
                >
                    <div className="bg-white/60 backdrop-blur-xl border border-white/90 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden">
                        <div className="flex justify-center gap-4 mb-4 text-purple-300">
                            <Cloud size={16} />
                            <Star size={16} />
                            <Droplet size={16} />
                        </div>

                        <p className="text-slate-700 text-center text-sm md:text-base leading-relaxed font-light tracking-wide italic relative z-10">
                            &#34;{poem}&#34;
                        </p>

                        <div className="mt-4 flex items-center justify-center gap-2">
                            <div className="h-[1px] w-4 bg-yellow-300/30" />
                            <span className="text-sm font-bold text-slate-800 tracking-widest uppercase">{name}</span>
                            <div className="h-[1px] w-4 bg-yellow-300/30" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}