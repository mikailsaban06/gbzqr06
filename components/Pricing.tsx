'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Basic',
    price: '₺299',
    period: '/ay',
    features: [
      '1 Restoran',
      'Sınırsız Menü',
      'QR Kod Üretimi',
      'Temel Destek',
    ],
  },
  {
    name: 'Pro',
    price: '₺599',
    period: '/ay',
    features: [
      '3 Restoran',
      'Sınırsız Menü',
      'QR Kod Üretimi',
      'Özel Tasarım',
      'Analitik Raporlar',
      'Öncelikli Destek',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Özel',
    period: '',
    features: [
      'Sınırsız Restoran',
      'Sınırsız Menü',
      'QR Kod Üretimi',
      'Özel Tasarım',
      'Detaylı Analitik',
      '7/24 Destek',
      'API Erişimi',
      'Özel Entegrasyonlar',
    ],
  },
];

export default function Pricing() {
  const router = useRouter();

  return (
    <section className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fiyatlandırma</h2>
          <p className={styles.subtitle}>
            İhtiyacınıza en uygun planı seçin ve hemen başlayın
          </p>
        </div>
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && <div className={styles.badge}>Popüler</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                fullWidth
                onClick={() => router.push('/login')}
              >
                Başla
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


