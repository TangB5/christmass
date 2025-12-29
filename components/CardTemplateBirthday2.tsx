'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Gift, Star } from 'lucide-react';

interface CardTemplate2Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate2Birthday({ name, poem, imageUrl, language }: CardTemplate2Props) {
    const title = language === 'fr' ? 'Bon Anniversaire' : 'Happy Birthday';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-orange-400 via-pink-500 to-blue-600 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Rayons de Lumière */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-full bg-white/10 origin-bottom"
                        style={{
                            left: '50%',
                            bottom: 0,
                            transform: `rotate(${i * 30}deg)`,
                        }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>

            {/* Confettis Dynamiques */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => {
                    const colors = ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400'];
                    return (
                        <motion.div
                            key={i}
                            className={`absolute w-3 h-3 ${colors[i % 4]} rounded`}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: '-5%',
                            }}
                            animate={{
                                y: ['0vh', '110vh'],
                                rotate: [0, 360],
                                x: [0, Math.sin(i) * 30],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    );
                })}
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
                        <PartyPopper className="text-yellow-200" size={32} />
                        <h1 className="text-4xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                    <div className="w-36 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30 shadow-2xl relative">
                        {/* Étoiles Tournantes */}
                        {[...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                style={{
                                    top: i < 2 ? '-10px' : 'auto',
                                    bottom: i >= 2 ? '-10px' : 'auto',
                                    left: i % 2 === 0 ? '-10px' : 'auto',
                                    right: i % 2 === 1 ? '-10px' : 'auto',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                                <Star className="text-yellow-300" size={20} fill="currentColor" />
                            </motion.div>
                        ))}

                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-white/50">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-white px-8">
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
                        <Cake className="text-orange-500" size={20} />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-pink-400 to-transparent" />
                        <Gift className="text-pink-500" size={20} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}