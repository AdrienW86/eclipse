import styles from './politique-confidentialite.module.css';

export default function PolitiqueConfidentialite() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Politique de confidentialité – Eclipse</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Collecte des données personnelles</h2>
        <p className={styles.text}>
          Nous collectons uniquement les informations nécessaires pour répondre à vos demandes via notre site (formulaire de contact, demande de devis, newsletter). Ces données peuvent inclure votre nom, prénom, e-mail et numéro de téléphone.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Utilisation des données</h2>
        <p className={styles.text}>
          Les données collectées sont utilisées exclusivement pour : 
        </p>
        <ul className={styles.list}>
          <li>Répondre à vos demandes et questions</li>
          <li>Envoyer des informations ou newsletters si vous y avez consenti</li>
          <li>Améliorer nos services et la navigation sur le site</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Conservation des données</h2>
        <p className={styles.text}>
          Vos données sont conservées uniquement le temps nécessaire pour répondre à vos demandes et respecter nos obligations légales. Elles ne sont jamais partagées à des tiers à des fins commerciales sans votre consentement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies et traceurs</h2>
        <p className={styles.text}>
          Le site peut utiliser des cookies pour améliorer votre expérience et analyser l’audience. Vous pouvez paramétrer votre navigateur pour refuser les cookies. Les cookies utilisés sont exclusivement :  
        </p>
        <ul className={styles.list}>
          <li>Cookies de navigation pour le bon fonctionnement du site</li>
          <li>Cookies d’analyse pour mesurer le trafic et améliorer le site</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Droits des utilisateurs</h2>
        <p className={styles.text}>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles. Vous pouvez exercer vos droits en nous contactant à : <a className={styles.link} href="mailto:contact@eclipsetoiture.fr">contact@eclipsetoiture.fr</a>.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sécurité</h2>
        <p className={styles.text}>
          Nous mettons en place toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre toute perte, altération ou accès non autorisé.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Modifications de la politique</h2>
        <p className={styles.text}>
          Cette politique de confidentialité peut être mise à jour ponctuellement. La version en ligne est toujours la version la plus récente.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.text}>
          Pour toute question sur la politique de confidentialité ou l’utilisation de vos données, contactez-nous à : <a className={styles.link} href="mailto:contact@eclipsetoiture.fr">contact@eclipsetoiture.fr</a> ou au 06 75 60 59 40.
        </p>
      </section>
    </div>
  );
}
