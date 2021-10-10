import styles from './grid.module.css';

export default function Grid(props: { children: any }) {
  return <div className={styles.grid}>{props.children}</div>;
}
