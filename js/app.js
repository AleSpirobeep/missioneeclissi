/* ============================================================
   MISSIONE ECLISSI · app
   ============================================================ */

const gmaps = (lat,lng)=>`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
const stelle = r=>{
  const p=Math.round(r);
  return '★'.repeat(p)+'☆'.repeat(5-p);
};

/* Risolve una tappa: se punta a un luogo del catalogo, ne eredita i dati */
function risolvi(t){
  if(t.luogo && LUOGHI[t.luogo]){
    const L = LUOGHI[t.luogo];
    return {...t, nome:L.nome, lat:L.lat, lng:L.lng, scheda:t.luogo};
  }
  return t;
}

/* ---------- RENDER GIORNI ---------- */
const wrap = document.getElementById('giorni');
wrap.innerHTML = GIORNI.map(g=>{
  const tappe = g.tappe.map(risolvi);
  return `
  <article class="giorno ${g.eclisse?'eclisse-card':''}" id="${g.id}">
    <div class="g-head">
      <div>
        <div class="g-data">${g.data}</div>
        <div class="g-titolo">${g.titolo}</div>
      </div>
      <div class="g-zona">${g.zona}</div>
    </div>
    <div class="g-body">
      ${g.mappa?`<div class="g-mappa" id="mappa-${g.id}"></div>`:''}
      ${tappe.map(t=>`
        <div class="tappa">
          <div class="t-ora">${t.ora}</div>
          <div>
            <div class="t-nome">
              ${t.scheda
                ? `<button type="button" data-scheda="${t.scheda}">${t.nome}</button><span class="cam">▸ scheda</span>`
                : (t.lat ? `<a href="${gmaps(t.lat,t.lng)}" target="_blank" rel="noopener" style="color:inherit;text-decoration:none;border-bottom:1px solid rgba(240,154,77,.45)">${t.nome}</a>` : t.nome)}
              ${t.badge?`<span class="t-badge">${t.badge}</span>`:''}
            </div>
            ${t.nota?`<div class="t-nota">${t.nota}</div>`:''}
            ${t.drive?`<div class="t-drive">⇢ ${t.drive}</div>`:''}
          </div>
        </div>`).join('')}
      ${g.eclisse?`
      <div class="fasi">
        <h3>Le fasi del sole nero</h3>
        <div class="fase"><b>19:38</b><span>Primo contatto — occhiali su, la Luna morde il Sole</span></div>
        <div class="fase tot"><b>20:31</b><span>TOTALITÀ — 1 min 36 sec di notte sul mare. Occhiali giù.</span></div>
        <div class="fase"><b>20:49</b><span>Ultimo contatto — il Sole tramonta ancora eclissato</span></div>
        <div class="avviso">Il Sole sarà a soli 2,7° sull'orizzonte ovest: serve mare aperto davanti, ed è esattamente ciò che Sa Foradada offre. Occhiali certificati ISO 12312-2 per tutte le fasi parziali.</div>
      </div>`:''}
    </div>
  </article>`;
}).join('');

/* ---------- MAPPE PER GIORNO (Leaflet + tile Carto scuri) ---------- */
const TILES = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const ATTR  = '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

GIORNI.filter(g=>g.mappa).forEach(g=>{
  const punti = g.tappe.map(risolvi).filter(t=>t.lat);
  if(!punti.length) return;
  const map = L.map('mappa-'+g.id,{scrollWheelZoom:false,attributionControl:true});
  L.tileLayer(TILES,{attribution:ATTR,maxZoom:18}).addTo(map);
  const latlngs = [];
  punti.forEach((t,i)=>{
    const ll=[t.lat,t.lng]; latlngs.push(ll);
    L.marker(ll,{icon:L.divIcon({className:'',html:`<div class="pin-num">${i+1}</div>`,iconSize:[24,24],iconAnchor:[12,12]})})
      .addTo(map)
      .bindPopup(`<b>${t.ora}</b> · ${t.nome}`);
  });
  L.polyline(latlngs,{color:'#f09a4d',weight:2,opacity:.65,dashArray:'6 7'}).addTo(map);
  map.fitBounds(L.latLngBounds(latlngs).pad(0.22));
});

/* ---------- SCHEDA LUOGO ---------- */
const sheet    = document.getElementById('sheet');
const backdrop = document.getElementById('sheet-backdrop');

function apriScheda(id){
  const L0 = LUOGHI[id]; if(!L0) return;
  const rev = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(L0.nome+' Mallorca')}`;
  sheet.innerHTML = `
    <div class="sh-grip"></div>
    <div class="sh-head">
      <div class="sh-nome">${L0.nome}</div>
      <button class="sh-close" aria-label="Chiudi" onclick="chiudiScheda()">✕</button>
    </div>
    ${L0.rating?`
    <div class="sh-meta">
      <span class="sh-voto">${L0.rating.toFixed(1)}</span>
      <span class="sh-stelle">${stelle(L0.rating)}</span>
      <span class="sh-nrec">${L0.nrec.toLocaleString('it-IT')} recensioni su Google</span>
    </div>`:''}
    ${L0.foto && L0.foto.length?`
    <div class="sh-foto">
      ${L0.foto.map(f=>`<figure><img src="${f.u}" alt="${L0.nome}" loading="lazy" onerror="this.closest('figure').style.display='none'"><figcaption>Foto: ${f.c}</figcaption></figure>`).join('')}
    </div>`:''}
    <div class="sh-sez">
      <h4>Da sapere</h4>
      <ul>${L0.punti.map(p=>`<li>${p}</li>`).join('')}</ul>
    </div>
    ${L0.orari?`<div class="sh-sez"><h4>Orari</h4><div class="sh-orari">${L0.orari}</div></div>`:''}
    <div class="sh-azioni">
      <a class="btn primario" href="${gmaps(L0.lat,L0.lng)}" target="_blank" rel="noopener">Naviga ↗</a>
      <a class="btn" href="${rev}" target="_blank" rel="noopener">Recensioni su Google ↗</a>
    </div>`;
  document.body.classList.add('sheet-open');
}
function chiudiScheda(){ document.body.classList.remove('sheet-open'); }
backdrop.addEventListener('click', chiudiScheda);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') chiudiScheda(); });
wrap.addEventListener('click', e=>{
  const b = e.target.closest('[data-scheda]');
  if(b) apriScheda(b.dataset.scheda);
});

