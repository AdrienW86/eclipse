import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo_container}>
            <Image
                src='/logo.png'
                width={130}
                height={130} 
                alt="logo de l'entreprise"
            />
        </div>
        <div className={styles.google_reviews}>
            <Image
                src='/google.png'
                width={20}
                height={20} 
                alt="logo google"
                className={styles.google_logo}
            />
            <p className={styles.reviews}> Avis Google </p>
            <div className={styles.ranking}>
                <p> 5.0 </p>
                <Image
                    src='/stars.png'
                    width={80}
                    height={80} 
                    alt="etoiles"
                    className={styles.stars}
                />
            </div>
        </div>
        <div className={styles.adress}>
            <div className={styles.adress_container}>
                <Image
                    src='/localisation.png'
                    width={20}
                    height={20} 
                    alt="localisation"
                    className={styles.localisation}
            />
            <p className={styles.p}> 1 rue Louis Torcatis <br/> 66600 Rivesaltes </p>
            </div>
        </div>
         <div className={styles.contact}>
            <Link href="tel:+33675605940" className={styles.phone}>
                📞 06 75 60 59 40
            </Link>
            <Link href='/contact"' className={styles.btn}> DEMANDER UN DEVIS </Link>
    </div>
    </header>
  )
}
