import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/login";
import TodoList from "./pages/TodoList/TodoList";

const App = () => {
  const apiFakeData = [
    {
      produto: "Coquinha gelada",
      validade: "01/09/2022",
      prioridade: true,
    },
    {
      produto: "Arroz paia",
      validade: "10/02/2021",
      prioridade: false,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/products" element={<TodoList apiData={apiFakeData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
