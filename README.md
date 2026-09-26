# Gunshop Modul 4 — Kelompok 28

Proyek React + Vite sesuai alur Modul 4 PWA 1: komponen Header, GunCard, Footer; halaman Catalog, About, Contact; dan konfigurasi PWA melalui `vite-plugin-pwa`.

## Menjalankan di VS Code

1. Ekstrak ZIP.
2. Buka folder `gunshop-modul4-kel28` di VS Code.
3. Buka Terminal → New Terminal.
4. Jalankan:

   ```bash
   npm install
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan oleh Vite.

## Pengujian build dan preview

```bash
npm run build
npm run preview -- --host
```

Untuk membuka preview dari HP, pastikan HP dan laptop berada di jaringan Wi-Fi yang sama, lalu buka alamat Network yang ditampilkan terminal.

## Catatan

- Ikon katalog berbentuk ilustrasi SVG sederhana yang disertakan secara lokal.
- Service Worker dan Web App Manifest dikonfigurasi melalui `vite.config.js`.
- Untuk deployment Vercel, hubungkan repository Git dan gunakan preset Vite; build command `npm run build`, output directory `dist`.
