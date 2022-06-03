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
        <p>Hackinions</p>
        {!user && (
          <div className="navbar-access-container">
            <Link to={"/login"} className="navbar-link">
              Login
            </Link>
            <Link to={"/register"} className="navbar-link">
              Register
            </Link>
          </div>
        )}
        {user && (
          <Button onClick={logOut} className="navbar-link">
            Desconectar
          </Button>
        )}
      </div>
    </div>
  );
}

export default Access;
