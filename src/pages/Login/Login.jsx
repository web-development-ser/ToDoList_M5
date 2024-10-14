import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { data } from "@remix-run/router";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function tryLogin(e) {
    e.preventDefault();

    // const response = await axios.post(
    //   "https://todo-list-api-g8vi.onrender.com/login",
    //   formData
    // );

    // if (response.status == 200) {
    //   navigate("/tasks");
    // }

    navigate("tasks");
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="page">
      <Header />
      <section className="container_form">
        <Form onSubmit={tryLogin} className="form">
          <h2>Bem vindo a ListaDeTarefas</h2>
          <Form.Group
            className="mb-3 email form-group "
            controlId="formGroupEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              type="email"
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 password form-group"
            controlId="formGroupPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Deseja salvar seus dados no navegador?"
          />

          <Button type="submit">Login</Button>

          <div>
            <a href="">Recuperar Senha?</a>
            <a href="">Novo cadastro!</a>
          </div>
        </Form>
      </section>
    </div>
  );
};

export { Login };
