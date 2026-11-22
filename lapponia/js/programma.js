/* ============================================================
   LAPPONIA 2026 · programma
   Le sette giornate: navigazione, card, mappa con punto di partenza.
   ============================================================ */

/* ---------- NAVIGAZIONE GIORNI ---------- */
document.getElementById('daynav').innerHTML = GIORNI.map(g=>{
  const [gg, num] = g.data.split(' ');
  const breve = gg.slice(0,3) + ' ' + num;
  return `<a class="chip ${g.aurora?'aurora':''}" href="#${g.id}">${breve}${g.aurora?' ✦':''}</a>`;
}).join('');

/* ---------- CARD DELLE GIORNATE ---------- */
function rigaPartenza(g){
  const p = risolvi(g.partenza);
  const nome = p.scheda
    ? `<button type="button" data-scheda="${p.scheda}">${p.nome}</button>`
    : (p.lat ? `<a href="${gmaps(p.lat,p.lng)}" target="_blank" rel="noopener">${p.nome}</a>` : p.nome);
  return `
    <div class="partenza">
      <div class="p-eti">Si parte</div>
      <div>
        <div class="p-nome">${nome}<span class="p-ora">${p.ora}</span></div>
        ${p.nota?`<div class="p-nota">${p.nota}</div>`:''}
      </div>
    </div>`;
}

/* Il numero è lo stesso del pin sulla mappa: lo prendono solo le tappe
   geolocalizzate, nello stesso ordine con cui puntiGiorno() le numera. */
function rigaTappa(t, n){
  const nome = t.scheda
    ? `<button type="button" data-scheda="${t.scheda}">${t.nome}</button><span class="cam">▸ scheda</span>`
    : (t.lat ? `<a href="${gmaps(t.lat,t.lng)}" target="_blank" rel="noopener">${t.nome}</a>` : t.nome);
  const numero = n ? `<span class="t-num">${n}</span>` : '<span class="t-num vuoto"></span>';
  return `
    <div class="tappa">
      <div class="t-ora">${t.ora}</div>
      <div>
        <div class="t-nome">${numero}${nome}${t.badge?`<span class="t-badge ${t.badge==='AURORA'?'aurora':''} ${/PRENOTARE|CONFERMARE|ORARIO/.test(t.badge)?'todo':''}">${t.badge==='AURORA'?'✦ AURORA':t.badge}</span>`:''}</div>
        ${t.nota?`<div class="t-nota">${t.nota}</div>`:''}
        ${t.drive?`<div class="t-drive">⇢ ${t.drive}</div>`:''}
      </div>
    </div>`;
}

function righeTappe(g){
  let n = 0;
  return g.tappe.map(risolvi).map(t=>rigaTappa(t, t.lat ? ++n : null)).join('');
}

document.getElementById('giorni').innerHTML = GIORNI.map(g=>`
  <article class="giorno ${g.aurora?'aurora-card':''}" id="${g.id}" style="--gcol:${g.colore}">
    <div class="g-head">
      <div>
        <div class="g-data">${g.data}</div>
        <div class="g-titolo">${g.titolo}</div>
      </div>
      <div class="g-zona">${g.zona}</div>
    </div>
    <div class="g-body">
      ${rigaPartenza(g)}
      ${g.mappa?`<div class="g-mappa" id="mappa-${g.id}"></div>`:''}
      ${righeTappe(g)}
    </div>
  </article>`).join('');

/* ---------- MAPPE ---------- */
GIORNI.filter(g=>g.mappa).forEach(g=>mappaGiorno('mappa-'+g.id, g));
