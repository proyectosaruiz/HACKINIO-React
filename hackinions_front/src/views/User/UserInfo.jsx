import React from "react";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext";
import useUser from "../../hooks/useUser";
import "./UserInfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { token } = useContext(AuthContext);
  const { user } = useUser(token);

  const navigate = useNavigate();

  return (
    <div>
      <div className="userInfo-container-target">
        <div className="userInfo-container">
          <div className="userInfo-p">
            <p>Apodo: {user.username}</p>
            <p>Nombre: {user.name}</p>
            <p>Apellido: {user.last_name}</p>
            <p>Biografía: {user.bio}</p>
            <p>Correo electrònico: {user.email}</p>
          </div>
          <div className="userInfo-button">
            <Button onClick={() => navigate("/changeUserData")} primary={true}>
              <p className="button-text"> Modificar datos</p>
            </Button>
            <Button onClick={() => navigate("/changePass")} primary={true}>
              <p className="button-text"> Modificar contraseña</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
