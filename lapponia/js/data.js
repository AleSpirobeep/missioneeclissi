/* ============================================================
   LAPPONIA 2026 · dati del viaggio
   Tutto il viaggio vive qui: LUOGHI (le schede), GIORNI (il
   programma) e CHECKLIST (le cose da fare).
   Coordinate indicative, da Google Maps.
   ============================================================ */

const LUOGHI = {
  fco:{
    nome:"Roma Fiumicino · Terminal 1", lat:41.8003, lng:12.2389,
    punti:[
      "Volo Finnair AY1762 alle 10:40: chiusura check-in alle 09:55, in aeroporto entro le 8:30",
      "1 valigia da stiva fino a 23 kg + 1 bagaglio a mano a testa",
      "Parcheggio dal 3 al 9: da decidere (lungo termine, esterno con navetta o accompagnamento)"
    ]
  },
  rvnapt:{
    nome:"Aeroporto di Rovaniemi", lat:66.5648, lng:25.8304,
    punti:[
      "Arrivo il 3 dicembre alle 21:05 con AY0537 da Helsinki",
      "Banco Alamo (insieme a Enterprise e National) nell'area noleggi: ritiro auto, 10 minuti dal centro",
      "Ritorno il 9: riconsegna auto entro le 12, check-in chiude alle 12:30, volo AY0542 alle 13:15"
    ]
  },
  scandic:{
    nome:"Scandic Rovaniemi City", lat:66.5020, lng:25.7290,
    rating:4.4, nrec:3200,
    punti:[
      "Notte del 3 dicembre, in centro a Rovaniemi",
      "Sauna in hotel: il primo assaggio di Finlandia dopo il volo",
      "Dal centro all'aeroporto 10 minuti, a Santa Claus Village 15"
    ]
  },
  arctic:{
    nome:"Arctic Restaurant", lat:66.5033, lng:25.7268,
    punti:[
      "Cena della sera del 3, prenotata: orario da confermare, si arriva in centro verso le 22",
      "Cucina lappone: renna, salmone, bacche artiche"
    ]
  },
  santa:{
    nome:"Santa Claus Village", lat:66.5436, lng:25.8470,
    rating:4.5, nrec:40000,
    orari:"10:00–17:00",
    punti:[
      "Il Circolo Polare Artico passa qui: la linea è segnata a terra",
      "È sulla strada per Levi: la mattina del 4 ci si ferma solo per una foto, la giornata è di Tokkana",
      "Incontro con Babbo Natale senza prenotazione, con coda"
    ]
  },
  tokkana:{
    nome:"Tokkana Reindeer Farm", lat:67.1933, lng:25.2032,
    rating:5.0, nrec:44,
    punti:[
      "Fattoria di famiglia a Kinisjärvi (Lohiniva), esattamente a metà strada 79 tra Rovaniemi e Levi",
      "Visita privata dentro i recinti: si accarezzano e si nutrono le renne, poi giro in slitta",
      "Pranzo nella kota, cucinato sul fuoco: renna saltata, zuppa, cheesecake ai lamponi artici",
      "Indirizzo: Kinisjärventie 127, 97420 Lohiniva · anu@tokkanareindeer.com · +358 40 577 5998",
      "Lì fa freddo sul serio: le recensioni parlano di −25/−32 °C. Strati, strati, strati"
    ]
  },
  cranberry:{
    nome:"Cranberry Levi Center", lat:67.8058, lng:24.8040,
    punti:[
      "La casa delle notti 4, 5 e 6: Hissitie 10, 99130 Levi, in centro a Sirkka",
      "Piste, noleggio sci e ristoranti a piedi"
    ]
  },
  levi:{
    nome:"Levi Ski Resort", lat:67.8060, lng:24.8060,
    rating:4.6, nrec:2600,
    orari:"Impianti 09:30–16:00 circa · piste illuminate fino alle 19",
    punti:[
      "La stazione più grande della Finlandia: 43 piste, 27 impianti, tutto intorno al fell Levitunturi",
      "Skipass e noleggio prenotabili online (levi.skiperformance.com): a dicembre conviene",
      "La luce c'è dalle 10 alle 14, ma le piste illuminate allungano la giornata fino alle 19",
      "Sul fell in cima c'è il Tuikku: pranzo con vista"
    ]
  },
  tuikku:{
    nome:"Tuikku", lat:67.8120, lng:24.7905,
    punti:[
      "Ristorante panoramico in cima al Levitunturi: ci si arriva con la gondola o con gli sci",
      "Pranzo e aperitivo del 5 dicembre, prenotati"
    ]
  },
  utsu:{
    nome:"Restaurant UTSU", lat:67.8050, lng:24.8085,
    punti:[
      "Cena del 5 dicembre alle 21:30, prenotata",
      "Cucina lappone contemporanea nel centro di Levi"
    ]
  },
  saamen:{
    nome:"Saamen Kammi", lat:67.8070, lng:24.8130,
    punti:[
      "Cena del 6 dicembre alle 18:00, prenotata",
      "Cena tradizionale nella kammi, la capanna sami con il fuoco al centro: salmone alla fiamma e renna"
    ]
  },
  levitours:{
    nome:"Levi Tours · safari in motoslitta", lat:67.8050, lng:24.8055,
    punti:[
      "Classic Wilderness Trail: il giro in motoslitta che sostituisce quello di Ivalo",
      "I tour del mattino non ci sono tutti i giorni: prenotare presto per il 6",
      "Patente B per guidare; si va in due per motoslitta"
    ]
  },
  sodankyla:{
    nome:"Sodankylä", lat:67.4160, lng:26.5900,
    punti:[
      "Il paese di passaggio tra Levi e Ivalo, il 7 all'andata e il 9 al ritorno",
      "Benzinaio e caffè: la sosta giusta a metà strada"
    ]
  },
  auroravillage:{
    nome:"Aurora Village Ivalo", lat:68.6400, lng:27.5300,
    rating:4.6, nrec:900,
    punti:[
      "Aurora Tower Suite per 4: zona notte di sopra e camera separata di sotto, tetto di vetro verso il cielo",
      "Notti del 7 e dell'8, pensione completa. Alloggio pagato, attività pre-prenotate",
      "Attività: Panorama Sauna (7, ore 14), caccia all'aurora in auto (7, ore 20), husky (8, ore 10:30), ice karting (8, ore 15), Wood Sauna e bagno nel ghiaccio (8, ore 17)",
      "Cancellazione attività gratuita fino a 14 giorni prima; il tour dell'aurora fino alle 17 del giorno stesso"
    ]
  }
};

