import { useState } from "react";
import { NavLink } from "react-router";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "../themes/ThemeToggle";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="sticky top-0 z-50 mx-auto w-full max-w-7xl border bg-white dark:bg-black">
      <div className="flex items-center justify-between p-2">
        {/* Logo */}
        <div>
          <NavLink to="/" onClick={closeMenu}>
            <h1 className="text-2xl font-bold tracking-wider italic md:text-3xl">
              devMasrafi
            </h1>
          </NavLink>
        </div>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden items-center justify-around gap-3 text-base font-medium capitalize md:flex md:gap-6 md:text-lg lg:gap-10 lg:text-xl">
          <NavLink to="/">home</NavLink>

          <NavLink to="/projects">projects</NavLink>

          <NavLink to="/about">about</NavLink>

          <ThemeToggle className="cursor-pointer rounded-2xl border px-2 py-1 md:px-3" />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="cursor-pointer rounded-2xl border px-2 py-1" />

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer rounded-lg border p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-3 py-2">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="border-b py-3 capitalize transition-opacity hover:opacity-60"
          >
            home
          </NavLink>

          <NavLink
            to="/projects"
            onClick={closeMenu}
            className="border-b py-3 capitalize transition-opacity hover:opacity-60"
          >
            projects
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className="py-3 capitalize transition-opacity hover:opacity-60"
          >
            about
          </NavLink>
        </div>
      </div>
    </main>
  );
};

export default Nav;