# Base de départ des maquettes (socle)

Base testée, commune à toutes les maquettes : chaque projet part d'une copie de ce dossier au lieu de tout réécrire.
Les pages d'exemple (accueil, à propos, mentions légales, 404) et leurs images sont à remplacer par le contenu du client.
Elles montrent l'objet d'ouverture (`data-iris-centre`) et l'intro qui finit sur lui (`versObjet` dans `site.js`), mais pas les autres points de la grille wouahou, propres à chaque client : sur elles seules, l'audit relève donc l'objet à manipuler, le fil, la typographie et le retour de l'action (points 1, 4, 5 et 7). C'est normal.

## Démarrer un projet

1. Copier le contenu de `socle/` à la racine du projet `[client]-maquette/`, et le dossier `audit/` de la skill dans `_audit/`. Les fichiers cachés (`.vercelignore`, `assets/partage/.gitkeep`) peuvent manquer dans la copie de la skill reçue dans une conversation : le générateur (étape 5) recrée `.vercelignore` s'il manque et le complète s'il lui manque une ligne, et `outils/images-partage.mjs` crée `assets/partage/`. Sans `.vercelignore`, `_audit/`, `source/`, `outils/` et `donnees/` seraient mis en ligne ; l'audit le vérifie. Les fichiers de travail (planche d'intention, `intention.json`, `direction.json`, document Grok, relevés, captures de travail) vont dans `_suivi/`, jamais à la racine : ni mis en ligne ni audités.
2. Remplir `donnees/site.json` (nom, adresse Vercel prévue, langues, couleurs — `fond`, `texte`, `voile`, et si besoin `ouverture` pour le panneau de l'intro et `menu` pour le fond du menu —, `formeVoile` choisie au plan d'animation — `glisse`, `iris`, `vague` ou `rideau` —, contact, site actuel), puis `donnees/textes/<langue>.json` et les autres données (`donnees/*.json`).
3. Écrire les pages dans `source/pages/*.mjs`, le style dans `assets/css/site.css`, les effets dans `assets/js/site.js`.
4. Images : le pipeline de la bibliothèque (`bibliotheque-maquettes/images/README.md`) remplace `outils/images.py` : `plan-images.json`, puis `node $I/produire.mjs plan-images.json` écrit les WebP et `donnees/images.json`. `images.py` reste en secours sans la bibliothèque.
5. Générer les pages : `node outils/generer.mjs`, puis les images de partage : `node $I/partage.mjs` (pipeline de la bibliothèque ; `outils/images-partage.mjs` en secours).
6. Copier `_audit/config.exemple.json` en `_audit/config.json` et le remplir (pages types, effets du plan, site actuel), puis auditer : `node _audit/audit.mjs` (standard), `--rapide` pendant la construction, `--complet` pour la version finale.

Ne jamais modifier à la main les pages générées (`index.html`, `en/index.html`…) : elles sont réécrites par `generer.mjs`.

## Dossiers

