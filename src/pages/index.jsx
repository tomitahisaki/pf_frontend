import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count],
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <>
      <div className={styles.main}>
        <Header />
        <h1>{count}</h1>
        <button onClick={handleClick}>ボタン</button>
        <main>
          <Main
            title="個人開発用サイト"
            description="気になるものを作ってみるサイトです"
          >
            {<div>サンプル用 index</div>}
          </Main>
        </main>

        <Footer />
      </div>
    </>
  );
}
