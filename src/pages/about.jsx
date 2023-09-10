import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className={`${styles.main}`}>
        <Main
          title="サイト概要"
          description="駆け出しエンジニアが学習のために作っているサイトです"
        >
          {<div>サンプル用about</div>}
        </Main>
      </main>
      <Footer />
    </>
  );
}
