import styles from './mentions.module.css';

export default function Mentions() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mentions légales – Eclipse</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Éditeur du site</h2>
        <p className={styles.text}><strong>Nom commercial :</strong> Eclipse</p>
        <p className={styles.text}><strong>Dirigeant :</strong> Andy Henri LARROUTIS</p>
        <p className={styles.text}><strong>Adresse :</strong> 2 Rue Paul Bert, 66600 Rivesaltes, France</p>
        <p className={styles.text}><strong>Téléphone :</strong> 06 75 60 59 40</p>
        <p className={styles.text}><strong>E-mail :</strong> <a className={styles.link} href="mailto:contact@eclipsetoiture.fr">contact@eclipsetoiture.fr</a></p>
        <p className={styles.text}><strong>SIREN :</strong> 802 920 447</p>
        <p className={styles.text}><strong>SIRET :</strong> 80292044700033</p>
        <p className={styles.text}><strong>Code APE :</strong> 8122Z – Autres activités de nettoyage des bâtiments et nettoyage industriel</p>
        <p className={styles.text}><strong>Code APRM :</strong> 43.91B-Z – Travaux de couverture par éléments</p>
        <p className={styles.text}><strong>Date de début d’activité :</strong> 03/07/2023</p>
        <p className={styles.text}><strong>Activité principale :</strong> Couverture, nettoyage de toiture, imperméabilisation, zinguerie</p>
        <p className={styles.text}><strong>Forme juridique :</strong> Artisan individuel</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Hébergement</h2>
        <p className={styles.text}><strong>Hébergeur :</strong> Vercel Inc.</p>
        <p className={styles.text}><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
        <p className={styles.text}><strong>Site web :</strong> <a className={styles.link} href="https://vercel.com">https://vercel.com</a></p>
        <p className={styles.text}><strong>E-mail :</strong> support@vercel.com</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Propriété intellectuelle</h2>
        <p className={styles.text}>
          Le contenu de ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive d’Eclipse ou de ses partenaires et est protégé par le droit d’auteur et la propriété intellectuelle. Toute reproduction, modification ou utilisation, totale ou partielle, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Responsabilité</h2>
        <p className={styles.text}>
          Eclipse met tout en œuvre pour assurer l’exactitude des informations publiées sur ce site. Cependant, l’entreprise ne peut être tenue responsable des erreurs, omissions ou d’éventuelles interruptions du service.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Données personnelles</h2>
        <p className={styles.text}>
          Les informations collectées via le site (formulaire de contact, newsletter, etc.) sont utilisées uniquement pour répondre à vos demandes. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données en nous contactant à <a className={styles.link} href="mailto:contact@eclipsetoiture.fr">contact@eclipsetoiture.fr</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.text}>
          Le site peut utiliser des cookies pour améliorer la navigation et analyser l’audience. Vous pouvez paramétrer votre navigateur pour refuser les cookies si vous le souhaitez.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Litiges</h2>
        <p className={styles.text}>
          Tout litige relatif à l’utilisation du site ou à l’activité de l’entreprise Eclipse sera soumis à la loi française. En cas de litige, compétence exclusive des tribunaux français.
        </p>
      </section>
    </div>
  );
}

