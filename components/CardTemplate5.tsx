'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Wind, MapPin, Navigation } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateNoelNordic({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Hiver Blanc' : 'White Winter';

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-slate-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
        >
            {/* 1. Fond avec dégradé de glace */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e0f2fe_0%,transparent_60%)]" />

            {/* 2. Flocons stylisés en arrière-plan */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Snowflake size={400} strokeWidth={0.5} className="rotate-12" />
            </div>

            {/* 3. Contenu Layout "Editorial" */}
            <div className="relative h-full flex flex-col p-10 z-10">

                {/* Header avec coordonnées fictives */}
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sky-600">
                            <Navigation size={12} fill="currentColor" />
                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Arctic Circle</span>
                        </div>
                        <h1 className="text-4xl font-light text-slate-900 tracking-tighter uppercase">
                            {title}
                        </h1>
                    </div>
                    <div className="text-slate-300">
                        <Wind size={40} strokeWidth={1} />
                    </div>
                </div>

                {/* Section Image "Polaire" */}
                <div className="flex-1 flex flex-col justify-center items-center">
                    {imageUrl ? (
                        <div className="relative w-full aspect-square max-w-[240px]">
                            <div className="absolute inset-4 border border-sky-200 rounded-full animate-pulse" />
                            <div className="w-full h-full rounded-full overflow-hidden border-8 border-white shadow-xl">
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale brightness-110" />
                            </div>
                        </div>
                    ) : (
                        <h2 className="text-6xl font-thin text-slate-200 uppercase tracking-widest rotate-90 leading-none">
                            {name}
                        </h2>
                    )}
                </div>

                {/* Footer Message Bloc */}
                <div className="mt-auto space-y-6">
                    <p className="text-slate-500 font-light text-lg leading-relaxed text-right border-r-2 border-sky-400 pr-6 italic">
                        &#34;{poem}&#34;
                    </p>
                    <div className="flex justify-between items-center text-slate-400">
                        <span className="text-[10px] font-bold uppercase tracking-widest">{name}</span>
                        <div className="h-[1px] w-20 bg-slate-200" />
                        <span className="text-[10px] font-mono">© 2026_EST.</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}