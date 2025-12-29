'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Corrigé
import {
    Sparkles, Users, Share2, Bot, CheckCircle2,
    ArrowRight, Zap, Globe, Bell, Gift, Star, Database,
    ShieldCheck, Mail, Briefcase
} from 'lucide-react';

import { EVENTS, getAvailableEvents } from '@/lib/events';
import { EventType } from '@/lib/types';
import {useEvent} from "@/app/context/EventContext";
import {useAuth} from "@/lib/auth/AuthContext";

const AdaptiveButton = ({
                            children,
                            onClick,
                            primaryColor,
                            variant = 'primary',
                            className = "",
                            size = "md"
                        }: any) => {
    const isPrimary = variant === 'primary';

    return (
        <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            style={{
                backgroundColor: isPrimary ? primaryColor : 'transparent',
                borderColor: isPrimary ? 'transparent' : `${primaryColor}40`,
                color: isPrimary ? '#000' : '#fff'
            }}
            className={`
                flex items-center justify-center gap-2 font-black uppercase tracking-tighter transition-all
                ${size === 'lg' ? 'px-10 py-5 rounded-2xl text-lg' : 'px-6 py-3 rounded-xl text-sm'}
                ${!isPrimary ? 'border backdrop-blur-md hover:bg-white/5' : 'shadow-2xl shadow-white/10'}
                ${className}
            `}
        >
            {children}
        </motion.button>
    );
};

