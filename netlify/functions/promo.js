import nodemailer from 'nodemailer';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const { name, email, company } = JSON.parse(event.body || '{}');
    if (!name || !email) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Eksik alanlar' }) };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || 'info@vislivis.com',
      replyTo: email,
      subject: 'Yeni Modül İçin Erken Erişim Talebi',
      html: `<h2>Erken Erişim Talebi</h2>
             <table border="1" cellpadding="8" cellspacing="0">
               <tr><td><b>İsim</b></td><td>${name}</td></tr>
               <tr><td><b>E-posta</b></td><td>${email}</td></tr>
               <tr><td><b>Şirket</b></td><td>${company || '-'}</td></tr>
             </table>`,
    });

    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: 'Talep başarıyla gönderildi' }) };
  } catch (error) {
    console.error('Promo mail gönderme hatası:', error);
    return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Sunucu hatası oluştu' }) };
  }
};


