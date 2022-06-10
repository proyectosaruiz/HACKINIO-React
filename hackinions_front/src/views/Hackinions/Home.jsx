//import useHackinions from "../hooks/useHackinions";
import { useEffect, useState, useContext } from "react";
import { HackinionList } from "../../components/Main/HackinionList";
import { ErrorMessage } from "../../components/ErrorMessage";
import { NewHackinion } from "../../components/Main/NewHackinion";
import { AuthContext } from "../../context/AuthContext";
import { getAllHacknionsService } from "../../services/services";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [hackinions, setHackinions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadHackinions = async () => {
      try {
        const data = await getAllHacknionsService();
        setHackinions(data);
      } catch (error) {
        setError(error.message);
      } 
    };
    loadHackinions();
  }, []);

  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      {user ? <NewHackinion /> : null}
      <h3>Ultimos Comentarios</h3>
      <HackinionList hackinions={hackinions}  />
    </section>
  );
};
