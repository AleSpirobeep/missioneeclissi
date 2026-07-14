/* ============================================================
   MISSIONE ECLISSI · luoghi
   Catalogo delle schede, filtrabile per giornata.
   ============================================================ */

/* Per ogni luogo, in quali giornate compare (come partenza o come tappa). */
const GIORNI_DEL_LUOGO = {};
GIORNI.forEach(g=>{
  const usati = new Set();
  if(g.partenza.luogo) usati.add(g.partenza.luogo);
  g.tappe.forEach(t=>{ if(t.luogo) usati.add(t.luogo); });
  usati.forEach(id=>{
    (GIORNI_DEL_LUOGO[id] = GIORNI_DEL_LUOGO[id] || []).push(g);
  });
});

const breve = g=>{
  const [gg, num] = g.data.split(' ');
  return gg.slice(0,3) + ' ' + num;
};

/* ---------- FILTRI ---------- */
document.getElementById('filtri').innerHTML = `
  <button type="button" class="chip" data-filtro="tutti">Tutti i luoghi</button>
  ${GIORNI.map(g=>`<button type="button" class="chip ${g.eclisse?'eclisse':''}" data-filtro="${g.id}">${breve(g)}${g.eclisse?' ●':''}</button>`).join('')}`;

/* ---------- GRIGLIA ---------- */
document.getElementById('griglia').innerHTML = Object.entries(LUOGHI).map(([id,L0])=>{
  const giorni = GIORNI_DEL_LUOGO[id] || [];
  const foto = L0.foto && L0.foto.length ? L0.foto[0].u : null;
  return `
  <button type="button" class="lg-card" data-scheda="${id}" data-giorni="${giorni.map(g=>g.id).join(' ')}">
    ${foto
      ? `<img class="lg-foto" src="${foto}" alt="${L0.nome}" loading="lazy" onerror="this.outerHTML='<div class=\\'lg-foto-vuota\\'>nessuna foto</div>'">`
      : `<div class="lg-foto-vuota">nessuna foto</div>`}
    <div class="lg-corpo">
      <div class="lg-nome">${L0.nome}</div>
      ${L0.rating?`
      <div class="lg-meta">
        <span class="lg-voto">${L0.rating.toFixed(1)}</span>
        <span class="lg-stelle">${stelle(L0.rating)}</span>
        <span>${L0.nrec.toLocaleString('it-IT')}</span>
      </div>`:'<div class="lg-meta">senza valutazione</div>'}
      <div class="lg-quando">${giorni.length?giorni.map(breve).join(' · '):'fuori programma'}</div>
    </div>
  </button>`;
}).join('');

/* ---------- COMPORTAMENTO FILTRI ---------- */
const griglia = document.getElementById('griglia');
const filtri  = document.getElementById('filtri');
const conta   = document.getElementById('conta-luoghi');

function applica(filtro){
  let visibili = 0;
  griglia.querySelectorAll('.lg-card').forEach(card=>{
    const ok = filtro==='tutti' || card.dataset.giorni.split(' ').includes(filtro);
    card.style.display = ok ? '' : 'none';
    if(ok) visibili++;
  });
  conta.textContent = `${visibili} ${visibili===1?'luogo':'luoghi'}`;
  filtri.querySelectorAll('.chip').forEach(c=>{
    c.style.background = c.dataset.filtro===filtro ? 'var(--inchiostro)' : '';
    c.style.color      = c.dataset.filtro===filtro ? '#fff' : '';
    c.style.borderColor= c.dataset.filtro===filtro ? 'var(--inchiostro)' : '';
  });
}

filtri.addEventListener('click', e=>{
  const b = e.target.closest('[data-filtro]');
  if(b) applica(b.dataset.filtro);
});

applica('tutti');
