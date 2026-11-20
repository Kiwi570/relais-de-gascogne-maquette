# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 20/11/2026 21:59:14 · 22 min · 11 page(s) · audit standard

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261120-203725-standard` · version ?v=1
- Échecs : **7**
- À regarder : **20**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (121), balayage (10), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (11), liens et boutons (11), liens profonds (16), liens vers la page en cours (10), changements de hauteur (5), parcours du projet (1), tient dans l’écran (10), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (6), souris immobile (5), vitesse (10), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en rideau |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-201151-standard | standard | toutes | toutes | 69 | 46 | 1 | échecs |
| **20261120-203725-standard** (celle-ci) | standard | toutes | toutes | 7 | 20 | 1 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/en/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > span « seats in our function room, with parking » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > span « places assises dans notre salle de réception, avec » _(1920×1080 normal)_

### retour arrière : image isolée différente (flash) (1)

- **retour arrière : image isolée différente (flash)** — `/` — à 60 ms (films/retour-arrière-390.png) _(390×844 retour arrière)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro (3)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 2 image(s) sur 113 (films/bords-intro-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/groupes` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 2 image(s) sur 132 (films/bords-intro-groupes-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/` — bande d’environ 14 px en rgb(246, 239, 230) à côté de l’intro en rgb(34, 61, 117), sur 17 image(s) sur 85 (films/bords-intro-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/chambres` — Basse saison — décalage de 14 px _(1366×768)_

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

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (6)

- **section sans visuel** — `/` — section#autour « Au pays de l'Armagnac, du foie gras et des pruneau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/chambres` — section#tarifs « TARIFS Le prix de la nuit, saison par saison Basse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en` — section#autour « In the land of Armagnac, foie gras and prunes At t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/chambres` — section#tarifs « RATES The price of a night, season by season Low s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/reserver` — section#demande « YOUR REQUEST In three steps 1. Your request · 2. T » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 108 ms (différence 21 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-table` — à 59 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-table` — à 33 ms (différence 24 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro (2)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/la-table` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 1 image(s) sur 133 (films/bords-intro-la-table-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/reserver` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 1 image(s) sur 130 (films/bords-intro-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/groupes` — écran différent à la même position après rechargement (5.3 %), voir comparaisons/rechargement-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/la-table` — écran différent à la même position après rechargement (13.2 %), voir comparaisons/rechargement-la-table-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 6 étape(s) notée(s), 36 min de travail pour 115 min de budget, 8 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /groupes, /la-table, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2641 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2620 ms depuis le premier octet
- film de l'ouverture /chambres 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /groupes (1366×768) : 2596 ms depuis le premier octet
- Ouverture /la-table (1366×768) : 2621 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2574 ms depuis le premier octet
- Ouverture / (390×844) : 2617 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /chambres (390×844) : 2561 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2588 ms depuis le premier octet
- Ouverture /la-table (390×844) : 2591 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2582 ms depuis le premier octet
- Bords de l’écran : 726 images d’intro, 17 de voile et 133 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 370, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 219, tâche la plus longue 0 ms
- Fluidité /groupes 1366×768 (molette) : 0 % d'images lentes sur 233, tâche la plus longue 0 ms
- Fluidité /la-table 1366×768 (molette) : 0 % d'images lentes sur 216, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 174, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 53 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /groupes 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /la-table 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Vitesse / : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/chambres : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/groupes : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/la-table : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/reserver : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /groupes : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-table : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.35 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/en/groupes,/groupes,/chambres --seulement=fichiers,mesures,films,bords,parcours
```
