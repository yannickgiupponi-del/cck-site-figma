import type { Metadata } from 'next'
import { AtmosphericSection } from '@cck/ui'

export const metadata: Metadata = {
  title: 'Mentions L\u00e9gales',
  description:
    'Mentions l\u00e9gales, politique de confidentialit\u00e9 et informations RGPD de Cache Cache Killer.',
  alternates: { canonical: 'https://cachecachekiller.fr/mentions-legales' },
}

/* ============================================
   LEGAL SECTION COMPONENT
   ============================================ */

function LegalSection({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="mb-4 font-heading text-xl font-bold text-text-accent sm:text-2xl">
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed text-text-primary">
        {children}
      </div>
    </section>
  )
}

/* ============================================
   PAGE COMPONENT
   ============================================ */

export default function MentionsLegalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl">
          Mentions L&eacute;gales
        </h1>
        <p className="text-text-secondary">
          Derni&egrave;re mise &agrave; jour : 1er f&eacute;vrier 2026
        </p>
      </section>

      {/* Content */}
      <AtmosphericSection separator>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {/* 1. Editeur */}
          <LegalSection title="1. &Eacute;diteur du site">
            <p>
              <strong>Raison sociale :</strong> SAS Cache Cache Killer
            </p>
            <p>
              <strong>Forme juridique :</strong> Soci&eacute;t&eacute; par
              Actions Simplifi&eacute;e (SAS)
            </p>
            <p>
              <strong>Capital social :</strong> 21 000 euros
            </p>
            <p>
              <strong>Associ&eacute;s :</strong> 3 associ&eacute;s &agrave;
              33,33% chacun
            </p>
            <ul className="list-inside list-disc pl-4 text-text-secondary">
              <li>
                Olivier Giupponi &mdash; Pr&eacute;sident & Directeur
                Cr&eacute;atif
              </li>
              <li>
                Mathieu Sardin &mdash; Directeur G&eacute;n&eacute;ral
              </li>
              <li>
                Yannick Giupponi &mdash; Directeur Financier &
                Strat&eacute;gique
              </li>
            </ul>
            <p>
              <strong>Si&egrave;ge social :</strong> Essonne,
              &Icirc;le-de-France
            </p>
            <p>
              <strong>SIREN :</strong> En cours d&apos;immatriculation
            </p>
            <p>
              <strong>Directeur de la publication :</strong> Olivier Giupponi,
              Pr&eacute;sident de SAS Cache Cache Killer
            </p>
            <p>
              <strong>Email :</strong>{' '}
              <a
                href="mailto:contact@cachecachekiller.fr"
                className="text-text-link hover:underline"
              >
                contact@cachecachekiller.fr
              </a>
            </p>
          </LegalSection>

          {/* 2. Hebergeur */}
          <LegalSection title="2. H&eacute;bergement">
            <p>Le site cachecachekiller.fr est h&eacute;berg&eacute; par :</p>
            <p>
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723, USA
            </p>
            <p>
              R&eacute;gion de d&eacute;ploiement :{' '}
              <strong>cdg1 (Paris, France)</strong> &mdash; conform&eacute;ment
              &agrave; notre engagement EU-first pour la localisation des
              donn&eacute;es.
            </p>
            <p>
              <strong>Base de donn&eacute;es :</strong> Supabase (r&eacute;gion
              eu-west-3 Paris) &mdash; service soumis &agrave; un DPA (Data
              Processing Agreement) sign&eacute;.
            </p>
          </LegalSection>

          {/* 3. Propriete intellectuelle */}
          <LegalSection title="3. Propri&eacute;t&eacute; intellectuelle">
            <p>
              L&apos;ensemble du contenu du site (textes, images, graphismes,
              logo, ic&ocirc;nes, sons, logiciels) est la propri&eacute;t&eacute;
              exclusive de SAS Cache Cache Killer ou de ses partenaires. Toute
              reproduction, repr&eacute;sentation, modification, publication ou
              adaptation de tout ou partie des &eacute;l&eacute;ments du site
              est interdite sans autorisation &eacute;crite pr&eacute;alable.
            </p>
            <p>
              La marque &laquo; Cache Cache Killer &raquo; et le logo
              associ&eacute; sont des marques d&eacute;pos&eacute;es. Toute
              utilisation non autoris&eacute;e constitue une contrefa&ccedil;on
              sanctionn&eacute;e par les articles L.713-2 et suivants du Code de
              la propri&eacute;t&eacute; intellectuelle.
            </p>
          </LegalSection>

          {/* 4. RGPD */}
          <LegalSection
            id="rgpd"
            title="4. Protection des donn&eacute;es personnelles (RGPD)"
          >
            <p>
              Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral sur
              la Protection des Donn&eacute;es (RGPD &mdash; R&egrave;glement UE
              2016/679) et &agrave; la loi Informatique et Libert&eacute;s du 6
              janvier 1978 modifi&eacute;e, SAS Cache Cache Killer
              s&apos;engage &agrave; prot&eacute;ger vos donn&eacute;es
              personnelles.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.1 Donn&eacute;es collect&eacute;es
            </h3>
            <p>
              Nous collectons les donn&eacute;es strictement n&eacute;cessaires
              au fonctionnement de nos services :
            </p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                Donn&eacute;es d&apos;identification : nom, pr&eacute;nom,
                email, t&eacute;l&eacute;phone
              </li>
              <li>
                Donn&eacute;es de r&eacute;servation : date, cr&eacute;neau,
                nombre de joueurs
              </li>
              <li>
                Donn&eacute;es de jeu : scores, XP, badges, classement
                (pseudonymis&eacute;es)
              </li>
              <li>
                Donn&eacute;es de paiement : trait&eacute;es exclusivement par
                Stripe (PCI DSS)
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.2 Base l&eacute;gale et finalit&eacute;s
            </h3>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                Ex&eacute;cution du contrat : gestion des r&eacute;servations et
                du compte joueur
              </li>
              <li>
                Consentement : envoi de communications marketing (opt-in)
              </li>
              <li>
                Int&eacute;r&ecirc;t l&eacute;gitime : am&eacute;lioration du
                service, s&eacute;curit&eacute;
              </li>
              <li>
                Obligation l&eacute;gale : facturation, comptabilit&eacute;
                (FEC)
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.3 Vos droits
            </h3>
            <p>
              Vous disposez des droits suivants sur vos donn&eacute;es
              personnelles :
            </p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                <strong>Droit d&apos;acc&egrave;s :</strong> obtenir une copie
                de vos donn&eacute;es
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des
                donn&eacute;es inexactes
              </li>
              <li>
                <strong>Droit de suppression :</strong> demander
                l&apos;effacement de vos donn&eacute;es
              </li>
              <li>
                <strong>Droit &agrave; la portabilit&eacute; :</strong> recevoir
                vos donn&eacute;es dans un format structur&eacute; et lisible
              </li>
              <li>
                <strong>Droit d&apos;opposition :</strong> vous opposer au
                traitement de vos donn&eacute;es
              </li>
              <li>
                <strong>Droit &agrave; la limitation :</strong> restreindre le
                traitement dans certains cas
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.4 Mineurs
            </h3>
            <p>
              Pour les joueurs de moins de 15 ans, le consentement parental est
              requis pour la cr&eacute;ation d&apos;un compte et le traitement
              des donn&eacute;es. Un m&eacute;canisme de v&eacute;rification est
              en place conform&eacute;ment &agrave; l&apos;article 8 du RGPD.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.5 Dur&eacute;e de conservation
            </h3>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                Compte joueur actif : dur&eacute;e de l&apos;inscription + 3 ans
                apr&egrave;s inactivit&eacute;
              </li>
              <li>
                Donn&eacute;es de facturation : 10 ans (obligation comptable)
              </li>
              <li>
                Donn&eacute;es de navigation : 13 mois maximum (analytics)
              </li>
              <li>
                Cam&eacute;ras de s&eacute;curit&eacute; : 48 heures
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              4.6 Sous-traitants
            </h3>
            <p>
              Tous nos sous-traitants disposent d&apos;un DPA (Data Processing
              Agreement) sign&eacute;. Aucun transfert de donn&eacute;es hors UE
              sans garanties ad&eacute;quates :
            </p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>Supabase &mdash; Base de donn&eacute;es (r&eacute;gion EU Paris)</li>
              <li>Stripe &mdash; Paiement (certifi&eacute; PCI DSS)</li>
              <li>Vercel &mdash; H&eacute;bergement (r&eacute;gion cdg1 Paris)</li>
              <li>Brevo &mdash; Email transactionnel (serveurs FR)</li>
              <li>
                Plausible &mdash; Analytics (cookie-free, serveurs EU)
              </li>
            </ul>
          </LegalSection>

          {/* 5. DPO */}
          <LegalSection title="5. D&eacute;l&eacute;gu&eacute; &agrave; la Protection des Donn&eacute;es (DPO)">
            <p>
              Pour exercer vos droits ou pour toute question relative &agrave; la
              protection de vos donn&eacute;es personnelles, contactez notre
              DPO :
            </p>
            <p>
              <strong>Email :</strong>{' '}
              <a
                href="mailto:dpo@cachecachekiller.fr"
                className="text-text-link hover:underline"
              >
                dpo@cachecachekiller.fr
              </a>
            </p>
            <p>
              <strong>Courrier :</strong> DPO &mdash; SAS Cache Cache Killer,
              Essonne, &Icirc;le-de-France
            </p>
            <p>
              En cas de litige, vous pouvez introduire une r&eacute;clamation
              aupr&egrave;s de la CNIL (Commission Nationale de
              l&apos;Informatique et des Libert&eacute;s) :{' '}
              <a
                href="https://www.cnil.fr"
                className="text-text-link hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cnil.fr
              </a>
            </p>
          </LegalSection>

          {/* 6. Cookies */}
          <LegalSection id="cookies" title="6. Cookies et traceurs">
            <p>
              Le site cachecachekiller.fr utilise{' '}
              <strong>Plausible Analytics</strong>, une solution de mesure
              d&apos;audience <strong>sans cookie</strong> ni traceur
              persistant. Plausible ne collecte aucune donn&eacute;e personnelle
              identifiable et n&apos;utilise pas de cookie de suivi.
            </p>
            <p>
              En application de la d&eacute;lib&eacute;ration CNIL
              n&deg;&nbsp;2020-091 du 17 septembre 2020, les outils
              d&apos;analytics exempt&eacute;s de consentement sont ceux dont
              les donn&eacute;es sont strictement limit&eacute;es &agrave; la
              mesure d&apos;audience, ne permettent pas le suivi
              inter-sites et dont les donn&eacute;es ne sont pas
              recoup&eacute;es avec d&apos;autres traitements. Plausible remplit
              l&apos;ensemble de ces crit&egrave;res : <strong>aucune
              banniere de consentement n&apos;est donc requise</strong> pour cet
              outil.
            </p>
            <p>
              Le seul cookie d&eacute;pos&eacute; sur votre navigateur est un
              cookie de session d&apos;authentification, strictement
              n&eacute;cessaire au fonctionnement du compte joueur. Ce cookie
              est exempt&eacute; de consentement conform&eacute;ment aux
              recommandations de la CNIL.
            </p>
            <p>
              Aucun cookie publicitaire, aucun pixel de suivi tiers et aucun
              outil de profilage ne sont utilis&eacute;s sur ce site.
            </p>
          </LegalSection>

          {/* 7. Limitation de responsabilite */}
          <LegalSection title="7. Limitation de responsabilit&eacute;">
            <p>
              SAS Cache Cache Killer s&apos;efforce d&apos;assurer
              l&apos;exactitude des informations diffus&eacute;es sur le site.
              Toutefois, elle ne saurait &ecirc;tre tenue responsable des
              omissions, inexactitudes ou carences dans la mise &agrave; jour.
            </p>
            <p>
              L&apos;utilisateur est seul responsable de l&apos;utilisation
              qu&apos;il fait du site et des informations qui y figurent.
            </p>
          </LegalSection>

          {/* 8. Droit applicable */}
          <LegalSection title="8. Droit applicable et juridiction">
            <p>
              Les pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies
              par le droit fran&ccedil;ais. En cas de litige, et apr&egrave;s
              tentative de r&eacute;solution amiable, les tribunaux
              comp&eacute;tents d&apos;&Eacute;vry (Essonne) seront seuls
              comp&eacute;tents.
            </p>
          </LegalSection>
        </div>
      </AtmosphericSection>
    </>
  )
}
