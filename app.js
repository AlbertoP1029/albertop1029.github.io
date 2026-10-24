/* ===================================================================== */
const ytId = u => { const m = String(u).match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/); return m ? m[1] : null; };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const L = t => (t && typeof t === 'object') ? (t.en === t.es ? esc(t.en) : `<span class="en">${esc(t.en)}</span><span class="es">${esc(t.es)}</span>`) : esc(t);
const body = document.body;
const isES = () => body.classList.contains('lang-es');

function motifSVG(kind, big) {
  const W = 800, H = big ? 380 : 500;
  let path = '', label = '';
  if (kind === 'step') {
    const z = 0.65, wn = 4, wd = wn * Math.sqrt(1 - z * z), ph = Math.acos(z); let d = '';
    for (let i = 0; i <= 200; i++) { const t = i / 200 * 3; const y = 1 - Math.exp(-z * wn * t) / Math.sqrt(1 - z * z) * Math.sin(wd * t + ph); d += (i ? 'L' : 'M') + (80 + t / 3 * (W - 160)).toFixed(1) + ' ' + (H - 90 - y * (H - 200)).toFixed(1); }
    path = `<path d="M80 ${H - 90 - (H - 200)} H${W - 80}" stroke="#888888" stroke-dasharray="5 6" fill="none"/><path d="${d}" stroke="#ffffff" stroke-width="3" fill="none"/>`;
  } else if (kind === 'wave') {
    let d = '', d2 = '';
    for (let i = 0; i <= 200; i++) { const x = 60 + i / 200 * (W - 120); d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (H * 0.62 + Math.sin(i / 200 * Math.PI * 4) * 40).toFixed(1); d2 += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + (H * 0.62 + 26 + Math.sin(i / 200 * Math.PI * 4 - 0.6) * 30).toFixed(1); }
    path = `<path d="${d2}" stroke="#777777" stroke-width="2" fill="none"/><path d="${d}" stroke="#ffffff" stroke-width="3" fill="none"/><g transform="translate(${W / 2 - 50} ${H * 0.2})" stroke="#dddddd" stroke-width="2.5" fill="none"><rect x="30" y="18" width="40" height="16" rx="3"/><line x1="0" y1="10" x2="100" y2="10"/><circle cx="0" cy="10" r="8"/><circle cx="100" cy="10" r="8"/><line x1="50" y1="34" x2="50" y2="${H * 0.36}" stroke-dasharray="4 6" stroke="#ffffff"/></g>`;
  } else if (kind === 'pareto') {
    let pts = '';
    const rnd = (i) => (Math.sin(i * 12.9898) * 43758.5453) % 1;
    for (let i = 0; i < 90; i++) { const a = Math.abs(rnd(i)), b = Math.abs(rnd(i + 99)); const x = 110 + a * (W - 220), y = 70 + b * (H - 170); pts += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.2" fill="#777777"/>`; }
    let d = ''; for (let i = 0; i <= 60; i++) { const t = i / 60; const x = 110 + t * (W - 220), y = H - 100 - (1 - Math.pow(t, 0.35)) * (H - 190); d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1); }
    path = pts + `<path d="${d}" stroke="#ffffff" stroke-width="3" fill="none"/>`;
  } else if (kind === 'vision') {
    path = `<g stroke="#ffffff" stroke-width="3" fill="none"><rect x="${W / 2 - 110}" y="${H / 2 - 120}" width="220" height="240" rx="6"/><path d="M${W / 2 - 110} ${H / 2 - 90} v-30 h30 M${W / 2 + 80} ${H / 2 - 120} h30 v30 M${W / 2 + 110} ${H / 2 + 90} v30 h-30 M${W / 2 - 80} ${H / 2 + 120} h-30 v-30" stroke="#dddddd"/></g><g fill="#dddddd"><circle cx="${W / 2 - 40}" cy="${H / 2 - 20}" r="7"/><circle cx="${W / 2 + 40}" cy="${H / 2 - 20}" r="7"/></g><path d="M${W / 2 - 45} ${H / 2 + 45} q45 30 90 0" stroke="#dddddd" stroke-width="3" fill="none"/>`;
  }
  let grid = '';
  for (let x = 0; x <= W; x += 40) grid += `<line x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
  for (let y = 0; y <= H; y += 40) grid += `<line x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="${W}" height="${H}" fill="#111111"/><g stroke="#ffffff" stroke-opacity="0.05">${grid}</g>${path}</svg>`;
}

function coverHTML(p, big) {
  if (p.cover.src) return `<img src="${p.cover.src}" alt="" loading="lazy"${p.cover.contain ? ' style="object-fit:contain;background:#fff"' : ''}>`;
  return motifSVG(p.cover.motif, big);
}

/* ---------- home ---------- */
let currentFilter = 'all';
function cardHTML(p, wide) {
  return `
    <a class="pcard${wide && p.wide ? ' wide' : ''}" href="portfolio.html#${p.id}" data-id="${p.id}" data-tags="${p.tags.join(' ')}">
      <div class="cover">${coverHTML(p)}${p.status === 'live' ? `<span class="badge live">${L(T('In progress', 'En curso'))}</span>` : ''}</div>
      <div class="pbody">
        <span class="meta">${L(p.org)} · ${p.year}</span>
        <h3>${L(p.title)}</h3>
        <p>${L(p.summary)}</p>
        <div class="pfoot"><span></span><span class="more">${L(T('View project →', 'Ver proyecto →'))}</span></div>
      </div>
    </a>`;
}
function renderFeatured() {
  const el = document.getElementById('featured'); if (!el) return;
  el.innerHTML = ['schneider', 'fred-factory', 'abb-packaging'].map(id => cardHTML(PROJECTS.find(p => p.id === id), false)).join('');
}
function renderSkills() {
  const el = document.getElementById('skills-grid'); if (!el) return;
  el.innerHTML = SKILLS.map(([h, items]) => `<div><h3>${L(h)}</h3><div class="tags">${items.map(i => `<span class="tag">${L(i)}</span>`).join('')}</div></div>`).join('') + `
    <div><h3>${L(T('Languages', 'Idiomas'))}</h3><div class="langs">
      ${[[T('Spanish', 'Español'), 6, T('Native', 'Nativo')], [T('English', 'Inglés'), 5, T('C1')], [T('German', 'Alemán'), 4, T('B2')], [T('French', 'Francés'), 1, T('Basic', 'Básico')]].map(([n, k, lv]) => `<div class="lvl"><span>${L(n)}</span><span class="bar">${Array.from({ length: 6 }, (_, i) => `<i class="${i < k ? 'on' : ''}"></i>`).join('')}</span><span class="meta">${L(lv)}</span></div>`).join('')}
    </div></div>`;
}
function renderHome() {
  if (!document.getElementById('grid')) return;
  document.getElementById('filters').innerHTML = FILTERS.map(([k, t]) => `<button type="button" id="f-${k}" data-filter="${k}" aria-pressed="${k === currentFilter}">${L(t)}</button>`).join('') + '<span class="count meta" id="proj-count" aria-live="polite"></span>';
  document.getElementById('grid').innerHTML = PROJECTS.map(p => cardHTML(p, true)).join('');
  document.querySelectorAll('#grid .pcard').forEach(a => a.setAttribute('href', '#' + a.dataset.id));
  document.querySelectorAll('#filters button').forEach(b => b.addEventListener('click', () => { currentFilter = b.dataset.filter; applyFilter(); }));
  applyFilter();
}
function applyFilter() {
  if (!document.getElementById('grid')) return;
  let n = 0;
  document.querySelectorAll('#filters button').forEach(b => b.setAttribute('aria-pressed', b.dataset.filter === currentFilter ? 'true' : 'false'));
  document.querySelectorAll('#grid .pcard').forEach(c => {
    const show = currentFilter === 'all' || c.dataset.tags.split(' ').includes(currentFilter);
    c.hidden = !show; if (show) n++;
    c.classList.toggle('wide', !!(currentFilter === 'all' && PROJECTS.find(p => p.id === c.dataset.id).wide));
  });
  const el = document.getElementById('proj-count');
  if (el) el.textContent = n + (isES() ? ' proyectos' : ' projects');
}

/* ---------- detail ---------- */
let gallery = [], gi = 0;
function renderDetail(p) {
  const i = PROJECTS.indexOf(p), prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
  const status = p.status === 'live' ? T('In progress', 'En curso') : T('Completed', 'Concluido');
  gallery = p.gallery;
  const sub = t => `<h2 class="project-sub-label">${L(t)}</h2>`;
  const scope = p.scope ? `
    <figure class="scope">
      <div class="scope-head"><span>θ(t) / θ<sub>ref</sub></span><span id="readout"></span></div>
      <canvas id="trace" role="img" aria-label="Closed-loop step response designed for 6.81 percent overshoot and 1.54 second settling time"></canvas>
      <figcaption>${L(T('Design response: second-order closed loop with ζ = 0.650 and ωn = 4.00 rad/s. Move the pointer over the plot to read values.', 'Respuesta de diseño: lazo cerrado de segundo orden con ζ = 0.650 y ωn = 4.00 rad/s. Mueve el cursor sobre la gráfica para leer valores.'))}</figcaption>
    </figure>` : '';
  const vids = (p.videos.length || p.clips.length) ? sub(T('Videos')) +
    p.clips.map(c => `<figure class="fig" style="margin-bottom:1.5rem"><video class="clip" src="${c.src}" controls preload="metadata"></video><figcaption>${L(c)}</figcaption></figure>`).join('') +
    `<div class="embeds">${p.videos.map(v => { const id = ytId(v.url); return id ? `<figure class="fig"><div class="yt"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(v.en)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div><figcaption>${L(v)}</figcaption></figure>` : `<a class="video" href="${v.url}" target="_blank" rel="noopener"><span class="play" aria-hidden="true"></span><span>${L(v)}</span></a>`; }).join('')}</div>` : '';
  document.getElementById('detail').innerHTML = `
    <a class="crumb" href="#">← ${L(T('All projects', 'Todos los proyectos'))}</a>
    <article class="project-block">
      <h1>${L(p.title)}</h1>
      <p class="project-org">${L(p.org)}, ${p.year}</p>
      <p class="project-lede">${L(p.summary)}</p>
      <ul class="facts">
        ${p.facts.map(([k, v]) => `<li><span class="k">${L(k)}</span><span>${L(v)}</span></li>`).join('')}
        <li><span class="k">${L(T('Status', 'Estado'))}</span><span>${L(status)}</span></li>
      </ul>
      <figure class="d-cover">${coverHTML(p, true)}</figure>
      ${sub(T('The challenge', 'El reto'))}<p>${L(p.challenge)}</p>
      ${sub(T('What we built', 'Lo que construimos'))}${scope}<ul class="points">${p.approach.map(a => `<li>${L(a)}</li>`).join('')}</ul>
      ${sub(T('Results', 'Resultados'))}<p class="project-outcome">${L(p.results)}</p>
      ${sub(T('My role', 'Mi rol'))}<p>${L(p.role)}</p>${p.note ? `<p class="note">${L(p.note)}</p>` : ''}
      ${p.gallery.length ? sub(T('Photos and figures', 'Fotos y figuras')) + `<div class="gallery">${p.gallery.map((g, k) => `<figure class="fig"><button type="button" data-g="${k}" aria-label="Enlarge image"><img src="${g.src}" alt="${esc(g.en)}" loading="lazy"></button><figcaption>${L(g)}</figcaption></figure>`).join('')}</div>` : ''}
      ${vids}
      <nav class="pager" aria-label="More projects">
        <a href="#${prev.id}"><small>← ${L(T('Previous', 'Anterior'))}</small><b>${L(prev.title)}</b></a>
        <a class="next" href="#${next.id}"><small>${L(T('Next', 'Siguiente'))} →</small><b>${L(next.title)}</b></a>
      </nav>
    </article>`;
  document.querySelectorAll('#detail [data-g]').forEach(b => b.addEventListener('click', () => openLB(+b.dataset.g)));
  if (p.scope) startScope(); else stopScope();
}

/* ---------- router ---------- */
function route() {
  const det = document.getElementById('detail');
  const h = decodeURIComponent(location.hash.slice(1));
  const p = PROJECTS.find(x => x.id === h);
  if (!det) { if (p) location.replace('portfolio.html#' + p.id); return; }
  const home = document.getElementById('home');
  if (p) {
    renderDetail(p); home.hidden = true; det.hidden = false; const ph = document.querySelector('.portfolio-hero'); if (ph) ph.hidden = true; setOverlay(); window.scrollTo(0, 0);
    document.title = p.title.en + ' · Alberto Palacios';
  } else {
    stopScope(); det.hidden = true; home.hidden = false; const ph = document.querySelector('.portfolio-hero'); if (ph) ph.hidden = false; setOverlay(); document.title = 'Portfolio · Alberto Palacios';
    if (h) { const el = document.getElementById(h); if (el) requestAnimationFrame(() => el.scrollIntoView()); }
  }
}
window.addEventListener('hashchange', route);

/* ---------- language ---------- */
function setLang(l) {
  body.classList.remove('lang-en', 'lang-es'); body.classList.add('lang-' + l);
  document.documentElement.lang = l;
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false'));
  try { localStorage.setItem('ap-lang', l); } catch (e) {}
  applyFilter(); if (lbOpen) showLB();
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- lightbox ---------- */
const lb = document.getElementById('lb') || document.createElement('div'); let lbOpen = false, lastFocus = null;
function showLB() { const g = gallery[gi]; document.getElementById('lb-img').src = g.src; document.getElementById('lb-img').alt = g.en; document.getElementById('lb-cap').textContent = isES() ? g.es : g.en; }
function openLB(k) { gi = k; lastFocus = document.activeElement; showLB(); lb.classList.add('open'); lbOpen = true; document.getElementById('lb-x').focus(); }
function closeLB() { lb.classList.remove('open'); lbOpen = false; if (lastFocus) lastFocus.focus(); }
function stepLB(d) { gi = (gi + d + gallery.length) % gallery.length; showLB(); }
if (document.getElementById('lb')) document.getElementById('lb-x').addEventListener('click', closeLB);
if (document.getElementById('lb')) document.getElementById('lb-prev').addEventListener('click', () => stepLB(-1));
if (document.getElementById('lb')) document.getElementById('lb-next').addEventListener('click', () => stepLB(1));
lb.addEventListener('click', e => { if (e.target === lb) closeLB(); });
document.addEventListener('keydown', e => { if (!lbOpen) return; if (e.key === 'Escape') closeLB(); if (e.key === 'ArrowLeft') stepLB(-1); if (e.key === 'ArrowRight') stepLB(1); });

/* ---------- copy email ---------- */
document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', function () {
  const orig = btn.innerHTML;
  const done = ok => { btn.textContent = ok ? (isES() ? 'Copiado' : 'Copied') : (isES() ? 'Selecciona y copia' : 'Select and copy'); setTimeout(() => { btn.innerHTML = orig; }, 1600); };
  try { navigator.clipboard.writeText(btn.dataset.copy).then(() => done(true), () => done(false)); } catch (e) { done(false); }
}));

/* ---------- transparent navigation over a hero image ---------- */
function setOverlay() {
  const nav = document.querySelector('nav.site-nav'); if (!nav) return;
  const hero = [...document.querySelectorAll('.hero-home, .hero-full, .portfolio-hero')].find(h => !h.hidden);
  nav.classList.toggle('nav-overlay', !!hero && window.scrollY < 20);
}
window.addEventListener('scroll', setOverlay, { passive: true });

/* ---------- mobile menu ---------- */
(function () {
  const btn = document.querySelector('.menu-btn'), menu = document.getElementById('site-menu'), close = document.querySelector('.menu-close');
  if (!btn || !menu) return;
  const set = open => { menu.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); document.body.style.overflow = open ? 'hidden' : ''; (open ? close : btn).focus(); };
  btn.addEventListener('click', () => set(true));
  close.addEventListener('click', () => set(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { if (menu.classList.contains('open')) set(false); }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) set(false); });
})();

/* ---------- contact form: opens the visitor's email app with the message ready ---------- */
(function () {
  const f = document.getElementById('cform'); if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!f.reportValidity()) return;
    const v = id => f.querySelector('#' + id).value.trim();
    const name = v('fname') + ' ' + v('lname');
    const subject = (isES() ? 'Contacto desde el portafolio: ' : 'Portfolio contact: ') + name;
    const bodyTxt = v('message') + '\n\n' + name + '\n' + v('email');
    window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(bodyTxt);
    document.getElementById('form-status').textContent = isES() ? 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.' : 'Your email app will open with the message ready to send.';
  });
})();

/* ---------- résumé PDF button: shown only when media/cv.pdf exists ---------- */
(function () {
  const b = document.getElementById('cv-btn'); if (!b) return;
  fetch(b.getAttribute('href'), { method: 'HEAD' }).then(r => { if (r.ok) b.hidden = false; }).catch(() => {});
})();

/* ---------- pendulum scope ---------- */
let scopeRAF = null, scopeObs = null;
function stopScope() { if (scopeRAF) cancelAnimationFrame(scopeRAF); scopeRAF = null; if (scopeObs) { scopeObs.disconnect(); scopeObs = null; } }
function startScope() {
  stopScope();
  const canvas = document.getElementById('trace'); if (!canvas) return;
  const ctx = canvas.getContext('2d'), readout = document.getElementById('readout');
  const Mp = 0.0681, Ts = 1.54, lnM = Math.log(Mp), zeta = -lnM / Math.sqrt(Math.PI * Math.PI + lnM * lnM), wn = 4 / (zeta * Ts), wd = wn * Math.sqrt(1 - zeta * zeta), phi = Math.acos(zeta), tp = Math.PI / wd;
  const y = t => t <= 0 ? 0 : 1 - Math.exp(-zeta * wn * t) / Math.sqrt(1 - zeta * zeta) * Math.sin(wd * t + phi);
  const TE = 3, YM = 1.2; let cur = tp, scrub = false, last = null;
  const css = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
  function draw() {
    const dpr = window.devicePixelRatio || 1, w = canvas.clientWidth, h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, w, h);
    const pl = 34, pr = 10, pt = 10, pb = 24, pw = w - pl - pr, ph = h - pt - pb;
    const X = t => pl + t / TE * pw, Y = v => pt + (1 - v / YM) * ph;
    const ink = css('--ink'), muted = css('--muted'), rule = css('--rule'), acc = css('--accent');
    ctx.font = '11px ' + css('--mono'); ctx.strokeStyle = rule; ctx.lineWidth = 1; ctx.fillStyle = muted;
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let t = 0; t <= TE + 1e-9; t += 0.5) { ctx.beginPath(); ctx.moveTo(Math.round(X(t)) + .5, pt); ctx.lineTo(Math.round(X(t)) + .5, pt + ph); ctx.stroke(); ctx.fillText(t.toFixed(1) + (t === TE ? ' s' : ''), X(t), pt + ph + 6); }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    [0, 0.4, 0.8, 1.2].forEach(v => { ctx.beginPath(); ctx.moveTo(pl, Math.round(Y(v)) + .5); ctx.lineTo(pl + pw, Math.round(Y(v)) + .5); ctx.stroke(); ctx.fillText(v.toFixed(1), pl - 6, Y(v)); });
    ctx.fillStyle = acc; ctx.globalAlpha = 0.1; ctx.fillRect(pl, Y(1.02), pw, Y(0.98) - Y(1.02)); ctx.globalAlpha = 1;
    ctx.setLineDash([4, 4]); ctx.strokeStyle = muted;
    ctx.beginPath(); ctx.moveTo(pl, Y(1)); ctx.lineTo(pl + pw, Y(1)); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(X(Ts), pt); ctx.lineTo(X(Ts), pt + ph); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = muted; ctx.textAlign = 'left'; ctx.textBaseline = 'bottom';
    ctx.fillText('Ts = 1.54 s', X(Ts) + 6, Y(0.2)); ctx.fillText('±2 %', X(2.55), Y(1.02) - 2);
    ctx.strokeStyle = acc; ctx.lineWidth = 2.25; ctx.lineJoin = 'round'; ctx.beginPath();
    for (let i = 0; i <= 300; i++) { const t = i / 300 * TE; i ? ctx.lineTo(X(t), Y(y(t))) : ctx.moveTo(X(t), Y(y(t))); } ctx.stroke();
    ctx.strokeStyle = ink; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(X(tp), Y(1)); ctx.lineTo(X(tp), Y(y(tp))); ctx.stroke();
    ctx.fillStyle = ink; ctx.fillText('Mp = 6.81 %', X(tp) + 8, Y(y(tp)) - 4);
    const cy = y(cur); ctx.fillStyle = css('--surface'); ctx.strokeStyle = acc; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(X(cur), Y(cy), 4.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    readout.innerHTML = '<b>t = ' + cur.toFixed(2) + ' s</b> · y = ' + cy.toFixed(3);
  }
  draw();
  canvas.addEventListener('pointermove', e => { const r = canvas.getBoundingClientRect(); cur = Math.max(0, Math.min(TE, (e.clientX - r.left - 34) / (r.width - 44) * TE)); scrub = true; draw(); });
  canvas.addEventListener('pointerleave', () => { scrub = false; });
  window.addEventListener('resize', draw);
  scopeObs = new MutationObserver(draw); scopeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const tick = ts => { if (last === null) last = ts; const dt = (ts - last) / 1000; last = ts; if (!scrub) { cur += dt * 0.6; if (cur > TE) cur = 0; draw(); } scopeRAF = requestAnimationFrame(tick); };
    scopeRAF = requestAnimationFrame(tick);
  }
}

/* ---------- boot ---------- */
const CONTACT_EMAIL = 'albertod.palaciost@gmail.com';
try { const f = new URLSearchParams(location.search).get('f'); if (f && FILTERS.some(x => x[0] === f)) currentFilter = f; } catch (e) {}
renderHome(); renderFeatured(); renderSkills();
let saved = null; try { saved = localStorage.getItem('ap-lang'); } catch (e) {}
if (saved === 'es' || saved === 'en') setLang(saved);
route();
setOverlay();
