'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TreePine, Sparkles, Gift, Star } from 'lucide-react'; // Import des icônes

interface CardTemplate1Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate1({ name, poem, imageUrl, language }: CardTemplate1Props) {
    const title = language === 'fr' ? 'Joyeux Noël' : 'Merry Christmas';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Snowflakes Background (Inchangé) */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                        initial={{ y: -20, x: Math.random() * 100 + '%' }}
                        animate={{
                            y: '120%',
                            x: `${Math.random() * 100}%`,
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Gold Border Frame */}
            <div className="absolute inset-4 border-4 border-christmas-gold rounded-xl" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-between p-8 z-10">

                {/* Header avec Icônes */}
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-christmas-gold mb-2 drop-shadow-md">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-white">
                        <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
                        <TreePine className="w-8 h-8 text-christmas-green fill-christmas-green" />
                        <Sparkles className="w-6 h-6 text-christmas-gold animate-pulse" />
                    </div>
                </motion.div>

                {/* Image or Name */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="flex-1 flex items-center justify-center"
                >
                    {imageUrl ? (
                        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-christmas-gold shadow-lg">
                            <Image
                                src={imageUrl}
                                alt={name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <h2 className="text-5xl font-bold text-white text-center drop-shadow-lg">
                            {name}
                        </h2>
                    )}
                </motion.div>

                {/* Poem Section */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-xl max-w-md border-t-2 border-christmas-gold/30"
                >
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-medium italic">
                        {poem}
                    </p>
                </motion.div>

                {/* Footer avec Icônes */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex items-center gap-4 text-christmas-gold"
                >
                    <Star className="w-6 h-6 fill-christmas-gold" />
                    <Gift className="w-10 h-10 animate-bounce" />
                    <Star className="w-6 h-6 fill-christmas-gold" />
                </motion.div>
            </div>
        </motion.div>
    );
}