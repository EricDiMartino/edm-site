// ============================================================
// ACADEMY LEADER — SEO, FAQ et appel final des pages offre (ouvrir / accompagnement / formations).
// Extrait tel quel de la maquette (objets SEO, FAQ, FIN du script de formation-src/maquette.html). MOT À MOT.
// ============================================================
import type { Qa } from '../../components/formation/FormationFaq.astro';
import type { FinalCta } from '../../components/formation/FormationFinalCta.astro';
import { url } from './site';

export const ouvrirSeo = {
  "title": "Ouvrir un salon de coiffure rentable : accompagnement en 7 étapes | Academy Leader",
  "description": "Étude de zone, coût minute, prévisionnel, concept, équipe, ouverture. Menés avec toi par des gérants de 4 salons. 1 projet par mois."
};
export const ouvrirFaq: Qa[] = [
  {
    "q": "Combien coûte un accompagnement à l'ouverture d'un salon de coiffure ?",
    "a": "Le montant dépend de ton projet : création ou reprise, budget, et ce que nos partenaires prennent en charge. On te le donne au premier appel, avant que tu aies engagé quoi que ce soit."
  },
  {
    "q": "C'est un gros engagement ?",
    "a": "Oui. Sept étapes, du démarrage jusqu'à 24 mois après l'ouverture, avec une partie du travail qui est la tienne. C'est pour ça qu'on ne prend qu'un nouveau projet par mois."
  },
  {
    "q": "J'ai peur d'ouvrir grand et que ce ne soit pas rentable.",
    "a": "C'est la bonne peur, et elle se traite à l'étape 1. L'étude de zone et le coût minute se font avant le local : si la surface est trop grande pour ta zone, on te le dit quand changer d'avis ne coûte encore rien."
  },
  {
    "q": "Est-ce une franchise ?",
    "a": "Non. Pas de droit d'entrée, pas de redevance, pas d'enseigne imposée. Tu ouvres ton salon, avec ton nom et ton concept."
  }
];
export const ouvrirFin: FinalCta = { ...{
  "label": "Avant de signer quoi que ce soit",
  "h": "Parle-nous avant, pas après.",
  "p": "On te dit où tu en es sur les 7 étapes et ce qu'il faut avoir calculé avant la banque. 1 nouveau projet par mois.",
  "cta": "Découvre si c'est le bon moment pour ouvrir",
  "sub": "2 minutes · réponse immédiate"
}, href: url.diagnostic };

export const accSeo = {
  "title": "Accompagnement gérant de salon de coiffure : 6 mois pour un salon autonome",
  "description": "Coaching individuel de 6 mois pour salons dès ~300 K€ de CA : rentabilité, prix, flux client, management. À partir de 7 000 € HT."
};
export const accFaq: Qa[] = [
  {
    "q": "Combien ça coûte ?",
    "a": "À partir de 7 000 € HT pour six mois, facturé à la société. Le prix exact t'est donné à la fin du diagnostic, en deux minutes, sans appel."
  },
  {
    "q": "Combien de temps faut-il y consacrer ?",
    "a": "Environ 1 h 30 par mois de sessions en visio, et le reste en actions dans ton salon : le travail de patron que tu ne fais pas aujourd'hui faute de cadre."
  },
  {
    "q": "J'ai déjà fait des formations. Ça n'a rien changé.",
    "a": "Une formation te donne du savoir et te laisse rentrer chez toi avec. Ici on travaille sur ton salon, avec tes chiffres, chaque semaine, jusqu'à ce que ce soit fait."
  },
  {
    "q": "Est-ce que c'est finançable ?",
    "a": "Non. Nos formations le sont, via OPCO EP ou FAFCEA. L'accompagnement ne l'est pas : le format d'un dossier dénaturerait le suivi individuel."
  },
  {
    "q": "Et si ça ne me convient pas ?",
    "a": "Après le rendez-vous d'onboarding, où l'on ouvre ton programme, ton tableau de bord et ton plan sur 6 mois, tu peux demander le remboursement au moindre doute."
  },
  {
    "q": "Mon salon fait moins de 300 000 €. Je peux quand même ?",
    "a": "Dans la plupart des cas, non : tu paierais pour des leviers que tu ne peux pas encore actionner. On t'orientera vers une formation financée, qui te fera gagner plus pour beaucoup moins cher."
  }
];
export const accFin: FinalCta = { ...{
  "label": "Quatre places par mois",
  "h": "Tu ne sais pas si c'est ton moment ?",
  "p": "Le diagnostic te le dit en deux minutes, avec le prix. Si ce n'est pas encore l'accompagnement, on te le dira.",
  "cta": "Découvre si c'est ton moment",
  "sub": "2 minutes · gratuit, sans appel"
}, href: url.diagnostic };

export const formSeo = {
  "title": "Formations coiffure Qualiopi en salon, financées OPCO EP | Academy Leader",
  "description": "9 formations certifiées Qualiopi : consultation, head spa, barbier, colorimétrie, IA. Dans ton salon, prise en charge OPCO EP ou FAFCEA."
};
export const formFaq: Qa[] = [
  {
    "q": "Comment fonctionne la prise en charge OPCO EP en coiffure ?",
    "a": "La branche coiffure finance 25 € HT de l'heure sur les formations métier et 30 € HT sur les transverses, par participant salarié. Tu avances, l'OPCO rembourse. On fournit convention, programme et émargement."
  },
  {
    "q": "Quand faut-il déposer la demande ?",
    "a": "Avant le début de la formation. Une demande déposée après est refusée. On monte le dossier avec toi dès que la date est choisie."
  },
  {
    "q": "Je suis gérant TNS, suis-je éligible ?",
    "a": "Pas à l'OPCO EP. Les gérants TNS relèvent du FAFCEA, avec une prise en charge de l'ordre de 350 € sur la formation IA gérant, à confirmer selon tes droits."
  },
  {
    "q": "La formation a-t-elle lieu dans mon salon ?",
    "a": "Oui pour les formations présentielles : avec ton équipe, tes vraies clientes et ton matériel, jusqu'à 8 personnes. Les formations IA et management se font en visio."
  },
  {
    "q": "Y a-t-il un suivi après la formation ?",
    "a": "Oui, un point de 2 h deux semaines après, déclaré au programme et donc finançable."
  }
];
export const formFin: FinalCta = { ...{
  "label": "Passer à l'action",
  "h": "Une journée qui change l'année.",
  "p": "Calcule ton reste à charge, puis on monte le dossier ensemble. Rappel : la demande part avant la formation.",
  "cta": "Choisir ma formation",
  "sub": "Le calcul se fait en direct"
}, href: '#cat' };
