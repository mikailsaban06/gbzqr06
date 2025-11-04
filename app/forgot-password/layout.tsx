import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Şifremi Unuttum - QR Menu',
  description: 'QR Menu şifre sıfırlama',
  robots: 'noindex, nofollow',
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


