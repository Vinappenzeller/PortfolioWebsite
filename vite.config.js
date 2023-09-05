import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    // Hier entfernen wir das workbox-Plugin, um den Service Worker zu deaktivieren
  ],
});
