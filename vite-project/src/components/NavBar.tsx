import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigationmenu";

import { NavLink, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-black padding-10 w-full border-b border-gray-200 dark:border-neutral-900  bg-background">
      <div className="mx-auto flex justify-between items-center px-4 py-2">
        {/* Left side navigation */}
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <h2 className="text-3xl font-semi-bold tracking-tight text-gray-900 dark:text-white transition-colors whitespace-nowrap">
                  dustin santoso
                </h2>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side navigation */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Hamburger toggle (only visible on small screens) */}
          <button
            className="block md:hidden text-black dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Menu (hidden on small screens unless toggled open) */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `rounded-full px-4 py-1 transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                    }`
                  }
                >
                  Home
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `rounded-full px-4 py-1 transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white"
                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800"
                    }`
                  }
                >
                  Resume
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    `rounded-full px-4 py-1 transition duration-300 ease-in-out ${
                      isActive
                        ? "bg-gray-100 dark:bg-neutral-800 text-black dark:text-white whitespace-nowrap"
                        : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 whitespace-nowrap"
                    }`
                  }
                >
                  About Me
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile dropdown menu overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-stone-800/50
          transition-opacity duration-300
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Dropdown menu panel */}
        <div
          className={`
    absolute top-0 left-0 w-full h-full bg-white dark:bg-background 
    p-6 flex flex-col items-start gap-4 z-40
    transition-opacity duration-300 ease-in-out
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-black dark:text-white self-end"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav links */}
          <NavLink
            to="/"
            className="text-black dark:text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <a
            href="/Santoso_Dustin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>

          <NavLink
            to="/aboutme"
            className="text-black dark:text-white text-lg"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </NavLink>
        </div>
      </div>
    </div>
  );
}
