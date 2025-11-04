import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giriş Yap - QR Menu',
  description: 'QR Menu hesabınıza giriş yapın',
  robots: 'noindex, nofollow',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


