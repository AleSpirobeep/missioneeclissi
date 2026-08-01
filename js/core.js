/* ============================================================
   MISSIONE ECLISSI · core
   Funzioni condivise da tutte le pagine: risoluzione dei dati,
   mappe Leaflet, scheda luogo, countdown.
   ============================================================ */

const TARGET = new Date('2026-08-12T20:30:19+02:00').getTime();

const gmaps  = (lat,lng)=>`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
const stelle = r=>{ const p=Math.round(r); return '★'.repeat(p)+'☆'.repeat(5-p); };
const pad    = n=>String(n).padStart(2,'0');

/* Una tappa (o una partenza) che punta a un luogo del catalogo ne eredita
   nome e coordinate; altrimenti resta com'è. */
function risolvi(t){
  if(t.luogo && LUOGHI[t.luogo]){
    const L = LUOGHI[t.luogo];
    return {...t, nome:L.nome, lat:L.lat, lng:L.lng, scheda:t.luogo};
  }
  return t;
}

/* I punti geolocalizzati di una giornata: la partenza (numero 0) e le tappe. */
function puntiGiorno(g){
  const punti = [];
  const p = risolvi(g.partenza);
  if(p.lat) punti.push({...p, tipo:'partenza'});
  g.tappe.map(risolvi).filter(t=>t.lat).forEach((t,i)=>punti.push({...t, tipo:'tappa', n:i+1}));
  return punti;
}

/* ---------- MAPPE ---------- */
const TILES = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const ATTR  = '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>';

function nuovaMappa(elId){
  const map = L.map(elId,{scrollWheelZoom:false,attributionControl:true});
  L.tileLayer(TILES,{attribution:ATTR,maxZoom:19}).addTo(map);
  return map;
}

function iconaPartenza(){
  return L.divIcon({className:'',html:'<div class="pin-start">PARTENZA</div>',iconSize:[86,26],iconAnchor:[43,13]});
}
function iconaTappa(n,colore){
  return L.divIcon({className:'',html:`<div class="pin-num" style="background:${colore}">${n}</div>`,iconSize:[26,26],iconAnchor:[13,13]});
}

/* Disegna i punti di una giornata su una mappa già creata.
   Restituisce i limiti (bounds) per centrarla. */
function disegnaGiorno(map, g, {etichettaGiorno=false}={}){
  const punti = puntiGiorno(g);
  if(!punti.length) return null;
  const colore = g.colore || '#0e8ba3';
  const coords = [];

  punti.forEach(p=>{
    const ll = [p.lat,p.lng];
    coords.push(ll);
    const icona = p.tipo==='partenza' ? iconaPartenza() : iconaTappa(p.n,colore);
    const titoloG = etichettaGiorno ? `<span class="pop-g">${g.data}</span>` : '';
    L.marker(ll,{icon:icona})
     .addTo(map)
     .bindPopup(`<b>${p.ora}</b> · ${p.nome}${titoloG}`);
  });

  if(coords.length>1){
    L.polyline(coords,{color:colore,weight:2.5,opacity:.7,dashArray:'6 8'}).addTo(map);
  }
  return L.latLngBounds(coords);
}

/* Se la mappa nasce in un contenitore ancora senza dimensioni (scheda in
   secondo piano, pannello non ancora disposto), Leaflet la inizializza a
   zoom 0. Quando il contenitore prende le sue misure, ricentriamo. */
function riadattaQuandoMisurabile(map, ricentra){
  map.invalidateSize();
  const el = map.getContainer();
  if(typeof ResizeObserver === 'function'){
    let ultimaAltezza = el.clientHeight;
    const obs = new ResizeObserver(()=>{
      if(el.clientHeight === ultimaAltezza) return;
      ultimaAltezza = el.clientHeight;
      map.invalidateSize();
      ricentra();
    });
    obs.observe(el);
  }
  window.addEventListener('load', ()=>{ map.invalidateSize(); ricentra(); }, {once:true});
}

/* Mappa di una singola giornata */
function mappaGiorno(elId, g){
  const map = nuovaMappa(elId);
  const bounds = disegnaGiorno(map, g);
  const ricentra = ()=>{ if(bounds) map.fitBounds(bounds.pad(0.25)); };
  ricentra();
  riadattaQuandoMisurabile(map, ricentra);
  return map;
}

/* Mappa d'insieme: tutte le giornate, ognuna col suo colore.
   Restituisce anche i bounds per giorno, per poterci zoomare dalla legenda. */
function mappaTutti(elId){
  const map = nuovaMappa(elId);
  const perGiorno = {};
  const tutti = [];

  GIORNI.forEach(g=>{
    const b = disegnaGiorno(map, g, {etichettaGiorno:true});
    if(!b) return;
    perGiorno[g.id] = b;
    tutti.push(b);
  });

  const tutto = tutti.reduce((acc,b)=>acc?acc.extend(b):L.latLngBounds(b.getSouthWest(),b.getNorthEast()), null);

  /* L'ultima inquadratura scelta: se la mappa viene ridimensionata,
     la ripristiniamo invece di riportare tutto a inizio viaggio. */
  let ricentra = ()=>{ if(tutto) map.fitBounds(tutto.pad(0.08)); };

  const fitTutto = ()=>{
    ricentra = ()=>{ if(tutto) map.fitBounds(tutto.pad(0.08)); };
    ricentra();
  };
  const fitGiorno = id=>{
    const b = perGiorno[id];
    if(!b) return;
    ricentra = ()=>map.fitBounds(b.pad(0.3));
    map.flyToBounds(b.pad(0.3),{duration:.8});
  };

  ricentra();
  riadattaQuandoMisurabile(map, ()=>ricentra());
  return {map, fitTutto, fitGiorno};
}

/* ---------- SCHEDA LUOGO (bottom sheet) ---------- */
const sheet    = document.getElementById('sheet');
const backdrop = document.getElementById('sheet-backdrop');

function apriScheda(id){
  const L0 = LUOGHI[id];
  if(!L0 || !sheet) return;
  const rev = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(L0.nome+' Mallorca')}`;
  sheet.innerHTML = `
    <div class="sh-grip"></div>
    <div class="sh-head">
      <div class="sh-nome">${L0.nome}</div>
      <button class="sh-close" type="button" aria-label="Chiudi">✕</button>
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
      <a class="btn" href="${rev}" target="_blank" rel="noopener">Recensioni ↗</a>
    </div>`;
  sheet.querySelector('.sh-close').addEventListener('click', chiudiScheda);
  document.body.classList.add('sheet-open');
}
function chiudiScheda(){ document.body.classList.remove('sheet-open'); }

if(backdrop){
  backdrop.addEventListener('click', chiudiScheda);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') chiudiScheda(); });
  /* Delega globale: qualunque elemento con data-scheda apre la scheda. */
  document.addEventListener('click', e=>{
    const b = e.target.closest('[data-scheda]');
    if(b) apriScheda(b.dataset.scheda);
  });
}

/* ---------- COUNTDOWN NELLA TOPBAR ---------- */
const miniCd = document.getElementById('mini-cd');
if(miniCd){
  const tickMini = ()=>{
    const d = TARGET - Date.now();
    if(d<=0){ miniCd.textContent='☀︎ totalità'; return; }
    miniCd.textContent = `${Math.floor(d/86400000)}g ${pad(Math.floor(d/3600000)%24)}h ${pad(Math.floor(d/60000)%60)}m`;
  };
  tickMini();
  setInterval(tickMini, 60000);
}
