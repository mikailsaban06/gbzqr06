# 🚀 Hızlı Başlangıç Kılavuzu

## 1. Kurulum (5 dakika)

```bash
# Terminal'i aç ve proje klasörüne git
cd gbzqr

# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev
```

Tarayıcıda otomatik olarak açılmazsa: **http://localhost:3000**

## 2. Test Senaryosu

### ✅ Senaryo 1: Ana Sayfa Turu
1. Ana sayfayı aç
2. Hero section'ı gör
3. Aşağı kaydır: Features, Pricing, Contact bölümlerini gör
4. Responsive test: Tarayıcı penceresini küçült/büyüt

### ✅ Senaryo 2: Login İşlemi
1. Sağ üst köşede **"Ücretsiz Dene / Giriş Yap"** butonuna tıkla
2. Login sayfasında:
   - **Telefon**: `5551234567` (herhangi bir 10 haneli numara)
   - **Şifre**: `Test123456` (büyük/küçük harf + rakam içermeli, en az 10 karakter)
3. **Giriş Yap** butonuna tıkla
4. Dashboard'a yönlendirileceksin

### ✅ Senaryo 3: Dashboard
1. Dashboard'da hoşgeldin mesajını gör
2. İstatistik kartlarını incele
3. Sidebar menüyü test et
4. Mobil görünüm için pencereyi küçült (hamburger menü görünmeli)
5. **Çıkış Yap** butonuna tıkla

### ✅ Senaryo 4: Şifre Sıfırlama
1. Login sayfasında **"Şifremi Unuttum"** linkine tıkla
2. Telefon numarası gir: `5551234567`
3. **"OTP Kodu Gönder"** butonuna tıkla
4. OTP sayfasında:
   - **OTP Kodu**: `111111` (sabit test kodu)
   - **Yeni Şifre**: `NewPass123456`
   - **Yeni Şifre (Tekrar)**: `NewPass123456`
5. **"Şifreyi Sıfırla"** butonuna tıkla
6. Login sayfasına yönlendirileceksin

### ✅ Senaryo 5: Session Persistence
1. Login ol (Senaryo 2)
2. Dashboard'dasın
3. Sayfayı yenile (F5)
4. Hala login olmalısın (tekrar giriş istemez)
5. Çıkış yap
6. Sayfayı yenile
7. Login sayfasına yönlendirilmelisin

## 3. Responsive Test

### Mobil (< 768px)
- Header: Navigasyon menüsü gizli, buton görünür
- Hero: Tek sütun
- Features: Kartlar alt alta
- Pricing: Kartlar alt alta
- Dashboard: Hamburger menü aktif

### Tablet (768px - 1200px)
- İki sütunlu layout
- Responsive grid

### Desktop (> 1200px)
- Full layout
- Geniş container

## 4. Önemli Bilgiler

### Test Verileri
- **Telefon**: Herhangi bir 10 haneli numara
- **Şifre**: Min 10 karakter, büyük/küçük harf + rakam
- **OTP**: Sabit kod `111111`

### Validasyon Kuralları
✅ Telefon: Sadece rakam, tam 10 hane
✅ Şifre: 
  - Min 10 karakter
  - En az 1 büyük harf
  - En az 1 küçük harf
  - En az 1 rakam
  - Ardışık rakamlar yasak (123, 456 vb.)

### Başarılı Test İçin
- Konsol'da hata olmamalı (F12 > Console)
- Tüm butonlar çalışmalı
- Form validasyonları aktif olmalı
- Responsive görünümler düzgün olmalı
- Login/Logout akışı sorunsuz çalışmalı

## 5. Sorun Giderme

### Port 3000 zaten kullanımda
```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### Bağımlılık hatası
```bash
# node_modules'u sil ve tekrar yükle
rm -rf node_modules
npm install
```

### Next.js cache sorunu
```bash
# .next klasörünü sil
rm -rf .next
npm run dev
```

## 6. Build & Production Test

```bash
# Production build al
npm run build

# Production sunucusunu başlat
npm start
```

Production'da da aynı testleri yap.

## 7. Bir Sonraki Adım

✅ Frontend tamam!

Şimdi backend geliştirmeye geçebilirsin:
1. Database setup (PostgreSQL/MongoDB)
2. API endpoints (Express/Fastify)
3. Authentication (JWT)
4. OTP service (Twilio/SMS)
5. Menu management
6. File upload
7. Analytics

## 📞 Destek

Bir sorun mu var?
1. `KURULUM.md` dosyasını kontrol et
2. `README.md` detaylı dokümantasyon
3. `PROJE_OZETI.md` tüm özellikler

---

🎉 **Başarılar! Projen hazır!**


