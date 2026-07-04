// ---------- Firebase ----------
const firebaseConfig = {
apiKey: "AIzaSyD7LfIwd0BEsMuho7cB8Ova2rZ9PjJQeN8",
authDomain: "spieleabend-cgh.firebaseapp.com",
databaseURL: "https://spieleabend-cgh-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "spieleabend-cgh",
storageBucket: "spieleabend-cgh.firebasestorage.app",
messagingSenderId: "1013809662720",
appId: "1:1013809662720:web:e2b558325b21ec5d36c1e5"
};
// ---------- Marke ----------
const BRAND = {
bg: "#F2F0ED",
ink: "#212222",
teal: "#6FC3C1",
yellow: "#FDE235",
taupe: "#B4A493",
};
// Acht Teamfarben, aufgebaut aus den fünf Markenfarben plus vier Abstufungen
const TEAM_COLORS = [
{ id: "teal", hex: "#6FC3C1", label: "Teal" },
{ id: "yellow", hex: "#FDE235", label: "Gelb" },
{ id: "taupe", hex: "#B4A493", label: "Taupe" },
{ id: "dark", hex: "#212222", label: "Dunkel" },
{ id: "teal-dark", hex: "#3F8E8C", label: "Petrol" },
{ id: "yellow-dark", hex: "#E8B800", label: "Gold" },
{ id: "taupe-dark", hex: "#8C7B68", label: "Braun" },
{ id: "teal-light", hex: "#A9DBD9", label: "Hellteal" },
];
// ---------- Taste Test Lebensmittel ----------
const TASTE_FOODS = [
"Erdbeere",
"Mozzarella",
"Tomate",
"Nutella",
"Erdnüsse",
];
// ---------- Quiz-Fragen, digital ----------
const QUIZ_QUESTIONS = [
{ category: "B.A. Evangelische Theologie", text: "Wie viele Deutsche lesen täglich die Bibel?", options: ["5 %", "1 %", "2 %", "10 %"], correct: 2 },
{ category: "B.A. Evangelische Theologie", text: "Wie viele Hapax Legomena gibt es im Neuen Testament?", options: ["1500", "3246", "2000", "4000"], correct: 1 },
{ category: "B.A. Theologie und Soziale Arbeit", text: "Was bedeutet subsidiärer Schutz?", options: ["Schutz für Flüchtlinge wegen Naturkatastrophen", "Schutz für Personen, die nicht offiziell als Flüchtlinge anerkannt sind", "Schutz für Menschen mit Migrationshintergrund", "Schutz für Asylbewerber aus wirtschaftlichen Gründen"], correct: 1 },
{ category: "B.A. Theologie und Soziale Arbeit", text: "Welcher Schriftprophet wird am frühesten datiert?", options: ["Jesaja", "Jeremia", "Amos", "Hesekiel"], correct: 2 },
{ category: "Theologie / Pädagogik im interkulturellen Kontext", text: "Wie heißt das Kind im reformpädagogischen Hauptwerk von Rousseau?", options: ["Max", "Emile", "Paul", "Leo"], correct: 1 },
{ category: "Theologie / Pädagogik im interkulturellen Kontext", text: "Nach welchem Paragraphen haben Sorgeberechtigte Anspruch auf Hilfen zur Erziehung?", options: ["§34 SGB II", "§27 SGB VIII", "§45 SGB V", "§18 SGB XII"], correct: 1 },
{ category: "B.A. Theology / Development Studies", text: "What is meant by 'integral mission'?", options: ["Social work separated from evangelism", "Evangelism only, social work optional", "A holistic approach connecting mission and social action", "Humanitarian aid without religious content"], correct: 2 },
{ category: "B.A. Theology / Development Studies", text: "How does a normal project cycle look like?", options: ["Context, design, preparation, implementation, monitoring, evaluation, closure", "Design, preparation, context, approval, implementation, evaluation", "Preparation, approval, design, context, implementation", "Context, monitoring, design, evaluation, closure"], correct: 0 },
{ category: "Interkulturelle Theologische Akademie (ITA)", text: "In welchem Buch findet sich das Motto \"Lernen, leben, weitersagen\"?", options: ["Nehemia", "Esra", "Josua", "Jesaja"], correct: 1 },
{ category: "Interkulturelle Theologische Akademie (ITA)", text: "Was bedeutet das griechische Wort \"Tetelestai\" und wer sagte es?", options: ["Kehrt um, Paulus", "Es ist entschieden, Petrus", "Es ist vollbracht, Jesus", "Nun ist der Lauf vollendet, Johannes"], correct: 2 },
{ category: "M.A. Theologie, Gemeinde, Weltchristenheit", text: "Von wem stammt \"Die deutsche Messe und Ordnung des Gottesdienstes\"?", options: ["Martin Luther", "Philipp Melanchthon", "Philipp Jacob Spener", "Johann Albrecht Bengel"], correct: 0 },
{ category: "M.A. Theologie, Gemeinde, Weltchristenheit", text: "Welche Bewegung geht auf John Wesley zurück?", options: ["Baptismus", "Pfingstbewegung", "Methodismus", "Pietismus"], correct: 2 },
{ category: "M.A. Evangelische Theologie", text: "Wie viele Zeichen umfasst die Masterarbeit des theologischen Masters?", options: ["50.000–80.000", "180.000–250.000", "100.000–150.000", "250.000–300.000"], correct: 1 },
{ category: "M.A. Evangelische Theologie", text: "Was waren die Gegenstände in der Bundeslade?", options: ["Gesetzestafeln, goldener Krug mit Manna, eine Schriftrolle", "Gesetzestafeln, Stab Aarons, goldener Krug mit Manna", "Stab Aarons, goldener Krug mit Manna, eine Schale mit Brot", "Gesetzestafeln, Stab Aarons, eine Schriftrolle"], correct: 1 },
];
// ---------- Spiele ----------
// type steuert, welche Regie-/Team-Oberfläche verwendet wird:
// "manual" -> Regie trägt Platzierung direkt ein (Dreibein)
// "value" -> Regie trägt einen Messwert pro Team ein, Platzierung wird daraus berechnet (Brücke, Bobby-Car)
// "self" -> Team trägt selbst einen Wert ein (Quiz)
// "taste" -> Sonderfall Taste Test
// "buzzer" -> Sonderfall Buzzer-Runden (Numbers Game, KI-Songs)
const GAMES = [
{
id: "quiz", name: "Quiz", sub: "Predigt", accent: "#2F5D45", soft: "#E6EEE9",
rule: "Beantwortet als Gruppe gemeinsam die Frage auf eurem Handy. Die Regie schaltet die Fragen der Reihe nach frei.",
type: "quiz", totalQuestions: QUIZ_QUESTIONS.length,
},
{
id: "bruecke", name: "Brückenbauen", sub: "Kleingruppen", accent: "#2E7D74", soft: "#E4F0EE",
rule: "Baut aus dem Material eine Brücke. Die Regie zählt, wie viele Bücher eure Brücke trägt.",
type: "value", valueLabel: "Anzahl Bücher", higherIsBetter: true,
},
{
id: "taste", name: "Taste Test", sub: "Küchenteam", accent: "#B24C63", soft: "#F6E7EA",
rule: "Schmeckt die Lebensmittel und tragt ein, was ihr erkannt habt.",
type: "taste",
},
{
id: "numbers", name: "Numbers Game", sub: "Spenden", accent: "#6B4FA0", soft: "#EEE8F5",
rule: "Erreicht die Zielzahl mit den sechs Zahlen. Nicht alle Zahlen müssen benutzt werden, jede Zahl nur einmal, Zwischenergebnisse keine negativen Zahlen oder Brüche. Drückt den Buzzer, sobald ihr die Lösung habt.",
type: "buzzer", rounds: 3, roundSeconds: 120,
numbersRounds: [
{ numbers: [50, 8, 3, 7, 2, 10], target: 556, solution: "(50 × 10) + (8 × 7) = 556" },
{ numbers: [100, 2, 7, 10, 8, 5], target: 701, solution: "7 × 100 = 700, 10 ÷ 2 = 5, 5 ÷ 5 = 1, 700 + 1 = 701" },
{ numbers: [3, 5, 7, 4, 8, 9], target: 570, solution: "8 + 4 + 7 = 19, (9 − 3) × 19 = 114, 114 × 5 = 570" },
],
},
{
id: "bobby", name: "Bobby-Car-Rennen", sub: "Kinderraum", accent: "#C77B2E", soft: "#FBEEE0",
rule: "Fahrt den Rundkurs so schnell wie möglich, ein Team nach dem anderen.", type: "race",
},
{
id: "dreibein", name: "Dreibein bauen", sub: "Technik", accent: "#34506B", soft: "#E5EAEF",
rule: "Baut ein stabiles Dreibein, so schnell wie möglich. Es bauen immer vier Gruppen gleichzeitig, in mehreren Runden nacheinander, gemessen wird die Zeit.",
type: "grouprace", videoUrl: "dreibein-video.mp4", videoRate: 1,
},
{
id: "songs", name: "KI-Songs erraten", sub: "Lobpreisteam", accent: "#C79A3D", soft: "#FBF3E0",
rule: "Hört gut zu und tragt ein, wie das Original heißt, sobald ihr es erkennt.",
type: "guess", rounds: 3, roundSeconds: null, roundLabel: "Lied",
// Von Klaus Göttler textlich mit KI umgedichtete und neu vertonte Lobpreislieder, eins pro Runde.
songs: [
{ title: "Neues Leben", url: "https://cdn1.suno.ai/1d20b8a3-f1cd-4290-a008-deb8b97e58cc.mp3" },
{ title: "Ich glaube", url: "https://cdn1.suno.ai/857405bc-9a09-4a6f-ba48-334c84c9d532.mp3" },
{ title: "Leuchtturm", url: "https://cdn1.suno.ai/ef3b35ef-bb4c-4c94-943d-3d84bcca50d1.mp3" },
],
},
];
function gameById(id) { return GAMES.find(g => g.id === id) || null; }
// ---------- Zufalls-Gruppen ----------
function shuffleArray(arr) {
const a = arr.slice();
for (let i = a.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
}
return a;
}
// Teilt eine zufällig gemischte Liste in Gruppen einer festen Größe auf, letzte Gruppe kann kleiner sein.
function groupsBySize(ids, size) {
const shuffled = shuffleArray(ids);
const groups = [];
for (let i = 0; i < shuffled.length; i += size) groups.push(shuffled.slice(i, i + size));
return groups;
}
// Teilt eine zufällig gemischte Liste möglichst gleichmäßig in eine feste Anzahl Gruppen auf.
function groupsByCount(ids, count) {
const shuffled = shuffleArray(ids);
const groups = Array.from({ length: count }, () => []);
shuffled.forEach((id, i) => groups[i % count].push(id));
return groups;
}
// ---------- Punktelogik ----------
// placement: 1, 2 oder 3. isPrio: true/false
function pointsForPlacement(placement, isPrio) {
if (placement === 1) return isPrio ? 15 : 10;
if (placement === 2) return 7;
if (placement === 3) return 5;
return 0;
}
// ---------- Platzierung mit Gleichstand ----------
// values: {teamId: zahl}. Gleiche Werte bekommen denselben Platz und damit dieselben Punkte,
// die Teams danach rücken um die Anzahl der Gleichstand-Teams weiter (Standard-Wettkampf-Rangfolge,
// z.B. zwei Teams teilen sich Platz 1, das nächste Team ist dann Platz 3, nicht Platz 2).
// Gibt {1: [teamIds], 2: [teamIds], 3: [teamIds]} zurück.
function rankedPlacements(values, higherIsBetter) {
const entries = Object.entries(values || {}).filter(([, v]) => v !== undefined && v !== null && v !== '');
entries.sort((a, b) => higherIsBetter ? b[1] - a[1] : a[1] - b[1]);
const placements = { 1: [], 2: [], 3: [] };
let rank = 0, seen = 0, prevValue = null;
entries.forEach(([id, v]) => {
seen++;
if (prevValue === null || v !== prevValue) rank = seen;
if (placements[rank]) placements[rank].push(id);
prevValue = v;
});
return placements;
}
// ---------- Fuzzy-Vergleich für Taste Test ----------
// Kleinschreibung, trimmen, Levenshtein-Distanz <= 3 gilt als Treffer
function normalize(str) {
return (str || "").toString().trim().toLowerCase();
}
function levenshtein(a, b) {
a = normalize(a); b = normalize(b);
const m = a.length, n = b.length;
const d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
for (let i = 0; i <= m; i++) d[i][0] = i;
for (let j = 0; j <= n; j++) d[0][j] = j;
for (let i = 1; i <= m; i++) {
for (let j = 1; j <= n; j++) {
const cost = a[i - 1] === b[j - 1] ? 0 : 1;
d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
}
}
return d[m][n];
}
function fuzzyMatch(guess, answer) {
if (!guess || !answer) return false;
return levenshtein(guess, answer) <= 3;
}
// Findet, welche der freien Antworten eines Teams zu einem bestimmten Lebensmittel passt,
// unabhängig davon, in welches der Felder das Team es eingetragen hat (Reihenfolge egal,
// Hauptsache es steht irgendwo drin).
function findTasteMatch(answers, food) {
const list = answers || [];
for (let i = 0; i < list.length; i++) {
if (list[i] && fuzzyMatch(list[i], food)) return list[i];
}
return '';
}
function escapeHtml(str) {
const div = document.createElement('div');
div.textContent = str == null ? '' : String(str);
return div.innerHTML;
}
function fmtTime(seconds) {
const s = Math.max(0, Math.round(seconds));
const m = Math.floor(s / 60).toString().padStart(2, '0');
const r = (s % 60).toString().padStart(2, '0');
return m + ':' + r;
}
