(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const cari = $("#cari"), selProdi = $("#filter-prodi"), selJenis = $("#filter-jenis");
  const daftar = $("#daftar"), info = $("#info"), kosong = $("#kosong");
  const grid = $("#prodi-grid"), tombolReset = $("#reset");

  const namaProdi = (id) => (PROGRAM_STUDI.find((p) => p.id === id) || {}).nama || id;

  function el(tag, cls, teks) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (teks !== undefined) e.textContent = teks;
    return e;
  }

  function urlAman(u) {
    try { return new URL(u).protocol === "https:"; } catch (e) { return false; }
  }

  function opsi(select, nilai, label) {
    const o = document.createElement("option");
    o.value = nilai; o.textContent = label;
    select.appendChild(o);
  }

  function isiFilter() {
    opsi(selProdi, "", "Semua program studi");
    PROGRAM_STUDI.forEach((p) => opsi(selProdi, p.id, p.nama));
    opsi(selJenis, "", "Semua jenis");
    JENIS_MATERI.forEach((j) => opsi(selJenis, j, j));
  }

  function gambarProdi() {
    grid.textContent = "";
    PROGRAM_STUDI.forEach((p) => {
      const jumlah = MATERI.filter((m) => m.prodi === p.id).length;
      const b = el("button", "prodi-btn");
      b.type = "button";
      b.dataset.id = p.id;
      b.setAttribute("aria-pressed", String(selProdi.value === p.id));
      b.append(el("strong", "", p.nama), el("span", "", jumlah + " materi"));
      b.addEventListener("click", () => {
        selProdi.value = selProdi.value === p.id ? "" : p.id;
        render();
        if (selProdi.value) $("#hasil").scrollIntoView();
      });
      grid.appendChild(b);
    });
  }

  function kartu(m) {
    const k = el("article", "card");
    const badges = el("div", "badges");
    const cls = m.jenis === "Video YouTube" ? "jenis-yt" : m.jenis === "Video Mahasiswa PLP" ? "jenis-mhs" : "";
    badges.append(el("span", "badge " + cls, m.jenis), el("span", "badge", namaProdi(m.prodi)));
    if (m.placeholder) badges.append(el("span", "badge ph", "Placeholder"));
    k.append(badges, el("h3", "", m.judul), el("p", "", m.deskripsi));

    if (m.placeholder || !urlAman(m.tautan)) {
      const off = el("span", "btn off", "Tautan belum tersedia");
      off.setAttribute("aria-disabled", "true");
      k.append(off);
    } else {
      const a = el("a", "btn", "Buka materi");
      a.href = m.tautan;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", "Buka materi: " + m.judul + " (tab baru)");
      k.append(a);
    }
    return k;
  }

  function render() {
    const q = cari.value.trim().toLowerCase();
    const hasil = MATERI.filter((m) => {
      if (selProdi.value && m.prodi !== selProdi.value) return false;
      if (selJenis.value && m.jenis !== selJenis.value) return false;
      if (!q) return true;
      return (m.judul + " " + m.deskripsi + " " + namaProdi(m.prodi)).toLowerCase().includes(q);
    });

    daftar.textContent = "";
    hasil.forEach((m) => daftar.appendChild(kartu(m)));
    kosong.hidden = hasil.length > 0;
    info.textContent = "Menampilkan " + hasil.length + " dari " + MATERI.length + " materi.";
    grid.querySelectorAll(".prodi-btn").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.id === selProdi.value))
    );
  }

  tombolReset.addEventListener("click", () => {
    cari.value = ""; selProdi.value = ""; selJenis.value = "";
    render();
  });
  [cari, selProdi, selJenis].forEach((e) => e.addEventListener("input", render));

  $("#tahun").textContent = new Date().getFullYear();
  isiFilter();
  gambarProdi();
  render();
})();
