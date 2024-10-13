import { Card, Stack, Button, Table } from "react-bootstrap";
import { useState, useCallback } from "react";
import styles from "./TodoList.module.css";
import TableHeader from "../../components/TableHeader/TableHeader";
import NewItemDialog from "../../components/NewItemDialog/NewItemDialog";
import TableBody from "../../components/TableBody/TableBody";

const TodoList = ({ apiData }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogValues, setDialogValues] = useState({
    produto: "",
    validade: "",
    prioridade: false,
  });

  const createNew = useCallback(
    (e) => {
      e.preventDefault();
      console.log(dialogValues); //CHAMAR A API PARA CRIAR
      hideAndClearDialog();
    },
    [dialogValues]
  );

  const hideAndClearDialog = useCallback(() => {
    setShowDialog(false);
    setDialogValues({
      produto: "",
      validade: "",
      prioridade: false,
    });
  }, []);

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
          Novo Produto
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