export default function HomePage() {
    const router = useRouter();
    const { user } = useAuth();
    const [showProModal, setShowProModal] = useState(false);
    const { eventId, setEventId } = useEvent();
    const availableEvents = useMemo(() => getAvailableEvents(), []);
    const currentEvent = useMemo(() => EVENTS[eventId], [eventId]);


    const handleProtectedAction = (path: string) => {
        if (!user) {

            router.push('/auth');
        } else {
            router.push(path);
        }
    };
    const features = [
        { icon: <Bot />, label: "Gemini 3 Flash", sub: "IA Ultra-Rapide" },
        { icon: <Share2 />, label: "Export Multi-Format", sub: "GIF & WhatsApp" },
        { icon: <Globe />, label: "100% Bilingue", sub: "FR / EN" },
        { icon: <Zap />, label: "Instantanné", sub: "< 3 secondes" }
    ];

    let language;
    return (
        <div className="min-h-screen bg-[#030712] text-white selection:bg-white selection:text-black overflow-x-hidden pt-24">

            {/* Arrière-plan : Halos Lumineux Dynamiques */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    key={`bg-1-${eventId
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: `${currentEvent.colors.primary}15` }}
                    className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[150px] transition-colors duration-1000"
                />
                <motion.div
                    key={`bg-2-${eventId
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{ backgroundColor: `${currentEvent.colors.secondary}10` }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full blur-[150px] transition-colors duration-1000"
                />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-16">

                {/* Sélecteur d'Événements (Style Onglets Studio avec Icônes Lucide) */}
                <div className="flex justify-center mb-20">
                    <div className="inline-flex md:p-1.5 p-0 bg-white/5 border border-white/10 rounded-[2.2rem] backdrop-blur-2xl overflow-x-auto">
                        {availableEvents.map((event) => {
                            const Icon = event.icon;
                            const isActive = eventId === event.id;

                            return (
                                <button
                                    key={event.id}
                                    onClick={() => setEventId(event.id as EventType)}
                                    className={`
                                        relative px-6 md:py-3 rounded-[1.8rem] text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3
                                        ${isActive ? 'text-black' : 'text-gray-500 hover:text-white'}
                                    `}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 rounded-[1.6rem]"
                                            style={{ backgroundColor: currentEvent.colors.primary }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <Icon size={26} className="relative z-10 text-4xl" strokeWidth={isActive ? 3 : 2} />
                                    <span className="relative z-10">{event.name.fr}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Hero Section */}
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={eventId
                        }
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                            <Sparkles size={14} style={{ color: currentEvent.colors.accent }} />
                            Expérience Studio 2025
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-[-0.06em] leading-[0.85]">
                            L'IA POUR VOS <br />
                            <span
                                style={{ color: currentEvent.colors.primary }}
                                className="italic font-serif transition-colors duration-500"
                            >
                                {currentEvent.name.fr.toUpperCase()}
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                            Oubliez les messages génériques. Créez des cartes animées haute couture
                            avec des poèmes générés sur mesure par l'IA Gemini 3 Flash.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <AdaptiveButton
                                size="lg"
                                primaryColor={currentEvent.colors.primary}
                                onClick={() => handleProtectedAction(`/create?event=${eventId}`)}
                            >
                                {user ? "Lancer le Studio" : "Se connecter pour créer"}
                                <ArrowRight size={20} />
                            </AdaptiveButton>

                            <AdaptiveButton
                                size="lg"
                                variant="outline"
                                primaryColor={currentEvent.colors.primary}
                                onClick={() => setShowProModal(true)}
                            >
                                Explorer les modèles
                            </AdaptiveButton>
                        </div>
                    </motion.div>
                </div>

                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group"
                        >
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-black/20"
                                style={{ backgroundColor: `${currentEvent.colors.primary}10`, color: currentEvent.colors.primary }}
                            >
                                <currentEvent.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h4 className="font-black text-xl mb-2 tracking-tighter">{f.label}</h4>
                            <p className="text-gray-500 text-sm font-medium leading-snug">{f.sub}</p>
                        </div>
                    ))}
                </div>

                {/* Section Packs */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Pack Particulier */}
                    <div className="relative p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
                        <div className="bg-[#0b0f1a] rounded-[2.9rem] p-12 h-full flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-10">
                                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                                        <Users className="text-white" size={28} />
                                    </div>
                                    <span className="px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-500">
                                        Libre accès
                                    </span>
                                </div>
                                <h3 className="text-4xl font-black mb-6 tracking-tighter italic font-serif text-white">
                                    Pack Solo
                                </h3>
                                <ul className="space-y-5 mb-12 text-gray-400 font-medium">
                                    <li className="flex gap-4 items-center"><CheckCircle2 size={20} className="text-gray-700" /> Poèmes IA illimités</li>
                                    <li className="flex gap-4 items-center"><CheckCircle2 size={20} className="text-gray-700" /> Export HD sans filigrane</li>
                                    <li className="flex gap-4 items-center"><CheckCircle2 size={20} className="text-gray-700" /> Thèmes artistiques exclusifs</li>
                                </ul>
                            </div>
                            <AdaptiveButton
                                onClick={() => handleProtectedAction(`/create?event=${eventId}`)}
                                primaryColor={currentEvent.colors.primary}
                                className="w-full h-16 rounded-2xl"
                            >
                                Commencer maintenant
                            </AdaptiveButton>

                        </div>
                    </div>

                    {/* Pack Business */}
                    <div className="relative p-1 rounded-[3rem] border-2 border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent transition-all duration-500 hover:border-white/20 group">
                        <div className="bg-transparent rounded-[2.9rem] p-10 h-full flex flex-col justify-between">
                            <div>
                                {/* Header avec Badge Statut */}
                                <div className="flex justify-between items-start mb-8">
                                    <div
                                        className="p-5 rounded-2xl bg-white/5 border border-white/10 transition-transform group-hover:scale-110 duration-500"
                                        style={{ color: currentEvent.colors.primary }}
                                    >
                                        <Briefcase size={28} />
                                    </div>
                                    <span
                                        style={{
                                            backgroundColor: `${currentEvent.colors.primary}15`,
                                            color: currentEvent.colors.primary,
                                            borderColor: `${currentEvent.colors.primary}30`
                                        }}
                                        className="px-5 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                                    >
                    Disponible
                </span>
                                </div>

                                {/* Titre et Description */}
                                <h3 className="text-4xl font-black mb-4 tracking-tighter italic font-serif text-white">
                                    Pack Business
                                </h3>
                                <p className="text-gray-400 font-medium text-base leading-relaxed mb-8">
                                    Optimisez vos relations clients avec une personnalisation de masse intelligente.
                                </p>

                                {/* Caractéristiques (Caractéristiques ajoutées ici) */}
                                <div className="space-y-4 mb-10">
                                    {[
                                        { icon: <Database size={16} />, fr: "Import Excel / CSV", en: "Excel / CSV Import" },
                                        { icon: <Zap size={16} />, fr: "Génération par lots (Bulk)", en: "Bulk Generation" },
                                        { icon: <Mail size={16} />, fr: "Envoi direct par Email", en: "Direct Email Send" },
                                        { icon: <ShieldCheck size={16} />, fr: "Logo d'entreprise inclus", en: "Company Logo included" }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group/item">
                                            <div className="text-gray-500 group-hover/item:text-white transition-colors">
                                                {feature.icon}
                                            </div>
                                            <span className="text-sm font-bold text-gray-500 group-hover/item:text-gray-300 transition-colors">
                            {language === 'fr' ? feature.fr : feature.en}
                        </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bouton d'action mis à jour */}
                            <div className="relative overflow-hidden rounded-2xl">
                                <AdaptiveButton
                                    onClick={() => handleProtectedAction(`/batch?event=${eventId}`)}
                                    primaryColor={currentEvent.colors.primary}
                                    variant="solid"
                                    className="w-full h-16 rounded-2xl font-black uppercase tracking-widest text-xs"
                                >
                                    <Zap size={18} className="mr-2" />
                                    {language === 'fr' ? 'Lancer un Batch' : 'Start Batch'}
                                </AdaptiveButton>
                            </div>
                        </div>

                        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="relative z-10 py-16 border-t border-white/5 text-center">
                <div className="flex justify-center items-center gap-6 mb-8 text-gray-600">
                    <button className="hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Confidentialité</button>
                    <div className="w-1 h-1 rounded-full bg-gray-800" />
                    <button className="hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">Mentions Légales</button>
                </div>
                <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.6em]">
                    © 2025 VŒUX MAGIQUES • L'ART DE DIRE MERCI
                </p>
            </footer>

            {/* Modal Business Adaptative */}
            <AnimatePresence>
                {showProModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowProModal(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-3xl"
                        />
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="relative bg-[#0b0f1a] border border-white/10 p-12 rounded-[3.5rem] max-w-lg w-full text-center overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                        >
                            <div
                                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-20"
                                style={{ backgroundColor: currentEvent.colors.primary }}
                            />

                            <div className="relative z-10">
                                <div
                                    style={{ backgroundColor: `${currentEvent.colors.primary}10`, borderColor: `${currentEvent.colors.primary}20` }}
                                    className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border shadow-xl"
                                >
                                    <Gift style={{ color: currentEvent.colors.primary }} size={48} className="animate-bounce" />
                                </div>
                                <h3 className="text-4xl font-black mb-4 italic font-serif">Arrivée Imminente</h3>
                                <p className="text-gray-400 mb-10 leading-relaxed font-medium">
                                    Le module de personnalisation de masse pour les entreprises est en phase finale de test.
                                </p>
                                <AdaptiveButton primaryColor={currentEvent.colors.primary} className="w-full h-16 rounded-2xl text-lg">
                                    Rejoindre la liste VIP
                                </AdaptiveButton>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}