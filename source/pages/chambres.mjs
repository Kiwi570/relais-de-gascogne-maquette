/* Les chambres : grand titre puis bandeau photo, équipements et vraies photos, tarifs par saison avec estimateur,
   formules, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { prix, titre, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'chambres', fichier: 'chambres', imagePartage: 'grok/chambres-ouverture-1280.webp' };

const icones = {
  douche: '<path d="M8 40 V 14 C 8 9, 12 6, 17 6 H 30 C 35 6, 38 10, 38 14"/><path d="M30 16 H 46 L 42 22 H 34 Z"/><path d="M36 28 v4 M40 30 v5 M44 28 v4 M38 36 v4 M42 37 v4"/>',
  wc: '<path d="M14 8 H 26 V 26 H 14 Z"/><path d="M10 26 H 40 C 40 34, 34 38, 26 38 H 20 L 22 44 H 14 L 16 36 C 12 34, 10 30, 10 26 Z"/>',
  lavabo: '<path d="M8 22 H 42 C 42 32, 34 38, 25 38 C 16 38, 8 32, 8 22 Z"/><path d="M25 22 V 10 C 25 7, 30 7, 30 10 V 12"/><path d="M25 38 V 46"/>',
  tv: '<rect x="6" y="10" width="38" height="26" rx="3"/><path d="M18 44 H 32 M25 36 V 44"/>',
  wifi: '<path d="M6 20 C 16 10, 34 10, 44 20"/><path d="M12 27 C 19 20, 31 20, 38 27"/><path d="M18 34 C 22 30, 28 30, 32 34"/><circle cx="25" cy="40" r="2.5"/>',
};

export default (c) => {
  const T = c.donnees.tarifs;
  return html`
<section class="ouv ouv--bandeau" id="debut">
  <div class="conteneur ouv-texte ouv-texte--bandeau">
    <div>
      <p class="surtitre ouv-anim">${c.t('ouvertures.chambres.surtitre')}</p>
      ${titre(c, 'ouvertures.chambres')}
    </div>
    <div class="ouv-cote">
      <p class="ouv-intro ouv-anim masque-ecran-bas">${c.t('ouvertures.chambres.texte')}</p>
      <p class="ouv-info ouv-anim" data-info-cle>${c.t('ouvertures.chambres.info')}</p>
      <p class="ouv-actions ouv-anim">${c.lien('reserver', { ancre: 'demande', params: 'objet=chambre', classe: 'bouton', texte: c.t('ouvertures.chambres.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/chambres-ouverture', alt: c.s('alts.chambres-ouverture'), cadrage: '50% 60%', priorite: true, classe: 'ouv-bande ph-chambres-ouverture', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="sec conteneur" id="equipements">
  <div class="equip-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('chambres.equipements.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('chambres.equipements.titre')}</h2>
      <blockquote class="citation" data-anime="mots">${c.t('chambres.equipements.citation')}</blockquote>
      <p class="note-douce" data-anime>${c.t('chambres.equipements.pmr')}</p>
    </div>
    <ul class="equipements" data-anime="cascade">
      ${['douche', 'wc', 'lavabo', 'tv', 'wifi'].map((k) => html`<li><svg viewBox="0 0 50 50" aria-hidden="true">${brut(icones[k])}</svg><span>${c.t('chambres.equipements.' + k)}</span></li>`)}
    </ul>
  </div>
  <div class="vignettes" role="list" aria-label="${c.s('chambres.equipements.photos')}" data-anime="cascade">
    ${[1, 2, 3, 4].map((i) => html`<div role="listitem">${c.media({ nom: 'chambre-' + i, alt: c.s('alts.chambre-' + i), classe: 'vignette', sizes: '(max-width: 760px) 45vw, 22vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}</div>`)}
  </div>
</section>

<section class="sec sec--sable" id="tarifs">
  <div class="conteneur tarifs-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('chambres.tarifs.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('chambres.tarifs.titre')}</h2>
      <div class="saison" role="group" aria-label="${c.s('chambres.tarifs.choix')}" data-anime>
        <button type="button" class="saison-btn" aria-pressed="true" data-saison="basse">${c.t('chambres.tarifs.basse')}</button>
        <button type="button" class="saison-btn" aria-pressed="false" data-saison="haute">${c.t('chambres.tarifs.haute')}</button>
      </div>
      <table class="tarifs" data-anime="cascade">
        <caption class="visuellement-cache">${c.t('chambres.tarifs.aPartir')}</caption>
        <thead><tr><th scope="col">${c.t('chambres.tarifs.chambre')}</th><th scope="col">${c.t('chambres.tarifs.prix')}</th></tr></thead>
        <tbody>
          ${T.chambres.map((ch) => html`<tr><th scope="row">${ch.nom}</th><td><span class="tarif" data-prix data-basse="${ch.basse}" data-haute="${ch.haute}">${prix(c, ch.basse)}</span></td></tr>`)}
          ${T.formules.map((f) => html`<tr><th scope="row">${f.nom} <small>${f.unite}</small></th><td><span class="tarif" data-prix data-basse="${f.basse}" data-haute="${f.haute}">${prix(c, f.basse)}</span></td></tr>`)}
        </tbody>
      </table>
      <p class="note-douce" data-anime>${c.t('chambres.tarifs.aPartir')}</p>
    </div>
    <form class="estimateur" data-effet="estimateur" data-anime aria-labelledby="estim-titre" onsubmit="return false">
      <h3 id="estim-titre">${c.t('chambres.tarifs.estimTitre')}</h3>
      <div class="champ"><label for="e-chambre">${c.t('chambres.tarifs.estimChambre')}</label>
        <select id="e-chambre" name="chambre">${T.chambres.map((ch) => html`<option value="${ch.id}" data-basse="${ch.basse}" data-haute="${ch.haute}" data-personnes="${ch.personnes}"${ch.id === 'double' ? html` selected` : ''}>${ch.nom}</option>`)}</select></div>
      <div class="champ"><span class="champ-libelle" id="e-nuits-l">${c.t('chambres.tarifs.estimNuits')}</span>
        <div class="pas" role="group" aria-labelledby="e-nuits-l">
          <button type="button" data-pas="-1" aria-label="${c.s('chambres.tarifs.moins')}">−</button>
          <output id="e-nuits" aria-live="polite">2</output>
          <button type="button" data-pas="1" aria-label="${c.s('chambres.tarifs.plus')}">+</button>
        </div></div>
      <label class="case"><input type="checkbox" id="e-petitdej" checked> <span>${c.t('chambres.tarifs.estimPetitdej')}</span></label>
      <p class="estim-total"><span>${c.t('chambres.tarifs.estimTotal')}</span> <strong id="e-total" data-prix aria-live="polite">${prix(c, 160)}</strong></p>
      <p class="note-douce">${c.t('chambres.tarifs.estimNote')}</p>
      <p>${c.lien('reserver', { ancre: 'demande', params: 'objet=chambre', classe: 'bouton', texte: c.t('chambres.tarifs.estimAction'), attrs: 'data-estim-lien' })}</p>
    </form>
  </div>
</section>

<section class="sec conteneur" id="formules">
  <div class="sec-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('chambres.formules.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('chambres.formules.titre')}</h2>
      <ul class="formules" data-anime="cascade">
        <li><strong data-prix>${prix(c, T.soireeEtape)}</strong><span><b>${c.t('chambres.formules.etapeNom')}</b> ${c.t('chambres.formules.etapeTexte')}</span></li>
        <li><strong data-prix>${prix(c, T.formules[0].basse)} / ${prix(c, T.formules[0].haute)}</strong><span><b>${c.t('chambres.formules.demiNom')}</b> ${c.t('chambres.formules.basseHaute')}. ${c.t('chambres.formules.pensionTexte')}</span></li>
        <li><strong data-prix>${prix(c, T.formules[1].basse)} / ${prix(c, T.formules[1].haute)}</strong><span><b>${c.t('chambres.formules.pensionNom')}</b> ${c.t('chambres.formules.basseHaute')}. ${c.t('chambres.formules.pensionTexte')}</span></li>
        <li><strong data-prix>${prix(c, '8,50')}</strong><span><b>${c.t('chambres.formules.petitdejNom')}</b> ${c.t('chambres.formules.petitdejTexte')}</span></li>
      </ul>
    </div>
    ${c.media({ nom: 'grok/chambres-petitdej', alt: c.s('alts.chambres-petitdej'), classe: 'img-portrait', sizes: '(max-width: 760px) 100vw, 38vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

${appel(c, 'chambres.fin', { params: 'objet=chambre' })}
`;
};
