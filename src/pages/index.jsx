import styles from "@/styles/Home.module.scss";
import { Main } from "@/components/Main";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const handleClick = useCallback(
    (e) => {
      setCount((prevCount) => prevCount + 1);
      return;
    },[count]);

  const handleDisplay = useCallback(
    () => {
      setIsShow((prevIsShow) => {
        // if (isShow) {
        //   return false;
        // }
        // return isShow ? false : true;
        return !prevIsShow;
      });
    }, []);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内の入力");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some(item => item === text)) {
        alert("同じ要素が存在する");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

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
        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button
          onClick={handleDisplay}>
          {isShow ? "非表示" : "表示"}
        </button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>リスト追加</button>
        <ul>
          {array.map((item) => {
            return (
              <li key={item}>{item}</li>
            )
          })}
        </ul>
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
