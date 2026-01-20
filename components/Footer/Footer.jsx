import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p> @ Eclipse Couverture </p>
      <Link href="/mentions"> Mentions légales</Link>
    </footer>
  )
}
