'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import DashboardLayout from '@/components/DashboardLayout';
import styles from './dashboard.module.css';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className={styles.container}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>Hoşgeldin, {user?.name}!</h1>
          <p className={styles.subtitle}>
            QR Menu dashboard'una hoş geldin. Buradan menülerini yönetebilir ve
            işletmeni büyütebilirsin.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📱</div>
            <h3 className={styles.cardTitle}>Toplam Menü</h3>
            <p className={styles.cardValue}>0</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>👁️</div>
            <h3 className={styles.cardTitle}>Toplam Görüntülenme</h3>
            <p className={styles.cardValue}>0</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📊</div>
            <h3 className={styles.cardTitle}>Aktif QR Kod</h3>
            <p className={styles.cardValue}>0</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>⭐</div>
            <h3 className={styles.cardTitle}>Ortalama Puan</h3>
            <p className={styles.cardValue}>-</p>
          </div>
        </div>

        <div className={styles.infoBox}>
          <h2>Hızlı Başlangıç</h2>
          <ul>
            <li>Yeni bir menü oluşturun</li>
            <li>QR kodunuzu indirin</li>
            <li>Masalarınıza yerleştirin</li>
            <li>Müşterilerinizin deneyimini takip edin</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}


