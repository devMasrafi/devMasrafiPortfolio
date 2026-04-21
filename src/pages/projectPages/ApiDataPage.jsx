import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import Button from "../../components/btn/Button";
import useApiData from "../../hooks/fetchData/ApiData";
import CardTwo from "../../components/cards/CardTwo";
import Footer from "../../components/navigation/Footer";

const ApiDataPage = () => {
  const { apiData, loading } = useApiData();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  // console.log(apiData);

  // serach and Filter
  const handleChange = (e) => {
    const searchInput = e.target.value;
    setSearch(searchInput);
  };
  const filteredData = apiData.filter((data) => {
    if (!search) {
      return true;
    }
    const serachQuery = search.trim().toLowerCase();
    return data.title.toLowerCase().includes(serachQuery);
  });

  // pagination of items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  console.log(totalPages);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  return (
    <main className="w-7xl mx-auto border-x">
      <div className="h-120 flex items-center justify-center border-b">
        <div className="w-120">
          <h2 className="text-3xl capitalize font-semibold my-3">
            Api Data fetching and filtering
          </h2>
          <p className="italic opacity-60 ">
            This projet is for api data calling making much less request to
            server so that its better for long term use.
          </p>
          <NavLink to={"/projects"} className="">
            <Button
              className={`bg-black/80 text-white dark:bg-white dark:text-black mt-4`}
            >
              go back
            </Button>
          </NavLink>
        </div>
      </div>
      {/* cards and posts */}
      <div className="h-full border-b pb-10">
        {/* api filter and settings */}
        <div className="flex justify-between border-b py-5">
          <div>
            <p className="capitalize ml-4 text-lg ">
              total results: {apiData.length}
            </p>
          </div>
          <div>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="serach here"
              className="outline px-2 py-1 w-80 mr-4 rounded-lg"
            />
          </div>
        </div>
        {/* api data render */}
        <div>
          <div className="flex flex-wrap justify-center gap-7 mt-8">
            {loading ? (
              <h1 className=" w-full text-center my-6 ">Loading...</h1>
            ) : (
              currentItems.map((posts) => {
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
        </div>
      </div>

      {/* pages */}
      <div className="flex justify-center gap-2 py-10 border-b">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded cursor-pointer ${
              currentPage === index + 1
                ? "bg-black text-white dark:bg-white dark:text-black"
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* footer */}

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default ApiDataPage;
