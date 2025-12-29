'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { getAvailableEvents, getEventConfig } from '@/lib/events';
import { useEventTemplates } from '@/components/TemplateRoutes';
import { EventType, Language } from '@/lib/types';
import { Sparkles, ArrowRight, Eye } from 'lucide-react';

export default function TemplatesPage() {
    const router = useRouter();
    const [selectedEvent, setSelectedEvent] = useState<EventType>('christmas');
    const [language, setLanguage] = useState<Language>('fr');
    const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

    const events = getAvailableEvents();
    const currentEvent = getEventConfig(selectedEvent);
    const templates = useEventTemplates(selectedEvent, language);

    const handleUseTemplate = (templateId: number) => {
        router.push(`/create?event=${selectedEvent}&template=${templateId}`);
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white pt-32 pb-20">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[40%] h-[40%] blur-[120px]"
                    style={{ backgroundColor: `${currentEvent.colors.primary}10` }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[30%] h-[30%] blur-[120px]"
                    style={{ backgroundColor: `${currentEvent.colors.secondary}05` }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
                        Nos <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${currentEvent.colors.primary}, ${currentEvent.colors.accent})`
                        }}
                    >
                            Modèles
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Choisissez le style parfait pour votre carte de vœux
                    </p>
                </motion.div>

                {/* Event Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-4">
                        Sélectionnez un événement
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                        {events.map((event) => {
                            const EventIcon = event.icon;
                            const isSelected = selectedEvent === event.id;

                            return (
                                <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event.id)}
                                    className={`
                                        flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300
                                        ${isSelected
                                        ? 'scale-105 shadow-2xl'
                                        : 'hover:scale-102 bg-white/5 hover:bg-white/10'
                                    }
                                    `}
                                    style={{
                                        backgroundColor: isSelected ? `${event.colors.primary}15` : undefined,
                                        borderWidth: '2px',
                                        borderColor: isSelected ? event.colors.primary : 'transparent',
                                    }}
                                >
                                    {/*<span className="text-4xl">{event.icon}</span>*/}
                                    <span
                                        className="text-xs font-bold text-center"
                                        style={{
                                            color: isSelected ? event.colors.primary : '#9CA3AF',
                                        }}
                                    >
                                        {event.name[language]}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Templates Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            onMouseEnter={() => setHoveredTemplate(template.id)}
                            onMouseLeave={() => setHoveredTemplate(null)}
                            className="relative group"
                        >
                            {/* Card Container */}
                            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight">
                                            {template.label}
                                        </h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">
                                            Template {template.id}
                                        </p>
                                    </div>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${currentEvent.colors.primary}20` }}
                                    >
                                        <Sparkles
                                            size={20}
                                            style={{ color: currentEvent.colors.primary }}
                                        />
                                    </div>
                                </div>

                                {/* Preview */}
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black mb-6 group-hover:shadow-2xl transition-all">
                                    <template.Component
                                        name="Exemple"
                                        poem={language === 'fr'
                                            ? "Un exemple de poème\nCréé spécialement\nPour cet événement"
                                            : "A sample poem\nCreated specially\nFor this event"
                                        }
                                        language={language}
                                    />

                                    {/* Hover Overlay */}
                                    {hoveredTemplate === template.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                                        >
                                            <div className="flex gap-3">
                                                <button
                                                    className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2"
                                                >
                                                    <Eye size={18} />
                                                    Aperçu
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={() => handleUseTemplate(template.id)}
                                    className="w-full h-14 rounded-2xl font-black text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                                    style={{ backgroundColor: currentEvent.colors.primary }}
                                >
                                    Utiliser ce modèle
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 border border-white/10">
                        <h2 className="text-4xl font-black mb-4">
                            Prêt à créer votre carte ?
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Tous nos modèles sont 100% personnalisables et gratuits
                        </p>
                        <button
                            onClick={() => router.push(`/create?event=${selectedEvent}`)}
                            className="px-12 py-4 rounded-2xl font-black text-black text-lg hover:scale-105 transition-transform"
                            style={{ backgroundColor: currentEvent.colors.primary }}
                        >
                            Commencer maintenant
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}