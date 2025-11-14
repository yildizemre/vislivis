# Vislivis - AI-Powered Retail Analytics Platform

Modern perakende analitik platformu. Yapay zeka destekli müşteri davranışı analizi, kuyruk yönetimi ve gerçek zamanlı raporlama.

## 🚀 Özellikler

- ✅ Blog sistemi (Unsplash CDN fotoğraflar)
- ✅ Contact form (Netlify Functions + Gmail SMTP)
- ✅ Çoklu dil desteği (TR/EN)
- ✅ Responsive tasarım
- ✅ SEO optimize
- ✅ Google Analytics entegrasyonu

## 📦 Kurulum

```bash
# Dependencies kur
npm install

# Development server başlat (Netlify Dev)
npm run dev

# Production build
npm run build
```

## 🔧 Environment Variables

`.env.example` dosyasını `.env` olarak kopyalayın ve değerleri doldurun:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
MAIL_TO=info@vislivis.com
```

### Gmail App Password Oluşturma:
1. https://myaccount.google.com/security
2. 2-Step Verification aktif olmalı
3. App passwords → Generate
4. Mail → Windows Computer seç
5. 16 karakterlik şifreyi kopyala

## 🌐 Deployment (Netlify)

1. GitHub'a push yap
2. Netlify Dashboard → Environment variables ekle
3. Otomatik deploy başlar

## 📱 Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router
- Netlify Functions
- Nodemailer

## 📄 License

MIT