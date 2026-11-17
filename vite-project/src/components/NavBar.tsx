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

  const isPortfolioPage = location.pathname === "/";

  return (
    <div
      // --- START: MODIFIED CODE ---
      className={`
        ${!isPortfolioPage ? "sticky top-0" : ""} 
        z-50 w-full
        ${
          !isPortfolioPage
            ? "bg-[#FAF9F6] text-black " // Other pages
            : "bg-[#1F3B69] text-white" // Portfolio page (no scroll logic)
        }
      `}
      // --- END: MODIFIED CODE ---
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        {/* Left side navigation */}
        <div className="flex flex-1 items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink
                  to="/"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
                  }}
                >
                  <h2
                    // --- MODIFIED: Removed all scroll logic ---
                    className={`md:text-2xl text-xl font-semibold tracking-tight transition-colors whitespace-nowrap ${
                      !isPortfolioPage ? "text-black" : "text-white"
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
                  // --- MODIFIED: Simplified logic, removed 'scrolled' ---
                  className={`text-xl font-semibold tracking-tight
                    
                    ${
                      isPortfolioPage
                        ? "text-white" // Portfolio page (inactive)
                        : "text-black " // Other pages (inactive)
                    }
                  `}
                >
                  RESUME
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation (Icons) */}
          <div className="flex items-center gap-5 md:hidden">
            <a
              href="/dustin_santoso_resume_EMR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // --- MODIFIED: Simplified logic, removed 'scrolled' ---
              className={`${
                isPortfolioPage
                  ? "text-white " // Portfolio page (inactive)
                  : "text-black " // Other pages (inactive)
              } `}
            >
              <FaFileAlt className="text-lg" />
            </a>

            <NavLink
              to="/aboutme"
              // --- MODIFIED: Simplified logic, removed 'scrolled' ---
              className={({ isActive }) =>
                `${
                  isPortfolioPage
                    ? isActive
                      ? "text-white" // Portfolio page (active)
                      : "text-gray-200 " // Portfolio page (inactive)
                    : isActive
                      ? "text-black" // Other pages (active)
                      : "text-gray-500 " // Other pages (inactive)
                } `
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
