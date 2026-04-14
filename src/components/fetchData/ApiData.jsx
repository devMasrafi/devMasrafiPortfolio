import { useEffect, useState } from "react";
import CardTwo from "../cards/CardTwo";

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
  console.log(apiData);

  return (
    <main className="w-8xl mx-auto my-5 ">
      <div className="flex flex-wrap justify-center gap-7">
        {loading ? (
          <h1 className=" w-full text-center my-6 ">Loading...</h1>
        ) : (
          apiData.slice(0, 16).map((posts) => {
            return (
              <CardTwo
                key={posts.id}
                id={posts.id}
                title={posts.title}
                body={posts.body}
              />
            );
          })
        )}
      </div>
    </main>
  );
};

export default ApiData;
