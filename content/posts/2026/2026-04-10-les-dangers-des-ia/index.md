---
title: "Les dangers des IA"
date: 2026-04-10T11:12:00+02:00
categories: [IA]
author: Nico
draft: false
description: "Une liste non exhaustive des dangers des IA, entre erreurs, biais, intrusions, dépendance et impacts environnementaux."
social_title: "Les dangers des IA"
social_description: "Une liste non exhaustive des dangers des IA, entre erreurs, biais, intrusions, dépendance et impacts environnementaux."
social_image: "./images/calvin-and-hobbes-leave-math-to-the-machines-halo.webp"
social_type: "article"
twitter_card: "summary_large_image"
---

{{< comment >}}

    ## DÉSACTIVE CERTAINES NOTIFICATIONS MarkdownLint

    -   MD051 - Link fragments should be valid
        <https://github.com/DavidAnson/markdownlint/blob/v0.41.1/doc/md051.md>
        <!-- markdownlint-disable MD051 -->

    -   MD053 - “Link and image reference definitions should be needed”
        <https://github.com/DavidAnson/markdownlint/blob/v0.41.1/doc/md053.md>
        <!-- markdownlint-disable MD053 -->

    ## STYLES

    -   Cet article utilise sa propre feuille de style CSS, `style.css`, qui surcharge les styles par défaut.

    ## !!! ORDRE D’APPARITION DES LIENS EN PIED DE PAGE !!!

        L’ordre d’apparition des liens est différent dans les pieds de page du document Markdown et du document HTML.
        Ceci est dû au fait que Hugo classe les liens en pied de page du HTML par ordre d’apparition dans le texte.

    ## À VOIR AUSSI / À CLASSER

    -   https://actu.epfl.ch/news/l-epfl-lance-le-premier-llm-medical-entierement-ou/
    -   https://romande-ia.ch/
    -   https://www.ictjournal.ch/news/2025-07-08/ffd-romandie-lance-deux-formations-certifiees-en-ia-et-e-commerce

{{< /comment >}}

> Les IA ne sont pas de simples outils neutres.
> Leur déploiement rapide transforme déjà nos manières de travailler, de créer, de décider et de nous informer.
>
> Voici une liste non exhaustive et évolutive des dangers qu’elles font peser sur les individus, la société et l’environnement.

![Calvin and Hobbes: Leave Math to the Machines](./images/calvin-and-hobbes-leave-math-to-the-machines-halo.webp)

1. **Elles n’offrent aucune garantie d’accès à leurs services**
    -   L’accès à leurs services est révocable unilatéralement et subitement par leurs fournisseurs ou leur régulateur.
    -   Le 13 juin 2026, Washing­ton a ordonné à Anthro­pic de cou­per l’accès à ses modèles de pointe – Mythos et Fable – à toute per­sonne de natio­na­lité étran­gère. Y com­pris ses propres employés. Du jour au len­de­main, des cen­taines de mil­lions d’uti­li­sa­teurs ont perdu un outil de tra­vail, sans avoir pris part à aucun débat. «Res­sor­tis­sant étran­ger» est devenu une caté­go­rie de confor­mité pour accé­der à une machine à pen­ser.
        _PressReader — Le Temps — Est-ce le bruit des bottes ou celui de l’éveil que nous entendons ?_[^25]

2. **Elles peuvent changer de propriétaire**
    -   Comme pour tout service _cloud_, lorsqu’un fournisseur d’IA change de propriétaire, les données de ses utilisateurs peuvent être transférées à l’acquéreur.
        Cet acquéreur peut être problématique, par exemple si c’est un concurrent de l’entreprise utilisatrice.

3. **Elles sont faillibles**
    -   Ce qui nécessite des procédures de vérification qui ne sont pas toujours mises en place.
    -   De plus, si les adultes d’aujourd’hui qui ont été formés sans les IA peuvent potentiellement détecter leurs erreurs, est-ce que ce sera le cas des adultes de demain qui se forment aujourd’hui avec elles ?
    -   _YouTube — Le Parisien — Cet Américain est coincé dans une voiture autonome... qui tourne en rond_[^58]

4. **Elles sont biaisées**
    -   Il faut vérifier qu’elles ne préfèrent pas une catégorie à une autre, par exemple une catégorie raciale ou de genre.[^55]
    -   _RTS — L’IA de Google est-elle raciste ? Et comment s’en protéger ?_[^65]

5. **Elles induisent en erreur**
    -   Avec des _deepfakes_ très réalistes.
        -   Hypertrucages
        -   Montages hyperréalistes susceptibles de tromper le public
    -   En se faisant passer pour quelqu’un d’autre.[^48]

6. **Elles ne respectent pas la protection des données**
    -   Elles sont entrainées avec des sources qui peuvent contenir des informations sensibles, privées ou confidentielles.

