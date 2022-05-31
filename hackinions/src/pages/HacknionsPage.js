import { useParams } from "react-router-dom";
import useTweet from "../hooks/usehacknions";
import { Tweet } from "../components/hacknions";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";

export const TweetPage = () => {
  const { id } = useParams();
  const { tweet, error, loading } = useTweet(id);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>Tweet</h1>
      <Tweet tweet={tweet} />
    </section>
  );
};
