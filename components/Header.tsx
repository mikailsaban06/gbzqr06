'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>QR Menu</div>
        <nav className={styles.nav}>
          <a href="#features">Özellikler</a>
          <a href="#pricing">Fiyatlandırma</a>
          <a href="#contact">İletişim</a>
        </nav>
        <Button size="small" onClick={() => router.push('/login')}>
          Ücretsiz Dene / Giriş Yap
        </Button>
      </div>
    </header>
  );
}


