import { Card, Stack, Button } from "react-bootstrap";
import TodoItem from "../components/TodoItem";

import styles from "./TodoList.module.css";
import { useState } from "react";

const TodoList = ({ apiData }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogValues, setDialogValues] = useState({
    produto: "",
    validade: "",
    prioridade: "",
  });

  function createNew() {
    console.log(dialogValues); //CHAMAR A API PARA CRIAR
    hideAndClearDialog();
  }

  function hideAndClearDialog() {
    setShowDialog(false);
    setDialogValues({
      produto: "",
      validade: "",
      prioridade: "",
    });
  }

  return (
    <div className={styles.page}>
      <Card className={styles.container}>
        <h1 className={styles.title}>Todo list</h1>

        <Stack direction="vertical">
          {apiData.map((todoItem) => (
            <TodoItem key={todoItem.produto} todoItem={todoItem} />
          ))}
        </Stack>

        <Button onClick={() => setShowDialog(true)} variant="primary">
          New
        </Button>
      </Card>

      {showDialog && (
        <Card className={styles["dialog-card"]}>
          <h1 className={styles.title}>New Item</h1>
          <form action="">
            <input
              value={dialogValues.produto}
              onChange={(e) =>
                setDialogValues({ ...dialogValues, produto: e.target.value })
              }
              placeholder="Ex.: Coquinha Gelada"
              type="text"
            />
            <input
              value={dialogValues.validade}
              onChange={(e) =>
                setDialogValues({ ...dialogValues, validade: e.target.value })
              }
              placeholder="Ex.: 10/02/2025"
              type="date"
            />
            <div>
              <span>Prioridade:</span>
              <input
                onChange={(e) =>
                  setDialogValues({
                    ...dialogValues,
                    prioridade: e.target.checked,
                  })
                }
                checked={dialogValues.prioridade}
                type="checkbox"
              />
            </div>
            <Button onClick={() => createNew()} variant="primary">
              Create
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default TodoList;
