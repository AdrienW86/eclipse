import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>2026 © Eclipse Couverture </p>
      <Link href="/mentions" className={styles.mentions}> Mentions légales</Link>
      <div className={styles.drop}>
        <Link href="/renovation" className={styles.li}>Rénovation de toiture</Link>
        <Link href="/zinguerie" className={styles.li}>Zinguerie</Link>
        <Link href="/etancheite" className={styles.li}>Travaux d'étanchéité</Link>
        <Link href="/hydrofuge" className={styles.li}>Traitement hydrofuge</Link>
        <Link href="/nettoyage-toiture" className={styles.li}>Nettoyage de toiture</Link>
        <Link href="/nettoyage-facade" className={styles.li}>Nettoyage façade et terrasse</Link>
      </div>
    </footer>
  )
}
