'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Navbar from '@/components/Navbar';
import {
    Sparkles,
    Users,
    Share2,
    Bot,
    CheckCircle2,
    ArrowRight,
    Zap,
    Stars,
    Globe,
    Bell
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function HomePage() {
    const router = useRouter();
    const [showProModal, setShowProModal] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#030712] text-white selection:bg-red-500/30 overflow-x-hidden">
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-christmas-red/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-christmas-green/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            <Navbar />

            <main className="max-w-6xl w-full px-4 pt-32 pb-20 relative z-10">
                {/* Hero Section */}
                <motion.section
                    initial="hidden" animate="visible" variants={containerVariants}
                    className="text-center mb-32"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-christmas-gold text-xs font-bold mb-8 backdrop-blur-md">
                        <Stars size={14} className="animate-spin-slow" />
                        L'IA RÉINVENTE VOS MESSAGES DE FÊTES
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.85]">
                        Illuminez vos <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-christmas-red via-red-400 to-christmas-gold animate-gradient-x">
                            vœux de Noël
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Créez des cartes animées uniques avec l'IA. <br className="hidden md:block" />
                        Une expérience immersive pour ceux qui comptent vraiment.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
                        <Button
                            onClick={() => router.push('/create')}
                            size="lg"
                            className="h-16 px-10 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] bg-christmas-red hover:bg-red-700 transition-all duration-300"
                        >
                            Créer ma carte <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.section>

                {/* Features Bento Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {/* Carte Famille */}
                    <motion.div whileHover={{ y: -10 }} className="group relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 overflow-hidden">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-christmas-red/10 rounded-full blur-[80px] group-hover:bg-christmas-red/20 transition-colors" />
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-red-500/20 text-christmas-red rounded-2xl flex items-center justify-center mb-10 border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4 italic font-serif">Pour la Famille</h2>
                            <p className="text-gray-400 text-lg mb-10">Transformez vos souvenirs en poésie. IA adaptée à vos relations.</p>
                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {["Thèmes féériques", "Poèmes personnalisés", "Lien de partage unique"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-christmas-red" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={() => router.push('/create')} className="w-full h-14 rounded-xl text-black font-bold  hover:bg-gray-200">Lancer le Studio</Button>
                        </div>
                    </motion.div>

                    {/* Carte Business (UPCOMING) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative bg-white/5 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/5 overflow-hidden opacity-80"
                    >
                        {/* Badge */}
                        <div className="absolute top-8 right-8 z-20">
                            <span className="bg-christmas-gold/10 text-christmas-gold text-[10px] font-black px-4 py-1.5 rounded-full border border-christmas-gold/20 tracking-widest uppercase">
                                Bientôt disponible
                            </span>
                        </div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/5 text-gray-500 rounded-2xl flex items-center justify-center mb-10 border border-white/10">
                                <Users className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4 text-gray-300 italic font-serif">Pour le Business</h2>
                            <p className="text-gray-500 text-lg mb-10">Automatisez vos vœux d'entreprise avec votre logo et branding.</p>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {["Export GIF haute qualité", "Branding Entreprise", "Support prioritaire"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-600 italic">
                                        <CheckCircle2 className="w-5 h-5 text-gray-800" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => setShowProModal(true)}
                                variant="outline"
                                className="w-full h-14 rounded-xl border-white/10 text-gray-500 hover:bg-white/5"
                            >
                                En savoir plus
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5">
                    {[
                        { icon: Bot, label: "IA Gemini 3", sub: "Flash Preview" },
                        { icon: Share2, label: "Instantané", sub: "WhatsApp, GIF" },
                        { icon: Globe, label: "Multilingue", sub: "Traduction auto" },
                        { icon: Zap, label: "Rapide", sub: "< 10 secondes" }
                    ].map((f, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <f.icon className="w-8 h-8 text-christmas-gold mb-4 opacity-80" />
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest">{f.label}</h3>
                            <p className="text-gray-500 text-xs mt-1">{f.sub}</p>
                        </div>
                    ))}
                </motion.div>
            </main>

            {/* MODALE INTERNE POUR LE PACK PRO */}
            <AnimatePresence>
                {showProModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowProModal(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-md bg-black border border-white/10 p-10 rounded-[3rem] text-center"
                        >
                            <Bell className="w-16 h-16 text-christmas-gold mx-auto mb-6 animate-bounce" />
                            <h3 className="text-3xl font-black mb-4">Offre Business</h3>
                            <p className="text-gray-400 mb-8">
                                Nous finalisons les outils de personnalisation pour les entreprises.
                                Ouverture prévue pour le 31 janvier 2025.
                            </p>
                            <Button onClick={() => setShowProModal(false)} className="w-full h-14 rounded-2xl  text-black font-bold">
                                J'ai compris
                            </Button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <footer className="w-full max-w-6xl px-6 py-12 text-center opacity-40">
                <p className="text-sm">© 2025 Vœux Magiques • L'IA au service du cœur</p>
            </footer>
        </div>
    );
}