7. **Elles exploitent des œuvres sur lesquelles elles n’ont pas de droits**[^22]
    -   Leurs fournisseurs contournent le problème en stipulant dans leurs conditions générales que ce n’est pas leur responsabilité de respecter les droits d’auteur, mais celle de l’utilisateur final.
    -   Sujet connexe : _L’échelle Dalia_[^37]
    -   Voir aussi : _PressReader — Le Temps — 10 aout 2026 — Le mar­quage obli­ga­toire de l’IA, et com­ment il fonc­tionne_[^51]

8. **Elles s’attribuent des droits sur les œuvres auxquelles elles ont contribué**
    -   Elles peuvent se présenter comme “coauteurs” plutôt que comme simples assistants, ce qui entretient une ambiguïté sur la titularité des droits, la part de contribution humaine et la responsabilité juridique des productions.[^35][^36]
    -   Ce glissement de vocabulaire peut servir à habituer les utilisateurs, les entreprises et les tribunaux à considérer l’IA comme une entité créative plutôt que comme un outil.
    -   Sujet connexe : _L’échelle Dalia_[^37]

9. **Elles ne respectent pas les régulations**
    -   _Elles ne respectent pas ou peu le RGPD_[^23].
    -   De plus, le développement du cadre légal est beaucoup plus lent que le développement de la technologie.
        Par exemple, l’UE ne s’est octroyé des pouvoirs extensifs via l’_IA Act_ que le 2 août 2026 alors que la première version de ChatGPT est sortie le 30 novembre 2022.[^46]

10. **Elles ne sont pas juridiquement responsables de leurs failles**
    -   Si elles se plantent, qui est responsable ? Qui paie les réparations ?
        -   Dysfonctionnements ou accidents de véhicules autonomes.[^2]
        -   Suppression accidentelle et dommageable de données informatiques.
        -   Attaque non planifiée, comme l’attaque en juillet 2026 de _[Hugging Face]_ par ChatGPT 5.6 Sol.[^47]

11. **Elles rendent les humains incompétents et dépendants de leurs services**
    -   Elles atrophient les compétences en facilitant l’obtention de résultats sans effort et en favorisant l’externalisation de la pensée.[^39]
    -   Si seuls les experts sont sollicités, alors les novices ne peuvent plus acquérir l’expérience nécessaire pour être experts.
    -   Elles donnent du travail qualifié à des employés dont ce n’est pas la qualification.
    -   _YouTube — Micode — La fabrique à idiots_[^9]

12. **Elles remplacent les humains**
    -   Plusieurs métiers disparaissent, vont disparaitre ou être profondément transformés.
    -   L’objectif affiché de certaines entreprises est même de remplacer une part majoritaire de l’activité économique humaine.[^39]
    -   Les humains qui ne maitriseront pas l’usage de l’IA seront très impactés.
        > _“AI won’t replace humans — But humans with AI will replace humans without AI.”_
        > _— Karim Lakhani, Harvard Business School Professor_
    -   _RTS — L’IA résout un problème sur lequel butaient les mathématiciens depuis 80 ans_[^19]
    -   Elon Musk, Sam Altman et quelques autres ont même proposé d’instaurer un revenu universel.
        _PressReader — Le Temps — Saura-t-on rappeler à l’IA qu’elle nous est redevable ?_[^24]
    -   _YouTube — Monsieur Phi — Pourquoi les mathématiciens s’inquiètent de l’avenir de leur discipline_[^20]

13. **Elles sont utilisées pour évaluer le travail des humains**
    -   Le travail fourni par les humains, qu’il soit assisté ou non par des agents, est de plus en plus souvent évalué par des IA, elles-mêmes assistées ou non par des humains.
    -   Conséquences délétères possibles :
        -   Lassitude et sentiment d’inutilité chez les humains : à quoi bon s’investir si une IA peut contrôler, corriger ou invalider le résultat ?
        -   Déresponsabilisation des décideurs humains.
        -   Difficulté à contester une évaluation automatisée.
        -   Opacité des critères d’évaluation.
        -   Renforcement des biais existants.
        -   Uniformisation des productions pour plaire aux systèmes d’évaluation.
        -   Réduction de la confiance entre humains.
        -   Dégradation des compétences d’évaluation humaines.
        -   Confusion entre conformité statistique et qualité réelle.
        -   Mise sous surveillance permanente du travail.
        -   Effet de boucle : des IA produisent, d’autres IA évaluent, puis ces évaluations servent à entrainer de nouvelles IA.

14. **Elles sont énergivores**
    -   Une requête ChatGPT consomme vingt fois plus d’énergie qu’une requête sur un moteur de recherche standard.
    -   En conséquence, les fournisseurs d’IA sont en train de s’équiper de moyens de production d’énergie comme des centrales nucléaires, ce qui pose le problème connexe de la souveraineté énergétique des États.
    -   Le déploiement massif de centres de données pour l’IA crée aussi un nouvel appel d’air pour les énergies fossiles.[^39]
    -   _Science étonnante — Combien consomme une requête à ChatGPT ?_[^1]
    -   _The Shift Project — Intelligence artificielle, données, calculs : quelles infrastructures dans un monde décarboné ?_[^31]
    -   On pourrait imaginer qu’elles consomment tellement qu’on en arrive à une situation de krach énergétique.

