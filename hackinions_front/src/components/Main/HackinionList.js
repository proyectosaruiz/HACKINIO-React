import { Hackinion } from "./Hackinion";

export const HackinionList = ({ hackinions }) => {
  return hackinions ? (
    <ul className="list">
      {hackinions.map((hackinion) => {
        return (
          <li key={hackinion.id} className="hack-li">
            <Hackinion hackinion={hackinion} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay Hackiniones...</p>
  );
};
