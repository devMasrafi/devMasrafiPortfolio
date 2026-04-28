import { NavLink } from "react-router";
import ThemeToggle from "../themes/ThemeToggle";

const Nav = () => {
  return (
    <main className="flex justify-between items-center border p-2 w-7xl mx-auto sticky top-0 bg-white dark:bg-black">
      <div>
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wider italic">
            devMasrafi
          </h1>
        </NavLink>
      </div>
      <div className="list-none flex w-[30%] justify-around text-xl capitalize font-medium">
        <NavLink to="/">
          <li>home</li>
        </NavLink>
        <NavLink to="/projects">
          <li>projects</li>
        </NavLink>
        <NavLink to="/about">
          <li>about</li>
        </NavLink>
        {/* <NavLink to="/contact">
          <li>conatct</li>
        </NavLink> */}

        {/* theme BTn */}
        <ThemeToggle
          className={`border cursor-pointer px-3 py-1 rounded-2xl`}
        />
        {/* <NavLink to="/">Home</NavLink> */}
      </div>
    </main>
  );
};

export default Nav;
