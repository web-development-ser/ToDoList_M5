import { Card, Stack, Button, Table } from "react-bootstrap";

import styles from "./TodoList.module.css";
import { useState } from "react";
import TableHeader from "../components/TableHeader/TableHeader";
import NewItemDialog from "../components/NewItemDialog/NewItemDialog";
import TableBody from "../components/TableBody/TableBody";

const EMPTY_DIALOG_VALUES = {
  produto: "",
  validade: "",
  prioridade: "",
};

const TodoList = ({ apiData }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogValues, setDialogValues] = useState(EMPTY_DIALOG_VALUES);

  function createNew(e) {
    e.preventDefault();
    console.log(dialogValues); //CHAMAR A API PARA CRIAR
    hideAndClearDialog();
  }

  function hideAndClearDialog() {
    setShowDialog(false);
    setDialogValues(EMPTY_DIALOG_VALUES);
  }

  return (
    <div className={styles.page}>
      <Card className={styles.container}>
        <h1 className={styles.title}>Lista de Produtos</h1>

        <Stack>
          <Table responsive>
            <TableHeader />
            <TableBody items={apiData} />
          </Table>
        </Stack>

        <Button onClick={() => setShowDialog(true)} variant="primary">
          New
        </Button>
      </Card>

      {showDialog && (
        <NewItemDialog
          dialogValues={dialogValues}
          setDialogValues={setDialogValues}
          createNew={createNew}
        />
      )}
    </div>
  );
};

export default TodoList;
