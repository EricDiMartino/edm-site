---
# ─────────────────────────────────────────────────────────────
# CONTRAT D'ARTICLE — copier ce fichier en <slug>.md (sans le "_")
# Le nom du fichier = l'URL : src/content/blog/mon-article.md → /actualites/mon-article
# Les champs ci-dessous sont validés par le schéma (src/content.config.ts).
# ─────────────────────────────────────────────────────────────
title: "Titre de l'article (sert de H1 et de balise title)"
description: "Résumé en une phrase, ≤ 160 caractères — méta description + extrait sur la carte."
date: 2026-06-08            # date de publication (YYYY-MM-DD)
# updated: 2026-06-12       # optionnel : date de mise à jour
category: "Conseils soin"   # Conseils soin | Territoire Isère | Coulisses & équipe | Focus prestations
# cover: "/blog/mon-article.webp"   # optionnel : image de couverture (sinon dégradé)
author: "Eric Di Martino"
tags: ["exemple", "mot-clé"]
# FAQ → génère un schema FAQPage (bon pour le GEO / les IA). Optionnel.
faq:
  - question: "Une question que se pose le lecteur ?"
    answer: "La réponse, claire, en une ou deux phrases."
# Maillage interne : liens vers les pages liées (prestations, salons, consultation). Optionnel.
related:
  - titre: "La consultation visagiste"
    href: "/consultation-visagiste-coloriste"
draft: true                 # true = non publié (brouillon)
---

Le corps de l'article, en **Markdown**.

## Un sous-titre

Des paragraphes, des listes, et des [liens internes](/prestations-coiffure) vers nos pages
(maillage). Garder un ton clair, utile, et un mot-clé par section.
