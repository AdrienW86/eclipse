"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  const pathname = usePathname();

  return (
    <header className={styles.menu}>
      <div className={styles.container}>

        {/* Desktop menu */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>Accueil</Link>

          {/* Services avec flèche et clic */}
          <div className={styles.dropdown}>
            <button
              className={`${styles.link} ${pathname.startsWith("/services") ? styles.active : ""}`}
              onClick={toggleServices}
            >
              Services{" "}
              <span className={`${styles.caret} ${isServicesOpen ? styles.caretOpen : ""}`}>&#9662;</span>
            </button>
            {isServicesOpen && (
              <div className={styles.dropdownContent}>
                <Link href="/renovation" className={styles.li} onClick={() => setIsOpen(false)}>Rénovation de toiture</Link>
                <Link href="/zinguerie" className={styles.li} onClick={() => setIsOpen(false)}>Zinguerie</Link>
                <Link href="/charpente" className={styles.li} onClick={() => setIsOpen(false)}>Charpente</Link>
                <Link href="/etancheite" className={styles.li} onClick={() => setIsOpen(false)}>Travaux d'étanchéité</Link>
                <Link href="/traitement-hydrofuge" className={styles.li} onClick={() => setIsOpen(false)}>Traitement hydrofuge</Link>
                <Link href="/nettoyage-toiture" className={styles.li} onClick={() => setIsOpen(false)}>Nettoyage de toiture</Link>
                <Link href="/nettoyage-facade-et-terrasse" className={styles.li} onClick={() => setIsOpen(false)}>Nettoyage façade et terrasse</Link>
                <Link href="/maconnerie" className={styles.li} onClick={() => setIsOpen(false)}>Maçonnerie générale</Link>
                <Link href="/peinture" className={styles.li} onClick={() => setIsOpen(false)}>Peinture générale</Link>
                <Link href="/desamiantage" className={styles.li} onClick={() => setIsOpen(false)}>Désamiantage</Link>
              </div>
            )}
          </div>

          <Link href="/realisations" className={`${styles.link} ${pathname === "/realisations" ? styles.active : ""}`}>Réalisations</Link>
          <Link href="/contact" className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}>Contact & Devis gratuit</Link>
        </nav>

        {/* Hamburger mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.contact}>
            <svg
              className={styles.hamburgerIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
            <Link href='/contact' className={styles.btn} onClick={(e) => e.stopPropagation()}> DEMANDER UN DEVIS </Link>
          </div>
          
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className={styles.mobileNav}>
          <Link href="/" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Accueil</Link>

          {/* Services mobile avec flèche */}
          <button className={styles.mobile_li} onClick={toggleServices}>
            Services <span className={`${styles.caret} ${isServicesOpen ? styles.caretOpen : ""}`}>&#9662;</span>
          </button>
          {isServicesOpen && (
            <div className={styles.mobileDropdown}>
              <Link href="/renovation" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Rénovation de toiture</Link>
              <Link href="/zinguerie" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Zinguerie</Link>            
              <Link href="/etancheite" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Travaux d'étanchéité</Link>
              <Link href="/traitement-hydrofuge" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Traitement hydrofuge</Link>
              <Link href="/nettoyage-toiture" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Nettoyage de toiture</Link>
              <Link href="/nettoyage-facade-et-terrasse" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Nettoyage façade et terrasse</Link>                          
            </div>
          )}        
          <Link href="/contact" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Contact & Devis gratuit</Link>
        </nav>
      )}
    </header>
  );
}
