/* ============================================================
   MISSIONE ECLISSI · dati del viaggio
   Foto e valutazioni: Google Maps (link diretto per le recensioni complete)
   ============================================================ */

const LUOGHI = {
  hotel1:{
    nome:"Universal Grand León & Spa", lat:39.32066, lng:2.98870,
    rating:4.6, nrec:571, orari:"Check-in dalle 15:00",
    punti:[
      "Cinque stelle fronte mare a Colònia de Sant Jordi, rinnovato di recente",
      "Spa con sauna, bagno di vapore e piscina interna riscaldata",
      "Sentiero costiero davanti all'hotel, perfetto per la corsa all'alba",
      "Il paese con i ristoranti del porto è a 10 minuti a piedi"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZOmYM5PDngTGvf3tarSvhkf3gZH1VX8uhWqfyocMefbbwpcOXTWJ-qGj6m59UpLLuy37HL22P---dhdM7YFSQC5r7ehv736hNA4bzwimAZgxqhWqbPy0KHWS7w4hiuK6ocBKWq7HPSUpYcmfx8=s4800-w800-h600",c:"Universal Grand León & Spa"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZPn_sJft_RKzbwNMqjsD0TnfUzeX35ha_StV6u7bjmNhOJ9MTDSa_Q7PXQvjUJjnuimteQIObWGMF4dcZRUTZw1FURFLWkJGO0QkKYI-y1x0BtfB7M7F7ZKzwXcis_wbwRFSAcfrm_kSPrzNw=s4800-w800-h600",c:"Universal Grand León & Spa"}
    ]
  },
  calomoro:{
    nome:"Caló des Moro", lat:39.31361, lng:3.12140,
    rating:4.6, nrec:9212,
    punti:[
      "Una delle calette più fotografate delle Baleari: acqua da sogno tra due falesie",
      "Parcheggio lungo la strada + 20 minuti a piedi con discesa ripida",
      "Pochissima sabbia: ci si sistema sulle rocce, meglio arrivare prestissimo",
      "Nessun servizio: acqua e snack vanno portati"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDH6JpDZ79R-69GRjGWJY28yT-rWMrCJ88_nBoMv1fALi6BvITHiaNwM5nqYc3PhVtL3uP_xCrdYJ0SGTpgcK_WG5j4zIBTSgFUL0zl4FQAvNF0Yfbfy0BeeCbalUru0Bx5N5LSMn6zTVwNELQX7JJQ1A=s4800-w800-h600",c:"Pedro Simoes · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjAfB_4XEDSuaOxczDyLl2TzK_Pf5KBcCyJmuWbFsGm4dVskcxRKTDEi0Wdm0WuCv7vn7mRPZaDFWSAk-xBhR2wNlrFBQj-YUOCWqQgOqpFvkOJV4ac1XalxDz9MV_lNO30G0VA7J-JIK46s1w=s4800-w800-h600",c:"JenniferMG BJM · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjCVw4Awz4j-iliIMm61a9VErApLUN3T5I7P9wqhwuXz47du8X2DIasBdteZ0FVIn3fWqSyFbSV8cSViUl3utlYrmyIaSnKFEspz7Jn8uMrGrbKwkLhEHLUnM7Zkv1tTLLJuinGZD7Oll2p4PGY=s4800-w800-h600",c:"Fabio Bartolini · Google Maps"}
    ]
  },
  salmunia:{
    nome:"Cala s'Almunia", lat:39.31260, lng:3.11964,
    rating:4.6, nrec:1509,
    punti:[
      "Caletta selvaggia con piscina naturale e tuffi dagli scogli",
      "Si scende per circa 200 gradini ripidi: scarpe comode",
      "Ottima per lo snorkeling, con una grotta nascosta da esplorare",
      "Attenzione agli scivoloni sulle rampe bagnate"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZO91TPlvQsP8xPG3K4Aj1rGezwW4Kw9pCPnLG8EwdhnOqR25ojk1uCGGdq7mPOPCKbVlwSHFaGUqWV2UFdvWOAImu1nanlX0BVtFDTXhg1LCP3Oh3ehSY3jurXzj5k2hz0kI1CVi7FRoBjh=s4800-w800-h600",c:"Elisheva · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZOJ5-1IPjvU05cx62t2Wu6hiHhlJzDlbo95CUZN4jXbdGCscEq0bNV4erBpir_LFKacpzUGFIWvqTH3HljJUgdvHR8sjeun8e1HdxG_kjlcgOlPBirvtF5FgTssosrGIFzEHmHHutTLMnWeyQ=s4800-w800-h600",c:"Carlos Mena · Google Maps"}
    ]
  },
  llombards:{
    nome:"Cala Llombards", lat:39.32363, lng:3.13840,
    rating:4.4, nrec:3232,
    punti:[
      "Sabbia vera, acqua cristallina e un piccolo beach bar",
      "Dai terrazzamenti di roccia in fondo alla baia si può saltare in acqua",
      "Lettini e ombrelloni contesi: si conquista tutto arrivando presto",
      "Piccolo ristorante direttamente in spiaggia (per pranzo va prenotato)",
      "Parcheggio vicino alla spiaggia piccolo, altrimenti si lascia in paese"
    ],
    foto:[]
  },
  drac:{
    nome:"Cafè Drac", lat:39.33036, lng:3.14728,
    rating:4.2, nrec:1010, orari:"Mer 12:00–23:00 · Dom 9:00–23:00",
    punti:[
      "Terrazza sospesa sulla scogliera di Cala Santanyí, vista che vale il viaggio",
      "Gambas, finger food fresco e drink ghiacciati a prezzi onesti",
      "Personale gentilissimo, atmosfera da fiaba (uccellini ladri inclusi)",
      "Costume sotto i vestiti: dopo pranzo ci si tuffa direttamente in cala"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNYMeuVFBy-wP-bK2pz7MxpswfP8fHMPjVgcQ67F93SvvS32qlSMEdXsjj7pn1ViYaMTwXCSgi05RUy8VX19jgPPOWHGWfLunnRKirzJaUuIeqkY1xFFmYU5O7SbRBcVmQBa9XTNXs3RZ2A=s4800-w800-h600",c:"Patrick Haendly · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNAFx9J4xswlr-gmBHHDezKGrWD7pmQmfV_5GKF8vUVd6jAlQSyJP98rXxKgr9or72NG8zAWh3ODaotq7KUEOxCdD1bc3crumzWcHbwdBx7y8dU_OStQBLoeKf_y-SwK4UAxvXTg8ujoSfrbgv7_pSJbw=s4800-w800-h600",c:"Martine Bore · Google Maps"}
    ]
  },
  estrenc:{
    nome:"Es Trenc", lat:39.34456, lng:2.98459,
    rating:4.1, nrec:13845,
    punti:[
      "Chilometri di sabbia bianca e acqua turchese: la spiaggia caraibica dell'isola",
      "Dentro un parco naturale, ottima anche per il birdwatching",
      "Zero ombra naturale: ombrellone obbligatorio in agosto",
      "Parcheggi pieni e cari in alta stagione: noi ci arriviamo in 10 minuti dall'hotel"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNaKQebRDzk1606wrK09iWVbKVyxMrFQEsQrC1UKqimG39__j-XduXrnLymTz9_nt9pJGmpDmVxoTrfQdGWxprhvuyJO6b61ZvToGhcokYj5GZhDL8vRA6SuVxX7xhH5NEPfgMcS07y1se4e2Q=s4800-w800-h600",c:"Fabio Ferraz · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZOCrdkQMkmBWYft7eAK9FbiAqXXytxyufPB5fcg0FdsPk50rX16N74Xmh-A0JOH1bzN_wLv8BVs1L9dit1RPPScyAMeqMw8ake-fHEDtBdQFGiccV4B3JeH_xBFAwdAZl_Ezkyq8JDH_OWr=s4800-w800-h600",c:"Julián Picco · Google Maps"}
    ]
  },
  amarador:{
    nome:"Platja de s'Amarador", lat:39.34963, lng:3.18552,
    rating:4.6, nrec:222,
    punti:[
      "Sabbia bianca e acqua calma nel cuore del Parc de Mondragó",
      "Parcheggio ufficiale del parco a 5€, poi 5 minuti a piedi",
      "Fondale dolce, perfetta per nuotate lunghe",
      "Da qui parte il sentiero costiero verso Cala Mondragó"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjAaPnyJJKH76-OBRNATythy8PtTC_yyAqYShz3_FTAFTS5ozVmFONjFOBbMDctpxR7wHzmNnRBvhhk9AwzbzGyrelqlTRKXFqQqqeXPru8CMOiCG7V6QttbD59fDZTPdydVW24KfTWGj57DGMI=s4800-w800-h600",c:"Cyprien Fayolle · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjCv-KhGIrZoJgBDZo41z1C_xvavvlbc3CkTP0NryQOvWz2I12eGzCDxg4m0_NBKtlVpcpleB2zqcHpA8kpqhEZn0k74WsdrCqk_5d4zTaXgfrRdab30h1rbUM0OH5WOLuKj8t9NDvHraQqySw=s4800-w800-h600",c:"Patrick Naah · Google Maps"}
    ]
  },
  mondrago:{
    nome:"Cala Mondragó", lat:39.35214, lng:3.18836,
    rating:4.6, nrec:4989,
    punti:[
      "Turchese incorniciato dal parco naturale, tra le cale più amate dell'isola",
      "Sentieri panoramici sulle falesie ai lati della baia",
      "Chiosco in spiaggia per acqua e spuntini",
      "Navigatore: puntare al 'Mondragó parking', non alla cala"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNAq0mKLnKMMUg7BYyl8NZ79UR07SypQ9YIQoL1Gax6gWq34QQOv_4zKiXPIJXK-rSwlCZAJRnQKqtdywJY3WDd7dR1sPnV_BKTb3OIvRsxhIFDmZMbQrn4p683-8hJGQoAHShlpQNaLzWGJQ=s4800-w800-h600",c:"Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZPHvQVwnetESubEzzb2imHa4rvcMKo-0mySTuWegKziMVsEQWt7guS0vHmcVsjd17VnfWZhZGww6DGrwRTy1OhypIcXHRv6RygGDxKb28Pwj59JkXRydXSgAKzmRWphxREpQ7IH6aCUrcaqZwo=s4800-w800-h600",c:"Sergio Gómez · Google Maps"}
    ]
  },
  sanau:{
    nome:"Cala Sa Nau", lat:39.39321, lng:3.24726,
    rating:4.4, nrec:2769,
    punti:[
      "Baia piccola e riparata, mare piatto come una piscina",
      "Il chiringuito è il pranzo della giornata: pesce, burrata e musica live",
      "Bagnini, docce e servizi: comodità rare per una cala così",
      "Parcheggio grande ma sterrato; in alternativa lungo la strada"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZMtJz3T1EHSVcZp-gPojRYMjUFnMhD96PaFKtZFnd1_Ti9F3h4hDIDi-ULXUB-icweHsxRASDuUW8wIX9coclKU7eHErxXyesbrvU2li5SWLxwUnoMR4Z6wrSB92Ja2zHDoFKtqAd2RK6NyNg=s4800-w800-h600",c:"Matthias Metzger · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNPhczagdRrGjetxc0OoX4BEIg_siMJwaRfcT8QZvA0FXqRg-Erkt30RPwo_jgRIqlK5ov4583P5M5cQ_a4dXNKnx88zlkz_PMiRJYiNkAwhQ73lgJBn405_eOjbTNrzmha0uenWYAXZGHzXA=s4800-w800-h600",c:"O. Tannberg · Google Maps"}
    ]
  },
  esmeralda:{
    nome:"Cala Esmeralda", lat:39.37617, lng:3.23747,
    rating:4.6, nrec:1044,
    punti:[
      "Per molti la cala più bella della zona: acqua color smeraldo, sempre limpida",
      "Piccola e intima, senza lettini: si vive col telo",
      "Pini e rocce tutt'intorno, atmosfera tranquilla anche in agosto",
      "Caffetteria in cima e venditore di frutta fresca"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjBUa0nhQmV_EJA5MKg4PhCQmDQbOSZVBoSwuj2WgavFLYrBakHtuJOqmj8oBdtFEz6k_WLo66cViuhZ1uBV1uTxOLKpurgMsPALYXAhV-yy7RFkNFtnVgq7spCe3y7TKnnq7EeStw3AHoUwUZi5FY6JlQ=s4800-w800-h600",c:"Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjC-CO4EZ_dHbtjhPR7ccrNu7OFtXhcfH-g-XwrzX6cCf9Cz91QdhYIimjK-PU7BgOlqSfhmUDxeSnZpqaqJxqunHwPPn_t5gU354YbmbGipX_3tuYHI0avcQI3fe_vuOf-pCI0Vg5_S8-VP7hw=s4800-w800-h600",c:"Ambrose O'Neill · Google Maps"}
    ]
  },
  seaclub:{
    nome:"Sea Club · Cap Rocat", lat:39.47807, lng:2.72506,
    rating:4.4, nrec:510, orari:"Tutti i giorni 13:00–22:00",
    punti:[
      "Beach club dentro una fortezza ottocentesca a picco sul mare",
      "Ti accolgono al cancello e ti portano giù in golf cart",
      "Ogni tavolo ha vista sulla baia di Palma; il tramonto qui è teatro",
      "Calamaretti fritti e T-bone mallorquina tra i piatti più celebrati"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZP0fIRpfhMGluCav7h2iM0znut3ioa_Zbo1kVcVxauqtKbCmZCll4RSQ8pMXbTXjqRT-YfNPl2fodVDFBI6i5Iq2vCr-b8338G6O7A0b2Dpq_rGKdKPNXpJzu_Y1RVbWRjP83mrZVloNQcLbfc=s4800-w800-h600",c:"Sea Club, Cap Rocat"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZMyI7PcWpigXuBB-h2OsAJr7muY8SjjWSBk_IvywDyICdcm970ayA1r2ebCJY_BWzZqX83aOoZ4_xRL9szVqw8kXpLyXBhZvtlKcfoRK2fufrexcTihGjg7c-E78V96SBpOGlG6mbFFAIT-uvrRe6jT5w=s4800-w800-h600",c:"Sea Club, Cap Rocat"}
    ]
  },
  cattedrale:{
    nome:"Cattedrale di Palma · La Seu", lat:39.56743, lng:2.64830,
    rating:4.7, nrec:65963, orari:"Lun–Ven 10:00–17:15 · Sab 10:00–14:15",
    punti:[
      "Il gotico sul mare: uno dei rosoni più grandi d'Europa",
      "La salita alle terrazze (145 gradini a chiocciola) regala Palma dall'alto",
      "Biglietti online in anticipo: le code in agosto sono serie",
      "La luce migliore sulle vetrate è al mattino; quella sulla facciata, al tramonto"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDctn5tq1odxovK3FzR3P8NII2zwxQsBpa8IsK8Y4MB71gulkxwSKPH70Y3TSLEyLnw1rVbnhxxx9sFKWZ_aYjpq6NK4be7Ld2_eABrNgmXx3N2gyxNa4tiITRSzIzjWiPdeAJ2MY3s-Lfigg=s4800-w800-h600",c:"Lizz Cuellar · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDWexIcNKZuL6q4_MyF3Dnh6CzhPjfKS_qXG3MUN55_xVWyTt363objkkeljfa1dEenN-sWE9DsbWfDygTA4zV-rQ1I2uvzXkX2ZqQJIX1SmdfAMlCPdXeGHhBSqZqVxxFqf0ZW9c8_GMxy1Q=s4800-w800-h600",c:"Juan Ramón Picornell · Google Maps"}
    ]
  },
  savinya:{
    nome:"Agroturismo Sa Vinya des Convent", lat:39.71602, lng:2.91659,
    rating:4.6, nrec:223, orari:"Check-in dalle 14:00",
    punti:[
      "Finca tra i vigneti alle porte di Inca, ai piedi della Tramuntana",
      "Piscina tra gli ulivi e colazione mallorquina fatta in casa",
      "Producono il proprio vino: degustazione in cantina da prenotare",
      "Maria e Xavier, i proprietari, sono una miniera di consigli locali"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNoM0NLM8w5Rkyb9CNVmm-7NUk-jneagHJ-oUZOiBpZATKZhJCjdt2kXxqRRIXdhNV06g8JZ_yO_aSPiSdOup8__gwo7Dtt3CNW5ItLotsA7wm-q11zLb_gvulz1VV5OCIMAUS5rKexojJB-A=s4800-w800-h600",c:"Marc Winter · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZMtQ2rDgtVFhLxzkQEBJWDDV9xL2gIed1hD5gYn454qkGlZq7FBIHgg5PIm3_Qjm38Er3mTfqI4R_3wst_g5shlTyQgIcsi5l6TAxberuV0wnhU5fiHl6ZhtExEnFsral6yBi9l-huHV8iXBGc=s4800-w800-h600",c:"Johannes Tschofen · Google Maps"}
    ]
  },
  valldemossa:{
    nome:"Valldemossa", lat:39.70996, lng:2.62151,
    rating:4.8, nrec:286,
    punti:[
      "Borgo di pietra arrampicato sulla Tramuntana, il più romantico dell'isola",
      "Qui svernarono Chopin e George Sand, alla Cartuja",
      "Rito obbligatorio: coca de patata con il caffè in piazza",
      "Parcheggi a pagamento intorno al centro, arrivare presto"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjCe-WBzJ0R_S7NpjHEIZUYP1D1JcuFmvRk6jAlZB5hj50ZVY-g5qrKIkrCuFWLcxC50arjID9EOUfKrKhmcPE6_IC9bMvLwFv19IhKdJMfeqAlcEqo6By-1Ed7AfIkg0gcTPJIn6CuqnXMIMw=s4800-w800-h600",c:"Daniel Ski · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDQMDzWhdJErl4W-5Gx6bNnBhVsxFS8wtOfms_nv40S9qGuDLm5UVVpZKFtppqrd4LLsZEevFuYGePpy15-shJqO6wYgl4WvtYwXHzyHbF9od2OX9kEZT8IwkidrATkuhXXpbRjEJYmOHNuhtc=s4800-w800-h600",c:"Harald Höfler · Google Maps"}
    ]
  },
  patro:{
    nome:"Ca's Patró March", lat:39.76022, lng:2.64093,
    rating:4.0, nrec:2229, orari:"Tutti i giorni 12:00–17:00 (solo pranzo)",
    punti:[
      "Tavoli scavati nella scogliera di Cala Deià, a un metro dal mare",
      "Reso celebre da The Night Manager: il tavolo più conteso di Maiorca",
      "Pesce del giorno: vongole, chipirones, gamberi e paella di mare",
      "Prenotazioni online: aprono a mezzanotte, 10 giorni prima esatti",
      "Si parcheggia in alto e si scende a piedi; bagno in cala prima del caffè"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNhyhpc9kD6bDxJXVkqGr6z24futjp6cO07uLRRI-C7HZj3qCXN1PDbyEI_aAp3p4dEbSiaXLSBW0UBZPSRN-mYnlqi3vLJo2cxnszd8t9EnX1S5A7aHHWN9Y9saSTP8tcJzWkUgaGy82hURmQ=s4800-w800-h600",c:"Ama Woo · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZPYWNubgC49RVIhSBiH9I37w_IVBkIV5iNvkdDoVvbH4xv11RFoLUjrMpKjtcqLvKk35i1_3lHjhVZONFDKA1-x8HENT_DluN0KY9MwWTe947b8v09O4NdFHXW5xBbYruy4ZTV5G8llPlK8vdU=s4800-w800-h567",c:"Ca's Patró March"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNpXpJIwi7xu528j0mAcA7nveFno88pjrtQxknIYSNlY0ure9S0pYNRNaiZNwIteKnGr_tlkoXfNAiH6PYREJVdXJ6hRb9vGjIO1GoIb6PkkpMl11jEqcwU2fbZEdo_kvhpPZkhJdyYUmeuDa5gQgyFeQ=s4800-w800-h600",c:"Snack Queen · Google Maps"}
    ]
  },
  foradada:{
    nome:"Mirador de Sa Foradada", lat:39.75196, lng:2.62913,
    rating:4.6, nrec:1276, orari:"Sempre aperto · parcheggio a pagamento",
    punti:[
      "La roccia forata che si allunga nel mare: il punto tramonto più famoso dell'isola",
      "Orizzonte ovest completamente libero sul mare: perfetto per l'eclissi",
      "Parcheggio piccolo che al tramonto si riempie: il 12 agosto, molto prima",
      "Terrazza-bar sul ciglio della falesia per l'attesa",
      "⭐ 12.08 · parziale 19:38 · TOTALITÀ 20:31 (1'36\") · fine 20:49"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZNMXC1YKMqXnA1Mo9066CFCM8hnvPk5LHnN6r0GSh_4-MTyBrK93by8RdEQwnNakB8LoO_v5M6oRoTgmZyBV9IfF5gBx_bcCpNjIHVmSE-AElovIhWsYAs3vQnfjjEocUNpWV9jEJHhqAyHjQ=s4800-w800-h600",c:"Cristian RA · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZMXOJMZVlZ_qy3MDyn66r7XDTWjb1SBkfASr-TEQwhLjkwC8oAE_dE7XBoxGk9awF3I_dMjzG16wz8QlfV8UHDdjW_toZQ3yPi71CyCUGngbgY9WNJUAdwvCaNjNfrGltT4xVbhVMNpPwnEui4=s4800-w800-h600",c:"Rafael Aldana · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZPOsc3Zag83L5HbYkhHzoHFloKZxDlAnXmp0os3louwCmECI4hR4UhZED7QhXjidnaepcpjebsJUVYlPz6_xg68StA7m66tQcsDv0QM1eMNePq2j7Pov7fkUK3H42TKtZReziQzdgs1ul2epg=s4800-w800-h600",c:"Ramon Allende · Google Maps"}
    ]
  },
  olivo:{
    nome:"El Olivo · Belmond La Residencia", lat:39.74937, lng:2.64898,
    rating:4.3, nrec:440, orari:"Tutti i giorni 19:30–21:30 (solo cena)",
    punti:[
      "Fine dining in un antico frantoio a Deià, candele e pietra viva",
      "Terrazza con vista sui monti che si accendono al tramonto",
      "Servizio impeccabile, carta dei vini importante",
      "La cena delle grandi occasioni: prenotare con largo anticipo"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZO7A_QIvDg5pw_PrX0r-Wfab6tatp9VtB6vbmNwYDMe_cQEdmg36JiFFnFNAPKSDCYvQ1-wliLDDBRojOr9FgqFkRCBAyjmfVpvVtSFE-Qu3-7abWGiuu8FAOvXgTb6VrepoF7o4sTvN_9hlV-CVFzH=s4800-w800-h600",c:"El Olivo"},
      {u:"https://lh3.googleusercontent.com/place-photos/AJRVUZP7qj9lbL6NhE3CLyIrye51X4iycCPGSufVqxsBw0JO6qX70xxwzFXk2RetPNAOUY50rUYvuo19ntaLKkoLjo27zeW82I0lb2UYkh0UXC67rCt14Zelmt06QwKOfO7PIsiZe7vzAEZJiyg8B-g1C1P30Q=s4800-w800-h600",c:"El Olivo"}
    ]
  },
  formentor:{
    nome:"Far de Formentor", lat:39.96145, lng:3.21230,
    rating:null, nrec:null,
    punti:[
      "Il faro all'estremità nord dell'isola, a picco su falesie di 300 metri",
      "La strada panoramica d'estate è chiusa alle auto: si sale in navetta da Port de Pollença",
      "Andare presto: la luce del mattino sulle falesie è la migliore",
      "Fermata intermedia al Mirador Es Colomer, da non saltare"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjA9Dl05lbeBdyaVQik1jr79DNjHV4AbyDPFfYdS642If3l8Toxg_gUyrHtHqAsyRWTxPurB1hpTirjIgqybt8jIRWgQZCMZFKy9UrAOM2NTkLJed0xt3CdpErIXI86-ZW6TW65j9tBPcB3z9qA=s4800-w800-h600",c:"Santiago Aguilera · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjCSlNi5qBnYIuA6xr603HV8IfDAAnqs3spy-IXrlRuVSIayvCyRDBISxv5DK5egBbKWisVpajKzcfd0kG6i4gKocm_yaKlgxd6AeQAStK6fAs6ePznczxv0sFMwvHNPZtv8ROHrL-Jpa2hQ=s4800-w800-h600",c:"Ana Velilla · Google Maps"}
    ]
  },
  muro:{
    nome:"Platja de Muro", lat:39.80892, lng:3.11823,
    rating:4.7, nrec:4947,
    punti:[
      "Sabbia bianca finissima e fondale basso per centinaia di metri",
      "Il molo di legno sull'acqua turchese è la foto simbolo di Maiorca",
      "Lettini e ombrelloni in abbondanza, con bar lungo tutta la spiaggia",
      "Il molo all'alba o al tardo pomeriggio: a mezzogiorno è assediato"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDXa5AMeIKj2FJRHgSO2w0Poa4ovSorgKZbAsywC0D_b0p6Nk3qz-l6ZGB8WLzo4x-wbpL4nH8N7HXFh6OJnxM0Ld7BGDv57Hs7a0iE1qP7FYD4-zjprD_OaDf5oOxA0VNA6A38cuR5Q9YXMA=s4800-w800-h600",c:"Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjDKHAeR7gDQg7K1OSlpWoRiAdpTqzFI85-q07jsdDVwPH9ygl_8L-XVsU5SRkmkAoE7ilaghLnIuvw2rWMZC90C0rBC_PMxMrOdwdoz_OKVLMsFd_09bwM-Pxd0zVPi8FxYPKzuNmXQGS7syg=s4800-w800-h600",c:"Google Maps"}
    ]
  },
  calasantvicenc:{
    nome:"Cala Sant Vicenç", lat:39.9218, lng:3.0546,
    rating:null, nrec:null,
    punti:[
      "Piccolo arcipelago di calette — Cala Barques, Cala Clara, Cala Molins — ai piedi delle falesie del Cavall Bernat",
      "Acqua limpidissima e la vista di scogliere tra le più scenografiche del nord",
      "Ristorantini e beach bar sulle cale: pranzo senza orologio",
      "Il giorno dell'eclissi: auto parcheggiata al mattino presto e ferma fino a sera"
    ],
    foto:[]
  },
  puigaguila:{
    nome:"Luogo X", lat:39.929999, lng:3.051346,
    rating:null, nrec:null, orari:"Salita ~1 h · ~200 m di dislivello · via Camí de ses Coves Blanques",
    punti:[
      "Il balcone dell'eclissi: dalla vetta la linea di vista a ovest-nord-ovest scavalca le falesie e finisce in mare aperto",
      "Verificato col modello del terreno (app Horitzó 2026 di AstroMallorca): massimo pienamente visibile, il Sole tramonta in mare alle 20:48",
      "La visibilità vale IN VETTA: dalla spiaggia e dal paese il rilievo copre il Sole",
      "Sentiero: prima il comodo Camí de ses Coves Blanques (il 'camí dels presos'), poi un tratto più ripido segnato da ometti",
      "Discesa al crepuscolo: frontali obbligatorie, scarpe chiuse, acqua e una felpa",
      "Attenzione a non confondere con l'omonimo Puig de l'Àguila di Capdepera, a 60 km da qui"
    ],
    foto:[]
  },
  porto:{
    nome:"Port de Palma · Estació Marítima", lat:39.55287, lng:2.62667,
    rating:4.2, nrec:59,
    punti:[
      "Terminal traghetti moderno, con sale d'attesa comode e prese di corrente",
      "Arrivare almeno un'ora prima della partenza per l'imbarco",
      "A due passi dal centro commerciale Porto Pi per l'ultima colazione"
    ],
    foto:[
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjBzpTn6H4bj0cMFoYZe7aSuSkEQONiMNjX0PXl6pK8qbSKu_Yipqf6ZUVnvULcnQiJKvAXCr0E2hk8bVJOmUpJZwlEj-YWFzxiX9hShPBsf0ZjwmVHSFeZDwJBCcYCs5O5Rs4WNfeCdukPk=s4800-w800-h600",c:"Mattia Lumini · Google Maps"},
      {u:"https://lh3.googleusercontent.com/place-photos/AG9NLjBHIu0PFaSQaPoFuzkphFJs76V5DIMKZtStyF7kVXeYXut7y_UJe3pt32EXH9TO2-iIbWd5Fpo7ZM5qFKYe6U1DahVcC5l6z1B7XUmWOlc1dt_DWXi9Mau2Xv1u_QYv7zXOYe5BXvbVKOstG6o=s4800-w800-h600",c:"Magdolna Bordán · Google Maps"}
    ]
  }
};

