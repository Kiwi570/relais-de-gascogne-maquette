/* Le Relais de Gascogne : intro des volets, arrivée des ouvertures, effets propres au Relais.
   Effets du plan (data-effet) : volets, menu-trace, estimateur, journee, carte, distances.
   Le socle gère l'ouverture, le voile (rideau aux volets), l'en-tête, le menu, les mesures et la bibliothèque d'effets. */
import { demarrer, boucle, etat, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const fr = (document.documentElement.lang || 'fr').startsWith('fr');
const euros = (n) => {
  const t = Number.isInteger(n) ? String(n) : n.toFixed(2);
  return fr ? t.replace('.', ',') + ' €' : '€' + t;
};

/* ---------- Ouverture de chaque page ---------- */
const TITRE = '.ouv-titre';
const LIGNES = '.ouv-titre .li';
const ANIMS = '.ouv-anim';

function titreVisible() {
  const h = $(TITRE);
  if (h) { h.classList.add('vu'); h.style.opacity = '1'; }
}

/* Intro (arrivée sur le site, rechargement) : les volets fermés portent le logo, puis s'ouvrent vers l'extérieur
   sur la page ; le titre monte ligne à ligne, puis le bouton et l'information clé. Environ 2,4 s. */
function jouer() {
  if (!gsap) return null;
  const panneau = $('[data-ouverture]');
  const fond = getComputedStyle(document.documentElement).getPropertyValue('--fond').trim() || '#f6f0e4';
  const objet = $('[data-iris-centre]');
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.call(titreVisible, null, 0)
    .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, 0.05)
    .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, 0.15)
    .to('.ouverture-centre', { opacity: 0, scale: 0.97, duration: 0.3, ease: 'power2.in' }, 0.72)
    .set(panneau, { backgroundColor: 'transparent' }, 0.95)
    .fromTo('.volet--g', { rotationY: 0 }, { rotationY: 104, duration: 1.0, ease: 'power2.inOut' }, 0.95)
    .fromTo('.volet--d', { rotationY: 0 }, { rotationY: -104, duration: 1.0, ease: 'power2.inOut',
      /* La bande de la barre de défilement reste bleue tant que le volet droit touche le bord, puis prend le fond. */
      /* Volets passés de profil : le panneau ne couvre plus rien, il se retire (la bande reprend le fond de la page). */
      onUpdate() { if (panneau && Math.abs(gsap.getProperty('.volet--d', 'rotationY')) >= 89.5) { panneau.dataset.gouttiere = fond; panneau.style.visibility = 'hidden'; } } }, 0.95);
  if (objet) tl.fromTo(objet, { scale: 1.07 }, { scale: 1, duration: 1.5, ease: 'power2.out', clearProps: 'transform' }, 0.95);
  tl.fromTo(LIGNES, { y: 0, yPercent: 115 }, { y: 0, yPercent: 0, duration: 0.8, stagger: 0.1 }, 1.35)
    .fromTo(ANIMS, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07 }, 1.6);
  return tl;
}

function etatFinal() {
  titreVisible();
  if (!gsap) return;
  gsap.set([LIGNES, ANIMS].join(', '), { clearProps: 'transform,opacity' });
  $$(ANIMS).forEach((el) => { el.style.opacity = '1'; });
}

/* Arrivée par le voile : la page se découvre pendant que son titre monte. */
function arrivee() {
  titreVisible();
  if (!gsap) return;
  gsap.fromTo(LIGNES, { y: 0, yPercent: 115 }, { y: 0, yPercent: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.1 });
  gsap.fromTo(ANIMS, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.55, stagger: 0.07, ease: 'power3.out', delay: 0.3 });
}

