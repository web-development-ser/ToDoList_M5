import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import Header from "../../components/Header/Header";

const Login = () => {
  return (
    <div className="page">
      <Header />
      <section className="container_form">
        <Form className="form">
          <h2>Bem vindo ao ToDoList!</h2>
          <Form.Group
            className="mb-3 email form-group "
            controlId="formGroupEmail"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>

          <Form.Group
            className="mb-3 password form-group"
            controlId="formGroupPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Deseja salvar seus dados no navegador?"
          />

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