/* ---------- GIORNI ----------
   Ogni giornata ha un punto di partenza (`partenza`), che apre mappa e racconto:
   può puntare a un luogo del catalogo (`luogo:'hotel1'`) oppure essere un punto
   libero (`nome` + `lat`/`lng`).
   `colore` è la tinta del giorno sulla mappa d'insieme in home.
   ------------------------------------------------------------ */
const GIORNI = [
 {id:'g1',data:'Sabato 8 agosto',titolo:'Si parte',zona:'Napoli → Sud',mappa:true,colore:'#e07a2f',
  partenza:{ora:'21:40',nome:'Aeroporto di Palma',lat:39.5517,lng:2.7388,nota:'Atterraggio, bagagli e ritiro dell’auto.'},
  tappe:[
   {ora:'19:45',nome:'Volo Napoli → Palma',nota:'Wizz Air, atterraggio 21:40, due bagagli in stiva. Ritiro auto: una BMW ci aspetta.'},
   {ora:'22:45',luogo:'hotel1',nota:'Base 1 · fronte mare a Colònia de Sant Jordi, tre notti.',drive:'~40 min dall’aeroporto'},
 ]},
 {id:'g2',data:'Domenica 9 agosto',titolo:'Le calette del sud',zona:'Santanyí',mappa:true,colore:'#0f8ea6',
  partenza:{ora:'08:00',luogo:'hotel1',nota:'Sveglia presto: sulle calette del sud vince chi arriva prima.'},
  tappe:[
   {ora:'08:30',luogo:'calomoro',nota:'Prima delle 9 o niente: parcheggio scarso e discesa ripida, ma quell’acqua ripaga tutto.',drive:'15 min dall’hotel'},
   {ora:'10:30',luogo:'salmunia',nota:'A piedi dalla precedente. Piscina naturale e tuffi dagli scogli.'},
   {ora:'11:45',luogo:'llombards',nota:'Sabbia, lettini, decompressione.',drive:'6 min'},
   {ora:'13:30',luogo:'drac',nota:'Terrazza sospesa su Cala Santanyí: gambas, Aperol e uccellini ladri di patatine.',drive:'5 min'},
   {ora:'16:30',luogo:'estrenc',nota:'Il Caribe di Maiorca a 10 minuti da casa. Zero ombra: ombrellone nostro.',drive:'25 min'},
   {ora:'19:30',luogo:'hotel1',nota:'Rientro in hotel: doccia e cambio senza fretta. Il vantaggio di avere la base a dieci minuti.',badge:'DOCCE',drive:'10 min'},
   {ora:'21:00',nome:'Cena a Colònia de Sant Jordi',lat:39.3163,lng:2.9926,nota:'Pesce fresco sul porto, a piedi dall’hotel.'},
 ]},
 {id:'g3',data:'Lunedì 10 agosto',titolo:'Mondragó + Cala d’Or',zona:'Parco naturale',mappa:true,colore:'#2e9e63',
  partenza:{ora:'08:30',luogo:'hotel1',nota:'Colazione in hotel, poi rotta a est verso il parco naturale.'},
  tappe:[
   {ora:'09:00',luogo:'amarador',nota:'Parcheggio "S’Amarador · Parc Mondragó" (5€), non fidarsi del navigatore fino in spiaggia.',drive:'25 min dall’hotel'},
   {ora:'10:30',luogo:'mondrago',nota:'Il nostro trekking: sentiero costiero tra le due cale, bagno a metà strada.'},
   {ora:'12:45',luogo:'esmeralda',nota:'Bagno nell’acqua più bella della zona. Nessun servizio: si vive col telo, ma il pranzo è a 10 minuti.',drive:'15 min'},
   {ora:'14:00',luogo:'sanau',nota:'Pranzo al chiringuito e pomeriggio qui: è l’unica cala della zona con lettini, bagnini e docce. Verso le 19 doccia e cambio, e si va a cena puliti.',badge:'DOCCE',drive:'10 min'},
   {ora:'20:00',nome:'Cala d’Or',lat:39.3705,lng:3.2299,nota:'Cena e serata: Eden e Garash The Terrace. Rientro in hotel in 30 min.',drive:'15 min'},
 ]},
 {id:'g4',data:'Martedì 11 agosto',titolo:'Trasferimento con stile',zona:'Sud → Inca',mappa:true,colore:'#8a5cc7',
  partenza:{ora:'11:00',luogo:'hotel1',nota:'Check-out: bagagli in macchina, si cambia anima dell’isola.'},
  tappe:[
   {ora:'13:00',luogo:'seaclub',nota:'Fortezza sul mare, ti portano giù in golf cart. È letteralmente sulla strada per Palma. Qui ci sono spogliatoi e docce: è il posto dove rimettersi in ordine prima della Cattedrale e della cena.',badge:'DOCCE',drive:'35 min'},
   {ora:'17:30',luogo:'cattedrale',nota:'La Seu nella luce dorata. Per l’interno biglietti online (chiude 17:15: nel caso, invertire col Sea Club).',drive:'25 min'},
   {ora:'20:30',nome:'Cena a Palma',lat:39.5696,lng:2.6502,nota:'Casco antiguo, cucina mallorquina.'},
   {ora:'22:30',luogo:'savinya',nota:'Base 2 · vigneti di Inca, tre notti. Maria è avvisata del nostro orario.',drive:'30 min'},
 ]},
 {id:'g5',data:'Mercoledì 12 agosto',titolo:'Il giorno dell’eclissi',zona:'Cala Sant Vicenç',eclisse:true,mappa:true,colore:'#d63f4a',
  partenza:{ora:'08:30',luogo:'savinya',nota:'Il giorno è questo. Rotta a nord: mezz’ora d’auto, poi la macchina non si tocca più fino a dopo l’eclissi.'},
  tappe:[
   {ora:'09:15',luogo:'calasantvicenc',nota:'Auto parcheggiata (presto: i posti finiscono) e giornata di mare tra Cala Barques, Cala Clara e Cala Molins. Pranzo senza orologio in una delle cale, pomeriggio pigro: le energie servono stasera.',drive:'30 min da Inca'},
   {ora:'18:45',nome:'Salita · Camí de ses Coves Blanques',lat:39.9214,lng:3.0517,nota:'Scarpe chiuse, zaino con acqua, felpa e frontali, occhiali in tasca. Circa 200 m di dislivello, un’ora con calma: prima il camí dels presos, poi il sentiero a ometti.'},
   {ora:'19:15',luogo:'puigaguila',nota:'In vetta per il primo contatto (19:37). Aperitivo da zaino durante la parziale: un’ora d’attesa con quella vista non è attesa, è preludio.',badge:'ORA X'},
   {ora:'21:45',nome:'Cena a Pollença',lat:39.8771,lng:3.0163,nota:'Discesa con le frontali (~45 min) e tavolo tardi a Pollença o Port de Pollença. Da prenotare: quella sera tutta l’isola cenerà tardi.',drive:'15 min'},
 ]},
 {id:'g6',data:'Giovedì 13 agosto',titolo:'Il nord',zona:'Formentor · Muro',mappa:true,colore:'#2472c8',
  partenza:{ora:'07:55',luogo:'savinya',nota:'Partenza all’alba: la navetta del faro e la luce del mattino non aspettano.'},
  tappe:[
   {ora:'08:30',nome:'Port de Pollença → navetta',lat:39.9086,lng:3.0810,nota:'La strada del faro d’estate è chiusa alle auto: si sale in bus navetta.',drive:'35 min da Inca'},
   {ora:'09:30',luogo:'formentor',nota:'Il faro in capo al mondo, a picco sul blu.'},
   {ora:'14:00',luogo:'muro',nota:'Sabbia bianca, fondale basso, il molo di legno da cartolina.',drive:'30 min'},
   {ora:'17:30',luogo:'savinya',nota:'Rientro alla base: doccia, cambio e degustazione del vino di casa tra i filari, con calma.',badge:'DOCCE',drive:'30 min'},
   {ora:'20:30',luogo:'olivo',nota:'La cena delle grandi occasioni, spostata qui dal giorno dell’eclissi: si arriva puliti e nella fascia giusta (le cene sono servite dalle 19:30 alle 21:30).',badge:'PRENOTARE',drive:'40 min'},
 ]},
 {id:'g7',data:'Venerdì 14 agosto',titolo:'Rotta su Ibiza',zona:'Palma → mare',mappa:true,colore:'#6b7c8a',
  partenza:{ora:'07:45',luogo:'savinya',nota:'Colazione veloce, valigie, si chiude il cerchio.'},
  tappe:[
   {ora:'08:45',luogo:'porto',nota:'Riconsegna auto e imbarco.',drive:'35 min'},
   {ora:'10:00',nome:'Traghetto per Ibiza',lat:39.5528,lng:2.6267,nota:'Capitolo due della missione. Si salpa.'},
 ]},
];

