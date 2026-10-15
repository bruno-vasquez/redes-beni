/* =========================================================
   Directorio Mesa Voces Unidas · Pando — lógica de la página
   Depende de data.js (MESA, CATEGORIAS, INSTITUCIONES)
   ========================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const PENDIENTE = '<span class="pending">No disponible</span>';
  const parrafo = (t) => `<p>${t ? esc(t) : PENDIENTE}</p>`;

  /* ---------- Iconos SVG (inline, sin dependencias) ---------- */
  const ICON = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.3H7.4V14h2.8v8h3.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 3h3l-7 8 8.2 10h-6.4l-5-6.5L4.5 21h-3l7.5-8.6L1.2 3h6.5l4.5 6z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a2.9 2.9 0 0 0-2-2C19.2 4.7 12 4.7 12 4.7s-7.2 0-9 .5a2.9 2.9 0 0 0-2 2C.5 9 .5 12 .5 12s0 3 .5 4.8a2.9 2.9 0 0 0 2 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a2.9 2.9 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8zM9.7 15.1V8.9L15.7 12l-6 3.1z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.6V9.1a7.3 7.3 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.5H3V21h3.5V8.5zM4.7 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 13.4c0-3.6-1.9-5.2-4.5-5.2-2 0-2.9 1.1-3.4 1.9V8.5H9.6V21h3.5v-6.9c0-1.8.9-2.7 2.2-2.7 1.3 0 2.1.9 2.1 2.7V21H21v-7.6z"/></svg>',
  };
  const REDES = {
    facebook: "Facebook", instagram: "Instagram", x: "X / Twitter", youtube: "YouTube", tiktok: "TikTok", linkedin: "LinkedIn", whatsapp: "Canal de WhatsApp"
  };

  /* ---------- Utilidades ---------- */
  const iniciales = (inst) => {
    const s = inst.sigla.split(/\s[·–-]\s/)[0].trim();
    return s.length <= 12 ? s : s.split(/\s+/).map((w) => w[0]).join("").slice(0, 4).toUpperCase();
  };

  const media = (inst, big) => {
    const cat = CATEGORIAS[inst.categoria];
    return `
      <div class="${big ? "detail__media" : "card__media"}" style="--cat:${cat.color}">
        <img src="img/${esc(inst.imagen)}" alt="${esc(inst.nombre)}" loading="lazy" class="${inst.imagenAjuste === "cover" ? "img-cover" : ""}"
             onerror="this.nextElementSibling.hidden=false;this.remove()">
        <div class="placeholder" hidden>${esc(iniciales(inst))}<small>Imagen pendiente · img/${esc(inst.imagen)}</small></div>
        ${big ? "" : `<span class="badge">${esc(cat.nombre)}</span>`}
      </div>`;
  };

  const mapsUrl = (dir) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(dir + ", Bolivia");
  const telHref = (t) => "tel:" + t.replace(/\(.*?\)/g, "").replace(/[^\d+]/g, "");
  const waHref = (n) => "https://wa.me/591" + n.replace(/\D/g, "");

  /* ---------- Portada y secciones estáticas ---------- */
  function renderMesa() {
    $("#hero-gestion").textContent = MESA.gestion;
    $("#hero-nombre").textContent = MESA.nombre;
    $("#hero-lugar").textContent = MESA.lugar;
    $("#hero-presentacion").textContent = MESA.presentacion;
    $("#hero-presidencia").textContent = MESA.presidencia;
    $("#hero-secretaria").textContent = MESA.secretariaTecnica;
    $("#mesa-antecedentes").textContent = MESA.antecedentes;
    $("#mesa-presidencia").textContent = MESA.presidencia;
    $("#mesa-secretaria").textContent = MESA.secretariaTecnica;

    $("#hero-stats").innerHTML = `<div class="stat"><strong>${INSTITUCIONES.length}</strong><span>instituciones y actores</span></div>`;

    $("#articulacion-texto").innerHTML = MESA.articulacion.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#lineas-lista").innerHTML = MESA.lineasPrioritarias.map((l) => `<li>${esc(l)}</li>`).join("");
    $("#fuentes-lista").innerHTML = MESA.fuentes.map((f) => `<li>${esc(f)}</li>`).join("");
  }

  /* ---------- Filtros ---------- */
  let filtroCat = "todas";
  let texto = "";

  function renderFiltros() {
    const chips = [`<button class="chip is-active" data-cat="todas" style="--chip-color:#14502d">Todas</button>`]
      .concat(Object.entries(CATEGORIAS).map(([k, c]) =>
        `<button class="chip" data-cat="${k}" style="--chip-color:${c.color}">${esc(c.nombre)}</button>`));
    const cont = $("#filtros");
    cont.innerHTML = chips.join("");
    cont.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      filtroCat = b.dataset.cat;
      cont.querySelectorAll(".chip").forEach((c) => c.classList.toggle("is-active", c === b));
      renderGrid();
    });
    $("#buscar").addEventListener("input", (e) => { texto = e.target.value.trim().toLowerCase(); renderGrid(); });
  }

  const normaliza = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  function coincide(inst) {
    if (filtroCat !== "todas" && inst.categoria !== filtroCat) return false;
    if (!texto) return true;
    const blob = normaliza([
      inst.nombre, inst.sigla, inst.rolMesa, inst.dependencia, inst.ambito, inst.descripcion,
      inst.servicios.join(" "), inst.caracteristicas.join(" "), inst.contacto.direccion
    ].join(" "));
    return normaliza(texto).split(/\s+/).every((t) => blob.includes(t));
  }

  /* ---------- Tarjetas ---------- */
  function cardHTML(inst) {
    const cat = CATEGORIAS[inst.categoria];
    const c = inst.contacto;
    const tel = c.telefonos[0] ? `<span>${ICON.phone}${esc(c.telefonos.join(" · "))}</span>` : "";
    const wa = c.whatsapp ? `<span>${ICON.whatsapp}WhatsApp ${esc(c.whatsapp)}</span>` : "";
    const dir = c.direccion ? `<span>${ICON.pin}${esc(c.direccion)}</span>` : `<span>${ICON.pin}<em>Dirección no disponible</em></span>`;
    return `
      <button class="card" data-id="${inst.id}" style="--cat:${cat.color}" aria-label="Ver detalle de ${esc(inst.nombre)}">
        ${media(inst, false)}
        <div class="card__body">
          <span class="card__sigla">${esc(inst.sigla)}</span>
          <h3 class="card__title">${esc(inst.nombre)}</h3>
          <p class="card__role">${esc(inst.rolMesa)}</p>
          <div class="card__tags">${inst.caracteristicas.slice(0, 3).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="card__meta">${dir}${tel}${wa}</div>
        </div>
      </button>`;
  }

  function renderGrid() {
    const lista = INSTITUCIONES.filter(coincide);
    $("#grid").innerHTML = lista.map(cardHTML).join("");
    $("#vacio").hidden = lista.length > 0;
    $("#contador").textContent = `${lista.length} de ${INSTITUCIONES.length} instituciones`;
  }

  /* ---------- Detalle ---------- */
  function detalleHTML(inst) {
    const cat = CATEGORIAS[inst.categoria];
    const c = inst.contacto;
    const correos = [].concat(c.correo || []);
    const li = (icon, html) => `<li>${icon}<div>${html}</div></li>`;

    const contacto = [
      li(ICON.pin, c.direccion ? `<a href="${esc(c.mapa || mapsUrl(c.direccion))}" target="_blank" rel="noopener">${esc(c.direccion)}</a>` : PENDIENTE),
      li(ICON.phone, c.telefonos.length ? c.telefonos.map((t) => `<a href="${telHref(t)}">${esc(t)}</a>`).join(" · ") : PENDIENTE),
      li(ICON.whatsapp, c.whatsapp ? `<a href="${waHref(c.whatsapp)}" target="_blank" rel="noopener">${esc(c.whatsapp)}</a>` : PENDIENTE),
      li(ICON.mail, correos.length ? correos.map((m) => `<a href="mailto:${esc(m)}">${esc(m)}</a>`).join(" · ") : PENDIENTE),
      li(ICON.globe, c.web ? `<a href="${esc(c.web)}" target="_blank" rel="noopener">${esc(c.web.replace(/^https?:\/\//, ""))}</a>` : PENDIENTE),
      c.horario ? li(ICON.clock, esc(c.horario)) : ""
    ].join("");

    const redes = Object.entries(inst.redes || {}).filter(([, u]) => u);
    const redesHTML = redes.length
      ? `<div class="social">${redes.map(([k, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${ICON[k] || ICON.globe}${esc(REDES[k] || k)}</a>`).join("")}</div>`
      : `<p class="pending" style="color:var(--muted);font-style:italic;margin:0">Sin cuentas propias registradas</p>`;

    return `
      <div style="--cat:${cat.color}">
        ${media(inst, true)}
        <div class="detail__head">
          <span class="detail__sigla">${esc(inst.sigla)} · ${esc(cat.nombre)}</span>
          <h2 class="detail__title" id="modal-title">${esc(inst.nombre)}</h2>
          <span class="detail__role">${esc(inst.rolMesa)}</span>
        </div>
        <div class="detail__grid">
          <div class="detail__main">
            <div class="block"><h4>Naturaleza institucional</h4>${parrafo(inst.descripcion)}</div>
            <div class="block"><h4>Servicios y competencias (protección de NNA)</h4>${inst.servicios.length ? `<ul>${inst.servicios.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>` : parrafo("")}</div>
            <div class="block"><h4>Aporte y rol dentro de la Mesa</h4>${parrafo(inst.aporteMesa)}</div>
            <div class="mv">
              <div class="mv__item block"><h4>Misión</h4>${parrafo(inst.mision)}</div>
              <div class="mv__item block"><h4>Visión</h4>${parrafo(inst.vision)}</div>
            </div>
            ${inst.notaValidacion ? `<div class="note">${esc(inst.notaValidacion)}</div>` : ""}
          </div>
          <aside class="detail__side">
            <div class="side-box block"><h4>Datos de contacto</h4><ul class="contact">${contacto}</ul></div>
            <div class="side-box block"><h4>Redes sociales</h4>${redesHTML}</div>
            <div class="side-box block">
              <h4>Ficha</h4>
              <ul class="contact">
                ${inst.autoridad ? `<li><div><strong>Autoridad:</strong> ${esc(inst.autoridad.replace(/^[^:]+:\s*/, ""))}</div></li>` : ""}
                <li><div><strong>Dependencia:</strong> ${esc(inst.dependencia)}</div></li>
                <li><div><strong>Ámbito:</strong> ${esc(inst.ambito)}</div></li>
              </ul>
            </div>
            <div class="block"><h4>Características</h4><div class="tags">${inst.caracteristicas.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></div>
          </aside>
        </div>
      </div>`;
  }

  const modal = $("#modal");
  function abrir(id) {
    const inst = INSTITUCIONES.find((i) => i.id === id);
    if (!inst) return;
    $("#modal-content").innerHTML = detalleHTML(inst);
    $("#modal-content").scrollTop = 0;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    history.replaceState(null, "", "#" + id);
    $(".modal__close").focus();
  }
  function cerrar() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (location.hash && INSTITUCIONES.some((i) => "#" + i.id === location.hash)) history.replaceState(null, "", " ");
  }

  $("#grid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) abrir(card.dataset.id);
  });
  modal.addEventListener("click", (e) => { if (e.target.hasAttribute("data-close")) cerrar(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrar(); });

  /* ---------- Inicio ---------- */
  renderMesa();
  renderFiltros();
  renderGrid();
  const inicial = location.hash.slice(1);
  if (INSTITUCIONES.some((i) => i.id === inicial)) abrir(inicial);
})();
