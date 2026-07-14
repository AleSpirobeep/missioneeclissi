/* ============================================================
   MISSIONE ECLISSI · programma
   Le sette giornate: navigazione, card, mappa con punto di partenza.
   ============================================================ */

/* ---------- NAVIGAZIONE GIORNI ---------- */
document.getElementById('daynav').innerHTML = GIORNI.map(g=>{
  const [gg, num] = g.data.split(' ');
  const breve = gg.slice(0,3) + ' ' + num;
  return `<a class="chip ${g.eclisse?'eclisse':''}" href="#${g.id}">${breve}${g.eclisse?' ●':''}</a>`;
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

function rigaTappa(t){
  const nome = t.scheda
    ? `<button type="button" data-scheda="${t.scheda}">${t.nome}</button><span class="cam">▸ scheda</span>`
    : (t.lat ? `<a href="${gmaps(t.lat,t.lng)}" target="_blank" rel="noopener">${t.nome}</a>` : t.nome);
  return `
    <div class="tappa">
      <div class="t-ora">${t.ora}</div>
      <div>
        <div class="t-nome">${nome}${t.badge?`<span class="t-badge">${t.badge}</span>`:''}</div>
        ${t.nota?`<div class="t-nota">${t.nota}</div>`:''}
        ${t.drive?`<div class="t-drive">⇢ ${t.drive}</div>`:''}
      </div>
    </div>`;
}

const FASI = `
  <div class="fasi">
    <h3>Le fasi del sole nero</h3>
    <div class="fase"><b>19:38</b><span>Primo contatto — occhiali su, la Luna morde il Sole</span></div>
    <div class="fase tot"><b>20:31</b><span>TOTALITÀ — 1 min 36 sec di notte sul mare. Occhiali giù.</span></div>
    <div class="fase"><b>20:49</b><span>Ultimo contatto — il Sole tramonta ancora eclissato</span></div>
    <div class="avviso">Il Sole sarà a soli 2,7° sull’orizzonte ovest: serve mare aperto davanti, ed è esattamente ciò che Sa Foradada offre. Occhiali certificati ISO 12312-2 per tutte le fasi parziali.</div>
  </div>`;

document.getElementById('giorni').innerHTML = GIORNI.map(g=>`
  <article class="giorno ${g.eclisse?'eclisse-card':''}" id="${g.id}" style="--gcol:${g.colore}">
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
      ${g.tappe.map(risolvi).map(rigaTappa).join('')}
      ${g.eclisse?FASI:''}
    </div>
  </article>`).join('');

/* ---------- MAPPE ---------- */
GIORNI.filter(g=>g.mappa).forEach(g=>mappaGiorno('mappa-'+g.id, g));
