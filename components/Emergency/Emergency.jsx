import React from "react";
import styles from "./emergency.module.css";

export default function HoursEmergency() {
  return (
    <section className={styles.wrapper}>

      {/* HORAIRES */}
      <div className={styles.card}>
        <h2 className={styles.title}>🕒 Horaires d’ouverture</h2>
        <p className={styles.text}>
          Du lundi au vendredi : <strong>8h00 – 19h00</strong>
        </p>
      </div>

      {/* URGENCE */}
      <div className={`${styles.card} ${styles.emergency}`}>
        <h2 className={styles.title}>🚨 Interventions d’urgence 24h/7j</h2>

        <p className={styles.text}>
          Une fuite de toiture ne peut pas attendre. Nous intervenons pour sécuriser votre habitation
          dans tout le département des Pyrénées-Orientales.
        </p>

        <ul className={styles.list}>
          <li>🌙 Nuits (19h00 – 8h00)</li>
          <li>📅 Week-ends</li>
          <li>🎉 Jours fériés</li>
        </ul>

        <h3 className={styles.subtitle}>🛠️ Nos interventions :</h3>

        <ul className={styles.list}>
          <li>Mise hors d’eau / bâchage d’urgence</li>
          <li>Remplacement de tuiles après tempête</li>
          <li>Recherche et diagnostic de fuites</li>
          <li>Sécurisation après intempéries</li>
        </ul>

        <p className={styles.note}>
          ⚠️ Une majoration tarifaire peut s’appliquer pour les interventions en dehors des horaires d’ouverture
          (nuits, week-ends et jours fériés). Un devis est communiqué avant intervention.
        </p>
      </div>

    </section>
  );
}