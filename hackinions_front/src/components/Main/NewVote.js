import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { sendVoteService } from "../../services/services";

export const NewVote = (props) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleForm = async (ev) => {
    ev.preventDefault();
    const data = {
      vote: ev.target.value,
    };
    try {
      const vote = await sendVoteService(data, props.hack, token);
    } catch (error) {
      setError(error.message);
    } finally {
    }
  };
  return (
    <>
      <form className="">
        <input
          type="radio"
          name="vote"
          id="vote"
          value="1"
          required
          onChange={handleForm}
        />
        <label htmlFor="text">Me gusta</label>
        <input
          type="radio"
          name="vote"
          id="vote"
          value="-1"
          required
          onChange={handleForm}
        />
        <label htmlFor="text">No me gusta</label>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
