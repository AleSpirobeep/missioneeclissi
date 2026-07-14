/* ============================================================
   MISSIONE ECLISSI · checklist
   Le spunte vivono nel browser (localStorage): restano al riavvio,
   ma sono locali a questo dispositivo.
   ============================================================ */

const CHIAVE = 'missione-eclissi:checklist';

function leggiStato(){
  try{ return JSON.parse(localStorage.getItem(CHIAVE)) || {}; }
  catch(e){ return {}; }
}
function salvaStato(stato){
  try{ localStorage.setItem(CHIAVE, JSON.stringify(stato)); }
  catch(e){ /* navigazione privata o storage pieno: la pagina funziona lo stesso */ }
}

let stato = leggiStato();

/* ---------- RENDER ---------- */
document.getElementById('gruppi').innerHTML = CHECKLIST.map(gr=>`
  <section class="gruppo" data-gruppo="${gr.gruppo}">
    <div class="gr-testa">
      <h2 class="gr-titolo">${gr.gruppo}</h2>
      <span class="gr-conta" data-conta="${gr.gruppo}"></span>
    </div>
    ${gr.nota?`<p class="gr-nota">${gr.nota}</p>`:''}
    ${gr.voci.map(v=>`
      <label class="voce">
        <input type="checkbox" data-id="${v.id}" ${stato[v.id]?'checked':''}>
        <span class="v-testo">
          <span class="v-titolo">${v.t}${v.scad?`<span class="v-scad">${v.scad}</span>`:''}</span>
          ${v.n?`<span class="v-nota">${v.n}</span>`:''}
        </span>
      </label>`).join('')}
  </section>`).join('');

/* ---------- AVANZAMENTO ---------- */
const TOTALE = CHECKLIST.reduce((a,gr)=>a+gr.voci.length, 0);

function aggiorna(){
  const fatte = CHECKLIST.reduce((a,gr)=>a+gr.voci.filter(v=>stato[v.id]).length, 0);
  document.getElementById('ba-fatte').textContent = fatte;
  document.getElementById('ba-totale').textContent = TOTALE;
  document.getElementById('ba-riempi').style.width = (fatte/TOTALE*100)+'%';

  const finito = fatte===TOTALE;
  document.getElementById('ba-etichetta').textContent = finito
    ? '· tutto pronto. Si vola.'
    : `· ${TOTALE-fatte} da sistemare`;

  CHECKLIST.forEach(gr=>{
    const f = gr.voci.filter(v=>stato[v.id]).length;
    document.querySelector(`[data-conta="${gr.gruppo}"]`).textContent = `${f}/${gr.voci.length}`;
  });
}

document.getElementById('gruppi').addEventListener('change', e=>{
  const box = e.target.closest('input[type="checkbox"]');
  if(!box) return;
  stato[box.dataset.id] = box.checked;
  if(!box.checked) delete stato[box.dataset.id];
  salvaStato(stato);
  aggiorna();
});

document.getElementById('ba-reset').addEventListener('click', ()=>{
  if(!confirm('Azzerare tutte le spunte?')) return;
  stato = {};
  salvaStato(stato);
  document.querySelectorAll('#gruppi input[type="checkbox"]').forEach(b=>{ b.checked = false; });
  aggiorna();
});

aggiorna();
