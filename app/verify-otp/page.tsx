'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { apiClient } from '@/lib/apiClient';
import { AuthResponse } from '@/types';
import Button from '@/components/Button';
import styles from './verify-otp.module.css';

export default function VerifyOTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (phoneParam) {
      setPhone(phoneParam);
    } else {
      router.push('/forgot-password');
    }
  }, [searchParams, router]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const validatePassword = (value: string) => {
    if (value.length < 10) return false;
    if (!/[A-Z]/.test(value)) return false;
    if (!/[a-z]/.test(value)) return false;
    if (!/[0-9]/.test(value)) return false;
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (otp.length !== 6) {
      setError('OTP kodu 6 haneli olmalıdır');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError(
        'Şifre en az 10 karakter olmalı, büyük harf, küçük harf ve rakam içermeli, ardışık rakamlar içermemelidir'
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Şifreler eşleşmiyor');
      return;
    }

    setLoading(true);

    try {
      const response = await apiClient.post<AuthResponse>('/auth/verify-otp', {
        phone,
        otp,
        newPassword,
      });

      if (response.success) {
        alert('Şifreniz başarıyla sıfırlandı! Giriş sayfasına yönlendiriliyorsunuz.');
        router.push('/login');
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
          <h1 className={styles.title}>OTP Doğrulama</h1>
          <p className={styles.subtitle}>
            {phone} numarasına gönderilen 6 haneli kodu girin
          </p>
          <div className={styles.info}>
            Demo için OTP kodu: <strong>111111</strong>
          </div>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="otp" className={styles.label}>
              OTP Kodu
            </label>
            <input
              id="otp"
              type="tel"
              value={otp}
              onChange={handleOtpChange}
              placeholder="123456"
              className={styles.input}
              required
            />
            <small className={styles.hint}>6 haneli doğrulama kodu</small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="newPassword" className={styles.label}>
              Yeni Şifre
            </label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••••"
              className={styles.input}
              required
            />
            <small className={styles.hint}>
              En az 10 karakter, büyük/küçük harf ve rakam içermeli
            </small>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Yeni Şifre (Tekrar)
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••••"
              className={styles.input}
              required
            />
          </div>

          <Button type="submit" fullWidth disabled={loading}>
            {loading ? 'Şifre Sıfırlanıyor...' : 'Şifreyi Sıfırla'}
          </Button>
        </form>

        <div className={styles.footer}>
          <Link href="/forgot-password" className={styles.backLink}>
            ← Geri dön
          </Link>
        </div>
      </div>
    </div>
  );
}


