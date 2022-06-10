import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

import { NewVote } from './NewVote';
import { AuthContext } from '../../context/AuthContext';

export const Hackinion = ({ hackinion }) => {
  const { token, user } = useContext(AuthContext);
  const [error, setError] = useState('');

  return (
    <article className="">
      <p>Titulo: {hackinion.title}</p>
      <p>Comentario: {hackinion.content}</p>
      <p> Autor: {hackinion.name}</p>
      <p>Fecha: {new Date(hackinion.created_at).toLocaleString()}</p>
      {user && user.id === hackinion.user_id ? (
        <section>
          <NewVote hack={hackinion.hackId} />
        </section>
      ) : null}
    </article>
  );
};
