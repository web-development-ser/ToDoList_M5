import { CloseButton } from "react-bootstrap";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todoItem, deleteProduct }) => {
  return (
    <tr className={styles["todo-item"]}>
      <th className={styles["close-button"]}>
        <input type="checkbox" name="" id="" />
      </th>
      <th>{todoItem.produto}</th>
      <th className={styles["expire-time"]}>{todoItem.validade}</th>
      <th className={styles["delete-button"]}>
        <CloseButton onClick={deleteProduct} />
      </th>
    </tr>
  );
};

export default TodoItem;
