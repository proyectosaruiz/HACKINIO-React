import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { sendHackinionService } from '../../services/services';

export const NewHackinion = () => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [data, setData] = useState('');

  const handeInput = (ev) => {
    setData({ ...data, [ev.target.id]: ev.target.value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const hackinion = await sendHackinionService(data, token);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
    }
  };
  return (
    <>
      <h2>Nuevo comentario</h2>
      <form className="">
        <fieldset>
          <label htmlFor="text">Title</label>
          <input
            type="text"
            name="titulo"
            id="title"
            required
            onChange={handeInput}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="text">Content</label>
          <input
            type="text"
            name="contentido"
            id="content"
            required
            onChange={handeInput}
          />
        </fieldset>
        <button onClick={handleForm}>Send Hack</button>
        {error ? <p>{error}</p> : null}
      </form>
    </>
  );
};
