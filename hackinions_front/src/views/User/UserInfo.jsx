import React, { useState } from "react";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext";
import useUser from "../../hooks/useUser";
import "./UserInfo.css";
import Fieldform from "../../components/Fieldform/Fieldform";
import { ErrorMessage } from "../../components/ErrorMessage";
import { editUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const { token } = useContext(AuthContext);
  const { user } = useUser(token);
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleEditMode = () => {
    setEdit(true);
    setEmail(user.email || "");
    setBio(user.bio || "");
    setLastName(user.last_name || "");
    setFirstName(user.name || "");
    setUserName(user.username || "");
  };
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService(
        {
          username: userName,
          name: firstName,
          last_name: lastName,
          bio,
          email,
        },
        token
      );
      setEdit(false);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {!edit && (
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
              <Button onClick={handleEditMode} primary={true}>
                Modificar datos
              </Button>
              <Button onClick={() => navigate("/changePass")} primary={true}>
                Modificar contraseña
              </Button>
            </div>
          </div>
        </div>
      )}
      {edit && (
        <div className="userInfo-edit-container">
          <form onSubmit={handleForm}>
            <Fieldform
              placeholder={user.username}
              type="Apodo"
              name="Apodo"
              id="apodo"
              value={userName}
              change={(e) => setUserName(e.target.value)}
              maxlength="18"
            ></Fieldform>

            <Fieldform
              placeholder={user.name || "Nombre"}
              type="Name"
              name="name"
              id="name"
              value={firstName}
              change={(e) => setFirstName(e.target.value)}
              maxlength="18"
            ></Fieldform>
            <Fieldform
              placeholder={user.last_name || "Apellido"}
              type="LastName"
              name="LastName"
              id="LastName"
              value={lastName}
              change={(e) => setLastName(e.target.value)}
            ></Fieldform>
            <Fieldform
              placeholder={user.bio || "Biografía"}
              type="Bio"
              name="Bio"
              id="Bio"
              value={bio}
              change={(e) => setBio(e.target.value)}
              maxlength="250"
            ></Fieldform>

            <Fieldform
              placeholder={user.email}
              type="email"
              name="email"
              id="email"
              value={email}
              required={true}
              change={(e) => setEmail(e.target.value)}
            ></Fieldform>

            <Button type="submit" primary={true}>
              <p className="register-button-text">Guardar nuevos datos</p>
            </Button>
            {error ? <ErrorMessage message={error}></ErrorMessage> : null}
          </form>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
