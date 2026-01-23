'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Bell, Sparkles, Star } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateRedVelvet({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? 'Noël Magique' : 'Magic Christmas';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-[#5a0b0b] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-[#4a0909]"
        >
            {/* 1. Texture velours / bruit */}
            <div className="absolute inset-0 opacity-30 mix-blend-multiply"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

            {/* 2. Rayons de lumière (Spotlight) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#991b1b_0%,transparent_70%)] opacity-60" />

            {/* 3. Contenu Layout "Palace" */}
            <div className="relative h-full flex flex-col items-center p-8 z-10">

                {/* Badge Top */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-8 flex flex-col items-center"
                >
                    <Bell className="text-amber-400 mb-2" size={24} strokeWidth={1.5} />
                    <div className="h-[1px] w-12 bg-amber-400/40" />
                </motion.div>

                <h1 className="text-3xl font-serif text-amber-200 tracking-[0.2em] uppercase text-center mb-10">
                    {title}
                </h1>

                {/* Image Section avec Coins biseautés */}
                <div className="relative w-full aspect-[4/3] mb-8">
                    <div className="absolute -inset-2 border border-amber-400/20 rounded-xl" />
                    <div className="w-full h-full bg-stone-900 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <Star className="text-amber-400 opacity-20" size={60} />
                            </div>
                        )}
                    </div>
                </div>

                {/* Poem Bloc */}
                <div className="relative flex-1 flex flex-col items-center justify-center text-center px-4">
                    <Sparkles className="text-amber-400/30 mb-4" size={20} />
                    <p className="text-amber-50/90 font-serif italic text-lg leading-relaxed">
                        {poem}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        <div className="h-[1px] w-8 bg-amber-400/40" />
                        <span className="text-amber-400 font-bold text-xs tracking-[0.3em] uppercase">{name}</span>
                        <div className="h-[1px] w-8 bg-amber-400/40" />
                    </div>
                </div>

                {/* Footer Ribbon */}
                <div className="mt-6">
                    <Gift className="text-amber-400/50" size={20} />
                </div>
            </div>

            {/* Effet de lueur dorée aux coins */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-amber-400/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-amber-400/10 blur-[60px] rounded-full" />
        </motion.div>
    );
}