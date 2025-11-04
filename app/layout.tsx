import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'QR Menu - Dijital Menü Çözümleri',
  description: 'Restoranınız için modern, hızlı ve kullanıcı dostu dijital QR menü sistemi. Ücretsiz deneyin!',
  keywords: ['qr menu', 'dijital menü', 'restoran menüsü', 'qr kod menü', 'temassız menü'],
  authors: [{ name: 'QR Menu Team' }],
  creator: 'QR Menu',
  publisher: 'QR Menu',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yourdomain.com',
    siteName: 'QR Menu',
    title: 'QR Menu - Dijital Menü Çözümleri',
    description: 'Restoranınız için modern, hızlı ve kullanıcı dostu dijital QR menü sistemi.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QR Menu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QR Menu - Dijital Menü Çözümleri',
    description: 'Restoranınız için modern, hızlı ve kullanıcı dostu dijital QR menü sistemi.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="canonical" href="https://yourdomain.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}


