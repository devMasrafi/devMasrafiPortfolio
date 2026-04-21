import Button from "../btn/Button";

const CardTwo = ({ title, body, id, className }) => {
  const shortTitle = title ? title.slice(0, 45) + "..." : "";
  const shortBody = body ? body.slice(0, 50) + " ..." : "";

  const onClick = () => {
    console.log(`you have clicked btn`);
  };

  return (
    <div className="flex flex-col justify-between w-80 h-70  overflow-hidden rounded-xl border">
      <div className="px-3 py-5 h-full flex flex-col justify-between">
        <h2 className=" text-2xl capitalize font-medium ">
          {title ? shortTitle : `title data should be here`}
        </h2>
        <p className={` overflow-hidden`}>
          {body
            ? shortBody
            : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur, dolore veritatis accusantium iste debitis perspiciatis alias.`}
        </p>
      </div>
      <Button onClick={onClick} className={`border-t rounded-none`}>
        view info
      </Button>
    </div>
  );
};

export default CardTwo;
