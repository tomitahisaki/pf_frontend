import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useCallback } from "react";

export default function Home() {
  const foo = 1;
  
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);
  
  return (
    <>
      <Header />
      <a 
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>
      <main className={`${styles.main}`}>
        <Main
          title="個人開発用サイト"
          description="気になるものを作ってみるサイトです"
        >
          {<div>サンプル用 index</div>}
        </Main>
      </main>

      <Footer />
    </>
  );
}