| Dossier | Contenu |
|---|---|
| `donnees/` | Source unique des textes et des données : `site.json`, `textes/<langue>.json`, `*.json` (champs traduits sous la forme `{ "fr": …, "en": … }`), `structure.json` (données schema.org réelles). |
| `source/critique/` | Style et script critiques, copiés en ligne dans chaque page : couleur de fond dès la première image, mode d'arrivée (intro, voile, retour), délai de secours. |
| `source/gabarits/` | `commun.mjs` (head, en-tête, menu, pied de page, barre du téléphone, voile, panneau d'ouverture), `partage.mjs` (image de partage 1200×630). |
| `source/pages/` | Une page par fichier : `export const page = { cle, fichier }` et `export default (c) => html\`…\``. |
| `assets/js/socle/` | Comportements communs (voir plus bas). Le projet ne les modifie pas : il les règle depuis `site.js`. |
| `assets/vendor/` | GSAP 3.15 (gsap, ScrollTrigger, SplitText), sans numéro de version. |
| `outils/` | `generer.mjs`, `images-partage.mjs`, `images.py`, `gabarit.mjs`, `dimensions.mjs`. |

## Ce que fait le socle

- **Ouverture** : l'intro complète se joue à chaque arrivée sur le site et à chaque rechargement. Elle se termine moins de 3 s après le premier octet, attente comprise (le socle l'accélère si l'attente l'a retardée). Une première action l'accélère, une seconde la passe (clic, touche, molette, glissement ; un geste continu compte pour une action). Défilement bloqué dès le premier affichage. Au retour arrière ou avant, la page revient directement dans son état final. Les changements de page internes passent par le voile, jamais par l'intro. Une attente qui échoue ne bloque jamais l'écran.
- **Voile de transition** (`voile.js`) : sa forme reprend le motif de la direction (grille wouahou, point 3), réglée par `formeVoile` dans `donnees/site.json` : `glisse` (défaut : monte du bas, repart vers le haut), `iris` (un disque grandit depuis le clic, puis à l'arrivée un trou s'ouvre sur l'objet d'ouverture `[data-iris-centre]` ; avec `data-iris-centre="disque"` sur un objet rond entier à l'écran, le trou démarre à sa taille), `vague` (bord ondulé à la montée et au retrait), `rideau` (deux pans qui se ferment depuis les côtés, puis s'ouvrent depuis le centre). Repli sans `clip-path` ni masque : fondu. Une autre forme (tampon, empreinte, étoile) se branche dans `couvrir()` et `decouvrir()` de `voile.js`, puis s'ajoute à `FORMES_VOILE` dans `outils/generer.mjs` et `source/gabarits/commun.mjs`. Quelle que soit la forme, le voile couvre l'écran, navigation, la page d'arrivée démarre couverte (style critique), se prépare dessous, puis le voile se retire et les animations d'arrivée démarrent à mesure que la page se découvre. Délai de secours 2 s. Page suivante préchargée à l'approche du lien. Grands sauts dans une même page sous le voile. Défilement bloqué tant que le voile couvre l'écran, au départ comme à l'arrivée. Le voile est placé en tête de `<body>` pour être là dès la première image.
- **Intro qui devient la page** (`vers-objet.js`, grille wouahou, point 2) : `versObjet(tl, { a })` ajouté à la timeline de `jouer()` fait glisser l'objet de l'intro (le logo du panneau, `[data-ouverture-objet]`, ou `objet`) jusqu'à l'objet d'ouverture de la page (`[data-iris-centre]`), puis ouvre le panneau en cercle depuis lui (fin à 2,3 s avec `a: 1.0`). Sans objet d'ouverture visible (60 × 60 px au moins dans le premier écran), tout part du centre de l'écran. Ne pas animer l'objet d'ouverture lui-même avant l'appel (sa position serait faussée) ; tout effet long se joue hors de la timeline (`tl.call`).
- **Bande de la barre de défilement** (`gouttiere.js`) : sur un ordinateur à barre de défilement classique (Windows, Mac avec une souris), `scrollbar-gutter: stable` réserve une bande d'environ 15 px à droite ; défilement bloqué, le navigateur la peint avec la couleur de fond de `<html>`, qu'aucun panneau fixe ne peut recouvrir, et il n'y peint ni image ni dégradé. Le style critique donne donc à `<html>` la couleur du voile ou de l'intro dès la première image, puis le socle suit le panneau qui couvre l'écran (intro, voile, menu) : la bande prend la couleur de ce qui en couvre la plus grande partie, mélangée selon l'opacité pendant un fondu. Pour une fenêtre plein écran propre au projet : `suivre(el)` à l'ouverture, `lacher(el)` à la fermeture (exportés par `socle/index.js`), et `data-recouvrement` pour que l'audit la contrôle. Un panneau à fond d'image ou de dégradé indique la couleur de la bande avec `data-gouttiere="#…"`.
- **En-tête** : opaque, se cache en descendant et revient en remontant avec un seuil, bouton Menu dès que les liens ne tiennent plus (mesure réelle), menu avec Échap, focus gardé, page bloquée, libellé qui revient à « Menu ».
- **Pas de mode calme** (v10.11, 12 novembre 2026, à la demande de l'utilisateur : inutile pour des maquettes) : ni bouton « Réduire les animations », ni suivi du réglage de l'appareil ; toutes les animations se jouent. `etat.calme` vaut toujours `false` (des modules anciens le lisent encore).
- **Défilement** : natif sur Mac, iPhone, iPad et écrans tactiles ; adouci à la molette sous Windows et Linux seulement.
- **Mesures** : `--entete-h` et `--barres-h` réelles, `ScrollTrigger.refresh()` regroupé quand la hauteur de la page change.
- **Boucles** : `boucle(element, (dt, t) => …)` ne tourne qu'à l'écran, onglet visible
- **Formulaires** `[data-formulaire]` : préremplis par l'adresse (`?sujet=visite`), erreurs à côté du champ, pas de double envoi, message « simulé ».
- **Compteurs** `[data-compteur]`, **barre de lecture** `[data-barre-lecture]`, **sommaire** `[data-sommaire]`, **curseur** (attribut `data-curseur` sur `<html>`, souris seulement).

## Bibliothèque d'effets (`assets/js/socle/effets.js`, `onde.js`)

Effets génériques testés (retour arrière, téléphone, audit) : on les pose par attributs, on ne les réécrit pas.

| Attribut | Effet | Remarques |
|---|---|---|
| `data-anime="lignes"` | Titre découpé en lignes qui montent de leur masque | Accents jamais coupés ; redevient du texte normal après l'arrivée |
| `data-anime="mots"` | Texte qui arrive mot par mot | |
| `data-anime="lettres"` | Titre qui arrive lettre par lettre, en rotation | Hauteur figée pendant la découpe : la page ne bouge pas ; redevient du texte normal après l'arrivée |
| `data-anime="cascade"` | Enfants directs (cartes, liste) qui arrivent l'un après l'autre | Ne pas mettre `data-anime` sur les enfants |
| `data-anime="rideau"` | Image révélée par un rideau, qui se resserre | Sur une figure `.media` (`c.media({ attrs: 'data-anime="rideau"' })`) |
| `data-fx="parallaxe"` | Image qui glisse dans son cadre au défilement | `data-fx-force` : déplacement en % (10) ; agrandie d'office, bords jamais visibles |
| `data-fx="zoom"` | Image qui se resserre en entrant dans l'écran | `data-fx-force` : agrandissement de départ en % (18) |
| `data-fx="trace"` | Traits SVG qui se dessinent au défilement | Tous les traits du SVG, ou ceux marqués `data-fx-trait` ; finissent tracés en entier |
| `data-fx="galerie"` | Section épinglée, piste `[data-galerie]` qui défile à l'horizontale | Ordinateur et tablette (761 px et plus) ; barre `[data-fx-progres]` ou `.galerie-progres span` |
| `data-fx="onde"` | Image WebGL qui ondule selon la vitesse de défilement, loupe douce sous la souris | Canvas visible seulement pendant le mouvement ; image d'origine dessous ; 6 par page au plus ; `data-fx-force` (1) |
| `data-fx="plein-ecran"` | Image qui part d'une vignette et s'ouvre jusqu'au plein écran au défilement | Section haute (`--fx-longueur`, 260svh) ; enfant direct `[data-collant]` (collé en haut, sticky : jamais épinglé par GSAP) qui contient une figure `.media` ; mots `[data-fx-ecarte="g"\|"d"]` qui s'écartent, légende `[data-fx-apres]` qui arrive à la fin ; `data-fx-depart` : découpe de départ (`inset(24% 30% 24% 30% round 24px)`) ; l'en-tête se cache pendant la scène, un lien profond y arrive tout en haut ; en secours et sans JavaScript, image entière dans une section normale |
| `data-fx="mots-geants"` | Rangées de mots très grands `[data-fx-rangee]` qui filent en sens opposés au défilement (`data-sens="-1"`) et s'inclinent selon la vitesse | Décor : écrire `aria-hidden="true" data-ruban data-visuel` dans la page (le JavaScript les pose aussi, mais l'audit sans JavaScript les lit dans le HTML) ; le vrai titre de la section est ailleurs (au besoin `.visuellement-cache`) ; mots répétés au besoin ; `data-fx-force` : course en % (25) ; en calme et sans JavaScript, les mots passent à la ligne |
| `data-fx="vitesse"` | Image ou carte qui s'incline selon la vitesse de défilement, puis se redresse à l'arrêt | `data-fx-force` : degrés au plus (3) ; une seule boucle partagée, arrêtée au repos ; pas de transition CSS sur transform pour cet élément (survol sur un enfant) |
| `data-survol="magnetique"` | Bouton attiré par la souris | Souris seulement ; ne compte pas comme effet de section |
| `data-survol="incline"` | Carte qui s'incline en 3D | Souris seulement ; `data-survol-force` en degrés (7) |

