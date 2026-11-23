# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 23/11/2026 15:24:03 · 41 min · 11 page(s) · audit complet

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261123-134248-complet` · version ?v=2
- Échecs : **0**
- À regarder : **13**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (429), balayage (10), films d’ouverture (20), films de transition (20), bords de l’écran (11), intro accélérable et passable (7), menu (1), clavier (11), liens et boutons (11), liens profonds (16), liens vers la page en cours (10), changements de hauteur (10), parcours du projet (1), tient dans l’écran (16), fluidité (20), défilement selon l’appareil (5), mouvement (20), effets du plan (8), souris immobile (10), vitesse (10), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /reserver |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-133055-rapide-cible | rapide | /,/la-table,/chambres,/groupes,/reserver | toutes | 15 | 11 | 5 | échecs |
| 20261123-134109-rapide-cible-partiel | rapide | / | mesures, fluidite, mouvement, vitesse | 0 | 0 | 0 | complet |
| **20261123-134248-complet** (celle-ci) | complet | toutes | toutes | 0 | 13 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `en/reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (2)

- **section sans visuel** — `/en/reserver` — section#demande « YOUR REQUEST In three steps 1. Your request · 2. T » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/la-table` — à 50 ms (différence 22 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/en/groupes` — écran différent à la même position après rechargement (5.7 %), voir comparaisons/rechargement-en-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/en/la-table` — écran différent à la même position après rechargement (9.3 %), voir comparaisons/rechargement-en-la-table-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/groupes` — écran différent à la même position après rechargement (5.6 %), voir comparaisons/rechargement-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/la-table` — écran différent à la même position après rechargement (7.7 %), voir comparaisons/rechargement-la-table-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 20 min de travail pour 60 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2609 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2631 ms depuis le premier octet
- Ouverture /en (1366×768) : 2603 ms depuis le premier octet
- Ouverture /en/chambres (1366×768) : 2673 ms depuis le premier octet
- Ouverture /en/groupes (1366×768) : 2635 ms depuis le premier octet
- Ouverture /en/la-table (1366×768) : 2655 ms depuis le premier octet
- film de l'ouverture /en/la-table 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en/reserver (1366×768) : 2627 ms depuis le premier octet
- Ouverture /groupes (1366×768) : 2642 ms depuis le premier octet
- film de l'ouverture /groupes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-table (1366×768) : 2614 ms depuis le premier octet
- film de l'ouverture /la-table 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reserver (1366×768) : 2626 ms depuis le premier octet
- Ouverture / (390×844) : 2662 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2574 ms depuis le premier octet
- film de l'ouverture /chambres 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en (390×844) : 2629 ms depuis le premier octet
- Ouverture /en/chambres (390×844) : 2611 ms depuis le premier octet
- film de l'ouverture /en/chambres 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /en/groupes (390×844) : 2586 ms depuis le premier octet
- Ouverture /en/la-table (390×844) : 2600 ms depuis le premier octet
- Ouverture /en/reserver (390×844) : 2616 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2596 ms depuis le premier octet
- film de l'ouverture /groupes 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /la-table (390×844) : 2594 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2609 ms depuis le premier octet
- bords de l’écran /en/groupes 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /en/la-table 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- bords de l’écran /reserver 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 880 images d’intro, 21 de voile et 364 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 222, tâche la plus longue 0 ms
- Fluidité /en 1366×768 (molette) : 0 % d'images lentes sur 377, tâche la plus longue 0 ms
- Fluidité /en/chambres 1366×768 (molette) : 0 % d'images lentes sur 228, tâche la plus longue 0 ms
- Fluidité /en/groupes 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /en/la-table 1366×768 (molette) : 0 % d'images lentes sur 231, tâche la plus longue 0 ms
- Fluidité /en/reserver 1366×768 (molette) : 0 % d'images lentes sur 165, tâche la plus longue 0 ms
- Fluidité /groupes 1366×768 (molette) : 0 % d'images lentes sur 235, tâche la plus longue 0 ms
- Fluidité /la-table 1366×768 (molette) : 1 % d'images lentes sur 230, tâche la plus longue 61 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 183, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /en 390×844 (doigt) : 0 % d'images lentes sur 1355, tâche la plus longue 0 ms
- Fluidité /en/chambres 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /en/groupes 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 78 ms
- Fluidité /en/la-table 390×844 (doigt) : 0 % d'images lentes sur 1353, tâche la plus longue 0 ms
- Fluidité /en/reserver 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /groupes 390×844 (doigt) : 0 % d'images lentes sur 1364, tâche la plus longue 0 ms
- Fluidité /la-table 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Vitesse / : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/chambres : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/groupes : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/la-table : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/reserver : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /groupes : 0.43 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-table : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.33 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
