import { useEffect, useState } from "react";
import { getSingleHackinionsService } from "../services";

const useHackinions = (id) => {
  const [hackinions, setHackinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadHackinions = async () => {
      try {
        setLoading(true);
        const data = await getSingleHackinionsService(id);

        setHackinions(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadHackinions();
  }, [id]);

  return { hackinions, error, loading };
};

export default useHackinions;
