import { useContext } from "react";
// import { NewVote } from "./NewVote";
import { AuthContext } from "../../context/AuthContext";
import { deleteHackinionService } from "../../services/services";
import Button from "../Button/Button";

export const Hackinion = ({ hackinion, removeHack }) => {
  console.log(hackinion);
  const { token, user } = useContext(AuthContext);
  const deleteHackinion = async (id) => {
    try {
      const hackinion = await deleteHackinionService({ id, token });
      if (hackinion) {
        removeHack();
      }
    } catch (error) {}
  };
  return (
    <article className="hack">
      <p className="hack-title">{hackinion.title}</p>
      <p className="hack-comment">{hackinion.content}</p>
      <div className="hack-user-data">
        <p> Autor: {hackinion.username}</p>
        <p> {new Date(hackinion.created_at).toLocaleString()}</p>
      </div>
      {user && user.id === hackinion.userId ? (
        <section className="delete">
          <Button
            type="submit"
            primary={true}
            onClick={() => {
              if (
                window.confirm(
                  "¿Estás seguro de que deseas eliminar el comentario?"
                )
              )
                deleteHackinion(hackinion.hackId);
            }}
          >
            <p className="button-text">Eliminar comentario</p>
          </Button>
        </section>
      ) : null}
      {/* {user ? <NewVote hack={hackinion.hackId} /> : null} */}
    </article>
  );
};
