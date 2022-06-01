import { Hackinions } from "./hacknions";

export const HackinionsList = ({ hackinionss, removeHackinions }) => {
  return hackinionss.length ? (
    <ul className="hackinions-list">
      {hackinionss.map((hackinions) => {
        return (
          <li key={hackinions.id}>
            <Hackinions
              hackinions={hackinions}
              removehackinions={removeHackinions}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay Hackinions</p>
  );
};
