'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { Language, TemplateId, BatchContact, BatchGenerationResult } from '@/lib/types';
import { parseCSV, downloadFile, generateShareUrl } from '@/lib/utils';
import {
    ArrowLeft,
    UploadCloud,
    Download,
    ExternalLink,
    FileSpreadsheet,
    Settings2,
    CheckCircle2,
    AlertCircle,
    Users,
    ChevronRight,
    Loader2,
    Database
} from 'lucide-react';

export default function BatchPage() {
    const router = useRouter();
    const [step, setStep] = useState<'upload' | 'preview' | 'results'>('upload');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [language, setLanguage] = useState<Language>('fr');
    const [templateId, setTemplateId] = useState<TemplateId>(1);
    const [contacts, setContacts] = useState<BatchContact[]>([]);
    const [results, setResults] = useState<BatchGenerationResult[]>([]);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const text = event.target?.result as string;
                const parsed = parseCSV(text);

                const contactsList: BatchContact[] = parsed.map((row: any) => ({
                    name: row.name || row.nom || '',
                    gender: (row.gender || row.genre || 'neutral').toLowerCase(),
                    email: row.email || '',
                    phone: row.phone || row.telephone || '',
                })).filter((c: BatchContact) => c.name);

                if (contactsList.length === 0) {
                    setError(language === 'fr' ? 'Aucun contact valide trouvé' : 'No valid contacts found');
                    return;
                }

                setContacts(contactsList);
                setStep('preview');
                setError('');
            } catch (err) {
                setError(language === 'fr' ? 'Fichier CSV invalide' : 'Invalid CSV file');
            }
        };
        reader.readAsText(file);
    };

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/batch-generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contacts, language, template_id: templateId }),
            });
            const data = await res.json();
            setResults(data.results);
            setStep('results');
        } catch (err) {
            setError('Erreur de génération');
        } finally {
            setLoading(false);
        }
    };

    const handleExportResults = () => {
        if (results.length === 0) {
            setError(language === 'fr' ? 'Aucun résultat à exporter' : 'No results to export');
            return;
        }

        // Préparer les données CSV
        const csvContent = [
            ['Nom', 'Genre', 'Email', 'Téléphone', 'Lien de la carte'],
            ...results.map(r => [
                r.contact.name,
                r.contact.gender,
                r.contact.email || '',
                r.contact.phone || '',

            ])
        ]
            .map(row => row.map(field => `"${field}"`).join(','))
            .join('\n');

        // Télécharger le CSV
        downloadFile(csvContent, 'cartes_voeux.csv');
    };

    return (
        <div className="min-h-screen bg-[#030712] text-white selection:bg-christmas-green/30">
            {/* Background Decor */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-christmas-green/10 blur-[120px] rounded-full opacity-50" />
            </div>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Header & Stepper */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <Button
                            variant="ghost"
                            onClick={() => step === 'upload' ? router.push('/') : setStep('upload')}
                            className="mb-6 -ml-4 text-gray-400 hover:text-white hover:bg-white/5"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Retour
                        </Button>
                        <h1 className="text-4xl font-black tracking-tighter flex items-center gap-3">
                            <Database className="text-christmas-green" />
                            Génération <span className="text-christmas-green">Pro</span>
                        </h1>
                    </div>

                    {/* Stepper UI */}
                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-2xl border border-white/10">
                        {[
                            { id: 'upload', icon: UploadCloud, label: 'Import' },
                            { id: 'preview', icon: Settings2, label: 'Config' },
                            { id: 'results', icon: CheckCircle2, label: 'Export' }
                        ].map((s, i) => (
                            <React.Fragment key={s.id}>
                                <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${step === s.id ? 'bg-christmas-green text-white shadow-lg shadow-green-900/20' : 'text-gray-500'}`}>
                                    <s.icon size={18} />
                                    <span className="text-xs font-bold uppercase tracking-widest">{s.label}</span>
                                </div>
                                {i < 2 && <ChevronRight size={14} className="text-gray-700" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {/* STEP 1: UPLOAD */}
                    {step === 'upload' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                            className="grid lg:grid-cols-5 gap-12"
                        >
                            <div className="lg:col-span-2 space-y-6">
                                <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] space-y-4">
                                    <h3 className="font-bold text-xl flex items-center gap-2">
                                        <FileSpreadsheet className="text-christmas-green" />
                                        Format CSV requis
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Utilisez un fichier CSV avec des entêtes. Les colonnes <code className="text-christmas-green">name</code> et <code className="text-christmas-green">gender</code> sont obligatoires.
                                    </p>
                                    <div className="bg-black/40 p-4 rounded-xl font-mono text-[11px] text-green-500/80 border border-green-500/10">
                                        name,gender,email<br/>
                                        Thomas,boy,t@email.com<br/>
                                        Sarah,girl,s@email.com
                                    </div>
                                    <Button variant="outline" className="w-full text-xs border-white/10 hover:bg-white/5">
                                        Télécharger le modèle .csv
                                    </Button>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <label className="group relative flex flex-col items-center justify-center w-full h-[400px] bg-white/5 border-2 border-dashed border-white/10 rounded-[3rem] cursor-pointer hover:bg-white/[0.07] hover:border-christmas-green/50 transition-all overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-christmas-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative z-10 flex flex-col items-center">
                                        <div className="w-20 h-20 bg-christmas-green/20 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            <UploadCloud size={40} className="text-christmas-green" />
                                        </div>
                                        <p className="text-xl font-bold mb-2">Déposez votre fichier ici</p>
                                        <p className="text-gray-500 text-sm italic">Fichiers .CSV uniquement</p>
                                    </div>
                                    <input type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
                                </label>
                                {error && (
                                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-400">
                                        <AlertCircle size={20} /> {error}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: PREVIEW */}
                    {step === 'preview' && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="space-y-8"
                        >
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
                                    <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                                        <span className="font-bold flex items-center gap-2">
                                            <Users size={18} className="text-christmas-green" />
                                            Contacts détectés ({contacts.length})
                                        </span>
                                    </div>
                                    <div className="max-h-[500px] overflow-y-auto scrollbar-hide">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="text-[10px] uppercase tracking-widest text-gray-500 bg-white/5">
                                            <tr>
                                                <th className="px-6 py-4">Nom</th>
                                                <th className="px-6 py-4">Genre</th>
                                                <th className="px-6 py-4">Contact</th>
                                            </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/5">
                                            {contacts.map((c, i) => (
                                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                                    <td className="px-6 py-4 font-medium">{c.name}</td>
                                                    <td className="px-6 py-4">
                                                            <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold border border-white/10 uppercase">
                                                                {c.gender}
                                                            </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-500 text-sm">{c.email || c.phone || '-'}</td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-8">
                                        <h3 className="font-bold text-xl flex items-center gap-2 text-christmas-gold">
                                            <Settings2 size={20} /> Configuration
                                        </h3>
                                        <Select label="Langue de rédaction" options={[{value:'fr', label:'Français'}, {value:'en', label:'Anglais'}]} value={language} onChange={(e) => setLanguage(e.target.value as Language)} />
                                        <Select label="Modèle visuel" options={[{value:'1', label:'Classique'}, {value:'2', label:'Moderne'}]} value={templateId.toString()} onChange={(e) => setTemplateId(parseInt(e.target.value) as TemplateId)} />

                                        <div className="pt-6 border-t border-white/10">
                                            <Button
                                                onClick={handleGenerate}
                                                isLoading={loading}
                                                className="w-full h-16 rounded-2xl bg-christmas-green hover:bg-green-600 shadow-lg shadow-green-900/20"
                                            >
                                                Générer {contacts.length} cartes
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: RESULTS */}
                    {step === 'results' && (
                        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="max-w-4xl mx-auto">
                            <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-christmas-green shadow-[0_0_15px_rgba(22,163,74,0.5)]" />

                                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                                    <CheckCircle2 size={40} />
                                </div>

                                <h2 className="text-4xl font-black mb-4">Opération réussie !</h2>
                                <p className="text-gray-400 mb-10 max-w-md mx-auto">
                                    Vos {results.length} cartes de vœux ont été générées et sont prêtes à être partagées.
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                        <p className="text-3xl font-black text-christmas-green">{results.filter(r => r.success).length}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Cartes créées</p>
                                    </div>
                                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                                        <p className="text-3xl font-black text-gray-300">{results.length}</p>
                                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total Process</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button onClick={handleExportResults} className="h-14 px-8 rounded-xl bg-white text-black font-bold">
                                        <Download className="mr-2 w-5 h-5" /> Télécharger les liens (CSV)
                                    </Button>
                                    <Button variant="ghost" onClick={() => router.push('/')} className="h-14 px-8 rounded-xl text-white border border-white/10 hover:bg-white/5">
                                        Terminer
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}