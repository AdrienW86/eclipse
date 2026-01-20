"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
                <Link href="/services/peinture" className={styles.dropdownLink}>Peinture</Link>
                <Link href="/services/couverture" className={styles.dropdownLink}>Couverture</Link>
                <Link href="/services/isolation" className={styles.dropdownLink}>Isolation</Link>
              </div>
            )}
          </div>

          <Link href="/realisations" className={`${styles.link} ${pathname === "/realisations" ? styles.active : ""}`}>Réalisations</Link>
          <Link href="/contact" className={`${styles.link} ${pathname === "/contact" ? styles.active : ""}`}>Contact & Devis gratuit</Link>
        </nav>

        {/* Hamburger mobile */}
        <div className={styles.hamburger} onClick={toggleMenu}>
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
              <Link href="/services/peinture" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Peinture</Link>
              <Link href="/services/couverture" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Couverture</Link>
              <Link href="/services/isolation" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Isolation</Link>
            </div>
          )}

          <Link href="/realisations" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Réalisations</Link>
          <Link href="/contact" className={styles.mobile_li} onClick={() => setIsOpen(false)}>Contact & Devis gratuit</Link>
        </nav>
      )}
    </header>
  );
}
