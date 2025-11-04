'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { apiClient } from '@/lib/apiClient';
import { AuthResponse } from '@/types';
import Button from '@/components/Button';
import styles from './login.module.css';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validatePhone = (value: string) => {
    return /^\d{10}$/.test(value);
  };

  const validatePassword = (value: string) => {
    if (value.length < 10) return false;
    if (!/[A-Z]/.test(value)) return false;
    if (!/[a-z]/.test(value)) return false;
    if (!/[0-9]/.test(value)) return false;
    
    // Check for sequential digits
    for (let i = 0; i < value.length - 2; i++) {
      const num1 = parseInt(value[i]);
      const num2 = parseInt(value[i + 1]);
      const num3 = parseInt(value[i + 2]);
      if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        if (num2 === num1 + 1 && num3 === num2 + 1) {
          return false;
        }
      }
    }
    return true;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validatePhone(phone)) {
      setError('Telefon numarası 10 haneli olmalıdır');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Şifre en az 10 karakter olmalı, büyük harf, küçük harf ve rakam içermeli, ardışık rakamlar içermemelidir'
      );
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post<AuthResponse>('/auth/login', {
        phone,
        password,
      });

      if (response.success && response.token && response.user) {
        login(response.token, response.user);
        router.push('/dashboard');
      } else {
        setError(response.message || 'Giriş başarısız');
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
          <h1 className={styles.title}>Giriş Yap</h1>
          <p className={styles.subtitle}>QR Menu hesabınıza giriş yapın</p>
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

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Şifre
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••"
              className={styles.input}
              required
            />
            <small className={styles.hint}>
              En az 10 karakter, büyük/küçük harf ve rakam içermeli
            </small>
          </div>

          <div className={styles.forgotPassword}>
            <Link href="/forgot-password">Şifremi Unuttum</Link>
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </Button>
        </form>

        <div className={styles.footer}>
          <Link href="/" className={styles.backLink}>
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}


