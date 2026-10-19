(function () {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const cari = $("#cari"), chips = $("#chips"), daftar = $("#daftar");
  const info = $("#info"), kosong = $("#kosong");
  const dlg = $("#player"), box = $("#player-box");
  let prodiAktif = "";

  const indeksProdi = (id) => PROGRAM_STUDI.findIndex((p) => p.id === id);
  const namaProdi = (id) => (PROGRAM_STUDI[indeksProdi(id)] || {}).nama || id;

  function el(tag, cls, teks) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (teks !== undefined) e.textContent = teks;
    return e;
  }

  function urlAman(u) {
    try { return new URL(u).protocol === "https:"; } catch (e) { return false; }
  }

  function ytId(u) {
    try {
      const x = new URL(u);
      const h = x.hostname.replace(/^www\./, "");
      let id = null;
      if (h === "youtu.be") id = x.pathname.slice(1).split("/")[0];
      else if (h.endsWith("youtube.com")) {
        id = x.searchParams.get("v");
        if (!id) { const m = x.pathname.match(/^\/(shorts|embed|live)\/([\w-]+)/); if (m) id = m[2]; }
      }
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    } catch (e) { return null; }
  }

  const bisaDiputar = (v) => !v.placeholder && urlAman(v.tautan);

  /* ---------- Pop-up pemutar ---------- */
  function putar(v) {
    const id = ytId(v.tautan);
    if (!id) { window.open(v.tautan, "_blank", "noopener,noreferrer"); return; }
    $("#player-judul").textContent = v.judul;
    $("#player-link").href = v.tautan;
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    f.title = v.judul;
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    box.textContent = "";
    box.appendChild(f);
    dlg.showModal();
  }
  function tutup() { dlg.close(); }
  dlg.addEventListener("close", () => { box.textContent = ""; });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) tutup(); });
  $("#tutup").addEventListener("click", tutup);

  /* ---------- Kartu ---------- */
  function kartu(v, i) {
    const k = el("article", "card");
    k.style.setProperty("--d", Math.min(i, 12) * 0.05 + "s");
    const h = Math.max(indeksProdi(v.prodi), 0) * 26;
    const id = ytId(v.tautan);

    let thumb;
    if (bisaDiputar(v)) {
      thumb = el("button", "thumb");
      thumb.type = "button";
      thumb.setAttribute("aria-label", "Putar video: " + v.judul);
      thumb.addEventListener("click", () => putar(v));
      if (id) {
        const img = document.createElement("img");
        img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
        img.alt = ""; img.loading = "lazy";
        thumb.appendChild(img);
      }
      const p = el("div", "play"); p.appendChild(el("span", "", "▶"));
      p.firstChild.setAttribute("aria-hidden", "true");
      thumb.appendChild(p);
    } else {
      thumb = el("div", "thumb soon");
      thumb.append(el("span", "", "🎬 Segera hadir"));
    }
    thumb.style.setProperty("--h", h);

    const body = el("div", "body");
    body.append(el("span", "tag", namaProdi(v.prodi)), el("h3", "", v.judul), el("p", "", v.deskripsi));
    if (v.sumber) body.append(el("span", "src", "Sumber: " + v.sumber));
    if (v.placeholder) body.append(el("span", "ph", "Contoh (placeholder)"));
    k.append(thumb, body);

    if (matchMedia("(pointer:fine)").matches) {
      k.addEventListener("pointermove", (e) => {
        const r = k.getBoundingClientRect();
        k.style.setProperty("--ry", ((e.clientX - r.left) / r.width - 0.5) * 8 + "deg");
        k.style.setProperty("--rx", (0.5 - (e.clientY - r.top) / r.height) * 8 + "deg");
      });
      k.addEventListener("pointerleave", () => { k.style.setProperty("--rx", "0deg"); k.style.setProperty("--ry", "0deg"); });
    }
    return k;
  }

  /* ---------- Filter chip ---------- */
  function gambarChips() {
    chips.textContent = "";
    const buat = (id, label, n) => {
      const b = el("button", "chip");
      b.type = "button"; b.dataset.id = id;
      b.append(label);
      if (n !== null) b.append(el("small", "", "(" + n + ")"));
      b.addEventListener("click", () => { prodiAktif = id; render(); });
      chips.appendChild(b);
    };
    buat("", "Semua", VIDEO.length);
    PROGRAM_STUDI.forEach((p) => buat(p.id, p.nama, VIDEO.filter((v) => v.prodi === p.id).length));
  }

  function render() {
    const q = cari.value.trim().toLowerCase();
    const hasil = VIDEO.filter((v) => {
      if (prodiAktif && v.prodi !== prodiAktif) return false;
      if (!q) return true;
      return (v.judul + " " + v.deskripsi + " " + namaProdi(v.prodi) + " " + (v.sumber || "")).toLowerCase().includes(q);
    });
    daftar.textContent = "";
    hasil.forEach((v, i) => daftar.appendChild(kartu(v, i)));
    kosong.hidden = hasil.length > 0;
    info.textContent = "Menampilkan " + hasil.length + " dari " + VIDEO.length + " video.";
    chips.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.id === prodiAktif)));
  }
  cari.addEventListener("input", render);

  /* ---------- Acak video ---------- */
  $("#acak").addEventListener("click", () => {
    const ok = VIDEO.filter(bisaDiputar);
    if (!ok.length) { info.textContent = "Belum ada video asli yang bisa diacak. Tambahkan tautan di data.js."; $("#hasil").scrollIntoView(); return; }
    putar(ok[Math.floor(Math.random() * ok.length)]);
  });

  /* ---------- Angka statistik ---------- */
  function hitung(id, ke) {
    const e = $(id), reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (reduce || !ke) { e.textContent = ke; return; }
    const t0 = performance.now();
    (function tick(t) {
      const p = Math.min((t - t0) / 1200, 1);
      e.textContent = Math.round(ke * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ---------- Cahaya kursor ---------- */
  addEventListener("pointermove", (e) => {
    document.documentElement.style.setProperty("--mx", e.clientX + "px");
    document.documentElement.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });

  $("#tahun").textContent = new Date().getFullYear();
  gambarChips();
  render();
  hitung("#stat-video", VIDEO.filter(bisaDiputar).length);
  hitung("#stat-prodi", PROGRAM_STUDI.length);
})();
