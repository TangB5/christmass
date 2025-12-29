'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flower, Sun, Sparkles } from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate2Easter({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? 'Joyeuses Pâques' : 'Happy Easter';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-purple-400 via-purple-600 to-purple-900 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Cercles Ondulants */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border-2 border-yellow-300/20"
                        style={{
                            width: `${100 + i * 50}px`,
                            height: `${100 + i * 50}px`,
                            left: '50%',
                            top: '30%',
                            transform: 'translate(-50%, -50%)',
                        }}
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                        }}
                    />
                ))}
            </div>

            {/* Œufs Colorés */}
            <div className="absolute inset-0">
                {['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400'].map((color, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-6 h-8 ${color} rounded-full opacity-40`}
                        style={{
                            left: `${20 + i * 20}%`,
                            top: `${15 + (i % 2) * 30}%`,
                        }}
                        animate={{
                            y: [0, 20, 0],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
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
                        <Sun className="text-yellow-300" size={32} />
                        <h1 className="text-5xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-yellow-300 to-green-400 rounded-full" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-300/40 shadow-2xl">
                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-yellow-300">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-green-300 px-8">
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
                    className="bg-white rounded-2xl p-6 shadow-2xl"
                >
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl">🐰</span>
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-green-400 to-transparent" />
                        <span className="text-2xl">🌷</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}