import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src='/logo.png'
        width={130}
        height={130} 
        alt="logo de l'entreprise"
        className={styles.logo}
      />
      <p className={styles.p}>2026 © Eclipse Couverture </p>
      <Link href="/mentions" className={styles.mentions}> Mentions légales</Link>
       <Link href="/politique-confidentialite" className={styles.mentions}> Politique de confidentialité</Link>
      <div className={styles.drop}>
        <Link href="/renovation" className={styles.li}>Rénovation de toiture</Link>
        <Link href="/zinguerie" className={styles.li}>Zinguerie</Link>
        <Link href="/etancheite" className={styles.li}>Travaux d'étanchéité</Link>
        <Link href="/hydrofuge" className={styles.li}>Traitement hydrofuge</Link>
        <Link href="/nettoyage-toiture" className={styles.li}>Nettoyage de toiture</Link>
        <Link href="/nettoyage-facade" className={styles.li}>Nettoyage façade et terrasse</Link>
      </div>
      <Link href="https://www.code-v.fr" target="_blank" rel="noopener noreferrer" className={styles.codev}>Création <span className={styles.span}> Codev </span></Link>
    </footer>
  )
}