/* ---------- Ardoise et menus : points de conduite et filets qui se tracent ---------- */
function menuTrace() {
  if (!gsap || !ST()) return;
  $$('.ardoise[data-effet="menu-trace"]').forEach((ul) => {
    const points = $$('.ardoise-points', ul), prixs = $$('.ardoise-prix', ul);
    gsap.set(points, { scaleX: 0 });
    gsap.set(prixs, { opacity: 0, x: 10 });
    const tl = gsap.timeline({ scrollTrigger: { trigger: ul, start: 'top 90%', end: 'bottom 72%', scrub: 0.6 } });
    points.forEach((p, i) => {
      tl.to(p, { scaleX: 1, duration: 1, ease: 'none' }, i * 0.45)
        .to(prixs[i], { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }, i * 0.45 + 0.6);
    });
  });
  $$('.menu-plats[data-effet="menu-trace"]').forEach((ol) => {
    const lis = $$('li', ol);
    gsap.set(ol, { '--trace': 0 });
    gsap.timeline({ scrollTrigger: { trigger: ol, start: 'top 90%', end: 'bottom 60%', scrub: 0.6 } })
      .to(ol, { '--trace': 1, duration: 1, ease: 'none' }, 0)
      .fromTo(lis, { x: -8 }, { x: 0, stagger: 0.12, duration: 0.5, ease: 'none' }, 0);
  });
}

/* ---------- Tarifs par saison et estimateur de séjour ---------- */
function rouler(el, cible, duree = 0.6) {
  const depart = parseFloat(el.dataset.valeur || cible) || 0;
  const o = { v: depart };
  el.dataset.valeur = String(cible);
  if (!gsap || depart === cible) { el.textContent = euros(cible); return; }
  gsap.to(o, { v: cible, duration: duree, ease: 'power2.out', onUpdate: () => {
    const v = Math.abs(o.v - cible) < 0.01 ? cible : (Number.isInteger(cible) ? Math.round(o.v) : Math.round(o.v * 2) / 2);
    el.textContent = euros(v);
  }, onComplete: () => { el.textContent = euros(cible); } });
}

function estimateur() {
  const form = $('[data-effet="estimateur"]');
  const boutons = $$('[data-saison]');
  if (!form && !boutons.length) return;
  let saison = 'basse';
  let nuits = 2;
  const total = $('#e-total'), sortie = $('#e-nuits'), select = $('#e-chambre'), pdj = $('#e-petitdej'), lien = $('[data-estim-lien]');
  const calculer = (duree) => {
    if (!form) return;
    const opt = select.selectedOptions[0];
    const prixNuit = parseFloat(opt.dataset[saison]);
    const pers = parseInt(opt.dataset.personnes, 10) || 1;
    const t = prixNuit * nuits + (pdj.checked ? 8.5 * pers * nuits : 0);
    sortie.textContent = String(nuits);
    rouler(total, t, duree);
    if (lien) {
      const u = new URL(lien.getAttribute('href'), location.href);
      u.searchParams.set('objet', 'chambre');
      u.searchParams.set('nuits', String(nuits));
      u.searchParams.set('type_chambre', select.value);
      if (pdj.checked) u.searchParams.set('petitdej', 'oui'); else u.searchParams.delete('petitdej');
      lien.setAttribute('href', u.pathname + u.search + u.hash);
    }
  };
  boutons.forEach((b) => b.addEventListener('click', () => {
    saison = b.dataset.saison;
    boutons.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    $$('.tarif').forEach((t) => rouler(t, parseFloat(t.dataset[saison])));
    calculer();
  }));
  $$('.tarif').forEach((t) => { t.dataset.valeur = t.dataset.basse; });
  if (!form) return;
  form.addEventListener('click', (e) => {
    const b = e.target.closest('[data-pas]');
    if (!b) return;
    nuits = Math.min(14, Math.max(1, nuits + parseInt(b.dataset.pas, 10)));
    calculer();
  });
  form.addEventListener('change', () => calculer());
  total.dataset.valeur = '0';
  /* À l'entrée dans l'écran, le total se compose (effet au défilement), puis suit chaque choix. */
  total.textContent = euros(0);
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    io.disconnect();
    calculer(1.2);
  }), { threshold: 0.5 });
  quand('pret', () => io.observe(form));
  quand('retour', () => { io.disconnect(); total.dataset.valeur = ''; calculer(0); });
}

