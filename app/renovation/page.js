import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
   const serviceData = {
    title: "Rénovation de toiture",
    description:
      "Rénovation complète de toiture en tuiles, ardoises, zinc ou acier. Travaux adaptés à chaque type de bâtiment afin de garantir solidité, étanchéité et durabilité, dans le respect des normes en vigueur.",
    faqs: [
      {
        question: "Quand faut-il rénover une toiture ?",
        answer:
          "Une rénovation est recommandée en cas de tuiles cassées, infiltrations, affaissement de la charpente ou après plusieurs décennies."
      },
      {
        question: "Quels matériaux peuvent être utilisés ?",
        answer:
          "Tuiles, ardoises, zinc ou acier selon les contraintes techniques et esthétiques."
      },
      {
        question: "La rénovation améliore-t-elle l’isolation ?",
        answer:
          "Oui, les travaux permettent souvent d’améliorer l’isolation thermique et l’étanchéité globale."
      }
    ]
  };
  return (
    <>
      <Banner 
        title="Couvreur à Perpignan et Rivesaltes" 
        url = "/renovation.png"
        description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
      />
      <Description {...serviceData} />
    </>
  )
}