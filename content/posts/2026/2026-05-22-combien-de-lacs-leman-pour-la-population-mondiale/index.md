---
title: "Combien faut-il de lacs Léman pour faire tenir la population mondiale de 2026 serrée côte à côte ?"
date: 2026-05-22T00:00:00+02:00
categories: [Société]
author: Nico
draft: false
---

    {{< comment >}}

        style.scss externe

    {{< /comment >}}

> Réponse : Il faut **2.8 lacs Léman** pour une densité de 5 personnes / m².

## Calcul

```python
# %%
from rich import print
d = [0.44, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  #  personne / m²
p = 8.2e9  #  population mondiale en 2026
s = 581.3E6  #  m² (superficie du lac Léman)
éll = [p * _d**-1 * s**-1 for _d in d]  #  Équivalent lac Léman
print([
       f"{_d:4.1f} personne / m²"
       f" ⇒ {_éll:4.1f} × lac Léman"
       for _éll, _d in zip(éll, d)
])
# %%
```

## Pourquoi se poser cette question ?

Parce que ce n’est pas facile de se représenter 8.2 milliards de personnes.
Une idée pour y parvenir est de compter en “lac Léman”[^4], car on peut se faire une idée de la taille de ce lac sur une carte.
En plus, on peut le voir en vrai dans son entier depuis les montagnes avoisinantes.

## Les seuils de densité humaine

### Source

-   _YouTube — Fouloscopie — 10 niveaux de foule expliqués avec des tomates_[^1]

### Données

| Densité (pers/m²) | _ÉLL_[^10] | Conséquences / ressenti                                                                                       | Horodatage vidéo                                           |
| ----------------: | ---------: | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
|                ~0 |          – | Très spacieux.                                                                                                | [2:44](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=164s) |
|              0.44 |       32.1 | Distance COVID de 1.5 m.[^9]                                                                                  | [2:44](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=164s) |
|                 1 |       14.1 | Rue commerçante animée, encore confortable.                                                                   | [3:20](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=200s) |
|                 2 |        7.1 | Début de l’inconfort, intrusion dans la sphère privée, marche ralentie de moitié.                             | [3:47](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=227s) |
|                 3 |        4.7 | Métro bondé, sphère intime violée, effet d’accordéon dans les déplacements.                                   | [4:42](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=282s) |
|                 4 |        3.5 | État de congestion, foule très serrée, mouvements très lents.                                                 | [5:33](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=333s) |
|                 5 |        2.8 | Limite du supportable. Contacts physiques constants mais encore absorbables par le corps.                     | [6:08](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=368s) |
|                 6 |        2.4 | Dépassement des normes de sécurité. Début des transferts de force et vagues de bousculades.                   | [7:36](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=456s) |
|                 7 |        2.0 | Situation dangereuse. Turbulences de foule, propagation chaotique des forces, comportement “fluide”.          | [8:26](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=506s) |
|                 8 |        1.8 | Blessures physiques possibles (côtes fracturées), risque d’effet domino mortel. Love Parade 2010 ≈ 8 pers/m². | [9:13](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=553s) |
|                 9 |        1.6 | Plus assez d’espace pour respirer. Catastrophe de La Mecque 2006.                                             | [9:40](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=580s) |
|                10 |        1.4 | “Désastre total”. Niveau jamais mesuré scientifiquement.                                                      | [9:54](https://www.youtube.com/watch?v=Eh7l4Gvx054&t=594s) |

## Autre question

En corollaire à la première question, vient à l’esprit cette expérience de pensée :
quelle serait la densité si toute la population humaine de 2026 était répartie sur le territoire suisse[^8] ?

> Réponse : La densité serait de **0.20 personnes / m²**, soit un carré de 2.24 m de côté par personne.

```python
# %%
p = 8.2E9  #  population mondiale en 2026
s = 41_285E6  #  m² (superficie de la Suisse)
d = p * s**-1
print(f"{d:0.2f}"
       " personne / m²") #  0.20 personne / m²
# %%
```

## Pourquoi se poser cette autre question ?

Parce qu’une grande peur malthusienne[^3] a poussé l’UDC, un parti d’extrême droite suisse, à déposer l’initiative « Pas de Suisse à 10 millions ! »[^6].
Cette initiative a été rejetée le 14 juin 2026 par 54.8 % de la population et 56.5 % des cantons[^7].

## Notes [^2][^5]

[^1]: [YouTube — Fouloscopie — 10 niveaux de foule expliqués avec des tomates](https://www.youtube.com/watch?v=Eh7l4Gvx054)

[^2]: [YouTube — Akim Latioui — L’Expérience interdite qui a prédit notre effondrement (Le dossier Univers 25)](https://www.youtube.com/watch?v=oq62923hoQ0)

[^3]: [Wikipédia — Le malthusianisme](https://fr.wikipedia.org/wiki/Malthusianisme)

[^4]: [Wikipédia — Lac Léman](https://fr.wikipedia.org/wiki/L%C3%A9man)

[^5]: [Wikipédia — Liste des pays et territoires par superficie](https://fr.wikipedia.org/wiki/Liste_des_pays_et_territoires_par_superficie)

[^6]: [admin.ch — Texte — Initiative populaire « Pas de Suisse à 10 millions ! »](https://www.fedlex.admin.ch/eli/fga/2026/17/fr)

[^7]: [admin.ch — Résultats — Initiative populaire « Pas de Suisse à 10 millions ! »](https://abstimmungen.admin.ch/fr/details?proposalId=6860)

[^8]: [Wikipédia — Suisse](https://fr.wikipedia.org/wiki/Suisse)

[^9]: Dans la vidéo, Mehdi indique 0.14 pers./m² => dist. 2 × 1.5 m entre les personnes.

[^10]: ÉLL = Équivalent Lac Léman pour faire tenir la population humaine de 2026 serrée côte à côte
