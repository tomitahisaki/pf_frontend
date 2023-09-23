import { useState } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import SelectSmall from "@/components/Layouts/selectBox";

export function EditTodo(props) {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const getTodo = async () => {
      try {
        // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/todos/${todoId}`);
        //
        // const { title, description, status } = res.deta;
        const { id, title, description, status } = props.todoDetail;
        setId(id);
        setTitle(title);
        setDescription(description);
        setStatus(status);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      getTodo();
    }
  }, []);

  if (!id) {
    return <div>Loading...</div>;
  }

  const handleValueChange = (newValue) => {
    setStatus(newValue);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3010/todos${id}`, {
        todo: {
          title,
          description,
          status,
        },
      });
      setTitle("");
      setDescription("");
      setStatus("");

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        sx={{
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Textarea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            required
            sx={{ mb: 1 }}
          />
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            required
            sx={{ mb: 1 }}
            minRows={4}
          />

          <SelectSmall handleValueChange={handleValueChange} />

          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </>
  );
}
