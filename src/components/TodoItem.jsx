import { Stack } from "react-bootstrap";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoItem }) => {
  return (
    <Stack className={styles["todo-item"]} direction="horizontal">
      <input type="checkbox" name="" id="" />
      <span>{todoItem.produto}</span>
      <button>X</button>
    </Stack>
  );
};

export default TodoItem;
