'use client';

import {useState, useEffect, useMemo, useRef,Suspense} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutGrid, List, Plus, Search, Trash2, Send, Eye,
    ExternalLink, Check, Calendar, Zap, ChevronRight, ChevronLeft
} from 'lucide-react';
import { EVENTS } from "@/lib/events";
import { useSearchParams } from "next/navigation";
import {
    CardRow,
    CardStats,
    EVENT_LABELS,
    EventType,
    TemplateId,
    CardData
} from "@/lib/types";

import { getTemplateComponent } from '@/components/TemplateRoutes';
import {supabase} from "@/lib/supabaseClient";
import {useEvent} from "@/app/context/EventContext";

const eventLabels = EVENT_LABELS;

function DashboardContent() {
    const searchParams = useSearchParams();
    const { eventId, setEventId } = useEvent();
    const currentEvent = useMemo(() => EVENTS[eventId], [eventId]);
    // État
    const [cards, setCards] = useState<CardRow[]>([]);
    const [filteredCards, setFilteredCards] = useState<CardRow[]>([]);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedCards, setSelectedCards] = useState<Set<string>>(new Set());
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [stats, setStats] = useState<CardStats>({
        total: 0,
        totalViews: 0,
        events: {} as Record<EventType, number>,
    });

    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    // Fonction pour détecter si le scroll est possible
    const updateScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        updateScrollButtons();
        window.addEventListener('resize', updateScrollButtons);
        return () => window.removeEventListener('resize', updateScrollButtons);
    }, []);

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const distance = 250;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -distance : distance,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        loadUserCards();
    }, []);

    useEffect(() => {
        filterCards();
    }, [searchQuery, selectedEvent, cards]);

    const loadUserCards = async () => {
        setIsLoading(true);
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { data, error } = await supabase
                .from('cards')
                .select('*')
                .eq('user_id', user.id)
                .order('created_at', { ascending: false });

            if (error) throw error;

            const cardsData = data || [];
            setCards(cardsData);

            // Calcul des stats
            const totalViews = cardsData.reduce((sum, card) => sum + (card.views_count || 0), 0);
            const eventCounts = cardsData.reduce((acc, card) => {
                acc[card.event_type as EventType] = (acc[card.event_type as EventType] || 0) + 1;
                return acc;
            }, {} as Record<EventType, number>);

            setStats({
                total: cardsData.length,
                totalViews,
                events: eventCounts
            });
        } catch (error) {
            console.error('Erreur chargement:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const filterCards = () => {
        let filtered = [...cards];
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(card =>
                card.name.toLowerCase().includes(query) ||
                card.poem.toLowerCase().includes(query)
            );
        }
        if (selectedEvent) {
            filtered = filtered.filter(card => card.event_type === selectedEvent);
        }
        setFilteredCards(filtered);
    };



    const validCards: CardData[] = useMemo(
        () =>
            filteredCards.map(c => ({
                ...c,
                template_id: (Number(c.template_id) || 1) as TemplateId,
                event_type: c.event_type as EventType,
                created_at: c.created_at || new Date().toISOString(),
                views_count: c.views_count || 0,
            })),
        [filteredCards]
    );

    const handleShare = async (card: CardData) => {
        const shareUrl = `${window.location.origin}/preview/${card.share_token}`;
        if (navigator.share) {
            try {
                await navigator.share({ title: `Carte ${eventLabels[card.event_type]}`, url: shareUrl });
            } catch { copyToClipboard(shareUrl); }
        } else { copyToClipboard(shareUrl); }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert('✅ Lien copié !');
    };

    const handleDelete = async (cardIds: string[]) => {
        try {
            const { error } = await supabase.from('cards').delete().in('id', cardIds);
            if (error) throw error;
            loadUserCards();
            setSelectedCards(new Set());
            setShowDeleteModal(false);
        } catch (error) {
            alert('Erreur lors de la suppression');
        }
    };

    const toggleCardSelection = (cardId: string) => {
        const newSelection = new Set(selectedCards);
        newSelection.has(cardId) ? newSelection.delete(cardId) : newSelection.add(cardId);
        setSelectedCards(newSelection);
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white pt-20 mt-20">
            {/* Header section */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-5xl font-black italic tracking-tighter mb-2 uppercase">
                            MY <span style={{ color: currentEvent.colors.primary }}>Dashboard</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Gérez vos campagnes et vos cartes</p>
                    </div>
                    <a href="/create"
                       style={{ backgroundColor: currentEvent.colors.primary }}
                       className="px-8 py-4 rounded-2xl  text-whitefont-black italic uppercase text-sm flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-white/10">
                        <Plus size={20} /> Nouvelle Création
                    </a>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard icon={<Zap />} label="Total Cartes" value={stats.total} color="#A855F7" />
                    <StatCard icon={<Eye />} label="Vues Totales" value={stats.totalViews} color="#3B82F6" />
                    <StatCard icon={<Calendar />} label="Événements" value={Object.keys(stats.events).length} color="#10B981" />
                </div>
            </div>

            {/* Toolbar */}
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-4 flex flex-col lg:flex-row gap-4 items-center justify-between backdrop-blur-xl">
                    <div className="relative w-full lg:max-w-md">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Rechercher un destinataire..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 rounded-[1.5rem] bg-white/5 border border-white/5 focus:border-white/20 outline-none transition-all font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        {selectedCards.size > 0 && (
                            <button onClick={() => setShowDeleteModal(true)} className="flex-1 lg:flex-none px-6 py-4 rounded-2xl bg-red-500/10 text-red-500 font-black uppercase italic text-xs border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2">
                                <Trash2 size={16} /> Supprimer ({selectedCards.size})
                            </button>
                        )}
                        <div className="flex bg-black/20 rounded-2xl p-1 border border-white/5">
                            <button onClick={() => setViewMode('grid')} className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><LayoutGrid size={20}/></button>
                            <button onClick={() => setViewMode('list')} className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'}`}><List size={20}/></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Filters */}
            <div className="relative max-w-7xl mx-auto mb-10 group">

                {/* Flèche Gauche - Apparaît au survol du conteneur parent si scroll possible */}
                <button
                    onClick={() => handleScroll('left')}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md border border-white/10 rounded-full transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <ChevronLeft size={26} className="text-white" />
                </button>

                {/* Liste Défilante */}
                <div
                    ref={scrollRef}
                    onScroll={updateScrollButtons}
                    className="flex items-center gap-3 overflow-x-auto no-scrollbar px-6 py-2 snap-x snap-mandatory scroll-smooth"
                >
                    {/* BOUTON "TOUS" */}
                    <button
                        onClick={() => setSelectedEvent(null)}
                        className={`snap-center shrink-0 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border active:scale-95 ${
                            !selectedEvent
                                ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/20'
                        }`}
                    >
                        Tous les événements
                    </button>

                    {/* AUTRES BOUTONS */}
                    {(Object.keys(EVENTS) as Array<EventType>).map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedEvent(type)}
                            className={`snap-center shrink-0 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border flex items-center gap-3 whitespace-nowrap active:scale-95 ${
                                selectedEvent === type
                                    ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/20'
                            }`}
                        >
        <span
            className={`w-2 h-2 rounded-full transition-transform duration-300 ${
                selectedEvent === type ? 'scale-125' : ''
            }`}
            style={{ backgroundColor: EVENTS[type].colors.primary }}
        />
                            {EVENTS[type].name.fr}
                        </button>
                    ))}


                    <div className="w-8 shrink-0" />
                </div>

                {/* Flèche Droite */}
                <button
                    onClick={() => handleScroll('right')}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-md border border-white/10 rounded-full transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                    <ChevronRight size={26} className="text-white" />
                </button>
            </div>

            {/* Grid/List Rendering */}
            <div className="max-w-7xl mx-auto px-6 pb-20 ">
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 6].map(i => <div key={i} className="aspect-[3/4] rounded-[2.5rem] bg-white/5 animate-pulse" />)}
                    </div>
                ) : filteredCards.length === 0 ? (
                    <div className="py-40 text-center bg-white/[0.02] rounded-[3rem] border border-dashed border-white/10">
                        <div className="text-5xl mb-6">✨</div>
                        <h3 className="text-2xl font-black italic uppercase mb-2">Aucune carte trouvée</h3>
                        <p className="text-gray-500 mb-8">Il est temps de créer votre premier chef-d'œuvre.</p>
                        <a href="/create" className="px-8 py-4 rounded-2xl  font-black uppercase italic text-sm"
                           style={{ backgroundColor: currentEvent.colors.primary }}
                        >Créer une carte</a>
                    </div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {validCards.map(card => (
                            <CardGridItem key={card.id} card={card} isSelected={selectedCards.has(card.id)} onSelect={() => toggleCardSelection(card.id)} onShare={() => handleShare(card)} />
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {validCards.map(card => (
                            <CardListItem key={card.id} card={card} isSelected={selectedCards.has(card.id)} onSelect={() => toggleCardSelection(card.id)} onShare={() => handleShare(card)} />
                        ))}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showDeleteModal && (
                    <DeleteModal count={selectedCards.size} onConfirm={() => handleDelete(Array.from(selectedCards))} onCancel={() => setShowDeleteModal(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}

// --- SOUS-COMPOSANTS ---

function StatCard({ icon, label, value, color }: { icon: any, label: string, value: number, color: string }) {
    return (
        <div className="bg-white/[0.03] rounded-[2rem] p-8 border border-white/10 backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute -inset-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl rounded-full" style={{ backgroundColor: color }} />
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg" style={{ backgroundColor: `${color}20`, color: color }}>
                    {icon}
                </div>
                <div className="text-4xl font-black italic tracking-tighter mb-1">{value}</div>
                <div className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{label}</div>
            </div>
        </div>
    );
}

function CardGridItem({ card, isSelected, onSelect, onShare }: { card: CardData, isSelected: boolean, onSelect: () => void, onShare: () => void }) {
    const event = EVENTS[card.event_type] || EVENTS.christmas;
    const TemplatePreview = getTemplateComponent(card.event_type, card.template_id);

    return (
        <motion.div layout className="group relative">
            {/* Bouton de sélection */}
            <button
                onClick={onSelect}
                className={`absolute top-5 left-5 z-30 w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center backdrop-blur-md ${
                    isSelected ? 'border-white bg-white text-black' : 'border-white/20 bg-black/40 hover:border-white/50'
                }`}
            >
                {isSelected ? <Check size={16} /> : null}
            </button>

            {/* Conteneur de la Carte */}
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">

                {/* 🎨 LA CORRECTION EST ICI : On adapte le scale pour remplir le conteneur */}
                <div className="absolute inset-0 pointer-events-none flex items-start justify-center overflow-hidden">
                    <div className="w-full h-full origin-top transition-transform duration-700 group-hover:scale-[1.05]"
                         style={{ transform: 'scale(1)' }}>
                        {/* Note: Si tes templates sont prévus pour du 1080px,
                           utilise scale(0.4) ou ajuste le width.
                           Ici on force l'occupation de l'espace.
                        */}
                        <div className="w-full h-full">
                            <TemplatePreview
                                name={card.name}
                                poem={card.poem}
                                imageUrl={card.image_url}
                                language={card.language}
                                //isPreview={true}  Optionnel si tu veux adapter le texte en miniature
                            />
                        </div>
                    </div>
                </div>

                {/* Overlay au survol (Actions) */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 z-20">
                    <div className="flex gap-3 scale-90 group-hover:scale-100 transition-transform duration-300">
                        <a
                            href={`/preview/${card.share_token}`}
                            target="_blank"
                            className="p-4 rounded-2xl bg-white text-black hover:bg-gray-200 transition-colors shadow-xl"
                        >
                            <ExternalLink size={20} />
                        </a>
                        <button
                            onClick={onShare}
                            className="p-4 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white backdrop-blur-md shadow-xl"
                        >
                            <Send size={20} />
                        </button>
                    </div>
                </div>

                {/* Badge Événement */}
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest z-10 text-white shadow-lg" style={{ backgroundColor: event.colors.primary }}>
                    {event.name.fr}
                </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-5 px-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-[11px] font-bold text-gray-400">
                        <Eye size={14} style={{ color: event.colors.primary }} />
                        {card.views_count || 0}
                    </span>
                </div>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter italic">
                    {new Date(card.created_at).toLocaleDateString()}
                </span>
            </div>
        </motion.div>
    );
}
function CardListItem({ card, isSelected, onSelect, onShare }: { card: CardData, isSelected: boolean, onSelect: () => void, onShare: () => void }) {
    const event = EVENTS[card.event_type] || EVENTS.christmas;
    return (
        <motion.div layout className={`flex items-center gap-6 p-4 rounded-3xl border transition-all ${isSelected ? 'bg-white/10 border-white/30' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
            <button onClick={onSelect} className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${isSelected ? 'bg-white border-white text-black' : 'border-white/10 hover:border-white/20'}`}>
                {isSelected && <Check size={16} />}
            </button>

            <div className="flex-1 min-w-0">
                <h3 className="font-black italic text-sm truncate uppercase tracking-tighter">{card.name}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{event.name.fr}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <a href={`/preview/${card.share_token}`} target="_blank" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white"><ExternalLink size={18} /></a>
                <button onClick={onShare} className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-white"><Send size={18} /></button>
            </div>
        </motion.div>
    );
}

function DeleteModal({ count, onConfirm, onCancel }: { count: number, onConfirm: () => void, onCancel: () => void }) {
    return (
        <div className="fixed inset-0 bg-[#030712]/90 backdrop-blur-xl z-50 flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-[#0a0f1e] rounded-[3rem] border border-red-500/20 p-10 max-w-md w-full text-center shadow-2xl shadow-red-500/10">
                <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center mb-8 mx-auto border border-red-500/20 text-red-500">
                    <Trash2 size={40} />
                </div>
                <h2 className="text-3xl font-black italic uppercase mb-4 tracking-tighter">Supprimer <span className="text-red-500">{count}</span> cartes ?</h2>
                <p className="text-gray-500 text-sm font-medium mb-10 leading-relaxed">Cette action est irréversible. Les liens de partage ne fonctionneront plus.</p>
                <div className="flex flex-col gap-3">
                    <button onClick={onConfirm} className="w-full py-5 rounded-2xl bg-red-500 text-white font-black uppercase italic tracking-widest shadow-xl shadow-red-500/20">Confirmer la suppression</button>
                    <button onClick={onCancel} className="w-full py-5 rounded-2xl bg-white/5 text-gray-400 font-bold">Annuler</button>
                </div>
            </motion.div>
        </div>
    );
}

export default function DashboardPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#030712] flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Chargement du panel...</p>
                </div>
            </div>
        }>
            <DashboardContent />
        </Suspense>
    );
}