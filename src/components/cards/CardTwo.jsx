const CardTwo = ({ title, body, id, onView }) => {
  const displayTitle =
    title && title.length > 48 ? `${title.slice(0, 48)}...` : title;

  const displayBody =
    body && body.length > 120 ? `${body.slice(0, 120)}...` : body;

  return (
    <article className="flex min-w-0 w-full flex-col justify-between border p-5 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
          Post {id}
        </p>

        <h2 className="mt-3 wrap-break-words text-xl font-semibold capitalize leading-tight">
          {displayTitle || "Untitled post"}
        </h2>

        <p className="mt-4 wrap-break-words text-sm leading-6 opacity-70">
          {displayBody || "No post content available."}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onView?.({ id, title, body })}
        className="mt-6 w-full border px-4 py-2 text-sm font-medium capitalize transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
        view details
      </button>
    </article>
  );
};

export default CardTwo;