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

import { Button } from "./ui/button";
import { Home } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function NavigationBar() {
  return (
    // Full-width navbar wrapper
    <div className="padding-10 w-full border-b border-gray-200 dark:border-gray-700 bg-primary-foreground">
      {/* Centered, max-width content container */}
      <div className="mx-auto flex justify-between items-center px-4 py-5">
        {/* Left side navigation */}
        <div className="flex-1">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <Home className="w-6 h-6 text-gray-700 dark:text-white" />
              </NavigationMenuItem>

              {/* Divider */}
              <NavigationMenuItem>
                <div className="h-6 border-l border-gray-400" />
              </NavigationMenuItem>

              {/* Current Page Title */}
              <NavigationMenuItem>
                <h2 className="scroll-m-20 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Projects
                </h2>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side navigation */}
        <div className="flex-1 flex justify-end gap-4">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem />
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black hover:bg-slate-300 dark:hover:bg-neutral-800 rounded-full px-5 py-1.5 no-underline hover:no-underline focus:no-underline visited:no-underline  dark:text-white"
                >
                  Projects
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black hover:bg-slate-300 dark:hover:bg-neutral-800 rounded-full px-5 py-1.5 no-underline hover:no-underline focus:no-underline visited:no-underline dark:text-white"
                >
                  Resume
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="#"
                  className="text-black hover:bg-slate-300 dark:hover:bg-neutral-800 rounded-full px-5 py-1.5 no-underline hover:no-underline focus:no-underline visited:no-underline dark:text-white"
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
    </div>
  );
}
