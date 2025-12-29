'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star } from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate2NewYear({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? '2026' : '2026';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-slate-900 via-purple-900 to-black rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Lignes Néon Animées */}
            <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                        style={{ top: `${i * 10}%` }}
                        animate={{
                            x: ['-100%', '100%'],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </div>

            {/* Feux d'artifice */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 2, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    >
                        <Zap className="text-yellow-400" size={20} />
                    </motion.div>
                ))}
            </div>

            {/* Contenu */}
            <div className="relative h-full flex flex-col p-8 z-10">
                {/* Header */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6"
                >
                    <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-400 mb-2">
                        {title}
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-[0_0_20px_gold]" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-400/40 shadow-2xl">
                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-yellow-400">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300 px-8">
                                {name}
                            </h2>
                        )}
                    </div>
                </motion.div>

                {/* Poème */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 shadow-2xl border-2 border-yellow-400/30"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="text-yellow-600" size={20} />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-orange-400 to-transparent" />
                        <Star className="text-orange-600" size={20} fill="currentColor" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}