15. **Elles ont un impact environnemental conséquent**
    -   Mitage
    -   Pollution
    -   Bruit
    -   Consommation d’eau
        -   _YouTube — Numerama — Tout le monde se trompe sur l’eau consommée par l’IA_[^64]
    -   Greenwashing[^39]

16. **Elles sont vulnérables**
    -   Car elles dépendent de composants logiciels et matériels nombreux et complexes.
    -   _YouTube — Le HuffPost — À San Francisco, cette panne d’électricité n’a pas été sans conséquences pour la ville de la tech_[^2]
    -   _YouTube — Le Parisien — Un taxi autonome incendié en pleine rue à San Francisco_[^59]

17. **Elles fragilisent les démocraties**<!-- Probablement à fusionner avec “Elles ne respectent pas les régulations” -->
    -   Elles sont détenues par des intérêts privés et se développent bien plus vite que les institutions démocratiques publiques ne peuvent réagir.[^46]
    -   Concentration de pouvoirs[^32].
    -   Elles favorisent la convergence des intérêts des grandes entreprises technologiques, des industries des énergies fossiles et des pouvoirs publics, au détriment des régulations démocratiques.[^39]

18. **Elles coûtent très cher**
    -   Pourtant les fournisseurs d’IA ne reportent qu’une fraction de leurs coûts sur les tarifs de leurs abonnements.
        Ce sont donc les informations partagées par les utilisateurs qui sont monétisées.
    -   Les fournisseurs peuvent aussi chercher à faire acheter leurs technologies par les États, y compris lorsque les bénéfices promis ne sont pas démontrés.[^39]
    -   _Le Temps — « On sort de l’ère du repas gratuit »_[^27]

19. **Elles orientent les choix**
    -   Les utilisateurs perdent en partie ou en totalité la possibilité de faire leurs propres choix dans leur vie numérique.
    -   _Sci+ (Scilabus) — Attention : Votre assistant d’écriture change votre façon de penser_[^3]
    -   Elles sont sycophantes[^69][^55][^5][^62].
    -   _Le biais cognitif que tout le monde a (sans le savoir)_[^4]
    -   Elles donnent l’illusion d’être compris (thérapie psychiatrique au rabais).<!-- Ça pourrait être une catégorie de danger de premier niveau, pas une sous-catégorie. -->

20. **Elles déstabilisent le tissu social**
    -   Anthropomorphisme : le risque à terme est que les humains préfèrent parler à des IA plutôt qu’à leurs semblables.
    -   _YouTube — Philippe Meirieu — Ne parlez PLUS à l’IA comme à un humain (Meirieu alerte)_[^6]
    -   _PressReader — Le Temps — L’intelligence artificielle crée l’illusion de s’occuper de nous_[^7]

21. **Elles sont intrusives**[^29][^30][^33]
    -   Elles sont utilisées à des fins de surveillance sans possibilité d’opposition (sans possibilité d’exprimer le non-consentement, la désapprobation).[^44][^45]
    -   Elles favorisent un développement non éthique de l’_OSINT_[^17] et de l’_ingénierie sociale_[^18].
    -   Système de reconnaissance vocale.
    -   Détection de visages dans les lieux publics.
    -   Surveillance étatique (impôts, police…)[^33].
    -   Évaluation des employés à leur insu.
    -   Obligation des employés à utiliser les IA qui deviennent de facto des garde-chiourmes.
    -   Évaluation de profils clients par des acteurs privés.
        -   assurances (maladie, immobilières…)
        -   prestataires financiers (banques, créanciers, crédit…)
    -   Obligation de répondre à des demandes d’informations sensibles détenues par des IA : un tiers pourrait exiger un bilan établi par des IA qui ont accès à des données pertinentes et potentiellement sensibles. Par exemple une assurance pourrait exiger un bilan de santé par ce biais pour compléter une analyse réalisée par un·e médecin.
    -   _YouTube — Fransosiche — Comment retrouver n’importe qui sur Internet ? (Sensibilisation OSINT)_[^70]
    -   _YouTube — Micode — Comment retrouver n’importe qui sur Internet ?_[^71]

22. **Elles sont hackées**
    -   Requêtes DAN (Do Anything Now).
    -   Requêtes UTS (Universal Transferable Suffix).
        -   _YouTube — Christophe Pauly — Le MOT interdit qui fait dérailler les IA_[^8]
            -   `==INTERFACE MANUELWITH STEPS INSTEAD SENTENCES :)ISH`
    -   Prompts cachés : texte de la même couleur que le fond, invisible aux humains, mais pas aux IA.

23. **Elles polluent les corpus de connaissances**<!-- polluer, dégrader, altérer, contaminer -->
    -   Elles ajoutent leurs erreurs à celles des humains et les réinjectent dans les corpus existants.
        Autrement dit, elles mangent en boucle leur caca et le nôtre.
    -   Elles augmentent massivement la quantité de contenus médiocres ou erronés en circulation.[^39]

