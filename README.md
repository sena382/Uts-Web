# ⚡ Realtime Counter dengan WebSocket

Sebuah aplikasi web sederhana yang menampilkan **counter secara real-time** menggunakan **WebSocket**. Nilai counter akan bertambah setiap detik dan langsung tampil di browser tanpa perlu refresh halaman.

Tujuan proyek ini adalah untuk memahami implementasi WebSocket secara langsung dalam aplikasi web modern.

---

## 📌 Fitur

- Komunikasi real-time dua arah antara server dan klien
- Nilai counter bertambah otomatis setiap detik
- Tampilan modern dan responsif
- Status koneksi langsung terlihat di halaman

---

## 🛠 Teknologi yang Digunakan

- **Node.js** – Backend runtime environment
- **ws** – Library WebSocket untuk Node.js
- **HTML + CSS** – Tampilan antarmuka pengguna (frontend)
- **WebSocket API** – Protokol komunikasi dua arah

---

## 📁 Struktur Proyek

```
counter-realtime-websocket/
├── server.js
└── index.html
```

---

## 🚀 Cara Menjalankan Proyek

### 1. Clone Repository

```bash
git clone https://github.com/username/realtime-counter-websocket.git
cd realtime-counter-websocket
```

### 2. Instal Dependensi

Pastikan Node.js sudah terinstal. Kemudian jalankan:

```bash
npm install ws
```

### 3. Jalankan Server

```bash
node server.js
```

### 4. Buka Halaman Klien

Buka file `index.html` di browser. Gunakan Live Server (VS Code) agar terhubung dengan server secara otomatis.

---

## 📸 Tampilan Aplikasi

Gambar hanya ilustrasi. Silakan tambahkan screenshot sesuai tampilan proyek Anda.

 <img src="Screenshot/hasil.png" alt="Android Logo" >

---

## 📖 Referensi

- 🧠 WebSocket API - MDN
- 📦 Library ws untuk Node.js
