import React from "react";
import styles from "./nettoyage-facade.module.css";

export const metadata = {
  title: "Nettoyage terrasse et façade Pyrénées-Orientales | Perpignan",
  description:
    "Entreprise de nettoyage de terrasse et de façade dans les Pyrénées-Orientales : démoussage, nettoyage haute pression et entretien extérieur. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Nettoyage de terrasse et de façade dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste du nettoyage extérieur à Perpignan, Rivesaltes et dans tout le département,
          nous redonnons propreté et éclat à vos terrasses et façades.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi entretenir vos extérieurs ?</h2>
        <p>
          Les terrasses et façades subissent en permanence les intempéries, la pollution, l’humidité et le soleil.
          Cela entraîne l’apparition de mousses, taches et salissures.
        </p>
        <p>
          Un entretien régulier permet de préserver l’esthétique, la sécurité et la durabilité de votre habitation.
        </p>
      </section>

      {/* TERRASSE */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nettoyage de terrasse</h2>

        <p>
          Nous réalisons le nettoyage complet de tous types de terrasses : carrelage, béton, pierre naturelle ou bois.
        </p>

        <ul className={styles.list}>
          <li>Démoussage des surfaces</li>
          <li>Nettoyage haute ou basse pression</li>
          <li>Élimination des taches et salissures</li>
          <li>Traitement anti-mousse préventif</li>
          <li>Nettoyage des joints et bordures</li>
        </ul>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Esthétique</h3>
            <p className={styles.p}>Une terrasse propre et agréable à vivre.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Sécurité</h3>
            <p className={styles.p}>Réduction des surfaces glissantes.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Durabilité</h3>
            <p className={styles.p}>Protection des matériaux dans le temps.</p>
          </div>
        </div>
      </section>

      {/* FAÇADE */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nettoyage de façade</h2>

        <p>
          Nous nettoyons et entretenons vos façades pour éliminer pollution, mousses et traces noires.
        </p>

        <ul className={styles.list}>
          <li>Nettoyage basse ou haute pression</li>
          <li>Démoussage des murs extérieurs</li>
          <li>Traitement anti-salpêtre</li>
          <li>Élimination des traces de pollution</li>
          <li>Application de traitement protecteur</li>
        </ul>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Esthétique</h3>
            <p className={styles.p}>Une façade propre et valorisée.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Protection</h3>
            <p className={styles.p}>Préserve les murs contre l’humidité.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Valorisation</h3>
            <p className={styles.p}>Augmente la valeur de votre bien immobilier.</p>
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
          Contactez-nous dès aujourd’hui pour le nettoyage de votre terrasse ou façade.
        </p>
        <a href="/contact" className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>À quelle fréquence nettoyer une terrasse ou une façade ?</h3>
          <p>
            En moyenne tous les 1 à 5 ans selon l’exposition et l’environnement.
          </p>

          <h3>Le nettoyage abîme-t-il les surfaces ?</h3>
          <p>
            Non, les méthodes sont adaptées à chaque matériau pour éviter toute dégradation.
          </p>

          <h3>Faut-il un traitement après nettoyage ?</h3>
          <p>
            Oui, un traitement protecteur est recommandé pour prolonger la propreté.
          </p>
        </div>
      </section>

    </main>
  );
}