import { useEffect, useState } from "react";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import CardOne from "../../components/cards/CardOne";
import Footer from "../../components/navigation/Footer";

const STORAGE_KEY = "devmasrafi-todos";

const getInitialTodos = () => {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  } catch {
    return [];
  }
};

const TodoApp = () => {
  const [todoList, setTodoList] = useState(getInitialTodos);
  const [addedTitle, setAddedTitle] = useState("");
  const [addedDescription, setAddedDescription] = useState("");
  const [filter, setFilter] = useState("all");
  const [formOpen, setFormOpen] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = addedTitle.trim();
    const description = addedDescription.trim();

    if (!title || !description) {
      setError("Please provide both a title and description.");
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      todoTitle: title,
      todoDetails: description,
      isCompleted: false,
    };

    setTodoList((currentTodos) => [...currentTodos, newTodo]);
    setAddedTitle("");
    setAddedDescription("");
    setError("");
    setFormOpen(false);
  };

  const toggleCompleted = (id) => {
    setTodoList((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodoList((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id),
    );
  };

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "active") {
      return !todo.isCompleted;
    }

    if (filter === "completed") {
      return todo.isCompleted;
    }

    return true;
  });

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <main className="mx-auto w-full max-w-7xl border-x">
      {/* Header */}
      <section className="border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            React state project
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Task management application
          </h1>

          <p className="mt-4 leading-7 opacity-70 md:text-lg">
            Create, complete, filter, delete, and persist tasks using React
            state and browser local storage.
          </p>
        </div>
      </section>

      {/* Workspace */}
      <section className="border-b px-5 py-10 md:px-10 md:py-14 lg:px-20 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
          {/* Form */}
          <section className="border p-5 md:p-8">
            <button
              type="button"
              onClick={() => setFormOpen((currentState) => !currentState)}
              className="flex w-full items-center justify-between border-b pb-4 text-left text-lg font-semibold md:cursor-default md:border-b-0 md:pb-0"
              aria-expanded={formOpen}
            >
              <span>Create a task</span>

              <span className="md:hidden" aria-hidden="true">
                {formOpen ? <BiArrowToTop /> : <BiArrowToBottom />}
              </span>
            </button>

            <form
              onSubmit={handleSubmit}
              className={`${formOpen ? "mt-6 block" : "hidden"} md:mt-6 md:block`}
            >
              <label htmlFor="todoTitle" className="block text-sm font-medium">
                Task title
              </label>

              <input
                id="todoTitle"
                type="text"
                value={addedTitle}
                onChange={(event) => {
                  setAddedTitle(event.target.value);
                  setError("");
                }}
                placeholder="e.g. Prepare portfolio"
                className="mt-2 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <label
                htmlFor="todoDescription"
                className="mt-5 block text-sm font-medium"
              >
                Description
              </label>

              <textarea
                id="todoDescription"
                value={addedDescription}
                onChange={(event) => {
                  setAddedDescription(event.target.value);
                  setError("");
                }}
                placeholder="Add useful details..."
                rows={6}
                className="mt-2 w-full resize-y rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />

              {error && (
                <p className="mt-3 text-sm text-red" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 border bg-black px-5 py-2 font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
              >
                Add task
              </button>
            </form>
          </section>

          {/* List */}
          <section className="min-w-0">
            <div className="flex flex-col gap-4 border-b pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-wider text-blue-400">
                  Your tasks
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {todoList.length} {todoList.length === 1 ? "task" : "tasks"}
                </p>
              </div>

              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter tasks"
              >
                {filterOptions.map((option) => {
                  const isActive = filter === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFilter(option.value)}
                      aria-pressed={isActive}
                      className={`border px-3 py-2 text-sm ${
                        isActive
                          ? "bg-green-300 text-black"
                          : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative mt-5 border p-3 md:p-4">
              <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-wider opacity-60">
                <span>
                  Showing {filteredTodos.length}{" "}
                  {filteredTodos.length === 1 ? "task" : "tasks"}
                </span>

                {filteredTodos.length > 3 && (
                  <span className="hidden sm:inline">Scroll to view more</span>
                )}
              </div>

              <div className="max-h-128 min-h-0 space-y-4 overflow-y-auto pb-8 pr-1 scrollbar-hide">
                {todoList.length === 0 && (
                  <div className="border p-6 text-center">
                    <p className="font-semibold">Your task list is empty.</p>
                    <p className="mt-2 text-sm opacity-60">
                      Create your first task using the form.
                    </p>
                  </div>
                )}

                {todoList.length > 0 && filteredTodos.length === 0 && (
                  <div className="border p-6 text-center">
                    <p className="font-semibold">
                      No {filter} tasks available.
                    </p>
                    <p className="mt-2 text-sm opacity-60">
                      Try another filter.
                    </p>
                  </div>
                )}

                {filteredTodos.map((todo) => (
                  <CardOne
                    key={todo.id}
                    todoTitle={todo.todoTitle}
                    todoDetails={todo.todoDetails}
                    isCompleted={todo.isCompleted}
                    buttonOneClick={() => toggleCompleted(todo.id)}
                    buttonTwoClick={() => deleteTodo(todo.id)}
                  />
                ))}
              </div>

              {filteredTodos.length > 3 && (
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-center bg-gradient-to-t from-white via-white/90 to-transparent pb-2 pt-8 dark:from-black dark:via-black/90">
                  <span className="text-xs font-medium uppercase tracking-wider opacity-60">
                    Scroll for more
                  </span>
                </div>
              )}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TodoApp;
