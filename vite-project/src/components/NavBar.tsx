import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigationmenu";

import { DropdownMenuDemo } from "./MobileMenu";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect only on portfolio page
  useEffect(() => {
    if (location.pathname !== "/") return; // disable scroll effect if not portfolio

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isPortfolioPage
          ? scrolled
            ? "bg-white"
            : "bg-transparent"
          : "bg-white sticky"
      }`}
    >
      <div className="mx-auto flex justify-between items-center px-4 md:px-8 py-2">
        {/* Left side navigation */}
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavLink to="/">
                  <h2
                    className={`text-2xl font-semibold tracking-tight transition-colors whitespace-nowrap ${
                      isPortfolioPage
                        ? scrolled
                          ? "text-gray-900"
                          : "text-white"
                        : "text-gray-900"
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
        <div className="flex-1 flex justify-end items-center ">
          {/* Hamburger toggle */}
          <div className="block md:hidden text-black dark:text-white">
            <DropdownMenuDemo />
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `${
                      isPortfolioPage
                        ? scrolled
                          ? isActive
                            ? "text-black" // active + scrolled
                            : "text-gray-500 hover:text-black" // inactive + scrolled
                          : isActive
                          ? "text-white" // active + transparent
                          : "text-gray-200 hover:text-white" // inactive + transparent
                        : isActive
                        ? "text-black" // active on non-portfolio
                        : "text-gray-500 hover:text-black" // inactive on non-portfolio
                    } transition-colors duration-300`
                  }
                >
                  RESUME
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    `${
                      isPortfolioPage
                        ? scrolled
                          ? isActive
                            ? "text-black" // active + scrolled
                            : "text-gray-500 hover:text-black" // inactive + scrolled
                          : isActive
                          ? "text-white" // active + transparent
                          : "text-gray-200 hover:text-white" // inactive + transparent
                        : isActive
                        ? "text-black" // active on non-portfolio
                        : "text-gray-500 hover:text-black" // inactive on non-portfolio
                    } transition-colors duration-300`
                  }
                >
                  ABOUT ME
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
