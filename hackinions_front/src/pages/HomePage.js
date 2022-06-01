import useHackinions from "../hooks/useHackinions";
import { HackinionsList } from "../components/HackinionsList";
import { ErrorMessage } from "../components/ErrorMessage";
import { NewHackinions } from "../components/NewHackinions";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Loading } from "../components/Loading";

export const HomePage = () => {
  const { hackinions, error, loading, addHackinions, removeHackinions } =
    useHackinions();
  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewHackinions addHackinions={addHackinions} /> : null}
      <h1>Latest Hackinions</h1>
      <HackinionsList
        Hackinions={hackinions}
        removeHackinions={removeHackinions}
      />
    </section>
  );
};
