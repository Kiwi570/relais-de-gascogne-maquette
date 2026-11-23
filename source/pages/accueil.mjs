/* Accueil du Relais de Gascogne : fenêtre aux volets bleus (ouverture plein cadre), la table, les saveurs,
   les chambres (fond bleu), la maison (vraies photos), le pays (image en plein écran), la salle, l'appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

export default (c) => {
  const menus = c.donnees.menus;
  const T = c.donnees.tarifs;
  const prix = (n) => (c.l === 'fr' ? String(n).replace('.', ',') + ' €' : '€' + String(n).replace(',', '.'));
  return html`
<section class="ouv ouv--plein" id="debut">
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('alts.accueil-ouverture'), cadrage: '62% 50%', cadrageMobile: '50% 60%', priorite: true, classe: 'ouv-fond ouv--accueil-fond', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  <div class="ouv-texte conteneur">
    <p class="surtitre ouv-anim">${c.t('ouvertures.accueil.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="l"><span class="li">${c.t('ouvertures.accueil.l1')}</span></span> <span class="l"><span class="li">${c.tb('ouvertures.accueil.l2')}</span></span></h1>
    <p class="ouv-intro ouv-anim masque-ecran-tres-bas">${c.t('ouvertures.accueil.texte')}</p>
    <p class="ouv-actions ouv-anim">
      ${c.lien('reserver', { ancre: 'demande', params: 'objet=table', classe: 'bouton', texte: c.t('ouvertures.accueil.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} <span class="sans-mobile">${c.site.contact.telephone}</span></a>
    </p>
    <p class="ouv-info ouv-anim" data-info-cle>${c.t('ouvertures.accueil.info')}</p>
  </div>
</section>

<section class="sec sec--table conteneur" id="table">
  <div class="sec-texte">
    <p class="surtitre" data-anime>${c.t('accueil.table.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.table.titre')}</h2>
    <p data-anime>${c.t('accueil.table.texte')}</p>
    <ul class="ardoise" data-effet="menu-trace">
      ${menus.map((m) => html`<li>${c.lien('la-table', { ancre: 'menu-' + m.id, classe: 'ardoise-ligne', texte: html`<span class="ardoise-nom">${m.court}</span><span class="ardoise-points" aria-hidden="true"></span><span class="ardoise-prix" data-prix>${prix(m.prix)}</span>` })}</li>`)}
      <li>${c.lien('la-table', { ancre: 'menus-enfant', classe: 'ardoise-ligne', texte: html`<span class="ardoise-nom">${c.t('accueil.table.enfant')}</span><span class="ardoise-points" aria-hidden="true"></span><span class="ardoise-prix" data-prix>${prix('11,80')}</span>` })}</li>
    </ul>
    <p data-anime>${c.lien('la-table', { ancre: 'menus', classe: 'lien-fleche', texte: c.t('accueil.table.lien') })}</p>
  </div>
  <div class="sec-images">
    ${c.media({ nom: 'grok/accueil-table', alt: c.s('alts.accueil-table'), classe: 'img-portrait', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe"' })}
    ${c.media({ nom: 'terrasse', alt: c.s('alts.terrasse'), classe: 'img-vignette', sizes: '(max-width: 760px) 60vw, 22vw', legende: c.t('accueil.table.legende'), attrs: 'data-fx="vitesse"' })}
  </div>
</section>

<section class="saveurs" id="saveurs" data-fx="mots-geants" aria-labelledby="saveurs-titre">
  <h2 class="visuellement-cache" id="saveurs-titre">${c.t('accueil.saveurs.titre')}</h2>
  <div aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${c.t('accueil.saveurs.r1')} ${c.t('accueil.saveurs.r1')}</p>
    <p data-fx-rangee data-sens="-1">${c.t('accueil.saveurs.r2')} ${c.t('accueil.saveurs.r2')}</p>
  </div>
</section>

<section class="sec sec--bleu" id="chambres">
  <div class="conteneur sec-grille sec-grille--inverse">
    ${c.media({ nom: 'grok/accueil-chambre', alt: c.s('alts.accueil-chambre'), classe: 'img-portrait', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('accueil.chambres.surtitre')}</p>
      <h2 data-anime="lignes">${c.tb('accueil.chambres.titre')}</h2>
      <p data-anime>${c.t('accueil.chambres.texte')}</p>
      <dl class="chiffres-cles" data-anime="cascade">
        <div><dt><strong class="grand-chiffre" data-compteur="17">17</strong></dt><dd>${c.t('accueil.chambres.chiffre')}</dd></div>
        <div><dt><strong class="grand-chiffre" data-prix><small class="prefixe">${c.t('accueil.chambres.prefixe')}</small> ${prix(T.chambres[0].basse)}</strong></dt><dd>${c.t('accueil.chambres.nuitDes')}</dd></div>
        <div><dt><strong class="grand-chiffre" data-prix>${prix(T.soireeEtape)}</strong></dt><dd>${c.t('accueil.chambres.etape')}</dd></div>
        <div><dt><strong class="grand-chiffre" data-prix>${prix('8,50')}</strong></dt><dd>${c.t('accueil.chambres.petitdej')}</dd></div>
      </dl>
      <p data-anime>${c.lien('chambres', { ancre: 'tarifs', classe: 'bouton bouton--clair', texte: c.t('accueil.chambres.lien'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
  </div>
</section>

<section class="sec sec--sable" id="maison">
  <div class="conteneur sec-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('accueil.maison.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.maison.titre')}</h2>
      <p data-anime>${c.t('accueil.maison.texte')}</p>
      <ul class="capacites" data-anime="cascade">
        <li><strong data-compteur="45">45</strong> ${c.t('accueil.maison.salle')}</li>
        <li><strong data-compteur="40">40</strong> ${c.t('accueil.maison.terrasse')}</li>
        <li><strong data-compteur="120">120</strong> ${c.t('accueil.maison.reception')}</li>
      </ul>
      <p data-anime>${c.lien('reserver', { ancre: 'acces', classe: 'lien-fleche', texte: c.t('accueil.maison.lien') })}</p>
    </div>
    <div class="polaroids" data-polaroids>
      ${c.media({ nom: 'maison-facade', alt: c.s('alts.maison-facade'), classe: 'polaroid polaroid--1', sizes: '(max-width: 760px) 70vw, 26vw', attrs: 'data-fx="vitesse"' })}
      ${c.media({ nom: 'maison-balcon', alt: c.s('alts.maison-balcon'), classe: 'polaroid polaroid--2', sizes: '(max-width: 760px) 50vw, 18vw', attrs: 'data-fx="vitesse" data-fx-force="4"' })}
      ${c.media({ nom: 'salle', alt: c.s('alts.salle'), classe: 'polaroid polaroid--3', sizes: '(max-width: 760px) 50vw, 18vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
      <p class="polaroids-astuce" aria-hidden="true">${c.t('accueil.maison.astuce')}</p>
    </div>
  </div>
</section>

<section class="pays" id="pays" data-fx="plein-ecran" data-entete-cache>
  <div data-collant>
    ${c.media({ nom: 'grok/accueil-terroir', alt: c.s('alts.accueil-terroir'), cadrage: '50% 55%', sizes: '100vw' })}
    <p class="pays-mots" aria-hidden="true" data-audit-ignorer><span data-fx-ecarte="g">${c.t('accueil.pays.g')}</span><span data-fx-ecarte="d">${c.t('accueil.pays.d')}</span></p>
  </div>
</section>
<section class="sec pays-suite conteneur" id="autour">
  <div class="sec-texte">
    <h2 data-anime="lignes">${c.t('accueil.pays.titre')}</h2>
    <p data-anime>${c.t('accueil.pays.texte')}</p>
    <p class="visites" data-anime>${c.t('accueil.pays.visites')}</p>
    <p data-anime>${c.lien('groupes', { ancre: 'autour', classe: 'lien-fleche', texte: c.t('accueil.pays.lien') })}</p>
  </div>
  <figure class="panneau" data-effet="panneau" data-visuel aria-label="${c.s('accueil.pays.panneau')}">
    <span class="panneau-mat" aria-hidden="true"></span>
    <span class="panneau-chapeau" aria-hidden="true">Mézin</span>
    <ul class="panneau-lames">
      <li class="lame lame--d lame--bleu"><strong><span data-compteur="10">10</span> ${c.t('accueil.pays.km')}</strong> ${c.t('accueil.pays.gers')}</li>
      <li class="lame lame--g lame--rouge"><strong><span data-compteur="10">10</span> ${c.t('accueil.pays.km')}</strong> ${c.t('accueil.pays.landes')}</li>
      <li class="lame lame--g lame--sable"><strong><span data-compteur="120">120</span> ${c.t('accueil.pays.km')}</strong> ${c.t('accueil.pays.ocean')}</li>
      <li class="lame lame--d lame--clair"><strong><span data-compteur="120">120</span> ${c.t('accueil.pays.km')}</strong> ${c.t('accueil.pays.lourdes')}</li>
    </ul>
  </figure>
</section>

<section class="sec sec--salle conteneur" id="salle">
  <div class="salle-chiffre" aria-hidden="true" data-visuel><span data-compteur="120">120</span></div>
  <div class="sec-texte">
    <p class="surtitre" data-anime>${c.t('accueil.groupes.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('accueil.groupes.titre')}</h2>
    <p data-anime>${c.t('accueil.groupes.texte')}</p>
    <p data-anime>${c.lien('groupes', { classe: 'bouton', texte: c.t('accueil.groupes.lien'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
  <div class="salle-photos" data-anime="cascade">
    ${c.media({ nom: 'banquet-salle', alt: c.s('alts.banquet-salle'), classe: 'salle-photo-1', sizes: '(max-width: 760px) 90vw, 34vw' })}
    ${c.media({ nom: 'banquet-verres', alt: c.s('alts.banquet-verres'), classe: 'salle-photo-2', sizes: '(max-width: 760px) 45vw, 16vw' })}
  </div>
</section>

<section class="fin fin--photo" id="fin">
  ${c.media({ nom: 'grok/accueil-terrasse', alt: c.s('alts.accueil-terrasse'), cadrage: '60% 50%', classe: 'fin-fond', sizes: '100vw', attrs: 'data-fx="zoom" data-fx-force="12"' })}
  <div class="fin-carte conteneur">
    <h2 data-anime="lignes">${c.tb('accueil.fin.titre')}</h2>
    <p class="fin-tel" data-anime><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <p data-anime>${c.t('accueil.fin.texte')}</p>
    <p class="fin-actions" data-anime>${c.lien('reserver', { ancre: 'demande', classe: 'bouton', texte: c.t('accueil.fin.demande'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
