import React from "react";
import styles from "./renovation.module.css";

export const metadata = {
  title: "Rénovation de toiture Pyrénées-Orientales | Couvreur Perpignan",
  description:
    "Entreprise de rénovation de toiture dans les Pyrénées-Orientales : amélioration, isolation, remplacement de couverture et étanchéité. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Rénovation de toiture dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste de la rénovation de toiture à Perpignan, Rivesaltes et dans tout le département,
          nous modernisons, améliorons et renforçons votre toit pour plus de confort et de performance.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi rénover sa toiture ?</h2>
        <p>
          La rénovation de toiture permet d’améliorer les performances globales de votre habitation.
          Dans les Pyrénées-Orientales, les conditions climatiques comme la tramontane,
          les fortes chaleurs et les intempéries accélèrent l’usure des matériaux.
        </p>
        <p>
          Une toiture rénovée améliore l’isolation, limite les infiltrations et valorise votre bien immobilier
          tout en réduisant votre consommation énergétique.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nos prestations de rénovation de toiture</h2>

        <ul className={styles.list}>
          <li>Rénovation complète ou partielle de la toiture</li>
          <li>Amélioration et renforcement de la charpente</li>
          <li>Pose ou remplacement de la couverture (tuiles, ardoises, zinc)</li>
          <li>Installation d’un écran sous-toiture</li>
          <li>Optimisation de l’isolation thermique</li>
          <li>Travaux d’étanchéité et zinguerie</li>
        </ul>
      </section>

      {/* AVANTAGES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Les avantages d’une rénovation de toiture</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Confort thermique</h3>
            <p className={styles.p}>Une meilleure isolation pour un intérieur plus agréable été comme hiver.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Économies d’énergie</h3>
            <p className={styles.p}>Réduction significative des pertes de chaleur et des factures énergétiques.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Valorisation du bien</h3>
            <p className={styles.p}>Augmente la valeur et l’attractivité de votre maison.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Durabilité</h3>
            <p className={styles.p}>Une toiture modernisée pour une protection durable.</p>
          </div>
        </div>
      </section>

      {/* LOCAL SEO */}
      <section className={styles.section}>
        <h2>Intervention dans les Pyrénées-Orientales</h2>
        <p>
          Nous intervenons à Perpignan, Rivesaltes, Canet-en-Roussillon,
          Argelès-sur-Mer, Saint-Cyprien et dans toutes les communes du département.
        </p>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>Demandez votre devis gratuit</h2>
        <p>
          Contactez-nous dès aujourd’hui pour votre projet de rénovation de toiture.
          Intervention rapide et accompagnement personnalisé.
        </p>
       <a href='/contact' className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>Quelle est la différence entre rénovation et réfection de toiture ?</h3>
          <p>
            La rénovation vise à améliorer les performances (isolation, confort), tandis que la réfection consiste principalement à remettre la toiture en état.
          </p>

          <h3>Quel est le prix d’une rénovation de toiture ?</h3>
          <p>
            Le tarif dépend de la surface, des matériaux choisis et des travaux à réaliser.
          </p>

          <h3>Peut-on améliorer l’isolation lors d’une rénovation ?</h3>
          <p>
            Oui, c’est même l’un des principaux avantages : vous pouvez améliorer significativement les performances énergétiques de votre logement.
          </p>
        </div>
      </section>

    </main>
  );
}