import { Hackinion } from './Hackinion';

export const HackinionList = ({ hackinions, removeHackinion }) => {
  return hackinions ? (
    <ul className="list">
      {hackinions.map((hackinion) => {
        return (
          <li key={hackinion.id}>
            <Hackinion
              hackinion={hackinion}
              removeHackinion={removeHackinion}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay comentarios...</p>
  );
};
