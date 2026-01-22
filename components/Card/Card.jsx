import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import styles from './card.module.css'

export default function Card() {
   const services = [
  {
    slug: "renovation-toiture",
    title: "Rénovation de toiture",
    subtitle: "Couvreur à Perpignan – rénovation de toiture tuiles",
    description:
      "Rénovation complète de toiture en tuiles, ardoises, zinc ou acier à Perpignan. Pose, réparation et entretien sur mesure pour un toit durable et esthétique, adapté aux besoins spécifiques de chaque bâtiment.",
    image: {
      src: "/renovation.png",
      alt: "Rénovation de toiture en tuiles par couvreur à Perpignan"
    },
    keywords: [
      "rénovation de toiture",
      "couvreur Perpignan"
    ],
    cta: "Rénovation de toiture"
  },
  {
    slug: "zinguerie",
    title: "Zinguerie & gouttières",
    subtitle: "Travaux de zinguerie à Perpignan",
    description:
       "Travaux de zinguerie comprenant pose et entretien de gouttières, chéneaux, rives et entourages de cheminées à Perpignan. Solutions fiables et durables pour protéger les bâtiments contre les infiltrations d’eau.",
    image: {
      src: "/zinguerie.png",
      alt: "Travaux de zinguerie et pose de gouttières"
    },
    keywords: ["zinguerie", "gouttières"],
    cta: "Zinguerie & gouttières"
  },
  {
    slug: "etancheite",
    title: "Travaux d’étanchéité",
    subtitle: "Étanchéité EPDM et toit terrasse",
    description:
      "Étanchéité de toits plats et terrasses par membrane EPDM, bitume ou étanchéité liquide à Perpignan. Protection complète contre l’humidité pour prolonger la durée de vie et garantir la sécurité de la toiture.",
    image: {
      src: "/etancheite.png",
      alt: "Étanchéité de toiture terrasse EPDM"
    },
    keywords: ["étanchéité EPDM", "toiture terrasse"],
    cta: "Travaux d’étanchéité"
  },
  {
    slug: "traitement-hydrofuge",
    title: "Traitement hydrofuge",
    subtitle: "Protection et longévité de votre toiture",
    description:
      "Application de traitement hydrofuge sur toiture à Perpignan. Résine protectrice empêchant l’humidité et les mousses, prolongeant la longévité et conservant l’esthétique du toit.",
    image: {
      src: "/hydrofuge.png",
      alt: "Traitement hydrofuge de toiture"
    },
    keywords: ["traitement hydrofuge"],
    cta: "Traitement hydrofuge"
  },
  {
    slug: "nettoyage-toiture",
    title: "Nettoyage de toiture",
    subtitle: "Démoussage et entretien de toit",
    description:
      "Nettoyage et démoussage professionnels de toiture à Perpignan. Élimination de mousses, lichens et salissures, restauration de l’aspect du toit et prévention des infiltrations pour une durabilité optimale.",
    image: {
      src: "/nettoyage.png",
      alt: "Nettoyage et démoussage de toiture"
    },
    keywords: ["nettoyage toiture", "démoussage"],
    cta: "Nettoyage de toiture"
  },
  {
    slug: "nettoyage-facade",
    title: "Nettoyage façade & terrasse",
    subtitle: "Nettoyage haute pression",
    description:
      "Nettoyage haute pression de façades, terrasses et bardages à Perpignan. Élimination des salissures, moisissures et traces de pollution pour redonner un aspect propre et prolonger la durée de vie des matériaux.",
    image: {
      src: "/facades.png",
      alt: "Nettoyage de façade à haute pression"
    },
    keywords: ["nettoyage façade"],
    cta: "Nettoyage façade & terrasse"
  } 
];

  return (
  <section className={styles.container}>
    <h2 className={styles.h2}> Nos Services </h2>
    <section className={styles.cardsContainer}>
      {services.map((service) => (
        <article key={service.slug} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={false}
              className={styles.image}
            />
          </div>
          <h3 className={styles.h3}>{service.title}</h3>
            <p className={styles.subtitle}>{service.subtitle}</p>
            <p className={styles.description}>{service.description}</p>
          <Link href={`/${service.slug}`} className={styles.btn}>
            {service.cta}
          </Link>
        </article>
      ))}
    </section>
  </section>
  )
}
