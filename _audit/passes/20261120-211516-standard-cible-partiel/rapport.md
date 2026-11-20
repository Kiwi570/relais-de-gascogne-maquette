# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 20/11/2026 22:17:29 · 2 min · 5 page(s) · audit standard ciblé sur /,/la-table,/chambres,/groupes,/reserver (étapes : fichiers, films)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-211516-standard-cible-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), films d’ouverture (10), films de transition (10)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-201151-standard | standard | toutes | toutes | 69 | 46 | 1 | échecs |
| 20261120-203725-standard | standard | toutes | toutes | 7 | 20 | 1 | échecs |
| 20261120-210055-standard-partiel | standard | toutes | fichiers, mesures, films, bords, parcours, mouvement | 1 | 12 | 0 | échecs |
| **20261120-211516-standard-cible-partiel** (celle-ci) | standard | /,/la-table,/chambres,/groupes,/reserver | fichiers, films | 0 | 4 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `en/reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 81 ms (différence 22 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-table` — à 51 ms (différence 22 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 36 min de travail pour 115 min de budget, 8 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /groupes, /la-table, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2649 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2635 ms depuis le premier octet
- Ouverture /groupes (1366×768) : 2619 ms depuis le premier octet
- Ouverture /la-table (1366×768) : 2631 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2621 ms depuis le premier octet
- Ouverture / (390×844) : 2610 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2607 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2644 ms depuis le premier octet
- Ouverture /la-table (390×844) : 2642 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2605 ms depuis le premier octet
- film de l'ouverture /reserver 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
