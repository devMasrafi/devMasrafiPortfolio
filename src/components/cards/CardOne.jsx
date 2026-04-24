import Button from "../btn/Button";

const CardOne = ({
  todoTitle,
  todoDetails,
  buttonOneClick,
  buttonTwoClick,
  isCompleted,
}) => {

  

  return (
    <div className="bg-milk-white w-120 px-5 py-4 rounded-2xl text-black dark:text-white mt-4 ">
      <div>
        <h1
          className={`text-lg font-bold capitalize tracking-wider ${isCompleted ? `line-through` : ``}`}
        >
          {todoTitle ? todoTitle : `This is your list title.`}{" "}
        </h1>
        <p
          className={`tracking-wide my-3 ${isCompleted ? "line-through" : ""}`}
        >
          {todoDetails
            ? todoDetails
            : `this text is for fresh start and it will be disapear once you add a todo here..`}
        </p>
      </div>
      <div className="flex gap-x-2 mt-10">
        <Button
          onClick={buttonOneClick}
          className={`bg-black/60 text-white dark:text-white dark:border`}
        >
          completed
        </Button>
        <Button onClick={buttonTwoClick} className={` text-milk-white border`}>
          delete
        </Button>
      </div>
    </div>
  );
};

export default CardOne;
