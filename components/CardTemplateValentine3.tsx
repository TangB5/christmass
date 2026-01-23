'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateModernArt({ name, poem, imageUrl, language }: CardTemplateProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#F5F2ED] rounded-[2rem] overflow-hidden shadow-2xl border border-black/5"
        >
            {/* Formes Géométriques de fond (Abstrait) */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-[#E2D1C3] rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-[#B4A79E] rounded-full blur-2xl opacity-40" />

            {/* Typographie Géante en Arrière-plan (Effet Outline) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[12rem] font-black text-black/[0.03] uppercase leading-none rotate-90">
                    {name}
                </span>
            </div>

            <div className="relative h-full flex flex-col p-8 md:p-12 z-10">

                {/* Header Style Éditorial */}
                <header className="flex justify-between items-start mb-8">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40 mb-1">
                            {language === 'fr' ? 'Note Personnelle' : 'Personal Note'}
                        </span>
                        <div className="h-1 w-12 bg-black" />
                    </div>
                    <span className="font-serif italic text-lg text-black/60">No. 001</span>
                </header>

                <div className="flex-1 flex flex-col md:flex-row gap-8 items-center md:items-end">

                    {/* Portrait avec masque asymétrique */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="relative w-48 h-64 md:w-56 md:h-72 shrink-0 shadow-2xl rotate-[-2deg]"
                    >
                        {imageUrl ? (
                            <div className="w-full h-full rounded-2xl overflow-hidden border-[8px] border-white shadow-xl">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                                    crossOrigin="anonymous"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full bg-neutral-200 rounded-2xl flex items-center justify-center">
                                <div className="w-12 h-12 border-2 border-black/10 rounded-full" />
                            </div>
                        )}
                        {/* Petit label scotché */}
                        <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 shadow-lg rounded-sm rotate-[5deg]">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                                {name}
                            </span>
                        </div>
                    </motion.div>

                    {/* Zone de texte alignée à droite */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex-1 flex flex-col justify-end text-right"
                    >
                        <div className="space-y-4">
                            <div className="max-h-[180px] overflow-y-auto custom-scrollbar-minimal">
                                <p className="text-xl md:text-2xl font-serif leading-snug text-black/80 italic">
                                    {poem}
                                </p>
                            </div>
                            <div className="flex justify-end gap-2">
                                <div className="w-2 h-2 rounded-full bg-black" />
                                <div className="w-20 h-[1px] bg-black/20 self-center" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer Minimaliste */}
                <footer className="mt-12 flex justify-between items-end border-t border-black/5 pt-6">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                        {new Date().getFullYear()} © Studio Art
                    </p>
                    <div className="flex gap-4">
                        <div className="w-3 h-3 border border-black rounded-full" />
                        <div className="w-3 h-3 bg-black rounded-full" />
                    </div>
                </footer>
            </div>

            <style jsx>{`
                .custom-scrollbar-minimal::-webkit-scrollbar {
                    width: 2px;
                }
                .custom-scrollbar-minimal::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar-minimal::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </motion.div>
    );
}