/* Renders content.js into the binder. Routes: #about, #cases, #contact, #case-<slug>. */
(() => {
  const SITE = window.SITE;
  const main = document.getElementById('main');
  const tabsEl = document.getElementById('tabs');
  const BASE_TITLE = 'Yulia Zyrianova Portfolio';
  const RING_X = [10, 36, 64, 90];
  const HOLE_X = [23, 50, 77];
  const live = SITE.cases.filter((c) => c.status === 'live');
  const pad = (n) => String(n).padStart(2, '0');
  const caseNo = (c) => pad(SITE.cases.indexOf(c) + 1);

  let view = null;
  let lastCase = null;

  /* ---------- small parts ---------- */
  /* ring strip, modelled on Yulia’s binder photo: upper sheet edge, page stack, spine gap, lower sheet edge, wire rings */
  const RING = `<svg class="ring__svg" viewBox="0 0 28 88" aria-hidden="true">
      <path d="M14.5 14 C 2.5 30, 2.5 58, 14.5 74" fill="none" stroke="#28292B" stroke-opacity=".35" stroke-width="5" stroke-linecap="round" transform="translate(1.2 1.4)"/>
      <path d="M14.5 14 C 2.5 30, 2.5 58, 14.5 74" fill="none" stroke="url(#ring-metal)" stroke-width="3.8" stroke-linecap="round"/>
      <path d="M12.6 19 C 5.6 33, 5.6 55, 12.6 69" fill="none" stroke="#FFFFFF" stroke-opacity=".7" stroke-width="1" stroke-linecap="round"/>
      <circle cx="14.5" cy="14" r="2.1" fill="#1C1D1E"/><circle cx="14.5" cy="74" r="2.1" fill="#1C1D1E"/>
    </svg>`;
  function ringStrip() {
    const holes = () => RING_X.map((x) => `<span class="hole hole--ring" style="--x:${x}%"></span>`).join('')
      + HOLE_X.map((x) => `<span class="hole" style="--x:${x}%"></span>`).join('');
    return `<div class="rings" aria-hidden="true">
      <div class="rings__lip rings__lip--upper">${holes()}</div>
      <div class="rings__stack"></div>
      <div class="rings__lip rings__lip--lower">${holes()}</div>
      ${RING_X.map((x) => `<span class="ring" style="--x:${x}%">${RING}</span>`).join('')}
    </div>`;
  }

  function tabs() {
    tabsEl.innerHTML = `
      <a class="tabs__home" href="#top">Y. Zyrianova</a>
      <a class="tab tab--about" href="#about" data-tab="about">About</a>
      <a class="tab tab--cases" href="#cases" data-tab="cases">Cases</a>
      <a class="tab tab--contact" href="#contact" data-tab="contact">Contact</a>`;
  }
  function setActiveTab(name) {
    tabsEl.querySelectorAll('.tab').forEach((t) => {
      if (t.dataset.tab === name) t.setAttribute('aria-current', 'true');
      else t.removeAttribute('aria-current');
    });
  }

  const chips = (items) => `<ul class="chips">${items.map((i) => `<li class="chip">${i}</li>`).join('')}</ul>`;
  /* “before” sits on its own small typed line (“was 45–60 min”), struck through with a thin red pen line */
  const withUnit = (v, u) => (!u || /[a-z]/i.test(v) ? v : (u.startsWith('/') ? v + u : `${v} ${u}`));
  const figure = (f) => `<li>
      <span class="fig__was">${f.before ? `<span class="vh">Before: </span><s>${withUnit(f.before, f.unit)}</s><span class="vh">. Now: </span>` : '&nbsp;'}</span>
      <b class="fig"><span class="fig__now">${f.value}</span>${f.unit ? `<small class="fig__unit">${f.unit}</small>` : ''}</b>
      <span class="fig__label">${f.label}</span></li>`;
  const figures = (items) => `<ul class="figures">${items.map(figure).join('')}</ul>`;
  const clipSvg = `<svg class="label__clip" viewBox="0 0 54 40" aria-hidden="true">
      <path d="M14 22 V6 a4 4 0 0 1 4-4 h18 a4 4 0 0 1 4 4 V22" fill="none" stroke="#97989B" stroke-width="2.4"/>
      <path d="M4 20 h46 l-6 18 h-34 z" fill="#121213"/>
      <path d="M8 22 h38" stroke="#38393B" stroke-width="1.5"/>
    </svg>`;

  /* ---------- home ---------- */
  function renderHome() {
    const { cover, about, contact } = SITE;
    main.innerHTML = `
      <section class="sheet cover" id="top" aria-label="Cover">
        <div class="cover__grid">
          <div class="cover__text">
            <div class="label">
              ${clipSvg}
              <p class="label__name">${cover.name}</p>
              <h1 class="label__word">${cover.word}</h1>
              <p class="label__sub">${cover.sub}</p>
            </div>
            <div class="filed">
              <p class="label-k">Filed under</p>
              <ul>${cover.filedUnder.map((t) => `<li>${t}</li>`).join('')}</ul>
            </div>
            <div class="cover__ctas">
              <a class="btn btn--paper" href="#cases">See cases ↓</a>
              <a class="btn btn--line" href="#contact">Contact</a>
            </div>
          </div>
          <figure class="cover__print">
            ${CLIP}
            <div class="cover__photo">
              <img class="cover__img ht__img" src="assets/yulia.jpg" alt="${cover.photoAlt}" width="1000" height="1000">
              <canvas class="cover__halftone ht__dots" aria-hidden="true"></canvas>
            </div>
          </figure>
        </div>
      </section>

      ${ringStrip()}

      <section class="sheet about" id="about" aria-labelledby="about-h">
        <h2 class="vh" id="about-h">About</h2>
        <div class="about__grid">
          <div class="prose">
            <p class="about__hello">${about.hello}</p>
            ${about.intro.map((p) => `<p>${p}</p>`).join('')}
            <p class="slip"><span class="slip__tape" aria-hidden="true"></span>${about.focus}</p>
          </div>
          <aside class="idcard" aria-label="Details">
            <dl>
              <div><dt>Based in</dt><dd>${about.location}</dd></div>
              <div><dt>Email</dt><dd class="copyrow"><span class="js-email">${contact.email}</span></dd></div>
              <div><dt>Elsewhere</dt><dd><a href="${contact.linkedin}" target="_blank" rel="noopener">LinkedIn</a> · <a href="${contact.telegram}" target="_blank" rel="noopener">Telegram</a></dd></div>
            </dl>
          </aside>
        </div>
        <h3 class="minihead">How I work</h3>
        <ol class="steps">${about.howIWork.map((s) => `<li><b>${s.step}</b><span>${s.text}</span></li>`).join('')}</ol>
        <div class="skills"><span class="label-k">Skills</span>${about.skills.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
        <div class="skills"><span class="label-k">Languages</span>${about.languages.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
      </section>

      ${ringStrip()}

      <section class="sheet divider" id="cases" aria-labelledby="cases-h">
        
        <div>
          <h2 class="divider__title" id="cases-h">Cases</h2>
          <p class="divider__sub">${SITE.casesIntro}</p>
        </div>
      </section>

      ${ringStrip()}

      <section class="sheet contents" aria-labelledby="contents-h">
        <h2 class="vh" id="contents-h">Contents</h2>
        <div class="toc-results" id="results">
          <h3 class="minihead">Results in short</h3>
          ${figures(SITE.results)}
        </div>
        <h3 class="minihead">Cases</h3>
        <ol class="toc">${SITE.cases.map(tocRow).join('')}</ol>
      </section>

      ${ringStrip()}

      <section class="sheet contact" id="contact" aria-labelledby="contact-h">
        <div class="phone" aria-hidden="true">
          <img class="ht__img" src="assets/phone.png" alt="" width="320" height="1000">
          <canvas class="ht__dots"></canvas>
        </div>
        <h2 class="vh" id="contact-h">Contact</h2>
        <p class="contact__lead">${contact.lead}</p>
        <ul class="contact__list">
          <li><span class="label-k">Email</span><span class="copyrow"><span class="val js-email">${contact.email}</span></span></li>
          <li><span class="label-k">LinkedIn</span><a class="val" href="${contact.linkedin}" target="_blank" rel="noopener">linkedin.com/in/yulia-zyrianova</a></li>
          <li><span class="label-k">Telegram</span><a class="val" href="${contact.telegram}" target="_blank" rel="noopener">t.me/julie_dreams</a></li>
        </ul>
        <div class="contact__end">
          <a class="btn" href="${contact.cv}" target="_blank" rel="noopener">Download CV (PDF) ↓</a>
          <p class="sign">${contact.signoff}</p>
        </div>
      </section>`;
    addCopyButtons();
    halftone();
    observeSections();
  }

  /* contents card: preview mounted four different ways (rotating), like the binder photo:
     pocket = photo in a stitched clear pocket · clip = print held by a paper clip
     crumpled = crumpled paper · tractor = perforated printer paper */
  const MOUNTS = ['pocket', 'clip', 'crumpled', 'tractor'];
  const CLIP = `<svg class="tcard__clip" viewBox="0 0 24 64" aria-hidden="true"><path d="M8 20 V8 a4 4 0 0 1 8 0 V48 a6 6 0 0 1 -12 0 V14" fill="none" stroke="#6E6F72" stroke-width="2.2" stroke-linecap="round"/><path d="M7 20 V8 a5 5 0 0 1 10 0" fill="none" stroke="#D8D9DB" stroke-width="0.8"/></svg>`;
  function tocRow(c, i) {
    const live = c.status === 'live';
    const src = c.preview || `assets/previews/${c.slug}.jpg`;
    const mount = MOUNTS[i % MOUNTS.length];
    const inner = `
      <span class="tcard__print tcard__print--${mount}">
        ${mount === 'clip' ? CLIP : ''}
        <span class="tcard__mno">${caseNo(c)}</span>
        <span class="tcard__pic"><img src="${src}" alt="Preview of ${c.title}" loading="lazy"></span>
      </span>
      <span class="tcard__body">
        <span class="tcard__title">${c.title}</span>
        <span class="tcard__sum">${c.summary}</span>
        ${chips(c.labels)}
        <span class="${live ? 'tcard__go' : 'tcard__note'}">${live ? 'Open case →' : 'Moving in from Notion'}</span>
      </span>`;
    return `<li id="item-${c.slug}">${live
      ? `<a class="tcard" href="#case-${c.slug}">${inner}</a>`
      : `<div class="tcard is-draft">${inner}</div>`}</li>`;
  }

  /* ---------- case ---------- */
  const zoomLink = (srcs, alt) => `<button class="zoom-link" type="button" data-srcs="${srcs.join('|')}" data-alt="${alt}">Open full size ↗</button>`;
  const PART = {
    text: (p) => `<p>${p.html}</p>`,
    heading: (p) => `<h4 class="doc-h">${p.html}</h4>`,
    subheading: (p) => `<h5 class="doc-sh">${p.html}</h5>`,
    list: (p) => `<ul class="doc-list">${p.items.map((i) => `<li>${i}</li>`).join("")}</ul>`,
    example: (p) => `<p class="doc-example">${p.html}</p>`,
    quote: (p) => `<blockquote class="doc-quote">${p.html}</blockquote>`,
    chips: (p) => `<p class="doc-chips"><span class="label-k">${p.label}</span>${p.items.map((i) => `<span class="chip">${i}</span>`).join('')}</p>`,
    defs: (p) => `<dl class="doc-defs">${p.items.map(([t, d]) => `<dt>${t}</dt><dd>${d}</dd>`).join('')}</dl>`,
    table: (p) => `<div class="dd" role="table" aria-label="Dos and don’ts">
        <div class="dd__head" role="row"><span class="dd__do-k" role="columnheader">Do ✓</span><span class="dd__dont-k" role="columnheader">Don’t ✕</span></div>
        ${p.rows.map(([d, n]) => `<div class="dd__row" role="row"><p class="dd__do" role="cell">${d}</p><p class="dd__dont" role="cell"><span>${n}</span></p></div>`).join('')}
      </div>`,
    image: (p) => `<figure class="doc-fig"><button class="zoom" type="button" data-srcs="${p.src}" data-alt="${p.alt}" aria-label="Open larger: ${p.alt}"><img src="${p.src}" alt="${p.alt}" loading="lazy"><span class="zoom__hint" aria-hidden="true">Open ↗</span></button>${p.caption ? `<figcaption>${p.caption}</figcaption>` : ''}</figure>`,
    // several images in a grid, each with a typed caption
    gallery: (p) => `<div class="doc-gallery">${p.items.map((it) => PART.image(it)).join('')}</div>`,
    // a long page (landing page, email) in a fixed-height frame you scroll inside
    scroll: (p) => `<figure class="doc-scroll">
        <div class="doc-scroll__top">${p.caption ? `<figcaption>${p.caption}</figcaption>` : ''}${zoomLink(p.srcs, p.alt)}</div>
        <div class="scrollbox"><div class="doc-scroll__frame" tabindex="0" role="region" aria-label="${p.alt}" style="--h:${p.height || 620}px">${p.srcs.map((s, i) => `<img src="${s}" alt="${i ? '' : p.alt}" loading="lazy">`).join('')}</div>${HINT}</div>
      </figure>`,
    // app screens in phone frames, scrollable
    phones: (p) => `<div class="doc-phones">${p.items.map((it) => `<figure class="doc-phone"><figcaption>${it.caption}</figcaption><div class="scrollbox scrollbox--phone"><div class="doc-phone__screen" tabindex="0" role="region" aria-label="${it.alt}"><img src="${it.src}" alt="${it.alt}" loading="lazy"></div>${HINT}</div>${zoomLink([it.src], it.alt)}</figure>`).join('')}</div>
      ${p.items.filter((it) => it.article).map((it) => `<details class="doc-read"><summary><span>Read the full article: ${it.caption}</span></summary><div class="doc-article">${it.article}</div></details>`).join('')}`,
  };
  const HINT = '<span class="scroll-hint" aria-hidden="true">Scroll ↓</span>';
  const para = (p) => (/^\s*<(ul|ol)/.test(p) ? p : `<p>${p}</p>`);

  function sleeve(w, i) {
    const notes = w.notes && w.notes.length;
    return `<figure class="sleeve-wrap">
      <figcaption class="sleeve__label">${w.title}</figcaption>
      <div class="sleeve-row${notes ? ' has-notes' : ''}">
        <div class="sleeve"><div class="sleeve__doc">${w.parts.map((p) => (PART[p.kind] ? PART[p.kind](p) : '')).join('')}</div></div>
        ${notes ? `<ul class="notes" aria-label="Editor’s notes">${w.notes.map((n) => `<li>${n}</li>`).join('')}</ul>` : ''}
      </div>
    </figure>`;
  }

  const ENDING_TITLE = { result: "Result", outcome: "Outcome", howIWrote: "How I wrote it", status: "Status" };

  function renderCase(c) {
    const idx = live.indexOf(c);
    const prev = live[idx - 1];
    const next = live[idx + 1];
    const e = c.ending;
    const h = (t) => `<h2 class="case__h">${t}</h2>`;
    main.innerHTML = `
      ${ringStrip(true)}
      <article class="sheet case" aria-labelledby="case-h">
        <nav class="case__crumbs" aria-label="Case navigation"><a href="#cases">← Contents</a></nav>
        <header class="case__head">
          <p class="case__kicker">${c.title}</p>
          <h1 class="case__title" id="case-h" tabindex="-1">${c.headline || c.title}</h1>
          ${chips(c.labels)}
          ${c.meta ? `<p class="case__meta">${c.meta}</p>` : ''}
        </header>
        ${c.glance ? figures(c.glance) : ''}
        <section class="case__sec">${h("Brief")}<div class="prose">${c.brief.map(para).join('')}</div></section>
        <section class="case__sec">${h('What I did')}
          ${c.did.intro ? `<div class="prose"><p>${c.did.intro}</p></div>` : ''}
          <ol class="layers">${c.did.items.map((it) => `<li><div><b>${it.title}</b>${it.text}</div></li>`).join('')}</ol>
        </section>
        <section class="case__sec">${h("Work")}<div class="sleeves">${c.work.map(sleeve).join('')}</div></section>
        ${e ? `<section class="ending ending--${e.kind}">
          ${h(ENDING_TITLE[e.kind])}
          ${e.stamp ? `<p><span class="stamp">${e.stamp}</span></p>` : ''}
          <ul class="ending__list">${e.items.map((it) => `<li>${it}</li>`).join('')}</ul>
        </section>` : ''}
        <nav class="pager" aria-label="More cases">
          <span>${prev ? `<a href="#case-${prev.slug}">← Previous<small>${prev.title}</small></a>` : ''}</span>
          <a class="pager__back" href="#cases">All cases</a>
          <span class="pager__next">${next ? `<a href="#case-${next.slug}">Next →<small>${next.title}</small></a>` : ''}</span>
        </nav>
      </article>`;
    lastCase = c.slug;
    setActiveTab('cases');
  }

  /* ---------- behaviors ---------- */
  /* lightbox: click a work image to see it full size; Esc, the close button, or a click outside closes it */
  /* the viewer shows one or several stacked images (a long page) in a scrollable panel;
     clicking an image zooms it to 2× so small text on screenshots is readable */
  let box = null;
  function lightbox(srcs, alt) {
    if (!box) {
      box = document.createElement('dialog');
      box.className = 'lightbox';
      box.innerHTML = '<div class="lightbox__bar"><span class="lightbox__tip">Click the image to zoom in</span><button class="lightbox__close" type="button" aria-label="Close">Close ✕</button></div><div class="lightbox__body"></div>';
      box.addEventListener('click', (ev) => {
        if (ev.target === box || ev.target.closest('.lightbox__close')) { box.close(); return; }
        if (ev.target.tagName === 'IMG') {
          const zoomed = box.classList.toggle('is-zoomed');
          box.querySelector('.lightbox__tip').textContent = zoomed ? 'Click the image to fit the screen' : 'Click the image to zoom in';
          fit();
        }
      });
      document.body.appendChild(box);
    }
    const fit = () => {   // every image in the set gets the same width, so stacked page parts line up
      const imgs = [...box.querySelectorAll('.lightbox__body img')];
      const nat = Math.max(...imgs.map((i) => i.naturalWidth || 0)) || 1200;
      const base = Math.min(nat * (nat < 700 ? 2 : 1), 1200, window.innerWidth * 0.92);
      imgs.forEach((img) => { img.style.width = `${Math.round(base * (box.classList.contains('is-zoomed') ? 2 : 1))}px`; });
    };
    box.classList.remove('is-zoomed');
    box.querySelector('.lightbox__tip').textContent = 'Click the image to zoom in';
    box.querySelector('.lightbox__body').innerHTML = srcs.map((s, i) => `<img src="${s}" alt="${i ? '' : alt}">`).join('');
    box.querySelectorAll('.lightbox__body img').forEach((img) => { if (img.complete) fit(); else img.addEventListener('load', fit, { once: true }); });
    box.querySelector('.lightbox__body').scrollTo(0, 0);
    if (typeof box.showModal === 'function') box.showModal(); else box.setAttribute('open', '');
  }
  document.addEventListener('click', (ev) => {
    const z = ev.target.closest('.zoom, .zoom-link');
    if (z) lightbox(z.dataset.srcs.split('|'), z.dataset.alt);
  });
  /* scroll hints fade once the reader starts scrolling inside a frame */
  document.addEventListener('scroll', (ev) => {
    const f = ev.target.closest && ev.target.closest('.doc-scroll__frame, .doc-phone__screen');
    if (f && f.scrollTop > 12) f.parentElement.classList.add('is-scrolled');
  }, true);
  function addCopyButtons() {
    main.querySelectorAll('.js-email').forEach((el) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn btn--ghost';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy email address');
      btn.addEventListener('click', () => {
        const done = () => { btn.textContent = 'Copied'; setTimeout(() => { btn.textContent = 'Copy'; }, 1600); };
        const fallback = () => {
          const r = document.createRange(); r.selectNodeContents(el);
          const s = getSelection(); s.removeAllRanges(); s.addRange(r);
          btn.textContent = 'Selected, press ⌘C';
        };
        try { navigator.clipboard.writeText(el.textContent).then(done, fallback); } catch (err) { fallback(); }
      });
      el.after(btn);
    });
  }

  let io = null;
  function observeSections() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) return;
    const map = { top: null, about: 'about', cases: 'cases', contact: 'contact' };
    const seen = new Map();
    io = new IntersectionObserver((entries) => {
      entries.forEach((en) => seen.set(en.target, en.isIntersecting ? en.intersectionRatio : 0));
      let best = null; let bestR = 0;
      seen.forEach((r, el) => { if (r > bestR) { bestR = r; best = el; } });
      if (best) setActiveTab(best.dataset.tabFor || null);
    }, { threshold: [0, 0.2, 0.5, 0.8], rootMargin: '-20% 0px -40% 0px' });
    Object.keys(map).forEach((id) => {
      const el = document.getElementById(id);
      if (el) { el.dataset.tabFor = map[id] || ''; io.observe(el); }
    });
    const contents = main.querySelector('.contents');
    if (contents) { contents.dataset.tabFor = 'cases'; io.observe(contents); }
  }

  /* real halftone: an image is re-drawn as ink dots on a canvas laid over it.
     opts: ink (dot color), cells (dots across the width), posY (vertical crop focus, 0–1) */
  function halftoneBox(box, opts) {
    const img = box && box.querySelector('.ht__img');
    const canvas = box && box.querySelector('.ht__dots');
    if (!img || !canvas) return null;
    const draw = () => {
      const w = box.clientWidth; const hgt = box.clientHeight;
      if (!w || !hgt || !img.naturalWidth) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(hgt * dpr);
      const cell = Math.max(2.5, w / opts.cells);
      const cols = Math.ceil(w / cell) + 1; const rows = Math.ceil(hgt / cell) + 1;
      const s = document.createElement('canvas'); s.width = cols; s.height = rows;
      const sx = s.getContext('2d', { willReadFrequently: true });
      // same crop as CSS object-fit: cover
      const ir = img.naturalWidth / img.naturalHeight; const br = cols / rows;
      let cw = img.naturalWidth; let ch = img.naturalHeight; let ox = 0; let oy = 0;
      if (ir > br) { cw = ch * br; ox = (img.naturalWidth - cw) / 2; } else { ch = cw / br; oy = (img.naturalHeight - ch) * (opts.posY ?? 0.5); }
      try {
        sx.fillStyle = '#FFFFFF'; sx.fillRect(0, 0, cols, rows);
        sx.drawImage(img, ox, oy, cw, ch, 0, 0, cols, rows);
        const data = sx.getImageData(0, 0, cols, rows).data;
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, hgt);
        ctx.fillStyle = opts.ink;
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const k = (y * cols + x) * 4;
            let l = (0.2126 * data[k] + 0.7152 * data[k + 1] + 0.0722 * data[k + 2]) / 255;
            l = Math.min(1, Math.max(0, Math.pow(l, 0.8) * 1.12 - 0.04));
            const r = (cell / 2) * Math.sqrt(1 - l) * (opts.gain || 1.05);
            if (r < 0.35) continue;
            const cx = x * cell + (y % 2 ? cell / 2 : 0); const cy = y * cell;
            ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
          }
        }
        box.classList.add('is-halftone');
      } catch (err) { box.classList.remove('is-halftone'); }
    };
    if (img.complete) draw(); else img.addEventListener('load', draw, { once: true });
    return draw;
  }
  let redraws = [];
  function halftone() {
    redraws = [
      // portrait: fine black dots over a soft grayscale photo (see .is-halftone in binder.css)
      halftoneBox(main.querySelector('.cover__photo'), { ink: 'rgba(22, 22, 22, 0.82)', cells: 120, posY: 0.3 }),
      // contact phone: red ink dots only
      halftoneBox(main.querySelector('.phone'), { ink: '#65000B', cells: 70, gain: 1.35 }),
    ].filter(Boolean);
  }
  let rt = null;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => view === 'home' && redraws.forEach((d) => d()), 150); });

  /* ---------- router ---------- */
  function enter() {
    main.classList.remove('is-entering'); void main.offsetWidth; main.classList.add('is-entering');
  }
  function onRoute() {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (hash.startsWith('case-')) {
      const c = SITE.cases.find((x) => x.slug === hash.slice(5));
      if (!c || c.status !== 'live') { location.replace('#cases'); return; }
      renderCase(c); view = 'case:' + c.slug; enter();
      document.title = `${c.title} · Yulia Zyrianova`;
      track({ path: `/case/${c.slug}`, title: c.title });
      window.scrollTo({ top: 0, behavior: 'instant' });
      const t = document.getElementById('case-h'); if (t) t.focus({ preventScroll: true });
      return;
    }
    const fromCase = view !== 'home';
    if (fromCase) { renderHome(); view = 'home'; enter(); track({ path: '/', title: 'Home' }); }
    document.title = BASE_TITLE;
    const target = hash === 'cases' && lastCase ? document.getElementById(`item-${lastCase}`) : (hash ? document.getElementById(hash) : null);
    lastCase = hash === 'cases' ? null : lastCase;
    if (target && fromCase) requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
    else if (!hash && fromCase) window.scrollTo({ top: 0, behavior: 'instant' });
  }

  /* ---------- visitor stats (GoatCounter, cookie-free) ----------
     Each case counts as its own page (/case/<slug>); CV downloads and contact clicks count as events.
     Only the live site counts, never previews or local copies. */
  function track(vars) {
    if (location.hostname !== 'yuliazyrianova.github.io') return;
    let tries = 0;
    const send = () => {
      if (window.goatcounter && typeof window.goatcounter.count === 'function') window.goatcounter.count(vars);
      else if (tries++ < 40) setTimeout(send, 250);   // the counter script loads in the background
    };
    send();
  }
  document.addEventListener('click', (ev) => {
    const a = ev.target.closest('a, button');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (href.endsWith('.pdf')) track({ path: 'click-cv-download', title: 'CV download', event: true });
    else if (href.includes('linkedin.com')) track({ path: 'click-linkedin', title: 'LinkedIn click', event: true });
    else if (href.includes('t.me/')) track({ path: 'click-telegram', title: 'Telegram click', event: true });
    else if (a.getAttribute('aria-label') === 'Copy email address') track({ path: 'click-copy-email', title: 'Email copied', event: true });
  });

  tabs();
  document.addEventListener('touchstart', () => {}, { passive: true });   // lets :active show the colour preview on tap
  window.addEventListener('hashchange', onRoute);
  onRoute();
})();
