# Vue 3 + Vite Project

## Deskripsi

Proyek ini adalah sebuah aplikasi message board berbasis web menggunakan Vue 3 sebagai framework frontend dan Vite sebagai bundler untuk mempercepat proses pengembangan.

## Fitur Utama

- Insert Pesan
- Menampilkan Pesan
- Update Pesan
- Hapus Pesan

## Instalasi

### Persyaratan Sistem

Pastikan Anda telah menginstal Node.js dan npm pada sistem Anda sebelum melanjutkan.

### Langkah-langkah Instalasi

1. Clone repositori ini ke lokal Anda:

   ```bash
   git clone https://github.com/MRienald/lokadata-test-vue.git
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd lokadata-test-vue
   ```

3. Install dependensi:

   ```bash
   npm install
   ```

## Penggunaan

Untuk memulai server pengembangan, jalankan perintah berikut:

```bash
npm run dev
```

## Struktur Proyek

```
src/
|-- assets/
|-- components/
|-- router/
|-- views/
|-- App.vue
|-- main.js
public/
|-- placeholder.svg
|-- vite.svg
```

### Penjelasan Struktur

- `src/`: Direktori utama kode sumber.
  - `assets/`: Tempat untuk meletakkan gambar, CSS, atau file statis lainnya.
  - `components/`: Komponen Vue yang dapat digunakan kembali.
  - `router/`: Komponen Vue yang memungkinkan pengelolaan navigasi dalam aplikasi.
  - `views/`: Komponen Vue yang mewakili halaman-halaman dalam aplikasi.
  - `App.vue`: Komponen utama aplikasi.
  - `main.js`: File utama yang memuat aplikasi Vue.

- `public/`: File statis publik.
