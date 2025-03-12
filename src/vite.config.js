import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: "/dsr-pass/",
  plugins: [vue()],
});
