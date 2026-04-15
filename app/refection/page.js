import React from "react";
import styles from "./refection.module.css";

export const metadata = {
  title: "Réfection de toiture Pyrénées-Orientales | Couvreur Perpignan",
  description:
    "Entreprise de réfection de toiture dans les Pyrénées-Orientales : rénovation complète, remplacement de tuiles, isolation et étanchéité. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Réfection de toiture dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste de la réfection de toiture à Perpignan, Rivesaltes et dans tout le département,
          nous intervenons pour rénover, réparer et renforcer votre toit durablement.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi refaire sa toiture ?</h2>
        <p>
          La réfection de toiture est essentielle pour garantir la protection de votre habitation.
          Dans les Pyrénées-Orientales, les conditions climatiques comme la tramontane,
          les fortes chaleurs et les intempéries fragilisent les toitures.
        </p>
        <p>
          Une toiture en mauvais état peut entraîner infiltrations, pertes de chaleur et dégradations
          importantes de votre maison.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nos prestations de réfection de toiture</h2>

        <ul className={styles.list}>
          <li>Dépose complète de l’ancienne toiture</li>
          <li>Rénovation et traitement de la charpente</li>
          <li>Pose d’un écran sous-toiture</li>
          <li>Installation de tuiles, ardoises ou zinc</li>
          <li>Amélioration de l’isolation thermique</li>
          <li>Travaux d’étanchéité et zinguerie</li>
        </ul>
      </section>

      {/* AVANTAGES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Les avantages d’une réfection de toiture</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Étanchéité renforcée</h3>
            <p className={styles.p}>Protection optimale contre les infiltrations d’eau.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Isolation améliorée</h3>
            <p className={styles.p}>Réduction des pertes de chaleur et économies d’énergie.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Valorisation du bien</h3>
            <p className={styles.p}>Augmente la valeur immobilière de votre maison.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Durabilité</h3>
            <p className={styles.p}>Une toiture neuve pour plusieurs décennies.</p>
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
          Contactez-nous dès aujourd’hui pour votre projet de réfection de toiture.
          Intervention rapide et travail de qualité.
        </p>
       <a href='/contact' className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>Quand faut-il refaire sa toiture ?</h3>
          <p>
            Dès l’apparition de fuites, tuiles cassées ou perte d’étanchéité.
          </p>

          <h3>Combien coûte une réfection de toiture ?</h3>
          <p>
            Le prix dépend de la surface, des matériaux et de l’état de la charpente.
          </p>

          <h3>Combien de temps durent les travaux ?</h3>
          <p>
            En moyenne entre quelques jours et plusieurs semaines selon le chantier.
          </p>
        </div>
      </section>

    </main>
  );
}