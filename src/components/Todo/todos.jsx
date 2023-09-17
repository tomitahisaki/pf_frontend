import { useEffect, useState } from "react"
import axios from "axios";
import { BasicCard } from "@/components/Layouts/basicCard";

export function Todo() {
  const apiBaseURI = process.env.RAILS_BASE_API;
  console.log(`${apiBaseURI}`)
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/todos`);
        console.log(res.data);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, [])

  const renderTodos = () => {
    return todos.map(todo => (
      <div key={todo.id}>
        <BasicCard 
          title={todo.title}
          description={todo.description}
          status={todo.status}
        />
      </div>
    ))
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}
