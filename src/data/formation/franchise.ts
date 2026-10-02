// ============================================================
// ACADEMY LEADER — bloc « Franchise ou indépendant » de la page Ouvrir un salon.
// Source : maquette de travail validée par Xavier (canevas « Ouvrir un salon — version franchise »,
// 02/10/2026), textes relus. Cible SEO/Ads : « franchise salon de coiffure ».
// ⚠️ Aucun chiffre sur les franchises : critères qualitatifs uniquement (à garder ainsi).
// ============================================================

export const heroFranchise = {
  eyebrow: 'Ouvrir un salon de coiffure · en indépendant ou en franchise ?',
  accroche: 'Tu hésites avec une franchise de coiffure ?',
  // texte riche (gras) rendu dans la page
  lien: 'Franchise ou indépendant : le comparatif ↓',
};

export const franchise = {
  label: 'Franchise ou indépendant',
  intro:
    "Une franchise rassure parce qu'on n'ouvre pas seul. Mais tu le paies : droit d'entrée, redevance sur ton chiffre d'affaires, concept imposé, pendant toute la durée du contrat. Avec nous, tu as le cadre d'un réseau sans en payer le prix.",
  prisALaFranchise: [
    { t: "Tu n'es pas seul", p: 'Trois associés qui gèrent quatre salons, joignables à chaque décision, pendant 24 mois après ton ouverture.' },
    { t: 'Des tarifs négociés', p: 'On négocie pour toi, et tu profites des partenariats que nous avons signés avec les plus grandes marques nationales.' },
    { t: 'Un accompagnement de A à Z', p: "7 étapes menées avec toi, de l'étude de zone à l'ouverture, puis nos outils et notre bibliothèque de formation offerts." },
  ],
  gardeDeLIndependant: [
    { t: 'Ta liberté', p: "Ton nom, ton concept, tes fournisseurs, tes prix. Personne ne t'impose une enseigne ni une façon de travailler." },
    { t: "L'argent qui va avec", p: "Ni droit d'entrée, ni redevance sur ton chiffre d'affaires. Chaque euro gagné reste dans ton salon, et ton fonds t'appartient." },
  ],
  comparatif: [
    { c: "Droit d'entrée", f: "Oui, montant selon l'enseigne", a: 'Aucun' },
    { c: "Redevance sur ton chiffre d'affaires", f: 'Chaque mois, pendant tout le contrat', a: 'Aucune' },
    { c: 'Nom et concept du salon', f: "Ceux de l'enseigne", a: 'Les tiens' },
    { c: 'Prix de tes prestations', f: 'La grille du réseau', a: "Construits selon l'étude de ton projet" },
    { c: 'Fournisseurs', f: 'Souvent référencés par le réseau', a: 'Tu choisis, on négocie avec toi' },
    { c: 'Accompagnement', f: 'Variable selon le réseau', a: "Jusqu'à l'ouverture + 24 mois de suivi" },
    { c: 'Revendre ton salon', f: 'Selon les règles du contrat', a: "Ton fonds t'appartient" },
  ],
  honnete: {
    label: 'Soyons honnêtes',
    h: 'Tu veux une marque connue dès l\'ouverture ?',
    p: "Une marque déjà connue le jour de l'ouverture. Si c'est ce qui compte le plus pour ton projet, nous pouvons te proposer une solution. Pour être sûr(e) de faire le bon choix, réserve un créneau dans notre agenda : on étudiera ça avec toi, et c'est évidemment offert.",
  },
  cta: { label: 'Franchise ou indépendant : fais le diagnostic', sub: '2 minutes · réponse immédiate' },
};
