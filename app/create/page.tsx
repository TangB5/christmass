'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import LanguageSelector from '@/components/LanguageSelector';
import GenderSelector from '@/components/GenderSelector';
import CardTemplate1 from '@/components/CardTemplate1';
import CardTemplate2 from '@/components/CardTemplate2';
import CardTemplate3 from '@/components/CardTemplate3';
import CardTemplate4 from '@/components/CardTemplate4';
import { Language, Gender, GeneratedPoem, TemplateId } from '@/lib/types';
import {
    ArrowLeft,
    Upload,
    Wand2,
    Sparkles,
    Check,
    X,
    Image as ImageIcon,
    User,
    Languages,
    Eye,
    Palette
} from 'lucide-react';

export default function CreatePage() {
    const router = useRouter();
    const [step, setStep] = useState<'form' | 'preview'>('form');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [name, setName] = useState('');
    const [language, setLanguage] = useState<Language>('fr');
    const [gender, setGender] = useState<Gender>('neutral');
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [poems, setPoems] = useState<GeneratedPoem[]>([]);
    const [imageUrl, setImageUrl] = useState<string>('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
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
        setLoading(true);
        setError('');

        try {
            let uploadedImageUrl = imageUrl;

            if (image) {
                const formData = new FormData();
                formData.append('file', image);
                const uploadRes = await fetch('/api/upload-image', { method: 'POST', body: formData });
                if (!uploadRes.ok) throw new Error('Upload failed');
                const uploadData = await uploadRes.json();
                uploadedImageUrl = uploadData.imageUrl;
                setImageUrl(uploadedImageUrl);
            }

            const res = await fetch('/api/generate-poem', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, gender, language }),
            });

            // SÉCURITÉ : Vérifier si la réponse est OK avant de faire res.json()
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Erreur de génération');
            }

            const data = await res.json();

            if (!data.poems || data.poems.length === 0) {
                throw new Error('Aucun poème généré');
            }

            setPoems(data.poems);
            setStep('preview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            console.error("Détail de l'erreur:", err);
            setError(language === 'fr'
                ? `Désolé, l'IA est surchargée (limite gratuite). Réessayez dans 1 minute.`
                : `AI is busy (free quota reached). Please try again in 1 minute.`);
        } finally {
            setLoading(false);
        }
    };
    const handleSelectTemplate = async (templateId: TemplateId) => {
        setLoading(true);
        try {
            const selectedPoem = poems.find(p => p.template_id === templateId);
            if (!selectedPoem) return;

            const res = await fetch('/api/create-card', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, gender, language,
                    template_id: templateId,
                    poem: selectedPoem.poem,
                    image_url: imageUrl || null,
                }),
            });

            const data = await res.json();
            router.push(`/preview/${data.card.share_token}`);
        } catch (err) {
            setError('Erreur de création');
        } finally {
            setLoading(false);
        }
    };

    const templates = [
        { id: 1 as TemplateId, Component: CardTemplate1, label: language === 'fr' ? 'Classique' : 'Classic' },
        { id: 2 as TemplateId, Component: CardTemplate2, label: language === 'fr' ? 'Moderne' : 'Modern' },
        { id: 3 as TemplateId, Component: CardTemplate3, label: language === 'fr' ? 'Enfantin' : 'Playful' },
        { id: 4 as TemplateId, Component: CardTemplate4, label: language === 'fr' ? 'Élégant' : 'Elegant' },
    ];

    return (
        <div className="min-h-screen bg-[#030712] text-white pb-20 selection:bg-christmas-red/30">
            {/* Background Glows */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-christmas-red/10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-christmas-green/5 blur-[120px]" />
            </div>

            {/* Barre de progression */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-white/5 z-50">
                <motion.div
                    className="h-full bg-gradient-to-r from-christmas-red to-christmas-gold shadow-[0_0_10px_rgba(220,38,38,0.5)]"
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

                    <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-2xl border border-white/10">
                        <Palette size={18} className="text-christmas-gold" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
                            {step === 'form' ? 'Configuration' : 'Personnalisation'}
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-christmas-red to-christmas-gold">
                                        instant magique
                                    </span>
                                </h1>

                                <p className="text-gray-400 text-lg font-light leading-relaxed">
                                    Laissez notre IA rédiger un poème unique. Ajoutez une photo pour rendre ce moment inoubliable.
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
                                            <GenderSelector selected={gender} onChange={setGender} language={language} />
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
                                            className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-6 text-xl focus:outline-none focus:border-christmas-red focus:ring-1 focus:ring-christmas-red transition-all"
                                        />
                                    </div>

                                    {/* Upload Area */}
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest px-1">
                                            <ImageIcon size={14} /> Photo souvenir (Optionnel)
                                        </label>
                                        <label className="flex flex-col items-center justify-center w-full h-32 bg-black/20 border-2 border-dashed border-white/10 rounded-2xl cursor-pointer hover:bg-white/5 hover:border-white/20 transition-all group">
                                            <div className="flex flex-col items-center justify-center">
                                                <Upload className="w-8 h-8 text-gray-500 group-hover:text-christmas-gold transition-colors mb-2" />
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
                                        className="w-full h-16 rounded-2xl bg-christmas-red hover:bg-red-600 text-white font-bold text-xl shadow-[0_0_20px_rgba(220,38,38,0.3)]"
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
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 text-green-500 rounded-full mb-4 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                    <Check size={32} />
                                </div>
                                <h2 className="text-4xl font-bold">Votre poème est prêt !</h2>
                                <p className="text-gray-400">Choisissez maintenant l'ambiance visuelle de votre carte.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                {templates.map((template) => {
                                    const poemData = poems.find(p => p.template_id === template.id);
                                    if (!poemData) return null;

                                    return (
                                        <motion.div
                                            key={template.id}
                                            whileHover={{ y: -10 }}
                                            className="group relative bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:border-christmas-gold/50 transition-all duration-500"
                                        >
                                            <div className="flex justify-between items-center mb-6">
                                                <span className="text-xs font-black uppercase tracking-widest text-christmas-gold">
                                                    Style {template.label}
                                                </span>
                                                <Eye className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                                            </div>

                                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black">
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
                                                className="w-full mt-8 h-14 rounded-xl  text-black font-bold hover:bg-gray-200"
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