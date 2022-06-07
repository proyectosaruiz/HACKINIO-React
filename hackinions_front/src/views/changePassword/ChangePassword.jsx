import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import { ErrorMessage } from "../../components/ErrorMessage";
import Fieldform from "../../components/Fieldform/Fieldform";
import { changePassService } from "../../services/services";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const { token } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [save, setSave] = useState(false);
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      await changePassService({ password }, token);

      setSave(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="App-main">
      {" "}
      {!save && (
        <form onSubmit={handleForm}>
          <Fieldform
            placeholder="Nueva contraseña"
            type="password"
            name="pass"
            id="pass"
            value={password}
            required={true}
            change={(e) => setPassword(e.target.value)}
          ></Fieldform>

          <Fieldform
            placeholder="Repite contraseña"
            type="password"
            name="pass"
            id="pass"
            value={password2}
            required={true}
            change={(e) => setPassword2(e.target.value)}
          ></Fieldform>

          <Button type="submit" primary={true}>
            <p className="login-button-text">Modificar contraseña</p>
          </Button>

          {error ? <ErrorMessage message={error}></ErrorMessage> : null}
        </form>
      )}
      {save && (
        <div>
          <p>Has cambiado la contraseña correctamente</p>
          <Link to={"/"}>Volver a la página principal</Link>
        </div>
      )}
    </main>
  );
};

export default ChangePassword;
