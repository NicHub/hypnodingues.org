---
title: "Additifs alimentaires : décoder les E-numéros courants"
date: 2026-04-22T00:00:00+02:00
categories:
- Santé
description: "Tableau de recherche pour retrouver le rôle et la dangerosité supposée d'une cinquantaine d'additifs alimentaires courants, selon Open Food Facts."
tags: ["additifs", "alimentation", "santé", "E-numéros", "Open Food Facts", "nutrition"]
author: Nico
draft: false
---


<link rel="stylesheet" href="additifs.css">

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

</section>

<script src="additifs.js" defer></script>

### Source

-   [Open Food Facts — Additifs alimentaires](https://fr.openfoodfacts.org/additifs)

### Notes

Chaque ligne renvoie vers la fiche OFF de l’additif. Ces informations sont données à titre indicatif : la réglementation et les avis scientifiques évoluent, et la tolérance peut varier d’une personne à l’autre.

### Voir aussi

-   [sulfite — La TRISTE vérité derrière ces crevettes "parfaites" #shorts | 750GTV](https://www.youtube.com/watch?v=PAid8NfMjcY)
