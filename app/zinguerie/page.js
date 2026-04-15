import React from "react";
import styles from "./zinguerie.module.css";

export const metadata = {
  title: "Travaux de zinguerie Pyrénées-Orientales | Couvreur Perpignan",
  description:
    "Entreprise de zinguerie dans les Pyrénées-Orientales : pose de gouttières, habillage, étanchéité et évacuation des eaux pluviales. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Travaux de zinguerie dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste de la zinguerie à Perpignan, Rivesaltes et dans tout le département,
          nous assurons l’étanchéité et l’évacuation des eaux pluviales de votre toiture.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi la zinguerie est essentielle ?</h2>
        <p>
          La zinguerie regroupe tous les éléments métalliques assurant l’étanchéité et la bonne évacuation
          des eaux de pluie sur votre toiture.
        </p>
        <p>
          Dans les Pyrénées-Orientales, les fortes pluies et la tramontane peuvent fragiliser ces éléments,
          entraînant infiltrations et dégradations du bâtiment.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nos prestations de zinguerie</h2>

        <ul className={styles.list}>
          <li>Pose et remplacement de gouttières (zinc, PVC, aluminium)</li>
          <li>Installation de chéneaux et descentes d’eaux pluviales</li>
          <li>Habillage de rives et bandeaux de toiture</li>
          <li>Étanchéité des raccords de toiture</li>
          <li>Réparation et entretien des éléments de zinguerie</li>
          <li>Travaux de finition autour des cheminées et fenêtres de toit</li>
        </ul>
      </section>

      {/* AVANTAGES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Les avantages d’une bonne zinguerie</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Étanchéité optimale</h3>
            <p className={styles.p}>Protection efficace contre les infiltrations d’eau.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Protection du bâtiment</h3>
            <p className={styles.p}>Préserve murs, façades et fondations de l’humidité.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Longévité</h3>
            <p className={styles.p}>Des matériaux durables conçus pour résister aux intempéries.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Esthétique</h3>
            <p className={styles.p}>Finitions propres et harmonieuses pour votre toiture.</p>
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
          Contactez-nous dès aujourd’hui pour vos travaux de zinguerie.
          Intervention rapide et finitions de qualité.
        </p>
        <a href="/contact" className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>À quoi sert la zinguerie sur une toiture ?</h3>
          <p>
            Elle permet d’assurer l’étanchéité et l’évacuation des eaux de pluie pour protéger le bâtiment.
          </p>

          <h3>Quand faut-il refaire sa zinguerie ?</h3>
          <p>
            Dès l’apparition de fuites, rouille ou déformations des éléments métalliques.
          </p>

          <h3>Quels matériaux sont utilisés en zinguerie ?</h3>
          <p>
            Principalement le zinc, mais aussi le PVC et l’aluminium selon les besoins du chantier.
          </p>
        </div>
      </section>

    </main>
  );
}