import React from 'react'
import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner(props) {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.subtitle}>
          {props.description}
        </p>

       <div className={styles.btn_container}>
         <a href="/contact" className={styles.btn}>
          Demander un devis gratuit
        </a>
         <a href="tel:+33675605940" className={styles.phone}>
                📞 06 75 60 59 40
        </a>
        <p className={styles.p}> Contactez-nous du lundi au vendredi, de 8h à 19h  <br/> Intervention d'urgence les jours fériés et les week end de 19h à 8h (horaire de nuit)</p>
       </div>
      </div>

      <Image
        src={props.url}
        alt="Nos services de couverture et peinture"
        fill
        className={styles.image}
        priority
      />
    </section>
  )
}
