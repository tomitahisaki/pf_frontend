import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link legacyBehavior href="/">
          <a className={styles.anchor}>index</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.anchor}>about</a>
        </Link>
        <Link legacyBehavior href="/spotify">
          <a className={styles.anchor}>Spotify</a>
        </Link>
        <Link legacyBehavior href="/todos">
          <a className={styles.anchor}>TODOリスト</a>
        </Link>
      </header>
    </>
  );
}
