import { useEffect, useState } from "react";
import axios from "axios";
import { BasicGrid } from "@/components/Layouts/basicGrid";

export function Todo() {
  const apiBaseURI = process.env.RAILS_BASE_API;
  console.log(`${apiBaseURI}`);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(`http://localhost:3010/todos`);
        // console.log(res.data);
        setTodos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getTodos();
  }, []);

  return (
    <>
      <BasicGrid ary={todos} />
    </>
  );
}
