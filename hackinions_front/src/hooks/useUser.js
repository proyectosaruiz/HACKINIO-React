import { useEffect, useState } from "react";
import { getMyDataService } from "../services/services";

const useUser = (token) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getMyDataService(token);

        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  return { user, error, loading };
};

export default useUser;
