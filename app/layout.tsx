import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AnimatedSnow from '@/components/AnimatedSnow';

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
        <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen`}>
        <AnimatedSnow />
        {children}
        </body>
        </html>
    );
}