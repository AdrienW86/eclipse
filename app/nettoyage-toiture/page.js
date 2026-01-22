import React from 'react'
import Banner from '@/components/Banner/Banner'
import Description from '@/components/Description/Description'

export default function page() {
  const serviceData = {
    title: "Nettoyage de toiture",
    description:
      "Nettoyage et démoussage de toiture permettant d’éliminer mousses, lichens et salissures tout en préservant les matériaux et en prolongeant la durée de vie du toit.",
    faqs: [
      {
        question: "Pourquoi nettoyer une toiture ?",
        answer:
          "Les mousses retiennent l’humidité et accélèrent la dégradation des matériaux."
      },
      {
        question: "À quelle fréquence effectuer un nettoyage ?",
        answer:
          "Tous les 2 à 5 ans selon l’environnement et l’exposition."
      },
      {
        question: "Les produits utilisés sont-ils agressifs ?",
        answer:
          "Les traitements sont adaptés au type de couverture afin de préserver les matériaux."
      }
    ]
  };
  return (
    <>
      <Banner 
        title="Couvreur à Perpignan et Rivesaltes" 
        url = "/nettoyage.png"
         description = "Artisan couvreur Perpignan – Rénovation de toiture – Infiltration d'eau – Démoussage et nettoyage des tuiles – Charpente, zinguerie & isolation – Remplacement de tuiles" 
      />
      <Description {...serviceData} />
    </>
  )
}
