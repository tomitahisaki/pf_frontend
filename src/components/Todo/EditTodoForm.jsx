import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import SelectSmall from "@/components/Layouts/selectBox";
import { useRouter } from "next/router";

export function EditTodo(props) {
  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState();
  const router = useRouter();

  useEffect(() => {
    const getTodo = async () => {
      try {
        // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/todos/${todoId}`);
        //
        // const { title, description, status } = res.deta;
        setId(props.todoDetail.id);
        setTitle(props.todoDetail.title);
        setDescription(props.todoDetail.description);
        setStatus(props.todoDetail.status);
      } catch (err) {
        console.log(err);
      }
    };

    if (props.todoDetail.id) {
      getTodo();
    }
  }, [props.todoDetail]);

  if (!id) {
    return <div>Loading...</div>;
  }

  const handleValueChange = (newValue) => {
    setStatus(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_BASE_API}/todos/${id}`, {
        todo: {
          title,
          description,
          status,
        },
      });

      router.push(`/todos/${id}`);
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

          <Button type="submit">Update</Button>
        </form>
      </Box>
    </>
  );
}