/* ---------- Journée en autocar : la frise se dessine, les étapes s'allument ---------- */
function journee() {
  const frise = $('[data-effet="journee"]');
  if (!frise || !gsap || !ST()) return;
  const points = $$('.frise-point', frise), etapes = $$('.frise-etape', frise);
  gsap.set(frise, { '--trace': 0 });
  gsap.set(points, { scale: 0.3 });
  gsap.set(etapes, { y: 18 });
  const tl = gsap.timeline({ scrollTrigger: { trigger: frise, start: 'top 80%', end: 'bottom 70%', scrub: 0.6 } });
  tl.to(frise, { '--trace': 1, duration: 3, ease: 'none' }, 0);
  etapes.forEach((e, i) => {
    tl.to(points[i], { scale: 1, duration: 0.4, ease: 'back.out(2)' }, i * 1)
      .to(e, { y: 0, duration: 0.5, ease: 'none' }, i * 1);
  });
}

/* ---------- Schéma d'accès : routes qui se tracent, Mézin qui bat doucement ---------- */
function carte() {
  const fig = $('[data-effet="carte"]');
  if (!fig || !gsap || !ST()) return;
  const traits = $$('[data-carte-trait]', fig);
  const pleins = traits.filter((p) => !p.classList.contains('carte-fleche--loin'));
  const loin = traits.filter((p) => p.classList.contains('carte-fleche--loin'));
  pleins.forEach((p) => { const L = p.getTotalLength(); p.style.strokeDasharray = `${L} ${L}`; p.style.strokeDashoffset = String(L); p.dataset.l = String(L); });
  gsap.set(loin, { opacity: 0 });
  const tl = gsap.timeline({ scrollTrigger: { trigger: fig, start: 'top 85%', end: 'center 50%', scrub: 0.6 } });
  pleins.forEach((p, i) => tl.to(p, { strokeDashoffset: 0, duration: 1, ease: 'none' }, i * 0.3));
  tl.to(loin, { opacity: 1, duration: 0.6, stagger: 0.2, ease: 'none' }, 0.6);
  const halo = $('.carte-halo', fig);
  if (halo) boucle(fig, (dt, t) => { const s = 1 + 0.35 * (0.5 + 0.5 * Math.sin(t * 2.4)); halo.setAttribute('r', (22 * s).toFixed(2)); });
}
function carteFinale() {
  $$('[data-carte-trait]').forEach((p) => { p.style.strokeDashoffset = '0'; p.style.opacity = ''; });
}

