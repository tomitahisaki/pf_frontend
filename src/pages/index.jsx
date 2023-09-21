import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useCounter } from "@/Hooks/useCounter";
import { useInputArray } from "@/Hooks/useInputArray";
import { useBgLightBlue } from "@/Hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { array, text, handleChange, handleAdd } = useInputArray();
  useBgLightBlue();

  return (
    <>
      <div className={styles.main}>
        <Header />

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>リスト追加</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <main>
          <Main title="個人開発用サイト" description="気になるものを作ってみるサイトです">
            {<div>サンプル用 index</div>}
          </Main>
        </main>

        <Footer />
      </div>
    </>
  );
}
