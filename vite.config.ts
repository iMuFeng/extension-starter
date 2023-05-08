import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.config'

const dir = (...args: string[]) => resolve(__dirname, '..', ...args)
const NODE_ENV = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${dir('src')}/`,
    },
  },
  define: {
    __DEV__: NODE_ENV !== 'production',
    // https://github.com/vitejs/vite/issues/1973#issuecomment-777253019
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  },
  plugins: [
    react(),
    crx({ manifest })
  ],
  server: { 
    port: 3000, 
    hmr: { 
      port: 3000
    }
  },
  build: {
    rollupOptions: {
      input: {
        options: 'src/options/index.html',
        popup: 'src/popup/index.html'
      }
    }
  }
})
