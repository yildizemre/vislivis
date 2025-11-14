# 🔧 Backend Optimizasyon Rehberi

## 📊 Mevcut Durum Analizi

### Var Olan Yapı
- ✅ Express.js server (`server/` klasöründe)
- ✅ Nodemailer setup
- ✅ CORS configuration
- ⚠️ Netlify Functions endpoint'leri (kurulu değil)
- ❌ Database bağlantısı yok
- ❌ Authentication sistemi yok
- ❌ API documentation yok

---

## 🚀 Acil Optimizasyonlar (1-2 Hafta)

### 1. **Contact Form Backend Entegrasyonu**

#### Şu Anki Sorun
```typescript
// ContactSection.tsx - Line 40
const res = await fetch('/.netlify/functions/contact', {
  method: 'POST',
  // ...
});
```
- Netlify Functions kurulu değil
- Email gönderimi çalışmıyor
- Hata yönetimi yetersiz

#### Çözüm
```bash
# 1. Netlify Functions klasörü oluştur
mkdir -p netlify/functions

# 2. Contact function oluştur
touch netlify/functions/contact.ts
```

```typescript
// netlify/functions/contact.ts
import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body || '{}');

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting Vislivis',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Vislivis Team</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
};
```

#### .env Güncellemesi
```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="Vislivis <noreply@vislivis.com>"
CONTACT_EMAIL=info@vislivis.com
```

---

### 2. **Rate Limiting Implementasyonu**

```bash
npm install express-rate-limit
```

```typescript
// server/index.ts
import rateLimit from 'express-rate-limit';

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per window
  message: 'Too many contact form submissions, please try again later'
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  // Contact form handler
});
```

---

### 3. **Input Validation & Sanitization**

```bash
npm install express-validator
```

```typescript
// server/middleware/validation.ts
import { body, validationResult } from 'express-validator';

export const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .escape()
    .withMessage('Name must be between 2 and 100 characters'),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid email address'),
  
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .escape(),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .escape()
    .withMessage('Message must be between 10 and 1000 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
```

---

### 4. **Error Handling Middleware**

```typescript
// server/middleware/errorHandler.ts
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('Error:', err);

  // Operational errors
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      message: err.message
    });
  }

  // Default error
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : err.message
  });
};
```

---

## 🗄️ Database Setup (2-4 Hafta)

### 1. **PostgreSQL + Prisma**

```bash
npm install @prisma/client
npm install -D prisma
npx prisma init
```

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Contact {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  message   String
  status    String   @default("new") // new, read, replied
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([email])
  @@index([createdAt])
}

model Newsletter {
  id          String   @id @default(cuid())
  email       String   @unique
  subscribed  Boolean  @default(true)
  source      String?  // website, promo_modal, etc.
  createdAt   DateTime @default(now())
  
  @@index([email])
}

model PromoRequest {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  status    String   @default("pending") // pending, contacted, converted
  createdAt DateTime @default(now())
  
  @@index([email])
  @@index([status])
}

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  name          String
  company       String?
  role          String   @default("user") // user, admin
  passwordHash  String
  verified      Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@index([email])
}
```

```bash
# Migration
npx prisma migrate dev --name init
npx prisma generate
```

---

### 2. **Database Connection Pool**

```typescript
// server/db/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

---

### 3. **Contact Form with Database**

```typescript
// server/routes/contact.ts
import { Router } from 'express';
import { prisma } from '../db/prisma';
import { contactValidation } from '../middleware/validation';
import { sendEmail } from '../services/email';

const router = Router();

router.post('/contact', contactValidation, async (req, res) => {
  try {
    const { name, email, company, message } = req.body;

    // Save to database
    const contact = await prisma.contact.create({
      data: { name, email, company, message }
    });

    // Send email
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // Auto-reply
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting Vislivis',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
      `
    });

    res.json({ 
      success: true, 
      message: 'Thank you for your message!' 
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    });
  }
});

export default router;
```

---

## 🔐 Authentication System (3-4 Hafta)

### 1. **JWT Setup**

```bash
npm install jsonwebtoken bcryptjs
npm install -D @types/jsonwebtoken @types/bcryptjs
```

```typescript
// server/services/auth.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { prisma } from '../db/prisma';

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = '7d';

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 12);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (token: string): { userId: string } => {
  return jwt.verify(token, JWT_SECRET) as { userId: string };
};
```

---

### 2. **Auth Middleware**

```typescript
// server/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/auth';
import { prisma } from '../db/prisma';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { userId } = verifyToken(token);
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role
    };

    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const authorize = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};
```

---

## 📧 Email Service Optimization

### 1. **Email Templates**

```bash
npm install handlebars mjml
```

```typescript
// server/services/email.ts
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs/promises';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendEmail = async ({
  to,
  subject,
  template,
  data
}: {
  to: string;
  subject: string;
  template: string;
  data: any;
}) => {
  try {
    const templatePath = path.join(__dirname, '../templates', `${template}.hbs`);
    const templateContent = await fs.readFile(templatePath, 'utf-8');
    const compiledTemplate = handlebars.compile(templateContent);
    const html = compiledTemplate(data);

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html
    });
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};
```

---

## 🚀 Caching Strategy

### 1. **Redis Setup**

```bash
npm install redis
```

```typescript
// server/services/cache.ts
import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

client.on('error', (err) => console.error('Redis Client Error', err));

export const connectRedis = async () => {
  await client.connect();
};

export const cache = {
  get: async (key: string) => {
    const value = await client.get(key);
    return value ? JSON.parse(value) : null;
  },
  
  set: async (key: string, value: any, ttl: number = 3600) => {
    await client.setEx(key, ttl, JSON.stringify(value));
  },
  
  del: async (key: string) => {
    await client.del(key);
  }
};
```

---

## 📊 Monitoring & Logging

### 1. **Sentry Integration**

```bash
npm install @sentry/node @sentry/tracing
```

```typescript
// server/index.ts
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());
app.use(Sentry.Handlers.tracingHandler());

// ... routes ...

app.use(Sentry.Handlers.errorHandler());
```

---

## 🔒 Security Enhancements

### 1. **Helmet.js**

```bash
npm install helmet
```

```typescript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
}));
```

---

## 📝 API Documentation

### 1. **Swagger Setup**

```bash
npm install swagger-ui-express swagger-jsdoc
```

```typescript
// server/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Vislivis API',
      version: '1.0.0',
      description: 'API documentation for Vislivis platform',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./server/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
```

---

## 🎯 Priority Checklist

### Week 1-2 (Critical)
- [x] Netlify Functions setup
- [x] Contact form backend
- [x] Email service
- [x] Input validation
- [x] Rate limiting
- [x] Error handling

### Week 3-4 (High Priority)
- [ ] Database setup (Prisma + PostgreSQL)
- [ ] Authentication system
- [ ] Email templates
- [ ] Security headers (Helmet)

### Month 2 (Medium Priority)
- [ ] Redis caching
- [ ] Sentry monitoring
- [ ] API documentation (Swagger)
- [ ] Admin dashboard API

### Month 3+ (Low Priority)
- [ ] Microservices architecture
- [ ] GraphQL API
- [ ] WebSocket support
- [ ] Advanced analytics
