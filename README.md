# Pusat Media Pembelajaran Digital — PLP Edukasi UNRI

Website statis (HTML, CSS, JavaScript murni). Tanpa backend, tanpa biaya.

## Struktur file
- `index.html` : kerangka halaman
- `style.css`  : tampilan
- `data.js`    : **data program studi & materi (file yang Anda edit)**
- `script.js`  : pencarian, filter, dan tampilan kartu

## Mengganti nama program studi
Buka `data.js`, ubah nilai `nama` saja:
```js
{ id: "prodi-01", nama: "Pendidikan Matematika" },
```
Jangan ubah `id`.

## Menambah materi
Salin satu blok dan tempel di dalam daftar `MATERI` (jangan lupa koma antarblok):
```js
{
  judul: "Judul materi",
  deskripsi: "Ringkasan singkat 1–2 kalimat.",
  jenis: "Video YouTube",        // atau "Video Mahasiswa PLP" / "Materi Pembelajaran"
  prodi: "prodi-01",             // id program studi
  tautan: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
},
```
Tulis `jenis` persis seperti di `JENIS_MATERI`.

## Mengubah tautan
Cari materinya di `data.js`, ganti isi `tautan`, lalu **hapus baris `placeholder: true`**.
Hanya tautan `https://` yang akan aktif.

## Menambah jenis materi baru
Tambahkan teksnya di `JENIS_MATERI`, lalu pakai teks yang sama di materi.

## Tips
- Video YouTube: pastikan pengaturan video "Publik" atau "Tidak publik" agar bisa dibuka.
- Google Drive: atur akses "Siapa saja yang memiliki link".
- Jaga tanda kutip `"` dan koma `,` agar file tidak error.
