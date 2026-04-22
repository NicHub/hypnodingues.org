---
title: "Additifs alimentaires : décoder les E-numéros courants"
date: 2026-04-22
categories:
    - Santé
description: "Tableau de recherche pour retrouver le rôle et la dangerosité supposée d'une cinquantaine d'additifs alimentaires courants, selon Open Food Facts."
tags: ["additifs", "alimentation", "santé", "E-numéros", "Open Food Facts", "nutrition"]
author: Nico
draft: false
---

<style>
  .additifs {
    --panel: #f6f3ed;
    --panel-strong: #ebe3d4;
    --ink: #1c1a17;
    --muted: #6a6258;
    --line: #d9ccb8;
    --accent: #0f766e;
    --accent-strong: #115e59;
    --risk-low-bg: #d9f0de;
    --risk-low-ink: #15532b;
    --risk-mid-bg: #fde9c7;
    --risk-mid-ink: #7a4a0a;
    --risk-high-bg: #fbd7d4;
    --risk-high-ink: #7a1b14;
    --highlight: #fff3b0;
    margin: 2rem 0 3rem;
    color: var(--ink);
  }

  .additifs__panel {
    position: sticky;
    top: 0.5rem;
    z-index: 5;
    background: linear-gradient(135deg, #f7f1e7 0%, #f1ede6 100%);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 1.25rem;
    box-shadow: 0 20px 50px rgba(28, 26, 23, 0.08);
  }

  .additifs__form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.75rem;
    align-items: center;
  }

  .additifs__input,
  .additifs__button {
    font: inherit;
  }

  .additifs__input {
    min-width: 0;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.9rem 1rem;
    background: #fffdf8;
    color: var(--ink);
  }

  .additifs__button {
    border: 0;
    border-radius: 12px;
    padding: 0.9rem 1.2rem;
    background: var(--accent);
    color: #ffffff;
    cursor: pointer;
    font-weight: 700;
  }

  .additifs__button:hover,
  .additifs__button:focus-visible {
    background: var(--accent-strong);
  }

  .additifs__hint {
    margin: 0.85rem 0 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .additifs__table-wrap {
    margin-top: 1.5rem;
    overflow-x: auto;
    border-radius: 16px;
    border: 1px solid var(--line);
    background: #fffdf8;
  }

  .additifs__table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
    font-size: 0.97rem;
  }

  .additifs__table thead th {
    background: var(--panel-strong);
    color: var(--ink);
    text-align: left;
    padding: 0.75rem 0.9rem;
    border-bottom: 1px solid var(--line);
    font-weight: 700;
    position: sticky;
    top: 0;
  }

  .additifs__table tbody td {
    padding: 0.9rem;
    border-bottom: 1px solid #efe7d6;
    vertical-align: top;
    transition: background-color 0.3s ease;
  }

  .additifs__table tbody tr:last-child td {
    border-bottom: 0;
  }

  .additifs__code {
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    width: 1%;
  }

  .additifs__name {
    margin: 0 0 0.25rem;
    font-weight: 700;
  }

  .additifs__use,
  .additifs__note {
    margin: 0;
    color: var(--muted);
  }

  .additifs__note {
    margin-top: 0.35rem;
  }

  .additifs__risk {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .additifs__risk--low  { background: var(--risk-low-bg);  color: var(--risk-low-ink); }
  .additifs__risk--mid  { background: var(--risk-mid-bg);  color: var(--risk-mid-ink); }
  .additifs__risk--high { background: var(--risk-high-bg); color: var(--risk-high-ink); }

  .additifs__source-link {
    display: inline-block;
    margin-top: 0.45rem;
    color: var(--accent-strong);
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgba(17, 94, 89, 0.35);
  }

  .additifs__source-link:hover,
  .additifs__source-link:focus-visible {
    color: #0b3f3b;
    text-decoration-color: currentColor;
    background: transparent;
  }

  .additifs__row--highlight td {
    background: var(--highlight) !important;
  }

  .additifs__row--highlight td:first-child {
    box-shadow: inset 4px 0 0 var(--accent);
  }

  .additifs__source {
    margin-top: 1.25rem;
    color: var(--muted);
    font-size: 0.92rem;
  }

  @media (max-width: 640px) {
    .additifs__form {
      grid-template-columns: 1fr;
    }
  }
</style>

<section class="additifs">
  <div class="additifs__panel" role="search">
    <form class="additifs__form" id="additifs-search-form">
      <input
        class="additifs__input"
        id="additifs-search-query"
        name="q"
        type="search"
        placeholder="Ex. E250, aspartame, curcumine…"
        aria-label="Numéro E ou nom de l’additif"
        autocomplete="off"
      >
      <button class="additifs__button" type="submit">Rechercher</button>
    </form>
    <p class="additifs__hint" id="additifs-search-summary">
      Saisissez un numéro E ou un nom&nbsp;: la recherche se fait au fur et à mesure. Les caractères sont cherchés dans l’ordre (par ex. «&nbsp;25&nbsp;» correspond à E205 comme à E250).
    </p>
  </div>

  <div class="additifs__table-wrap">
    <table class="additifs__table" id="additifs-table">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Nom commun et usage</th>
          <th scope="col">Dangerosité supposée et source</th>
        </tr>
      </thead>
      <tbody id="additifs-body"></tbody>
    </table>
  </div>

  <p class="additifs__source">
    Source de classement&nbsp;:
    <a href="https://fr.openfoodfacts.org/additifs" target="_blank" rel="noopener noreferrer">Open Food Facts — Additifs alimentaires</a>.
    Chaque ligne renvoie vers la fiche OFF de l’additif. Ces informations sont données à titre indicatif&nbsp;:
    la réglementation et les avis scientifiques évoluent, et la tolérance peut varier d’une personne à l’autre.
  </p>
</section>

<script id="additifs-data" type="application/json">
[
  {"code":"E100","name":"Curcumine","use":"Colorant jaune d'origine naturelle (curcuma). Moutardes, currys, sauces, plats cuisinés.","risk":"low","label":"Risque faible","note":"Pas de risque identifié par l'EFSA aux doses autorisées."},
  {"code":"E101","name":"Riboflavine (vitamine B2)","use":"Colorant jaune. Céréales, produits laitiers, compléments alimentaires.","risk":"low","label":"Risque faible","note":"Vitamine du groupe B, aucun risque connu."},
  {"code":"E102","name":"Tartrazine","use":"Colorant jaune azoïque de synthèse. Boissons, bonbons, sauces, pâtisseries.","risk":"mid","label":"Risque modéré","note":"Soupçonné de favoriser l'hyperactivité chez l'enfant (étude de Southampton, 2007). Étiquetage d'avertissement obligatoire en UE."},
  {"code":"E110","name":"Jaune orangé S (Sunset Yellow)","use":"Colorant orange azoïque. Confiseries, sodas, desserts.","risk":"mid","label":"Risque modéré","note":"Lié à l'hyperactivité et à des réactions allergiques. Étiquetage d'avertissement UE."},
  {"code":"E120","name":"Cochenille / acide carminique","use":"Colorant rouge naturel (extrait d'insectes). Yaourts, charcuteries, boissons.","risk":"low","label":"Risque faible","note":"Peut déclencher des allergies chez les personnes sensibilisées, sinon bien toléré."},
  {"code":"E129","name":"Rouge allura AC","use":"Colorant rouge azoïque. Confiseries, glaces, boissons.","risk":"mid","label":"Risque modéré","note":"Lié à l'hyperactivité, déconseillé pour les produits destinés aux enfants."},
  {"code":"E133","name":"Bleu brillant FCF","use":"Colorant bleu synthétique. Confiseries, boissons, produits laitiers.","risk":"low","label":"Risque faible","note":"Généralement considéré sans risque, avec de rares réactions allergiques."},
  {"code":"E150d","name":"Caramel au sulfite d'ammonium","use":"Colorant brun. Colas, sauces, biscuits.","risk":"mid","label":"Risque modéré","note":"Contient du 4-méthylimidazole (4-MEI), classé cancérogène possible par le CIRC (groupe 2B). Teneurs limitées dans certains pays."},
  {"code":"E160a","name":"Bêta-carotène","use":"Colorant orange (provitamine A). Beurres, margarines, boissons, glaces.","risk":"low","label":"Risque faible","note":"Sans risque aux doses alimentaires."},
  {"code":"E162","name":"Rouge de betterave (bétanine)","use":"Colorant rouge naturel. Glaces, produits laitiers, confiseries.","risk":"low","label":"Risque faible","note":"Aucun risque connu."},
  {"code":"E163","name":"Anthocyanes","use":"Colorants rouges/violets naturels (raisin, sureau, chou rouge). Yaourts, confiseries.","risk":"low","label":"Risque faible","note":"Aucun risque connu."},
  {"code":"E171","name":"Dioxyde de titane","use":"Colorant blanc (confiseries, chewing-gums, sauces, compléments).","risk":"high","label":"Risque élevé","note":"Interdit en France depuis 2020, puis dans l'UE en 2022. Effets génotoxiques suspectés (nanoparticules)."},
  {"code":"E200","name":"Acide sorbique","use":"Conservateur antifongique. Fromages, boulangerie, boissons.","risk":"low","label":"Risque faible","note":"Réactions cutanées rares, globalement bien toléré."},
  {"code":"E202","name":"Sorbate de potassium","use":"Conservateur (sel de l'acide sorbique). Fromages, vins, fruits secs.","risk":"low","label":"Risque faible","note":"Bien toléré aux doses autorisées."},
  {"code":"E211","name":"Benzoate de sodium","use":"Conservateur antimicrobien. Sodas, sauces, condiments.","risk":"mid","label":"Risque modéré","note":"Peut former du benzène (cancérogène) en présence de vitamine C. Allergies possibles."},
  {"code":"E220","name":"Dioxyde de soufre","use":"Conservateur et antioxydant. Vins, fruits secs, produits à base de pommes de terre.","risk":"mid","label":"Risque modéré","note":"Allergène reconnu (asthmatiques), détruit la vitamine B1. Étiquetage obligatoire au-dessus de 10 mg/kg."},
  {"code":"E250","name":"Nitrite de sodium","use":"Conservateur antibotulique et colorant rose. Charcuteries, jambons, saucissons.","risk":"high","label":"Risque élevé","note":"La charcuterie est classée cancérogène avéré (CIRC, groupe 1), en lien avec la formation de nitrosamines. Une réduction progressive est engagée en France."},
  {"code":"E252","name":"Nitrate de potassium","use":"Conservateur. Charcuteries, certains fromages.","risk":"high","label":"Risque élevé","note":"Se transforme en nitrite puis en nitrosamines ; même famille de risque que l'E250."},
  {"code":"E270","name":"Acide lactique","use":"Acidifiant, conservateur. Produits laitiers, boissons, boulangerie.","risk":"low","label":"Risque faible","note":"Produit naturellement par fermentation, aucun risque aux doses alimentaires."},
  {"code":"E300","name":"Acide ascorbique (vitamine C)","use":"Antioxydant. Boissons, charcuteries, conserves.","risk":"low","label":"Risque faible","note":"Vitamine, sans risque aux doses alimentaires."},
  {"code":"E306","name":"Extrait riche en tocophérols (vitamine E)","use":"Antioxydant naturel. Huiles, margarines, produits gras.","risk":"low","label":"Risque faible","note":"Vitamine E, bien toléré."},
  {"code":"E322","name":"Lécithines","use":"Émulsifiant (soja ou tournesol). Chocolats, margarines, pains.","risk":"low","label":"Risque faible","note":"Très bien toléré. À déclarer comme allergène si extrait de soja."},
  {"code":"E330","name":"Acide citrique","use":"Acidifiant, antioxydant, régulateur d'acidité. Omniprésent (boissons, confitures, conserves).","risk":"low","label":"Risque faible","note":"Sans risque connu ; peut déminéraliser l'émail dentaire à forte consommation."},
  {"code":"E331","name":"Citrates de sodium","use":"Régulateur d'acidité, émulsifiant. Boissons, fromages fondus, plats préparés.","risk":"low","label":"Risque faible","note":"Aucun risque identifié."},
  {"code":"E406","name":"Agar-agar","use":"Gélifiant naturel (algue rouge). Desserts, confiseries, pâtes de fruits.","risk":"low","label":"Risque faible","note":"Bien toléré ; effet laxatif à forte dose."},
  {"code":"E407","name":"Carraghénanes","use":"Gélifiant et épaississant (algue). Produits laitiers, charcuteries, plats préparés.","risk":"mid","label":"Risque modéré","note":"Suspecté de favoriser l'inflammation intestinale et des lésions digestives (études animales)."},
  {"code":"E410","name":"Farine de graines de caroube","use":"Épaississant, gélifiant naturel. Glaces, sauces, produits laitiers.","risk":"low","label":"Risque faible","note":"Bien toléré."},
  {"code":"E412","name":"Gomme de guar","use":"Épaississant. Produits laitiers, plats cuisinés, produits sans gluten.","risk":"low","label":"Risque faible","note":"Bien toléré ; effet laxatif à forte dose."},
  {"code":"E414","name":"Gomme arabique","use":"Épaississant, stabilisant, support d'arôme. Confiseries, boissons.","risk":"low","label":"Risque faible","note":"Bien toléré."},
  {"code":"E415","name":"Gomme xanthane","use":"Épaississant. Sauces, produits sans gluten, produits laitiers.","risk":"low","label":"Risque faible","note":"Bien toléré."},
  {"code":"E420","name":"Sorbitol","use":"Édulcorant de masse, humectant. Confiseries, produits « sans sucre ».","risk":"low","label":"Risque faible","note":"Effet laxatif à forte dose ; mention obligatoire au-dessus de 10 % du produit."},
  {"code":"E422","name":"Glycérol","use":"Humectant, solvant. Pâtisseries, glaçages, confiseries.","risk":"low","label":"Risque faible","note":"Bien toléré."},
  {"code":"E440","name":"Pectines","use":"Gélifiant naturel (fruits). Confitures, gelées, pâtes de fruits.","risk":"low","label":"Risque faible","note":"Bien toléré."},
  {"code":"E450","name":"Diphosphates","use":"Régulateur d'acidité, poudre à lever. Viennoiseries, charcuteries, fromages fondus.","risk":"mid","label":"Risque modéré","note":"Contribution à un apport excessif en phosphore dans les régimes occidentaux, avec possibles effets sur les reins et les os."},
  {"code":"E460","name":"Cellulose","use":"Épaississant, anti-agglomérant. Fromages râpés, pains de mie.","risk":"low","label":"Risque faible","note":"Fibre végétale, non absorbée."},
  {"code":"E471","name":"Mono- et diglycérides d'acides gras","use":"Émulsifiant très répandu. Margarines, viennoiseries, glaces, pains industriels.","risk":"mid","label":"Risque modéré","note":"Peut contenir des acides gras trans. Des travaux récents évoquent un possible effet sur le microbiote."},
  {"code":"E500","name":"Bicarbonates de sodium","use":"Poudre à lever, régulateur d'acidité. Biscuits, pains, boissons.","risk":"low","label":"Risque faible","note":"Sans risque aux doses alimentaires."},
  {"code":"E503","name":"Carbonates d'ammonium","use":"Poudre à lever. Biscuits secs, pâtisseries.","risk":"low","label":"Risque faible","note":"Sans risque aux doses autorisées."},
  {"code":"E551","name":"Dioxyde de silicium (silice)","use":"Anti-agglomérant. Sel, épices, sucres, compléments alimentaires.","risk":"mid","label":"Risque modéré","note":"Présence possible de nanoparticules, dont les effets à long terme sont mal connus."},
  {"code":"E621","name":"Glutamate monosodique","use":"Exhausteur de goût. Plats préparés, sauces, bouillons, snacks salés.","risk":"mid","label":"Risque modéré","note":"DJA abaissée par l'EFSA en 2017 (30 mg/kg). Certaines personnes rapportent des maux de tête."},
  {"code":"E627","name":"Guanylate disodique","use":"Exhausteur de goût (souvent associé à l'E621). Plats préparés, bouillons.","risk":"low","label":"Risque faible","note":"Déconseillé en cas de goutte (purines), sinon bien toléré."},
  {"code":"E631","name":"Inosinate disodique","use":"Exhausteur de goût (souvent associé à l'E621). Chips, soupes.","risk":"low","label":"Risque faible","note":"Déconseillé en cas de goutte, sinon bien toléré."},
  {"code":"E900","name":"Diméthylpolysiloxane","use":"Antimoussant. Huiles de friture industrielles, certaines boissons.","risk":"low","label":"Risque faible","note":"Non absorbé par l'organisme, aucun risque identifié."},
  {"code":"E950","name":"Acésulfame K","use":"Édulcorant intense. Boissons « light », desserts, chewing-gums.","risk":"mid","label":"Risque modéré","note":"Études animales discordantes sur la cancérogénicité. L'EFSA le considère sûr, plusieurs ONG restent réservées."},
  {"code":"E951","name":"Aspartame","use":"Édulcorant intense. Sodas light, desserts, chewing-gums.","risk":"mid","label":"Risque modéré","note":"Classé cancérogène possible pour l'humain par le CIRC (groupe 2B, juillet 2023). Apport de phénylalanine : contre-indiqué en cas de phénylcétonurie."},
  {"code":"E952","name":"Cyclamates","use":"Édulcorant intense. Boissons, confiseries, édulcorants de table.","risk":"mid","label":"Risque modéré","note":"Interdit aux États-Unis depuis 1969 en raison de soupçons de cancérogénicité à forte dose."},
  {"code":"E954","name":"Saccharine","use":"Édulcorant intense. Édulcorants de table, pâtisserie.","risk":"mid","label":"Risque modéré","note":"Anciennement soupçonnée cancérogène, désormais considérée sans risque aux doses habituelles."},
  {"code":"E955","name":"Sucralose","use":"Édulcorant intense. Boissons, yaourts, desserts.","risk":"mid","label":"Risque modéré","note":"Peut former des chloropropanols à haute température. Effets sur le microbiote intestinal débattus."},
  {"code":"E960","name":"Glycosides de stéviol (stévia)","use":"Édulcorant intense d'origine naturelle. Boissons, yaourts, chocolats.","risk":"low","label":"Risque faible","note":"EFSA : sans risque dans la DJA (4 mg/kg de poids corporel)."},
  {"code":"E968","name":"Érythritol","use":"Polyol édulcorant. Confiseries, boissons, produits « sans sucre ».","risk":"low","label":"Risque faible","note":"Une étude publiée dans Nature Medicine en 2023 évoque un lien possible avec le risque cardiovasculaire, à confirmer."}
]
</script>

<script>
  (function () {
    const form = document.getElementById("additifs-search-form");
    const input = document.getElementById("additifs-search-query");
    const summary = document.getElementById("additifs-search-summary");
    const body = document.getElementById("additifs-body");
    const data = JSON.parse(document.getElementById("additifs-data").textContent);

    function escapeHtml(value) {
      return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
    }

    function normalize(value) {
      return String(value)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "");
    }

    function isSubsequence(needle, haystack) {
      let i = 0;
      for (let j = 0; j < haystack.length && i < needle.length; j++) {
        if (needle[i] === haystack[j]) i++;
      }
      return i === needle.length;
    }

    function slugifyCode(code) {
      return code.toLowerCase();
    }

    function buildOffUrl(code) {
      return "https://fr.openfoodfacts.org/additif/" + slugifyCode(code);
    }

    function render() {
      body.innerHTML = data.map(function (item) {
        const rowId = "additif-" + slugifyCode(item.code);
        const searchable = (item.code + " " + item.name).toLowerCase();
        return [
          '<tr class="additifs__row" id="' + rowId + '" data-searchable="' + escapeHtml(searchable) + '">',
            '<td class="additifs__code">' + escapeHtml(item.code) + '</td>',
            '<td>',
              '<p class="additifs__name">' + escapeHtml(item.name) + '</p>',
              '<p class="additifs__use">' + escapeHtml(item.use) + '</p>',
            '</td>',
            '<td>',
              '<span class="additifs__risk additifs__risk--' + escapeHtml(item.risk) + '">' + escapeHtml(item.label) + '</span>',
              '<p class="additifs__note">' + escapeHtml(item.note) + '</p>',
              '<a class="additifs__source-link" href="' + buildOffUrl(item.code) + '" target="_blank" rel="noopener noreferrer">Fiche Open Food Facts</a>',
            '</td>',
          '</tr>'
        ].join("");
      }).join("");
    }

    function clearHighlight() {
      body.querySelectorAll(".additifs__row--highlight").forEach(function (row) {
        row.classList.remove("additifs__row--highlight");
      });
    }

    function scrollRowToTop(row) {
      const panel = document.querySelector(".additifs__panel");
      const panelBottom = panel ? panel.getBoundingClientRect().bottom : 0;
      const rowTop = row.getBoundingClientRect().top;
      const padding = 16;
      const delta = rowTop - panelBottom - padding;
      if (Math.abs(delta) < 2) return;
      window.scrollBy({ top: delta, behavior: "smooth" });
    }

    function runSearch(rawQuery) {
      const query = rawQuery.trim();
      clearHighlight();

      if (!query) {
        summary.innerHTML = "Saisissez un numéro E ou un nom&nbsp;: la recherche se fait au fur et à mesure. Les caractères sont cherchés dans l’ordre (par ex. «&nbsp;25&nbsp;» correspond à E205 comme à E250).";
        const url = new URL(window.location.href);
        url.searchParams.delete("q");
        window.history.replaceState({}, "", url);
        return;
      }

      const needle = normalize(query);
      const rows = Array.from(body.querySelectorAll(".additifs__row"));
      const matches = needle
        ? rows.filter(function (row) {
            return isSubsequence(needle, normalize(row.dataset.searchable));
          })
        : [];

      const safeQuery = escapeHtml(query);

      if (matches.length === 0) {
        summary.innerHTML = 'Aucune correspondance pour "<strong>' + safeQuery + '</strong>".';
      } else {
        matches.forEach(function (row) {
          row.classList.add("additifs__row--highlight");
        });
        scrollRowToTop(matches[0]);
        const plural = matches.length > 1 ? "s" : "";
        summary.innerHTML = matches.length + " correspondance" + plural +
          ' pour "<strong>' + safeQuery + '</strong>".';
      }

      const url = new URL(window.location.href);
      url.searchParams.set("q", query);
      window.history.replaceState({}, "", url);
    }

    render();

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      runSearch(input.value);
    });

    input.addEventListener("input", function () {
      runSearch(input.value);
    });

    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery) {
      input.value = initialQuery;
      runSearch(initialQuery);
    }
  }());
</script>
