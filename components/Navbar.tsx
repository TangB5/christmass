'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TreePine, Stars, Menu, X, Bell, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Détecter le scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleModal = (e?: React.MouseEvent) => {
        if (e) e.preventDefault();
        setIsModalOpen(!isModalOpen);
        setIsMenuOpen(false);
    };

    return (
        // Le conteneur parent doit être fixed pour que la navbar reste en haut
        <div className="fixed top-0 left-0 w-full flex justify-center z-[60] transition-all duration-300 ">
            <nav
                className={`
                    w-full px-6 py-4 flex justify-between items-center transition-all duration-500 
                    ${scrolled
                    ? 'bg-black/80 backdrop-blur-lg border-b border-white/5 py-3'
                    : 'bg-transparent py-6'
                }
                `}
            >
                {/* Limitation de la largeur interne pour garder l'alignement max-6xl */}
                <div className="max-w-6xl w-full mx-auto flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter group relative z-[70]">
                        <div className="w-10 h-10 bg-gradient-to-br from-christmas-red to-red-700 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/40 group-hover:rotate-12 transition-transform">
                            <TreePine size={22} className="text-white" />
                        </div>
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Vœux<span className="text-christmas-red">Magiques</span>
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        <button onClick={toggleModal} className="hover:text-white transition-colors relative group">
                            Modèles
                            <span className="absolute -top-3 -right-6 text-[7px] bg-christmas-gold/20 text-christmas-gold px-1.5 py-0.5 rounded-full border border-christmas-gold/30">SOON</span>
                        </button>
                        <button onClick={toggleModal} className="hover:text-white transition-colors">Galerie</button>
                        <Button
                            onClick={toggleModal}
                            variant="outline"
                            size="sm"
                            className="rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center gap-2"
                        >
                            <Stars size={14} className="text-christmas-gold" />
                            Espace Client
                        </Button>
                    </div>

                    {/* Bouton Mobile Menu */}
                    <button
                        className="md:hidden p-2 text-white relative z-[70]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Overlay Menu Mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 bg-[#030712] z-[65] flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <button onClick={toggleModal} className="text-3xl font-bold text-gray-400">Modèles</button>
                            <button onClick={toggleModal} className="text-3xl font-bold text-gray-400">Galerie</button>
                            <Button onClick={toggleModal} variant="outline" className="rounded-full">
                                Espace Client
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* MODALE "UPCOMING" PREMIUM (Inchangée) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden"
                        >
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-christmas-red/20 rounded-full blur-[60px]" />
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-christmas-gold/10 text-christmas-gold rounded-3xl flex items-center justify-center mx-auto mb-6 border border-christmas-gold/20">
                                    <Bell size={40} className="animate-bounce" />
                                </div>
                                <h3 className="text-3xl font-black mb-4 tracking-tighter text-white">Bientôt disponible !</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Nous préparons une expérience incroyable pour les fêtes. Cette fonctionnalité arrive dans quelques jours.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5 text-left text-sm">
                                        <Sparkles className="text-christmas-gold shrink-0" size={18} />
                                        <span className="text-gray-300">Modèles exclusifs 31 janvier 2025 en préparation</span>
                                    </div>
                                    <Button onClick={() => setIsModalOpen(false)} className="w-full h-14 rounded-2xl text-black font-bold hover:bg-gray-200">
                                        Compris !
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}