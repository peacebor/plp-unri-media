/* ===== 1. DAFTAR 14 PROGRAM STUDI =====
   Ubah hanya "nama". JANGAN ubah "id". */
const PROGRAM_STUDI = [
  { id: "prodi-01", nama: "Program Studi 1 (Ekonomi)" },
  { id: "prodi-02", nama: "Program Studi 2 (Bahasa     
Indonesia)" },
  { id: "prodi-03", nama: "Program Studi 3 (BK)" },
  { id: "prodi-04", nama: "Program Studi 4 (Sejarah)" },
  { id: "prodi-05", nama: "Program Studi 5 (Kimia)" },
  { id: "prodi-06", nama: "Program Studi 6 (Fisika)" },
  { id: "prodi-07", nama: "Program Studi 7 (Matematika)" },
  { id: "prodi-08", nama: "Program Studi 8 (Bahasa Inggris)" },
  { id: "prodi-09", nama: "Program Studi 9 (Penjas)" },
  { id: "prodi-10", nama: "Program Studi 10 (Kepelatihan)" },
  { id: "prodi-11", nama: "Program Studi 11 (Biologi)" },
  { id: "prodi-12", nama: "Program Studi 12 ()" },
  { id: "prodi-13", nama: "Program Studi 13 (ganti nama)" },
  { id: "prodi-14", nama: "Program Studi 14 (ganti nama)" }
];

/* ===== 2. DAFTAR VIDEO =====
   judul     : judul video
   deskripsi : ringkasan 1–2 kalimat
   prodi     : id dari PROGRAM_STUDI
   tautan    : alamat video, diawali https://
               (YouTube diputar di dalam website; tautan lain dibuka di tab baru)
   sumber    : (opsional) nama kanal / pembuat, untuk kredit
   placeholder: true = hanya contoh. HAPUS baris ini setelah tautan asli diisi. */
const VIDEO = [
  {
    judul: "[CONTOH] Judul video pembelajaran",
    deskripsi: "Placeholder. Ganti dengan ringkasan isi video.",
    prodi: "prodi-01",
    tautan: "",
    sumber: "",
    placeholder: true
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
