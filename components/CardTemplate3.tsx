'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
    CandyCane,
    Baby,
    Snowflake,
    Gift,
    Star,
    Bell,
    PartyPopper,
    Sparkles,
    TreePine
} from 'lucide-react';

interface CardTemplate3Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate3({ name, poem, imageUrl, language }: CardTemplate3Props) {
    const title = language === 'fr' ? 'Joyeux Noël !' : 'Merry Christmas!';

    // Liste d'icônes pour les éléments flottants
    const floatingIcons = [
        { Icon: CandyCane, color: 'text-red-400' },
        { Icon: TreePine, color: 'text-green-500' },
        { Icon:  Snowflake, color: 'text-white' },
        { Icon: Gift, color: 'text-pink-500' },
        { Icon: Star, color: 'text-yellow-400' },
        { Icon: Bell, color: 'text-orange-400' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-br from-blue-400 via-blue-300 to-cyan-300 rounded-2xl overflow-hidden shadow-2xl"
        >
            {/* Playful Background Elements (Cercles) */}
            <div className="absolute inset-0">
                <motion.div
                    className="absolute w-32 h-32 bg-pink-300 rounded-full opacity-30"
                    style={{ top: '10%', left: '5%' }}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-24 h-24 bg-yellow-300 rounded-full opacity-40"
                    style={{ top: '60%', right: '10%' }}
                    animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            {/* Bouncing Icons (Remplacement des emojis) */}
            <div className="absolute inset-0">
                {floatingIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute ${item.color} drop-shadow-lg`}
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${20 + (i % 2) * 30}%`,
                        }}
                        animate={{
                            y: [0, -25, 0],
                            rotate: [0, 20, -20, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.3,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    >
                        <item.Icon size={32} fill="currentColor" fillOpacity={0.2} />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-between p-6 z-10">
                {/* Fun Header */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', bounce: 0.6 }}
                    className="text-center"
                >
                    <motion.h1
                        className="text-5xl font-black text-white mb-2"
                        style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}
                        animate={{ rotate: [-2, 2, -2] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    >
                        {title}
                    </motion.h1>
                    <div className="flex justify-center gap-4">
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
                            <PartyPopper className="text-yellow-300 w-10 h-10" />
                        </motion.div>
                        <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                            <Sparkles className="text-white w-10 h-10" />
                        </motion.div>
                        <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                            <PartyPopper className="text-yellow-300 w-10 h-10 flip-horizontal" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Image or Name with Fun Frame */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="relative"
                >
                    <div className="bg-white rounded-3xl p-2 shadow-2xl transform rotate-2">
                        <div className="bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-1">
                            {imageUrl ? (
                                <div className="relative w-36 h-36 rounded-2xl overflow-hidden">
                                    <Image src={imageUrl} alt={name} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-36 h-36 flex items-center justify-center bg-white rounded-2xl">
                                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-center px-2">
                                        {name}
                                    </h2>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Stickers (Lucide Icons) */}
                    <motion.div
                        className="absolute -top-6 -right-6 text-yellow-400 bg-white p-2 rounded-full shadow-lg"
                        animate={{ rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <Star fill="currentColor" size={28} />
                    </motion.div>
                    <motion.div
                        className="absolute -bottom-6 -left-6 text-pink-500 bg-white p-2 rounded-full shadow-lg"
                        animate={{ rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                    >
                        <Gift fill="currentColor" size={28} />
                    </motion.div>
                </motion.div>

                {/* Fun Poem Box */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-3xl p-5 shadow-2xl border-4 border-yellow-300 max-w-md relative"
                >
                    <div className="flex justify-center gap-3 mb-2 text-red-500">
                        <CandyCane size={24} />
                        <Sparkles className="text-yellow-500" size={24} />
                        <CandyCane size={24} className="scale-x-[-1]" />
                    </div>
                    <p className="text-gray-800 text-center whitespace-pre-line leading-relaxed font-black text-lg italic">
                        {poem}
                    </p>
                    <div className="flex justify-center gap-3 mt-2 text-blue-400">
                        < Snowflake size={24} fill="currentColor" fillOpacity={0.1} />
                        <Baby size={24} />
                        < Snowflake size={24} fill="currentColor" fillOpacity={0.1} />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}