'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower2, Heart, Sparkles } from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate2MothersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Mères' : 'Bonne Fête Maman')
        : 'Happy Mother\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-pink-300 via-pink-500 to-rose-700 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Motif Floral Ondulant */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${i * 12.5}%`,
                            top: '50%',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 15, -15, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Flower2 className="text-pink-200/30" size={40} />
                    </motion.div>
                ))}
            </div>

            {/* Papillons Gracieux */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/40 text-2xl"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${10 + (i % 3) * 30}%`,
                        }}
                        animate={{
                            x: [0, 40, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 6 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        🦋
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
                    <div className="flex items-center gap-3 mb-2">
                        <Heart className="text-pink-100" size={28} fill="currentColor" />
                        <h1 className="text-4xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-pink-100 to-rose-200 rounded-full" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 border-2 border-pink-100/40 shadow-2xl relative">
                        {/* Couronne Florale */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                }}
                                animate={{
                                    rotate: [0 + i * 60, 360 + i * 60],
                                    x: [0, 80 * Math.cos((i * Math.PI) / 3)],
                                    y: [0, 80 * Math.sin((i * Math.PI) / 3)],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Flower2 className="text-pink-200" size={16} />
                            </motion.div>
                        ))}

                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-pink-100">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-pink-50 px-8">
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
                    className="bg-white rounded-3xl p-6 shadow-2xl"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <Flower2 className="text-pink-500" size={20} />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-pink-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-rose-400 to-transparent" />
                        <Heart className="text-rose-500" size={20} fill="currentColor" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}