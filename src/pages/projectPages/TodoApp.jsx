import CardOne from "../../components/cards/CardOne";
import Button from "../../components/btn/Button";
import { useEffect, useState } from "react";
import Footer from "../../components/navigation/Footer";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [addedTitle, setAddedTitle] = useState("");
  const [addedDiscription, setAddedDiscription] = useState("");

  const [enableBtn, setEnableBtn] = useState(false);

  const todoTitle = (e) => {
    setAddedTitle(e.target.value);
  };
  const todoDiscription = (e) => {
    setAddedDiscription(e.target.value);
  };

  const todoSubmit = (e) => {
    e.preventDefault();
    // console.log(`submit button clicked ${Date.now()}`);

    if (addedTitle == "") {
      console.log(`title can not be empty`);
      return;
    }
    if (addedDiscription == "") {
      console.log(`discribtion can not be empty`);
      return;
    }

    const newTodo = {
      id: Date.now(),
      todoTitle: addedTitle,
      todoDetails: addedDiscription,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);

    setAddedTitle("");
    setAddedDiscription("");
  };

  //   completed function
  const completedTodo = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  //   delete Function
  const deleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  //   FILTER STATES
  const [filter, setFilter] = useState("all");

  const filteredTodos = todoList.filter((todo) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "active") {
      return todo.isCompleted === false;
    }
    if (filter === "completed") {
      return todo.isCompleted === true;
    }
  });

  useEffect(() => {
    console.log(`todo list after all:`, todoList);
  }, [todoList]);

  return (
    <main className="pt-10 lg:max-w-7xl mx-auto border-x  ">
      <div>
        <div className="w-[95%] mx-auto lg:flex justify-around border-b ">
          <div className="visible md:hidden ">
            {/* form */}
            <div className="">
              <button
                className={`p-2 border rounded-xl flex items-center text-lg gap-2 mb-2`}
                onClick={() => setEnableBtn(!enableBtn)}
              >
                {enableBtn ? <BiArrowToTop /> : <BiArrowToBottom />}
                {enableBtn ? `close form` : `open form`}
              </button>
            </div>
            {enableBtn && (
              <form onSubmit={todoSubmit} className="lg:w-100 ">
                <div className="flex flex-col placeholder:text-dark placeholder:dark:text-white ">
                  <label
                    htmlFor="todoTitle"
                    className="text-lg pb-3 capitalize font-medium tracking-wider"
                  >
                    create Todo
                  </label>
                  <input
                    onChange={todoTitle}
                    value={addedTitle}
                    type="text"
                    placeholder="type here..."
                    className="border px-3 py-1 rounded-lg outline-none mb-4"
                  />
                  <textarea
                    type="text"
                    onChange={todoDiscription}
                    value={addedDiscription}
                    placeholder="add details here..."
                    rows={8}
                    className="border mb-6 rounded-lg px-2 py-3 resize-none outline-none"
                  />
                </div>
                <div>
                  <Button className={`dark:text-white outline-1`}>
                    submit
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div className="hidden md:block">
            <form onSubmit={todoSubmit} className="lg:w-100">
              <div className="flex flex-col placeholder:text-dark placeholder:dark:text-white ">
                <label
                  htmlFor="todoTitle"
                  className="text-lg pb-3 capitalize font-medium tracking-wider"
                >
                  create Todo
                </label>
                <input
                  onChange={todoTitle}
                  value={addedTitle}
                  type="text"
                  placeholder="type here..."
                  className="border px-3 py-1 rounded-lg outline-none mb-4"
                />
                <textarea
                  type="text"
                  onChange={todoDiscription}
                  value={addedDiscription}
                  placeholder="add details here..."
                  rows={8}
                  className="border mb-6 rounded-lg px-2 py-3 resize-none outline-none"
                />
              </div>
              <div>
                <Button className={`dark:text-white outline-1`}>submit</Button>
              </div>
            </form>
          </div>

          {/* list for todo */}
          <div>
            <div className="mt-10 lg:mt-0 flex gap-2 md:pt-10 lg:justify-between mb-2">
              <Button
                className={`border px-3! md:px-10! ${filter === "all" ? "bg-green-300 text-black" : ""}`}
                onClick={() => setFilter("all")}
              >
                all
              </Button>
              <Button
                className={`border px-3! md:px-10! ${filter === "active" ? "bg-green-300 text-black" : ""} `}
                onClick={() => setFilter("active")}
              >
                active
              </Button>
              <Button
                className={`border px-3! md:px-10! ${filter === "completed" ? "bg-green-300 text-black" : ""}`}
                onClick={() => setFilter("completed")}
              >
                completed
              </Button>
            </div>
            <div className="h-135 mt-5 overflow-y-auto overflow-x-hidden scrollbar-hide">
              {todoList.length === 0 ? (
                <div className="border rounded-2xl">
                  <CardOne />
                </div>
              ) : (
                filteredTodos.map((todo) => (
                  <div className="border rounded-2xl my-4">
                    <CardOne
                      key={todo.id}
                      todoTitle={todo.todoTitle}
                      todoDetails={todo.todoDetails}
                      isCompleted={todo.isCompleted}
                      buttonOneClick={() => completedTodo(todo.id)}
                      buttonTwoClick={() => deleteTodo(todo.id)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default TodoApp;
