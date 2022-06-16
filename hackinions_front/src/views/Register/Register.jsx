import React from "react";
import { useState, useContext } from "react";
import { ErrorMessage } from "../../components/Error/ErrorMessage";
import Fieldform from "../../components/Fieldform/Fieldform";
import Button from "../../components/Button/Button";
import { registerUserService, logInUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  //   const handleForm = async (e) => {
  //     // e.preventDefault();
  //     // try {
  //     //   const token = await logInUserService({ email, password });
  //     //   login(token);
  //     //   navigate("/");
  //     // } catch (error) {
  //     //   setError(error.message);
  //     // }
  //   };

  const handleForm = async (e) => {
    e.preventDefault();
    // if (pass1 !== pass2) {
    //   setError("Passwords do not match");
    //   return;
    // }

    try {
      await registerUserService({
        username: userName,
        name: firstName,
        last_name: lastName,
        bio,
        email,
        password,
      });
      const token = await logInUserService({ email, password });

      login(token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="register-main">
      {" "}
      <form onSubmit={handleForm}>
        <p className="titulohack">Datos de registro</p>

        <Fieldform
          placeholder="Apodo"
          type="Apodo"
          name="Apodo"
          id="apodo"
          value={userName}
          change={(e) => setUserName(e.target.value)}
          maxlength="18"
        ></Fieldform>

        <Fieldform
          placeholder="Nombre"
          type="Name"
          name="name"
          id="name"
          value={firstName}
          change={(e) => setFirstName(e.target.value)}
          maxlength="18"
        ></Fieldform>
        <Fieldform
          placeholder="Apellido"
          type="LastName"
          name="LastName"
          id="LastName"
          value={lastName}
          change={(e) => setLastName(e.target.value)}
        ></Fieldform>
        <Fieldform
          placeholder="Biografía"
          type="Bio"
          name="Bio"
          id="Bio"
          value={bio}
          change={(e) => setBio(e.target.value)}
          maxlength="250"
          text={true}
        ></Fieldform>

        <Fieldform
          placeholder="Email"
          type="email"
          name="email"
          id="email"
          value={email}
          required={true}
          change={(e) => setEmail(e.target.value)}
        ></Fieldform>
        <Fieldform
          placeholder="Escribe tu contraseña"
          type="password"
          name="pass"
          id="pass"
          value={password}
          required={true}
          change={(e) => setPassword(e.target.value)}
        ></Fieldform>

        <Button type="submit" primary={true}>
          <p className="button-text">Enviar Registro</p>
        </Button>
        {error ? <ErrorMessage message={error}></ErrorMessage> : null}
      </form>
    </main>
  );
}

export default Register;
