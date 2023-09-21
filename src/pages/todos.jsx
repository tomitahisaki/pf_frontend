import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { CreateTodoForm } from "@/components/Todo/CreateTodoForm";
import { Todo } from "@/components/Todo/todos";

export default function Todos() {
  return (
    <>
      <Header />

      <CreateTodoForm />

      <Main title="TODOリスト" description="">
        {<div>簡単なTODOリストを作ってみた</div>}
      </Main>

      <Todo />

      <Footer />
    </>
  );
}
