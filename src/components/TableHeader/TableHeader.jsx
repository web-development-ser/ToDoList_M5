import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <thead>
      <tr className={styles["table-header"]}>
        <th className={styles["first-header"]}>Feito?</th>
        <th>Titulo</th>
        <th>Prazo</th>
        <th>Deletar</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
