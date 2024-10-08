import { Card, Stack } from "react-bootstrap";
import TodoItem from "../components/TodoItem";

import styles from "./TodoList.module.css";

const TodoList = ({ apiData }) => {
  return (
    <div className={styles.page}>
      <Card className={styles.container}>
        <h1 className={styles.title}>Todo list</h1>
        <Stack className={styles.header} direction="horizontal">
          <input placeholder="Add your product" type="text" />
          <button>ADD</button>
        </Stack>

        <Stack direction="vertical">
          {apiData.map((todoItem) => (
            <TodoItem key={todoItem.produto} todoItem={todoItem} />
          ))}
        </Stack>
      </Card>
    </div>
  );
};

export default TodoList;
