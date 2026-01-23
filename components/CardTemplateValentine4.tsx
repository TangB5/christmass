'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { CardTemplateProps } from "@/lib/types";

export default function CardTemplate4Valentine({ name, poem, imageUrl, language, isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Joyeuse Saint-Valentin' : 'Mon Amour')
        : (isBusiness ? 'Happy Valentine\'s Day' : 'My Love');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] bg-[#1a0b0d] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-[#2a1215]"
        >
            {/* 1. Luxurious Velvet Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3d131a_0%,_#1a0b0d_100%)]" />

            {/* 2. Animated Gold Dust Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-rose-200/40 rounded-full"
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-20%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            {/* 3. Decorative Frame (Double Border) */}
            <div className="absolute inset-4 border border-rose-300/10 rounded-xl" />
            <div className="absolute inset-6 border border-rose-300/20 rounded-lg" />

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-between py-12 px-8 z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center space-y-4"
                >
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-rose-300/50" />
                        <Sparkles className="text-rose-300/60 w-4 h-4" />
                        <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-rose-300/50" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif text-rose-100 tracking-[0.2em] uppercase italic">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait Section */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="relative"
                >
                    {/* Floating Glow */}
                    <div className="absolute -inset-10 bg-rose-500/10 blur-[60px] rounded-full" />

                    {imageUrl ? (
                        <div className="relative group">
                            {/* Orbital Hearts */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-4 border border-dashed border-rose-300/20 rounded-full"
                            />
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1.5 bg-gradient-to-b from-rose-200/50 to-rose-900/50 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#1a0b0d]">
                                    <img
                                        src={imageUrl}
                                        alt={name}
                                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-6xl font-serif text-rose-100 drop-shadow-2xl italic tracking-tighter">
                                {name}
                            </h2>
                            <Heart className="mx-auto mt-4 text-rose-300/40 w-8 h-8 fill-current" />
                        </div>
                    )}
                </motion.div>

                {/* Poem Section (The Vellum Paper) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="w-full max-w-sm relative"
                >
                    <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-sm rounded-2xl transform rotate-1" />
                    <div className="relative bg-white/[0.05] border border-white/10 p-8 rounded-2xl shadow-2xl text-center">
                        <Quote className="absolute top-4 left-4 w-6 h-6 text-rose-300/20 rotate-180" />
                        <p className="text-rose-50 text-lg md:text-xl font-serif italic leading-relaxed tracking-wide">
                            {poem}
                        </p>
                        <div className="mt-6 flex flex-col items-center">
                            <div className="h-px w-10 bg-rose-300/30 mb-2" />
                            <span className="text-rose-300/80 text-xs uppercase tracking-[0.3em] font-sans">
                                Forever Yours
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Final Accent */}
                <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <Heart className="text-rose-400/40 w-4 h-4" fill="currentColor" />
                </motion.div>
            </div>

            {/* Luxury Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        </motion.div>
    );
}