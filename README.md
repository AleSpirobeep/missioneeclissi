# Missione Eclissi · Mallorca 2026

Sito del viaggio 8–14 agosto 2026: itinerario giorno per giorno, mappe, schede dei luoghi
con foto e countdown all'eclissi totale del 12 agosto (totalità 20:31, Sa Foradada).

## Struttura

```
index.html      → pagina principale (hero, sommario, programma, checklist)
css/style.css   → stile
js/data.js      → dati del viaggio: giorni, tappe, luoghi, foto, valutazioni
js/app.js       → rendering, mappe Leaflet, scheda luogo, countdown
```

## Pubblicare su GitHub Pages

1. Crea un repository su github.com (es. `missione-eclissi`), pubblico.
2. Carica questi file (via web: **Add file → Upload files**, trascina tutto mantenendo le cartelle).
3. Vai su **Settings → Pages → Build and deployment**: Source = *Deploy from a branch*,
   Branch = `main`, cartella `/ (root)` → **Save**.
4. Dopo ~1 minuto il sito è su `https://TUOUSERNAME.github.io/missione-eclissi/`.

Da terminale, in alternativa:

```bash
cd missione-eclissi
git init && git add -A && git commit -m "Missione Eclissi"
git branch -M main
git remote add origin https://github.com/TUOUSERNAME/missione-eclissi.git
git push -u origin main
# poi attiva Pages da Settings → Pages
```

## Modificare l'itinerario

Tutto vive in `js/data.js`:
- `LUOGHI` → schede dei posti (nome, coordinate, valutazione, punti "da sapere", foto).
- `GIORNI` → le giornate; ogni tappa può puntare a un luogo (`luogo:'calomoro'`)
  oppure essere una voce semplice (`nome:'...'`, con `lat/lng` opzionali per la mappa).

## Note

- Mappe: Leaflet + tile CARTO (gratuiti, attribuzione inclusa). Nessuna API key richiesta.
- Le foto sono servite direttamente da Google Maps con credito all'autore; se una foto
  smette di funzionare, la scheda la nasconde automaticamente.
- Le valutazioni (es. 4.6 · 9.212 recensioni) sono una fotografia a luglio 2026.