Règles :
- un seul `data-fx` par élément ; `rideau` ne se combine pas avec un `data-fx` sur la même figure ;
- un texte `lignes` ou `mots` qui contient un lien, un bouton, un compteur ou un autre effet n'est pas découpé (simple fondu) : découper le texte autour, pas le bloc entier ;
- les textes sont découpés à l'avance, pendant les temps morts, et redeviennent du texte normal quand le défilement s'arrête ; la découpe ne change pas la hauteur du bloc ;
- un trait ou une image en `zoom` déjà dans le premier écran se joue juste après l'ouverture ; au retour arrière, tout est dans son état final ;
- `galerie` n'épingle qu'à partir de 761 px : sur téléphone la piste défile au doigt, donc la section a besoin d'un autre effet (titre en `lignes`, cartes en `cascade`…) ;
- au premier survol, un élément `data-survol` reçoit la classe `fx-survol` : GSAP prend la main sur sa transformation, sans transition CSS sur transform ;
- `onde` : le canvas est calé sur l'image (pas sur la figure), respecte `object-fit` (cover ou contain) et `object-position`, et l'ouverture attend sa texture (dans son délai maximal).
Les apparitions et les `data-fx` reçoivent `data-effet` s'il manque (l'audit les compte) ; les effets à la souris reçoivent `data-souris` (l'audit vérifie qu'ils ne dérivent pas).
Effets « modernes » prêts à l'emploi (point 8 de la grille) : `lettres`, `plein-ecran`, `mots-geants` et `vitesse` couvrent quatre familles (titres cinétiques, image qui s'ouvre en plein écran, typographie géante, réaction à la vitesse) ; une scène 3D ou un carrousel 3D reste un effet du projet, habillé de son métier (faces arrière en `data-face="dos"`).
Ordre des scènes : après `preparer()`, le socle appelle `ScrollTrigger.sort()` puis `ScrollTrigger.refresh()` : une scène créée hors de l'ordre de la page ne démarre plus trop tôt. Une scène créée plus tard (après un chargement, dans `arrivee()`) refait ces deux appels elle-même.
Effets propres au projet (dans `site.js`) : marquer leur élément `data-effet="nom-du-plan"`, et `data-souris` s'ils suivent la souris.

