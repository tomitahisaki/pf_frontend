import styles from "@/styles/Home.module.scss";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
    <>
      <main className={`${styles.main}`}>
        <Headline title={props.title} description={props.description}>
          {props.children}
        </Headline>
      </main>
    </>
  );
}
