/* Réserver & venir : ouverture (numéro en grand, image à droite), demande en trois étapes avec récapitulatif,
   schéma d'accès qui se trace (RD 656, Gers, Landes, océan, Lourdes). */
import { html } from '../../outils/gabarit.mjs';
import { titre } from '../gabarits/blocs.mjs';

export const page = { cle: 'reserver', fichier: 'reserver', imagePartage: 'grok/reserver-ouverture-1168.webp' };

export default (c) => {
  const T = c.donnees.tarifs;
  const d = (k) => c.t('reserver.demande.' + k);
  return html`
<section class="ouv ouv--scinde ouv--reserver conteneur" id="debut">
  <div class="ouv-texte">
    <p class="surtitre ouv-anim">${c.t('ouvertures.reserver.surtitre')}</p>
    ${titre(c, 'ouvertures.reserver')}
    <p class="ouv-intro ouv-anim masque-ecran-tres-bas">${c.t('ouvertures.reserver.texte')}</p>
    <p class="ouv-tel ouv-anim" data-info-cle><span>${c.t('ouvertures.reserver.telLibelle')}</span> <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
    <p class="ouv-actions ouv-anim"><a class="bouton" href="#demande" data-action-principale data-survol="magnetique">${c.t('ouvertures.reserver.action')}</a> <span class="ouv-email">${c.site.contact.email}</span></p>
  </div>
  ${c.media({ nom: 'grok/reserver-ouverture', alt: c.s('alts.reserver-ouverture'), priorite: true, classe: 'ouv-image ph-reserver-ouverture', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-fx="parallaxe" data-iris-centre' })}
</section>

<section class="sec sec--sable" id="demande">
  <div class="conteneur">
    <div class="demande-tete">
      <p class="surtitre" data-anime>${d('surtitre')}</p>
      <h2 data-anime="lignes">${d('titre')}</h2>
      <p class="note-douce" data-anime>${d('deroule')}</p>
    </div>
    <div class="demande-grille">
      <form class="demande" data-formulaire action="#" novalidate data-anime>
        <p class="etapes-progres" aria-live="polite"><span data-etape-texte>${d('etape')} 1 ${d('sur')} 3</span><span class="etapes-barre" aria-hidden="true"><i></i></span></p>
        <div class="etapes">
          <fieldset class="etape" data-etape="1">
            <legend>${d('objetTitre')}</legend>
            <div class="choix-objet">
              ${['table', 'chambre', 'groupe'].map((o) => html`<label class="choix"><input type="radio" name="objet" value="${o}"${o === 'table' ? html` checked` : ''}><span class="choix-carte"><b>${d(o)}</b><small>${d(o + 'Texte')}</small></span></label>`)}
            </div>
          </fieldset>
          <fieldset class="etape" data-etape="2">
            <legend>${d('detailsTitre')}</legend>
            <div class="branche" data-pour="table">
              <div class="champ"><label for="f-date-table">${d('date')}</label><input id="f-date-table" name="date_table" type="date"></div>
              <div class="champ"><span class="champ-libelle" id="f-service-l">${d('service')}</span>
                <div class="radios" role="radiogroup" aria-labelledby="f-service-l">
                  <label class="radio"><input type="radio" name="service" value="midi" checked> ${d('midi')}</label>
                  <label class="radio"><input type="radio" name="service" value="soir"> ${d('soir')}</label>
                </div></div>
              <div class="champ"><label for="f-pers-table">${d('personnes')}</label><input id="f-pers-table" name="personnes_table" type="number" min="1" max="45" value="2" inputmode="numeric"></div>
            </div>
            <div class="branche" data-pour="chambre">
              <div class="champ"><label for="f-arrivee">${d('arrivee')}</label><input id="f-arrivee" name="arrivee" type="date"></div>
              <div class="champ"><label for="f-nuits">${d('nuits')}</label><input id="f-nuits" name="nuits" type="number" min="1" max="30" value="1" inputmode="numeric"></div>
              <div class="champ"><label for="f-type">${d('typeChambre')}</label><select id="f-type" name="type_chambre">${T.chambres.map((ch) => html`<option value="${ch.id}"${ch.id === 'double' ? html` selected` : ''}>${ch.nom}</option>`)}</select></div>
              <div class="champ"><label for="f-formule">${d('formule')}</label><select id="f-formule" name="formule"><option value="chambre">${d('formuleChambre')}</option>${T.formules.map((f) => html`<option value="${f.id}">${f.nom}</option>`)}</select></div>
              <label class="case"><input type="checkbox" name="petitdej" value="oui"> <span>${d('petitdej')}</span></label>
            </div>
            <div class="branche" data-pour="groupe">
              <div class="champ"><label for="f-evenement">${d('evenement')}</label><select id="f-evenement" name="evenement">${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => html`<option value="e${i}">${c.t('groupes.salle.e' + i)}</option>`)}<option value="autocar">${c.t('groupes.journee.surtitre')}</option></select></div>
              <div class="champ"><label for="f-date-groupe">${d('date')}</label><input id="f-date-groupe" name="date_groupe" type="date"></div>
              <div class="champ"><label for="f-pers-groupe">${d('personnes')}</label><input id="f-pers-groupe" name="personnes_groupe" type="number" min="1" max="120" value="30" inputmode="numeric"></div>
            </div>
          </fieldset>
          <fieldset class="etape" data-etape="3">
            <legend>${d('coordTitre')}</legend>
            <div class="champ"><label for="f-nom">${d('nom')}</label><input id="f-nom" name="nom" autocomplete="name" required></div>
            <div class="champ"><label for="f-tel">${d('tel')}</label><input id="f-tel" name="tel" type="tel" autocomplete="tel" required></div>
            <div class="champ"><label for="f-email">${d('email')}</label><input id="f-email" name="email" type="email" autocomplete="email"></div>
            <div class="champ"><label for="f-message">${d('message')}</label><textarea id="f-message" name="message" rows="3"></textarea></div>
            <p class="mention-donnees">${c.tb('reserver.demande.donnees')}</p>
          </fieldset>
        </div>
        <p class="etapes-nav">
          <button type="button" class="bouton bouton--contour" data-etape-prec hidden>${d('precedent')}</button>
          <button type="button" class="bouton" data-etape-suiv hidden>${d('suivant')}</button>
          <button type="submit" class="bouton" data-etape-envoi>${d('envoyer')}</button>
        </p>
        <p data-message-envoi data-texte="${c.s('reserver.demande.envoye')}" role="status" tabindex="-1" hidden></p>
      </form>
      <aside class="recap" aria-labelledby="recap-titre" data-anime>
        <h3 id="recap-titre">${d('recapTitre')}</h3>
        <dl data-recap><div><dt>${d('objetTitre')}</dt><dd>${d('table')}</dd></div></dl>
        <p class="tampon" aria-hidden="true" data-grille="retour"><span>${d('tampon')}</span></p>
        <p class="recap-tel"><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p>
      </aside>
    </div>
  </div>
</section>

<section class="sec conteneur" id="acces">
  <div class="acces-grille">
    <div class="sec-texte">
      <p class="surtitre" data-anime>${c.t('reserver.acces.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('reserver.acces.titre')}</h2>
      <p data-anime>${c.t('reserver.acces.texte')}</p>
      <address data-anime><strong>${c.site.nom}</strong><br>${c.site.contact.adresse}<br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><span class="pied-email">${c.site.contact.email}</span></address>
      <ul class="pratique" data-anime="cascade">
        <li>${c.t('reserver.acces.parking')}</li>
        <li>${c.t('reserver.acces.horaires')}</li>
      </ul>
      <p data-anime><a class="lien-fleche" href="https://www.facebook.com/lerelaisdegascogne47170" target="_blank" rel="noopener">${c.t('commun.facebook')}</a></p>
    </div>
    <figure class="carte-acces" data-effet="carte" data-visuel>
      <svg viewBox="0 0 600 440" role="img" aria-labelledby="carte-titre">
        <title id="carte-titre">${c.t('reserver.acces.carteTitre')}</title>
        <rect x="0" y="0" width="600" height="440" rx="18" class="carte-fond"/>
        <path class="carte-zone" d="M0 0 H 150 C 170 120, 130 260, 175 440 H 0 Z"/>
        <path class="carte-zone carte-zone--est" d="M600 300 C 470 300, 420 360, 390 440 H 600 Z"/>
        <path class="carte-route carte-route--rd" data-carte-trait d="M300 250 C 318 205, 300 170, 330 135 S 380 80, 410 40"/>
        <path class="carte-route carte-fleche" data-carte-trait d="M300 250 C 250 262, 205 268, 158 276"/>
        <path class="carte-route carte-fleche" data-carte-trait d="M300 250 C 340 285, 380 310, 430 330"/>
        <path class="carte-route carte-fleche carte-fleche--loin" data-carte-trait d="M300 250 C 230 300, 120 330, 30 352"/>
        <path class="carte-route carte-fleche carte-fleche--loin" data-carte-trait d="M300 250 C 300 320, 296 370, 292 420"/>
        <circle class="carte-ville" cx="410" cy="40" r="7"/>
        <text class="carte-texte" x="424" y="45">Nérac</text>
        <text class="carte-texte carte-texte--route" x="330" y="160">RD 656</text>
        <text class="carte-texte carte-texte--zone" x="22" y="40">${c.l === 'fr' ? 'Landes' : 'Landes'}</text>
        <text class="carte-texte carte-texte--zone" x="470" y="420">Gers</text>
        <text class="carte-texte" x="176" y="258" data-repere>10 km</text>
        <text class="carte-texte" x="420" y="312" data-repere>10 km</text>
        <text class="carte-texte" x="30" y="378" data-repere>${c.l === 'fr' ? 'Océan' : 'Ocean'} · 120 km</text>
        <text class="carte-texte" x="308" y="410" data-repere>Lourdes · 120 km</text>
        <g class="carte-mezin">
          <circle cx="300" cy="250" r="22" class="carte-halo"/>
          <circle cx="300" cy="250" r="11" class="carte-point" data-repere/>
          <text class="carte-texte carte-texte--mezin" x="330" y="238">Mézin</text>
        </g>
      </svg>
      <figcaption class="note-douce">${c.t('reserver.acces.carteNote')}</figcaption>
    </figure>
  </div>
</section>
`;
};
