"use strict";

/* ═════════════════════════ i18n ═════════════════════════ */
const I18N = {
  en: {
    heroTitle: "Know every flag <em>on Earth.</em>",
    heroSub: "Four ways to train: flags, capitals, tricky lookalikes and a full world tour. Beat your best, one round at a time.",
    statCountries: "countries", statModes: "game modes", statRounds: "rounds played",
    chooseMode: "Pick a mode",
    modes: {
      flags: { name: "Flag Sprint", desc: "One flag at a time. Type the country before the clock runs out." },
      capitals: { name: "Capital Hunt", desc: "See the flag, name its capital city." },
      hard: { name: "Lookalikes", desc: "Four flags that look almost the same, one country. Pick the right flag." },
      world: { name: "World Tour", desc: "Name every country in the world. Each one you find lights up on the map." },
    },
    nFlags: (n) => `${n} flags`, nCountries: (n) => `${n} countries`, best: "Best",
    leaderboard: "Leaderboard", quit: "Quit", skip: "Skip", submit: "Enter",
    phCountry: "Type the country…", phCapital: "Type the capital…", phWorld: "Type a country…",
    qCountry: "Which country is this?", qCapital: "What is the capital?", qHard: "Find the flag of",
    correct: "Correct!", wrong: "Not quite", skipped: "Skipped", timeout: "Out of time",
    capital: "Capital", capitalOf: "Capital of",
    hintType: "Press <kbd>Enter</kbd> to submit · accents don't matter",
    hintKeys: "Click or press <kbd>1</kbd>–<kbd>4</kbd>",
    hintNext: "Press <kbd>Enter</kbd> to continue",
    finished: "Round complete", timesUp: "Time's up!", allFound: "You named them all!", gaveUp: "Tour over",
    yourName: "Your name for the leaderboard", save: "Save score", saved: "Saved!", savedRank: (r) => `Saved — you placed #${r}`,
    playAgain: "Play again", menu: "Menu",
    top10: "Top 10", progress: "Your progress", review: "Round review",
    noScores: "No scores yet. Play a round!", player: "Player", score: "Score", time: "Time", date: "Date",
    progressNeed: "Save a couple more rounds to see your curve.",
    trendUp: (d) => `<b>+${d}</b> vs. your average. Nice climb.`,
    trendDown: (d) => `<b>−${d}</b> vs. your average. You'll get it back.`,
    trendFlat: "Right on your average.",
    progressFor: (n) => `Last rounds for <b>${n}</b>`,
    accuracy: "accuracy", timeUsed: "time",
    found: "found", giveUp: "Give up", confirm: "Sure?",
    mapLoading: "Loading map…", mapError: "The map needs an internet connection. The lists below still work.",
    alreadyFound: (n) => `${n}: already found`,
    noAnswer: "no answer",
    continents: { AF: "Africa", AS: "Asia", EU: "Europe", NA: "North America", SA: "South America", OC: "Oceania" },
    zoomIn: "Zoom in", zoomOut: "Zoom out", resetZoom: "Reset view",
  },
  fr: {
    heroTitle: "Connais tous les drapeaux <em>du monde.</em>",
    heroSub: "Quatre façons de t'entraîner : drapeaux, capitales, sosies piégeux et un tour du monde complet. Bats ton record, une partie à la fois.",
    statCountries: "pays", statModes: "modes de jeu", statRounds: "parties jouées",
    chooseMode: "Choisis un mode",
    modes: {
      flags: { name: "Sprint drapeaux", desc: "Un drapeau à la fois. Tape le pays avant la fin du chrono." },
      capitals: { name: "Chasse aux capitales", desc: "Regarde le drapeau, trouve sa capitale." },
      hard: { name: "Sosies", desc: "Quatre drapeaux presque identiques, un seul pays. Clique sur le bon drapeau." },
      world: { name: "Tour du monde", desc: "Nomme tous les pays du monde. Chaque pays trouvé s'allume sur la carte." },
    },
    nFlags: (n) => `${n} drapeaux`, nCountries: (n) => `${n} pays`, best: "Record",
    leaderboard: "Classement", quit: "Quitter", skip: "Passer", submit: "Valider",
    phCountry: "Tape le pays…", phCapital: "Tape la capitale…", phWorld: "Tape un pays…",
    qCountry: "Quel est ce pays ?", qCapital: "Quelle est la capitale ?", qHard: "Trouve le drapeau de",
    correct: "Bonne réponse !", wrong: "Raté", skipped: "Passé", timeout: "Temps écoulé",
    capital: "Capitale", capitalOf: "Capitale de",
    hintType: "Appuie sur <kbd>Entrée</kbd> pour valider · les accents ne comptent pas",
    hintKeys: "Clique ou appuie sur <kbd>1</kbd>–<kbd>4</kbd>",
    hintNext: "Appuie sur <kbd>Entrée</kbd> pour continuer",
    finished: "Partie terminée", timesUp: "Temps écoulé !", allFound: "Tu les as tous trouvés !", gaveUp: "Tour terminé",
    yourName: "Ton pseudo pour le classement", save: "Enregistrer", saved: "Enregistré !", savedRank: (r) => `Enregistré : tu es #${r}`,
    playAgain: "Rejouer", menu: "Menu",
    top10: "Top 10", progress: "Ta progression", review: "Récap de la partie",
    noScores: "Aucun score pour l'instant. Lance une partie !", player: "Joueur", score: "Score", time: "Temps", date: "Date",
    progressNeed: "Enregistre encore quelques parties pour voir ta courbe.",
    trendUp: (d) => `<b>+${d}</b> par rapport à ta moyenne. Belle progression.`,
    trendDown: (d) => `<b>−${d}</b> par rapport à ta moyenne. Tu vas te rattraper.`,
    trendFlat: "Pile dans ta moyenne.",
    progressFor: (n) => `Dernières parties de <b>${n}</b>`,
    accuracy: "de réussite", timeUsed: "temps",
    found: "trouvés", giveUp: "Abandonner", confirm: "Sûr·e ?",
    mapLoading: "Chargement de la carte…", mapError: "La carte nécessite une connexion internet. Les listes ci-dessous fonctionnent quand même.",
    alreadyFound: (n) => `${n} : déjà trouvé`,
    noAnswer: "pas de réponse",
    continents: { AF: "Afrique", AS: "Asie", EU: "Europe", NA: "Amérique du Nord", SA: "Amérique du Sud", OC: "Océanie" },
    zoomIn: "Zoomer", zoomOut: "Dézoomer", resetZoom: "Réinitialiser la vue",
  },
};

