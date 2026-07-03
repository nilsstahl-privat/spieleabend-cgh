# Spieleabend, Erobere die Christusgemeinde Hemmingen

## Was ist das

Vier Seiten, die zusammen den Spieleabend digital steuern:

- `regie.html`, die Steuerzentrale, läuft auf deinem Laptop
- `praesentation.html`, für den Beamer
- `team.html`, öffnet jedes Team auf seinem eigenen Handy
- `index.html`, kleine Startseite mit Links zu den drei Ansichten

Alle drei sind über deine Firebase Realtime Database live miteinander verbunden.

## Deployment auf GitHub Pages

1. Repository ist bereits angelegt: `https://github.com/nilsstahl-privat/spieleabend-cgh`.
2. Alle Dateien aus diesem Ordner in das Repository hochladen (`index.html`, `regie.html`, `team.html`, `praesentation.html`, `shared.js`, `brand.css`, `dreibein-video.mp4`, `qr-codes/`).
3. Unter Repository-Einstellungen, Pages, als Quelle den `main`-Branch und den Root-Ordner auswählen.
4. Nach ein bis zwei Minuten ist die Seite unter `https://nilsstahl-privat.github.io/spieleabend-cgh/` erreichbar.
5. Den Link zu `team.html` als QR-Code an die Teams weitergeben, den Link zu `regie.html` für dich, den Link zu `praesentation.html` auf den Beamer-Rechner.

## Firebase Realtime Database einrichten

1. In der Firebase Console, Build, Realtime Database, Datenbank erstellen, Region `europe-west1`.
2. Für den Abend reicht der Testmodus. Für mehr Sicherheit ohne Zeitlimit kannst du danach folgende Regeln einsetzen, sie erlauben Lesen und Schreiben ohne Login, was für einen internen Spieleabend ausreicht:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

## Vor dem Abend testen

1. `regie.html` und `praesentation.html` auf zwei Geräten öffnen.
2. Mit zwei, drei Handys `team.html` öffnen, Farben wählen, Namen eintragen, Prios festlegen.
3. Einmal jedes Spiel testweise durchklicken, damit sich alle Regie-Handgriffe vertraut anfühlen.
4. Am Ende in der Regie den Button, um Teams zu entfernen, nutzen, um die Testteams wieder zu löschen, bevor der echte Abend startet.

## Bekannte Grenzen dieser ersten Version

- Beim Taste Test werden Tippfehler bis zu drei Buchstaben automatisch als richtig erkannt, alles darüber muss die Regie manuell als richtig markieren.
- Beim Bobby-Car-Rennen wird die Gesamtplatzierung automatisch aus allen erfassten Zeiten berechnet. Beim Numbers Game und den KI-Songs berechnet das Tool die Rundenpunkte automatisch, die Regie bestätigt die Gesamtplatzierung am Ende mit einem Klick.
- Das Quiz ist jetzt digital, mit den 14 Fragen aus eurem Liebenzell-Dokument, automatischer Auswertung und Live-Punktestand in der Regie.
- Alles läuft ohne Login, jeder mit dem Link kann grundsätzlich mitschreiben, das ist für einen internen Abend im Vertrauenskreis okay, aber kein Datenschutzkonzept für den offenen Einsatz.

## Dreibein-Video

`dreibein-video.mp4` liegt bei und wird automatisch auf der Präsentation gezeigt, sobald die Regie bei "Dreibein bauen" auf "Regeln zeigen" schaltet, mit fest eingestellter 1,5-facher Geschwindigkeit. Die Datei ist rund 63 MB groß, das liegt innerhalb von GitHubs Datei-Obergrenze von 100 MB, macht das Repository aber etwas schwerer, ein normaler Upload über die GitHub-Weboberfläche oder git funktioniert trotzdem problemlos.
