'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import styles from './DashboardLayout.module.css';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.logo}>QR Menu</h2>
        </div>
        <nav className={styles.nav}>
          <a href="/dashboard" className={styles.navLink}>
            <span className={styles.navIcon}>🏠</span>
            Ana Sayfa
          </a>
          <a href="#" className={styles.navLink}>
            <span className={styles.navIcon}>📱</span>
            Menüler
          </a>
          <a href="#" className={styles.navLink}>
            <span className={styles.navIcon}>🎨</span>
            QR Kodlar
          </a>
          <a href="#" className={styles.navLink}>
            <span className={styles.navIcon}>📊</span>
            Analizler
          </a>
          <a href="#" className={styles.navLink}>
            <span className={styles.navIcon}>⚙️</span>
            Ayarlar
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={styles.main}>
        {/* Topbar */}
        <header className={styles.topbar}>
          <button
            className={styles.menuButton}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <div className={styles.topbarRight}>
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user?.name}</span>
              <span className={styles.userPhone}>{user?.phone}</span>
            </div>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Çıkış Yap
            </button>
          </div>
        </header>

        {/* Content */}
        <main className={styles.content}>{children}</main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}


