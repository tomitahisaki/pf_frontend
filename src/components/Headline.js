import styles from "@/styles/Home.module.scss";

export function Headline(props) {
  return (
    <>
      <div className={styles.center}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div>{props.children}</div>
      </div>
    </>
  );
}
