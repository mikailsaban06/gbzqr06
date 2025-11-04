import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OTP Doğrulama - QR Menu',
  description: 'QR Menu OTP doğrulama',
  robots: 'noindex, nofollow',
};

export default function VerifyOTPLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


