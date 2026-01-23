'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplateSeduction({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? "Rien que pour toi" : "Only for you";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-full aspect-[3/4] bg-[#0a0a0a] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5"
        >
            {/* Background avec dégradé radial profond */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2c0a0a_0%,#050505_100%)]" />

            {/* Effet Bokeh (Lumières diffuses) */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full blur-[80px] opacity-20"
                        style={{
                            width: `${200 + i * 50}px`,
                            height: `${200 + i * 50}px`,
                            background: i % 2 === 0 ? '#ff0000' : '#ffd700',
                            left: `${Math.random() * 80 - 20}%`,
                            top: `${Math.random() * 80 - 20}%`,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{ duration: 8 + i, repeat: Infinity }}
                    />
                ))}
            </div>

            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10">

                {/* Header Élégant */}
                <header className="flex flex-col items-center gap-2">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                        style={{ backgroundColor: '#D4AF37' }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">
                        {title}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
                        {name}
                    </h2>
                </header>

                {/* Portrait Mystérieux */}
                <div className="relative group">
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-sm"
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={name}
                                className="w-full h-full rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                crossOrigin="anonymous"
                            />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-b from-neutral-800 to-neutral-950 flex items-center justify-center">
                                <Sparkles className="text-[#D4AF37]/20" size={40} />
                            </div>
                        )}
                    </motion.div>
                    {/* Overlay de brillance qui passe sur l'image */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full"
                        animate={{ translateX: ['100%', '-100%'] }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    />
                </div>

                {/* Poème Intime */}
                <div className="w-full max-w-sm text-center">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                    <div className="max-h-[120px] overflow-y-auto custom-scrollbar px-4">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-light font-serif italic">
                            {poem}
                        </p>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-6" />
                </div>

                {/* Footer Discret */}
                <footer className="flex flex-col items-center gap-4">
                    <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                        ))}
                    </div>
                    <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-medium">
                        Confidentiel & Personnel
                    </p>
                </footer>
            </div>

            {/* CSS pour masquer la scrollbar mais garder le scroll */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                }
                .custom-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </motion.div>
    );
}