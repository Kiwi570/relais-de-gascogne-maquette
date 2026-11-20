/* Parcours propres au Relais de Gascogne : estimateur de séjour (total vérifié par le calcul, saison haute),
   demande en trois étapes (préremplie par l'adresse, étapes, envoi simulé, pas de double envoi). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('1366×768') });
  try {
    await page.goto(BASE + '/chambres', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('#tarifs').scrollIntoViewIfNeeded();
    await attendre(1800);
    await page.click('[data-saison="haute"]');
    await page.selectOption('#e-chambre', 'twin');
    await page.click('[data-pas="1"]');
    await attendre(1200);
    const r = await page.evaluate(() => {
      const t = document.querySelector('#e-total');
      const n = parseInt(document.querySelector('#e-nuits').textContent, 10);
      const pdj = document.querySelector('#e-petitdej').checked;
      return { affiche: parseFloat(t.dataset.valeur), texte: t.textContent, n, pdj, tarif: document.querySelector('.tarif').textContent, lien: document.querySelector('[data-estim-lien]').getAttribute('href') };
    });
    const attendu = 75 * r.n + (r.pdj ? 8.5 * 2 * r.n : 0);
    if (Math.abs(attendu - r.affiche) > 0.005) R.echec('estimateur', `total ${r.affiche} au lieu de ${attendu} (${r.n} nuits, lits simples, haute saison)`, { page: '/chambres', taille: '1366×768' });
    if (!/55/.test(r.tarif)) R.echec('estimateur', `tarif haute saison non affiché (${r.tarif})`, { page: '/chambres' });
    if (!/nuits=3/.test(r.lien) || !/type_chambre=twin/.test(r.lien)) R.echec('estimateur', `lien « Demander ces dates » sans les choix (${r.lien})`, { page: '/chambres' });
  } finally { await ctx.close(); }

  const m = await contexte({ taille: T('390×844') });
  try {
    const p = m.page;
    await p.goto(BASE + '/reserver?objet=chambre&nuits=3&type_chambre=twin#demande', { waitUntil: 'load' });
    await attendrePret(p);
    await attendre(600);
    const pre = await p.evaluate(() => ({ objet: document.querySelector('input[name="objet"]:checked')?.value, recap: document.querySelector('[data-recap]').textContent }));
    if (pre.objet !== 'chambre') R.echec('demande', `choix non prérempli par l'adresse (${pre.objet})`, { page: '/reserver', taille: '390×844' });
    await p.click('[data-etape-suiv]'); await attendre(500);
    const etape2 = await p.evaluate(() => ({ nuits: document.querySelector('#f-nuits').value, visible: !!document.querySelector('.branche[data-pour="chambre"]').offsetParent }));
    if (etape2.nuits !== '3' || !etape2.visible) R.echec('demande', `étape 2 : détails de la chambre absents ou non préremplis (${JSON.stringify(etape2)})`, { page: '/reserver', taille: '390×844' });
    await p.click('[data-etape-suiv]'); await attendre(500);
    await p.click('[data-etape-envoi]'); await attendre(300);
    const err = await p.evaluate(() => document.querySelectorAll('[aria-invalid="true"]').length);
    if (!err) R.echec('demande', 'envoi accepté sans nom ni téléphone', { page: '/reserver', taille: '390×844' });
    await p.fill('#f-nom', 'Jeanne Test'); await p.fill('#f-tel', '06 12 34 56 78');
    await p.click('[data-etape-envoi]'); await p.click('[data-etape-envoi]', { force: true }).catch(() => {});
    await attendre(400);
    const fin = await p.evaluate(() => ({ msg: !document.querySelector('[data-message-envoi]').hidden, bloque: document.querySelector('[data-etape-envoi]').disabled }));
    if (!fin.msg || !fin.bloque) R.echec('demande', `envoi simulé incomplet (${JSON.stringify(fin)})`, { page: '/reserver', taille: '390×844' });
  } finally { await m.ctx.close(); }
}
