# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 20/11/2026 22:28:49 · 11 min · 11 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261120-211729-complet-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **6**
- Non lancé : **0**
- Contrôles passés : mesures (429), balayage (10), tient dans l’écran (16)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-201151-standard | standard | toutes | toutes | 69 | 46 | 1 | échecs |
| 20261120-203725-standard | standard | toutes | toutes | 7 | 20 | 1 | échecs |
| 20261120-210055-standard-partiel | standard | toutes | fichiers, mesures, films, bords, parcours, mouvement | 1 | 12 | 0 | échecs |
| 20261120-211516-standard-cible-partiel | standard | /,/la-table,/chambres,/groupes,/reserver | fichiers, films | 0 | 4 | 0 | complet |
| **20261120-211729-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 2 | 6 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte.conteneur > p.ouv-info.ouv-anim:nth-of-type(4) « Menus dès 16,50 € · Chambres dès 53 € » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/reserver` — section#debut > div.ouv-texte > p.ouv-actions.ouv-anim:nth-of-type(4) > a.bouton « Faire une demande » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (6)

- **section sans visuel** — `/` — section#autour « Au pays de l'Armagnac, du foie gras et des pruneau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/chambres` — section#tarifs « TARIFS Le prix de la nuit, saison par saison Basse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en` — section#autour « In the land of Armagnac, foie gras and prunes At t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/chambres` — section#tarifs « RATES The price of a night, season by season Low s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/en/reserver` — section#demande « YOUR REQUEST In three steps 1. Your request · 2. T » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/reserver --seulement=fichiers,mesures
```
