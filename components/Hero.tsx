'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Restoranınız İçin Modern Dijital Menü Çözümü
          </h1>
          <p className={styles.subtitle}>
            QR kod ile kolay erişim, gerçek zamanlı güncelleme ve modern tasarım.
            Müşterilerinize benzersiz bir deneyim sunun.
          </p>
          <div className={styles.buttons}>
            <Button size="large" onClick={() => router.push('/login')}>
              Ücretsiz Dene
            </Button>
            <Button size="large" variant="outline">
              Daha Fazla Bilgi
            </Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.mockImage}>
            <span>🍽️</span>
            <p>QR Menu Demo</p>
          </div>
        </div>
      </div>
    </section>
  );
}


