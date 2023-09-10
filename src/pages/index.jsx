import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
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
