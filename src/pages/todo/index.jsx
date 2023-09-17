import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Todo } from "@/components/Todo/todos";

export default function Home() {
  return (
    <>
      <Header />

      <Main
        title="TODOリスト"
        description=""
      >
        {<div>簡単なTODOリストを作ってみた</div>}
      </Main>

      <Todo />

      <Footer />
    </>
  )
}
