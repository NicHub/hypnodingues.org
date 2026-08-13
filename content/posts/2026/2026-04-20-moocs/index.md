---
title: "Meta moteur de recherche de MOOC"
date: 2026-04-20T00:00:00+02:00
categories: [Technique]
author: Nico
draft: false
---

{{< comment >}}

    style.scss externe

{{< /comment >}}

<section class="mooc-search" aria-labelledby="mooc-search-title">
  <div class="mooc-search__intro">
    <h2 id="mooc-search-title">Chercher un MOOC sur plusieurs plateformes</h2>
    <p>Cette page genere des liens de recherche vers plusieurs catalogues de cours. Saisissez un sujet, puis lancez la recherche.</p>
  </div>

  <div class="mooc-search__panel">
    <form class="mooc-search__form" id="mooc-search-form">
      <input
        class="mooc-search__input"
        id="mooc-search-query"
        name="q"
        type="search"
        value="kicad"
        placeholder="Ex. kicad, python, electronique"
        aria-label="Sujet a rechercher"
      >
      <button class="mooc-search__button" type="submit">Rechercher</button>
    </form>
    <p class="mooc-search__hint" id="mooc-search-summary">Recherche en cours pour “kicad”.</p>
  </div>

  <div class="mooc-search__results" id="mooc-search-results"></div>
</section>

<script id="mooc-platforms-data" type="application/json">
[
  {
    "name": "Coursera",
    "homepage": "https://www.coursera.org",
    "searchUrl": "https://www.coursera.org/search?query=__QUERY__"
  },
  {
    "name": "edX",
    "homepage": "https://www.edx.org",
    "searchUrl": "https://www.edx.org/search?q=__QUERY__"
  },
  {
    "name": "FutureLearn",
    "homepage": "https://www.futurelearn.com",
    "searchUrl": "https://www.futurelearn.com/search?q=__QUERY__"
  },
  {
    "name": "OpenClassrooms",
    "homepage": "https://openclassrooms.com",
    "searchUrl": "https://openclassrooms.com/fr/search?query=__QUERY__"
  },
  {
    "name": "FUN MOOC",
    "homepage": "https://www.fun-mooc.fr",
    "searchUrl": "https://www.fun-mooc.fr/fr/cours/?query=__QUERY__"
  },
  {
    "name": "Udacity",
    "homepage": "https://www.udacity.com",
    "searchUrl": "https://www.udacity.com/catalog?sort=relevance&searchValue=__QUERY__"
  },
  {
    "name": "DataCamp",
    "homepage": "https://www.datacamp.com",
    "searchUrl": "https://www.datacamp.com/courses-all?q=__QUERY__"
  },
  {
    "name": "Khan Academy",
    "homepage": "https://www.khanacademy.org",
    "searchUrl": "https://www.khanacademy.org/search?page_search_query=__QUERY__"
  },
  {
    "name": "freeCodeCamp",
    "homepage": "https://www.freecodecamp.org",
    "searchUrl": "https://www.freecodecamp.org/news/search/?query=__QUERY__"
  },
  {
    "name": "MIT OpenCourseWare",
    "homepage": "https://ocw.mit.edu",
    "searchUrl": "https://ocw.mit.edu/search/?q=__QUERY__"
  },
  {
    "name": "Udemy",
    "homepage": "https://www.udemy.com",
    "searchUrl": "https://www.udemy.com/courses/search/?src=ukw&q=__QUERY__"
  },
  {
    "name": "Class Central",
    "homepage": "https://www.classcentral.com",
    "searchUrl": "https://www.classcentral.com/search?q=__QUERY__"
  }
]
</script>

<script>
  (function () {
    const form = document.getElementById("mooc-search-form");
    const input = document.getElementById("mooc-search-query");
    const results = document.getElementById("mooc-search-results");
    const summary = document.getElementById("mooc-search-summary");
    const platforms = JSON.parse(document.getElementById("mooc-platforms-data").textContent);
    const fallbackQuery = "kicad";

    function escapeHtml(value) {
      return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
    }

    function buildSearchUrl(template, query) {
      return template.replace("__QUERY__", encodeURIComponent(query));
    }

    function render(query) {
      const cleanQuery = query.trim() || fallbackQuery;
      const safeQuery = escapeHtml(cleanQuery);

      summary.innerHTML = 'Recherche en cours pour "<strong>' + safeQuery + '</strong>".';
      results.innerHTML = platforms.map(function (platform) {
        const searchUrl = buildSearchUrl(platform.searchUrl, cleanQuery);
        return [
          '<article class="mooc-search__card">',
          '<h3>' + escapeHtml(platform.name) + '</h3>',
          '<p class="mooc-search__meta"><a class="mooc-search__meta-link" href="' + platform.homepage + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(platform.homepage) + '</a></p>',
          '<div class="mooc-search__actions">',
          '<a class="mooc-search__search-link" href="' + searchUrl + '" target="_blank" rel="noopener noreferrer">Rechercher</a>',
          '</div>',
          '</article>'
        ].join("");
      }).join("");

      const url = new URL(window.location.href);
      url.searchParams.set("q", cleanQuery);
      window.history.replaceState({}, "", url);
      input.value = cleanQuery;
    }

    const initialQuery = new URLSearchParams(window.location.search).get("q") || input.value || fallbackQuery;
    render(initialQuery);

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      render(input.value);
    });
  }());
</script>
