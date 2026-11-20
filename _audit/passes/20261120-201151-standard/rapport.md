# Rapport d’audit

Projet : `relais-de-gascogne-maquette` · 20/11/2026 21:33:35 · 22 min · 11 page(s) · audit standard

## Résumé

- Statut : **69 échec(s)**
- Passe : `20261120-201151-standard` · version ?v=1
- Échecs : **69**
- À regarder : **46**
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

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-texte.conteneur > p.ouv-info.ouv-anim:nth-of-type(4) « Menus dès 16,50 € · Chambres dès 53 € » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/en/reserver` — section#debut > div.ouv-texte > p.ouv-tel.ouv-anim:nth-of-type(3) « BY PHONE 05 53 65 79 88 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/reserver` — section#debut > div.ouv-texte > p.ouv-tel.ouv-anim:nth-of-type(3) « PAR TÉLÉPHONE 05 53 65 79 88 » _(320×568 normal, 320×568 sansJs)_

### texte coupé (4)

- **texte coupé** — `/` — section#autour > ul.distances > li:nth-of-type(4) > strong « 120 km » — coupé par section#autour > ul.distances « 10 km du Gers 10 km des Landes 120 km de l'océan 1 » _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/` — section#autour > ul.distances > li:nth-of-type(4) « 120 km de Lourdes » — coupé par section#autour > ul.distances « 10 km du Gers 10 km des Landes 120 km de l'océan 1 » _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/en` — section#autour > ul.distances > li:nth-of-type(4) > strong « 120 km » — coupé par section#autour > ul.distances « 10 km to the Gers 10 km to the Landes 120 km to th » _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/en` — section#autour > ul.distances > li:nth-of-type(4) « 120 km to Lourdes » — coupé par section#autour > ul.distances « 10 km to the Gers 10 km to the Landes 120 km to th » _(768×1024 normal, 844×390 normal)_

### élément sans nom accessible (11)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/404` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/chambres` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/en` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/en/chambres` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/en/groupes` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/en/la-table` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/en/reserver` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/groupes` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/la-table` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_
- **élément sans nom accessible** — `/reserver` — body#haut > header > div.entete-rangee > a.entete-logo _(390×844 normal, 390×844 sansJs, 1366×768 normal, 1366×768 sansJs)_

### zone tactile sous 44 px (15)

- **zone tactile sous 44 px** — `/` — section#fin > div.fin-carte.conteneur > p.fin-tel:nth-of-type(1) > a « 05 53 65 79 88 » — 242 × 43 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — section#debut > div.ouv-texte.conteneur > p.ouv-info.ouv-anim:nth-of-type(4) > a « 05 53 65 79 88 » — 110 × 19 px _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/chambres` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en` — section#fin > div.fin-carte.conteneur > p.fin-tel:nth-of-type(1) > a « 05 53 65 79 88 » — 242 × 43 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/chambres` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/groupes` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/la-table` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/reserver` — section#debut > div.ouv-texte > p.ouv-tel.ouv-anim:nth-of-type(3) > a « 05 53 65 79 88 » — 242 × 37 px _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/en/reserver` — div.demande-grille:nth-of-type(2) > aside.recap > p.recap-tel > a « 05 53 65 79 88 » — 198 × 35 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/en/reserver` — div.acces-grille > div.sec-texte > address > a « 05 53 65 79 88 » — 111 × 19 px _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/groupes` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/la-table` — section#fin > div.conteneur.appel-grille > div.appel-tel:nth-of-type(2) > a « 05 53 65 79 88 » — 220 × 39 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/reserver` — section#debut > div.ouv-texte > p.ouv-tel.ouv-anim:nth-of-type(3) > a « 05 53 65 79 88 » — 242 × 37 px _(320×568 normal, 390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/reserver` — div.demande-grille:nth-of-type(2) > aside.recap > p.recap-tel > a « 05 53 65 79 88 » — 198 × 35 px _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/reserver` — div.acces-grille > div.sec-texte > address > a « 05 53 65 79 88 » — 110 × 19 px _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### contraste sur image (1)

- **contraste sur image** — `/` — section#debut > div.ouv-texte.conteneur > p.ouv-info.ouv-anim:nth-of-type(4) « Menus dès 16,50 € · Chambres dès 53 € » — 4.29:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### textes qui se chevauchent (13)

