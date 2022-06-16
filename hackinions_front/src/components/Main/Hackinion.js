import { useContext } from "react";
import { NewVote } from "./NewVote";
import { AuthContext } from "../../context/AuthContext";
import { deleteHackinionService } from "../../services/services";

export const Hackinion = ({ hackinion, removeHack }) => {
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
        <p> Autor: {hackinion.name}</p>
        <p> {new Date(hackinion.created_at).toLocaleString()}</p>
      </div>
      {user && user.id === hackinion.userId ? (
        <section>
          <button
            className="delete"
            onClick={() => {
              if (window.confirm("Esta seguro"))
                deleteHackinion(hackinion.hackId);
            }}
          >
            X
          </button>
        </section>
      ) : null}
      {user ? <NewVote hack={hackinion.hackId} /> : null}
    </article>
  );
};
