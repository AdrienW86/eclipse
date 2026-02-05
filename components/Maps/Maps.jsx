"use client";

import styles from "./maps.module.css";

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46857.30081895183!2d2.8357408384028413!3d42.77605951603715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b069420eba9af5%3A0x30b291b97d49c50a!2s66600%20Rivesaltes!5e0!3m2!1sfr!2sfr!4v1770293169635!5m2!1sfr!2sfr" 
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={styles.mapIframe}
      ></iframe>
    </div>
  );
}