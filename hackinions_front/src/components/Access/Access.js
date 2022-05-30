import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Access() {
  const navigate = useNavigate();

  return (
    <>
      <Button click={() => navigate("/login")} text="Iniciar sesión"></Button>
      <Button text="Registrate"></Button>
    </>
  );
}

export default Access;
