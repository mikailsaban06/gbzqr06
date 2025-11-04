import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.logo}>QR Menu</h3>
            <p className={styles.description}>
              Modern restoranlar için dijital menü çözümleri
            </p>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Ürün</h4>
            <ul className={styles.links}>
              <li><a href="#features">Özellikler</a></li>
              <li><a href="#pricing">Fiyatlandırma</a></li>
              <li><a href="#">Demo</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Şirket</h4>
            <ul className={styles.links}>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#contact">İletişim</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Yasal</h4>
            <ul className={styles.links}>
              <li><a href="#">Gizlilik Politikası</a></li>
              <li><a href="#">Kullanım Koşulları</a></li>
              <li><a href="#">KVKK</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 QR Menu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}


