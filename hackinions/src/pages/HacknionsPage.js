import { useParams } from "react-router-dom";
import useHackinions from "../hooks/usehacknions";
import { Hackinions } from "../components/Hackinions";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";

export const HackinionsPage = () => {
  const { id } = useParams();
  const { hackinions, error, loading } = useHackinions(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Hackinions</h1>
      <Hackinions hackinions={hackinions} />
    </section>
  );
};
