'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkle, TreePine, Gift, PartyPopper, Snowflake } from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate2({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? 'Joyeuses Fêtes' : 'Happy Holidays';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Animated Stars (Lucide Sparkle Icons) */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-300/60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                            rotate: [0, 90, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Sparkle size={Math.random() * 20 + 10} />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col p-8 z-10">
                {/* Header with Animation */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 flex justify-between items-start"
                >
                    <div>
                        <h1 className="text-5xl font-bold text-white mb-2 tracking-tight">
                            {title}
                        </h1>
                        <div className="w-24 h-1.5 bg-christmas-gold rounded-full" />
                    </div>
                    <PartyPopper className="text-christmas-gold w-10 h-10 -rotate-12" />
                </motion.div>

                {/* Image or Name with Modern Card */}
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl relative">
                        {/* Corner Decoration */}
                        <Snowflake className="absolute -top-3 -right-3 text-white/40 w-8 h-8" />

                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-white/30">
                                <Image
                                    src={imageUrl}
                                    alt={name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-white text-center px-8 drop-shadow-2xl">
                                {name}
                            </h2>
                        )}
                    </div>
                </motion.div>

                {/* Poem with Slide Animation */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-2xl p-6 shadow-2xl border-b-4 border-green-800"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <TreePine className="text-green-600 w-6 h-6 fill-green-600/20" />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                    </div>

                    <p className="text-gray-800 text-center prose prose-sm italic leading-relaxed font-semibold">
                        "{poem}"
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-green-500/50 to-transparent" />
                        <Gift className="text-red-600 w-6 h-6 fill-red-600/10" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}