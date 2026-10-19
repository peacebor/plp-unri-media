# Pusat Media Pembelajaran Digital — PLP Edukasi UNRI

Website statis (HTML, CSS, JavaScript murni). Tanpa backend, tanpa biaya.

## Struktur file
- `index.html` : kerangka halaman
- `style.css`  : tampilan dan animasi
- `data.js`    : **daftar program studi & video (file yang Anda edit)**
- `script.js`  : pencarian, filter, pemutar video, efek

## Mengganti nama program studi
Di `data.js`, ubah nilai `nama` saja:
```js
{ id: "prodi-01", nama: "Pendidikan Matematika" },
```
Jangan ubah `id`.

## Menambah video
Salin satu blok ke dalam daftar `VIDEO` (jangan lupa koma antarblok):
```js
{
  judul: "Judul video",
  deskripsi: "Ringkasan singkat 1–2 kalimat.",
  prodi: "prodi-01",
  tautan: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  sumber: "Nama kanal / pembuat"   // opsional
},
```
Format tautan YouTube yang didukung: `youtube.com/watch?v=...`, `youtu.be/...`, dan `youtube.com/shorts/...`.
Video YouTube diputar di dalam website; tautan lain (misalnya Google Drive) dibuka di tab baru.

## Mengubah tautan
Cari videonya di `data.js`, ganti `tautan`, lalu **hapus baris `placeholder: true`**.
Hanya tautan `https://` yang aktif.

## Tips
- Pengaturan video YouTube harus "Publik" atau "Tidak publik", dan pemilik tidak boleh menonaktifkan penyematan (embed).
- Tampilkan kredit pembuat lewat kolom `sumber`.
- Jaga tanda kutip `"` dan koma `,` agar file tidak error.
