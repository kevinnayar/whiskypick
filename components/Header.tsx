import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerLogo}>
        <a href="/">whiskypick</a>
      </h1>

      <nav className={styles.headerMainNav}>
        <a className={styles.active} href="/">
          Favorites
        </a>
        <a href="/whiskies">Whiskies</a>
        <a href="/users">Users</a>
      </nav>
    </header>
  );
}
