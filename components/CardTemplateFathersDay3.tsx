'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {CardTemplateProps} from "@/lib/types";



export default function CardTemplate3FathersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Bonne Fête Papa')
        : 'Happy Father\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-300 via-cyan-400 to-blue-500 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Cercles Bleus Dynamiques */}
            <motion.div
                className="absolute w-40 h-40 bg-blue-400 rounded-full opacity-40"
                style={{ top: '10%', left: '5%' }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-32 h-32 bg-cyan-300 rounded-full opacity-40"
                style={{ top: '50%', right: '10%' }}
                animate={{ scale: [1, 1.4, 1], rotate: [360, 180, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
            />
            <motion.div
                className="absolute w-28 h-28 bg-blue-500 rounded-full opacity-30"
                style={{ bottom: '15%', left: '20%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
            />

            {/* Emojis Papa Sympas */}
            <div className="absolute inset-0">
                {['⭐', '🏆', '💪', '👔', '🎖️', '⚡'].map((emoji, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-5xl"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 2) * 40}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    >
                        {emoji}
                    </motion.div>
                ))}
            </div>

            {/* Contenu */}
            <div className="relative h-full flex flex-col items-center justify-between p-6 z-10">
                {/* Header Dynamique */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-5xl font-black text-white mb-2"
                        style={{
                            textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
                        }}
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        {title}
                    </motion.h1>
                    <div className="flex justify-center gap-2 text-5xl">
                        <motion.span
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            ⭐
                        </motion.span>
                        <motion.span
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            🏆
                        </motion.span>
                        <motion.span
                            animate={{
                                rotate: [360, 0],
                                scale: [1, 1.3, 1],
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            ⚡
                        </motion.span>
                    </div>
                </motion.div>

                {/* Image/Nom avec Cadre Fort */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    <div className="bg-white rounded-3xl p-2 shadow-2xl transform -rotate-1">
                        <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 rounded-2xl p-1">
                            {imageUrl ? (
                                <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
                                    <img
                                        src={imageUrl}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                        crossOrigin="anonymous"
                                        loading="lazy"
                                    />
                                </div>
                            ) : (
                                <div className="w-36 h-36 flex items-center justify-center bg-white rounded-2xl">
                                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600">
                                        {name}
                                    </h2>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Badges et Étoiles */}
                    <motion.div
                        className="absolute -top-4 -right-4 text-5xl"
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    >
                        🏆
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-4 -left-4 text-5xl"
                        animate={{
                            rotate: [0, -20, 0],
                            scale: [1, 1.15, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        ⭐
                    </motion.div>
                </motion.div>

                {/* Boîte de Poème Fort */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-3xl p-5 shadow-2xl border-4 border-blue-300 max-w-md"
                >
                    <div className="text-center mb-2 text-3xl">
                        ⭐ 💪 ⭐
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-bold text-lg">
                        {poem}
                    </p>
                    <div className="text-center mt-2 text-3xl">
                        🏆 ⚡ 🏆
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}