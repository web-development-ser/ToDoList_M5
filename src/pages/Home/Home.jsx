import { Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <h1>Lista de Compras!</h1>
            <p>
              Organize suas compras de forma prática e eficiente, convidando
              amigos e familiares para colaborar na criação e edição da sua
              lista. Compartilhe o link e veja em tempo real todos ajudando a
              adicionar e organizar os itens necessários para suas compras.
              <br />
              <br />
              Faça suas compras de maneira inteligente e com colaboração
              garantida!
            </p>
            <div className={styles["button-bar"]}>
              <Button href="login">Login</Button>
              <Button href="products" variant="secondary">
                Produtos
              </Button>
            </div>
          </div>
          <img
            width="500px"
            height="500px"
            src="https://media.istockphoto.com/id/1313109858/pt/vetorial/healthy-food-shopping-list-concept-flat-vector-illustration-healthy-vegetables-for-a.jpg?s=612x612&w=0&k=20&c=0sLYql-lpDIpGAUoeHW_7JyaK2eDoZhdn4GIJZDebsQ="
            alt=""
          />
        </div>
      </main>
    </>
  );
};

export default Home;
