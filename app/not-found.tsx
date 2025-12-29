'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Ghost, Sparkles, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#030712] text-white flex items-center justify-center p-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] -z-10" />

            <div className="max-w-md w-full text-center">
                {/* 404 Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-8"
                >
                    <span className="text-[12rem] font-black leading-none tracking-tighter opacity-10 select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-purple-500"
                        >
                            <Ghost size={80} strokeWidth={1.5} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 mb-12"
                >
                    <h1 className="text-4xl font-black italic tracking-tight font-serif">
                        Oups ! Page égarée
                    </h1>
                    <p className="text-gray-400 font-medium leading-relaxed">
                        Il semble que la carte ou le chemin que vous cherchez n'existe plus ou a été déplacé vers une autre galaxie.
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col gap-4"
                >
                    <Link
                        href="/christmas-cards-mvp/public"
                        className="group relative flex items-center justify-center gap-3 h-14 bg-white text-black rounded-2xl font-black uppercase italic text-sm transition-all hover:scale-[1.02] active:scale-95"
                    >
                        <Home size={18} />
                        Retour à l'accueil
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-3 h-14 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={18} />
                        Page précédente
                    </button>
                </motion.div>

                {/* Decorative Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-600"
                >
                    <Sparkles size={12} className="text-purple-500/50" />
                    Propulsé par la magie
                    <Sparkles size={12} className="text-purple-500/50" />
                </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/20 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i,
                    }}
                />
            ))}
        </div>
    );
}