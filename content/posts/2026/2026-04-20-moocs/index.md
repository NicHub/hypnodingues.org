---
title: "Meta moteur de recherche de MOOC"
date: 2026-04-20T00:00:00+02:00
categories:
    - Technique
description: "Recherche simultanee de MOOCs sur plusieurs plateformes depuis une interface unique."
tags: ["mooc", "formation", "recherche", "apprentissage", "education"]
author: Nico
draft: false
---

<style>
  .mooc-search {
    --panel: #f6f3ed;
    --panel-strong: #ebe3d4;
    --ink: #1c1a17;
    --muted: #6a6258;
    --line: #d9ccb8;
    --accent: #0f766e;
    --accent-strong: #115e59;
    margin: 2rem 0 3rem;
    color: var(--ink);
  }

  .mooc-search__intro {
    margin-bottom: 1.5rem;
  }

  .mooc-search__panel {
    background: linear-gradient(135deg, #f7f1e7 0%, #f1ede6 100%);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 1.25rem;
    box-shadow: 0 20px 50px rgba(28, 26, 23, 0.08);
  }

  .mooc-search__form {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 0.75rem;
    align-items: center;
  }

  .mooc-search__input,
  .mooc-search__button {
    font: inherit;
  }

  .mooc-search__input {
    min-width: 0;
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.9rem 1rem;
    background: #fffdf8;
    color: var(--ink);
  }

  .mooc-search__button {
    border: 0;
    border-radius: 12px;
    padding: 0.9rem 1.2rem;
    background: var(--accent);
    color: #ffffff;
    cursor: pointer;
    font-weight: 700;
  }

  .mooc-search__button:hover,
  .mooc-search__button:focus-visible {
    background: var(--accent-strong);
  }

  .mooc-search__hint {
    margin: 0.85rem 0 0;
    color: var(--muted);
    font-size: 0.95rem;
  }

  .mooc-search__results {
    margin-top: 1.5rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .mooc-search__card {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 1rem;
    display: grid;
    gap: 0.65rem;
  }

  .mooc-search__card h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  .mooc-search__meta {
    margin: 0;
    color: var(--muted);
    font-size: 0.92rem;
  }

  .mooc-search__meta-link {
    color: inherit;
    text-decoration: underline;
    text-decoration-color: rgba(106, 98, 88, 0.45);
    word-break: break-word;
  }

  .mooc-search__meta-link:hover,
  .mooc-search__meta-link:focus-visible {
    color: var(--accent-strong);
    text-decoration-color: currentColor;
    background: transparent;
  }

  .mooc-search__actions {
    display: block;
  }

  .mooc-search__search-link {
    color: var(--accent-strong);
    font-weight: 700;
    text-decoration: underline;
    text-decoration-color: rgba(17, 94, 89, 0.35);
  }

  .mooc-search__search-link:hover,
  .mooc-search__search-link:focus-visible {
    color: #0b3f3b;
    text-decoration-color: currentColor;
    background: transparent;
  }

  @media (max-width: 640px) {
    .mooc-search__form {
      grid-template-columns: 1fr;
    }
  }
</style>

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
    <p class="mooc-search__hint" id="mooc-search-summary">Recherche en cours pour "kicad".</p>
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
