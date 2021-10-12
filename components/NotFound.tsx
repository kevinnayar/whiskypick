import styles from './notfound.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFoundTitle}>
        404
      </h1>

      <div className={styles.notFoundContent}>
        <h2 className={styles.notFoundSubtitle}>
          This page could not be found
        </h2>
      </div>
    </div>
  );
}