/* ═════════════════════════ Icons (Lucide) ═════════════════════════ */
const ICON_PATHS = {
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  landmark: '<path d="M3 22h18"/><path d="M6 18v-7"/><path d="M10 18v-7"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M12 2 20 7H4z"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  map: '<path d="M14.1 6 9.9 4 3.6 5.4A2 2 0 0 0 2 7.4v12.1a1 1 0 0 0 1.3 1L9.9 19l4.2 2 6.3-1.4A2 2 0 0 0 22 17.6V5.5a1 1 0 0 0-1.3-1Z"/><path d="M9.9 4v15"/><path d="M14.1 6v15"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  skip: '<path d="m5 4 10 8-10 8V4z"/><path d="M19 5v14"/>',
  replay: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  enter: '<path d="M9 10 4 15l5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
  trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
};
const icon = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICON_PATHS[name]}</svg>`;

/* ═════════════════════════ Modes ═════════════════════════ */
const MODES = {
  flags: { color: "var(--coral)", icon: "flag", total: 20, seconds: 120 },
  capitals: { color: "var(--teal)", icon: "landmark", total: 20, seconds: 120 },
  hard: { color: "var(--amber)", icon: "copy", total: 20, seconds: 120 },
  world: { color: "var(--indigo)", icon: "map", total: 197, seconds: 18 * 60 },
};
const MODE_ORDER = ["flags", "capitals", "hard", "world"];
const CONTINENT_ORDER = ["AF", "AS", "EU", "NA", "SA", "OC"];

/* ═════════════════════════ Data ═════════════════════════ */
const COUNTRIES = RAW_COUNTRIES.map((line) => {
  const [iso, num, cont, en, fr, capEn, capFr, al = "", capAl = ""] = line.split("|");
  return {
    iso, num, cont,
    name: { en, fr },
    capital: { en: capEn, fr: capFr },
    aliases: al ? al.split(";") : [],
    capAliases: capAl ? capAl.split(";") : [],
  };
});
const BY_ISO = Object.fromEntries(COUNTRIES.map((c) => [c.iso, c]));
const BY_NUM = Object.fromEntries(COUNTRIES.filter((c) => c.num !== "---").map((c) => [c.num, c.iso]));
MODES.world.total = COUNTRIES.length;

/** Normalise user input: lowercase, no accents, no punctuation, "st" → "saint", leading articles dropped. */
function norm(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/&/g, " and ")
    .replace(/[’'`ʻ.,\-()]/g, " ")
    .replace(/\bst\b/g, "saint").replace(/\bste\b/g, "sainte")
    .replace(/\s+/g, " ").trim()
    .replace(/^(the|le|la|les|l) /, "");
}

const keysFor = (c, field) =>
  field === "capital"
    ? [c.capital.en, c.capital.fr, ...c.capAliases].map(norm)
    : [c.name.en, c.name.fr, ...c.aliases].map(norm);

const KEYS = { name: new Map(), capital: new Map() }; // iso → [keys]
const EXACT = { name: new Map(), capital: new Map() }; // key → Set(iso)
for (const field of ["name", "capital"]) {
  for (const c of COUNTRIES) {
    const ks = [...new Set(keysFor(c, field))];
    KEYS[field].set(c.iso, ks);
    for (const k of ks) {
      if (!EXACT[field].has(k)) EXACT[field].set(k, new Set());
      EXACT[field].get(k).add(c.iso);
    }
  }
}

/** Optimal string alignment distance (Levenshtein + adjacent transpositions). */
function osa(a, b) {
  const m = a.length, n = b.length;
  if (Math.abs(m - n) > 2) return 99;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[m][n];
}

/**
 * Lenient answer check: exact (normalised) match on any EN/FR name or alias,
 * or one typo on answers of 6+ letters (two on 12+), as long as the typo isn't
 * closer to — or an exact match for — another country/capital.
 */
function isMatch(input, c, field) {
  const n = norm(input);
  if (!n) return false;
  const own = KEYS[field].get(c.iso);
  if (own.includes(n)) return true;
  if (EXACT[field].has(n)) return false; // it's exactly someone else
  if (n.length < 6) return false;
  const tol = n.length >= 12 ? 2 : 1;
  const best = Math.min(...own.map((k) => osa(n, k)));
  if (best > tol) return false;
  for (const [iso, ks] of KEYS[field]) {
    if (iso === c.iso) continue;
    if (ks.some((k) => osa(n, k) <= best)) return false;
  }
  return true;
}

