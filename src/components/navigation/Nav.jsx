import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../themes/ThemeToggle";

const navigationItems = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "projects",
    path: "/projects",
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "contact",
    path: "/contact",
  },
];

const linkStyles = ({ isActive }) =>
  `relative py-2 capitalize transition-colors hover:text-blue-400 ${
    isActive
      ? "font-semibold text-blue-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-blue-400"
      : "opacity-70"
  }`;

const mobileLinkStyles = ({ isActive }) =>
  `border-b py-4 capitalize transition-colors hover:text-blue-400 ${
    isActive ? "font-semibold text-blue-400" : "opacity-80"
  }`;

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl border-b bg-white/95 backdrop-blur dark:bg-black/95">
      <div className="flex min-h-16 items-center justify-between px-5 md:px-8 lg:px-10">
        {/* Brand */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="group flex flex-col leading-none"
        >
          <span className="text-xl font-bold tracking-wider md:text-2xl">
            devMasrafi
          </span>

          <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-blue-400">
            MERN developer
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-6 md:flex lg:gap-8"
        >
          {navigationItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkStyles}>
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="rounded-full border border-green-600 bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 transition hover:opacity-80 dark:border-green-400 dark:bg-green-900/40 dark:text-green-200"
          >
            Open to work
          </NavLink>

          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((currentState) => !currentState)}
            className="rounded-lg border p-2 transition hover:border-blue-400 hover:text-blue-400"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-5 py-2"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={mobileLinkStyles}
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="my-3 w-fit rounded-full border border-green-600 bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:border-green-400 dark:bg-green-900/40 dark:text-green-200"
          >
            Open to work
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Nav;