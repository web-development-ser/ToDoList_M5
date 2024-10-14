import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Login/login";
import TodoList from "./pages/TodoList/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState([
    {
      produto: "Arrumar a casa",
      validade: "2022-10-10",
      prioridade: true,
    },
    {
      produto: "Ler Senhor dos Aneis",
      validade: "2021-09-09",
      prioridade: false,
    },
  ]);

  const deleteProduct = (index) => {
    setApiData(apiData.filter((item, i) => i != index));
    console.log("test", index);
  };

  useEffect(() => {
    // getApiData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route
          path="/tasks"
          element={<TodoList deleteProduct={deleteProduct} apiData={apiData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
