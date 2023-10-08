import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': { //* Requesting everytimg there is ' /api ' go to ' http://localhost:3000 */
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },

  plugins: [react()],
})
