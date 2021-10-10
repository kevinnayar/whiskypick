import styles from './card.module.css';

type CardProps = {
  link: string;
  imageSrc?: string;
  title: string;
  subtitle: string;
  rating?: number
};

export default function Card({ link, imageSrc, title, subtitle, rating }: CardProps) {
  return (
    <div className={styles.card}>
      <a href={link}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardSubtitle}>{subtitle}</p>
      </a>
    </div>
  );
}
