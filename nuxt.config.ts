import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const siteTimeZone = 'Asia/Tokyo';
const generatedAt = new Date(process.env.NUXT_PUBLIC_LAST_UPDATED ?? new Date().toISOString());
const safeGeneratedAt = Number.isNaN(generatedAt.getTime()) ? new Date() : generatedAt;
const lastUpdatedDisplay = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: siteTimeZone,
}).format(safeGeneratedAt);
const copyrightYear = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  timeZone: siteTimeZone,
}).format(safeGeneratedAt);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  ssr: false,
  app: {
    baseURL: '/5ei74R0.io/',
    head: {
      title: 'Seitaro OTSUKI | 5ei74R0.io',
      meta: [
        { charset: 'utf-8' },
        { name: 'copyright', content: `© ${copyrightYear} 5ei74R0` },
        { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio of Seitaro OTSUKI, focused on AI/ML research, implementation, and technical writing.' },
        { property: 'og:title', content: 'Seitaro OTSUKI | 5ei74R0.io' },
        { property: 'og:description', content: 'AI/ML portfolio collecting work experience, publications, projects, and technical notes.' },
        { property: 'og:type', content: 'website' },
        { name: 'theme-color', content: '#2e3440' },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/5ei74R0.io/favicon.ico" },
      ],
    },
  },
  nitro: {
    output: {
      publicDir: resolve(rootDir, 'docs'),
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
  runtimeConfig: {
    public: {
      lastUpdatedIso: safeGeneratedAt.toISOString(),
      lastUpdatedDisplay,
      copyrightYear,
    },
  },
}
