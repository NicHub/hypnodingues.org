# Instructions pour les agents

## Actions quotidiennes

Une seule fois par jour et par fil de conversation, avant la première intervention concernant ce dépôt :

-   Consulter `TODO.md`.
-   Vérifier la version de Hugo installée sur le système avec `hugo version`.
-   La comparer à la valeur `hugo-version` définie dans `.github/workflows/deploy.yml`.
-   Indiquer si la version du workflow est identique, plus récente ou plus ancienne que celle du système.
-   Si la version du workflow est plus ancienne, proposer de mettre à jour `.github/workflows/deploy.yml`, sans effectuer cette modification sans demande explicite.

Si ces actions ont déjà été effectuées et rapportées plus haut dans la conversation à la date courante, ne pas les répéter.

## Compilation Hugo

Pour compiler et prévisualiser le site, utiliser systématiquement la commande suivante :

```bash
bash ./scripts/preview.sh
```

## Suivi des tâches

-   Ne pas réaliser automatiquement les tâches qui y figurent sans demande explicite.
-   Mettre à jour `TODO.md` lorsqu’une tâche répertoriée est terminée.
