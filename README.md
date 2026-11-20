# Le Relais de Gascogne — maquette v1

Maquette du nouveau site de l'hôtel-restaurant **Le Relais de Gascogne** (Avenue Max Grosselle, 47170 Mézin), réalisée à partir du site actuel (relaisdegascogne.wixsite.com/47170).

- Adresse de la maquette : https://relais-de-gascogne-maquette.vercel.app
- Direction artistique « Volets bleus » : crème de la façade, bleu des volets et du logo, rouge des géraniums ; titres Fraunces, texte Figtree.
- Pages : accueil, La table, Les chambres, Groupes & réceptions, Réserver & venir, page 404. Français et anglais.
- Site statique (HTML, CSS, JavaScript), sans étape de construction. Les pages se génèrent avec `node outils/generer.mjs` à partir de `donnees/` (textes dans `donnees/textes/fr.json` et `en.json`, menus, tarifs, journée de groupe).

## Fiche à fournir par le client (à compléter)

| Élément | Où il apparaît | État |
|---|---|---|
| Mentions légales complètes : raison sociale (SARL Les Gascons Gourmet), capital, RCS, SIRET, n° TVA, directeur de la publication | pied de page | à compléter (capital et RCS vides sur le site actuel) |
| Politique de confidentialité (formulaire de demande, cookies, DPO avec une seule adresse e-mail) | pied de page, formulaire | à compléter |
| Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis | mentions légales | à reprendre (le site actuel indique « AutreWIX ») |
| Crédits : illustrations générées par IA (Grok) | mention « Illustration générée » sur chaque image concernée | à garder sur le site final |
| Classement de l'hôtel (plaque « H » du logo) | logo | à vérifier : classement toujours en cours de validité |

## Retiré ou remplacé faute d'information

| Information | Page | Ce que la maquette affiche à la place |
|---|---|---|
| Horaires et jours d'ouverture du restaurant et de l'accueil | La table, Réserver & venir | « Jours et horaires : renseignements au 05 53 65 79 88 » ; aucun statut « ouvert maintenant » |
| Dates de basse et de haute saison | Les chambres | Les deux colonnes de tarifs, au choix ; « les dates vous sont données au téléphone » |
| Montant de la taxe de séjour (le site écrit « 0.94cts », barème 2024) | Les chambres | « Estimation hors taxe de séjour » |
| Allergènes | La table | « Informations sur les allergènes disponibles sur demande » |
| Prix de la soirée étape : par personne ou par chambre ? | Les chambres, accueil | « Soirée étape 80 € », sans précision |
| Tarifs de la salle de réception et du circuit autocar | Groupes & réceptions | « Menus et tarifs à étudier ensemble » (seuls les menus de groupe à 26 € et 31 € sont affichés) |
| Date d'ouverture de la chambre accessible aux personnes à mobilité réduite | Les chambres | « est en préparation » |
| Photos récentes et en haute définition (salle, terrasse, chambres, plats) | toutes | photos actuelles du site en petit format ; grandes images générées en attendant |
| Menu de la fête des mères 2024 | — | non repris (événement passé) |

## Incohérences du site actuel, à confirmer avec le client

- Deux adresses e-mail : sarllesgasconsgourmets@bbox.fr (pied de page) et etienne.soufflet@wanadoo.fr (mentions légales). La maquette utilise la première.
- Océan et Lourdes à 120 km (accueil) ou à 130 km (page À découvrir). La maquette affiche 120 km.
- Église de Mézin du « XI siècle » (circuit autocar) ou « des XIIe et XIIIe siècles » (À découvrir) : la maquette ne donne pas de date.
- « GR20 » pour le chemin de Saint-Jacques (le GR 20 est en Corse) : la maquette ne donne pas de numéro.
- « Abbaye de Flarans » : écrit « Flaran » dans la maquette.
- Adresse : « Avenue Max Grosselle » (pied de page) ou « 3 avenue Max Grosselle » (mentions légales).
- Délégué à la protection des données : deux adresses e-mail différentes.

## Simulé dans la maquette

- La demande de réservation en trois étapes (table, chambre, groupe) : rien n'est envoyé, le message le dit.
- L'estimateur de séjour : estimation indicative à partir des tarifs « à partir de ».
- Le schéma d'accès : schéma indicatif dessiné, distances données par le Relais.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), les formulaires simulés (brancher un vrai envoi), les mentions « à compléter » du pied de page, les phrases d'attente ci-dessus une fois les vraies informations fournies.
- Garder : la mention « Illustration générée » sur les images créées par IA.

## Audit

Rapport du dernier audit dans `_audit/rapport/rapport.md`. Relancer avec `node _audit/audit.mjs` (standard) ou `node _audit/audit.mjs --complet`.
