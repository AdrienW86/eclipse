import React from "react";
import styles from "./nettoyage-toiture.module.css";

export const metadata = {
  title: "Nettoyage de toiture Pyrénées-Orientales | Démoussage Perpignan",
  description:
    "Entreprise de nettoyage de toiture dans les Pyrénées-Orientales : démoussage, nettoyage haute pression, entretien et protection de toit. Devis gratuit.",
};

export default function Page() {
  return (
    <main className={styles.main}>
      
      {/* HERO */}
      <section className={styles.hero}>
        <h1>Nettoyage de toiture dans les Pyrénées-Orientales</h1>
        <p>
          Spécialiste du nettoyage de toiture à Perpignan, Rivesaltes et dans tout le département,
          nous redonnons propreté et protection à votre toit.
        </p>
      </section>

      {/* INTRO */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Pourquoi nettoyer sa toiture ?</h2>
        <p>
          Le nettoyage de toiture permet d’éliminer les mousses, lichens, saletés et traces de pollution
          qui fragilisent les matériaux au fil du temps.
        </p>
        <p>
          Dans les Pyrénées-Orientales, le soleil, l’humidité et le vent favorisent l’apparition rapide
          de dépôts sur les toitures.
        </p>
      </section>

      {/* SERVICES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Nos prestations de nettoyage de toiture</h2>

        <ul className={styles.list}>
          <li>Nettoyage complet de toiture</li>
          <li>Démoussage manuel ou mécanique</li>
          <li>Nettoyage basse ou haute pression selon la surface</li>
          <li>Traitement anti-mousse préventif</li>
          <li>Évacuation des résidus et nettoyage des gouttières</li>
          <li>Inspection de l’état général de la toiture</li>
        </ul>
      </section>

      {/* AVANTAGES */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Les avantages du nettoyage de toiture</h2>

        <div className={styles.grid}>
          <div>
            <h3 className={styles.h3}>Toiture propre</h3>
            <p className={styles.p}>Élimination des mousses, saletés et traces noires.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Durée de vie prolongée</h3>
            <p className={styles.p}>Préserve les matériaux et évite leur dégradation prématurée.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Prévention des dégâts</h3>
            <p className={styles.p}>Réduit les risques d’infiltration et de fissures.</p>
          </div>

          <div>
            <h3 className={styles.h3}>Valorisation esthétique</h3>
            <p className={styles.p}>Redonne un aspect propre et soigné à votre maison.</p>
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
          Contactez-nous dès aujourd’hui pour le nettoyage de votre toiture.
          Intervention rapide et résultat professionnel.
        </p>
        <a href="/contact" className={styles.button}>Demander un devis</a>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <h2>Questions fréquentes</h2>

        <div className={styles.faq}>
          <h3>À quelle fréquence nettoyer sa toiture ?</h3>
          <p>
            En moyenne tous les 2 à 5 ans selon l’environnement et l’exposition du toit.
          </p>

          <h3>Le nettoyage abîme-t-il les tuiles ?</h3>
          <p>
            Non, si la méthode est adaptée (basse pression ou nettoyage manuel selon le matériau).
          </p>

          <h3>Faut-il un traitement après le nettoyage ?</h3>
          <p>
            Oui, un traitement anti-mousse ou hydrofuge est recommandé pour prolonger les effets du nettoyage.
          </p>
        </div>
      </section>

    </main>
  );
}