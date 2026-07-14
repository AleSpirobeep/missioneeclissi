# Missione Eclissi · Mallorca 2026

Sito del viaggio 8–14 agosto 2026: itinerario giorno per giorno, mappe, schede dei luoghi
con foto e countdown all'eclissi totale del 12 agosto (totalità 20:31, Sa Foradada).

Sito statico: nessuna build, nessuna dipendenza da installare. Si apre `index.html` e funziona.

## Le pagine

```
index.html      → home: hero, "in breve", mappa d'insieme di tutto il viaggio
programma.html  → i 7 giorni: punto di partenza, tappe e mappa di ogni giornata
luoghi.html     → catalogo delle schede, filtrabile per giornata
checklist.html  → prenotazioni, acquisti, verifiche e kit del giorno X
```

## Il codice

```
css/style.css   → tutto lo stile (tema chiaro; l'unica zona scura è l'hero)
js/data.js      → i dati del viaggio: LUOGHI, GIORNI, CHECKLIST
js/core.js      → funzioni condivise: mappe Leaflet, scheda luogo, countdown
js/home.js      → stelle dell'hero, countdown grande, mappa d'insieme
js/programma.js → le card delle giornate e le mappe giornaliere
js/luoghi.js    → griglia dei luoghi e filtri
js/checklist.js → spunte e avanzamento (salvati nel browser)
```

## Modificare il viaggio

Tutto vive in `js/data.js`:

- `LUOGHI` → le schede dei posti: nome, coordinate, valutazione, punti "da sapere", foto.
- `GIORNI` → le giornate. Ognuna ha una `partenza` (da dove si muove quel giorno) e le `tappe`.
  Una tappa può puntare a un luogo del catalogo (`luogo:'calomoro'`) ed eredita nome e coordinate,
  oppure essere una voce libera (`nome:'...'`, con `lat`/`lng` opzionali per finire sulla mappa).
  Il campo `colore` è la tinta con cui la giornata appare sulla mappa d'insieme.
- `CHECKLIST` → i gruppi di voci da spuntare. **Attenzione all'`id` di ogni voce**: è la chiave con
  cui la spunta viene salvata nel browser, quindi cambiarlo dopo la pubblicazione azzera quella spunta.

## Pubblicare su GitHub Pages

Repository: <https://github.com/AleSpirobeep/missioneeclissi>

Da **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
Branch = `main`, cartella `/ (root)` → **Save**.
Dopo circa un minuto il sito è su `https://alespirobeep.github.io/missioneeclissi/`.

## Note

- Mappe: Leaflet + tile CARTO Voyager (chiare, con il mare azzurro). Gratuite, attribuzione
  inclusa, nessuna API key richiesta.
- Le spunte della checklist vivono in `localStorage`: restano su quel dispositivo e su quel
  browser, non si sincronizzano tra telefono e computer.
- Le foto sono servite direttamente da Google Maps con credito all'autore; se una foto smette
  di funzionare, la scheda la nasconde automaticamente.
- Le valutazioni (es. 4.6 · 9.212 recensioni) sono una fotografia a luglio 2026.
