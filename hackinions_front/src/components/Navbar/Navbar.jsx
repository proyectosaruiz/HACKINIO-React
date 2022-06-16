import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
function Access() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const logOut = () => {
    logout();
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <div className="navbar-inner-container">
        <p onClick={() => navigate("/")}>Hackinions</p>
        {!user && (
          <div className="navbar-access-container">
            <Link to={"/login"} className="navbar-link">
              Acceder
            </Link>
            <Link to={"/register"} className="navbar-link">
              Regístrate
            </Link>
          </div>
        )}
        {user && (
          <div className="navbar-access-container">
            <Button onClick={logOut} className="navbar-link">
              Desconectar
            </Button>
            <Link to={"/userInfo"} className="navbar-link">
              Datos de {user.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Access;
