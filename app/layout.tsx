import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimatedSnow from '@/components/AnimatedSnow';
import Navbar from "@/components/Navbar";

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
        <Navbar/>
        <AnimatedSnow />
        {children}
        </body>
        </html>
    );
}