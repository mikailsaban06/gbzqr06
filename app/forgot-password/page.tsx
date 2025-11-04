'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/apiClient';
import { AuthResponse } from '@/types';
import Button from '@/components/Button';
import styles from './forgot-password.module.css';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (phone.length !== 10) {
      setError('Telefon numarası 10 haneli olmalıdır');
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post<AuthResponse>('/auth/forgot', {
        phone,
      });

      if (response.success) {
        router.push(`/verify-otp?phone=${phone}`);
      } else {
        setError(response.message || 'Bir hata oluştu');
      }
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Şifremi Unuttum</h1>
          <p className={styles.subtitle}>
            Telefon numaranızı girin, size OTP kodu gönderelim
          </p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telefon Numarası
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="5551234567"
              className={styles.input}
              required
            />
            <small className={styles.hint}>10 haneli telefon numaranız</small>
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Gönderiliyor...' : 'OTP Kodu Gönder'}
          </Button>
        </form>

        <div className={styles.footer}>
          <Link href="/login" className={styles.backLink}>
            ← Giriş sayfasına dön
          </Link>
        </div>
      </div>
    </div>
  );
}


