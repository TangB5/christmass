'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Mountain, Map, Trees, Footprints } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateFathersDayExplorer({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'L\'Aventure Continue' : 'The Adventure Continues';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full aspect-[3/4] bg-[#2D3436] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-[#3D4446]"
        >
            {/* 1. Fond : Carte topographique discrète */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')]" />
            <div className="absolute top-10 right-10 text-white/5"><Mountain size={200} /></div>

            {/* 2. Contenu Layout */}
            <div className="relative h-full flex flex-col p-8 z-10 text-[#DFE6E9]">

                {/* Header : Style Camp de Base */}
                <div className="flex justify-between items-start mb-6 border-b border-white/10 pb-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-orange-400">
                            <Compass size={16} className="animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Guide Suprême</span>
                        </div>
                        <h1 className="text-3xl font-black uppercase tracking-tighter">
                            {title}
                        </h1>
                    </div>
                    <Trees className="text-green-400/30" size={40} />
                </div>

                {/* Portrait : Fenêtre "Jumelles" */}
                <div className="flex-1 flex items-center justify-center relative">
                    <div className="absolute w-40 h-40 border-4 border-orange-400/20 rounded-full scale-125 animate-ping opacity-20" />
                    <div className="relative w-44 h-44 rounded-full border-4 border-white shadow-2xl overflow-hidden p-1 bg-white">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            {imageUrl ? (
                                <img src={imageUrl} alt={name} className="w-full h-full object-cover saturate-[1.2] contrast-110" />
                            ) : (
                                <div className="w-full h-full bg-[#3D4446] flex items-center justify-center">
                                    <Map size={48} className="text-white/10" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer : Zone Message "Feu de Camp" */}
                <div className="mt-8 space-y-6">
                    <div className="bg-[#3D4446] rounded-2xl p-6 shadow-inner border border-white/5 relative">
                        <p className="text-[#DFE6E9] text-center font-bold italic leading-relaxed text-base">
                            "{poem}"
                        </p>
                        <Footprints className="absolute -bottom-3 right-4 text-white/5 rotate-45" size={32} />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[8px] uppercase tracking-widest text-orange-400">Explorateur Certifié</span>
                            <span className="text-2xl font-black tracking-tight">{name}</span>
                        </div>
                        <div className="px-4 py-2 bg-orange-500 rounded-lg text-white font-black text-sm -rotate-3 shadow-lg">
                            TOP DAD
                        </div>
                    </div>
                </div>
            </div>

            {/* Texture de toile de tente */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cloth-alike.png')]" />
        </motion.div>
    );
}