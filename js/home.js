/* ============================================================
   MISSIONE ECLISSI · home
   Stelle dell'hero, countdown grande, mappa d'insieme con legenda.
   ============================================================ */

/* ---------- STELLE HERO ---------- */
const stars = document.getElementById('stars');
if(stars){
  for(let i=0;i<70;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100+'%';
    s.style.top  = Math.random()*100+'%';
    s.style.animationDelay = (Math.random()*4)+'s';
    s.style.transform = `scale(${.5+Math.random()})`;
    stars.appendChild(s);
  }
}

/* ---------- COUNTDOWN ---------- */
function tick(){
  let d = TARGET - Date.now();
  const nota = document.getElementById('cd-nota');
  if(d<=0 && d>-96000)      nota.textContent = '☀︎ È ADESSO. ALZA GLI OCCHI. ☀︎';
  else if(d<=-96000)        nota.textContent = 'L’abbiamo vista. Per sempre nostra.';
  if(d<0) d=0;
  document.getElementById('cd-g').textContent = pad(Math.floor(d/86400000));
  document.getElementById('cd-h').textContent = pad(Math.floor(d/3600000)%24);
  document.getElementById('cd-m').textContent = pad(Math.floor(d/60000)%60);
  document.getElementById('cd-s').textContent = pad(Math.floor(d/1000)%60);
}
tick();
setInterval(tick,1000);

/* ---------- MAPPA D'INSIEME ---------- */
const vista = mappaTutti('mappa-tutti');

const legenda = document.getElementById('legenda');
legenda.innerHTML = `
  <button type="button" class="leg-chip" data-tutto="1">
    <span class="punto" style="background:linear-gradient(90deg,#e07a2f,#0e8ba3)"></span>Tutto il viaggio
  </button>
  ${GIORNI.map(g=>`
    <button type="button" class="leg-chip" data-giorno="${g.id}">
      <span class="punto" style="background:${g.colore}"></span>${g.data.split(' ')[0]} ${g.data.split(' ')[1]}${g.eclisse?' ●':''}
    </button>`).join('')}`;

legenda.addEventListener('click', e=>{
  const b = e.target.closest('.leg-chip');
  if(!b) return;
  if(b.dataset.tutto) vista.fitTutto();
  else vista.fitGiorno(b.dataset.giorno);
});
