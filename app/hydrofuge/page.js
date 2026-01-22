import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
  const serviceData = {
    title: "Traitement hydrofuge",
    description:
      "Application d’un traitement hydrofuge permettant de protéger la toiture contre l’humidité, les mousses et le vieillissement prématuré tout en conservant l’aspect des matériaux.",
    faqs: [
      {
        question: "À quoi sert un traitement hydrofuge ?",
        answer:
          "Il empêche l’eau de pénétrer dans les matériaux tout en laissant respirer la toiture."
      },
      {
        question: "Combien de temps le traitement est-il efficace ?",
        answer:
          "Son efficacité s’étend généralement sur plusieurs années."
      },
      {
        question: "Faut-il nettoyer la toiture avant application ?",
        answer:
          "Oui, un nettoyage complet est nécessaire pour garantir l’efficacité du traitement."
      }
    ]
  };
  return (
    <>
      <Banner 
        title="Couvreur à Perpignan et Rivesaltes" 
        url = "/hydrofuge.png"
        description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
      />
      <Description {...serviceData} />
    </>
  )
}