/* ---------- GIORNI ----------
   partenza = da dove ci si muove quel giorno. tappe = in ordine.
   Una tappa con `luogo` eredita nome e coordinate dalla scheda. */
const GIORNI = [
 {id:'g0',data:'Martedì 2 dicembre',titolo:'Vigilia a Roma',zona:'Roma',mappa:false,colore:'#8b93a8',
  partenza:{ora:'pomeriggio',nome:'Dopo il lavoro',nota:'Si parte per Roma: la notte prima si dorme vicino a Fiumicino.'},
  tappe:[
   {ora:'sera',nome:'A casa di Alessio',nota:'Documenti, bagagli, sveglia puntata. In aeroporto entro le 8:30.'},
 ]},
 {id:'g1',data:'Mercoledì 3 dicembre',titolo:'Roma → Rovaniemi',zona:'In volo',mappa:true,colore:'#5b8def',
  partenza:{ora:'08:30',nome:'Fiumicino · Terminal 1',nota:'Check-in chiude alle 09:55.'},
  tappe:[
   {ora:'10:40',nome:'Volo AY1762 Roma → Helsinki',nota:'Atterraggio alle 15:10. Scalo di 4 h 30: pranzo e passeggiata in aeroporto.'},
   {ora:'19:40',nome:'Volo AY0537 Helsinki → Rovaniemi',nota:'Atterraggio alle 21:05. Fuori ci sono probabilmente −10 °C: giacca a portata di mano.'},
   {ora:'21:05',luogo:'rvnapt',nota:'Ritiro auto al banco Alamo. Carta di credito del guidatore per il deposito.'},
   {ora:'21:45',luogo:'scandic',nota:'Check-in e valigie in camera.',drive:'10 min dall’aeroporto'},
   {ora:'22:00',luogo:'arctic',nota:'Cena prenotata: confermare l’orario, perché arriviamo tardi.',badge:'ORARIO?'},
 ]},
 {id:'g2',data:'Giovedì 4 dicembre',titolo:'Le renne di Tokkana',zona:'Rovaniemi → Levi',mappa:true,colore:'#e2a24a',
  partenza:{ora:'09:30',luogo:'scandic',nota:'Colazione e partenza verso nord sulla strada 79. Le ore di luce sono poche: meglio non perderle.'},
  tappe:[
   {ora:'09:45',luogo:'santa',nota:'Il Circolo Polare è sulla strada: una foto sulla linea e via, senza entrare nel vortice del villaggio.',drive:'15 min'},
   {ora:'12:30',luogo:'tokkana',nota:'Anu e Niko ci aspettano: renne, slitta e pranzo nella kota fino alle 15 circa.',badge:'DA CONFERMARE',drive:'105 km · 1 h 30'},
   {ora:'16:00',luogo:'cranberry',nota:'Check-in nella casa di Levi, poi noleggio sci e skipass per domani. Le piste illuminate sono aperte fino alle 19, per chi non resiste.',drive:'65 km · 1 h'},
   {ora:'20:00',nome:'Cena a Levi',nota:'Unica serata ancora senza tavolo.',badge:'DA PRENOTARE'},
 ]},
 {id:'g3',data:'Venerdì 5 dicembre',titolo:'Sci sul Levitunturi',zona:'Levi',mappa:true,colore:'#2fb6a3',
  partenza:{ora:'09:30',luogo:'cranberry',nota:'Scarponi ai piedi, a piedi fino agli impianti.'},
  tappe:[
   {ora:'10:00',luogo:'levi',nota:'Giornata intera sulle piste. La luce dura fino alle 14, poi si scia sotto i fari.'},
   {ora:'13:00',luogo:'tuikku',nota:'Pranzo e aperitivo in cima al fell, prenotati. Si arriva con la gondola o con gli sci.'},
   {ora:'15:00',luogo:'levi',nota:'Ultime discese sulle piste illuminate, fino alle 19 se le gambe reggono.'},
   {ora:'21:30',luogo:'utsu',nota:'Cena prenotata.'},
 ]},
 {id:'g4',data:'Sabato 6 dicembre',titolo:'Festa dell’Indipendenza',zona:'Levi',mappa:true,colore:'#c86bb1',
  partenza:{ora:'09:00',luogo:'cranberry',nota:'Il 6 dicembre è festa nazionale: molti negozi chiusi, impianti e attività aperti. La sera candele alle finestre e fiaccolate.'},
  tappe:[
   {ora:'mattina',luogo:'levitours',nota:'Safari in motoslitta, Classic Wilderness Trail: il giro che abbiamo tolto da Ivalo. Oppure secondo giorno di sci.',badge:'DA PRENOTARE'},
   {ora:'pomeriggio',luogo:'levi',nota:'Pranzo libero, poi piste illuminate, slittino o sauna in casa.'},
   {ora:'18:00',luogo:'saamen',nota:'Cena nella kammi sami, prenotata. Poi fiaccolate in paese per la festa.'},
  ]},
 {id:'g5',data:'Domenica 7 dicembre',titolo:'Verso Aurora Village',zona:'Levi → Ivalo',aurora:true,mappa:true,colore:'#3ddc97',
  partenza:{ora:'entro le 10:00',luogo:'cranberry',nota:'Check-out e rotta a nord-est. 280 km via Sodankylä sulla strada principale, 3 h 30 con strada innevata.'},
  tappe:[
   {ora:'11:45',luogo:'sodankyla',nota:'Sosta benzina e caffè a metà strada.',drive:'150 km · 2 h'},
   {ora:'13:30',luogo:'auroravillage',nota:'Check-in nella Aurora Tower Suite. Da qui in poi tutto è a piedi.',drive:'130 km · 1 h 30'},
   {ora:'14:00',nome:'Panorama Sauna privata',nota:'Un’ora e mezza di sauna con vetrata sulla foresta. Prenotata.'},
   {ora:'19:00',nome:'Cena in struttura',nota:'Pensione completa.'},
   {ora:'20:00',nome:'Caccia all’aurora in auto',nota:'Con la guida, verso il cielo più buio. Prenotata; cancellabile fino alle 17 del giorno stesso se il cielo è coperto.',badge:'AURORA'},
 ]},
 {id:'g6',data:'Lunedì 8 dicembre',titolo:'Husky, kart e ghiaccio',zona:'Aurora Village',aurora:true,mappa:false,colore:'#59d9ff',
  partenza:{ora:'colazione',luogo:'auroravillage',nota:'Tutto a pochi passi dalla suite: giornata piena senza muovere l’auto.'},
  tappe:[
   {ora:'10:30',nome:'Husky Safari, 2 ore',nota:'Si guida la slitta in due, a turno. Prenotato.'},
   {ora:'13:00',nome:'Pranzo in struttura',nota:'Pensione completa.'},
   {ora:'15:00',nome:'Ice Karting',nota:'Kart sul ghiaccio. Prenotato.'},
   {ora:'17:00',nome:'Wood Sauna e bagno nel ghiaccio',nota:'Sauna a legna privata e tuffo nel buco nel lago. Lo slot delle 15 non c’era: alle 17 è anche più bello, è già notte. Prenotata.'},
   {ora:'20:00',nome:'Cena e aurora dalla suite',nota:'Sera libera: il tetto di vetro fa il resto.',badge:'AURORA'},
 ]},
 {id:'g7',data:'Martedì 9 dicembre',titolo:'Ritorno a Roma',zona:'Ivalo → Roma',mappa:true,colore:'#8b93a8',
  partenza:{ora:'07:45',luogo:'auroravillage',nota:'Colazione presto e si parte: 290 km fino all’aeroporto, 3 h 45 senza soste. Con meteo incerto partire alle 7:15.'},
  tappe:[
   {ora:'09:45',luogo:'sodankyla',nota:'Sosta veloce, se serve.',drive:'130 km · 1 h 30'},
   {ora:'11:45',luogo:'rvnapt',nota:'Riconsegna auto Alamo entro le 12. Check-in chiude alle 12:30: il margine è di 45 minuti.',drive:'160 km · 2 h'},
   {ora:'13:15',nome:'Volo AY0542 Rovaniemi → Helsinki',nota:'Atterraggio alle 14:40, scalo di 45 minuti: bagaglio imbarcato fino a Roma.'},
   {ora:'15:25',nome:'Volo AY1763 Helsinki → Roma',nota:'Atterraggio a Fiumicino alle 17:55.'},
 ]},
];

