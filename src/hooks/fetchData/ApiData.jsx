import { useEffect, useState } from "react";

const ApiData = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      });
  }, []);
  // console.log(apiData);

  return { apiData, loading };
};

export default ApiData;
