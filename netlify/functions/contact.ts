import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // Sadece POST isteklerini kabul et
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body || '{}');

    // Validasyon
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'İsim, email ve mesaj zorunludur' })
      };
    }

    // Email format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Geçersiz email formatı' })
      };
    }

    // SMTP transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Email gönder (info@vislivis.com'a)
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.MAIL_TO, // info@vislivis.com
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Yeni İletişim Formu Mesajı</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 İsim:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              ${company ? `
              <div class="field">
                <div class="label">🏢 Şirket:</div>
                <div class="value">${company}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">💬 Mesaj:</div>
                <div class="value">${message}</div>
              </div>
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; text-align: center; color: #999;">
                <p>Bu mesaj Vislivis web sitesinden gönderildi</p>
                <p style="font-size: 12px;">${new Date().toLocaleString('tr-TR')}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    });

    // Kullanıcıya otomatik yanıt gönder
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Mesajınız Alındı - Vislivis',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Mesajınız Alındı!</h1>
            </div>
            <div class="content">
              <p>Merhaba <strong>${name}</strong>,</p>
              <p>Vislivis ile iletişime geçtiğiniz için teşekkür ederiz! Mesajınız başarıyla alındı ve ekibimiz en kısa sürede size dönüş yapacaktır.</p>
              <p><strong>Mesajınız:</strong></p>
              <p style="padding: 15px; background: white; border-left: 3px solid #667eea; margin: 20px 0;">${message}</p>
              <p>Genellikle 24 saat içinde yanıt veriyoruz. Acil durumlar için bizi <a href="mailto:info@vislivis.com">info@vislivis.com</a> adresinden arayabilirsiniz.</p>
              <p style="margin-top: 30px;">Saygılarımızla,<br><strong>Vislivis Ekibi</strong></p>
            </div>
          </div>
        </body>
        </html>
      `
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        success: true,
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' 
      })
    };

  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      })
    };
  }
};
