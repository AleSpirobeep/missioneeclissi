# Lapponia 2026 · 3–9 dicembre

Sito del viaggio in Lapponia: Rovaniemi, le renne di Tokkana, sci a Levi e due notti ad Aurora
Village (Ivalo). Programma giorno per giorno, mappe, schede dei luoghi, checklist e countdown
alla partenza (3 dicembre, 10:40, Fiumicino).

Sito statico: nessuna build, nessuna dipendenza da installare. Si apre `index.html` e funziona.

## Le pagine

```
index.html      → home: hero con l'aurora, "in breve", mappa d'insieme, mappa topografica
programma.html  → gli otto giorni (2 → 9 dicembre): partenza, tappe e mappa di ogni giornata
luoghi.html     → catalogo delle schede, filtrabile per giornata
checklist.html  → prenotazioni, logistica, valigia artica, giorno della partenza
```

## Il codice

```
css/style.css   → tutto lo stile (tema scuro: notte artica, aurora e ghiaccio)
js/data.js      → i dati del viaggio: LUOGHI, GIORNI, CHECKLIST
js/core.js      → funzioni condivise: mappe Leaflet, scheda luogo, countdown
js/home.js      → stelle e neve dell'hero, countdown grande, mappa d'insieme
js/programma.js → le card delle giornate e le mappe giornaliere
js/luoghi.js    → griglia dei luoghi e filtri
js/checklist.js → spunte e avanzamento (salvati nel browser)
mappa_lapponia.png → mappa topografica delle tre tappe (OpenTopoMap)
```

## Modificare il viaggio

Tutto vive in `js/data.js`:

- `LUOGHI` → le schede dei posti: nome, coordinate, punti "da sapere", orari.
- `GIORNI` → le giornate. Ognuna ha una `partenza` e le `tappe`. Una tappa può puntare a un luogo
  del catalogo (`luogo:'tokkana'`) ed eredita nome e coordinate, oppure essere una voce libera.
  `badge` mette un'etichetta (`DA PRENOTARE`, `DA CONFERMARE`, `AURORA`); `aurora:true` evidenzia
  la giornata.
- `CHECKLIST` → i gruppi di voci da spuntare. L'`id` di ogni voce è la chiave con cui la spunta
  viene salvata nel browser: cambiarlo dopo la pubblicazione azzera quella spunta.

## Pubblicare su GitHub Pages

Da **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
Branch = `main`, cartella `/ (root)` → **Save**.
Dopo circa un minuto il sito è su `https://alespirobeep.github.io/lapponia/`.

## Note

- Mappe: Leaflet + tile OpenTopoMap (rilievi e laghi, gratuite, attribuzione inclusa).
- Le spunte della checklist vivono in `localStorage`: restano su quel dispositivo e browser.
- Nessun prezzo nel sito: è il recap del viaggio, non delle spese.