/* ═════════════════════════ Helpers ═════════════════════════ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const shuffle = (arr) => { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
const fmtTime = (ms) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
const flagSrc = (iso) => `${iso}.png`;

const store = {
  get(key, fallback) { try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch { return fallback; } },
  set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* private mode */ } },
};

let lang = store.get("fq.lang", "en");
const t = () => I18N[lang];
const cname = (c) => c.name[lang];
const ccap = (c) => c.capital[lang];

/* ── Scores ── */
const getScores = () => store.get("fq.scores", { flags: [], capitals: [], hard: [], world: [] });
function saveScore(mode, entry) {
  const all = getScores();
  (all[mode] ||= []).push(entry);
  store.set("fq.scores", all);
  store.set("fq.name", entry.name);
}
const rankSort = (a, b) => b.score - a.score || a.timeMs - b.timeMs || a.date - b.date;
const ranked = (mode) => [...(getScores()[mode] || [])].sort(rankSort);
const bestOf = (mode) => ranked(mode)[0];

/* ═════════════════════════ Router ═════════════════════════ */
const app = $("#app");
let cleanup = () => {};
let rerender = () => {};

function go(fn, ...args) {
  cleanup();
  cleanup = () => {};
  rerender = () => {};
  window.scrollTo({ top: 0 });
  fn(...args);
}

function toast(msg) {
  $(".toast")?.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.setAttribute("role", "status");
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1600);
}

