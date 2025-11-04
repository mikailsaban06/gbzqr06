import styles from './Features.module.css';

const features = [
  {
    icon: '⚡',
    title: 'Hızlı ve Kolay',
    description: 'QR kod ile saniyeler içinde menünüze erişim. Kurulum ve kullanım son derece basit.',
  },
  {
    icon: '📱',
    title: 'Mobil Uyumlu',
    description: 'Tüm cihazlarda mükemmel görünüm. Responsive tasarım ile her ekranda optimize.',
  },
  {
    icon: '🔄',
    title: 'Gerçek Zamanlı Güncelleme',
    description: 'Menünüzü anında güncelleyin. Değişiklikler hemen yansır, baskı maliyeti yok.',
  },
  {
    icon: '🎨',
    title: 'Modern Tasarım',
    description: 'Profesyonel ve şık görünüm. Markanıza özel renk ve tema seçenekleri.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Neden QR Menu?</h2>
          <p className={styles.subtitle}>
            Modern restoran yönetimi için ihtiyacınız olan tüm özellikler
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


