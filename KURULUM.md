# QR Menu - Kurulum Talimatları

## Gereksinimler

- Node.js 18.x veya üzeri
- npm veya yarn package manager

## Kurulum Adımları

### 1. Projeyi Başlatın

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### 2. Proje Yapısı

```
qr-menu-landing/
├── app/                    # Next.js App Router sayfaları
│   ├── api/               # Mock API endpoints
│   ├── dashboard/         # Dashboard sayfası
│   ├── login/             # Giriş sayfası
│   ├── forgot-password/   # Şifre sıfırlama
│   ├── verify-otp/        # OTP doğrulama
│   ├── layout.tsx         # Ana layout
│   ├── page.tsx           # Ana sayfa
│   └── globals.css        # Global CSS
├── components/            # React bileşenleri
├── context/              # React context (AuthContext)
├── lib/                  # Yardımcı fonksiyonlar
├── types/                # TypeScript tipleri
└── public/               # Statik dosyalar
```

## Kullanım

### Ana Sayfa

- Modern landing page tasarımı
- Hero, Özellikler, Fiyatlandırma, İletişim bölümleri
- Responsive tasarım (mobil, tablet, desktop)
- SEO optimizasyonlu

### Kimlik Doğrulama

**Giriş Yapma:**
- Telefon: 10 haneli numara (örn: 5551234567)
- Şifre gereksinimleri:
  - En az 10 karakter
  - Büyük harf içermeli
  - Küçük harf içermeli
  - Rakam içermeli
  - Ardışık rakamlar olmamalı (123, 456 vb.)

**Şifre Sıfırlama:**
1. Telefon numaranızı girin
2. OTP kodu girin: `111111` (sabit test kodu)
3. Yeni şifrenizi belirleyin
4. Giriş sayfasına yönlendirileceksiniz

**Dashboard:**
- Kullanıcı hoş geldin mesajı
- İstatistik kartları
- Responsive sidebar menü
- Çıkış yapma özelliği

## Mock API

Proje şu anda mock (sahte) API kullanmaktadır:

- `/api/auth/login` - Giriş endpoint'i
- `/api/auth/forgot` - Şifre sıfırlama talebi
- `/api/auth/verify-otp` - OTP doğrulama

Mock API, gerçek backend entegrasyonu için hazır durumda. Tüm endpoint'ler ve TypeScript interface'leri tanımlı.

## SEO Özellikleri

✅ Meta tags (title, description, keywords)
✅ OpenGraph tags (sosyal medya paylaşımları)
✅ Twitter Card tags
✅ Structured Data (Schema.org)
✅ robots.txt
✅ sitemap.xml
✅ Canonical URLs
✅ Mobile-first design
✅ Responsive images

## Geliştirme

### Build Alma

```bash
npm run build
```

### Production Sunucusu

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Önemli Notlar

1. **localStorage Kullanımı**: Kullanıcı oturumu localStorage'da saklanır
2. **Session Persistence**: Sayfa yenilendiğinde oturum devam eder
3. **Responsive**: Tüm ekran boyutlarında test edildi
4. **TypeScript**: Tüm kodlar type-safe
5. **CSS Modules**: Component-level styling
6. **SEO Ready**: Arama motorları için optimize edildi

## Backend Entegrasyonu (Sonraki Adım)

Gerçek backend entegrasyonu için:

1. `/app/api/auth/*` route'larını kaldırın
2. `lib/apiClient.ts` dosyasını gerçek API URL'i ile güncelleyin
3. Authentication header'larını ekleyin
4. Gerçek veritabanına bağlanın
5. Şifre hashleme ekleyin
6. Gerçek OTP servisi (SMS/Email) entegre edin

## Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Dil**: TypeScript
- **Styling**: CSS Modules
- **State**: React Context API
- **Storage**: localStorage
- **Routing**: next/navigation

## Destek

Herhangi bir sorun yaşarsanız, lütfen dokümantasyonu kontrol edin veya issue açın.

---

✨ Modern restoranlar için geliştirildi


