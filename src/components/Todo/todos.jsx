import { useEffect, useState } from "react";
import axios from "axios";
import { BasicGrid } from "@/components/Layouts/basicGrid";

export function Todo() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/todos`);
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
