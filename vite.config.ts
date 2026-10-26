import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

function serveRootPromoPlugin(): Plugin {
  return {
    name: 'serve-root-promo',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const urlPath = req.url ? req.url.split('?')[0] : ''
        if (urlPath === '/promo.mp4') {
          const promoPath = path.resolve(__dirname, 'promo.mp4')
          if (!fs.existsSync(promoPath)) {
            return next()
          }

          const stat = fs.statSync(promoPath)
          const fileSize = stat.size

          if (req.method === 'HEAD') {
            res.writeHead(200, {
              'Content-Length': fileSize,
              'Content-Type': 'video/mp4',
              'Accept-Ranges': 'bytes',
            })
            res.end()
            return
          }

          const range = req.headers.range

          if (range) {
            const parts = range.replace(/bytes=/, '').split('-')
            const start = parseInt(parts[0], 10)
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
            const chunksize = end - start + 1
            const file = fs.createReadStream(promoPath, { start, end })

            res.writeHead(206, {
              'Content-Range': `bytes ${start}-${end}/${fileSize}`,
              'Accept-Ranges': 'bytes',
              'Content-Length': chunksize,
              'Content-Type': 'video/mp4',
            })
            file.pipe(res)
          } else {
            res.writeHead(200, {
              'Content-Length': fileSize,
              'Content-Type': 'video/mp4',
              'Accept-Ranges': 'bytes',
            })
            fs.createReadStream(promoPath).pipe(res)
          }
          return
        }
        next()
      })
    },
    generateBundle() {
      const promoPath = path.resolve(__dirname, 'promo.mp4')
      if (fs.existsSync(promoPath)) {
        this.emitFile({
          type: 'asset',
          fileName: 'promo.mp4',
          source: fs.readFileSync(promoPath),
        })
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), serveRootPromoPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
