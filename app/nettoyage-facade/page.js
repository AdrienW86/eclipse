import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
  const serviceData = {
    title: "Nettoyage façades & terrasses",
    description:
      "Nettoyage haute pression des façades, terrasses et bardages pour éliminer salissures, mousses et traces de pollution, tout en respectant les matériaux et leur durabilité.",
    faqs: [
      {
        question: "Le nettoyage abîme-t-il les surfaces ?",
        answer:
          "Les techniques sont adaptées au support afin d’éviter toute détérioration."
      },
      {
        question: "Quelles surfaces peuvent être nettoyées ?",
        answer:
          "Façades, terrasses, bardages, murs extérieurs et sols."
      },
      {
        question: "Quand effectuer un nettoyage de façade ?",
        answer:
          "Dès l’apparition de salissures, mousses ou traces de pollution."
      }
    ]
  };
  return (
    <>
      <Banner 
        title="Couvreur à Perpignan et Rivesaltes" 
        url = "/facades.png"
        description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
      />
        <Description {...serviceData} />
    </>
  )
}