/* ---------- CHECKLIST ----------
   Gruppi di voci spuntabili. Ogni voce ha un `id` stabile: è la chiave con cui
   la spunta viene salvata nel browser (localStorage). Una volta pubblicato,
   cambiare un `id` significa perdere la spunta corrispondente.
   ------------------------------------------------------------ */
const CHECKLIST = [
 {gruppo:'Prenotazioni', nota:'Le mosse che decidono la missione.', voci:[
   {id:'pren-patro', t:'Ca’s Patró March · pranzo, giorno da decidere', scad:'dopo il briefing',
    n:'ATTENZIONE: il pranzo del 12 è saltato (l’eclissi si vede dal Puig de l’Àguila). NON prenotare per il 12. Le prenotazioni aprono online a mezzanotte esatta, 10 giorni prima del giorno scelto: deciso il nuovo giorno, sveglia puntata.'},
   {id:'pren-olivo', t:'El Olivo · cena gio 13, ore 20:30', scad:'al più presto',
    n:'Spostata dalla sera dell’eclissi: le cene sono servite solo fino alle 21:30 e il 12 saremmo arrivati all’ultimo minuto, col sale addosso. Il giovedì ci arriviamo freschi di doccia.'},
   {id:'pren-deia', t:'Cena a Pollença · sera dell’eclissi, ~21:45', scad:'entro luglio',
    n:'Dopo la discesa dal Puig de l’Àguila: tavolo tardi a Pollença o Port de Pollença. Quella sera tutta la zona cenerà tardi: senza prenotazione non si mangia.'},
   {id:'pren-seaclub', t:'Sea Club Cap Rocat · mar 11', scad:'entro luglio',
    n:'Day pass o tavolo: ad agosto senza prenotazione non si entra.'},
   {id:'pren-cattedrale', t:'Cattedrale di Palma · biglietti online', scad:'entro luglio',
    n:'Chiude alle 17:15: se il Sea Club sfora, invertire l’ordine delle due tappe.'},
   {id:'pren-celler', t:'Celler a Inca · serata libera',
    n:'Il celler è rimasto senza sera dopo lo spostamento di El Olivo: si può recuperare martedì 11 al posto della cena a Palma, o lasciar perdere.'},
   {id:'pren-degustazione', t:'Degustazione vino a Sa Vinya des Convent',
    n:'Da concordare con Maria e Xavier: producono il loro vino, si assaggia in cantina.'},
 ]},
 {gruppo:'Da comprare', nota:'Meglio adesso che a Palma il 12 agosto.', voci:[
   {id:'buy-occhiali', t:'Occhiali eclissi ISO 12312-2 × 2', scad:'subito',
    n:'Certificazione obbligatoria per tutte le fasi parziali. Ad agosto saranno introvabili ovunque.'},
   {id:'buy-filtro', t:'Filtro solare per fotocamera',
    n:'Senza filtro il sensore si rovina. Durante la totalità (90″) invece si guarda e si scatta a occhio nudo.'},
   {id:'buy-scarpe', t:'Scarpe da scoglio',
    n:'Caló des Moro e s’Almunia sono rocce e gradini ripidi: i piedi ringraziano.'},
   {id:'buy-ombrellone', t:'Ombrellone per Es Trenc',
    n:'La spiaggia non ha un filo d’ombra naturale.'},
   {id:'buy-powerbank', t:'Powerbank e supporto da auto',
    n:'Mappe, foto e countdown mangiano batteria.'},
 ]},
 {gruppo:'Da verificare', nota:'I dettagli che possono far saltare il banco.', voci:[
   {id:'ver-auto', t:'Riconsegna auto al porto di Palma', scad:'entro luglio',
    n:'Il traghetto parte alle 10:00 di ven 14: confermare col noleggio che la riconsegna al porto sia possibile e a che ora apre l’ufficio.'},
   {id:'ver-navetta', t:'Navetta Cap de Formentor · orari 2026',
    n:'D’estate la strada del faro è chiusa alle auto private di giorno: si sale in bus da Port de Pollença.'},
   {id:'ver-checkin', t:'Check-in online Wizz Air', scad:'da 48h prima',
    n:'Volo di sab 8, 19:45 da Napoli. Due bagagli da 20 kg in stiva.'},
   {id:'ver-traghetto', t:'Biglietti traghetto Palma → Ibiza',
    n:'Ven 14 ore 10:00. Al terminal almeno un’ora prima.'},
   {id:'ver-meteo', t:'Meteo e nuvolosità · dal 5 agosto',
    n:'Se il 12 il cielo a ovest si annuvola, serve un piano B lungo la costa.'},
 ]},
 {gruppo:'Il giorno X', nota:'Mercoledì 12 agosto · totalità alle 20:30, dalla vetta del Puig de l’Àguila.', voci:[
   {id:'x-arrivo', t:'Auto a Cala Sant Vicenç al mattino, in vetta entro le 19:15',
    n:'Parcheggio conquistato presto e mai più mosso. Partenza a piedi 18:45, salita ~1 h: in cima per il primo contatto delle 19:37.'},
   {id:'x-kit', t:'Kit pronto: occhiali, acqua, felpa, frontali',
    n:'In vetta al tramonto rinfresca e la temperatura crolla durante la totalità. Le frontali sono per la discesa al crepuscolo: senza, non si scende.'},
   {id:'x-telefono', t:'Telefono carico e memoria libera',
    n:'Primo contatto 19:37 · totalità 20:30:19 → 20:31:49 · il Sole tramonta in mare, ancora eclissato, alle 20:48.'},
   {id:'x-guardare', t:'Durante la totalità: occhiali giù, e guardare',
    n:'90 secondi. Nessuna foto vale quanto vederla davvero.'},
   {id:'x-vetta', t:'Verificare il punto in vetta con l’app Horitzó 2026',
    n:'horitzo2026.com (AstroMallorca): coordinate 39.9300, 3.0513 → "màxim visible". La visibilità vale in vetta, non dalla spiaggia. E occhio all’omonimo Puig de l’Àguila di Capdepera: quello è a 60 km.'},
 ]},
 {gruppo:'Documenti', voci:[
   {id:'doc-identita', t:'Carta d’identità o passaporto'},
   {id:'doc-patente', t:'Patente per il noleggio',
    n:'L’intestatario della prenotazione dev’essere presente al ritiro, con la sua carta di credito.'},
   {id:'doc-tessera', t:'Tessera sanitaria europea (TEAM)'},
   {id:'doc-voucher', t:'Voucher hotel, auto e traghetto salvati offline'},
 ]},
];
