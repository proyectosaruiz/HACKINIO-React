import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { sendHackinionService } from '../../services/services';

export const NewHackinion = ({ addHack, id }) => {
  const { token } = useContext(AuthContext);
  const [error, setError] = useState('');
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
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
    }
  };
  return (
    <>
      <main className="App-main">
        <p>Nuevo comentario</p>
        <form className="">
          <div>
            <input
              type="text"
              name="titulo"
              id="title"
              required
              onChange={handeInput}
              placeholder="Titulo"
            />
          </div>
          <div>
            <input
              type="text"
              name="contentido"
              id="content"
              required
              onChange={handeInput}
              placeholder="Comentario"
            />
          </div>
          <button type="submit" onClick={handleForm}>
            Enviar comentario
          </button>
          {error ? <p>{error}</p> : null}
        </form>
      </main>
    </>
  );
};
