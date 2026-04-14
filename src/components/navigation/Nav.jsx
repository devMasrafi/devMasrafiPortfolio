import { NavLink } from "react-router";

const Nav = () => {
  return (
    <main className="flex justify-between items-center">
      <div>
        <NavLink to="/">
          <h1 className="text-3xl font-bold tracking-wider italic">
            devMasrafi
          </h1>
        </NavLink>
      </div>
      <div className="list-none flex w-[40%] justify-around  ">
        <NavLink to="/">
          <li className="text-2xl capitalize font-semibold tracking-wider ">
            home
          </li>
        </NavLink>
        <NavLink to="/projects">
          <li className="text-2xl capitalize font-semibold tracking-wider ">
            projects
          </li>
        </NavLink>
        <NavLink to="/about">
          <li className="text-2xl capitalize font-semibold tracking-wider ">
            about
          </li>
        </NavLink>
        <NavLink to="/contact">
          <li className="text-2xl capitalize font-semibold tracking-wider ">
            conatct
          </li>
        </NavLink>
        {/* <NavLink to="/">Home</NavLink> */}
      </div>
    </main>
  );
};

export default Nav;