/* ---------- Demande en trois étapes, avec récapitulatif ---------- */
function demande() {
  const form = $('form.demande');
  if (!form) return;
  const etapes = $$('.etape', form);
  const prec = $('[data-etape-prec]', form), suiv = $('[data-etape-suiv]', form), envoi = $('[data-etape-envoi]', form);
  const texte = $('[data-etape-texte]', form), barre = $('.etapes-barre', form), bloc = $('.etapes', form);
  const recap = $('[data-recap]');
  const L = (cle) => (fr ? { etape: 'Étape', sur: 'sur', objet: 'Demande', date: 'Date', service: 'Service', pers: 'Personnes', nuits: 'Nuits', chambre: 'Chambre', formule: 'Formule', evenement: 'Événement', nom: 'Nom', pdj: 'Petit-déjeuner', oui: 'oui' }
    : { etape: 'Step', sur: 'of', objet: 'Request', date: 'Date', service: 'Service', pers: 'Guests', nuits: 'Nights', chambre: 'Room', formule: 'Package', evenement: 'Event', nom: 'Name', pdj: 'Breakfast', oui: 'yes' })[cle];
  let n = 1;
  const objet = () => (form.querySelector('input[name="objet"]:checked') || {}).value || 'table';
  const libelleRadio = (nom) => { const r = form.querySelector(`input[name="${nom}"]:checked`); return r ? r.closest('label').textContent.trim().split('\n')[0].trim() : ''; };
  const libelleSelect = (nom) => { const s = form.querySelector(`select[name="${nom}"]`); return s ? s.selectedOptions[0].textContent.trim() : ''; };
  const val = (nom) => { const c = form.querySelector(`[name="${nom}"]`); return c ? c.value.trim() : ''; };
  const dateLisible = (v) => { if (!v) return ''; const d = new Date(v + 'T12:00:00'); return isNaN(d) ? v : d.toLocaleDateString(fr ? 'fr-FR' : 'en-GB', { weekday: 'short', day: 'numeric', month: 'long' }); };
  const majRecap = () => {
    if (!recap) return;
    const o = objet();
    const lignes = [[L('objet'), (form.querySelector(`input[name="objet"][value="${o}"]`).closest('label').querySelector('b') || {}).textContent]];
    if (o === 'table') lignes.push([L('date'), dateLisible(val('date_table'))], [L('service'), libelleRadio('service')], [L('pers'), val('personnes_table')]);
    if (o === 'chambre') lignes.push([L('date'), dateLisible(val('arrivee'))], [L('nuits'), val('nuits')], [L('chambre'), libelleSelect('type_chambre')], [L('formule'), libelleSelect('formule')], [L('pdj'), form.querySelector('[name="petitdej"]').checked ? L('oui') : '']);
    if (o === 'groupe') lignes.push([L('evenement'), libelleSelect('evenement')], [L('date'), dateLisible(val('date_groupe'))], [L('pers'), val('personnes_groupe')]);
    if (val('nom')) lignes.push([L('nom'), val('nom')]);
    recap.innerHTML = '';
    lignes.filter(([, v]) => v).forEach(([k, v]) => {
      const d = document.createElement('div');
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = v;
      d.append(dt, dd); recap.append(d);
    });
  };
  const brancher = () => $$('.branche', form).forEach((b) => b.classList.toggle('branche-active', b.dataset.pour === objet()));
  const montrer = (k, focus) => {
    const h0 = bloc.offsetHeight;
    n = k;
    etapes.forEach((e) => e.classList.toggle('etape-active', +e.dataset.etape === n));
    brancher();
    prec.hidden = n === 1; suiv.hidden = n === 3; envoi.hidden = n !== 3;
    if (texte) texte.textContent = `${L('etape')} ${n} ${L('sur')} 3`;
    if (barre) barre.style.setProperty('--progres', String(n / 3));
    if (gsap && focus) gsap.fromTo(bloc, { height: h0 }, { height: bloc.scrollHeight, duration: 0.45, ease: 'power3.out', clearProps: 'height' });
    if (focus) { const l = etapes[n - 1].querySelector('legend'); if (l) { l.setAttribute('tabindex', '-1'); l.focus({ preventScroll: true }); } }
  };
  form.classList.add('etapes-actives');
  montrer(1, false);
  majRecap();
  suiv.addEventListener('click', () => montrer(Math.min(3, n + 1), true));
  prec.addEventListener('click', () => montrer(Math.max(1, n - 1), true));
  form.addEventListener('change', () => { brancher(); majRecap(); });
  form.addEventListener('input', majRecap);
  /* Entrée dans un champ avant la dernière étape : on passe à l'étape suivante au lieu d'envoyer. */
  window.addEventListener('submit', (e) => {
    if (e.target !== form || n === 3) return;
    e.preventDefault(); e.stopImmediatePropagation();
    montrer(n + 1, true);
  }, true);
  /* Le socle refuse l'envoi si un champ est à revoir : il revient sur l'étape des coordonnées (déjà affichée). */
}

/* ---------- Démarrage ---------- */
demarrer({
  preparer() {
    /* Une fois l'ouverture finie (en-tête et polices en place), les positions des scènes sont recalculées une fois. */
    quand('pret', () => setTimeout(() => { if (ST()) ST().refresh(); }, 250));
    menuTrace();
    estimateur();
    journee();
    carte();
    demande();
  },
  jouer,
  etatFinal() {
    etatFinal();
    carteFinale();
  },
  arrivee,
});
export { etat };
