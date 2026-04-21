import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `transition duration-300 ${
      location.pathname === path
        ? "text-white"
        : "text-white/80 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center font-semibold
    bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600
    p-5 text-white shadow-lg">

      {/* Logo */}
      <h1 className="text-xl tracking-widest font-bold hover:scale-105 transition cursor-pointer">
        PORTFOLIO
      </h1>

      {/* Links */}
      <div className="flex space-x-6 md:space-x-10 lg:space-x-16">

        <Link className={linkClass("/")} to="/">
          Home
          <span className="block h-0.5 w-0 hover:w-full transition-all bg-white"></span>
        </Link>

        <Link className={linkClass("/projects")} to="/projects">
          Projects
          <span className="block h-0.5 w-0 hover:w-full transition-all bg-white"></span>
        </Link>

        <Link className={linkClass("/about")} to="/about">
          About
          <span className="block h-0.5 w-0 hover:w-full transition-all bg-white"></span>
        </Link>

        <Link className={linkClass("/contact")} to="/contact">
          Contact
          <span className="block h-0.5 w-0 hover:w-full transition-all bg-white"></span>
        </Link>

      </div>

    </nav>
  );
}