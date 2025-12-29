'use client';

import React, { useState, useEffect ,Suspense} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    Calendar,
    Check,
    CheckCircle2,
    Eye,
    ImageIcon,
    Languages,
    Sparkles,
    Upload,
    User,
    Wand2,
    X
} from "lucide-react";

import Button from '@/components/ui/Button';
import LanguageSelector from '@/components/LanguageSelector';
import GenderSelector from '@/components/GenderSelector';
import { useEventTemplates } from '@/components/TemplateRoutes';
import { getEventConfig } from '@/lib/events';
import { Language, Gender, GeneratedPoem, TemplateId, EventType } from '@/lib/types';

import { eventService } from '@/lib/Services/eventService';
import {useAuth} from "@/lib/auth/AuthContext";

function CreateContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { user } = useAuth();
    // UI State
    const [step, setStep] = useState<'form' | 'preview'>('form');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Form State
    const [name, setName] = useState('');
    const [language, setLanguage] = useState<Language>('fr');
    const [gender, setGender] = useState<Gender>('neutral');
    const [eventType, setEventType] = useState<EventType>('christmas');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [poems, setPoems] = useState<GeneratedPoem[]>([]);
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const event = searchParams.get('event') as EventType;
        if (event) {
            setEventType(event);
        }
    }, [searchParams]);

    useEffect(() => {
        if (eventType === 'mothersday') {
            setGender('girl');
        } else if (eventType === 'fathersday') {
            setGender('boy');
        } else {
            setGender('neutral');
        }
    }, [eventType]);


    const templates = useEventTemplates(eventType, language);
    const eventConfig = getEventConfig(eventType);
    const Icon = eventConfig.icon;

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setError(language === 'fr' ? 'Image trop lourde (max 5Mo)' : 'Image too large (max 5MB)');
                return;
            }
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleGenerate = async () => {
        if (!name.trim()) {
            setError(language === 'fr' ? 'Le nom est requis' : 'Name is required');
            return;
        }

        // VERIFICATION CRUCIALE : On empêche la génération si l'user n'est pas là
        if (!user) {
            setError(language === 'fr'
                ? 'Vous devez être connecté pour créer une carte'
                : 'You must be logged in to create a card');
            return;
        }

        setLoading(true);
        setError('');

        try {
            let currentImageUrl = imageUrl;

            // 1. Upload image si présente
            if (image) {
                currentImageUrl = await eventService.uploadImage(image);
                setImageUrl(currentImageUrl);
            }


            const generatedPoems = await eventService.generatePoems({
                name,
                gender,
                language,
                eventType,
                user_id: user.id
            });

            setPoems(generatedPoems);
            setStep('preview');
            window.scrollTo({ top: 0, behavior: 'smooth' });

        } catch (err: any) {
            handleError(err);
        } finally {
            setLoading(false);
        }
    };
    const handleSelectTemplate = async (templateId: TemplateId) => {
        setLoading(true);
        try {
            const selectedPoem = poems.find(p => p.template_id === templateId);
            if (!selectedPoem) return;

            const data = await eventService.createCard({
                name, gender, language, eventType,
                templateId, poem: selectedPoem.poem, imageUrl
            });

            router.push(`/preview/${data.card.share_token}`);
        } catch (err) {
            setError('Erreur de création');
        } finally {
            setLoading(false);
        }
    };

    const handleError = (err: any) => {
        console.error("Erreur:", err);
        if (err.message.includes('429')) {
            setError(language === 'fr' ? "L'IA est surchargée. Réessayez dans 1 min." : "AI busy. Try again in 1 min.");
        } else {
            setError(err.message);
        }
    };
    return (
        <div className="min-h-screen bg-[#030712] text-white pb-20 selection:bg-christmas-red/30 mt-20">
            {/* Background Glows - ⭐ ADAPTÉS AUX COULEURS DE L'ÉVÉNEMENT */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-0 right-0 w-[40%] h-[40%] blur-[120px]"
                    style={{
                        backgroundColor: `${eventConfig.colors.primary}10`
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[30%] h-[30%] blur-[120px]"
                    style={{
                        backgroundColor: `${eventConfig.colors.secondary}05`
                    }}
                />
            </div>

            <div className="fixed top-0 left-0 w-full h-1.5 bg-white/5 z-50">
                <motion.div
                    className="h-full shadow-lg"
                    style={{
                        background: `linear-gradient(to right, ${eventConfig.colors.primary}, ${eventConfig.colors.accent})`
                    }}
                    animate={{ width: step === 'form' ? '40%' : '100%' }}
                />
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-12">
                {/* Header Navigation */}
                <header className="flex justify-between items-center mb-16">
                    <Button
                        variant="ghost"
                        onClick={() => step === 'form' ? router.push('/') : setStep('form')}
                        className="text-gray-400 hover:text-white hover:bg-white/5 rounded-xl border border-white/5"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        {language === 'fr' ? 'Retour' : 'Back'}
                    </Button>

                    {/* ⭐ AFFICHAGE DE L'ÉVÉNEMENT SÉLECTIONNÉ */}
                    <div
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl border"
                        style={{
                            backgroundColor: `${eventConfig.colors.primary}10`,
                            borderColor: `${eventConfig.colors.primary}30`,
                        }}
                    >
                        <span className="text-2xl">
  <Icon />
     </span>
                        <span className="text-sm font-bold">
                            {eventConfig.name[language]}
                        </span>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    {step === 'form' ? (
                        <motion.div
                            key="form-step"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="grid lg:grid-cols-12 gap-12"
                        >
                            {/* Visual Preview Column */}
                            <div className="lg:col-span-5 space-y-8">
                                <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                                    Créez un <br />
                                    <span
                                        className="text-transparent bg-clip-text"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${eventConfig.colors.primary}, ${eventConfig.colors.accent})`
                                        }}
                                    >
                                        instant magique
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                    {eventConfig.description[language]}
                                </p>

                                {/* Photo Polaroid Preview */}
                                <div className="relative group">
                                    {imagePreview ? (
                                        <motion.div
                                            initial={{ scale: 0.8, rotate: -5 }}
                                            animate={{ scale: 1, rotate: -2 }}
                                            className="relative bg-white p-3 pb-12 shadow-2xl rounded-sm w-64 mx-auto md:mx-0 border border-gray-200"
                                        >
                                            <img src={imagePreview} className="w-full h-72 object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" alt="Preview" />
                                            <button
                                                onClick={() => {setImage(null); setImagePreview('')}}
                                                className="absolute top-5 right-5 bg-black/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                                            >
                                                <X size={16} />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <div className="w-64 h-80 bg-white/5 border border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center text-gray-500 gap-4">
                                            <ImageIcon size={48} className="opacity-20" />
                                            <span className="text-xs uppercase tracking-widest font-bold">Aucune photo</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Form Column */}
                            <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-2xl">
                                <div className="space-y-10">


                                    {/* Selecteurs avec Icones */}
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                                                <Languages size={14} /> Langue
                                            </label>
                                            <LanguageSelector selected={language} onChange={setLanguage} />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                                                <User size={14} /> Destinataire
                                            </label>
                                            {/* SI fête des mères ou pères, on affiche juste un badge informatif, sinon le sélecteur */}
                                            {eventType === 'mothersday' || eventType === 'fathersday' ? (
                                                <div
                                                    className="w-full h-14 flex items-center px-6 rounded-2xl border border-white/10 bg-white/5 font-bold text-sm uppercase tracking-widest"
                                                    style={{ color: eventConfig.colors.primary }}
                                                >
                                                    <CheckCircle2 size={16} className="mr-2" />
                                                    {eventType === 'mothersday'
                                                        ? (language === 'fr' ? 'POUR ELLE' : 'FOR HER')
                                                        : (language === 'fr' ? 'POUR LUI' : 'FOR HIM')
                                                    }
                                                </div>
                                            ) : (
                                                <GenderSelector selected={gender} onChange={setGender} language={language} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                                            <Sparkles size={14} /> Prénom du destinataire
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ex: Marie, Thomas..."
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-xl focus:outline-none transition-all"
                                            style={{
                                                borderColor: `${eventConfig.colors.primary}30`,
                                            }}
                                        />
                                    </div>

                                    {/* Upload Area */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                                            <ImageIcon size={14} /> Photo souvenir (Optionnel)
                                        </label>
                                        <label className="flex flex-col items-center justify-center w-full h-32 bg-black/20 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all group">
                                            <div className="flex flex-col items-center justify-center">
                                                <Upload className="w-8 h-8 text-gray-500 transition-colors mb-2" style={{ color: `${eventConfig.colors.accent}` }} />
                                                <p className="text-sm text-gray-500">Glissez ou cliquez pour uploader</p>
                                            </div>
                                            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                        </label>
                                    </div>

                                    {error && (
                                        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-sm">
                                            <X size={16} /> {error}
                                        </div>
                                    )}

                                    <Button
                                        onClick={handleGenerate}
                                        isLoading={loading}
                                        className="w-full h-16 rounded-2xl text-white font-bold text-xl"
                                        style={{
                                            backgroundColor: eventConfig.colors.primary,
                                            boxShadow: `0 0 20px ${eventConfig.colors.primary}30`,
                                        }}
                                    >
                                        <Wand2 className="mr-3" />
                                        {language === 'fr' ? 'Générer le poème' : 'Generate Poem'}
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="preview-step"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border shadow-lg"
                                     style={{
                                         backgroundColor: `${eventConfig.colors.primary}20`,
                                         color: eventConfig.colors.primary,
                                         borderColor: `${eventConfig.colors.primary}20`,
                                     }}
                                >
                                    <Check size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">Votre poème est prêt !</h2>
                                <p className="text-gray-400">Choisissez maintenant l'ambiance visuelle de votre carte.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {/* ⭐ UTILISATION DES TEMPLATES DYNAMIQUES */}
                                {templates.map((template) => {
                                    const poemData = poems.find(p => p.template_id === template.id);
                                    if (!poemData) return null;

                                    return (
                                        <motion.div
                                            key={template.id}
                                            whileHover={{ y: -10 }}
                                            className="group relative bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-white/30 transition-all duration-500"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <span
                                                    className="text-xs font-black uppercase tracking-widest"
                                                    style={{ color: eventConfig.colors.accent }}
                                                >
                                                    Style {template.label}
                                                </span>
                                                <Eye className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                                            </div>

                                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
                                                {/* ⭐ RENDU DU BON COMPOSANT */}
                                                <template.Component
                                                    name={name}
                                                    poem={poemData.poem}
                                                    imageUrl={imagePreview || imageUrl}
                                                    language={language}
                                                />
                                            </div>

                                            <Button
                                                onClick={() => handleSelectTemplate(template.id)}
                                                isLoading={loading}
                                                className="w-full mt-8 h-14 rounded-xl text-white font-bold"
                                                style={{
                                                    backgroundColor: eventConfig.colors.primary,
                                                }}
                                            >
                                                Choisir ce style
                                            </Button>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function CreatePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-xs">
                    Initialisation du Studio...
                </p>
            </div>
        }>
            <CreateContent />
        </Suspense>
    );
}