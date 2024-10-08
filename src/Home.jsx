// Redenerize seus componentes aqui...

import { Login } from "./components/login/login";
import "./index.css";
import TodoList from "./pages/TodoList";

const Home = () => {
  const apiFakeData = [
    {
      produto: "Coquinha gelada",
      validade: "2028",
      prioridade: true,
    },
    {
      produto: "Arroz paia",
      validade: "2028",
      prioridade: false,
    },
  ];

  return (
    <>
      <main>
        {/* <Login />
         */}

        <TodoList apiData={apiFakeData} />
      </main>
    </>
  );
};

export { Home };
