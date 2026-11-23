# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 23/11/2026 14:40:45 · 10 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/la-table,/chambres,/groupes,/reserver

## Résumé

- Statut : **15 échec(s)**
- Passe : `20261123-133055-rapide-cible` · version ?v=2
- Échecs : **15**
- À regarder : **11**
- Non lancé : **5**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (30), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (2), fluidité (3)

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

## Échecs

### textes qui se chevauchent (15)

- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > span.panneau-chapeau:nth-of-type(2) « Mézin » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(1) « 10 km du Gers » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.panneau-lames > li.lame.lame--d:nth-of-type(1) > strong > span « 10 » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(1) > strong « 10 km » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(1) « 10 km du Gers » — avec ul.panneau-lames > li.lame.lame--g:nth-of-type(2) > strong > span « 10 » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(1) « 10 km du Gers » — avec figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) > strong « 10 km » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(1) « 10 km du Gers » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.panneau-lames > li.lame.lame--g:nth-of-type(2) > strong > span « 10 » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) « 120 km de l'océan » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) > strong « 10 km » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) « 120 km de l'océan » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » — avec ul.panneau-lames > li.lame.lame--g:nth-of-type(3) > strong > span « 120 » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » — avec figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) > strong « 120 km » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(2) « 10 km des Landes » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) « 120 km de l'océan » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — ul.panneau-lames > li.lame.lame--g:nth-of-type(3) > strong > span « 120 » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(4) « 120 km de Lourdes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) > strong « 120 km » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(4) « 120 km de Lourdes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) « 120 km de l'océan » — avec figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(4) > strong « 120 km » _(1366×768 normal, 844×390 normal)_
- **textes qui se chevauchent** — `/` — section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--g:nth-of-type(3) « 120 km de l'océan » — avec section#autour > figure.panneau > ul.panneau-lames > li.lame.lame--d:nth-of-type(4) « 120 km de Lourdes » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `en/reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `reserver.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### section sans visuel (1)

- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 72 ms (différence 22 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/groupes` — écran différent à la même position après rechargement (5.6 %), voir comparaisons/rechargement-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/la-table` — écran différent à la même position après rechargement (7.7 %), voir comparaisons/rechargement-la-table-*.png _(1366×768)_

## Non lancé

- **fluidite** : browserContext.close: Target page, context or browser has been closed
- **mouvement** : browser.newContext: Target page, context or browser has been closed
- **vitesse** : browser.newContext: Target page, context or browser has been closed
- **captures** : browser.newContext: Target page, context or browser has been closed
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Audit rapide : étapes lourdes sur /, /chambres, /groupes, /la-table, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2706 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2603 ms depuis le premier octet
- Ouverture /groupes (1366×768) : 2702 ms depuis le premier octet
- Ouverture /la-table (1366×768) : 2605 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2633 ms depuis le premier octet
- Ouverture / (390×844) : 2656 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2607 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2595 ms depuis le premier octet
- Ouverture /la-table (390×844) : 2653 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2618 ms depuis le premier octet
- Bords de l’écran : 406 images d’intro, 11 de voile et 168 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 376, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 236, tâche la plus longue 0 ms
- Fluidité /groupes 1366×768 (molette) : 1 % d'images lentes sur 230, tâche la plus longue 0 ms

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,fluidite,mouvement,vitesse,captures
```
