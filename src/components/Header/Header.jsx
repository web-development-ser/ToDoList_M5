import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>ListaDeProdutos</h2>
      <nav>
        <ul>
          <a href="/">HOME</a>
          <a href="/login">LOGIN</a>
          <a href="/products">PRODUTOS</a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
