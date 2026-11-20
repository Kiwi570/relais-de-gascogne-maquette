/* Page 404 : volets clos. Une seule version (langue par défaut). */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv ouv--plein ouv--404" id="debut">
  ${c.media({ nom: 'grok/404', alt: c.s('alts.404'), cadrage: '70% 50%', priorite: true, classe: 'ouv-fond ph-404', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  <div class="ouv-texte conteneur">
    <p class="surtitre ouv-anim">${c.t('introuvable.surtitre')}</p>
    <h1 class="ouv-titre" data-anime="gsap"><span class="l"><span class="li">${c.t('introuvable.titre')}</span></span></h1>
    <p class="ouv-intro ouv-anim">${c.t('introuvable.texte')}</p>
    <p class="ouv-actions ouv-anim">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    <p class="ouv-info ouv-anim" data-info-cle><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
  </div>
</section>
`;
