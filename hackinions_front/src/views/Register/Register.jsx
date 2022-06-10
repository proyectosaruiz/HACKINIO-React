import React from "react";
import { useState } from "react";
import { ErrorMessage } from "../../components/ErrorMessage";
import Fieldform from "../../components/Fieldform/Fieldform";
import Button from "../../components/Button/Button";
import { registerUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";
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
          text="Apodo"
          htmlFor=""
          type="Name"
          name="name"
          id="name"
          value={userName}
          change={(e) => setUserName(e.target.value)}
        ></Fieldform>

        <Fieldform
          text="Nombre"
          htmlFor=""
          type="Name"
          name="name"
          id="name"
          value={firstName}
          change={(e) => setFirstName(e.target.value)}
        ></Fieldform>
        <Fieldform
          text="Apellido"
          htmlFor=""
          type="Name"
          name="name"
          id="name"
          value={lastName}
          change={(e) => setLastName(e.target.value)}
        ></Fieldform>
        <Fieldform
          text="Biografía"
          htmlFor=""
          type="Name"
          name="name"
          id="name"
          value={bio}
          change={(e) => setBio(e.target.value)}
        ></Fieldform>

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

        <Button type="submit" primary={true}>
          <p className="register-button-text">Enviar Registro</p>
        </Button>
        {error ? <ErrorMessage message={error}></ErrorMessage> : null}
      </form>
    </main>
  );
}

export default Register;
