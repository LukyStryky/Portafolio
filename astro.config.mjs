import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://LukyStryky.github.io',
  base: process.env.NODE_ENV === 'production' ? '/portafolio' : '/',
});
