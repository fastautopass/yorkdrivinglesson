import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://yorkdrivinglesson.co.uk',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    react(),
    sitemap({
      filter: (page) => ![
        'https://yorkdrivinglesson.co.uk/privacy-policy/',
        'https://yorkdrivinglesson.co.uk/terms-and-conditions/',
        'https://yorkdrivinglesson.co.uk/cookie-policy/',
        'https://yorkdrivinglesson.co.uk/sitemap/',
        'https://yorkdrivinglesson.co.uk/thank-you/',
        'https://yorkdrivinglesson.co.uk/404/',
      ].includes(page),
    })
  ],
  vite: {
    plugins: [tailwind()]
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
});
