import { useContext } from 'react';
import { NewVote } from './NewVote';
import { AuthContext } from '../../context/AuthContext';
import { deleteHackinionService } from '../../services/services';

export const Hackinion = ({ hackinion, removeHack }) => {
  const { token, user } = useContext(AuthContext);
  const deleteHackinion = async (id) => {
    try {
      const hackinion = await deleteHackinionService({ id, token });
      if (hackinion) {
        console.log('entra en el if');
        removeHack();
      }
    } catch (error) {}
  };
  return (
    <article className="hack">
      <p>Hackititle: {hackinion.title}</p>
      <p>Hackinion: {hackinion.content}</p>
      <p> Autor: {hackinion.name}</p>
      <p>Fecha: {new Date(hackinion.created_at).toLocaleString()}</p>
      {user && user.id === hackinion.userId ? (
        <section>
          <button
            className="delete"
            onClick={() => {
              if (window.confirm('Esta seguro'))
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