/* ═════════════════════════ Header ═════════════════════════ */
function renderHeader() {
  document.documentElement.lang = lang;
  $("#lbBtn").innerHTML = `${icon("trophy")}<span class="lbl">${t().leaderboard}</span>`;
  $("#lbBtn").setAttribute("aria-label", t().leaderboard);
  $$(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

document.addEventListener("click", (e) => {
  const langBtn = e.target.closest("[data-lang]");
  if (langBtn && langBtn.dataset.lang !== lang) {
    lang = langBtn.dataset.lang;
    store.set("fq.lang", lang);
    renderHeader();
    rerender();
    return;
  }
  const act = e.target.closest("[data-action]");
  if (act?.dataset.action === "home") go(renderHome);
  if (act?.dataset.action === "leaderboard") go(renderLeaderboard, "flags");
});

/* ═════════════════════════ Home ═════════════════════════ */
function renderHome() {
  const heroFlags = shuffle(COUNTRIES.slice()).slice(0, 5);
  const draw = () => {
    const rounds = Object.values(getScores()).reduce((n, arr) => n + arr.length, 0);
    app.innerHTML = `
      <section class="hero">
        <div>
          <h1>${t().heroTitle}</h1>
          <p>${t().heroSub}</p>
          <div class="hero-stats">
            <div><b>${COUNTRIES.length}</b>${t().statCountries}</div>
            <div><b>4</b>${t().statModes}</div>
            <div><b>${rounds}</b>${t().statRounds}</div>
          </div>
        </div>
        <div class="flag-stack" aria-hidden="true">
          ${heroFlags.map((c) => `<img src="${flagSrc(c.iso)}" alt="">`).join("")}
        </div>
      </section>
      <h2 class="section-title">${t().chooseMode}</h2>
      <section class="modes">
        ${MODE_ORDER.map((m) => {
          const cfg = MODES[m], best = bestOf(m);
          const count = m === "world" ? t().nCountries(cfg.total) : t().nFlags(cfg.total);
          return `
          <button class="mode-card" style="--c:${cfg.color}" data-mode="${m}">
            <span class="mode-icon">${icon(cfg.icon)}</span>
            <span>
              <h3>${t().modes[m].name}</h3>
              <p>${t().modes[m].desc}</p>
              <span class="chips">
                <span class="chip">${icon(m === "world" ? "map" : "flag")}${count}</span>
                <span class="chip">${icon("clock")}${fmtTime(cfg.seconds * 1000)}</span>
                ${best ? `<span class="chip best">${icon("trophy")}${t().best} ${best.score}/${best.total}</span>` : ""}
              </span>
            </span>
          </button>`;
        }).join("")}
      </section>`;
    $$(".mode-card", app).forEach((b) =>
      b.addEventListener("click", () => go(b.dataset.mode === "world" ? startWorld : startQuiz, b.dataset.mode)));
  };
  draw();
  rerender = draw;
}

/* ═════════════════════════ Quiz (flags / capitals / lookalikes) ═════════════════════════ */
function buildLookalikeQuestions(total) {
  const pairs = shuffle(LOOKALIKE_GROUPS.flatMap((g, gi) => g.map((iso) => ({ iso, gi }))));
  const used = new Set(), qs = [];
  const groupUse = new Map();
  for (const p of pairs) {
    if (qs.length >= total) break;
    if (used.has(p.iso) || (groupUse.get(p.gi) || 0) >= 1) continue; // one question per group first
    used.add(p.iso); groupUse.set(p.gi, 1);
    qs.push(p);
  }
  for (const p of pairs) { // top up if needed
    if (qs.length >= total) break;
    if (!used.has(p.iso)) { used.add(p.iso); qs.push(p); }
  }
  return shuffle(qs).map(({ iso, gi }) => {
    const others = shuffle([...new Set(LOOKALIKE_GROUPS[gi])].filter((x) => x !== iso)).slice(0, 3);
    return { c: BY_ISO[iso], options: shuffle([iso, ...others]).map((x) => BY_ISO[x]) };
  });
}

function startQuiz(mode) {
  const cfg = MODES[mode];
  const questions = mode === "hard"
    ? buildLookalikeQuestions(cfg.total)
    : shuffle(COUNTRIES.slice()).slice(0, cfg.total).map((c) => ({ c }));

  const S = {
    mode, cfg, questions, idx: 0, score: 0, log: [],
    phase: "ask", start: performance.now(), durationMs: cfg.seconds * 1000,
    lastInput: "", lastChoice: null, autoTimer: null, ended: false,
  };

  const remaining = () => S.durationMs - (performance.now() - S.start);

  function tick() {
    const rem = remaining();
    const timerEl = $("#timer");
    if (timerEl) {
      timerEl.querySelector("span").textContent = fmtTime(rem);
      timerEl.classList.toggle("low", rem <= 20000);
    }
    const bar = $("#timebar");
    if (bar) bar.style.transform = `scaleX(${Math.max(0, rem / S.durationMs)})`;
    if (rem <= 0) end(true);
  }
  const interval = setInterval(tick, 200);

  function draw() {
    const q = S.questions[S.idx];
    const isHard = mode === "hard";
    const prompt = mode === "capitals" ? t().qCapital : isHard ? t().qHard : t().qCountry;
    const keepValue = $("#answer")?.value || "";
    app.innerHTML = `
      <section class="game" style="--c:${cfg.color}">
        <div class="hud">
          <button class="icon-btn" id="quit">${icon("back")}<span class="lbl">${t().quit}</span></button>
          <span class="spacer"></span>
          <span class="pill" aria-label="Question">${S.idx + 1}<span style="color:var(--muted)">/${cfg.total}</span></span>
          <span class="pill" aria-label="${t().score}"><span class="ok">${icon("check")}</span>${S.score}</span>
          <span class="pill timer" id="timer" role="timer">${icon("clock")}<span>${fmtTime(remaining())}</span></span>
        </div>
        <div class="progress" aria-hidden="true"><span id="timebar" style="transform:scaleX(${Math.max(0, remaining() / S.durationMs)})"></span></div>
        <div class="stage">
          <p class="q-label">${t().modes[mode].name} · ${prompt}</p>
          ${isHard ? `
            <h2 class="target-name" id="frame">${esc(cname(q.c))}</h2>
            <div class="flag-choices" id="choices">
              ${q.options.map((o, i) => `
                <button class="flag-choice" data-iso="${o.iso}" aria-label="${i + 1}">
                  <span class="key">${i + 1}</span>
                  <span class="fc-img"><img src="${flagSrc(o.iso)}" alt="" width="300" height="200"></span>
                  <span class="fc-name">${esc(cname(o))}</span>
                </button>`).join("")}
            </div>` : `
          <div class="flag-frame" id="frame"><img src="${flagSrc(q.c.iso)}" alt="${esc(prompt)}" width="420" height="280"></div>`}
          ${isHard ? "" : `
            <form class="answer-row" id="form" autocomplete="off">
              <label class="sr-only" for="answer">${prompt}</label>
              <input class="answer-input" id="answer" name="answer" placeholder="${mode === "capitals" ? t().phCapital : t().phCountry}"
                autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="go">
              <button type="button" class="btn btn-ghost" id="skip">${icon("skip")}<span class="lbl">${t().skip}</span></button>
            </form>`}
          <div class="feedback" id="feedback" aria-live="polite">
            <p class="hint">${isHard ? t().hintKeys : t().hintType}</p>
          </div>
        </div>
      </section>`;

    // Preload the next flag so it appears instantly
    const next = S.questions[S.idx + 1];
    if (next) (next.options || [next.c]).forEach((o) => { new Image().src = flagSrc(o.iso); });

    $("#quit").addEventListener("click", () => go(renderHome));
    if (isHard) {
      $$(".flag-choice").forEach((b) => b.addEventListener("click", () => answerChoice(b.dataset.iso)));
    } else {
      const input = $("#answer");
      input.value = keepValue;
      input.focus();
      $("#form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (S.phase === "feedback") return advance();
        if (!input.value.trim()) { shake(); return; }
        answerText(input.value);
      });
      $("#skip").addEventListener("click", () => { if (S.phase === "ask") answerText("", true); else advance(); });
    }
    if (S.phase === "feedback") paintFeedback();
  }

  function shake() {
    const f = $("#frame");
    f.classList.remove("shake"); void f.offsetWidth; f.classList.add("shake");
  }

  function record(ok, input) {
    const q = S.questions[S.idx];
    if (ok) S.score++;
    S.log.push({ iso: q.c.iso, ok, input });
    S.phase = "feedback";
    S.lastOk = ok;
    paintFeedback();
    $$(".pill")[1].innerHTML = `<span class="ok">${icon("check")}</span>${S.score}`;
    S.autoTimer = setTimeout(advance, ok ? 1500 : 2000);
  }

  function answerText(value, skipped = false) {
    if (S.phase !== "ask" || S.ended) return;
    const q = S.questions[S.idx];
    const ok = !skipped && isMatch(value, q.c, mode === "capitals" ? "capital" : "name");
    const input = $("#answer");
    input.readOnly = true;
    input.classList.add(ok ? "is-ok" : "is-bad");
    if (!ok) shake();
    record(ok, skipped ? "" : value.trim());
  }

  function answerChoice(iso) {
    if (S.phase !== "ask" || S.ended) return;
    const q = S.questions[S.idx];
    const ok = iso === q.c.iso;
    if (!ok) shake();
    S.lastChoice = iso;
    record(ok, cname(BY_ISO[iso]));
  }

  function paintFeedback() {
    const q = S.questions[S.idx];
    const entry = S.log[S.log.length - 1];
    const ok = entry.ok;
    const fb = $("#feedback");
    const yours = !ok && entry.input ? `<span class="yours">${esc(entry.input)}</span>` : "";
    const title = ok ? t().correct : entry.input ? t().wrong : t().skipped;
    const main = mode === "capitals"
      ? `${title} · ${esc(ccap(q.c))}${yours}`
      : `${title} · ${esc(cname(q.c))}${yours}`;
    const sub = mode === "capitals"
      ? `${t().capitalOf} <b>${esc(cname(q.c))}</b>`
      : `${t().capital}${lang === "fr" ? " :" : ":"} <b>${esc(ccap(q.c))}</b>`;
    fb.className = `feedback show ${ok ? "ok" : "bad"}`;
    fb.innerHTML = `
      <span class="fb-badge">${icon(ok ? "check" : "x")}</span>
      <span><span class="fb-title">${main}</span><br><span class="fb-sub">${sub}</span></span>`;

    if (mode === "hard") {
      $$(".flag-choice").forEach((b) => {
        b.disabled = true;
        b.classList.add("revealed");
        if (b.dataset.iso === q.c.iso) b.classList.add("is-ok");
        else if (b.dataset.iso === S.lastChoice) b.classList.add("is-bad");
        else b.classList.add("dim");
      });
    } else {
      const input = $("#answer");
      if (input) { input.readOnly = true; input.classList.add(ok ? "is-ok" : "is-bad"); }
    }
  }

  function advance() {
    if (S.phase !== "feedback" || S.ended) return;
    clearTimeout(S.autoTimer);
    S.idx++;
    if (S.idx >= S.questions.length) return end(false);
    S.phase = "ask";
    S.lastChoice = null;
    const input = $("#answer");
    if (input) input.value = "";
    draw();
  }

  function end(timedOut) {
    if (S.ended) return;
    S.ended = true;
    clearTimeout(S.autoTimer);
    clearInterval(interval);
    if (timedOut && S.phase === "ask" && S.idx < S.questions.length) {
      S.log.push({ iso: S.questions[S.idx].c.iso, ok: false, input: "", timeout: true });
    }
    const timeMs = Math.min(S.durationMs, performance.now() - S.start);
    go(renderResults, { mode, score: S.score, total: cfg.total, timeMs, timedOut, log: S.log });
  }

  const onKey = (e) => {
    if (S.ended) return;
    if (mode === "hard" && S.phase === "ask" && /^[1-4]$/.test(e.key)) {
      const q = S.questions[S.idx];
      answerChoice(q.options[Number(e.key) - 1].iso);
    } else if (e.key === "Enter" && S.phase === "feedback" && mode === "hard") {
      e.preventDefault();
      advance();
    }
  };
  document.addEventListener("keydown", onKey);

  cleanup = () => {
    S.ended = true;
    clearInterval(interval);
    clearTimeout(S.autoTimer);
    document.removeEventListener("keydown", onKey);
  };
  rerender = draw;
  draw();
}

/* ═════════════════════════ Results (shared) ═════════════════════════ */
function resultsCardHTML(r) {
  const pct = Math.round((r.score / r.total) * 100);
  const title = r.mode === "world"
    ? (r.score === r.total ? t().allFound : r.timedOut ? t().timesUp : t().gaveUp)
    : (r.timedOut ? t().timesUp : t().finished);
  const lastName = store.get("fq.name", "");
  return `
    <div class="score-card" style="--c:${MODES[r.mode].color}">
      <div class="score-ring" style="--p:${pct};--c:${MODES[r.mode].color}">
        <div><span><b>${r.score}</b><br><small>/ ${r.total}</small></span></div>
      </div>
      <div>
        <h2>${title}</h2>
        <div class="score-meta">
          <span class="chip">${icon(MODES[r.mode].icon)}${t().modes[r.mode].name}</span>
          <span class="chip">${icon("check")}${pct}% ${t().accuracy}</span>
          <span class="chip">${icon("clock")}${fmtTime(r.timeMs)} ${t().timeUsed}</span>
        </div>
        <form class="save-form" id="saveForm" autocomplete="off">
          <label for="pname">${t().yourName}</label>
          <input id="pname" maxlength="16" value="${esc(lastName)}" placeholder="Pseudo" required>
          <button class="btn btn-primary" type="submit">${icon("trophy")}${t().save}</button>
        </form>
        <div class="actions">
          <button class="btn" id="again">${icon("replay")}${t().playAgain}</button>
          <button class="btn btn-ghost" id="toMenu">${icon("home")}${t().menu}</button>
        </div>
      </div>
    </div>`;
}

function bindResultsCard(root, r, onSaved) {
  const form = $("#saveForm", root);
  if (r.savedId) {
    const rank = ranked(r.mode).findIndex((e) => e.id === r.savedId) + 1;
    form.outerHTML = `<p class="saved-note">${icon("check")}${t().savedRank(rank)}</p>`;
  } else {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#pname", root).value.trim().slice(0, 16);
      if (!name) return;
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      saveScore(r.mode, { id, name, score: r.score, total: r.total, timeMs: Math.round(r.timeMs), date: Date.now() });
      r.savedId = id;
      onSaved();
    });
  }
  $("#again", root).addEventListener("click", () => go(r.mode === "world" ? startWorld : startQuiz, r.mode));
  $("#toMenu", root).addEventListener("click", () => go(renderHome));
}

