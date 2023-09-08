import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Thanks by <img src="./vercel.svg" alt="logo" className={styles.logo} />
      </footer>
    </>
  );
}
