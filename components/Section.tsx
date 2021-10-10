import styles from './section.module.css';

export default function Section(props: { title?: string, children: any }) {
  const { title, children } = props;
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {children}
    </section>
  );
};
