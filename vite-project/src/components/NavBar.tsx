import { FaFileAlt, FaUser } from "react-icons/fa";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigationmenu";

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const [isOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // NEW: Add this useEffect to scroll to top on any page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Determine if we’re on portfolio page
  const isPortfolioPage = location.pathname === "/";

  return (
    <div
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        !isPortfolioPage || scrolled
          ? "bg-white text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-0 flex justify-between h-12 md:h-14">
        {/* Left side navigation */}
        <div className="flex flex-1 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* REMOVED the onClick handler from here */}
                <NavLink to="/">
                  <h2
                    className={`md:text-2xl text-xl font-semibold tracking-tight transition-colors whitespace-nowrap ${
                      isPortfolioPage
                        ? scrolled
                          ? "text-black"
                          : "text-white"
                        : "text-black"
                    }`}
                  >
                    DUSTIN SANTOSO
                  </h2>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side navigation */}
        <div className="flex-1 flex justify-end items-center w-full">
          {/* Desktop Navigation (Text Links) */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem>
                <a
                  href="/dustin_santoso_resume_EMR.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xl font-semibold tracking-tight
   transition-colors duration-300
   ${
     isPortfolioPage
       ? scrolled
         ? "text-gray-500 " // scrolled on portfolio
         : "text-white" // transparent on portfolio
       : "text-gray-500 " // any other page
   }
  `}
                >
                  RESUME
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    `${
                      isPortfolioPage
                        ? scrolled
                          ? isActive
                            ? "text-black " // active + scrolled
                            : "text-gray-500 " // inactive + scrolled
                          : isActive
                          ? "text-white" // active + transparent
                          : "text-white " // inactive + transparent
                        : isActive
                        ? "text-black" // active on non-portfolio
                        : "text-gray-500 " // inactive on non-portfolio
                    } text-xl font-semibold tracking-tight transition-colors duration-300`
                  }
                >
                  ABOUT ME
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation (Icons) */}
          <div className="flex items-center gap-5 md:hidden">
            <a
              href="/Santoso_Dustin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isPortfolioPage
                  ? scrolled
                    ? "text-gray-500 hover:text-black" // inactive + scrolled
                    : "text-gray-200 hover:text-white" // inactive + transparent
                  : "text-gray-500 hover:text-black" // inactive on non-portfolio
              } transition-colors duration-300`}
            >
              <FaFileAlt className="text-lg" />
            </a>

            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                `${
                  isPortfolioPage
                    ? scrolled
                      ? isActive
                        ? "text-black"
                        : "text-gray-500 hover:text-black"
                      : isActive
                      ? "text-white"
                      : "text-gray-200 hover:text-white"
                    : isActive
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                } transition-colors duration-300`
              }
            >
              <FaUser className="text-lg" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
