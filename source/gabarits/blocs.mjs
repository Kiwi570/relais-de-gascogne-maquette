/* Blocs communs aux pages du Relais : prix au format de la langue, appel final, titre d'ouverture en deux lignes. */
import { html } from '../../outils/gabarit.mjs';

export const prix = (c, n) => (c.l === 'fr' ? String(n).replace('.', ',') + ' €' : '€' + String(n).replace(',', '.'));

/* Titre d'ouverture : data-anime="gsap" sur le h1 seul, lignes animées par leur classe (jamais data-anime sur une ligne). */
export const titre = (c, base) => html`<h1 class="ouv-titre" data-anime="gsap"><span class="l"><span class="li">${c.tb(base + '.l1')}</span></span> <span class="l"><span class="li">${c.tb(base + '.l2')}</span></span></h1>`;

/* Appel final des pages intérieures : bande bleue, numéro en grand souligné d'un trait qui se trace. */
export function appel(c, base, { ancre = 'demande', params = '' } = {}) {
  return html`<section class="appel" id="fin">
  <div class="conteneur appel-grille">
    <div>
      <h2 data-anime="lignes">${c.t(base + '.titre')}</h2>
      <p data-anime>${c.t(base + '.texte')}</p>
      <p class="appel-actions" data-anime>${c.lien('reserver', { ancre, params, classe: 'bouton bouton--clair', texte: c.t(base + '.demande'), attrs: 'data-survol="magnetique"' })}</p>
    </div>
    <div class="appel-tel" data-visuel>
      <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <svg class="appel-trait" viewBox="0 0 400 24" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M4 16 C 90 4, 180 22, 260 10 S 360 6, 396 14" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>
      <p>${c.site.contact.adresse}</p>
    </div>
  </div>
</section>`;
}