- **textes qui se chevauchent** — `/` — dl.chiffres-cles.fx-fini > div:nth-of-type(1) > dt > strong.grand-chiffre « 17 » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(1) > dd « chambres » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — dl.chiffres-cles.fx-fini > div:nth-of-type(2) > dt > strong.grand-chiffre « 53 € » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(2) > dd « dès · la nuit » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — dl.chiffres-cles.fx-fini > div:nth-of-type(3) > dt > strong.grand-chiffre « 80 € » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(3) > dd « Soirée étape » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/` — dl.chiffres-cles.fx-fini > div:nth-of-type(4) > dt > strong.grand-chiffre « 8,50 € » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(4) > dd « Petit-déjeuner » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en` — dl.chiffres-cles.fx-fini > div:nth-of-type(1) > dt > strong.grand-chiffre « 17 » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(1) > dd « rooms » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en` — dl.chiffres-cles.fx-fini > div:nth-of-type(2) > dt > strong.grand-chiffre « €53 » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(2) > dd « from · a night » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en` — dl.chiffres-cles.fx-fini > div:nth-of-type(3) > dt > strong.grand-chiffre « €80 » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(3) > dd « Overnight stopover » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en` — dl.chiffres-cles.fx-fini > div:nth-of-type(4) > dt > strong.grand-chiffre « €8.50 » — avec div.sec-texte > dl.chiffres-cles.fx-fini > div:nth-of-type(4) > dd « Breakfast » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/en/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > div.ouv-texte > p.surtitre.ouv-anim:nth-of-type(1) « GROUPS & FUNCTIONS » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/en/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > span « seats in our function room, with parking » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **textes qui se chevauchent** — `/en/reserver` — section#debut > div.ouv-texte > p.ouv-tel.ouv-anim:nth-of-type(3) > a « 05 53 65 79 88 » — avec section#debut > figure.media.ouv-image > figcaption.mention-ia « AI-generated illustration » _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > span « places assises dans notre salle de réception, avec » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/groupes` — section#debut > div.conteneur.ouv-chiffre-grille > p.ouv-nombre.ouv-anim > strong « 120 » — avec section#debut > div.conteneur.ouv-chiffre-grille > div.ouv-texte > p.surtitre.ouv-anim:nth-of-type(1) « GROUPES & RÉCEPTIONS » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/en/groupes` — div.conteneur.ouv-chiffre-grille > div.ouv-texte > p.ouv-actions.ouv-anim:nth-of-type(3) > a.bouton « Ask for a proposal » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/en/reserver` — section#debut > div.ouv-texte > p.ouv-actions.ouv-anim:nth-of-type(4) > a.bouton « Make a request » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/groupes` — div.conteneur.ouv-chiffre-grille > div.ouv-texte > p.ouv-actions.ouv-anim:nth-of-type(3) > a.bouton « Demander une proposition » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/reserver` — section#debut > div.ouv-texte > p.ouv-actions.ouv-anim:nth-of-type(4) > a.bouton « Faire une demande » _(320×568 normal, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (7)

- **accessibilité (axe) : color-contrast** — `/en/groupes` — .frise-menu:nth-child(1) > ul > li:nth-child(2) ; .frise-menu:nth-child(1) > ul > li:nth-child(3) ; .frise-menu:nth-child(2) > ul > li:nth-child(2) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/en/groupes` — .frise-choix > li:nth-child(1) ; .frise-choix > li:nth-child(2) ; .frise-choix > li:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/en/la-table` — #menu-jour > ol > li:nth-child(3) ; #menu-jour > ol > li:nth-child(4) ; #menu-jour > ol > li:nth-child(5) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/en/la-table` — #menu-jour > ol > li:nth-child(2) ; #menu-jour > ol > li:nth-child(3) ; #menu-jour > ol > li:nth-child(4) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/groupes` — .frise-menu:nth-child(1) > ul > li:nth-child(2) ; .frise-menu:nth-child(1) > ul > li:nth-child(3) ; .frise-menu:nth-child(2) > ul > li:nth-child(2) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_
- **accessibilité (axe) : color-contrast** — `/la-table` — #menu-jour > ol > li:nth-child(1) ; #menu-jour > ol > li:nth-child(2) ; #menu-jour > ol > li:nth-child(3) — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_
- **accessibilité (axe) : color-contrast** — `/la-table` — #menu-jour > ol > li:nth-child(3) ; #menu-jour > ol > li:nth-child(4) ; #menu-jour > ol > li:nth-child(5) — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

### élément recouvert (2)

