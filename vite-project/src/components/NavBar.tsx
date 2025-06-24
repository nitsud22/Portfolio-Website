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

import { DropdownMenuDemo } from "./MobileMenu";

import { NavLink, useNavigate } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pressed, setPressed] = useState(false);

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
    <div className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-neutral-900 bg-white">
      <div className="mx-auto flex justify-between items-center px-4 py-2">
        {/* Left side navigation */}
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavLink to="/">
                  <h2 className="text-2xl font-semi-bold tracking-tight text-gray-900 dark:text-white transition-colors whitespace-nowrap">
                    dustin santoso
                  </h2>
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side navigation */}
        <div className="flex-1 flex justify-end items-center ">
          {/* Hamburger toggle (only visible on small screens) */}
          <div className="block md:hidden text-black dark:text-white">
            <DropdownMenuDemo></DropdownMenuDemo>
          </div>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-5">
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black"
                        : "text-neutral-400 hover:text-black"
                    } transition-colors duration-200`
                  }
                >
                  Portfolio
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black"
                        : "text-neutral-400 hover:text-black"
                    } transition-colors duration-200`
                  }
                >
                  Resume
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavLink
                  to="/aboutme"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-black"
                        : "text-neutral-400 hover:text-black"
                    } transition-colors duration-200`
                  }
                >
                  About Me
                </NavLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
