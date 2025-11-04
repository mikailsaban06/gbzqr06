'use client';

import { useState } from 'react';
import Button from './Button';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form gönderimi henüz aktif değil. Bu sadece bir demo.');
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>İletişime Geçin</h2>
          <p className={styles.subtitle}>
            Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h3>Email</h3>
                <p>info@qrmenu.com</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📱</div>
              <div>
                <h3>Telefon</h3>
                <p>+90 555 123 45 67</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Adres</h3>
                <p>İstanbul, Türkiye</p>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adınız"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={styles.input}
              required
            />
            <input
              type="email"
              placeholder="Email Adresiniz"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Mesajınız"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={styles.textarea}
              rows={5}
              required
            />
            <Button type="submit" fullWidth>
              Gönder
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}


