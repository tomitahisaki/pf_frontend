import { useRouter } from "next/router";
import axios from "axios";

export function DeleteTodoButton(props) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("本当に削除してもよろしいですか？")) {
      return;
    }

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BASE_API}/todos/${props.id}`);

      router.push('/todos');
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleDelete}>
        Delete
      </button>
    </>
  )
}
