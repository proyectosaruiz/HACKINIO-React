import "./Login.css";
import Button from "../../components/Button/Button";
import Fieldform from "../../components/Fieldform/Fieldform";
import { useState, useContext } from "react";
import { logInUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

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
    <main className="App-main">
      {" "}
      <form onSubmit={handleForm}>
        <Fieldform
          text="Email"
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          value={email}
          required={true}
          change={(e) => setEmail(e.target.value)}
        ></Fieldform>
        <Fieldform
          htmlFor="pass"
          type="password"
          text="Contraseña"
          name="pass"
          id="pass"
          value={password}
          required={true}
          change={(e) => setPassword(e.target.value)}
        ></Fieldform>

        <Button text="Enviar"></Button>
        {error ? <p>{error}</p> : null}
      </form>
    </main>
  );
}

export default Login;
