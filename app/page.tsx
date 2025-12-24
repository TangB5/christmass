'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import {
    Sparkles,
    Users,
    TreePine,
    Globe,
    Share2,
    Bot,
    CheckCircle2,
    ArrowRight,
    Zap,
    Stars
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center bg-[#030712] text-white selection:bg-red-500/30 overflow-x-hidden">
            {/* Background avec effets de lumière (Glows) */}
            <div className="fixed inset-0 -z-10">
                {/* Lueur Rouge */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-christmas-red/20 rounded-full blur-[120px] animate-pulse" />
                {/* Lueur Verte */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-christmas-green/10 rounded-full blur-[120px]" />
                {/* Texture grainée pour le côté premium */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            </div>

            {/* Navbar */}
            <nav className="w-full max-w-6xl px-6 py-8 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <div className="w-10 h-10 bg-gradient-to-br from-christmas-red to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/40">
                        <TreePine size={22} className="text-white" />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Vœux<span className="text-christmas-red">Magiques</span>
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Modèles</a>
                    <a href="#" className="hover:text-white transition-colors">Galerie</a>
                    <Button variant="outline" size="sm" className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white">
                        Espace Client
                    </Button>
                </div>
            </nav>

            <main className="max-w-6xl w-full px-4 pt-16 pb-20 relative z-10">
                {/* Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
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
                            className="h-16 px-10 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] bg-christmas-red hover:bg-red-700 hover:scale-105 transition-all duration-300"
                        >
                            Créer ma carte <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </motion.section>

                {/* Features Bento Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {/* Carte Particulier */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 overflow-hidden"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-christmas-red/10 rounded-full blur-[80px] group-hover:bg-christmas-red/20 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-red-500/20 text-christmas-red rounded-2xl flex items-center justify-center mb-10 border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                <Sparkles className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Pour la Famille</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Transformez vos souvenirs en poésie. Notre IA compose des textes touchants adaptés à vos relations.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {["Thèmes féériques", "Musique d'ambiance", "Lien de partage unique"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-christmas-red" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button
                                onClick={() => router.push('/create')}
                                className="w-full h-14 rounded-xl  text-black font-bold hover:bg-gray-200 transition-all">
                                Lancer le Studio
                            </Button>
                        </div>
                    </motion.div>

                    {/* Carte Business */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="group relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 overflow-hidden"
                    >
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-christmas-green/10 rounded-full blur-[80px] group-hover:bg-christmas-green/20 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-green-500/20 text-christmas-green rounded-2xl flex items-center justify-center mb-10 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                                <Users className="w-8 h-8" />
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Pour le Business</h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                Automatisez vos vœux d'entreprise. Envoyez des centaines de cartes personnalisées avec votre logo.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mb-10">
                                {["Import CSV / Excel", "Branding Entreprise", "Accusés de lecture"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-christmas-green" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button
                                onClick={() => router.push('/batch')}
                                variant="outline" className="w-full h-14 rounded-xl border-white/20 text-white hover:bg-white/5 transition-all">
                                Découvrir l'offre Pro
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* Stats / Proof Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12 border-y border-white/5"
                >
                    {[
                        { icon: Bot, label: "IA Gemini 1.5", sub: "Haute précision" },
                        { icon: Share2, label: "Instantané", sub: "SMS, WhatsApp" },
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

            {/* Footer */}
            <footer className="w-full max-w-6xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                <p className="text-sm">© 2024 Vœux Magiques • L'IA au service du cœur</p>
                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-christmas-red">Mentions</a>
                    <a href="#" className="hover:text-christmas-red">Contact</a>
                </div>
            </footer>
        </div>
    );
}