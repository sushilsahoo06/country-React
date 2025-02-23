
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Ensure React is included
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5137, // Use the same port as Dev Tunnel
    strictPort: true
  }
});