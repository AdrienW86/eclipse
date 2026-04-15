import styles from "./description.module.css";

export default function Description({ 
  title, 
  subtitle,
  descriptions = [],
  list = [],
  faqs = [] 
}) {
  return (
    <div className={styles.background}>
      
      <h1 className={styles.title}>{title}</h1>

      <section className={styles.container}>

        {subtitle && <h2 className={styles.h2}>{subtitle}</h2>}

        {descriptions.map((desc, index) => (
          <p key={index} className={styles.description}>{desc}</p>
        ))}

        {list.length > 0 && (
          <ul className={styles.list}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {faqs.length > 0 && (
          <section className={styles.faq}>
            <h2 className={styles.h2}>Questions fréquentes</h2>

            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.h3}>{faq.question}</h3>
                <p className={styles.p}>{faq.answer}</p>
              </div>
            ))}
          </section>
        )}

      </section>
    </div>
  );
}