import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>ListaDeTarefas</h2>
      <nav>
        <ul>
          <a href="/">HOME</a>
          <a href="/">LOGIN</a>
          <a href="/tasks">TAREFAS</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
