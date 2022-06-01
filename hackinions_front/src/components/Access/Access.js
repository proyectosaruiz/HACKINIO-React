import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Access() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return user ? (
    <section>
      Hola, bienvenido!!!!, <Link to={"/login"}>{user.name}</Link>{" "}
      <Button click={() => logout()} text="Desconectar"></Button>
      {/* <button onClick={() => logout()}>Logout</button> */}
    </section>
  ) : (
    <>
      <Button click={() => navigate("/login")} text="Iniciar sesión"></Button>
      <Button text="Registrate"></Button>
    </>
  );
}

export default Access;
