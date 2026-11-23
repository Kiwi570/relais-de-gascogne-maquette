/* Groupes & réceptions : « 120 » en très grand et longue table, la salle (vraies photos), la journée en autocar
   (frise qui se dessine), autour du Relais, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { prix, titre, appel } from '../gabarits/blocs.mjs';

export const page = { cle: 'groupes', fichier: 'groupes', imagePartage: 'grok/groupes-ouverture-1280.webp' };

export default (c) => {
  const J = c.donnees.journee;
  return html`
<section class="ouv ouv--chiffre" id="debut">
  <div class="conteneur ouv-chiffre-grille">
    <p class="ouv-nombre ouv-anim" data-info-cle><strong>120</strong><span>${c.t('ouvertures.groupes.places')}</span></p>
    <div class="ouv-texte">
      <p class="surtitre ouv-anim">${c.t('ouvertures.groupes.surtitre')}</p>
      ${titre(c, 'ouvertures.groupes')}
      <p class="ouv-intro ouv-anim masque-ecran-bas">${c.t('ouvertures.groupes.texte')}</p>
      <p class="ouv-actions ouv-anim">${c.lien('reserver', { ancre: 'demande', params: 'objet=groupe', classe: 'bouton', texte: c.t('ouvertures.groupes.action'), attrs: 'data-action-principale data-survol="magnetique"' })}</p>
    </div>
  </div>
  ${c.media({ nom: 'grok/groupes-ouverture', alt: c.s('alts.groupes-ouverture'), cadrage: '55% 60%', priorite: true, classe: 'ouv-bande ouv-bande--basse ph-groupes-ouverture', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-iris-centre' })}
</section>

<section class="sec conteneur" id="salle">
  <div class="sec-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('groupes.salle.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('groupes.salle.titre')}</h2>
      <p data-anime>${c.t('groupes.salle.texte')}</p>
      <ul class="pastilles" data-anime="cascade">${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => html`<li>${c.t('groupes.salle.e' + i)}</li>`)}</ul>
      <figure class="plan-salle" data-effet="plan-salle" data-visuel>
        <svg viewBox="0 0 580 300" aria-hidden="true"><rect class="plan-table" x="40" y="62" width="140" height="16" rx="4"/><rect class="plan-table" x="220" y="62" width="140" height="16" rx="4"/><rect class="plan-table" x="400" y="62" width="140" height="16" rx="4"/><rect class="plan-table" x="40" y="192" width="140" height="16" rx="4"/><rect class="plan-table" x="220" y="192" width="140" height="16" rx="4"/><rect class="plan-table" x="400" y="192" width="140" height="16" rx="4"/><g class="plan-places"><circle class="plan-place" cx="47" cy="52" r="5"/><circle class="plan-place" cx="47" cy="88" r="5"/><circle class="plan-place" cx="61" cy="52" r="5"/><circle class="plan-place" cx="61" cy="88" r="5"/><circle class="plan-place" cx="75" cy="52" r="5"/><circle class="plan-place" cx="75" cy="88" r="5"/><circle class="plan-place" cx="89" cy="52" r="5"/><circle class="plan-place" cx="89" cy="88" r="5"/><circle class="plan-place" cx="103" cy="52" r="5"/><circle class="plan-place" cx="103" cy="88" r="5"/><circle class="plan-place" cx="117" cy="52" r="5"/><circle class="plan-place" cx="117" cy="88" r="5"/><circle class="plan-place" cx="131" cy="52" r="5"/><circle class="plan-place" cx="131" cy="88" r="5"/><circle class="plan-place" cx="145" cy="52" r="5"/><circle class="plan-place" cx="145" cy="88" r="5"/><circle class="plan-place" cx="159" cy="52" r="5"/><circle class="plan-place" cx="159" cy="88" r="5"/><circle class="plan-place" cx="173" cy="52" r="5"/><circle class="plan-place" cx="173" cy="88" r="5"/><circle class="plan-place" cx="227" cy="52" r="5"/><circle class="plan-place" cx="227" cy="88" r="5"/><circle class="plan-place" cx="241" cy="52" r="5"/><circle class="plan-place" cx="241" cy="88" r="5"/><circle class="plan-place" cx="255" cy="52" r="5"/><circle class="plan-place" cx="255" cy="88" r="5"/><circle class="plan-place" cx="269" cy="52" r="5"/><circle class="plan-place" cx="269" cy="88" r="5"/><circle class="plan-place" cx="283" cy="52" r="5"/><circle class="plan-place" cx="283" cy="88" r="5"/><circle class="plan-place" cx="297" cy="52" r="5"/><circle class="plan-place" cx="297" cy="88" r="5"/><circle class="plan-place" cx="311" cy="52" r="5"/><circle class="plan-place" cx="311" cy="88" r="5"/><circle class="plan-place" cx="325" cy="52" r="5"/><circle class="plan-place" cx="325" cy="88" r="5"/><circle class="plan-place" cx="339" cy="52" r="5"/><circle class="plan-place" cx="339" cy="88" r="5"/><circle class="plan-place" cx="353" cy="52" r="5"/><circle class="plan-place" cx="353" cy="88" r="5"/><circle class="plan-place" cx="407" cy="52" r="5"/><circle class="plan-place" cx="407" cy="88" r="5"/><circle class="plan-place" cx="421" cy="52" r="5"/><circle class="plan-place" cx="421" cy="88" r="5"/><circle class="plan-place" cx="435" cy="52" r="5"/><circle class="plan-place" cx="435" cy="88" r="5"/><circle class="plan-place" cx="449" cy="52" r="5"/><circle class="plan-place" cx="449" cy="88" r="5"/><circle class="plan-place" cx="463" cy="52" r="5"/><circle class="plan-place" cx="463" cy="88" r="5"/><circle class="plan-place" cx="477" cy="52" r="5"/><circle class="plan-place" cx="477" cy="88" r="5"/><circle class="plan-place" cx="491" cy="52" r="5"/><circle class="plan-place" cx="491" cy="88" r="5"/><circle class="plan-place" cx="505" cy="52" r="5"/><circle class="plan-place" cx="505" cy="88" r="5"/><circle class="plan-place" cx="519" cy="52" r="5"/><circle class="plan-place" cx="519" cy="88" r="5"/><circle class="plan-place" cx="533" cy="52" r="5"/><circle class="plan-place" cx="533" cy="88" r="5"/><circle class="plan-place" cx="47" cy="182" r="5"/><circle class="plan-place" cx="47" cy="218" r="5"/><circle class="plan-place" cx="61" cy="182" r="5"/><circle class="plan-place" cx="61" cy="218" r="5"/><circle class="plan-place" cx="75" cy="182" r="5"/><circle class="plan-place" cx="75" cy="218" r="5"/><circle class="plan-place" cx="89" cy="182" r="5"/><circle class="plan-place" cx="89" cy="218" r="5"/><circle class="plan-place" cx="103" cy="182" r="5"/><circle class="plan-place" cx="103" cy="218" r="5"/><circle class="plan-place" cx="117" cy="182" r="5"/><circle class="plan-place" cx="117" cy="218" r="5"/><circle class="plan-place" cx="131" cy="182" r="5"/><circle class="plan-place" cx="131" cy="218" r="5"/><circle class="plan-place" cx="145" cy="182" r="5"/><circle class="plan-place" cx="145" cy="218" r="5"/><circle class="plan-place" cx="159" cy="182" r="5"/><circle class="plan-place" cx="159" cy="218" r="5"/><circle class="plan-place" cx="173" cy="182" r="5"/><circle class="plan-place" cx="173" cy="218" r="5"/><circle class="plan-place" cx="227" cy="182" r="5"/><circle class="plan-place" cx="227" cy="218" r="5"/><circle class="plan-place" cx="241" cy="182" r="5"/><circle class="plan-place" cx="241" cy="218" r="5"/><circle class="plan-place" cx="255" cy="182" r="5"/><circle class="plan-place" cx="255" cy="218" r="5"/><circle class="plan-place" cx="269" cy="182" r="5"/><circle class="plan-place" cx="269" cy="218" r="5"/><circle class="plan-place" cx="283" cy="182" r="5"/><circle class="plan-place" cx="283" cy="218" r="5"/><circle class="plan-place" cx="297" cy="182" r="5"/><circle class="plan-place" cx="297" cy="218" r="5"/><circle class="plan-place" cx="311" cy="182" r="5"/><circle class="plan-place" cx="311" cy="218" r="5"/><circle class="plan-place" cx="325" cy="182" r="5"/><circle class="plan-place" cx="325" cy="218" r="5"/><circle class="plan-place" cx="339" cy="182" r="5"/><circle class="plan-place" cx="339" cy="218" r="5"/><circle class="plan-place" cx="353" cy="182" r="5"/><circle class="plan-place" cx="353" cy="218" r="5"/><circle class="plan-place" cx="407" cy="182" r="5"/><circle class="plan-place" cx="407" cy="218" r="5"/><circle class="plan-place" cx="421" cy="182" r="5"/><circle class="plan-place" cx="421" cy="218" r="5"/><circle class="plan-place" cx="435" cy="182" r="5"/><circle class="plan-place" cx="435" cy="218" r="5"/><circle class="plan-place" cx="449" cy="182" r="5"/><circle class="plan-place" cx="449" cy="218" r="5"/><circle class="plan-place" cx="463" cy="182" r="5"/><circle class="plan-place" cx="463" cy="218" r="5"/><circle class="plan-place" cx="477" cy="182" r="5"/><circle class="plan-place" cx="477" cy="218" r="5"/><circle class="plan-place" cx="491" cy="182" r="5"/><circle class="plan-place" cx="491" cy="218" r="5"/><circle class="plan-place" cx="505" cy="182" r="5"/><circle class="plan-place" cx="505" cy="218" r="5"/><circle class="plan-place" cx="519" cy="182" r="5"/><circle class="plan-place" cx="519" cy="218" r="5"/><circle class="plan-place" cx="533" cy="182" r="5"/><circle class="plan-place" cx="533" cy="218" r="5"/></g></svg>
        <figcaption><strong data-plan-compte>120</strong> ${c.t('groupes.salle.couverts')} · ${c.t('groupes.salle.planTitre')}</figcaption>
      </figure>
    </div>
    <div class="trio">
      ${c.media({ nom: 'banquet-salle', alt: c.s('alts.banquet-salle'), classe: 'trio-1', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="vitesse" data-fx-force="2"' })}
      ${c.media({ nom: 'banquet-tables', alt: c.s('alts.banquet-tables'), classe: 'trio-2', sizes: '(max-width: 760px) 45vw, 15vw', attrs: 'data-fx="vitesse" data-fx-force="3"' })}
      ${c.media({ nom: 'banquet-verres', alt: c.s('alts.banquet-verres'), classe: 'trio-3', sizes: '(max-width: 760px) 45vw, 15vw', attrs: 'data-fx="vitesse" data-fx-force="4"' })}
    </div>
  </div>
</section>

<section class="sec sec--bleu" id="journee">
  <div class="conteneur">
    <div class="journee-tete">
      <p class="surtitre" data-anime>${c.t('groupes.journee.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('groupes.journee.titre')}</h2>
      <p data-anime>${c.t('groupes.journee.texte')}</p>
    </div>
    <ol class="frise" data-effet="journee" data-visuel>
      <li class="frise-etape">
        <span class="frise-point" aria-hidden="true"></span>
        <h3>${c.t('groupes.journee.matin')}</h3>
        <ul>${J.matin.map((x) => html`<li>${x}</li>`)}</ul>
      </li>
      <li class="frise-etape">
        <span class="frise-point" aria-hidden="true"></span>
        <h3>${c.t('groupes.journee.midi')}</h3>
        <div class="frise-menus">
          ${J.menus.map((m) => html`<div class="frise-menu"><p class="menu-prix" data-prix>${prix(c, m.prix)}</p><ul>${m.plats.map((p) => html`<li>${p}</li>`)}</ul></div>`)}
        </div>
        <p class="note-douce">${c.t('groupes.journee.fromage')}</p>
      </li>
      <li class="frise-etape">
        <span class="frise-point" aria-hidden="true"></span>
        <h3>${c.t('groupes.journee.apresMidi')}</h3>
        <ul class="frise-choix">${J.apresMidi.map((x) => html`<li>${x}</li>`)}</ul>
      </li>
    </ol>
  </div>
</section>

<section class="sec conteneur" id="autour">
  <div class="autour-grille">
    ${c.media({ nom: 'grok/groupes-route', alt: c.s('alts.groupes-route'), classe: 'autour-image', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe"' })}
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('groupes.autour.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('groupes.autour.titre')}</h2>
      <p data-anime>${c.t('groupes.autour.texte')}</p>
      <ul class="liste-points" data-anime="cascade">${[1, 2, 3, 4, 5, 6, 7].map((i) => html`<li>${c.t('groupes.autour.a' + i)}</li>`)}</ul>
    </div>
  </div>
  <div class="autour-bas">
    <div class="automne" data-anime>
      <h3>${c.t('groupes.autour.automneTitre')}</h3>
      <p>${c.t('groupes.autour.automne')}</p>
    </div>
    <div class="cartes-photo" data-anime="cascade">
      ${c.media({ nom: 'petit-train', alt: c.s('alts.petit-train'), classe: 'carte-photo', sizes: '(max-width: 760px) 45vw, 16vw', legende: c.t('groupes.autour.legendeTrain') })}
      ${c.media({ nom: 'alambic', alt: c.s('alts.alambic'), classe: 'carte-photo', sizes: '(max-width: 760px) 45vw, 16vw', legende: c.t('groupes.autour.legendeAlambic') })}
      ${c.media({ nom: 'nerac', alt: c.s('alts.nerac'), classe: 'carte-photo', sizes: '(max-width: 760px) 45vw, 16vw', legende: c.t('groupes.autour.legendeNerac') })}
      ${c.media({ nom: 'liege', alt: c.s('alts.liege'), classe: 'carte-photo', sizes: '(max-width: 760px) 45vw, 16vw', legende: c.t('groupes.autour.legendeLiege') })}
    </div>
  </div>
</section>

${appel(c, 'groupes.fin', { params: 'objet=groupe' })}
`;
};
