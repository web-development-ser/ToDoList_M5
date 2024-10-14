import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2024 ListaDeProdutos. Todos os direitos reservados.</p>
        <ul className={styles.socialMedia}>
          <li>
            <a href="https://github.com/web-development-ser/ToDoList_M5" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i> GitHub
            </a>
          </li>
          <li>
            <a href="https://docs.google.com/presentation/d/1RfixjQE2SX4HKRONv0AokzqHszax_GZoYurPWyoc64c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <i className="" /> Apresentação
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;