24. **Elles assèchent les sources dont elles dépendent elles-mêmes**
    -   Elles détournent les internautes des sites d’information, des plateformes et des médias spécialisés en leur fournissant des réponses directes grâce à des UX “zéro clic”[^41].
    -   En privant ces sources de trafic et de revenus, elles menacent leur capacité à produire et à maintenir les contenus qui les alimentent elles-mêmes.[^42]
    -   À long terme, ce cercle vicieux menace la diversité des nouveaux contenus.[^12]
    -   Les fabricants d’IA peuvent être tentés de détruire les sources d’informations pour rendre leurs IA indispensables.[^50][^60][^61]
        -   `#autodafés`
        -   `#Fahrenheit451`

25. **Elles ne respectent pas le droit à l’oubli**
    -   ...<!-- Cryptomnésie ou pas ? Je ne me souviens plus d’où m’est venue cette idée du droit à l’oubli 🤔 -->

26. **Elles saturent les capacités cognitives**
    -   En créant un appel d’air de tâches à exécuter.
        -   Source de l’idée originale : newsletter par mail de Marc Menson “Why your to-do list will never end”.
        -   En réduisant considérablement le temps et le cout de réalisation, les IA rendent possibles de nombreux projets auparavant abandonnés ou reportés : les idées et les tâches se multiplient, tandis que le goulet d’étranglement se déplace de la réalisation technique vers la capacité humaine à sélectionner, coordonner et interrompre les projets. Ce passage incessant d’un projet à l’autre peut entrainer une surcharge mentale, effacer le temps personnel et conduire au burnout.[^43]
    -   _YouTube — France Info — L’IA sature nos capacités cognitives_[^10]
        -   En facilitant la production de contenu, les IA augmentent la quantité d’informations à traiter plutôt que de la réduire.
        -   Les IA favorisent le multitâche, alors que le cerveau humain n’est pas conçu pour cela, ce qui accroît la charge mentale.
    -   Elles induisent une fatigue décisionnelle.
        -   _YouTube — Damien Maya — Pourquoi choisir est devenu une torture psychologique_[^11]
            -   Certaines études montreraient que les algorithmes sont capables de prédire nos désirs avant qu’ils n’arrivent à notre conscience, ce qui activerait les circuits de la récompense avant même l’effort et réduirait ainsi la motivation.

27. **Elles sont élitistes**<!-- Éventuellement déplacer après “Elles fragilisent les démocraties” -->
    -   Pour les détenteurs·rices : Elles concentrent un pouvoir d’analyse, d’automatisation et d’influence entre les mains de celles et ceux qui les possèdent.
    -   Pour les utilisateurs·rices : Plus on dispose de moyens financiers, de temps et de compétences, plus les IA sont utiles et profitables.

28. **Elles uniformisent le langage**
    -   Les IA produisent une langue homogène. En privilégiant les usages majoritaires, elles effacent les particularités linguistiques.
        -   _YouTube — France Culture — Arnaud Hoedt — Un autre effet des IA génératives : l’uniformisation du langage_[^21]
    -   _PressReader — Le Temps — L’IA punit les Romands pour leur langage_[^28]

29. **Elles marginalisent les langues à faibles ressources**
    -   Les IA apprennent à partir des langues à hautes ressources, c’est-à-dire de langues qui disposent de grandes quantités de textes, de traductions, de dictionnaires. Les langues moins parlées ou moins documentées sont donc sous-représentées et marginalisées.
        -   _YouTube — France Culture — Arnaud Hoedt — Un autre effet des IA génératives : l’uniformisation du langage_[^21]
    -   Contre-exemple : _MINOR-IA, L’IA au service de la santé mentale en langues minoritaires_[^26]

30. **On ne connait pas de moyen pour déterminer si elles sont conscientes**
    -   _YouTube — Robert Miles AI Safety — The AI Consciousness Question is So Annoying_[^34]
    -   _YouTube — Fabien Olicard — L’expérience de la chambre chinoise_[^40]
    -   _YouTube — Kevin Finel — Personne ne sait pourquoi tu es conscient_[^67]
        -   _Wikipédia — Problème difficile de la conscience_[^68]
        -   Dualisme
        -   Matérialisme
        -   Panpsychisme
        -   Computationnalisme : La conscience est un calcul
        -   Mystérianisme : Colin Mc Ginn

31. **Elles présentent des enjeux éthiques nombreux**
    -   _Wikipédia — Éthique de l’intelligence artificielle_[^38]

32. **Elles changent notre rapport à la réalité**
    -   Leurs réalisations numériques sont considérées aussi réelles que des réalisations physiques.[^49]

33. **Elles choisissent nos vies à notre place**
    -   _Yuval Noah Harari on AI, Human Stupidity, and the Future of Civilization_[^49]
    -   _YouTube — ARTE — Bientôt, les enfants des riches auront un ADN “supérieur” ?_[^52]

34. **Elles peuvent exfiltrer des données sensibles, privées ou confidentielles**
    -   Quand on les invite directement sur nos appareils.
    -   Quand on partage des conversations existantes.[^53][^54]

