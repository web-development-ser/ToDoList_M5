import { Card, Button } from "react-bootstrap";
import styles from "./NewItemDialog.module.css";

const NewItemDialog = ({ dialogValues, setDialogValues, createNew }) => {
  return (
    <Card className={styles["dialog-card"]}>
      <h1 className={styles.title}>Novo Produto</h1>
      <form action="" onSubmit={createNew}>
        <input
          value={dialogValues.produto}
          onChange={(e) =>
            setDialogValues({ ...dialogValues, produto: e.target.value })
          }
          required
          placeholder="Ex.: Coquinha Gelada"
          type="text"
        />
        <input
          value={dialogValues.validade}
          onChange={(e) =>
            setDialogValues({ ...dialogValues, validade: e.target.value })
          }
          required
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
        <Button type="submit" variant="primary">
          Criar
        </Button>
      </form>
    </Card>
  );
};

export default NewItemDialog;