## API du projet (`assets/js/site.js`)

```js
import { demarrer, boucle, etat, versObjet } from './socle/index.js?v=1';
demarrer({
  preparer() { /* ScrollTrigger, SplitText, boucles : états de départ posés ici */ },
  jouer() { const tl = gsap.timeline(); /* … */ versObjet(tl, { a: 1.0 }); return tl; /* intro complète, moins de 3 s, qui finit sur la page */ },
  etatFinal() { /* éléments animés par le projet dans leur état final */ },
  arrivee() { /* animations d'arrivée pendant que le voile se retire (facultatif) */ },
  pret: [/* promesses en plus : shaders, scènes ; un échec ne bloque rien */],
});
```

Aussi exportés : `centreOuverture()` (centre de la partie visible de l'objet d'ouverture, pour un effet propre), `ouvrirTrou(el, centre, duree)` (trou qui s'ouvre dans un panneau du projet), `formeVoile()`, `partir(url, libelle, point)`.

## Conventions lues par le socle et par l'audit

| Attribut | Rôle |
|---|---|
| `data-ouverture` | Élément d'ouverture, visible et entier dès la première image (panneau du gabarit commun). |
| `data-ouverture-objet` | Objet de l'intro qui glisse jusqu'à la page avec `versObjet` (le logo du panneau par défaut). |
| `data-iris-centre` | Objet d'ouverture de la page, un seul par page, dans le premier écran : l'intro finit sur lui, le voile en iris s'ouvre sur lui. `="disque"` : objet rond, le trou démarre à sa taille. |
| `data-forme` | Sur `[data-voile]` : forme du voile (posée par le gabarit depuis `formeVoile`). |
| `data-grille="…"` | Point de la grille wouahou réalisé par l'élément (`manipuler`, `fil`, `typo`, `scene`, `retour`, `voile` pour une transition propre ; plusieurs séparés par des espaces) : contrôlé par l'audit. |
| `data-anime` | Caché jusqu'à son apparition (`.vu`). `data-anime="gsap"` : animé par le projet. |
| `data-voile`, `data-voile-libelle` | Voile de transition et nom de la page d'arrivée. |
| `data-gouttiere` | Sur un panneau qui couvre l'écran : couleur de la bande de la barre de défilement quand son fond est une image ou un dégradé. |
| `data-recouvrement` | Fenêtre plein écran du projet (visionneuse, panier) : l'audit contrôle les bords de l'écran pendant qu'elle est ouverte. |
| `data-entete`, `data-nav`, `data-menu`, `data-menu-bouton` | En-tête, navigation, menu, bouton Menu. Navigation sur une rangée si elle tient ; dès 900 px, sinon, sur une deuxième rangée (`nav-deux-rangees`, au besoin sur deux lignes `nav-deux-lignes`) : jamais le bouton Menu seul sur ordinateur ; en dessous de 900 px, bouton Menu (`nav-compacte`). Liens jamais coupés en deux lignes (`white-space: nowrap`). Les rangées et `--entete-h` sont décidées par un court script placé juste après l'en-tête dans le gabarit, avant le premier affichage : rien ne saute quand `site.js` prend la main (à garder si le gabarit de l'en-tête change). |
| `data-menu-lien` | Lien Menu sans JavaScript (`href="#menu"`, posé par le gabarit) : sous 900 px, il ouvre le menu plein écran par son ancre (`#menu:target`), « Fermer » le referme. Sans JavaScript, l'en-tête reste dans le flux (`--entete-h: 0`). |
| `data-barre-fixe` | Barre fixe du bas (téléphone). `data-masque-barre` : zone où elle se masque. |
| `data-action-principale`, `data-info-cle` | Bouton principal et information clé du premier écran. |
| `data-entete-cache` | Scène épinglée pendant laquelle l'en-tête se cache. Un lien vers elle (ou vers un élément qu'elle contient) y arrive tout en haut de l'écran. |
| `data-scene` | Scène épinglée ou collante du projet : en secours et sans JavaScript, elle prend la hauteur de son contenu (au moins un écran), plus rien n'est épinglé (comme `.ecran.epingle`). |
| `data-collant` | Cadre collant d'une scène (`position: sticky`) : redevient un bloc normal en secours et sans JavaScript. |
| `data-face="dos"` | Face arrière d'un objet en 3D (verso d'une carte, dos d'un volet) : `backface-visibility: hidden` d'office, retirée en secours et sans JavaScript, ignorée par le contrôle des chevauchements. |
| `.masque-ecran-bas`, `.masque-ecran-tres-bas` | Élément retiré sur les écrans bas : moins de 820 px de haut sur ordinateur (1366×768) pour le premier, moins de 500 px (téléphone à l'horizontale) pour les deux. Pour les phrases d'introduction, surtitres et légendes qui empêchent un premier écran ou une scène de tenir. |
| `data-plein-ecran` | Section plein écran vérifiée par le test « tient dans l'écran ». |
| `data-galerie` | Galerie horizontale (ses cartes au bord de l'écran ne sont pas des « textes coupés »). |
| `data-boucle-css`, `data-pause-pour` | Animation CSS en boucle et son bouton pause. |
| `data-superpose` | Superposition voulue (exclue du contrôle des chevauchements). |
| `data-audit-ignorer` | Élément décoratif ignoré par l'audit (curseur, particules). |
| `data-ephemere` | Élément qui doit disparaître après son animation. |
| `data-prix`, `data-repere`, `data-indicateur` | Prix, repère de schéma ou de carte, indicateur : jamais recouverts ni coupés (audit). |
| `data-sans-visuel` | Bloc dispensé d'image par section (sections de texte des pages légales). |
| `data-sans-action` | Sur `<main>` : page sans bouton principal (pages légales ; posé par `page.sansAction`). |
| `data-sans-effet` | Sur `<main>` (posé par `page.sansEffet`) ou une section : dispensée du contrôle « un effet par section » (pages de texte). |
| `data-effet="nom"` | Effet compté par l'audit pour sa section ; nom du plan d'animation (liste `effets` de `_audit/config.json`). |
| `data-souris` | Effet qui suit la souris : l'audit vérifie qu'il se stabilise quand elle s'arrête. |
| `data-anime="lignes|mots|lettres|cascade|rideau"`, `data-fx`, `data-survol` | Bibliothèque d'effets (voir plus haut). |
| `data-visuel`, `data-section` | Visuel dessiné autrement qu'en image ; section qui n'est pas une balise `<section>`. |
| `data-ruban` | Bandeau défilant (ignoré par le contrôle des textes coupés). |
| `data-typo-ignorer` | Texte exclu du contrôle de typographie française (code, citation en langue étrangère). |
| `data-sans-transition` | Lien interne sans voile (ancre « retour en haut », téléchargement). |
| `data-defilement-natif` | Sur `<html>` : défilement natif partout, choix du projet. |
| `data-langue` | Lien vers une autre langue : le choix est mémorisé. |
| `data-formulaire`, `data-message-envoi` | Formulaire simulé et zone du message « rien n'a été envoyé ». |
| `data-compteur`, `data-barre-lecture`, `data-sommaire` | Compteur animé, barre de lecture, sommaire qui suit la lecture. |
| `data-libelle` | Nom de la page d'arrivée affiché sur le voile (posé par `c.lien`). |
| Dossier `assets/images/grok/` | Image générée : `c.media()` ajoute la mention « Illustration générée ». |

## Gabarits (`c` dans les pages)

`c.t('cle')` texte échappé avec typographie française · `c.tb('cle')` fragment HTML de confiance · `c.s('cle')` texte brut ·
`c.lien('page', { ancre, params, texte, classe })` lien avec `data-libelle` et `aria-current` · `c.url('page', ancre, params)` ·
`c.media({ nom, alt, cadrage, cadrageMobile, sizes, priorite, classe, ratio, legende, attrs })` image en plusieurs tailles, version téléphone, largeur et hauteur réelles ; `attrs` : attributs en plus sur la figure (`'data-fx="parallaxe"'`) ·
`c.donnees.<fichier>` données localisées · `c.l` langue · `c.site` réglages.

En français, la typographie est appliquée automatiquement : espaces insécables avant `: ; ? ! »`, après `«`, entre un nombre et son unité, dans les milliers.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), données de démonstration, formulaires, panier et réservations simulés, mentions « à compléter ».
- Garder : la mention « Illustration générée » sur les images créées par IA.
