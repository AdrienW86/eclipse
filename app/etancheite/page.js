import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
  const serviceData = {
    title: "Travaux d’étanchéité",
    description:
      "Étanchéité de toitures plates et terrasses par membrane EPDM, bitume ou étanchéité liquide afin de protéger durablement les bâtiments contre l’humidité et les infiltrations.",
    faqs: [
      {
        question: "Pourquoi l’étanchéité est-elle indispensable ?",
        answer:
          "Une mauvaise étanchéité peut entraîner infiltrations, moisissures et dégradations structurelles."
      },
      {
        question: "Quelle solution pour un toit terrasse ?",
        answer:
          "Les membranes EPDM et les systèmes bitumineux sont particulièrement adaptés."
      },
      {
        question: "Quelle est la durée de vie d’une étanchéité ?",
        answer:
          "Selon la technique utilisée, elle peut atteindre 20 à 40 ans."
      }
    ]
  };
  return (
    <>
        <Banner 
          title="Couvreur à Perpignan et Rivesaltes" 
          url = "/etancheite.png"
          description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
        />
      <Description {...serviceData} />
    </>
  )
}