- **élément recouvert** — `/en/reserver` — div.acces-grille > figure.carte-acces > svg > g.carte-mezin — par div.acces-grille > figure.carte-acces > svg > rect.carte-fond _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/reserver` — div.acces-grille > figure.carte-acces > svg > g.carte-mezin — par div.acces-grille > figure.carte-acces > svg > rect.carte-fond _(390×844 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/chambres` — page large de 330 px — largeurs : 320 px _(balayage 320–1920 normal)_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro (6)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 4 image(s) sur 114 (films/bords-intro-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/chambres` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 8 image(s) sur 134 (films/bords-intro-chambres-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/groupes` — bande d’environ 15 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 9 image(s) sur 119 (films/bords-intro-groupes-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/la-table` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 7 image(s) sur 134 (films/bords-intro-la-table-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/reserver` — bande d’environ 14 px en rgb(246, 240, 228) à côté de l’intro en rgb(34, 61, 117), sur 7 image(s) sur 130 (films/bords-intro-reserver-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant l’intro** — `/` — bande d’environ 14 px en rgb(246, 239, 230) à côté de l’intro en rgb(34, 61, 117), sur 22 image(s) sur 95 (films/bords-intro-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro (1)

- **bords de l’écran : bande d’une autre couleur le long du bord du bas pendant l’intro** — `/chambres` — bande en rgb(206, 195, 185) à côté de l’intro en rgb(34, 61, 116), sur 2 image(s) sur 134 (films/bords-intro-chambres-1366.png) _(1366×768 barre de défilement classique (15 px))_

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

### section sans visuel (8)

- **section sans visuel** — `/` — section#autour « Au pays de l'Armagnac, du foie gras et des pruneau » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/chambres` — section#tarifs « TARIFS Le prix de la nuit, saison par saison Basse » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en` — section#autour « In the land of Armagnac, foie gras and prunes At t » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/chambres` — section#tarifs « RATES The price of a night, season by season Low s » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/groupes` — section#journee « COACH DAY TRIP A day in Mézin, from morning to tea » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/en/reserver` — section#demande « YOUR REQUEST In three steps 1. Your request · 2. T » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/groupes` — section#journee « CIRCUIT AUTOCAR Une journée à Mézin, du matin au g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/reserver` — section#demande « VOTRE DEMANDE En trois étapes 1. Votre demande · 2 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (25)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#table > div.sec-images:nth-of-type(2) > figure.media.img-portrait:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#chambres > div.conteneur.sec-grille > figure.media.img-portrait > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#pays > div > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media.fin-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#debut > figure.media.ouv-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/chambres` — section#formules > div.sec-grille > figure.media.img-portrait > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#debut > figure.media.ouv-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#table > div.sec-images:nth-of-type(2) > figure.media.img-portrait:nth-of-type(1) > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#chambres > div.conteneur.sec-grille > figure.media.img-portrait > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#pays > div > figure.media > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en` — section#fin > figure.media.fin-fond > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/chambres` — section#debut > figure.media.ouv-bande > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/chambres` — section#formules > div.sec-grille > figure.media.img-portrait > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/groupes` — section#debut > figure.media.ouv-bande > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/groupes` — section#autour > div.autour-grille:nth-of-type(1) > figure.media.autour-image > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/la-table` — section#debut > figure.media.ouv-image > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/la-table` — section#specialites > div.conteneur.sec-grille > figure.media.img-portrait > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1920×1080 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/en/reserver` — section#debut > figure.media.ouv-image > figcaption.mention-ia « AI-generated illustration » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/groupes` — section#debut > figure.media.ouv-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/groupes` — section#autour > div.autour-grille:nth-of-type(1) > figure.media.autour-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/la-table` — section#debut > figure.media.ouv-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/la-table` — section#specialites > div.conteneur.sec-grille > figure.media.img-portrait > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/reserver` — section#debut > figure.media.ouv-image > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 142 ms (différence 21 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 60 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/la-table` — à 56 ms (différence 26 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/la-table` — à 52 ms (différence 25 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/groupes` — écran différent à la même position après rechargement (5.3 %), voir comparaisons/rechargement-groupes-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/la-table` — écran différent à la même position après rechargement (13.4 %), voir comparaisons/rechargement-la-table-*.png _(1366×768)_

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
- Journal v1 : 2 étape(s) notée(s), 13 min de travail pour 30 min de budget, 7 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /chambres, /groupes, /la-table, /reserver.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2643 ms depuis le premier octet
- Ouverture /chambres (1366×768) : 2589 ms depuis le premier octet
- Ouverture /groupes (1366×768) : 2587 ms depuis le premier octet
- Ouverture /la-table (1366×768) : 2585 ms depuis le premier octet
- Ouverture /reserver (1366×768) : 2600 ms depuis le premier octet
- Ouverture / (390×844) : 2596 ms depuis le premier octet
- Ouverture /chambres (390×844) : 2569 ms depuis le premier octet
- Ouverture /groupes (390×844) : 2599 ms depuis le premier octet
- Ouverture /la-table (390×844) : 2573 ms depuis le premier octet
- Ouverture /reserver (390×844) : 2554 ms depuis le premier octet
- Bords de l’écran : 726 images d’intro, 17 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/chambres : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /en/reserver : aucune section épinglée ou plein écran.
- Tient dans l'écran /groupes : aucune section épinglée ou plein écran.
- Tient dans l'écran /la-table : aucune section épinglée ou plein écran.
- Tient dans l'écran /reserver : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 381, tâche la plus longue 0 ms
- Fluidité /chambres 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité /groupes 1366×768 (molette) : 0 % d'images lentes sur 234, tâche la plus longue 0 ms
- Fluidité /la-table 1366×768 (molette) : 0 % d'images lentes sur 225, tâche la plus longue 0 ms
- Fluidité /reserver 1366×768 (molette) : 0 % d'images lentes sur 154, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /chambres 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /groupes 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /la-table 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /reserver 390×844 (doigt) : 0 % d'images lentes sur 1334, tâche la plus longue 0 ms
- Vitesse / : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /chambres : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /en : 0.31 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/chambres : 0.21 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/groupes : 0.24 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/la-table : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /en/reserver : 0.23 s de calcul au chargement (téléphone ralenti).
- Vitesse /groupes : 0.22 s de calcul au chargement (téléphone ralenti).
- Vitesse /la-table : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /reserver : 0.31 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/chambres,/en,/en/chambres,/en/groupes,/en/la-table,/en/reserver,/groupes,/la-table,/reserver --seulement=fichiers,mesures,bords,parcours
```
