import React from 'react';
import styles from './zone.module.css';

export default function Zone() {
  const interventionZones = [
    "Perpignan",
    "Saint-Estève",
    "Cabestany",
    "Bompas",
    "Pia",
    "Rivesaltes",
    "Canet-en-Roussillon",
    "Le Soler",
    "Toulouges",
    "Villeneuve-de-la-Raho",
    "Elne",
    "Saint-Hippolyte",
    "Salses-le-Château",
    "Espira-de-l'Agly",
    "Claira",
    "Eus",
    "Villelongue-dels-Monts",
    "Collioure",
    "Palau-del-Vidre",
    "Céret",
    "Prades"
  ];

  return (
    <section className={styles.zone}>
      <h3 className={styles.h3}>Intervention dans les Pyrénées-Orientales et ses alentours</h3>
      <ul className= {styles.ul}>
        {interventionZones.map((ville, index) => (
          <li key={index} className={styles.li}>{ville} </li>
        ))}
      </ul>
    </section>
  );
}
