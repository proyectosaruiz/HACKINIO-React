import "./Login.css";
import Button from "../../components/Button/Button";
import Fieldform from "../../components/Fieldform/Fieldform";
import { useState, useContext } from "react";
import { logInUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ErrorMessage } from "../../components/Error/ErrorMessage";

//este es el codigo que tu hiciste, colocado donde yo creo que debe ir
function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="login-main">
      {" "}
      <form onSubmit={handleForm}>
        <p className="titulohack">Iniciar sesión</p>
        <Fieldform
          placeholder="Introduce tu email"
          type="email"
          name="email"
          id="email"
          value={email}
          required={true}
          change={(e) => setEmail(e.target.value)}
        ></Fieldform>
        <Fieldform
          placeholder="Introduce tu contraseña"
          type="password"
          name="pass"
          id="pass"
          value={password}
          required={true}
          change={(e) => setPassword(e.target.value)}
        ></Fieldform>

        <Button type="submit" primary={true}>
          <p className="button-text">Enviar</p>
        </Button>

        {error ? <ErrorMessage message={error}></ErrorMessage> : null}
      </form>
    </main>
  );
}

export default Login;