/* ---------- COUNTDOWN ---------- */
const TARGET = new Date('2026-08-12T20:31:00+02:00').getTime();
const pad = n=>String(n).padStart(2,'0');
function tick(){
  let d = TARGET - Date.now();
  const nota = document.getElementById('cd-nota');
  if(d<=0 && d>-96000){ nota.textContent='☀︎ È ADESSO. ALZA GLI OCCHI. ☀︎'; }
  else if(d<=-96000){ nota.textContent='L\u2019abbiamo vista. Per sempre nostra.'; }
  if(d<0)d=0;
  document.getElementById('cd-g').textContent=pad(Math.floor(d/86400000));
  document.getElementById('cd-h').textContent=pad(Math.floor(d/3600000)%24);
  document.getElementById('cd-m').textContent=pad(Math.floor(d/60000)%60);
  document.getElementById('cd-s').textContent=pad(Math.floor(d/1000)%60);
}
tick(); setInterval(tick,1000);

/* ---------- STELLE HERO ---------- */
const stars=document.getElementById('stars');
for(let i=0;i<70;i++){
  const s=document.createElement('span');
  s.style.left=Math.random()*100+'%';
  s.style.top=Math.random()*100+'%';
  s.style.animationDelay=(Math.random()*4)+'s';
  s.style.transform=`scale(${.5+Math.random()})`;
  stars.appendChild(s);
}
