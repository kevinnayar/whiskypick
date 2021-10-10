import styles from './cards.module.css';

export default function Cards(props: { children: any }) {
  return <div className={styles.cards}>{props.children}</div>;
}
