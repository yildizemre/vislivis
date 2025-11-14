// Simple Express server to send emails via Nodemailer (ESM)
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
// Fallback: also try to load ../.env (project root) if any missing
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: true }));
app.use(express.json());
// Simple request log for /api routes (dev aid)
app.use('/api', (req, _res, next) => {
  console.log(`[API] ${req.method} ${req.url}`);
  next();
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

// SMTP config quick test (development helper)
app.get('/api/promo-test', async (_req, res) => {
  try {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({
        ok: false,
        error: 'SMTP yapılandırılmamış (.env gerekli)',
        details: {
          hostSet: !!process.env.SMTP_HOST,
          userSet: !!process.env.SMTP_USER,
          passSet: !!process.env.SMTP_PASS
        }
      });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.verify();
    res.json({ ok: true, message: 'SMTP bağlantısı başarılı' });
  } catch (err) {
    console.error('SMTP verify error:', err);
    res.status(500).json({ ok: false, error: 'SMTP verify başarısız', message: err?.message });
  }
});

// Contact route quick test
app.get('/api/contact-test', (_req, res) => {
  res.json({ ok: true, route: 'contact' });
});

app.post('/api/promo', async (req, res) => {
  try {
    const { name, email, company } = req.body || {};
    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'Eksik alanlar' });
    }

    // Basic env validation
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ ok: false, error: 'SMTP yapılandırılmamış (.env gerekli)' });
    }

    // Configure transport from env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true', // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.MAIL_TO || 'info@vislivis.com';
    const subject = 'Erken Erişim Talebi - Yeni Modül';
    const text = `İsim: ${name}\nE-posta: ${email}\nŞirket: ${company || '-'}\n\nYeni modül hakkında bilgi almak istiyorum.`;

    await transporter.sendMail({
      from: `"Vislivis Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text,
      html: `
        <h2>${subject}</h2>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><b>İsim</b></td><td>${name}</td></tr>
          <tr><td><b>E-posta</b></td><td>${email}</td></tr>
          <tr><td><b>Şirket</b></td><td>${company || '-'}</td></tr>
        </table>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error:', err);
    res.status(500).json({
      ok: false,
      error: 'Mail gönderilemedi',
      message: process.env.NODE_ENV === 'production' ? undefined : err?.message
    });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Eksik alanlar' });
    }
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(500).json({ ok: false, error: 'SMTP yapılandırılmamış (.env gerekli)' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toAddress = process.env.MAIL_TO || 'info@vislivis.com';
    const subject = 'İletişim Formu - Web Sitesi';
    const text = `İsim: ${name}\nE-posta: ${email}\nŞirket: ${company || '-'}\n\nMesaj:\n${message}`;

    await transporter.sendMail({
      from: `"Vislivis Web" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: toAddress,
      replyTo: email,
      subject,
      text,
      html: `
        <h2>${subject}</h2>
        <table border="1" cellpadding="8" cellspacing="0">
          <tr><td><b>İsim</b></td><td>${name}</td></tr>
          <tr><td><b>E-posta</b></td><td>${email}</td></tr>
          <tr><td><b>Şirket</b></td><td>${company || '-'}</td></tr>
        </table>
        <p style="margin-top:12px"><b>Mesaj:</b></p>
        <pre style="white-space:pre-wrap">${message}</pre>
      `,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Contact mail error:', err);
    res.status(500).json({ ok: false, error: 'Mail gönderilemedi', message: err?.message });
  }
});

app.listen(PORT, () => {
  console.log(`Mail server listening on http://localhost:${PORT}`);
});


