import { CiLight } from "react-icons/ci";
import { MdOutlineNightlight } from "react-icons/md";

import { useEffect, useState } from "react";
import Button from "../btn/Button";

const ThemeToggle = ({ className }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // run once when app loads
  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      setTheme(userTheme);
    }
  }, []);

  // run when the state of theme changes
  // seve them every time it changes
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button onClick={toggleTheme} className={`${className}`}>
        {theme === "light" ? <MdOutlineNightlight /> : <CiLight />}
      </button>
    </div>
  );
};

export default ThemeToggle;
