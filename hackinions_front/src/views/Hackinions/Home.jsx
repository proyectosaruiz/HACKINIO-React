//import useHackinions from "../hooks/useHackinions";
import "./Home.css";
import { useEffect, useState, useContext } from "react";
import { HackinionList } from "../../components/Main/HackinionList";
import { ErrorMessage } from "../../components/Error/ErrorMessage";
import { NewHackinion } from "../../components/Main/NewHackinion";
import { AuthContext } from "../../context/AuthContext";
import { getAllHacknionsService } from "../../services/services";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [hackinions, setHackinions] = useState([]);
  const [id, setId] = useState(0);
  const [error, setError] = useState("");
  useEffect(() => {
    const loadHackinions = async () => {
      try {
        const data = await getAllHacknionsService();
        console.log(data, id);
        setHackinions(data);
      } catch (error) {
        setError(error.message);
      }
    };
    loadHackinions();
  }, [id]);
  const addHack = () => {
    setId(id + 1);
  };

  const removeHack = () => {
    /* setHackinions(hackinions.filter((hack) => hack.hackId !== id));*/
    setId(id + 1);
  };
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="">
      {user ? <NewHackinion addHack={addHack} /> : null}
      <section className="hackList">
        <h3>Últimos Hackinions</h3>
        <HackinionList hackinions={hackinions} removeHack={removeHack} />
      </section>
    </section>
  );
};
