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
    TreePine,
    Cloud
} from 'lucide-react';

interface CardTemplate3Props {
    name: string;
    poem: string;
    imageUrl?: string;
    language: 'fr' | 'en';
}

export default function CardTemplate3({ name, poem, imageUrl, language }: CardTemplate3Props) {
    const title = language === 'fr' ? 'Joyeux Noël !' : 'Merry Christmas!';

    const floatingIcons = [
        { Icon: CandyCane, color: 'text-red-500', bg: 'bg-red-50' },
        { Icon: TreePine, color: 'text-green-500', bg: 'bg-green-50' },
        { Icon: Snowflake, color: 'text-blue-400', bg: 'bg-blue-50' },
        { Icon: Gift, color: 'text-purple-500', bg: 'bg-purple-50' },
        { Icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' },
        { Icon: Bell, color: 'text-orange-500', bg: 'bg-orange-50' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full aspect-[3/4] bg-gradient-to-b from-[#7DD3FC] via-[#A5B4FC] to-[#F472B6] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[8px] border-white"
        >
            {/* 1. Background Decor: Puffy Clouds */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
                <motion.div
                    animate={{ x: [-20, 20, -20] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10 text-white"
                >
                    <Cloud size={80} fill="currentColor" />
                </motion.div>
                <motion.div
                    animate={{ x: [20, -20, 20] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-40 -right-10 text-white"
                >
                    <Cloud size={100} fill="currentColor" />
                </motion.div>
            </div>

            {/* 2. Sticker Icons Flottants avec Bordure Blanche */}
            <div className="absolute inset-0">
                {floatingIcons.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`absolute p-3 rounded-2xl bg-white shadow-lg ${item.color} border-2 border-white`}
                        style={{
                            left: `${10 + i * 15}%`,
                            top: `${15 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            rotate: [i * 10, i * 10 + 15, i * 10],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    >
                        <item.Icon size={24} fill="currentColor" fillOpacity={0.2} />
                    </motion.div>
                ))}
            </div>

            {/* 3. Contenu Principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-10 px-6 z-10">

                {/* Header: Effet "Pop" */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', bounce: 0.7 }}
                    className="text-center"
                >
                    <h1 className="text-5xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.15)] tracking-tighter italic">
                        {title}
                    </h1>
                    <div className="flex justify-center -mt-2">
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-yellow-400 text-white p-2 rounded-full shadow-lg border-4 border-white rotate-12"
                        >
                            <Sparkles fill="currentColor" size={24} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Main Portrait: Cadre "Télévision Fun" */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-white/30 blur-xl rounded-full animate-pulse" />
                    <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl rotate-2 transition-transform group-hover:rotate-0">
                        <div className="bg-gradient-to-tr from-yellow-100 to-pink-100 rounded-[1.8rem] p-1">
                            {imageUrl ? (
                                <div className="relative w-40 h-40 rounded-[1.6rem] overflow-hidden">
                                    <Image src={imageUrl} alt={name} fill className="object-cover" />
                                </div>
                            ) : (
                                <div className="w-40 h-40 flex items-center justify-center bg-white rounded-[1.6rem]">
                                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-yellow-500">
                                        {name}
                                    </h2>
                                </div>
                            )}
                        </div>
                        {/* Petit badge "Nice List" */}
                        <div className="absolute -bottom-2 -right-4 bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full border-2 border-white shadow-lg -rotate-12">
                            GENTIL(LE) ✅
                        </div>
                    </div>
                </motion.div>

                {/* Poem Box: Style "Bulle de BD" */}
                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full max-w-sm"
                >
                    <div className="bg-white rounded-[2rem] p-6 shadow-xl border-b-[6px] border-black/10 relative">
                        {/* Flèche de la bulle */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45" />

                        <div className="flex justify-between mb-4">
                            <PartyPopper className="text-pink-500" size={20} />
                            <div className="flex gap-1">
                                {[...Array(3)].map((_,i) => <div key={i} className="w-2 h-2 rounded-full bg-yellow-400" />)}
                            </div>
                            <PartyPopper className="text-blue-500 -scale-x-100" size={20} />
                        </div>

                        <p className="text-gray-800 text-center font-bold text-lg leading-relaxed italic">
                            {poem}
                        </p>

                        <div className="mt-4 flex justify-center gap-4 text-red-500/20">
                            <Snowflake size={18} />
                            <Gift size={18} />
                            <Snowflake size={18} />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Confettis statiques en avant-plan */}
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" />
            <div className="absolute bottom-10 right-8 w-3 h-3 bg-blue-400 rotate-45 animate-pulse" />
            <div className="absolute top-1/2 left-2 w-5 h-2 bg-pink-400 rounded-full -rotate-12" />
        </motion.div>
    );
}