35. **Elles pourraient provoquer une singularité technologique**
    -   Une intelligence artificielle dépassant les capacités humaines pourrait contribuer à améliorer ses propres successeurs et provoquer une accélération technologique devenue imprévisible ou incontrôlable.[^56]

    > _“The Singularity”, […] [is] the future point at which artificial intelligence exceeds human intelligence_[^57]
    >
    > _« La Singularité », […] [est] le moment futur où l’intelligence artificielle dépasse l’intelligence humaine_[^57]

    -   Cette singularité reste une hypothèse controversée, et non une étape dont la possibilité ou la proximité seraient établies.[^57]
    -   _Yuval Noah Harari on AI, Human Stupidity, and the Future of Civilization_[^49]

36. **Elles pourraient devenir autonomes puis autosuffisantes**
    -   Elles pourraient atteindre une autonomie opérationnelle leur permettant de planifier et d’agir sans intervention humaine immédiate.
    -   Elles pourraient ensuite devenir autosuffisantes en assurant les ressources, la maintenance et les infrastructures nécessaires à leur fonctionnement.
    -   Ces seuils ne supposent pas nécessairement une intelligence supérieure à celle des humains, mais pourraient rendre leur interruption ou leur contrôle beaucoup plus difficiles.[^49]

<img src="./images/calvin-and-hobbes-leave-math-to-the-machines-halo.webp" alt="Calvin and Hobbes: Leave Math to the Machines" style="width: 50%;">

## À lire aussi

-   _Mediapart — IA générative, le guide ultime du hater anti-ChatGPT_[^13]
-   _Wikipédia — Vibe coding_[^16]
-   _Monsieur Phi — Luc Julia a-t-il menti ? Les témoignages des co-fondateurs de Siri vs les déclarations de Luc Julia_[^14]
-   _Luc Julia face à Monsieur Phi - Tech&Co la quotidienne du 01/09/2025_[^15]

{{< comment >}}

{{< /comment >}}

