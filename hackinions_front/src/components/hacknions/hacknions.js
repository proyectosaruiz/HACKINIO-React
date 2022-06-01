import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { deleteHackinionsService } from "../services";
import { AuthContext } from "../context/AuthContext";

export const Hackinions = ({ hackinions, removeHackinions }) => {
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteHackinions = async (id) => {
    try {
      await deleteHackinionsService({ id, token });

      if (removeHackinions) {
        removeHackinions(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <article className="hackinions">
      <p>{hackinions.text}</p>
      {hackinions.image ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${hackinions.image}`}
          alt={hackinions.text}
        />
      ) : null}
      <p>
        By <Link to={`/user/${hackinions.user_id}`}>{hackinions.email}</Link> on{" "}
        <Link to={`/hackinions/${hackinions.id}`}>
          {new Date(hackinions.created_at).toLocaleString()}
        </Link>
      </p>
      {user && user.id === hackinions.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("Are you sure?"))
                deleteHackinions(hackinions.id);
            }}
          >
            Borrar hackinions
          </button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
