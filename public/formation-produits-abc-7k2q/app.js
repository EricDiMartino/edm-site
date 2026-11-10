/* Formation produits ABC — logique de l'appli (vues : accueil, gamme, fiche, quiz).
   Contenu dans data.js. Progression enregistrée sur l'appareil (localStorage). */
(function () {
  const RANGES = window.ABC.ranges;
  const R = Object.fromEntries(RANGES.map((r) => [r.id, r]));
  const P = {};
  RANGES.forEach((r) => (r.products || []).forEach((p) => (P[p.id] = Object.assign(p, { range: r.id }))));
  const count = (r) => (r.products ? r.products.length : r.count || 0);
  const TOTAL = RANGES.reduce((s, r) => s + count(r), 0);
  const img = (n) => 'img/' + n + '.webp';

  const KEY = 'abc-formation-v1';
  let S = { name: '', learned: [], quiz: {} };
  try { S = Object.assign(S, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

  const who = document.getElementById('who');
  who.value = S.name || '';
  who.addEventListener('input', () => { S.name = who.value.trim(); save(); if (view === 'home') render(); });

  const app = document.getElementById('app');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const back = (to, label) => `<button class="back" data-go="${to}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>${label}</button>`;
  const learnedIn = (r) => S.learned.filter((id) => P[id] && P[id].range === r.id).length;
  let view = 'home';

  function home() {
    const best = RANGES.filter((r) => S.quiz[r.id] != null);
    return `<section class="view">
     <div class="hero"><h1>Connais la gamme.<br>Vends-la.</h1>
     <p>${S.name ? esc(S.name) + ', choisis' : 'Choisis'} une gamme, découvre chaque produit, puis teste-toi avec le quiz.</p></div>
     <div class="stats">
      <div class="stat"><b>${S.learned.filter((id) => P[id]).length}<small style="font-size:16px">/${TOTAL}</small></b><span>fiches apprises</span></div>
      <div class="stat"><b>${best.length}</b><span>quiz réussis</span></div>
      <div class="stat"><b>${RANGES.length}</b><span>gammes</span></div>
     </div>
     <div class="sec-title"><h2>Les gammes</h2><span class="eyebrow">${TOTAL} produits</span></div>
     <div class="grid">${RANGES.map((r) => {
       const n = learnedIn(r), c = count(r);
       return `<button class="tile" style="background:var(${r.tint})" ${r.ready ? `data-go="r-${r.id}"` : 'disabled'} aria-label="${r.name}">
        ${r.ready ? '' : '<span class="soon" style="position:absolute;top:12px;left:12px">Bientôt</span>'}
        <img src="${img(r.tile)}" alt="">
        <div style="position:relative"><h3>${r.name}</h3><small>${r.sub}<br>${r.ready ? n + '/' + c + ' appris' : c + ' produits'}</small>
        ${r.ready ? `<div class="bar"><i style="width:${(n / c) * 100}%"></i></div>` : ''}</div>
       </button>`;
     }).join('')}</div>
    </section>`;
  }

  function routine(r, cur) {
    return `<p class="eyebrow">Toucher un produit pour ouvrir sa fiche</p><div class="steps">${r.routine.map(([id, t, s]) =>
      `<button class="step" data-go="p-${id}" ${id === cur ? 'aria-current="true" style="font-weight:800"' : ''}><img src="${img(P[id].img)}" alt=""><b>${t}<br>${P[id].name}</b><span>${s}</span></button>`).join('')}</div>`;
  }

  function range(r) {
    return `<section class="view" style="--tint:var(${r.tint})">
     ${back('home', 'Gammes')}
     <div class="band" style="background:var(${r.tint})">
       <div><span class="eyebrow" style="color:inherit;opacity:.7">Gamme</span><h1>${r.name}</h1>
       <p class="sub">${r.title}</p><p class="scent">${r.scent}</p>
       <div class="chips">${r.known.map((k) => `<span class="chip">${k}</span>`).join('')}</div></div>
       <img src="${img(r.tile)}" alt="">
     </div>
     <div class="sec-title"><h2>${r.products.length} produits</h2><span class="eyebrow">${learnedIn(r)} appris</span></div>
     <div class="plist">${r.products.map((p) => `
       <button class="pcard" data-go="p-${p.id}">
         <div class="ph"><img src="${img(p.img)}" alt=""></div>
         <div><div class="kind">${p.kind}${S.learned.includes(p.id) ? '<span class="done">✓ appris</span>' : ''}</div>
         <h3>${p.name}</h3><p>${p.short}</p></div>
       </button>`).join('')}</div>
     ${r.routine ? `<div class="sec-title"><h2>La routine ${r.name}</h2></div><div class="routine">${routine(r)}</div>` : ''}
     ${r.quiz ? `<button class="cta" data-go="quiz-${r.id}">Faire le quiz ${r.name} · ${r.quiz.length} questions</button>` : ''}
    </section>`;
  }

  function product(p) {
    const r = R[p.range], done = S.learned.includes(p.id);
    const motion = p.video !== false
      ? `<video class="motion-video" src="video/${p.id}.mp4" controls playsinline preload="metadata" poster="video/${p.id}.webp" aria-label="Vidéo : ${p.name}"></video>`
      : `<div class="motion"><img src="${img(p.img)}" alt=""><div class="inner"><div class="play"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></div><b>Motion explicative</b><span style="font-size:14px">En préparation</span></div></div>`;
    return `<section class="view" style="--tint:var(${r.tint})">
     ${back('r-' + r.id, r.name)}
     <div class="fhead">
       <div class="fimg"><img src="${img(p.img)}" alt="${p.name}"></div>
       <div><span class="eyebrow">${r.name} · ${p.kind}</span><h1>${p.name}</h1><p class="en">${p.en}</p>
       <p style="margin-top:10px">${p.short}</p></div>
     </div>
     ${motion}
     <div class="block"><h2>Ce qu’il fait</h2><ul class="ben">${p.ben.map((b) => `<li>${b}</li>`).join('')}</ul></div>
     <div class="block"><h2>Formule</h2><div class="free">${p.free.map((f) => `<span>${f}</span>`).join('')}</div>
       ${p.def ? `<p class="def"><strong>${p.def[0]}</strong>${p.def[1]}</p>` : ''}</div>
     ${p.tips ? `<div class="block"><h2>Comment l’utiliser</h2><div class="tips">${p.tips.map(([t, d]) => `<p><strong>${t}</strong>${d}</p>`).join('')}</div></div>` : ''}
     ${p.pose.length ? `<div class="block"><h2>Temps de pose</h2><div class="pose">${p.pose.map(([n, u, t]) => `<div><b>${n}<small>${u}</small></b><span>${t}</span></div>`).join('')}</div></div>` : ''}
     ${r.routine ? `<div class="block"><h2>Dans la routine</h2>${routine(r, p.id)}</div>` : ''}
     <div class="block pitch"><h2>À dire à la cliente</h2><q>${p.pitch}</q><p class="note">Proposition de phrase, à adapter à ta consultation.</p></div>
     <button class="cta learn ${done ? 'is-done' : ''}" data-learn="${p.id}">${done ? '✓ Fiche apprise' : 'J’ai appris cette fiche'}</button>
    </section>`;
  }

  let qr = null, qi = 0, qs = 0, qa = null;
  function quiz() {
    const Q = qr.quiz;
    if (qi >= Q.length) {
      const best = Math.max(qs, S.quiz[qr.id] ?? 0); S.quiz[qr.id] = best; save();
      return `<section class="view">${back('r-' + qr.id, qr.name)}
       <div class="score"><span class="eyebrow">Quiz ${qr.name}</span><b>${qs}/${Q.length}</b>
       <p>${qs === Q.length ? 'Parfait. Tu maîtrises la gamme ' + qr.name + '.' : qs >= Q.length * 0.6 ? 'Bien. Relis les fiches pour viser le sans-faute.' : 'Relis les fiches ' + qr.name + ' puis retente.'}</p>
       <p>Meilleur score : ${best}/${Q.length}</p></div>
       <button class="cta" data-go="quiz-${qr.id}">Recommencer</button>
       <button class="cta ghost" data-go="r-${qr.id}">Revoir les fiches</button></section>`;
    }
    const q = Q[qi];
    return `<section class="view qwrap">${back('r-' + qr.id, 'Quitter le quiz')}
     <div class="qprog">${Q.map((_, i) => `<i class="${i <= qi ? 'on' : ''}"></i>`).join('')}</div>
     <span class="eyebrow">Question ${qi + 1} / ${Q.length}</span>
     <p class="qq" style="margin-top:8px">${q.q}</p>
     <div class="opts">${q.o.map((o, i) => {
       let c = ''; if (qa != null) { if (i === q.a) c = 'right'; else if (i === qa) c = 'wrong'; }
       return `<button class="opt ${c}" data-ans="${i}" ${qa != null ? 'disabled' : ''}><span class="k">${'ABCD'[i]}</span>${o}</button>`;
     }).join('')}</div>
     ${qa != null ? `<div class="expl"><b>${qa === q.a ? 'Bonne réponse.' : 'Pas tout à fait.'}</b> ${q.e}</div>
     <button class="cta" data-quiz="next">${qi + 1 < Q.length ? 'Question suivante' : 'Voir mon score'}</button>` : ''}
    </section>`;
  }

  function resolve(v) {
    if (v.startsWith('r-') && R[v.slice(2)] && R[v.slice(2)].ready) return v;
    if (v.startsWith('p-') && P[v.slice(2)]) return v;
    if (v.startsWith('quiz-') && R[v.slice(5)] && R[v.slice(5)].quiz) return v;
    return 'home';
  }
  function render() {
    if (view === 'home') app.innerHTML = home();
    else if (view.startsWith('r-')) app.innerHTML = range(R[view.slice(2)]);
    else if (view.startsWith('p-')) app.innerHTML = product(P[view.slice(2)]);
    else if (view.startsWith('quiz-')) app.innerHTML = quiz();
  }
  function go(v) {
    v = resolve(v);
    if (v.startsWith('quiz-')) { qr = R[v.slice(5)]; qi = 0; qs = 0; qa = null; }
    view = v; render(); window.scrollTo({ top: 0 });
    try { history.replaceState(null, '', v === 'home' ? location.pathname : '#' + v); } catch (e) {}
  }
  app.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-learn],[data-ans],[data-quiz]'); if (!t) return;
    if (t.dataset.go) go(t.dataset.go);
    else if (t.dataset.learn) { const id = t.dataset.learn; S.learned = S.learned.includes(id) ? S.learned.filter((x) => x !== id) : [...S.learned, id]; save(); render(); }
    else if (t.dataset.ans != null && qa == null) { qa = +t.dataset.ans; if (qa === qr.quiz[qi].a) qs++; render(); }
    else if (t.dataset.quiz === 'next') { qi++; qa = null; render(); window.scrollTo({ top: 0 }); }
  });
  document.querySelector('.brand').addEventListener('click', (e) => { e.preventDefault(); go('home'); });
  window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (h && h !== view) go(h); });
  go(location.hash.slice(1) || 'home');
})();
