'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate2Valentine({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Joyeuse Saint-Valentin' : 'Mon Amour')
        : (isBusiness ? 'Happy Valentine\'s Day' : 'My Love');

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-rose-400 via-pink-600 to-red-700 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Vagues Romantiques */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-32 bg-white/5 rounded-full"
                        style={{ top: `${i * 25}%` }}
                        animate={{
                            x: ['-50%', '50%'],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Cœurs Pulsants */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Heart className="text-pink-200" size={15} fill="currentColor" />
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
                        <Heart className="text-pink-100" size={32} fill="currentColor" />
                        <h1 className="text-5xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                    <div className="w-28 h-1 bg-pink-200 rounded-full" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/15 backdrop-blur-md rounded-3xl p-6 border-2 border-pink-200/40 shadow-2xl relative overflow-hidden">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-pink-300/20 to-red-400/20"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-4 border-pink-200">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-pink-50 px-8 relative z-10">
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
                        <Heart className="text-rose-500" size={20} fill="currentColor" />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-rose-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-pink-400 to-transparent" />
                        <Sparkles className="text-pink-500" size={20} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}