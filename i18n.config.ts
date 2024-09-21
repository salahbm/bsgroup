import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'ru' as const;
export const locales = ['en', 'ru', 'uz'] as string[];

// Use the default: `always`
export const localePrefix = 'never';
