/* ===== 1. DAFTAR 14 PROGRAM STUDI =====
   Ubah hanya "nama". JANGAN ubah "id". */
const PROGRAM_STUDI = [
  { id: "prodi-01", nama: "Ekonomi" },
  { id: "prodi-02", nama: "Program Studi 2 (Ekonomi)" },
  { id: "prodi-03", nama: "Program Studi 3 (ganti nama)" },
  { id: "prodi-04", nama: "Program Studi 4 (ganti nama)" },
  { id: "prodi-05", nama: "Program Studi 5 (ganti nama)" },
  { id: "prodi-06", nama: "Program Studi 6 (ganti nama)" },
  { id: "prodi-07", nama: "Program Studi 7 (ganti nama)" },
  { id: "prodi-08", nama: "Program Studi 8 (ganti nama)" },
  { id: "prodi-09", nama: "Program Studi 9 (ganti nama)" },
  { id: "prodi-10", nama: "Program Studi 10 (ganti nama)" },
  { id: "prodi-11", nama: "Program Studi 11 (ganti nama)" },
  { id: "prodi-12", nama: "Program Studi 12 (ganti nama)" },
  { id: "prodi-13", nama: "Program Studi 13 (ganti nama)" },
  { id: "prodi-14", nama: "Program Studi 14 (ganti nama)" }
];

/* ===== 2. DAFTAR VIDEO ===== */
const VIDEO = [
  {
    judul: "Judul video ekonomi",                       // ← GANTI dengan judul asli video
    deskripsi: "Ringkasan 1–2 kalimat tentang isi video.", // ← GANTI
    prodi: "prodi-01",                                   // Ekonomi
    tautan: "https://youtu.be/GOuY64M5-MY",
    sumber: ""                                           // ← isi nama kanal/pembuat (disarankan)
  },
  {
    judul: "[CONTOH] Video pembelajaran kedua",
    deskripsi: "Placeholder. Tempel tautan YouTube di kolom tautan.",
    prodi: "prodi-02",
    tautan: "",
    sumber: "",
    placeholder: true
  },
  {
    judul: "[CONTOH] Video pembelajaran ketiga",
    deskripsi: "Placeholder. Hapus contoh ini setelah video asli ditambahkan.",
    prodi: "prodi-03",
    tautan: "",
    sumber: "",
    placeholder: true
  }
];
