'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toPng } from 'html-to-image';
import { imagesToGif } from '@/lib/ffmpeg';

// Components
import Button from '@/components/ui/Button';
import ShareButtons from '@/components/ShareButtons';
import CardTemplate1 from '@/components/CardTemplate1';
import CardTemplate2 from '@/components/CardTemplate2';
import CardTemplate3 from '@/components/CardTemplate3';
import CardTemplate4 from '@/components/CardTemplate4';

// Utils & Icons
import { CardData } from '@/lib/types';
import { generateShareUrl } from '@/lib/utils';
import {
    ArrowLeft, Download, Share2, Info, User, Layout,
    Lightbulb, PlusCircle, Loader2, AlertCircle,
    Printer, Film, Share, Sparkles
} from 'lucide-react';

export default function PreviewPage() {
    const params = useParams();
    const router = useRouter();
    const cardRef = useRef<HTMLDivElement>(null);

    // States
    const [card, setCard] = useState<CardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isExporting, setIsExporting] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const res = await fetch(`/api/create-card?token=${params.id}`);
                if (!res.ok) throw new Error('Card not found');
                const data = await res.json();
                setCard(data.card);
            } catch (err) {
                setError('Card not found');
            } finally {
                setLoading(false);
            }
        };
        if (params.id) fetchCard();
    }, [params.id]);

    const handleExportGif = async () => {
        if (!cardRef.current) return;

        try {
            setIsExporting(true);
            setExportProgress(0);


            // 1️⃣ Capturer les frames du DOM
            const images: string[] = [];
            const frameCount = 15; // nombre de frames pour le GIF

            for (let i = 0; i < frameCount; i++) {
                const dataUrl = await toPng(cardRef.current, {
                    pixelRatio: 1.2,
                    cacheBust: true,
                    style: { transform: 'scale(1)' }
                });
                images.push(dataUrl);

                setExportProgress(Math.round(((i + 1) / frameCount) * 100));
                await new Promise(resolve => setTimeout(resolve, 100)); // petite pause pour animation
            }

            // 2️⃣ Convertir les frames en GIF avec FFmpeg
            const blob = await imagesToGif(images, 400, 533, 6);

            // 3️⃣ Télécharger le GIF
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `noel-${card?.name || 'card'}.gif`;
            a.click();
            URL.revokeObjectURL(url);

            setExportProgress(100);

        } catch (err) {
            console.error('GIF export failed:', err);
        } finally {
            setIsExporting(false);
        }
    };

    const handleWhatsAppShare = () => {
        const text = card?.language === 'fr'
            ? `Regarde la carte de Noël magique que j'ai créée pour ${card.name} ! ✨`
            : `Look at the magic Christmas card I created for ${card?.name}! ✨`;
        const url = encodeURIComponent(generateShareUrl(card?.share_token || ''));
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-12 h-12 text-christmas-red animate-spin" />
                <p className="text-gray-400 animate-pulse font-medium tracking-widest uppercase text-xs">Magie en cours...</p>
            </div>
        );
    }

    if (error || !card) {
        return (
            <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6">
                <div className="text-center max-w-md p-10 rounded-[3rem] bg-white/5 border border-white/10">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                    <h1 className="text-2xl font-bold text-white mb-4 italic font-serif">Carte égarée</h1>
                    <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-2xl h-14 font-bold" onClick={() => router.push('/')}>
                        <ArrowLeft className="w-4 h-4 mr-2" /> Retour au village
                    </Button>
                </div>
            </div>
        );
    }

    const templates = { 1: CardTemplate1, 2: CardTemplate2, 3: CardTemplate3, 4: CardTemplate4 };
    const TemplateComponent = templates[card.template_id as keyof typeof templates];
    const shareUrl = generateShareUrl(card.share_token);

    return (
        <div className="min-h-screen bg-[#030712] text-white pb-20 relative overflow-x-hidden mt-20">
            {/* Background Glows */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px]" />
            </div>

            {/* Modal d'exportation GIF */}
            <AnimatePresence>
                {isExporting && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                    >
                        <div className="relative mb-8">
                            <div className="w-24 h-24 border-4 border-christmas-gold/20 rounded-full flex items-center justify-center">
                                <Loader2 className="w-12 h-12 text-christmas-gold animate-spin" />
                            </div>
                            <Sparkles className="absolute -top-2 -right-2 text-white animate-pulse" />
                        </div>
                        <h2 className="text-3xl font-black mb-2 tracking-tighter">Capture du GIF...</h2>
                        <p className="text-gray-400 font-mono tracking-widest uppercase text-xs">{exportProgress}% terminé</p>
                        <div className="w-64 h-1.5 bg-white/10 rounded-full mt-6 overflow-hidden">
                            <motion.div
                                className="h-full bg-christmas-gold"
                                initial={{ width: 0 }}
                                animate={{ width: `${exportProgress}%` }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-6xl mx-auto px-6 pt-12">
                {/* Header Navigation */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div className="space-y-2">
                        <button onClick={() => router.push('/')} className="flex items-center gap-2 text-gray-500 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.3em] mb-4">
                            <ArrowLeft size={14} /> Recommencer
                        </button>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic font-serif leading-none">
                            {card.language === 'fr' ? 'Prêt à offrir !' : 'Gift Ready!'}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant="outline"
                            className="rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md"
                            onClick={() => window.print()}
                        >
                            <Printer className="w-4 h-4 mr-2" /> {card.language === 'fr' ? 'Imprimer' : 'Print'}
                        </Button>
                        <Button
                            className="rounded-2xl  text-black hover:bg-gray-200 shadow-xl shadow-white/5 font-bold"
                            onClick={handleExportGif}
                            disabled={isExporting}
                        >
                            <Film className="w-4 h-4 mr-2" />
                            {card.language === 'fr' ? 'Sauver en GIF' : 'Save as GIF'}
                        </Button>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Card Preview */}
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-7">
                        <div className="sticky top-12">
                            <div ref={cardRef} className="relative p-1 bg-gradient-to-br from-white/20 via-transparent to-white/5 rounded-[2.8rem] shadow-2xl">
                                <div className="rounded-[2.6rem] overflow-hidden bg-[#050505]">
                                    <TemplateComponent
                                        name={card.name}
                                        poem={card.poem}
                                        imageUrl={card.image_url || undefined}
                                        language={card.language}
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 bg-christmas-gold text-black px-5 py-2 rounded-full font-black text-[10px] shadow-2xl rotate-12 uppercase tracking-widest border-2 border-white">
                                    Collector ✨
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Actions Side Panel */}
                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-6">
                        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 space-y-10 shadow-3xl">
                            {/* Share Section */}
                            <div>
                                <h2 className="text-2xl font-black flex items-center gap-3 mb-8 tracking-tighter italic">
                                    <Share2 size={24} className="text-christmas-gold" />
                                    {card.language === 'fr' ? 'Partager l\'émotion' : 'Share the love'}
                                </h2>

                                <div className="space-y-4">
                                    <ShareButtons url={shareUrl} name={card.name} language={card.language} />

                                    <Button
                                        className="w-full h-14 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold flex items-center justify-center gap-3 shadow-lg"
                                        onClick={handleWhatsAppShare}
                                    >
                                        <Share className="w-5 h-5 fill-white" />
                                        WhatsApp Direct
                                    </Button>
                                </div>
                            </div>

                            {/* Details Table */}
                            <div className="pt-6 border-t border-white/5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Modèle</p>
                                        <p className="font-serif italic text-christmas-gold">Style #{card.template_id}</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Destinataire</p>
                                        <p className="font-bold truncate">{card.name}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pro Tip */}
                            <div className="bg-gradient-to-br from-christmas-gold/10 to-transparent rounded-[2rem] p-6 border border-christmas-gold/20 relative group overflow-hidden">
                                <Lightbulb className="absolute -right-4 -bottom-4 w-24 h-24 text-christmas-gold/5 group-hover:rotate-12 transition-transform duration-500" />
                                <h3 className="font-black text-christmas-gold text-sm mb-2 flex items-center gap-2">
                                    Secret de fabrication
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed relative z-10">
                                    {card.language === 'fr'
                                        ? "Saviez-vous que vous pouvez aussi imprimer cette carte ? Elle est parfaitement formatée pour un cadre photo standard !"
                                        : "Did you know you can also print this card? It's perfectly formatted for a standard photo frame!"}
                                </p>
                            </div>

                            {/* Action Button */}
                            <Button
                                onClick={() => router.push('/create')}
                                className="w-full h-16 rounded-[1.5rem] text-white text-black font-black text-lg hover:bg-christmas-gold hover:text-black transition-all flex items-center justify-center gap-2 group"
                            >
                                <PlusCircle className="group-hover:rotate-90 transition-transform" />
                                {card.language === 'fr' ? 'Créer une autre carte' : 'Create another card'}
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}