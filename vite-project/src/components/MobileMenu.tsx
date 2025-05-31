import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export function DropdownMenuDemo() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="relative z-50">
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center p-2 gap-1 group z-[60] relative"
        aria-label="Toggle menu"
      >
        <div
          className={`h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`h-0.5 w-6 bg-black dark:bg-white transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <div
          className={`h-0.5 w-6 bg-black dark:bg-white transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Full-screen overlay dropdown */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white dark:bg-black flex flex-col items-center pt-[35vh] space-y-6 transition-transform duration-500 ease-in-out z-50 ${
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        <a
          href="Santoso_Dustin_Resume.pdf"
          onClick={() => setOpen(false)}
          className="text-black dark:text-white text-3xl w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Resume
        </a>
        <NavLink
          to="/aboutme"
          onClick={() => setOpen(false)}
          className="text-black dark:text-white text-3xl w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          About Me
        </NavLink>
      </div>
    </div>
  );
}
