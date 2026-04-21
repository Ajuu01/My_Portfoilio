import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const linkClass = (path) =>
    `block py-2 transition duration-300 ${
      location.pathname === path
        ? "text-white font-bold"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">

      {/* Top bar */}
      <div className="flex justify-between items-center p-5">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-widest">
          PORTFOLIO
        </h1>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-10 font-semibold">
          <Link className={linkClass("/")} to="/">Home</Link>
          <Link className={linkClass("/projects")} to="/projects">Projects</Link>
          <Link className={linkClass("/about")} to="/about">About</Link>
          <Link className={linkClass("/contact")} to="/contact">Contact</Link>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col px-5 pb-4 space-y-2 font-semibold bg-indigo-700/90">

          <Link onClick={() => setOpen(false)} className={linkClass("/")} to="/">
            Home
          </Link>

          <Link onClick={() => setOpen(false)} className={linkClass("/projects")} to="/projects">
            Projects
          </Link>

          <Link onClick={() => setOpen(false)} className={linkClass("/about")} to="/about">
            About
          </Link>

          <Link onClick={() => setOpen(false)} className={linkClass("/contact")} to="/contact">
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}