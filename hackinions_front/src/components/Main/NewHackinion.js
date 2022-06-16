import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendHackinionService } from "../../services/services";

import Button from "../../components/Button/Button";
import Fieldform from "../../components/Fieldform/Fieldform";
import { ErrorMessage } from "../Error/ErrorMessage";

export const NewHackinion = ({ addHack, id }) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [data, setData] = useState({});

  const handeInput = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      setData({ ...data, userId: id });
      const hackinion = await sendHackinionService(data, token);

      if (hackinion) {
        addHack();
      }

      addHack(hackinion);
      setData({ ...data, title: "", content: "" });
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
    }
  };
  return (
    <>
      <main className="new-hack-main">
        <p className="titulohack">Nueva Hackinion</p>
        <form>
          <Fieldform
            type="text"
            name="title"
            id="title"
            value={data.title}
            required={true}
            change={handeInput}
            placeholder="Título"
            maxlength="100"
          />
          <Fieldform
            type="text"
            name="content"
            id="content"
            value={data.content}
            required={true}
            change={handeInput}
            placeholder="Comentario"
            text={true}
            maxlength="250"
          />
          <Button type="submit" primary={true} onClick={handleForm}>
            <p className="button-text"> Enviar Hackinion</p>
          </Button>

          {error ? <ErrorMessage message={error}></ErrorMessage> : null}
        </form>
      </main>
    </>
  );
};
