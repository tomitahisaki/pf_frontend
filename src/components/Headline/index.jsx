import styles from "./Headline.module.scss";

export function Headline(props) {
  return (
    <>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div>{props.children}</div>
    </>
  );
}
