'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface CardTemplateProps {
    name?: string;
    poem?: string;
    imageUrl?: string;
    language?: 'fr' | 'en';
    isBusiness?: boolean;
}

export default function CardTemplate1Valentine({
                                                   name = "Mon Amour",
                                                   poem = "Dans tes yeux je vois l'éternité, dans ton sourire la félicité. Chaque jour à tes côtés est un cadeau précieux, un instant merveilleux.",
                                                   imageUrl,
                                                   language = 'fr',
                                                   isBusiness = false
                                               }: CardTemplateProps) {
    const prefersReducedMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);

    const title = language === 'fr'
        ? (isBusiness ? 'Joyeuse Saint-Valentin' : 'Je t\'aime')
        : (isBusiness ? 'Happy Valentine\'s Day' : 'I Love You');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Fond dégradé principal */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-pink-500 to-red-600" />

            {/* Overlay subtil pour profondeur */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />

            {/* Particules de cœurs flottants - Optimisé */}
            {!prefersReducedMotion && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute text-white/40"
                            style={{
                                left: `${10 + (i * 12)}%`,
                                top: `-10%`,
                            }}
                            animate={{
                                y: ['0vh', '120vh'],
                                x: [0, Math.sin(i) * 30, 0],
                                opacity: [0, 0.6, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{
                                duration: 12 + (i * 2),
                                repeat: Infinity,
                                ease: 'linear',
                                delay: i * 1.5
                            }}
                        >
                            <Heart size={12 + (i % 3) * 4} fill="currentColor" />
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Contenu principal */}
            <div className="relative h-full flex flex-col items-center justify-between py-8 md:py-12 px-6 md:px-8 z-10">

                {/* En-tête avec animation */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                    className="text-center space-y-3"
                >
                    <motion.div
                        className="flex items-center justify-center gap-3"
                        animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Heart className="text-pink-100 w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
                        <Sparkles className="text-pink-100 w-4 h-4 md:w-5 md:h-5" />
                        <Heart className="text-pink-100 w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-serif font-black text-white drop-shadow-lg tracking-tight">
                        {title}
                    </h1>
                </motion.div>

                {/* Portrait ou Nom - Centré et mis en valeur */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, type: 'spring', bounce: 0.4 }}
                    className="relative flex-shrink-0"
                >
                    {imageUrl ? (
                        <div className="relative group">
                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 bg-pink-300/40 blur-2xl rounded-full"
                                animate={isHovered ? { scale: 1.3 } : { scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />

                            <motion.div
                                className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 md:border-[6px] border-white/90 shadow-2xl overflow-hidden"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={imageUrl}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                    crossOrigin="anonymous"
                                />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="py-4">
                            <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-lg tracking-tight">
                                {name}
                            </h2>
                        </div>
                    )}
                </motion.div>

                {/* Poème - Meilleure lisibilité */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-full max-w-sm flex-1 flex items-center justify-center min-h-0 my-4"
                >
                    <div className="relative w-full p-5 md:p-7 rounded-2xl md:rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl">
                        {/* Décoration coins */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-pink-200/50 rounded-tl-lg" />
                        <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-pink-200/50 rounded-tr-lg" />
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-pink-200/50 rounded-bl-lg" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-200/50 rounded-br-lg" />

                        <div className="max-h-[140px] md:max-h-[200px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent hover:scrollbar-thumb-white/50">
                            <p className="text-white text-sm md:text-base leading-relaxed font-medium text-center">
                                {poem}
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Footer - Plus élégant */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex items-center gap-3"
                >
                    <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.9 + (i * 0.1), type: 'spring', bounce: 0.5 }}
                                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-lg"
                            >
                                <Heart size={12} fill="white" className="text-white" />
                            </motion.div>
                        ))}
                    </div>
                    <div className="h-[1px] w-8 bg-white/40" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold text-white/90">
                        {language === 'fr' ? 'Avec Amour' : 'With Love'}
                    </span>
                </motion.div>
            </div>

            {/* Style pour le scrollbar personnalisé */}
            <style jsx>{`
                .scrollbar-thin::-webkit-scrollbar {
                    width: 4px;
                }
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: transparent;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 2px;
                }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
            `}</style>
        </motion.div>
    );
}