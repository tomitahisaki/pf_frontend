import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { EditTodo } from "@/components/Todo/EditTodoForm";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditDetail() {
  const router = useRouter();
  const todoId = router.query.todoId;
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/todos/${todoId}`);
        setTodo(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  if (!todoId) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.main}>
        <Header />

        <Main title="TODOリスト編集" description="">
          {<div>簡単なTODOリストの編集ページです</div>}
        </Main>

        <EditTodo todoDetail={todo} />

        <Footer />
      </div>
    </>
  );
}
