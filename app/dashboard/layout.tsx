import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - QR Menu',
  description: 'QR Menu yönetim paneli',
  robots: 'noindex, nofollow',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