/* ---------- CHECKLIST ----------
   L'`id` di ogni voce è la chiave con cui la spunta viene salvata
   nel browser: non cambiarlo dopo la pubblicazione. */
const CHECKLIST = [
 {gruppo:'Prenotazioni', nota:'Quello che manca per chiudere il programma.', voci:[
   {id:'pren-tokkana', t:'Tokkana Reindeer Farm · 4 dic ore 12:30', scad:'in attesa',
    n:'Email inviata ad anu@tokkanareindeer.com per visita, slitta e pranzo per 4. Se non rispondono entro 2 giorni: WhatsApp +358 40 577 5998.'},
   {id:'pren-cena4', t:'Cena del 4 dicembre a Levi', scad:'subito',
    n:'L’unica serata ancora senza tavolo. Si arriva da Tokkana verso le 16: un posto in centro a Sirkka, a piedi dalla casa.'},
   {id:'pren-motoslitta', t:'Motoslitta a Levi · 6 dic', scad:'subito',
    n:'Levi Tours, Classic Wilderness Trail. I tour del mattino non ci sono tutti i giorni: scegliere lo slot e prenotare.'},
   {id:'pren-skipass', t:'Skipass e noleggio sci per il 5', scad:'prima di partire',
    n:'Online su levi.skiperformance.com: a dicembre conviene arrivare con tutto già prenotato.'},
   {id:'pren-arctic', t:'Arctic Restaurant · confermare l’orario del 3',
    n:'Atterriamo alle 21:05, in centro verso le 22: verificare che il tavolo regga.'},
   {id:'pren-caparra', t:'Aurora Village · autorizzare la caparra del 50% sulle attività', scad:'subito',
    n:'Katariina chiede di addebitare la caparra sulla stessa carta della prenotazione; il saldo si paga all’arrivo.'},
 ]},
 {gruppo:'Logistica', nota:'Le cose noiose che salvano il viaggio.', voci:[
   {id:'log-parcheggio', t:'Parcheggio a Fiumicino dal 3 al 9', scad:'entro fine novembre',
    n:'Lungo termine in aeroporto, parcheggio esterno con navetta, oppure farsi accompagnare. Decidere e prenotare.'},
   {id:'log-assicurazione', t:'Assicurazione viaggio con annullamento', scad:'subito',
    n:'Voli e Aurora Village sono entrambi non rimborsabili.'},
   {id:'log-auto', t:'Auto Alamo · documenti',
    n:'Patente italiana basta. Carta di credito del guidatore per il deposito. Chiedere gomme chiodate al banco.'},
   {id:'log-contanti', t:'Carta senza commissioni estere',
    n:'In Finlandia si paga tutto con carta; contanti quasi inutili.'},
   {id:'log-esim', t:'Roaming',
    n:'Finlandia è UE: il piano italiano vale senza costi extra.'},
 ]},
 {gruppo:'Valigia artica', nota:'A Lohiniva e Ivalo si va sotto i −20 °C.', voci:[
   {id:'val-termico', t:'Intimo termico in lana merino, 2 set', n:'Lo strato che conta davvero.'},
   {id:'val-piumino', t:'Giaccone pesante + pile', n:'Per le attività Aurora Village e Tokkana forniscono tute termiche, ma sotto serve il proprio strato.'},
   {id:'val-scarponi', t:'Scarponi impermeabili, suola spessa', n:'Più calze di lana. I piedi sono i primi a soffrire.'},
   {id:'val-guanti', t:'Guanti doppi: sottoguanto + moffola', n:'Con le moffole non si usa il telefono: meglio sapere in anticipo.'},
   {id:'val-testa', t:'Berretto, scaldacollo, passamontagna', n:'Per la motoslitta e la slitta con gli husky il vento fa male.'},
   {id:'val-costume', t:'Costume e ciabatte', n:'Tre saune in tre giorni, più il bagno nel ghiaccio.'},
   {id:'val-sci', t:'Abbigliamento da sci per il 5 e il 6', n:'Casco e maschera si noleggiano a Levi.'},
   {id:'val-powerbank', t:'Powerbank', n:'Al freddo le batterie dei telefoni muoiono in fretta: tenerli in una tasca interna.'},
   {id:'val-scaldamani', t:'Scaldamani usa e getta', n:'Per la caccia all’aurora: si sta fermi al buio per ore.'},
   {id:'val-crema', t:'Crema viso grassa e burrocacao', n:'Il freddo secco spacca la pelle.'},
   {id:'val-ramponcini', t:'Ramponcini da scarpa', n:'I marciapiedi di Rovaniemi e Levi sono lastre di ghiaccio.'},
 ]},
 {gruppo:'Il giorno della partenza', nota:'Mercoledì 3 dicembre, prima di uscire di casa.', voci:[
   {id:'gx-documenti', t:'Carte d’identità e carte di credito'},
   {id:'gx-carte', t:'Carte d’imbarco Finnair sul telefono', n:'Prenotazione 8KDHAI.'},
   {id:'gx-conferme', t:'Conferme di hotel, auto e Aurora Village salvate offline'},
   {id:'gx-giacca', t:'Giacca pesante nel bagaglio a mano', n:'A Rovaniemi si esce dall’aeroporto alle 21:30 a −10 °C.'},
 ]},
];
