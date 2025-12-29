'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Stars, LogOut, User as UserIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { EVENTS } from '@/lib/events';
import { EventType } from '@/lib/types';
import { useEvent } from "@/app/context/EventContext";
import { useAuth } from '@/lib/auth/AuthContext'; // Import de l'auth

interface NavbarProps {
    currentEventId?: EventType;
}

export default function Navbar({ currentEventId = 'christmas' }: NavbarProps) {
    const router = useRouter();
    const { user, signOut } = useAuth(); // Récupération de l'état global
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { eventId } = useEvent();
    const currentEvent = EVENTS[eventId];
    const EventIcon = currentEvent.icon;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateTo = (path: string) => {
        router.push(path);
        setIsMenuOpen(false);
    };

    const handleSignOut = async () => {
        await signOut();
        router.push('/');
        setIsMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full flex justify-center z-[60] transition-all duration-300">
            <nav
                className={`
                    w-full px-6 flex justify-between items-center transition-all duration-500 
                    ${scrolled
                    ? 'bg-[#030712]/95 backdrop-blur-xl border-b border-white/5 py-3'
                    : 'bg-transparent py-6'
                }
                `}
            >
                <div className="max-w-6xl w-full mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 font-bold text-2xl tracking-tighter group relative z-[70]">
                        <motion.div
                            key={`logo-${currentEvent.id}`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            style={{
                                backgroundColor: currentEvent.colors.primary,
                                boxShadow: `0 0 20px ${currentEvent.colors.primary}60`
                            }}
                            className="w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-500"
                        >
                            <EventIcon size={24} className="text-white" strokeWidth={2.5} />
                        </motion.div>

                        <span className="text-white">
                            Vœux<span
                            style={{ color: currentEvent.colors.primary }}
                            className="bg-gradient-to-r [text-shadow:0_0_2px_rgba(255,255,255,0.9),0_0_4px_rgba(255,255,255,0)] transition-all duration-500"
                        >
                                Magiques
                            </span>
                        </span>
                    </Link>

                    {/* Navigation Desktop */}
                    <div className="hidden md:flex items-center gap-8 font-black uppercase tracking-[0.2em] text-gray-500">
                        <button onClick={() => navigateTo('/templates')} className="hover:text-white transition-colors ">
                            Modèles
                        </button>


                        {/* Affichage conditionnel selon l'état de connexion */}
                        {!user ? (
                            <button
                                onClick={() => navigateTo('/auth')}
                                className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all text-[10px] font-black tracking-widest"
                            >
                                <UserIcon size={14} style={{ color: currentEvent.colors.primary }} />
                                CONNEXION
                            </button>
                        ) : (
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => navigateTo('/dashboard')}
                                    className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all text-[10px] font-black tracking-widest"
                                >
                                    <Stars size={14} style={{ color: currentEvent.colors.accent }} />
                                    MON ESPACE
                                </button>
                                <button
                                    onClick={handleSignOut}
                                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                                    title="Déconnexion"
                                >
                                    <LogOut size={18} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white relative z-[70]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Overlay Mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="fixed inset-0 bg-[#030712] z-[65] flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <button onClick={() => navigateTo('/templates')} className="text-3xl font-black text-white italic">Modèles</button>

                            {!user ? (
                                <button
                                    onClick={() => navigateTo('/auth')}
                                    style={{ backgroundColor: currentEvent.colors.primary }}
                                    className="rounded-2xl px-12 h-16 text-white font-black uppercase text-lg"
                                >
                                    CONNEXION
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => navigateTo('/dashboard')}
                                        style={{ backgroundColor: currentEvent.colors.primary }}
                                        className="rounded-2xl px-12 h-16 text-white font-black uppercase text-lg"
                                    >
                                        MON ESPACE
                                    </button>
                                    <button
                                        onClick={handleSignOut}
                                        className="text-red-500 font-bold flex items-center gap-2"
                                    >
                                        <LogOut size={20} /> DÉCONNEXION
                                    </button>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}