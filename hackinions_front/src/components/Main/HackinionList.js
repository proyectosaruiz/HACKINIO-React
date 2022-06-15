import { Hackinion } from './Hackinion';

export const HackinionList = ({ hackinions, removeHack }) => {
  return hackinions ? (
    <ul className="list">
      {hackinions.map((hackinion) => {
        return (
          <li key={hackinion.hackId} className="hack-li">
            <Hackinion hackinion={hackinion} removeHack={removeHack} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay Hackinion</p>
  );
};
