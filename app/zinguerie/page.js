import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
  const serviceData = {
    title: "Zinguerie & gouttières",
    description:
      "Travaux de zinguerie comprenant la pose, la réparation et l’entretien des gouttières, chéneaux, rives et entourages de cheminées afin d’assurer une évacuation efficace des eaux pluviales.",
    faqs: [
      {
        question: "Pourquoi la zinguerie est-elle importante ?",
        answer:
          "Une zinguerie défectueuse peut provoquer des infiltrations et des dégradations de façade ou de charpente."
      },
      {
        question: "Quels matériaux sont utilisés ?",
        answer:
          "Le zinc est le plus courant, mais l’aluminium ou le cuivre peuvent également être utilisés."
      },
      {
        question: "Quand faut-il remplacer des gouttières ?",
        answer:
          "En cas de fuites, de déformations ou de mauvaise évacuation des eaux."
      }
    ]
  };
  return (
    <>
      <Banner 
        title="Couvreur à Perpignan et Rivesaltes" 
        url = "/zinguerie.png"
        description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
      />
      <Description {...serviceData} />
    </>
  )
}