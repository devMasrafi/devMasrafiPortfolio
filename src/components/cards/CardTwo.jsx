import Button from "../btn/Button";

const CardTwo = ({ title, body, id, className }) => {
    const shortBody = body? body.slice(0, 50)+ "" : ""

  const onClick = () => {
    console.log(`you have clicked btn`);
  };



  return (
    <div className="flex flex-col justify-between w-80 h-70 bg-light-green text-black px-3 py-5 overflow-hidden rounded-xl">
      <div>
        <h2 className=" text-2xl capitalize font-medium ">
          {title ? title : `title data should be here`}{" "}
        </h2>
        <p className={`mt-5 overflow-hidden`}>
          {body
            ? shortBody
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, dolore veritatis accusantium iste debitis perspiciatis alias.`}{" "}
        </p>
      </div>
      <Button onClick={onClick} className={`bg-dark-green text-white`}>view info</Button>
    </div>
  );
};

export default CardTwo;
