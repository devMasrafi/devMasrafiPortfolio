import { useState } from "react";
import { NavLink } from "react-router";
import useApiData from "../../hooks/fetchData/ApiData";
import CardTwo from "../../components/cards/CardTwo";
import Footer from "../../components/navigation/Footer";

const ITEMS_PER_PAGE = 12;

const ApiDataPage = () => {
  const { apiData, loading, error } = useApiData();

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredData = apiData.filter((post) => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return true;
    }

    return (
      post.title.toLowerCase().includes(query) ||
      post.body.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));

  const firstItemIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

  const currentItems = filteredData.slice(
    firstItemIndex,
    firstItemIndex + ITEMS_PER_PAGE,
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
    setSelectedPost(null);
    scrollToTop();
  };

  const handleViewPost = (post) => {
    setSelectedPost(post);
  };

  const handlePreviousPage = () => {
    if (safeCurrentPage === 1) {
      return;
    }

    setCurrentPage((page) => Math.max(page - 1, 1));
    setSelectedPost(null);
    scrollToTop();
  };

  const handleNextPage = () => {
    if (safeCurrentPage === totalPages) {
      return;
    }

    setCurrentPage((page) => Math.min(page + 1, totalPages));
    setSelectedPost(null);
    scrollToTop();
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setSelectedPost(null);
    scrollToTop();
  };

  return (
    <main className="mx-auto w-full max-w-7xl border-x">
      {/* Introduction */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            React API project
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            API search and pagination
          </h1>

          <p className="mt-4 leading-7 opacity-70 md:text-lg">
            A data browsing interface using JSONPlaceholder with client-side
            search, pagination, loading states, error handling, and reusable
            result cards.
          </p>

          <NavLink
            to="/projects"
            className="mt-6 inline-block border px-5 py-2 font-medium transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Back to projects
          </NavLink>
        </div>
      </section>

      {/* Data area */}
      <section className="border-b px-5 py-10 md:px-10 md:py-14 lg:px-20 lg:py-16">
        <div className="flex flex-col gap-5 border-b pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-wider opacity-60">
              Results
            </p>

            <p className="mt-1 text-xl font-semibold">
              {filteredData.length}{" "}
              {filteredData.length === 1 ? "post" : "posts"} found
            </p>
          </div>

          <label className="w-full md:max-w-sm">
            <span className="mb-2 block text-sm font-medium">Search posts</span>

            <input
              type="search"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by title or content"
              className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        <div className="mt-8" aria-live="polite">
          {loading && (
            <p className="py-12 text-center text-lg opacity-60">
              Loading posts...
            </p>
          )}

          {!loading && error && (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold">
                We could not load the posts.
              </p>

              <p className="mt-2 opacity-60">{error}</p>
            </div>
          )}

          {!loading && !error && currentItems.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg font-semibold">No posts found.</p>

              <p className="mt-2 opacity-60">Try a different search term.</p>
            </div>
          )}

          {!loading && !error && currentItems.length > 0 && (
            <div className="flex flex-wrap gap-5">
              {currentItems.map((post) => (
                <CardTwo
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  onView={handleViewPost}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {!loading && !error && totalPages > 1 && (
        <nav
          aria-label="Posts pagination"
          className="flex flex-wrap items-center justify-center gap-2 border-b px-5 py-8"
        >
          <button
            type="button"
            onClick={handlePreviousPage}
            disabled={safeCurrentPage === 1}
            className="border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isActive = safeCurrentPage === pageNumber;

              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => handlePageChange(pageNumber)}
                  aria-current={isActive ? "page" : undefined}
                  className={`min-w-10 border px-3 py-2 text-sm ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : ""
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNextPage}
            disabled={safeCurrentPage === totalPages}
            className="border px-4 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}

      {/* Selected post details */}
      {selectedPost && (
        <section className="border-b px-5 py-10 md:px-10 md:py-14 lg:px-20">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Selected post
              </p>

              <h2 className="mt-3 text-2xl font-semibold capitalize md:text-3xl">
                {selectedPost.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="border px-3 py-2 text-sm"
            >
              Close
            </button>
          </div>

          <p className="mt-5 max-w-3xl leading-7 opacity-70">
            {selectedPost.body}
          </p>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default ApiDataPage;
