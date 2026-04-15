import React from "react";
import styles from "./hydrofuge.module.css";

export const metadata = {
  title: "Traitement hydrofuge toiture Pyrénées-Orientales | Couvreur Perpignan",
  description:
    "Entreprise de traitement hydrofuge de toiture dans les Pyrénées-Orientales : protection, imperméabilisation et nettoyage de tuiles. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Traitement hydrofuge de toiture dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste du traitement hydrofuge à Perpignan, Rivesaltes et dans tout le département,
          nous protégeons et imperméabilisons votre toiture durablement.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi appliquer un traitement hydrofuge ?</h2>
        <p>
          Le traitement hydrofuge permet de protéger votre toiture contre l’humidité, la pluie et les infiltrations.
        </p>
        <p>
          Dans les Pyrénées-Orientales, les conditions climatiques (pluie, vent, soleil intense)
          accélèrent le vieillissement des tuiles et favorisent les mousses.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nos prestations de traitement hydrofuge</h2>

        <ul className={styles.list}>
          <li>Nettoyage complet de la toiture</li>
          <li>Démoussage et élimination des saletés</li>
          <li>Application d’un traitement hydrofuge incolore ou coloré</li>
          <li>Protection longue durée contre l’humidité</li>
          <li>Traitement préventif contre les mousses et lichens</li>
          <li>Contrôle de l’état général de la toiture</li>
        </ul>
      </section>

      {/* AVANTAGES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Les avantages du traitement hydrofuge</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Protection contre l’eau</h3>
            <p className={styles.p}>Empêche l’eau de pénétrer dans les matériaux de la toiture.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Prolongation de la durée de vie</h3>
            <p className={styles.p}>Retarde le vieillissement des tuiles et des matériaux.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Esthétique améliorée</h3>
            <p className={styles.p}>Redonne un aspect propre et rénové à votre toiture.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Réduction des mousses</h3>
            <p className={styles.p}>Limite la prolifération des lichens et végétations.</p>
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
          Contactez-nous dès aujourd’hui pour votre traitement hydrofuge de toiture.
          Intervention rapide et protection durable.
        </p>
        <a href="/contact" className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>Quand faire un traitement hydrofuge ?</h3>
          <p>
            Tous les 8 à 10 ans ou dès que la toiture commence à devenir poreuse ou encrassée.
          </p>

          <h3>Est-ce que le traitement remplace le nettoyage ?</h3>
          <p>
            Non, un nettoyage et un démoussage sont nécessaires avant l’application du produit hydrofuge.
          </p>

          <h3>Combien de temps dure l’efficacité ?</h3>
          <p>
            En moyenne entre 5 et 10 ans selon les conditions climatiques et le type de toiture.
          </p>
        </div>
      </section>

    </main>
  );
}