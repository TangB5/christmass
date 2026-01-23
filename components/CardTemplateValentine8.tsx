'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Leaf, Sprout} from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";


const initialLeaves = [...Array(8)].map((_, i) => ({
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 5,
    delay: Math.random() * 5,
    size: 16 + Math.random() * 10,
    xOffset: Math.sin(i) * 50,
}));

export default function CardTemplateBotanical({ name, poem, imageUrl, language }: CardTemplateProps) {
    const title = language === 'fr' ? "Amour Naturel" : "Natural Love";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[3/4] bg-[#F0F4F0] rounded-xl overflow-hidden shadow-xl"
        >
            {/* Arrière-plan Organique */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D8E6D8] rounded-full blur-[80px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E6D8D8] rounded-full blur-[80px] opacity-60 -translate-x-1/2 translate-y-1/2"></div>

            {/* Feuilles tombantes (Particules) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {initialLeaves.map((leaf, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-[#8FA88F]"
                        style={{
                            left: leaf.left,
                            top: -20,
                        }}
                        animate={{
                            y: [0, 600],
                            x: [0, leaf.xOffset],
                            rotate: [0, 360],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: leaf.duration,
                            repeat: Infinity,
                            delay: leaf.delay,
                            ease: "linear"
                        }}
                    >
                        <Leaf size={leaf.size} />
                    </motion.div>
                ))}
            </div>


            {/* Cadre de contour fin */}
            <div className="absolute inset-4 border border-[#8FA88F]/30 rounded-lg" />

            <div className="relative h-full flex flex-col items-center justify-center p-8 z-10 gap-6">

                {/* Image Organique */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-2 border border-[#8FA88F]/40 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_10s_linear_infinite]" />
                    <div className="w-48 h-48 overflow-hidden rounded-[50%_50%_50%_50%/60%_60%_40%_40%] shadow-lg bg-white border-4 border-white">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-[#E8EFE8] flex items-center justify-center text-[#8FA88F]">
                                <Sprout size={48} strokeWidth={1} />
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Typographie Élégante */}
                <div className="text-center">
                    <h1 className="font-serif text-3xl text-[#5A6B5A] tracking-wide mb-1">
                        {name}
                    </h1>
                    <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
                        <div className="h-px w-8 bg-[#5A6B5A]" />
                        <span className="text-[10px] uppercase tracking-widest text-[#5A6B5A]">{title}</span>
                        <div className="h-px w-8 bg-[#5A6B5A]" />
                    </div>
                </div>

                {/* Poème sur "Carte" givrée */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/40 backdrop-blur-sm p-6 rounded-lg shadow-sm w-full border border-white/50"
                >
                    <p className="text-[#4A554A] text-center font-serif text-lg italic leading-relaxed">
                        {poem}
                    </p>
                </motion.div>

                <div className="absolute bottom-6">
                    <Leaf size={16} className="text-[#8FA88F] opacity-50" />
                </div>
            </div>
        </motion.div>
    );
}