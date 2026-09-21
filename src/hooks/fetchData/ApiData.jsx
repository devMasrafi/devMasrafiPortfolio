import { useEffect, useState } from "react";

const ApiData = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const getApiData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Unable to load posts.");
        }

        const data = await response.json();
        setApiData(data);
      } catch (requestError) {
        if (requestError.name === "AbortError") {
          return;
        }

        setApiData([]);
        setError(requestError.message || "Something went wrong.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    getApiData();

    return () => {
      controller.abort();
    };
  }, []);

  return { apiData, loading, error };
};

export default ApiData;