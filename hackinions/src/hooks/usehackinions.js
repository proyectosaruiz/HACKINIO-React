import { useEffect, useState } from "react";
import { getAllHackinionsService, getUserHackinionsService } from "../services";

const useHackinionss = (id) => {
  const [hackinions, setHackinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadHackinions = async () => {
      try {
        setLoading(true);
        const data = id
          ? await getUserHackinionsService(id)
          : await getAllHackinionsService();

        setHackinions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadHackinions();
  }, [id]);

  const addHackinions = (data) => {
    setHackinions([data, ...hackinions]);
  };

  const removeHackinions = (id) => {
    setHackinions(hackinions.filter((hackinions) => hackinions.id !== id));
  };

  return { hackinions, error, loading, addHackinions, removeHackinions };
};

export default useHackinionss;
