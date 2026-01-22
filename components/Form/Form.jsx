"use client";

import styles from "./form.module.css";

export default function Form() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.group}>
        <label htmlFor="name">Nom</label>
        <input id="name" type="text" name="name" required />
      </div>

      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className={styles.group}>
        <label htmlFor="phone">Téléphone</label>
        <input id="phone" type="tel" name="phone" />
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <button type="submit" className={styles.button}>
        Envoyer
      </button>
    </form>
  );
}
