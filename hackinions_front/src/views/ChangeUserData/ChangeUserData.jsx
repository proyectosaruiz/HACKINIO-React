import React, { useState } from "react";
import { useContext } from "react";
import Button from "../../components/Button/Button";
import { AuthContext } from "../../context/AuthContext";
import useUser from "../../hooks/useUser";
import "./ChangeUserData.css";
import Fieldform from "../../components/Fieldform/Fieldform";
import { ErrorMessage } from "../../components/Error/ErrorMessage";
import { editUserService } from "../../services/services";
import { useNavigate } from "react-router-dom";

const ChangeUserData = () => {
  const { token } = useContext(AuthContext);
  const { user } = useUser(token);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService(
        {
          username: userName ? userName : user.username,
          name: firstName ? firstName : user.name,
          last_name: lastName ? lastName : user.last_name,
          bio: bio ? bio : user.bio,
          email: email ? email : user.email,
        },
        token
      );
      navigate("/userInfo");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="change-user-data-container">
        <form onSubmit={handleForm}>
          <p className="titulohack">Modificar datos</p>
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
            text={true}
          ></Fieldform>

          <Fieldform
            placeholder={user.email}
            type="email"
            name="email"
            id="email"
            value={email}
            change={(e) => setEmail(e.target.value)}
          ></Fieldform>

          <Button type="submit" primary={true}>
            <p className="button-text">Guardar nuevos datos</p>
          </Button>
          {error ? <ErrorMessage message={error}></ErrorMessage> : null}
        </form>
      </div>
    </div>
  );
};

export default ChangeUserData;
