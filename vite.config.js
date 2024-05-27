import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ {
    
      name: 'custom-logger',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          console.log('Request URL:', req.url);
          try {
            decodeURI(req.url);
          } catch (error) {
            console.error('Malformed URI:', req.url);
            res.statusCode = 400;
            res.end('Malformed URI');
            return;
          }
          next();
        });
      }
    },
  react()
  ],
  build:{
    outDir:'build',
    chunkSizeWarningLimit: 2000,
  },
  server:{
 port: 5003,
 define:{
  'process.env':process.env,
 }
  }
})
