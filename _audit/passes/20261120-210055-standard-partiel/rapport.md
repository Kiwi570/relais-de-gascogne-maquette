# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 20/11/2026 22:14:44 · 14 min · 11 page(s) · audit standard (étapes : fichiers, mesures, films, bords, parcours, mouvement)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-210055-standard-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **12**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (121), balayage (10), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (11), liens et boutons (11), liens profonds (16), liens vers la page en cours (10), changements de hauteur (5), parcours du projet (1), mouvement (10), effets du plan (6), souris immobile (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-201151-standard | standard | toutes | toutes | 69 | 46 | 1 | échecs |
| 20261120-203725-standard | standard | toutes | toutes | 7 | 20 | 1 | échecs |
| **20261120-210055-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, films, bords, parcours, mouvement | 1 | 12 | 0 | échecs |

## Échecs

### retour avant : image isolée différente (flash) (1)

- **retour avant : image isolée différente (flash)** — `/la-table` — à 50 ms (films/retour-avant-390.png) _(390×844 retour avant)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `en/reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (6)

- **section sans visuel** — `/` — section#autour « Au pays de l'Armagnac, du foie gras et des pruneau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/chambres` — section#tarifs « TARIFS Le prix de la nuit, saison par saison Basse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en` — section#autour « In the land of Armagnac, foie gras and prunes At t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/chambres` — section#tarifs « RATES The price of a night, season by season Low s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/reserver` — section#demande « YOUR REQUEST In three steps 1. Your request · 2. T » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 82 ms (différence 22 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-table` — à 74 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/groupes` — écran différent à la même position après rechargement (5.3 %), voir comparaisons/rechargement-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/la-table` — écran différent à la même position après rechargement (13.1 %), voir comparaisons/rechargement-la-table-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 36 min de travail pour 115 min de budget, 8 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /groupes, /la-table, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2613 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2569 ms depuis le premier octet
- Ouverture /groupes (1366×768) : 2568 ms depuis le premier octet
- Ouverture /la-table (1366×768) : 2641 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2647 ms depuis le premier octet
- Ouverture / (390×844) : 2580 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2597 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2596 ms depuis le premier octet
- Ouverture /la-table (390×844) : 2649 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2618 ms depuis le premier octet
- film de l'ouverture /reserver 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /groupes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /la-table 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 463 images d’intro, 9 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/la-table --seulement=fichiers,films
```
