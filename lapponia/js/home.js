/* ============================================================
   LAPPONIA 2026 · home
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

/* ---------- NEVE ---------- */
const neve = document.getElementById('neve');
if(neve){
  for(let i=0;i<40;i++){
    const f = document.createElement('span');
    const sz = 2+Math.random()*4;
    f.style.left = Math.random()*100+'%';
    f.style.width = f.style.height = sz+'px';
    f.style.opacity = .35+Math.random()*.55;
    f.style.animationDuration = (9+Math.random()*12)+'s';
    f.style.animationDelay = (-Math.random()*20)+'s';
    neve.appendChild(f);
  }
}

/* ---------- COUNTDOWN ---------- */
function tick(){
  let d = TARGET - Date.now();
  const nota = document.getElementById('cd-nota');
  if(d<=0 && d>-604800000)  nota.textContent = '❄ SIAMO IN LAPPONIA ❄';
  else if(d<=-604800000)    nota.textContent = 'Ce la siamo goduta. Per sempre nostra.';
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
    <span class="punto" style="background:linear-gradient(90deg,#3ddc97,#5b8def)"></span>Tutto il viaggio
  </button>
  ${GIORNI.map(g=>`
    <button type="button" class="leg-chip" data-giorno="${g.id}">
      <span class="punto" style="background:${g.colore}"></span>${g.data.split(' ')[0].slice(0,3)} ${g.data.split(' ')[1]}${g.aurora?' ✦':''}
    </button>`).join('')}`;

legenda.addEventListener('click', e=>{
  const b = e.target.closest('.leg-chip');
  if(!b) return;
  if(b.dataset.tutto) vista.fitTutto();
  else vista.fitGiorno(b.dataset.giorno);
});
