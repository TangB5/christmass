'use client';

import { useMemo, useState, Suspense } from 'react'; // Ajout de Suspense
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, Chrome, Sparkles, ArrowRight, CheckCircle2, ArrowUpRight, MailCheck } from 'lucide-react';
import { useAuth } from '@/lib/auth/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { EVENTS } from '@/lib/events';
import { EventType } from '@/lib/types';

function AuthContent() { // On déplace le contenu dans un sous-composant
    const searchParams = useSearchParams();
    const router = useRouter();

    const eventId = (searchParams.get('event')?.toLowerCase() as EventType) || 'christmas';

    const currentEvent = useMemo(() => {

        return EVENTS[eventId] || EVENTS.newyear;
    }, [eventId]); // On observe eventId

    const accentColor = currentEvent.colors.primary;

    const [mode, setMode] = useState<'signin' | 'signup'>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const { signIn, signUp, signInWithGoogle } = useAuth();

    const getEmailProviderLink = (email: string) => {
        const domain = email.split('@')[1]?.toLowerCase();
        if (domain?.includes('gmail')) return 'https://mail.google.com';
        if (domain?.includes('outlook') || domain?.includes('hotmail') || domain?.includes('live')) return 'https://outlook.live.com';
        if (domain?.includes('yahoo')) return 'https://mail.yahoo.com';
        return `https://${domain}`;
    };

    const handleGoogleSignIn = async () => {

        const origin = window.location.origin;


        const nextPath = searchParams.get('next') || '/dashboard';


        const fullRedirectUrl = `${origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;



        try {
            await signInWithGoogle(fullRedirectUrl);
        } catch (err) {
            console.error("Erreur Google Auth:", err);
        }
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (mode === 'signup') {
                const res = await signUp(email, password, name);
                if (res.error) throw res.error;
                setShowSuccessModal(true);
            } else {
                const result = await signIn(email, password);


                if (result.error) {
                    setError(result.error.message);
                    setLoading(false);
                    return;
                }

                // 2. On vérifie la session de deux manières pour être sûr
                const session = (result as any).data?.session;

                if (session) {
                    console.log("Session détectée, redirection...");

                    const redirectTo = searchParams.get('next') || '/dashboard';

                    router.push(redirectTo);
                    return;
                }

                // 3. Si on arrive ici, c'est que Supabase n'a pas renvoyé de session
                setError("Impossible de récupérer la session. Vérifiez vos identifiants.");
            }
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-[#030712] flex items-center justify-center p-6 relative overflow-hidden mt-20">
            {/* Background Glow Dynamique - Ajout d'une key pour forcer l'animation au changement de couleur */}
            <motion.div
                key={accentColor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full transition-colors duration-1000"
                style={{ backgroundColor: accentColor }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full max-w-[440px] z-10"
            >
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <Sparkles className="w-4 h-4" style={{ color: accentColor }} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Sende Dashboard</span>
                    </div>
                </div>

                <div className="bg-[#0a0f1e]/60 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 shadow-2xl relative overflow-hidden">
                    {loading && (
                        <motion.div
                            className="absolute top-0 left-0 h-1 z-20"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            style={{ backgroundColor: accentColor }}
                        />
                    )}

                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-black italic tracking-tighter uppercase mb-3 leading-none">
                            {mode === 'signin' ? (
                                <div className='text-white'>Bon <span style={{ color: accentColor }}>Retour</span></div>
                            ) : (
                                <div className="text-white">Nouvel <span style={{ color: accentColor }}>Espace</span></div>
                            )}
                        </h1>
                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
                            {mode === 'signin' ? 'Content de vous revoir' : 'Créez votre compte pro'}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {mode === 'signup' && (
                            <input
                                type="text"
                                placeholder="NOM COMPLET"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-6 py-5 text-white bg-white/[0.03] border border-white/5 rounded-2xl focus:border-white/20 outline-none transition-all text-sm font-bold placeholder:text-gray-700 uppercase"
                                required
                            />
                        )}

                        <input
                            type="email"
                            placeholder="ADRESSE EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-6 py-5 bg-white/[0.03] border border-white/5 rounded-2xl focus:border-white/20 outline-none transition-all text-sm font-bold placeholder:text-gray-700 uppercase"
                            required
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="MOT DE PASSE"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-5 bg-white/[0.03] border text-white  border-white/5 rounded-2xl focus:border-white/20 outline-none transition-all text-sm font-bold placeholder:text-gray-700 uppercase"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>

                        {error && (
                            <p className="text-red-500 text-[10px] font-black uppercase text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                                {error}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-5 mt-4 rounded-2xl font-black italic uppercase text-sm tracking-widest transition-all flex items-center justify-center gap-3 text-white shadow-xl"
                            style={{
                                backgroundColor: accentColor,
                                boxShadow: `${accentColor}30 0px 20px 40px -10px`
                            }}
                        >
                            {loading ? "Chargement..." : mode === 'signin' ? 'Connexion' : 'S\'inscrire'}
                            <ArrowRight size={18} />
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
                        <button
                            onClick={handleGoogleSignIn}
                            className="w-full py-4 rounded-2xl text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest"
                        >
                            <Chrome size={16} /> Google Account
                        </button>

                        <button
                            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
                            className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                        >
                            {mode === 'signin' ? "Créer un compte" : "Déjà membre ? Se connecter"}
                        </button>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showSuccessModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#030712]/95 backdrop-blur-2xl">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#0a0f1e] border border-white/10 p-10 rounded-[3.5rem] max-w-md w-full text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
                        >
                            <div
                                className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20"
                                style={{ backgroundColor: accentColor }}
                            />

                            <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner" style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}30` }}>
                                <MailCheck size={48} style={{ color: accentColor }} />
                            </div>

                            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none text-white">
                                Lien <span style={{ color: accentColor }}>Envoyé</span>
                            </h2>

                            <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed">
                                Un lien de confirmation attend votre validation sur l'adresse :<br/>
                                <span className="text-white font-bold">{email}</span>
                            </p>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={getEmailProviderLink(email)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-5 rounded-2xl bg-white text-black font-black uppercase italic text-xs tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2"
                                >
                                    Ouvrir ma boîte mail <ArrowUpRight size={18} />
                                </a>

                                <button
                                    onClick={() => {
                                        setShowSuccessModal(false);
                                        setMode('signin');
                                    }}
                                    className="w-full py-4 rounded-2xl bg-white/5 text-gray-500 font-black uppercase italic text-[10px] tracking-widest hover:text-white transition-colors"
                                >
                                    Retour à la connexion
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Wrapper obligatoire pour useSearchParams
export default function AuthPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#030712]" />}>
            <AuthContent />
        </Suspense>
    );
}