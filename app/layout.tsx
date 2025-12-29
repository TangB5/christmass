import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import {EventProvider} from "@/app/context/EventContext";
import GlobalParticles from "@/components/EventVisuals";
import {AuthProvider} from "@/lib/auth/AuthContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Cartes de Vœux Animées | Christmas Cards',
    description: 'Créez des cartes de vœux personnalisées et animées pour Noël et le Nouvel An',
    keywords: 'carte de vœux, Noël, Nouvel An, personnalisé, animé',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
        <body className={`${inter.className} bg-[#030712] min-h-screen`}>
        <AuthProvider>
        <EventProvider>
        <Navbar />
            <GlobalParticles />
        {children}
        </EventProvider>
        </AuthProvider>
        </body>
        </html>
    );
}