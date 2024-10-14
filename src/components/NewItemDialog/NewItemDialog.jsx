import { Card, Button, Form, Stack } from "react-bootstrap";
import styles from "./NewItemDialog.module.css";

const NewItemDialog = ({ dialogValues, setDialogValues, createNew }) => {
  const handleInput = (e, propName, checkbox = false) => {
    if (checkbox) {
      dialogValues[propName] = e.target.checked;
    } else {
      dialogValues[propName] = e.target.value;
    }
    setDialogValues({ ...dialogValues });
  };

  return (
    <Card className={styles["dialog-card"]}>
      <h1 className={styles.title}>Nova Tarefa</h1>
      <form action="" onSubmit={createNew}>
        <Stack gap="0">
          <Form.Label>Título:</Form.Label>
          <Form.Control
            value={dialogValues.produto}
            onChange={(e) => handleInput(e, "produto")}
            required
            placeholder="Ex.: Jogar Valorant"
            type="text"
          />
        </Stack>
        <Stack>
          <Form.Label>Prazo:</Form.Label>
          <Form.Control
            value={dialogValues.validade}
            onChange={(e) => handleInput(e, "validade")}
            required
            placeholder="2024/02/10"
            type="date"
          />
        </Stack>

        <div>
          <span>Prioridade:</span>
          <Form.Check
            className={styles["priority-checkbox"]}
            onChange={(e) => handleInput(e, "prioridade", true)}
            checked={dialogValues.prioridade}
          />
        </div>
        <Button type="submit" variant="primary">
          Criar
        </Button>
      </form>
    </Card>
  );
};

export default NewItemDialog;
