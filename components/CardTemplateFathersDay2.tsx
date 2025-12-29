'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Award, Zap } from 'lucide-react';
import {CardTemplateProps} from "@/lib/types";


export default function CardTemplate2FathersDay({ name, poem, imageUrl, language,isBusiness = false }: CardTemplateProps) {
    const title = language === 'fr'
        ? (isBusiness ? 'Bonne Fête des Pères' : 'Bonne Fête Papa')
        : 'Happy Father\'s Day';

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Grille Technologique */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="tech-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#tech-grid)" />
                </svg>
            </div>

            {/* Éclairs d'Énergie */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 2) * 30}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    >
                        <Zap className="text-cyan-300/30" size={25} />
                    </motion.div>
                ))}
            </div>

            {/* Badges Flottants */}
            <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${15 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Award className="text-blue-200/20" size={30} />
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
                        <Shield className="text-blue-100" size={28} />
                        <h1 className="text-4xl font-bold text-white">
                            {title}
                        </h1>
                    </div>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-200 to-cyan-300 rounded-full" />
                </motion.div>

                {/* Image/Nom */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="flex-1 flex items-center justify-center mb-6"
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-blue-200/40 shadow-2xl relative">
                        {/* Badge d'Excellence Rotatif */}
                        <motion.div
                            className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-3 border-2 border-white shadow-lg"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                            <Award className="text-white" size={20} />
                        </motion.div>

                        {imageUrl ? (
                            <div className="relative w-40 h-40 rounded-xl overflow-hidden border-4 border-blue-200">
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                    loading="lazy"
                                />
                            </div>
                        ) : (
                            <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-cyan-200 px-8">
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
                        <Star className="text-blue-500" size={20} fill="currentColor" />
                        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium">
                        {poem}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="flex-1 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent" />
                        <Shield className="text-cyan-500" size={20} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}