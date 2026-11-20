/* La table : ouverture scindée (titre et fourchette de prix à gauche, image à droite), les menus, les spécialités
   (fond bleu), la salle et la terrasse (vraies photos), l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { prix, titre, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'la-table', fichier: 'la-table', imagePartage: 'grok/table-ouverture-1168.webp' };

export default (c) => {
  const menus = c.donnees.menus;
  return html`
<section class="ouv ouv--scinde conteneur" id="debut">
  <div class="ouv-texte">
    <p class="surtitre ouv-anim">${c.t('ouvertures.table.surtitre')}</p>
    ${titre(c, 'ouvertures.table')}
    <p class="ouv-intro ouv-anim masque-ecran-tres-bas">${c.t('ouvertures.table.texte')}</p>
    <p class="ouv-prix ouv-anim" data-info-cle><span>${c.t('ouvertures.table.prixDe')}</span> <strong data-prix>${prix(c, '16,50')}</strong> <span>${c.t('ouvertures.table.prixA')}</span> <strong data-prix>${prix(c, 33)}</strong></p>
    <p class="ouv-actions ouv-anim">
      ${c.lien('reserver', { ancre: 'demande', params: 'objet=table', classe: 'bouton', texte: c.t('ouvertures.table.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')}</a>
    </p>
  </div>
  ${c.media({ nom: 'grok/table-ouverture', alt: c.s('alts.table-ouverture'), priorite: true, classe: 'ouv-image ph-table-ouverture', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-fx="parallaxe" data-iris-centre' })}
</section>

<section class="sec conteneur" id="menus">
  <div class="menus-tete">
    <div>
      <p class="surtitre" data-anime>${c.t('table.menus.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('table.menus.titre')}</h2>
      <p data-anime>${c.t('table.menus.potage')}</p>
    </div>
    <svg class="soupiere" viewBox="0 0 220 150" aria-hidden="true" data-fx="trace" data-visuel>
      <path data-fx-trait d="M78 40 C 72 26, 88 22, 82 8 M110 36 C 104 22, 120 18, 114 4 M142 40 C 136 26, 152 22, 146 8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      <path data-fx-trait d="M30 70 C 30 120, 70 138, 110 138 C 150 138, 190 120, 190 70 Z M24 70 H 196 M70 62 C 70 50, 150 50, 150 62 M102 50 C 102 42, 118 42, 118 50 M30 82 C 12 82, 10 100, 26 102 M190 82 C 208 82, 210 100, 194 102 M80 138 L 76 146 H 144 L 140 138" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
  <div class="menus" data-anime="cascade">
    ${menus.map((m) => html`<article class="menu-carte" id="menu-${m.id}">
      <p class="menu-prix" data-prix>${prix(c, m.prix)}</p>
      <h3>${m.nom}</h3>
      <ol class="menu-plats" data-effet="menu-trace">${m.plats.map((p) => html`<li>${p}</li>`)}</ol>
      <p class="menu-note">${m.note}</p>
    </article>`)}
  </div>
  <ul class="menus-enfant" data-anime="cascade">
    <li><strong data-prix>${prix(c, '11,80')}</strong> ${c.t('table.menus.enfantNom')} · ${c.t('table.menus.enfantTexte')}</li>
    <li><strong data-prix>${prix(c, '4,50')}</strong> ${c.t('table.menus.couvertNom')}</li>
  </ul>
</section>

<section class="sec sec--bleu" id="specialites">
  <div class="conteneur sec-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('table.specialites.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('table.specialites.titre')}</h2>
      <ul class="specialites">
        <li data-anime="lignes">${c.t('table.specialites.s1')}</li>
        <li data-anime="lignes">${c.t('table.specialites.s2')}</li>
        <li data-anime="lignes">${c.t('table.specialites.s3')}</li>
        <li data-anime="lignes">${c.t('table.specialites.s4')}</li>
      </ul>
      <p data-anime>${c.t('table.specialites.note')}</p>
    </div>
    ${c.media({ nom: 'grok/table-potage', alt: c.s('alts.table-potage'), classe: 'img-portrait', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

<section class="sec conteneur sec--salle-table" id="salle">
  <div class="sec-texte">
    <p class="surtitre" data-anime>${c.t('table.salle.surtitre')}</p>
    <h2 data-anime="lignes">${c.t('table.salle.titre')}</h2>
    <ul class="capacites" data-anime="cascade">
      <li><strong data-compteur="45">45</strong> ${c.t('table.salle.salle')}</li>
      <li><strong data-compteur="40">40</strong> ${c.t('table.salle.terrasse')}</li>
    </ul>
    <ul class="pratique" data-anime="cascade">
      <li>${c.t('table.salle.allergenes')}</li>
      <li>${c.t('table.salle.chiens')}</li>
      <li>${c.t('table.salle.horaires')}</li>
    </ul>
  </div>
  <div class="duo">
    ${c.media({ nom: 'terrasse', alt: c.s('alts.terrasse'), classe: 'duo-1', sizes: '(max-width: 760px) 80vw, 30vw', legende: c.t('table.salle.legendeTerrasse'), attrs: 'data-fx="vitesse"' })}
    ${c.media({ nom: 'salle', alt: c.s('alts.salle'), classe: 'duo-2', sizes: '(max-width: 760px) 60vw, 20vw', legende: c.t('table.salle.legendeSalle'), attrs: 'data-fx="vitesse" data-fx-force="2"' })}
  </div>
</section>

${appel(c, 'table.fin', { params: 'objet=table' })}
`;
};
