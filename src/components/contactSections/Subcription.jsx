import { useState } from "react";
import Button from "../btn/Button";

const Subcription = () => {
  const [userEmail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    const userInput = e.target.value.trim();

    if (userInput == "") {
      return;
    } else {
      setUserEmail(e.target.value);
    }
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
    setError(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("this user email", userEmail);

    if (userEmail == "" || !isChecked) {
      setError(true);
      return;
    }

    setUserEmail("");
    setIsChecked(false);
    setError(false);
  };

  return (
    <div className="flex flex-col justify-around gap-8 md:flex-row md:items-center md:gap-10">
      {/* text information */}
      <div className="w-full md:w-80">
        <h2 className="text-2xl capitalize font-semibold">
          leave a mail
        </h2>

        <p className="mt-2">
          Want us to contact you for more or for a meeting?! leave a mail to
          get notified
        </p>
      </div>

      {/* inputField */}
      <div className="flex w-full items-center md:w-auto">
        <div className="w-full">
          {error && <p className="pb-2">please enter your email</p>}

          <div className="flex w-full">
            <input
              value={userEmail}
              onChange={handleInput}
              type="email"
              className="min-w-0 flex-1 rounded-l-xl border-black px-3 py-2 outline-1 -outline-offset-1 md:w-65 md:flex-none"
              placeholder="your mail"
            />

            <Button
              onClick={handleClick}
              className="rounded-none rounded-r-xl bg-black text-white transition duration-150 ease-in-out hover:scale-105 dark:bg-white dark:text-black"
            >
              send
            </Button>
          </div>

          <div className="mt-3 flex items-center capitalize">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={handleCheckbox}
              className="cursor-pointer"
            />

            <label
              htmlFor="consent"
              className={`cursor-pointer pl-2 dark:text-white ${
                error ? "text-red" : "text-black"
              }`}
            >
              i wish to recive mail or get contacted
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcription;