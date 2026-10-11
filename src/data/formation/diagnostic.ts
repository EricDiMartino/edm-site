// ============================================================
// ACADEMY LEADER — configuration du diagnostic (/formation/diagnostic).
// Source : atelier « Diagnostic Academy Leader » (artefact claude.ai 4YGbAMJLqCKg2iRHTsiuJ2),
// version validée par Xavier le 11/10/2026. Pour modifier : retravailler l'atelier, puis régénérer ce fichier.
// - questions : ordre d'affichage ; showIf = posée seulement si la réponse à la question q est dans `in` (index d'options).
//   type 'number' = chiffre à saisir (non noté). p + sc = pilier noté et points (0-100) par réponse.
// - rules : lues dans l'ordre, la première vraie donne le résultat ; sinon `fallback`.
// - branch : profil « projet d'ouverture » (textes alternatifs tAlt / txtAlt).
// ============================================================

export const diag = {
  "bands": [
    {
      "max": 45,
      "t": "Tu portes ton salon à bout de bras. Ce n'est pas un manque d'effort : il te manque des instruments de bord. Et ça, ça se construit.",
      "tAlt": "Ton projet est déjà bien engagé. Avant d'aller plus loin, vérifions ensemble les décisions prises : c'est là que se cachent les erreurs qui coûtent cher."
    },
    {
      "max": 75,
      "t": "Tu as déjà construit l'essentiel. Reste à faire en sorte que ton salon avance aussi bien quand tu n'es pas là.",
      "tAlt": "Une partie de ton projet est déjà lancée. On sécurise ce qui est fait et on cadre le reste avant qu'il ne soit figé."
    },
    {
      "max": 101,
      "t": "Tu fais partie de ceux qui pilotent vraiment. La question n'est plus de tenir, c'est jusqu'où ton salon peut aller.",
      "tAlt": "Ton projet est au bon moment : rien n'est encore figé. C'est maintenant qu'on peut éviter les 7 erreurs qui coûtent cher à l'ouverture."
    }
  ],
  "branch": {
    "in": [
      0
    ],
    "label": "Projet d'ouverture",
    "q": "q1"
  },
  "fallback": "FORMATION",
  "gate": {
    "btn": "Voir mon diagnostic complet",
    "h": "Débloque ton diagnostic complet",
    "p": "Le détail de tes piliers, ton levier n°1 et l'offre adaptée à ton salon. On t'en envoie aussi une copie."
  },
  "pillars": [
    {
      "k": "renta",
      "lever": "Ton levier n°1 : la rentabilité",
      "n": "Rentabilité",
      "txt": "C'est par là que commence l'accompagnement : ton coût minute, la rentabilité de chaque prestation et de chaque collaborateur. On calcule ton coût minute ensemble pendant l'appel.",
      "txtAlt": "Tu as déjà fait tes calculs de rentabilité. On les reprend avec toi, prestation par prestation, pour vérifier qu'ils tiennent avant d'engager ton argent."
    },
    {
      "k": "panier",
      "lever": "Ton levier n°1 : le panier moyen",
      "n": "Panier moyen",
      "txt": "Une consultation commune à toute ton équipe fait monter le ticket sans forcer la vente. C'est la méthode en 7 étapes qu'Eric a construite et qu'il transmet en formation."
    },
    {
      "k": "equipe",
      "lever": "Ton levier n°1 : l'équipe",
      "n": "Équipe",
      "txt": "Un salon qui tourne sans toi, c'est une équipe suivie : entretiens réguliers, plan de formation, objectifs clairs pour chacun."
    },
    {
      "k": "temps",
      "lever": "Ton levier n°1 : ton temps",
      "n": "Autonomie",
      "txt": "Tu passes encore trop d'heures au fauteuil pour piloter ton salon. L'accompagnement Salon Autonome vise à te faire passer de 40 h à 4 h de coupe par semaine."
    },
    {
      "k": "zone",
      "lever": "Ton levier n°1 : l'emplacement",
      "n": "Emplacement",
      "txt": "Tu as déjà avancé sur ta zone ou ton local. C'est l'une des 7 erreurs les plus coûteuses : on vérifie ce choix avec toi avant d'aller plus loin."
    },
    {
      "k": "prix",
      "lever": "Ton levier n°1 : tes tarifs",
      "n": "Tarifs",
      "txt": "Tes tarifs sont déjà posés. On vérifie avec toi qu'ils tiennent face à ton coût minute et à ta zone, avant l'ouverture."
    }
  ],
  "questions": [
    {
      "id": "q1",
      "o": [
        "J'ai un projet d'ouverture ou de reprise",
        "Je dirige un salon",
        "Je dirige plusieurs salons"
      ],
      "p": "",
      "q": "Où en es-tu aujourd'hui ?",
      "showIf": null,
      "sub": "On adapte la suite à ta situation.",
      "type": "choice"
    },
    {
      "id": "o1",
      "o": [
        "Oui, la zone est choisie",
        "J'hésite entre plusieurs",
        "Pas encore"
      ],
      "p": "zone",
      "q": "As-tu choisi la ville ou le quartier de ton salon ?",
      "sc": [
        0,
        50,
        100
      ],
      "showIf": {
        "in": [
          0
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "o2",
      "o": [
        "Bail signé",
        "En négociation",
        "Je cherche encore",
        "Pas encore commencé"
      ],
      "p": "zone",
      "q": "Où en es-tu pour le local ?",
      "sc": [
        0,
        33,
        66,
        100
      ],
      "showIf": {
        "in": [
          0
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "o3",
      "o": [
        "Je démarre seul",
        "1 à 3",
        "4 et plus"
      ],
      "p": "",
      "q": "Combien de collaborateurs vises-tu la première année ?",
      "showIf": {
        "in": [
          0
        ],
        "q": "q1"
      },
      "sub": "Toi non compris.",
      "type": "choice"
    },
    {
      "id": "o4",
      "o": [
        "Oui, globale et détaillée par prestation",
        "Oui, globale seulement",
        "Pas encore"
      ],
      "p": "renta",
      "q": "As-tu calculé la rentabilité de ton projet ?",
      "sc": [
        0,
        50,
        100
      ],
      "showIf": {
        "in": [
          0
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "o5",
      "o": [
        "Étude de zone et coût minute",
        "En m'alignant sur la concurrence",
        "Pas encore fixés"
      ],
      "p": "prix",
      "q": "Comment as-tu fixé tes futurs tarifs ?",
      "sc": [
        0,
        67,
        100
      ],
      "showIf": {
        "in": [
          0
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "q2",
      "o": [
        "Moins de 150 000 €",
        "150 000 à 300 000 €",
        "Plus de 300 000 €"
      ],
      "p": "",
      "q": "Chiffre d'affaires annuel de ton salon",
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "Une fourchette suffit.",
      "type": "choice"
    },
    {
      "id": "q3",
      "o": [
        "Je suis seul",
        "1 à 3",
        "4 à 8",
        "9 et plus"
      ],
      "p": "",
      "q": "Combien de personnes dans ton équipe ?",
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "Toi non compris.",
      "type": "choice"
    },
    {
      "id": "q4",
      "o": [
        "Moins de 10 h",
        "10 à 25 h",
        "25 à 40 h",
        "Plus de 40 h"
      ],
      "p": "temps",
      "q": "Combien d'heures passes-tu au fauteuil par semaine ?",
      "sc": [
        100,
        66,
        33,
        0
      ],
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "q5",
      "o": [
        "Ma rentabilité et mes prix",
        "Un planning irrégulier",
        "Mon équipe",
        "Mon temps personnel"
      ],
      "p": "",
      "q": "Qu'est-ce qui te freine le plus ?",
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "Choisis le plus important.",
      "type": "choice"
    },
    {
      "id": "q6",
      "o": [
        "Oui, précisément",
        "À peu près",
        "Non"
      ],
      "p": "renta",
      "q": "Connais-tu ton coût minute ?",
      "sc": [
        100,
        50,
        0
      ],
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "Ce que te laisse chaque prestation, à la minute, charges déduites.",
      "type": "choice"
    },
    {
      "id": "q6b",
      "o": [],
      "p": "",
      "ph": "0,85",
      "q": "Quel est ton coût minute ?",
      "showIf": {
        "in": [
          0,
          1
        ],
        "q": "q6"
      },
      "sub": "Ton chiffre actuel, même approximatif.",
      "type": "number",
      "unit": "€ / min"
    },
    {
      "id": "qr",
      "o": [
        "Oui",
        "En partie",
        "Non"
      ],
      "p": "renta",
      "q": "Connais-tu la rentabilité de chacun de tes collaborateurs ?",
      "sc": [
        100,
        50,
        0
      ],
      "showIf": {
        "in": [
          1,
          2,
          3
        ],
        "q": "q3"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "qc",
      "o": [
        "Oui, avec une méthode écrite",
        "À peu près, transmise à l'oral",
        "Chacun a la sienne",
        "Pas de consultation formalisée"
      ],
      "p": "panier",
      "q": "Tes collaborateurs font-ils tous la même consultation ?",
      "sc": [
        100,
        50,
        0,
        0
      ],
      "showIf": {
        "in": [
          1,
          2,
          3
        ],
        "q": "q3"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "qt",
      "o": [
        "Chaque mois",
        "Chaque trimestre",
        "Une fois par an",
        "Quand il y a un souci"
      ],
      "p": "equipe",
      "q": "Un échange planifié avec tes collaborateurs, ça arrive…",
      "sc": [
        100,
        66,
        33,
        0
      ],
      "showIf": {
        "in": [
          1,
          2,
          3
        ],
        "q": "q3"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "q7",
      "o": [
        "Ouvrir un autre salon",
        "Plus du temps pour moi sans perdre de chiffre",
        "Comprendre et Augmenter ma rentabilité",
        "Faire monter le niveau de mon équipe"
      ],
      "p": "",
      "q": "Ton objectif à 12 mois",
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q1"
      },
      "sub": "",
      "type": "choice"
    },
    {
      "id": "q9",
      "o": [
        "Oui",
        "J'ai besoin d'en savoir plus",
        "Non, je cherche uniquement du financé"
      ],
      "p": "",
      "q": "Es-tu prêt à investir dans ton développement ?",
      "showIf": {
        "in": [
          1,
          2
        ],
        "q": "q7"
      },
      "sub": "",
      "type": "choice"
    }
  ],
  "results": {
    "ACCOMPAGNEMENT": {
      "cta": "Réserver mon entretien de validation",
      "ctaSub": "30 min · visio · coût minute offert",
      "facts": [
        {
          "k": "Offre",
          "v": "Salon Autonome · 6 mois"
        },
        {
          "k": "Investissement",
          "v": "Rentabilisé en 1 à 3 mois"
        },
        {
          "k": "Places",
          "v": "4 nouveaux gérants / mois"
        }
      ],
      "go": "resa",
      "h": "{fn}, ton salon est prêt pour l'accompagnement Salon Autonome.",
      "p": "Ton chiffre d'affaires permet d'actionner les six leviers. L'entretien de validation confirme le point de départ et te laisse ton coût minute calculé, que tu continues ou non."
    },
    "FORMATION": {
      "cta": "Calculer mon reste à charge",
      "ctaSub": "Catalogue + simulateur",
      "facts": [
        {
          "k": "Offre",
          "v": "Formation en salon"
        },
        {
          "k": "Reste à charge",
          "v": "Dès 0 € *"
        },
        {
          "k": "Financement",
          "v": "OPCO EP ou FAFCEA"
        }
      ],
      "go": "form",
      "h": "{fn}, commence par une formation financée.",
      "p": "Aujourd'hui, ton levier le plus rentable est ton équipe. Une formation d'un ou deux jours dans ton salon te rapportera plus que l'accompagnement, pour beaucoup moins cher."
    },
    "OUVERTURE": {
      "cta": "Réserver mon appel projet (30 min)",
      "ctaSub": "Premier créneau dans 2 jours ouvrés",
      "facts": [
        {
          "k": "Offre",
          "v": "Ouvrir un salon"
        },
        {
          "k": "Investissement",
          "v": "Sur devis, annoncé à l'appel"
        },
        {
          "k": "Disponibilité",
          "v": "1 projet ce mois-ci"
        }
      ],
      "go": "resa",
      "h": "{fn}, ton projet est au bon moment pour être cadré.",
      "p": "Avant de signer un bail, on regarde tes chiffres ensemble : zone, coût minute, prévisionnel. C'est le seul moment où changer d'avis ne coûte rien."
    }
  },
  "rules": [
    {
      "seg": "OUVERTURE",
      "when": [
        {
          "in": [
            0
          ],
          "q": "q1"
        }
      ]
    },
    {
      "seg": "OUVERTURE",
      "when": [
        {
          "in": [
            0
          ],
          "q": "q7"
        }
      ]
    },
    {
      "seg": "FORMATION",
      "when": [
        {
          "in": [
            2
          ],
          "q": "q9"
        }
      ]
    },
    {
      "seg": "ACCOMPAGNEMENT",
      "when": [
        {
          "in": [
            2
          ],
          "q": "q2"
        }
      ]
    },
    {
      "seg": "ACCOMPAGNEMENT",
      "when": [
        {
          "in": [
            1
          ],
          "q": "q2"
        },
        {
          "in": [
            1,
            2
          ],
          "q": "q7"
        }
      ]
    },
    {
      "seg": "FORMATION",
      "when": [
        {
          "in": [
            3
          ],
          "q": "q7"
        }
      ]
    },
    {
      "seg": "FORMATION",
      "when": [
        {
          "in": [
            0
          ],
          "q": "q2"
        }
      ]
    }
  ],
  "scoreTitle": {
    "t": "Ton score de pilotage",
    "tAlt": "Ton projet est-il au bon moment ?"
  }
} as const;
