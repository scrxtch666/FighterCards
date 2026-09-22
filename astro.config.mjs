import { defineConfig } from 'astro/config';

import db from "@astrojs/db";

import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from 'url';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), icon()],

  vite: {
    plugins: [tailwindcss()],
    server: {
       watch: {
        usePolling: true
      },
      fs: {
        // Povolí přístup k souborům pouze uvnitř projektu
        allow: [fileURLToPath(new URL('.', import.meta.url))],
      },
      watch: {
        // Ignoruje sledování čehokoliv mimo váš projekt
        ignored: ['C:/**'],
      }
    },
  },
});