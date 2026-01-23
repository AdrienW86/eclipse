"use client";

import styles from "./maps.module.css";

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.1031068898437!2d2.8751353544886245!3d42.76502463529171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b0693f26396f65%3A0x43ff98560ed807f7!2s1%20Rue%20Louis%20Torcatis%2C%2066600%20Rivesaltes!5e0!3m2!1sfr!2sfr!4v1769174247565!5m2!1sfr!2sfr"
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
