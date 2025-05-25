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

import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

import { Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-black padding-10 w-full border-b border-gray-200 dark:border-gray-700 bg-background">
      <div className="mx-auto flex justify-between items-center px-4 py-5">
        {/* Left side navigation */}
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <Home className="w-6 h-6 text-gray-700 dark:text-white" />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <div className="h-6 border-l border-gray-300" />
              </NavigationMenuItem>

              <NavigationMenuItem>
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Projects
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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Menu (hidden on small screens unless toggled open) */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-neutral-800 rounded-full px-4 py-1.5 transition duration-300 ease-in-out"
                >
                  Projects
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-neutral-800 rounded-full px-4 py-1.5 transition duration-300 ease-in-out"
                >
                  Resume
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black dark:text-white hover:bg-gray-300 dark:hover:bg-neutral-800 rounded-full px-4 py-1.5 transition duration-300 ease-in-out whitespace-nowrap "
                >
                  About me
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ThemeToggle />
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
            absolute top-0 left-0 w-full h-1/2 bg-background shadow-lg p-6 flex flex-col items-start gap-4
            transform transition-transform duration-300 ease-in-out
            ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }
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
          <a href="#" className="text-black dark:text-white text-lg">
            Projects
          </a>
          <a href="#" className="text-black dark:text-white text-lg">
            Resume
          </a>
          <a href="#" className="text-black dark:text-white text-lg">
            About me
          </a>
        </div>
      </div>
    </div>
  );
}