function leaderboardHTML(mode, highlightId) {
  const rows = ranked(mode).slice(0, 10);
  if (!rows.length) return `<p class="empty">${t().noScores}</p>`;
  const df = new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "short" });
  return `
    <table class="lb-table">
      <thead><tr><th>#</th><th>${t().player}</th><th>${t().score}</th><th>${t().time}</th><th>${t().date}</th></tr></thead>
      <tbody>
        ${rows.map((e, i) => `
          <tr class="${e.id === highlightId ? "me" : ""}">
            <td><span class="rank ${i < 3 ? "r" + (i + 1) : ""}">${i + 1}</span></td>
            <td>${esc(e.name)}</td>
            <td><b>${e.score}</b>/${e.total}</td>
            <td>${fmtTime(e.timeMs)}</td>
            <td>${df.format(e.date)}</td>
          </tr>`).join("")}
      </tbody>
    </table>`;
}

function progressHTML(mode, name) {
  if (!name) return `<p class="empty">${t().progressNeed}</p>`;
  const mine = (getScores()[mode] || []).filter((e) => e.name.toLowerCase() === name.toLowerCase()).sort((a, b) => a.date - b.date).slice(-15);
  if (mine.length < 2) return `<p class="trend">${t().progressFor(esc(name))}</p><p class="empty">${t().progressNeed}</p>`;
  const W = 400, H = 150, P = 18, total = mine[0].total;
  const x = (i) => P + (i * (W - 2 * P)) / (mine.length - 1);
  const y = (v) => H - P - (v / total) * (H - 2 * P);
  const pts = mine.map((e, i) => [x(i), y(e.score)]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("");
  const area = `${line}L${pts.at(-1)[0]},${H - P}L${pts[0][0]},${H - P}Z`;
  const prev = mine.slice(0, -1), avg = prev.reduce((s, e) => s + e.score, 0) / prev.length;
  const diff = Math.round((mine.at(-1).score - avg) * 10) / 10;
  const trend = diff > 0 ? t().trendUp(diff) : diff < 0 ? t().trendDown(Math.abs(diff)) : t().trendFlat;
  return `
    <p class="trend" style="margin:0 0 6px">${t().progressFor(esc(name))}</p>
    <svg class="spark" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="${mine.map((e) => e.score).join(", ")}">
      ${[0, 0.5, 1].map((f) => `<line class="grid-line" x1="${P}" x2="${W - P}" y1="${y(total * f)}" y2="${y(total * f)}"/>`).join("")}
      <text x="${P}" y="${y(total) - 5}">${total}</text>
      <path class="area" d="${area}"/><path class="line" d="${line}"/>
      ${pts.map((p, i) => `<circle class="${i === pts.length - 1 ? "last" : ""}" cx="${p[0]}" cy="${p[1]}" r="4"><title>${mine[i].score}/${total}</title></circle>`).join("")}
    </svg>
    <p class="trend">${icon("trend")} ${trend}</p>`;
}

function reviewHTML(log) {
  return `<div class="review">${log.map((l) => {
    const c = BY_ISO[l.iso];
    const detail = l.ok ? ccap(c) : (l.input ? esc(l.input) : t().noAnswer);
    return `<div class="review-item ${l.ok ? "ok" : "bad"}">
      <img src="${flagSrc(c.iso)}" alt="" loading="lazy">
      <span class="txt"><b>${esc(cname(c))}</b><span>${t().capital}: ${esc(ccap(c))}${l.ok ? "" : ` · ${detail}`}</span></span>
      <span class="mark">${icon(l.ok ? "check" : "x")}</span>
    </div>`;
  }).join("")}</div>`;
}

function renderResults(r) {
  const draw = () => {
    const name = r.savedId ? store.get("fq.name", "") : "";
    app.innerHTML = `
      <section class="results">
        ${resultsCardHTML(r)}
        <div class="grid-2">
          <div class="panel"><h3>${icon("trophy")}${t().top10}</h3>${leaderboardHTML(r.mode, r.savedId)}</div>
          <div class="panel" style="--c:${MODES[r.mode].color}"><h3>${icon("trend")}${t().progress}</h3>${progressHTML(r.mode, name)}</div>
        </div>
        <div class="panel"><h3>${icon("list")}${t().review}</h3>${reviewHTML(r.log)}</div>
      </section>`;
    bindResultsCard(app, r, draw);
    if (!r.savedId) $("#pname").focus();
  };
  draw();
  rerender = draw;
}

/* ═════════════════════════ Leaderboard screen ═════════════════════════ */
function renderLeaderboard(mode) {
  const draw = () => {
    const name = store.get("fq.name", "");
    app.innerHTML = `
      <section class="results">
        <h1 class="section-title" style="font-size:2rem;margin-top:8px">${t().leaderboard}</h1>
        <div class="tabs" role="tablist">
          ${MODE_ORDER.map((m) => `<button class="tab" role="tab" style="--c:${MODES[m].color}" aria-selected="${m === mode}" data-tab="${m}"><span class="dot"></span>${t().modes[m].name}</button>`).join("")}
        </div>
        <div class="grid-2">
          <div class="panel" style="margin-top:0"><h3>${icon("trophy")}${t().top10}</h3>${leaderboardHTML(mode)}</div>
          <div class="panel" style="margin-top:0;--c:${MODES[mode].color}"><h3>${icon("trend")}${t().progress}</h3>${progressHTML(mode, name)}</div>
        </div>
        <div class="actions"><button class="btn btn-primary" id="playMode">${icon(MODES[mode].icon)}${t().modes[mode].name}</button></div>
      </section>`;
    $$(".tab").forEach((b) => b.addEventListener("click", () => { mode = b.dataset.tab; draw(); }));
    $("#playMode").addEventListener("click", () => go(mode === "world" ? startWorld : startQuiz, mode));
  };
  draw();
  rerender = draw;
}

/* ═════════════════════════ World Tour ═════════════════════════ */
let worldTopoPromise = null;
const loadWorld = () =>
  (worldTopoPromise ||= fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json").then((r) => {
    if (!r.ok) throw new Error("map");
    return r.json();
  }).catch((e) => { worldTopoPromise = null; throw e; }));

