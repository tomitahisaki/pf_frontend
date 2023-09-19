import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { MediaCard } from "@/components/Todo/todo";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TodoDetail() {
    const router = useRouter();
    const todoId = router.query.todoId
    const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/todos/${todoId}`);
        setTodo(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  if ( !todoId ){
    return <div>Loading...</div>
  }

  return (
    <>
      <div className={styles.main}>
        <Header />
    
        <Main title="TODOリスト詳細" description="">
          {<div>簡単なTODOリストの詳細です</div>}
        </Main>
    
        <MediaCard todoDetail={todo} />
    
        <Footer />
      </div>
    </>
  );
}
