import styles from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <thead>
      <tr className={styles["table-header"]}>
        <th className={styles["first-header"]}>Comprado?</th>
        <th>Produto</th>
        <th>Validade</th>
        <th>Deletar</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
