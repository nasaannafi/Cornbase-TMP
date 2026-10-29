# Cornbase

Prototype frontend untuk Team Management Platform milik Boiled Corn Studio.

## Teknologi
- React + Vite
- Tailwind CSS v4 (plugin Vite)
- Lucide React
- Recharts
- Demo data lokal JavaScript

## Menjalankan project

Pastikan Node.js versi LTS sudah terpasang. Buka terminal di folder `cornbase`, lalu jalankan:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal, biasanya `http://localhost:5173`.

Untuk memeriksa build produksi:

```bash
npm run build
npm run preview
```

## Struktur utama

```text
src/
├── components/       # Tempat komponen reusable berikutnya
├── data/demoData.js  # Data demo terpusat
├── App.jsx           # Layout dan halaman prototype
├── index.css         # Design system dan responsive styles
└── main.jsx          # Entry point
```

## Catatan
- Data pada dashboard adalah **data demo**, bukan catatan historis asli.
- `Code Crusader: Anti-Virus Assault` digunakan sebagai proyek unggulan.
- Halaman Dashboard dibuat lebih lengkap terlebih dahulu. Projects, Production Board, Team, Milestones, dan Reports saat ini masih berupa placeholder navigasi.
- Informasi milestone, progres, task, dan anggota pada mockup perlu dikonfirmasi atau diganti sebelum dipresentasikan sebagai data faktual.
- Logo pada sidebar saat ini menggunakan monogram sederhana. Ganti dengan logo Boiled Corn Studio bila aset logo tersedia.
- Tailwind CSS disiapkan untuk pengembangan lanjutan; styling utama mockup saat ini menggunakan CSS custom agar layout screenshot konsisten.