const MAP_NAME_FALLBACK = { Kosovo: "xk", "N. Cyprus": "cy", Somaliland: "so" };

function startWorld() {
  const cfg = MODES.world;
  const W = {
    found: [], foundSet: new Set(), start: performance.now(), durationMs: cfg.seconds * 1000,
    ended: false, endInfo: null, pending: null, confirmTimer: null,
  };
  const remaining = () => W.durationMs - (performance.now() - W.start);
  const byCont = Object.fromEntries(CONTINENT_ORDER.map((k) => [k, COUNTRIES.filter((c) => c.cont === k)]));

  // Lookup: normalised name → iso (names only, both languages)
  const lookup = new Map();
  for (const [iso, ks] of KEYS.name) for (const k of ks) if (!lookup.has(k)) lookup.set(k, iso);
  const allKeys = [...lookup.keys()];

  let mapSvg = null, mapG = null, zoom = null;

  function tick() {
    const rem = remaining();
    const el = $("#timer");
    if (el) { el.querySelector("span").textContent = fmtTime(rem); el.classList.toggle("low", rem <= 60000); }
    if (rem <= 0) finish(true);
  }
  const interval = setInterval(tick, 250);

  function continentHTML(k) {
    const list = byCont[k];
    const found = W.found.filter((iso) => BY_ISO[iso].cont === k);
    const missed = W.ended ? list.filter((c) => !W.foundSet.has(c.iso)).sort((a, b) => cname(a).localeCompare(cname(b), lang)) : [];
    const cells = [
      ...found.map((iso) => `<div class="cell found" title="${esc(cname(BY_ISO[iso]))}"><span>${esc(cname(BY_ISO[iso]))}</span></div>`),
      ...missed.map((c) => `<div class="cell missed" title="${esc(cname(c))}"><span>${esc(cname(c))}</span></div>`),
    ];
    while (cells.length < list.length) cells.push('<div class="cell" aria-hidden="true"></div>');
    return `
      <section class="continent" id="cont-${k}" aria-label="${t().continents[k]}">
        <header><h4>${t().continents[k]}</h4><span class="count">${found.length}/${list.length}</span></header>
        <div class="bar"><span style="width:${(found.length / list.length) * 100}%"></span></div>
        <div class="cells">${cells.join("")}</div>
      </section>`;
  }

  function draw() {
    const keep = $("#worldInput")?.value || "";
    app.innerHTML = `
      <section style="--c:${cfg.color}">
        <div id="worldResults"></div>
        <div class="world-hud">
          <button class="icon-btn" id="quit">${icon("back")}<span class="lbl">${t().quit}</span></button>
          <span class="spacer"></span>
          <span class="pill" id="foundPill"><span class="ok">${icon("check")}</span><span>${W.found.length}/${COUNTRIES.length}</span></span>
          <span class="pill timer" id="timer" role="timer">${icon("clock")}<span>${fmtTime(W.ended ? W.durationMs - W.endInfo.timeMs : remaining())}</span></span>
          ${W.ended ? "" : `<button class="btn btn-ghost" id="giveUp">${icon("x")}${t().giveUp}</button>`}
        </div>
        <div class="map-wrap" id="mapWrap">
          <div class="map-status" id="mapStatus">${t().mapLoading}</div>
        </div>
        <div class="world-input-row">
          <label class="sr-only" for="worldInput">${t().phWorld}</label>
          <input class="answer-input" id="worldInput" placeholder="${t().phWorld}" autocomplete="off" autocapitalize="off"
            autocorrect="off" spellcheck="false" ${W.ended ? "disabled" : ""}>
        </div>
        <div class="continents" id="continents">${CONTINENT_ORDER.map(continentHTML).join("")}</div>
      </section>`;

    $("#quit").addEventListener("click", () => go(renderHome));
    const gu = $("#giveUp");
    gu?.addEventListener("click", () => {
      if (gu.dataset.armed) return finish(false);
      gu.dataset.armed = "1";
      gu.innerHTML = `${icon("x")}${t().confirm}`;
      W.confirmTimer = setTimeout(() => { if (gu.isConnected) { delete gu.dataset.armed; gu.innerHTML = `${icon("x")}${t().giveUp}`; } }, 3000);
    });
    const input = $("#worldInput");
    input.value = keep;
    input.addEventListener("input", onInput);
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); tryAccept(input.value, true); } });
    if (!W.ended) input.focus();

    buildMap();
    if (W.ended) renderWorldResults();
  }

  function onInput(e) {
    clearTimeout(W.pending);
    tryAccept(e.target.value, false);
  }

  function tryAccept(value, force) {
    if (W.ended) return;
    const n = norm(value);
    if (!n) return;
    const iso = lookup.get(n);
    if (!iso) return;
    if (W.foundSet.has(iso)) {
      if (force) { toast(t().alreadyFound(cname(BY_ISO[iso]))); $("#worldInput").value = ""; }
      return;
    }
    // "Niger" is a prefix of "Nigeria", "Dominica" of "Dominican Republic"…: wait a beat before accepting
    const longer = !force && allKeys.some((k) => k.length > n.length && k.startsWith(n) && lookup.get(k) !== iso && !W.foundSet.has(lookup.get(k)));
    if (longer) {
      W.pending = setTimeout(() => { if (norm($("#worldInput")?.value || "") === n) accept(iso); }, 900);
      return;
    }
    accept(iso);
  }

  function accept(iso) {
    if (W.ended || W.foundSet.has(iso)) return;
    W.foundSet.add(iso);
    W.found.push(iso);
    const input = $("#worldInput");
    input.value = "";
    input.classList.remove("bump"); void input.offsetWidth; input.classList.add("bump");
    const c = BY_ISO[iso];
    $("#foundPill span:last-child").textContent = `${W.found.length}/${COUNTRIES.length}`;
    $(`#cont-${c.cont}`).outerHTML = continentHTML(c.cont);
    paintMap(iso, true);
    if (W.found.length === COUNTRIES.length) finish(false);
  }

  function buildMap() {
    const wrap = $("#mapWrap");
    if (typeof d3 === "undefined" || typeof topojson === "undefined") {
      $("#mapStatus").textContent = t().mapError;
      return;
    }
    loadWorld().then((topo) => {
      if (!wrap.isConnected) return;
      const features = topojson.feature(topo, topo.objects.countries).features;
      const width = 960, height = 480;
      const projection = d3.geoNaturalEarth1().fitExtent([[8, 8], [width - 8, height - 8]], { type: "Sphere" });
      const path = d3.geoPath(projection);
      $("#mapStatus")?.remove();
      mapSvg = d3.select(wrap).append("svg").attr("viewBox", `0 0 ${width} ${height}`).attr("role", "img").attr("aria-label", t().modes.world.name);
      mapG = mapSvg.append("g");
      mapG.selectAll("path")
        .data(features)
        .join("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("data-iso", (f) => BY_NUM[f.id] || MAP_NAME_FALLBACK[f.properties?.name] || null);
      const dots = Object.entries(MICROSTATE_POINTS).map(([iso, ll]) => ({ iso, p: projection(ll) }));
      mapG.selectAll("circle.micro").data(dots).join("circle")
        .attr("class", "micro").attr("data-iso", (d) => d.iso)
        .attr("cx", (d) => d.p[0]).attr("cy", (d) => d.p[1]).attr("r", 3);

      zoom = d3.zoom().scaleExtent([1, 12]).translateExtent([[0, 0], [width, height]])
        .on("zoom", (ev) => {
          mapG.attr("transform", ev.transform);
          mapG.selectAll("circle.micro").attr("r", 3 / Math.sqrt(ev.transform.k));
        });
      mapSvg.call(zoom);

      const ctr = document.createElement("div");
      ctr.className = "map-controls";
      ctr.innerHTML = `<button aria-label="${t().zoomIn}">+</button><button aria-label="${t().zoomOut}">−</button><button aria-label="${t().resetZoom}">${icon("replay")}</button>`;
      const [zi, zo, zr] = ctr.children;
      zi.onclick = () => mapSvg.transition().duration(250).call(zoom.scaleBy, 1.6);
      zo.onclick = () => mapSvg.transition().duration(250).call(zoom.scaleBy, 1 / 1.6);
      zr.onclick = () => mapSvg.transition().duration(350).call(zoom.transform, d3.zoomIdentity);
      wrap.appendChild(ctr);

      W.found.forEach((iso) => paintMap(iso, false));
      if (W.ended) paintMissed();
    }).catch(() => {
      const s = $("#mapStatus");
      if (s) s.textContent = t().mapError;
    });
  }

  function paintMap(iso, flash) {
    if (!mapG) return;
    mapG.selectAll(`[data-iso="${iso}"]`).each(function () {
      this.classList.add("found");
      if (flash) {
        this.classList.add("flash");
        setTimeout(() => this.classList.remove("flash"), 450);
      }
    });
  }
  function paintMissed() {
    if (!mapG) return;
    COUNTRIES.filter((c) => !W.foundSet.has(c.iso)).forEach((c) =>
      mapG.selectAll(`[data-iso="${c.iso}"]`).each(function () { this.classList.add("missed"); }));
  }

  function renderWorldResults() {
    const holder = $("#worldResults");
    holder.innerHTML = `<div style="margin-bottom:24px">${resultsCardHTML(W.endInfo)}
      <div class="grid-2">
        <div class="panel"><h3>${icon("trophy")}${t().top10}</h3>${leaderboardHTML("world", W.endInfo.savedId)}</div>
        <div class="panel" style="--c:${cfg.color}"><h3>${icon("trend")}${t().progress}</h3>${progressHTML("world", W.endInfo.savedId ? store.get("fq.name", "") : "")}</div>
      </div></div>`;
    bindResultsCard(holder, W.endInfo, renderWorldResults);
  }

  function finish(timedOut) {
    if (W.ended) return;
    W.ended = true;
    clearInterval(interval);
    clearTimeout(W.pending);
    W.endInfo = { mode: "world", score: W.found.length, total: COUNTRIES.length, timeMs: Math.min(W.durationMs, performance.now() - W.start), timedOut, log: [] };
    draw();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (!W.endInfo.savedId) $("#pname")?.focus({ preventScroll: true });
  }

  cleanup = () => { W.ended = true; clearInterval(interval); clearTimeout(W.pending); clearTimeout(W.confirmTimer); };
  rerender = draw;
  draw();
}

/* ═════════════════════════ Boot ═════════════════════════ */
renderHeader();
go(renderHome);
