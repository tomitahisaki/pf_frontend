import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 10) {
      alert("5文字以内の入力");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素が存在する");
        return prevArray;
      }
      const newArray = [...prevArray, text];
      return newArray;
    });
  }, [text]);

  return { array, text, handleChange, handleAdd };
};