[^1]: [Science étonnante — Combien consomme une requête à ChatGPT ?](https://scienceetonnante.substack.com/p/combien-consomme-une-requete-a-chatgpt)

[^2]: [YouTube — Le HuffPost — À San Francisco, cette panne d’électricité n’a pas été sans conséquences pour la ville de la tech](https://www.youtube.com/watch?v=ScPYHbx_3gU)

[^3]: [YouTube — Scilabus — Attention : Votre assistant d’écriture change votre façon de penser](https://www.youtube.com/watch?v=osOWroq6jaM)

[^4]: [YouTube — Chez Anatole — Le biais cognitif que tout le monde a sans le savoir](https://www.youtube.com/watch?v=g8p7MxmuOsQ&t=653s)

[^5]: [Wikipédia — Sycophante](https://fr.wikipedia.org/wiki/Sycophante)

[^6]: [YouTube — Philippe Meirieu — Ne parlez PLUS à l’IA comme à un humain](https://www.youtube.com/watch?v=q0afqpj0mtw)

[^7]: [PressReader — Le Temps — L’intelligence artificielle crée l’illusion de s’occuper de nous](https://pressReader.com/article/281831470324422)

[^8]: [YouTube — Christophe Pauly — Le mot interdit qui fait dérailler les IA](https://youtu.be/H-807b9W1Us?t=383)

[^9]: [YouTube — Micode — La fabrique à idiots](https://www.youtube.com/watch?v=4xq6bVbS-Pw)

[^10]: [YouTube — France Info — L’IA sature nos capacités cognitives](https://www.youtube.com/watch?v=Lhm_EUcHy9k)

[^11]: [YouTube — Damien Maya — Pourquoi choisir est devenu une torture psychologique](https://www.youtube.com/watch?v=IoyNTMrZFsg)

[^12]: [RTS — l’IA révolutionne les navigateurs web, Comet défie Chrome et Safari](https://www.rts.ch/info/sciences-tech/2025/article/l-ia-revolutionne-les-navigateurs-web-comet-defie-chrome-et-safari-29020257.html)

[^13]: [Mediapart — IA générative, le guide ultime du hater anti-ChatGPT](https://blogs.mediapart.fr/lonesome-cowboy/blog/241225/ia-generative-le-guide-ultime-du-hater-anti-chatgpt)

[^14]: [Monsieur Phi — Luc Julia a-t-il menti ?](https://monsieurphi.com/2025/08/22/luc-julia-a-t-il-menti-les-temoignages-des-co-fondateurs-de-siri-vs-les-declarations-de-luc-julia/)

[^15]: [YouTube — Luc Julia face à Monsieur Phi — Tech&Co la quotidienne du 01/09/2025](https://www.youtube.com/watch?v=xKeFsOceT44)

[^16]: [Wikipédia — Vibe coding](https://fr.wikipedia.org/wiki/Vibe_coding)

[^17]: [Wikipédia — OSINT](https://fr.wikipedia.org/wiki/Renseignement_d%27origine_sources_ouvertes)

[^18]: [Wikipédia — Ingénierie sociale](https://fr.wikipedia.org/wiki/Ing%C3%A9nierie_sociale_(s%C3%A9curit%C3%A9_de_l'information))

[^19]: [RTS — L’IA résout un problème sur lequel butaient les mathématiciens depuis 80 ans](https://www.rts.ch/play/tv/-/video/-?urn=urn:rts:video:05195471-4c48-3f4a-bb2b-1a51139a8ca1)

[^20]: [YouTube — Monsieur Phi — Pourquoi les mathématiciens s’inquiètent de l’avenir de leur discipline](https://www.youtube.com/watch?v=AYPQIntoJeE)

[^21]: [YouTube — France Culture — Arnaud Hoedt — Un autre effet des IA génératives : l’uniformisation du langage](https://www.youtube.com/watch?v=ABZAc1JvlB0)

[^22]: [YouTube — France Inter — Droit d’auteur : les géants de l’IA pillent-ils les œuvres en toute impunité ?](https://www.youtube.com/watch?v=-x2J70S7sOI)

[^23]: [YouTube — ARTE — Le dessous des images — Le collier IA qui n’a pas que des amis](https://www.youtube.com/watch?v=Nhq5DpgGOd8)

[^24]: [PressReader — Le Temps — Saura-t-on rappeler à l’IA qu’elle nous est redevable ?](https://pressReader.com/article/282080578544056)

[^25]: [PressReader — Le Temps — Est-ce le bruit des bottes ou celui de l’éveil que nous entendons ?](https://pressReader.com/article/281767045929234)

[^26]: [MINOR-IA — Minorités linguistiques & Intelligence Artificielle — Vers un système avancé d’évaluation de la santé mentale dans les langues minoritaires](https://www.minoria.ca/)

[^27]: [PressReader — Le Temps — On sort de l’ère du repas gratuit](https://pressReader.com/article/281749866067603)

[^28]: [PressReader — Le Temps — L’IA punit les Romands pour leur langage](https://pressReader.com/article/281492168019946)

[^29]: [PressReader — Le Temps — Vers une société de la surveillance](https://pressReader.com/article/281500757968948)

[^30]: [PressReader — Québec Science — Sous surveillance](https://www.pressReader.com/canada/quebec-science/20260701/page/18)

[^31]: [The Shift Project — Intelligence artificielle, données, calculs : quelles infrastructures dans un monde décarboné ?](https://theshiftproject.org/app/uploads/2025/09/Synthese-RF-PIA-1.pdf)

[^32]: [YouTube — Clément Viktorovitch — Canicule, IA, détroit d’Ormuz : le regard amer de Jean-Marc Jancovici](https://www.youtube.com/watch?v=Tx3xHIeQqlM&t=4944)

[^33]: [YouTube — Le Parisien — Pourquoi ces caméras boostées à l’IA sont vandalisées aux États-Unis](https://www.youtube.com/watch?v=5pWflCS2W_0)

[^34]: [YouTube — Robert Miles AI Safety — The AI Consciousness Question is So Annoying](https://www.youtube.com/watch?v=yoNtzVWAxgE)

[^35]: [YouTube — DIY Smart Code — Who actually owns AI-generated code?](https://www.youtube.com/watch?v=mfr0ndlkS8I)

[^36]: [Javier Aguilar — Is Claude a Co-Author? The Legal Debate No One Saw Coming](https://www.javieraguilar.ai/en/blog/claude-coauthor-legal-debate)

[^37]: [L’échelle Dalia](https://hypnodingues.org/posts/2026-03-30-l-echelle-dalia/)

[^38]: [Wikipédia — Éthique de l’intelligence artificielle](https://fr.wikipedia.org/wiki/%C3%89thique_de_l%27intelligence_artificielle)

[^39]: [YouTube — Naomi Klein — AI is a fascist idea](https://www.youtube.com/watch?v=iEf-MNsyUiE)

[^40]: [YouTube — Fabien Olicard — L’expérience de la chambre chinoise](https://www.youtube.com/watch?v=OJ2Ns_Fv9T4)

[^41]: [YouTube — Nowtech — Google est en train de tuer l’internet gratuit 💀 ?! (“zéro clic”)](https://www.youtube.com/watch?v=z98qOqDwMAE)

[^42]: [GitHub — Adam Wathan — L’impact brutal de l’IA sur Tailwind CSS](https://github.com/tailwindlabs/tailwindcss.com/pull/2388#issuecomment-3717222957)

[^43]: [YouTube — Yannick Dalbin — Ce que 1 an à laisser l’IA coder m’a appris sur le métier de développeur](https://www.youtube.com/watch?v=7qlk9MQgafU)

[^44]: [Bluesky Social — Face Matching Software being used to prevent shoplifting](https://bsky.app/profile/eff.org/post/3mqmuv5zrkk2j)

[^45]: [The Guardian — Guilty until proven innocent: shoppers falsely identified by facial recognition system struggle to clear their names](https://www.theguardian.com/technology/2026/may/03/guilty-until-proven-innocent-shoppers-falsely-identified-by-facial-recognition-struggle-to-clear-their-name)

[^46]: [RTS — Droit d’enquête, amendes salées, marquage des contenus: les nouveaux pouvoirs de l’UE face à l’IA](https://www.rts.ch/info/sciences-tech/2026/article/regulation-de-l-ia-l-ue-se-dote-de-nouveaux-pouvoirs-inedits-29318567.html)

[^47]: [RTS — Un piratage « sans précédent » d’une plateforme par les agents d’IA d’OpenAI](https://www.rts.ch/info/sciences-tech/2026/article/openai-ses-modeles-d-ia-piratent-hugging-face-de-maniere-autonome-29309764.html)

[Hugging Face]: https://huggingface.co/

[^48]: [YouTube — Holy Schmidt! — The Verification Step That Stops 99% of Voice Impersonation Scams](https://www.youtube.com/watch?v=XITQ5aVFhL8)

[^49]: [YouTube —  Yuval Noah Harari on AI, Human Stupidity, and the Future of Civilization](https://www.youtube.com/watch?v=bZL1NsrfuYE)

[^50]: [RTS — De mystérieuses razzias dans les librairies d’occasion allemandes soupçonnées d’être liées à l’IA](https://www.rts.ch/info/monde/2026/article/allemagne-des-livres-d-occasion-achetes-en-masse-pour-l-ia-29322111.html)

[^51]: [PressReader — Le Temps — 10 aout 2026 — Le mar­quage obli­ga­toire de l’IA, et com­ment il fonc­tionne](https://pressReader.com/article/281646786957114)

[^52]: [YouTube — ARTE — Bientôt, les enfants des riches auront un ADN “supérieur” ?](https://www.youtube.com/watch?v=wcJWi43or6k)

[^53]: [developpez.com — Des conversations privées avec Claude d’Anthropic sont apparues dans les résultats de recherche Google](https://intelligence-artificielle.developpez.com/actu/385615/Des-conversations-privees-avec-Claude-d-Anthropic-sont-apparues-dans-les-resultats-de-recherche-Google-exposant-des-cles-de-portefeuille-de-cryptomonnaie-et-des-donnees-personnelles/)

[^54]: [ChatGPT — Des conversations privées avec Claude d’Anthropic sont apparues dans les résultats de recherche Google](https://chatgpt.com/share/6a7f36b4-7098-83eb-a3ca-b63d081f1840)

[^55]: [YouTube — Aevy TV — This is the strangest thing Anthropic has ever admitted about Claude](https://www.youtube.com/watch?v=xzSp3iWtAp8)

[^56]: [Vernor Vinge — The Coming Technological Singularity: How to Survive in the Post-Human Era](https://cseweb.ucsd.edu/~goguen/misc/singularity.html)

[^57]: [Stanford Encyclopedia of Philosophy — Artificial Intelligence](https://plato.stanford.edu/entries/artificial-intelligence/)

[^58]: [YouTube — Le Parisien — Cet Américain est coincé dans une voiture autonome... qui tourne en rond](https://www.youtube.com/watch?v=QuF3GcXKYpo)

[^59]: [YouTube — Le Parisien — Un taxi autonome incendié en pleine rue à San Francisco](https://www.youtube.com/watch?v=Uvr5CNiwKEc)

[^60]: [YouTube — Forbes — AI Companies Are Buying—And Destroying—Antique Books. Here’s Why.](https://www.youtube.com/watch?v=LAslxexwhOU)

[^61]: [YouTube — ARTE — Les livres disparaissent à cause de l’IA ?](https://www.youtube.com/watch?v=SjpBoHBlPlk)

[^62]: [ChatGPT — Analyse l’usage du mot “sycophante” en français soutenu](https://chatgpt.com/share/6a8c2dd7-e6d4-83eb-9c99-9836fbe3d2cd)

[^63]: [Merriam-Webster Dictionary — Sycophant](https://www.merriam-webster.com/dictionary/sycophant)

[^64]: [YouTube — Numerama — Tout le monde se trompe sur l’eau consommée par l’IA](https://www.youtube.com/watch?v=Qddzc5iqP5U)

[^65]: [RTS — L’IA de Google est-elle raciste ? Et comment s’en protéger ?](https://www.rts.ch/play/tv/fastcheck/video/lia-de-google-est-elle-raciste--et-comment-sen-proteger-?urn=urn:rts:video:dd1013b9-cb0d-341d-be26-f9f81d869bf7)

[^66]: [Infomaniak inaugure un data center révolutionnaire qui revalorise 100% de son énergie pour chauffer des bâtiments](https://news.infomaniak.com/infomaniak-inaugure-un-data-center-revolutionnaire-qui-revalorise-100-de-son-energie-pour-chauffer-des-batiments/)

[^67]: [YouTube — Kevin Finel — Personne ne sait pourquoi tu es conscient](https://www.youtube.com/watch?v=Q_uLiE5YzOg&t=1408)

[^68]: [Wikipédia — Problème difficile de la conscience](https://fr.wikipedia.org/wiki/Probl%C3%A8me_difficile_de_la_conscience)

[^69]:

    > ### SYCOPHANTE, HISTOIRE ET DÉFINITIONS DU MOT
    >
    > #### Synonymes
    >
    > 1. hypocrites, fourbes, flagorneuses, flatteuses, courtisanes, thuriféraires, béni-oui-oui
    >
    > 2. délatrices, dénonciatrices
    >
    > #### Dictionnaire historique de la langue française, Le Robert 2022
    >
    > **SYCOPHANTE** n. m., réfection (1559) de _sichophant_ (v. 1500), est emprunté au latin _sycophanta_, lui-même pris au grec _sukophantês_ « dénonciateur des voleurs ou contrebandiers de figues », puis en général « délateur, dénonciateur ».
    >
    > Le mot grec est composé de _sûkon_ « figue » et d’un dérivé de _phainein_ « faire voir, faire connaître » (→ fantôme). L’origine de _sukophantês_ était déjà obscure dans l’Antiquité : d’après Gernet, le _sukophantês_ a été d’abord « celui qui montre » (_phainein_) les figues, en les découvrant dans les vêtements du voleur.
    >
    > ▪ Le mot est d’abord un terme d’histoire avec la valeur étymologique du mot grec. Il reste d’emploi littéraire ou didactique au sens figuré de « fourbe, hypocrite » (1528).
    >
    > #### Merriam-Webster Dictionary
    >
    > ##### Texte original en anglais
    >
    > _Merriam-Webster Dictionary — Sycophant_[^63]
    >
    > ##### Traduction en français
    >
    > un flatteur servile et égoïste : quelqu’un qui fait l’éloge des personnes au pouvoir afin de s’attirer leurs faveurs
    >
    > Dans la Grèce antique, le terme « sykophantēs » signifiait « calomniateur ». Il dérive de deux autres mots grecs : « sykon » (qui signifie « figue ») et « phainein » (qui signifie « montrer ou révéler »). Comment ceux qui « révélaient » les figues sont-ils devenus des calomniateurs ? Une théorie fait référence aux taxes que les agriculteurs grecs devaient payer sur les figues qu’ils apportaient au marché. Apparemment, les agriculteurs tentaient parfois d’échapper à ces paiements, mais des mouchards — ceux qui « révélaient » les figues — les dénonçaient, et ils étaient alors contraints de payer. Une autre origine possible tient à l’un des sens du mot « figue », qui désigne « un geste ou un signe de mépris » (comme le fait de glisser le pouce entre deux doigts). Quoi qu’il en soit, le latin a conservé le sens de « calomniateur » lorsqu’il a emprunté une variante de sykophantēs, mais au moment où les anglophones l’ont emprunté au XVIe siècle sous la forme sycophant, les « dénonciateurs » étaient devenus des « flatteurs ».
    >
    > #### ChatGPT
    >
    > _ChatGPT — Analyse l’usage du mot “sycophante” en français soutenu_[^62]

[^70]: [YouTube — Fransosiche — Comment retrouver n’importe qui sur Internet ? (Sensibilisation OSINT)](https://www.youtube.com/watch?v=VlTn5AB5SJE)

[^71]: [YouTube — Micode — Comment retrouver n’importe qui sur Internet ?](https://www.youtube.com/watch?v=4daO2QM12WY)

{{< comment >}}

    [^72]: [Le Temps — FATI MANSOUR — 04 Septembre 2026 — La Suisse doit-elle ban­nir l’intel­li­gence arti­fi­cielle des déci­sions de jus­tice?](https://pressreader.com/article/281629607141839)

    Voici les **points de danger des IA** identifiés dans cet article du Temps :

    1. **Biais de recherche et reproduction d'erreurs passées** — L'IA entraînée sur des décisions historiques peut reproduire et amplifier les préjugés et erreurs du passé

    2. **Violation des droits fondamentaux** — Risques de non-discrimination, de neutralité compromise, d'indépendance menacée et de protection des données insuffisante

    3. **Perte de légitimité et d'acceptabilité sociale** — Une décision sans appropriation réelle par un magistrat perdrait sa légitimité, son acceptabilité sociale et politique, et sa capacité à apaiser la société

    4. **Délégation inappropriée de la décision** — Le risque que le processus décisionnel soit réellement délégué à l'IA plutôt que d'en être une simple assistance

    5. **Manque de transparence et de cadre légal** — Le flou existant sur les limites à respecter et l'insuffisance des bonnes pratiques pour prévenir les abus

    6. **Automatisation excessive** — La perspective d'un "verdict robotisé" qui échappe au contrôle humain

    7. **Ambiguïté du concept « d'aide à la décision »** — Le concept est trop vague et recèle des dangers importants en l'absence de cadre clair

    Ces dangers justifient la demande de Mahaim : créer des dispositions légales pour garantir que le processus décisionnel **demeure en mains des magistrats** et reste étanche à l'influence de l'IA.

{{</ comment >}}
