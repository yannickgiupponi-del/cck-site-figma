import type { Metadata } from 'next'
import { AtmosphericSection } from '@cck/ui'

export const metadata: Metadata = {
  title: 'Conditions G\u00e9n\u00e9rales de Vente',
  description:
    'Conditions g\u00e9n\u00e9rales de vente de Cache Cache Killer \u2014 escape game et laser tag en Essonne, \u00cele-de-France. Tarifs, r\u00e9servations, annulations, CCK Coins.',
  alternates: { canonical: 'https://cachecachekiller.fr/cgv' },
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

export default function CgvPage() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center gap-4 px-4 py-16 text-center sm:py-20">
        <h1 className="font-display text-4xl font-black text-text-primary sm:text-5xl">
          Conditions G&eacute;n&eacute;rales de Vente
        </h1>
        <p className="text-text-secondary">
          Derni&egrave;re mise &agrave; jour : 1er f&eacute;vrier 2026
        </p>
      </section>

      {/* Content */}
      <AtmosphericSection separator>
        <div className="mx-auto flex max-w-3xl flex-col gap-10">

          {/* Preambule */}
          <p className="text-sm leading-relaxed text-text-secondary">
            Les pr&eacute;sentes Conditions G&eacute;n&eacute;rales de Vente
            (ci-apr&egrave;s &laquo;&nbsp;CGV&nbsp;&raquo;) r&eacute;gissent
            les relations contractuelles entre la soci&eacute;t&eacute; SAS
            Cache Cache Killer et toute personne physique (ci-apr&egrave;s
            &laquo;&nbsp;le Client&nbsp;&raquo;) souhaitant r&eacute;server ou
            participer aux activit&eacute;s propos&eacute;es. Toute
            r&eacute;servation implique l&apos;acceptation pleine et
            enti&egrave;re des pr&eacute;sentes CGV.
          </p>

          {/* 1. Objet */}
          <LegalSection id="objet" title="1. Objet">
            <p>
              Les pr&eacute;sentes CGV ont pour objet de d&eacute;finir les
              conditions dans lesquelles SAS Cache Cache Killer (ci-apr&egrave;s
              &laquo;&nbsp;CCK&nbsp;&raquo;), soci&eacute;t&eacute; par Actions
              Simplifi&eacute;e au capital de 21&nbsp;000&nbsp;euros,
              situ&eacute;e en Essonne, &Icirc;le-de-France, propose &agrave;
              ses clients la r&eacute;servation et la participation &agrave; ses
              activit&eacute;s de loisirs immersifs&nbsp;: escape game et laser
              tag.
            </p>
            <p>
              CCK est un parc th&eacute;matique gamifi&eacute; op&eacute;rant
              sous l&apos;univers fictif &laquo;&nbsp;Cirque
              D&eacute;lav&eacute;&nbsp;&raquo;. L&apos;ouverture au public est
              pr&eacute;vue pour octobre 2026.
            </p>
            <p>
              Les pr&eacute;sentes CGV s&apos;appliquent &agrave;
              l&apos;exclusion de toutes autres conditions, notamment celles en
              vigueur chez le Client. CCK se r&eacute;serve le droit de
              modifier ses CGV &agrave; tout moment&nbsp;; les CGV applicables
              sont celles en vigueur &agrave; la date de la r&eacute;servation.
            </p>
          </LegalSection>

          {/* 2. Tarifs et modalites */}
          <LegalSection id="tarifs" title="2. Tarifs et Modalit&eacute;s">
            <p>
              Tous les prix sont indiqu&eacute;s en euros, toutes taxes
              comprises (TTC). Les activit&eacute;s de type escape game et laser
              tag sont soumises &agrave; la TVA au taux r&eacute;duit de
              10&nbsp;% conform&eacute;ment &agrave; l&apos;article 279 b nonies
              du Code G&eacute;n&eacute;ral des Imp&ocirc;ts.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              2.1 Tarif standard
            </h3>
            <p>
              <strong>18&nbsp;&euro; par personne</strong> pour toute session
              r&eacute;serv&eacute;e aux horaires de pointe.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              2.2 Tarif heures creuses
            </h3>
            <p>
              <strong>12&nbsp;&euro; par personne</strong> pour les sessions
              r&eacute;serv&eacute;es sur les cr&eacute;neaux d&eacute;finis
              comme heures creuses sur le site de r&eacute;servation. Les
              cr&eacute;neaux heures creuses sont affich&eacute;s lors du
              processus de r&eacute;servation en ligne et peuvent &eacute;voluer
              selon la saison.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              2.3 Privatisations
            </h3>
            <p>
              La r&eacute;servation exclusive du parc ou d&apos;une zone
              d&eacute;di&eacute;e est possible sur devis. Contactez-nous
              &agrave; l&apos;adresse{' '}
              <a
                href="mailto:contact@cachecachekiller.fr"
                className="text-text-link hover:underline"
              >
                contact@cachecachekiller.fr
              </a>{' '}
              pour toute demande de privatisation (groupes, entreprises,
              &eacute;v&eacute;nements).
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              2.4 Dur&eacute;e et format des sessions
            </h3>
            <ul className="list-inside list-disc text-text-secondary">
              <li>Dur&eacute;e d&apos;une session&nbsp;: environ 20 minutes</li>
              <li>Nombre de joueurs&nbsp;: 2 &agrave; 10 par session</li>
              <li>
                Les sessions se d&eacute;roulent selon les scenarios
                propos&eacute;s par CCK, susceptibles d&apos;&eacute;voluer
              </li>
            </ul>

            <p>
              CCK se r&eacute;serve le droit de modifier ses tarifs &agrave;
              tout moment. Le tarif applicable est celui affich&eacute; lors de
              la validation de la commande.
            </p>
          </LegalSection>

          {/* 3. Reservations */}
          <LegalSection id="reservations" title="3. R&eacute;servations">
            <p>
              Les r&eacute;servations s&apos;effectuent exclusivement en ligne
              sur le site{' '}
              <a
                href="https://cachecachekiller.fr/reserver"
                className="text-text-link hover:underline"
              >
                cachecachekiller.fr/reserver
              </a>
              . Aucune r&eacute;servation par t&eacute;l&eacute;phone ou email
              n&apos;est garantie sauf mention contraire.
            </p>
            <p>
              La r&eacute;servation est confirm&eacute;e d&egrave;s
              r&eacute;ception du paiement int&eacute;gral. Un email de
              confirmation est automatiquement envoy&eacute; &agrave;
              l&apos;adresse fournie par le Client. Cet email constitue la
              preuve de r&eacute;servation.
            </p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                Capacit&eacute; maximale&nbsp;: 10 joueurs par session
              </li>
              <li>
                Toute r&eacute;servation est nominative et non cessible sans
                accord pr&eacute;alable de CCK
              </li>
              <li>
                CCK se r&eacute;serve le droit de refuser toute
                r&eacute;servation incompatible avec les r&egrave;gles de
                s&eacute;curit&eacute; ou de bon fonctionnement du parc
              </li>
            </ul>
            <p>
              En cas d&apos;indisponibilit&eacute; technique du site de
              r&eacute;servation, le Client peut contacter CCK par email pour
              obtenir une assistance.
            </p>
          </LegalSection>

          {/* 4. Paiement */}
          <LegalSection id="paiement" title="4. Paiement">
            <p>
              Le paiement s&apos;effectue int&eacute;gralement au moment de la
              r&eacute;servation, par l&apos;interm&eacute;diaire de la
              solution de paiement s&eacute;curis&eacute;e{' '}
              <strong>Stripe</strong>, certifi&eacute;e PCI DSS. Les
              donn&eacute;es bancaires du Client ne sont ni
              stock&eacute;es ni accessibles par CCK.
            </p>
            <p>Moyens de paiement accept&eacute;s&nbsp;:</p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>Carte bancaire (Visa, Mastercard, American Express)</li>
              <li>Apple Pay</li>
              <li>Google Pay</li>
              <li>
                CCK Coins (monnaie virtuelle pr&eacute;pay&eacute;e CCK&nbsp;;
                voir section 8)
              </li>
            </ul>
            <p>
              En cas d&apos;&eacute;chec du paiement, la r&eacute;servation
              n&apos;est pas confirm&eacute;e et le cr&eacute;neau choisi peut
              &ecirc;tre lib&eacute;r&eacute;. Le Client est invit&eacute;
              &agrave; recommencer la proc&eacute;dure.
            </p>
          </LegalSection>

          {/* 5. Annulation et remboursement */}
          <LegalSection
            id="annulation"
            title="5. Annulation et Remboursement"
          >
            <p>
              Toute demande d&apos;annulation doit &ecirc;tre adress&eacute;e
              par email &agrave;{' '}
              <a
                href="mailto:contact@cachecachekiller.fr"
                className="text-text-link hover:underline"
              >
                contact@cachecachekiller.fr
              </a>{' '}
              en indiquant le num&eacute;ro de r&eacute;servation.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              5.1 Barème d&apos;annulation
            </h3>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                <strong>Plus de 48 heures avant la session&nbsp;:</strong>{' '}
                remboursement int&eacute;gral du montant pay&eacute;.
              </li>
              <li>
                <strong>Entre 24 et 48 heures avant la session&nbsp;:</strong>{' '}
                remboursement de 50&nbsp;% du montant pay&eacute;.
              </li>
              <li>
                <strong>Moins de 24 heures avant la session&nbsp;:</strong>{' '}
                aucun remboursement. Le montant reste acquis &agrave; CCK.
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              5.2 Annulation &agrave; l&apos;initiative de CCK
            </h3>
            <p>
              En cas d&apos;annulation d&apos;une session par CCK
              (force majeure, probl&egrave;me technique, s&eacute;curit&eacute;),
              le Client sera rembours&eacute; int&eacute;gralement ou pourra
              choisir de reporter sa r&eacute;servation sans frais.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              5.3 CCK Coins
            </h3>
            <p>
              Les CCK Coins utilis&eacute;s pour r&eacute;server une session
              sont non remboursables en esp&egrave;ces. En cas d&apos;annulation
              &eacute;ligible au remboursement, les CCK Coins sont
              recr&eacute;dit&eacute;s sur le compte du joueur selon les
              m&ecirc;mes barèmes que ci-dessus.
            </p>

            <p>
              Les remboursements en euros sont effectu&eacute;s sur le moyen de
              paiement utilis&eacute; lors de la r&eacute;servation, dans un
              d&eacute;lai de 5 &agrave; 10 jours ouvrables.
            </p>
          </LegalSection>

          {/* 6. Responsabilite */}
          <LegalSection id="responsabilite" title="6. Responsabilit&eacute;">
            <p>
              Les activit&eacute;s propos&eacute;es par CCK (escape game, laser
              tag) sont des activit&eacute;s physiques impliquant des
              d&eacute;placements dans des espaces sc&eacute;nographi&eacute;s,
              avec une luminosit&eacute; r&eacute;duite et des effets
              sp&eacute;ciaux (lumi&egrave;res stroboscopiques, effets sonores).
            </p>
            <p>
              Le Client d&eacute;clare &ecirc;tre inform&eacute; de la nature
              physique des activit&eacute;s et atteste ne pas souffrir de
              contre-indications m&eacute;dicales (epilepsie, troubles
              cardiaques, claustrophobie s&eacute;v&egrave;re, grossesse, etc.)
              pouvant le placer en danger. CCK ne saurait &ecirc;tre tenu
              responsable de tout dommage corporel ou mat&eacute;riel
              r&eacute;sultant d&apos;une non-divulgation de ces
              contre-indications.
            </p>
            <p>
              Un reglement int&eacute;rieur est affich&eacute; dans les locaux
              et disponible sur le site. Le Client s&apos;engage &agrave; le
              respecter. Tout manquement grave peut entra&icirc;ner
              l&apos;exclusion du Client sans remboursement.
            </p>
            <p>
              CCK dispose d&apos;une assurance responsabilit&eacute; civile
              professionnelle couvrant les dommages susceptibles
              d&apos;&ecirc;tre caus&eacute;s aux participants dans le cadre
              normal de l&apos;activit&eacute;. La responsabilit&eacute; de
              CCK ne saurait &ecirc;tre engag&eacute;e au-del&agrave; des
              garanties pr&eacute;vues par ce contrat d&apos;assurance.
            </p>
            <p>
              CCK ne peut &ecirc;tre tenu responsable des objets personnels
              perdus, vols ou endommag&eacute;s dans ses locaux. Des
              consignes sont disponibles &agrave; l&apos;accueil.
            </p>
          </LegalSection>

          {/* 7. Mineurs */}
          <LegalSection id="mineurs" title="7. Mineurs">
            <p>
              L&apos;acc&egrave;s aux activit&eacute;s de CCK est r&eacute;serv&eacute;
              aux personnes &acirc;g&eacute;es de <strong>12 ans minimum</strong>.
            </p>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                <strong>12 &agrave; 14 ans (r&eacute;volus)&nbsp;:</strong>{' '}
                participation autoris&eacute;e uniquement en pr&eacute;sence
                d&apos;un adulte responsable (parent ou tuteur l&eacute;gal)
                participant &agrave; la m&ecirc;me session. Une autorisation
                parentale sign&eacute;e est obligatoire.
              </li>
              <li>
                <strong>15 &agrave; 17 ans&nbsp;:</strong> participation
                autoris&eacute;e avec autorisation parentale sign&eacute;e.
                La pr&eacute;sence physique d&apos;un adulte n&apos;est pas
                obligatoire mais recommand&eacute;e.
              </li>
              <li>
                <strong>18 ans et plus&nbsp;:</strong> participation sans
                restriction.
              </li>
            </ul>
            <p>
              L&apos;autorisation parentale doit &ecirc;tre pr&eacute;sent&eacute;e
              &agrave; l&apos;accueil le jour de la session. En
              l&apos;absence de ce document, CCK se r&eacute;serve le droit
              de refuser l&apos;acc&egrave;s au mineur, sans remboursement.
            </p>
            <p>
              Conform&eacute;ment &agrave; l&apos;article 8 du RGPD, le
              traitement des donn&eacute;es personnelles des joueurs de moins
              de 15 ans requiert le consentement du titulaire de
              l&apos;autorit&eacute; parentale.
            </p>
          </LegalSection>

          {/* 8. CCK Coins */}
          <LegalSection id="cck-coins" title="8. CCK Coins">
            <p>
              Les CCK Coins sont une monnaie virtuelle pr&eacute;pay&eacute;e,
              utilisable exclusivement sur le site et dans les services de CCK.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              8.1 Nature comptable et fiscale
            </h3>
            <p>
              L&apos;achat de CCK Coins ne constitue pas un achat de
              prestation de service. Les fonds correspondants sont
              enregistr&eacute;s en tant que Produits Constat&eacute;s
              d&apos;Avance (compte 4871 &mdash; passif) et ne sont
              reconnus comme chiffre d&apos;affaires qu&apos;au moment de
              leur utilisation effective pour r&eacute;server une activit&eacute;.
              Les CCK Coins ne sont donc pas soumis &agrave; la TVA
              &agrave; l&apos;achat.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              8.2 Utilisation
            </h3>
            <ul className="list-inside list-disc text-text-secondary">
              <li>
                Les CCK Coins peuvent &ecirc;tre utilis&eacute;s pour
                r&eacute;server des sessions, acheter des options ou du
                merchandising propos&eacute;s par CCK.
              </li>
              <li>
                Les CCK Coins ne sont pas convertibles en monnaie r&eacute;elle
                et ne peuvent pas faire l&apos;objet d&apos;un remboursement
                en esp&egrave;ces, sauf disposition l&eacute;gale contraire.
              </li>
              <li>
                Les CCK Coins sont strictement personnels et non cessibles
                &agrave; un tiers.
              </li>
            </ul>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              8.3 Validit&eacute;
            </h3>
            <p>
              Les CCK Coins ont une dur&eacute;e de validit&eacute; de{' '}
              <strong>12 mois</strong> &agrave; compter de leur date d&apos;achat.
              Pass&eacute; ce d&eacute;lai, les coins non utilis&eacute;s sont
              d&eacute;finitivement perdus et ne peuvent faire l&apos;objet
              d&apos;aucune compensation. CCK s&apos;engage &agrave; notifier
              le Client par email 30 jours avant l&apos;expiration de ses coins.
            </p>

            <h3 className="mt-2 font-heading font-semibold text-text-primary">
              8.4 Cas de clôture du compte
            </h3>
            <p>
              En cas de clôture d&apos;un compte joueur &agrave; l&apos;initiative
              du Client, les CCK Coins restants sont d&eacute;finitivement
              perdus. En cas de fermeture de CCK, les CCK Coins non
              utilis&eacute;s feront l&apos;objet d&apos;un remboursement
              conform&eacute;ment aux obligations l&eacute;gales applicables.
            </p>
          </LegalSection>

          {/* 9. Droit applicable */}
          <LegalSection id="droit-applicable" title="9. Droit Applicable">
            <p>
              Les pr&eacute;sentes CGV sont soumises au droit
              fran&ccedil;ais.
            </p>
            <p>
              En cas de litige relatif &agrave; la formation, &agrave;
              l&apos;interpr&eacute;tation ou &agrave; l&apos;ex&eacute;cution
              des pr&eacute;sentes CGV, les parties s&apos;efforceront de
              trouver une solution amiable. &Agrave; d&eacute;faut, le litige
              sera port&eacute; devant le Tribunal de commerce d&apos;&Eacute;vry
              (Essonne), seul comp&eacute;tent.
            </p>
            <p>
              Pour les litiges de consommation, le Client peut &eacute;galement
              recourir &agrave; la proc&eacute;dure de m&eacute;diation
              pr&eacute;vue aux articles L.612-1 et suivants du Code de la
              consommation. Les coordonn&eacute;es du m&eacute;diateur
              comp&eacute;tent sont disponibles sur demande aupr&egrave;s de
              CCK.
            </p>
            <p>
              La Commission europ&eacute;enne met &eacute;galement &agrave;
              disposition une plateforme de r&egrave;glement en ligne des
              litiges (RLL) accessible &agrave; l&apos;adresse&nbsp;:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-text-link hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>
              .
            </p>
          </LegalSection>

        </div>
      </AtmosphericSection>
    </>
  )
}
