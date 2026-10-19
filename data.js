/* ===== 1. DAFTAR 14 PROGRAM STUDI =====
   Ubah hanya "nama". JANGAN ubah "id" (dipakai untuk menghubungkan materi). */
const PROGRAM_STUDI = [
  { id: "prodi-01", nama: "Program Studi 1 (ganti nama)" },
  { id: "prodi-02", nama: "Program Studi 2 (ganti nama)" },
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

/* ===== 2. JENIS MATERI (tulis persis sama di daftar MATERI) ===== */
const JENIS_MATERI = [
  "Video YouTube",
  "Video Mahasiswa PLP",
  "Materi Pembelajaran"
];

/* ===== 3. DAFTAR MATERI =====
   prodi     : id dari PROGRAM_STUDI
   tautan    : alamat lengkap, diawali https://
   placeholder: true = hanya contoh (tombol nonaktif). Hapus baris ini
                (atau ganti false) setelah tautan asli diisi. */
const MATERI = [
  {
    judul: "[CONTOH] Judul video YouTube pilihan",
    deskripsi: "Placeholder. Ganti dengan ringkasan 1–2 kalimat tentang isi video.",
    jenis: "Video YouTube",
    prodi: "prodi-01",
    tautan: "",
    placeholder: true
  },
  {
    judul: "[CONTOH] Video pembelajaran karya mahasiswa PLP",
    deskripsi: "Placeholder. Ganti dengan deskripsi video buatan mahasiswa PLP.",
    jenis: "Video Mahasiswa PLP",
    prodi: "prodi-01",
    tautan: "",
    placeholder: true
  },
  {
    judul: "[CONTOH] Modul / slide / lembar kerja",
    deskripsi: "Placeholder. Ganti dengan tautan Google Drive, PDF, atau materi lain.",
    jenis: "Materi Pembelajaran",
    prodi: "prodi-02",
    tautan: "",
    placeholder: true
  }
];
