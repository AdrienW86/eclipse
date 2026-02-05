import React from 'react'
import Link from 'next/link'
import styles from './call.module.css'

export default function Call() {
  return (
    <Link href="tel:+33675605940" className={styles.phone}>
        📞 06 75 60 59 40
    </Link>
  )
}
