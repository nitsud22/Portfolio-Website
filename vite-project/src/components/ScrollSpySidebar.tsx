import { useState, useEffect, useRef } from "react";
import type { FC } from "react";

// Define the structure for each navigation item
interface NavItem {
  id: string;
  title: string;
  level: 1 | 2;
}

// Define the component's props
interface ScrollSpySidebarProps {
  items: NavItem[];
  title?: string; // Optional title, defaults to "On This Page"
  topOffset?: number; // Optional scroll offset to trigger active state (0.0 to 1.0)
}

export const ScrollSpySidebar: FC<ScrollSpySidebarProps> = ({
  items,
  title = "ON THIS PAGE",
  topOffset = 0.35, // Corresponds to 35% from the top of the viewport
}) => {
  const [activeId, setActiveId] = useState<string>("");
  const [activeParentId, setActiveParentId] = useState<string | null>(null);
  const parentMapRef = useRef<{ [key: string]: string }>({});

  useEffect(() => {
    // Create a map to quickly find the parent of a sub-item
    let currentParentId = "";
    const map: { [key: string]: string } = {};
    items.forEach((item) => {
      if (item.level === 1) {
        currentParentId = item.id;
      } else if (item.level === 2) {
        map[item.id] = currentParentId;
      }
    });
    parentMapRef.current = map;

    const handleScroll = () => {
      let currentSectionId = "";
      const triggerLinePixels = window.innerHeight * topOffset;

      // Find the last section that has scrolled past the trigger line
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          if (sectionTop < triggerLinePixels) {
            currentSectionId = section.id;
          }
        }
      }

      // Handle the edge case where the user is at the bottom of the page
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10; // 10px buffer
      if (isAtBottom && items.length > 0) {
        currentSectionId = items[items.length - 1].id;
      }

      setActiveId(currentSectionId);
      setActiveParentId(parentMapRef.current[currentSectionId] || null);
    };

    // Set the active link on initial load and on scroll
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items, topOffset]);

  return (
    // This container is sticky and will stay in view on larger screens
    <div className="hidden lg:block self-start  ml-auto whitespace-nowrap list-outside text-left sticky top-16 ">
      <h2 className="scroll-m-20  transition-colors first:mt-0 pb-2 ml-auto text-lg font-semibold text-gray-500 tracking-tight  ">
        {title}
      </h2>
      <nav>
        <ul className="text-lg space-y-2 pl-1">
          {items.map((item) => {
            const isActive = item.id === activeId || item.id === activeParentId;
            const linkProps = {
              href: `#${item.id}`,
              "data-active": isActive ? "true" : undefined,
            };

            // Render top-level links (level 1)
            if (item.level === 1) {
              return (
                <li key={item.id}>
                  <a
                    {...linkProps}
                    className="block text-lg text-gray-500 transition-colors hover:text-green-900 dark:text-gray-400 dark:hover:text-white  data-[active=true]:text-green-900 dark:data-[active=true]:text-green-400"
                  >
                    {item.title}
                  </a>
                </li>
              );
            }

            // Render indented sub-links (level 2)
            if (item.level === 2) {
              return (
                <li key={item.id}>
                  <a
                    {...linkProps}
                    className="relative block pl-6 text-gray-500 transition-colors duration-200 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:bg-gray-200 before:transition-colors before:duration-200 hover:text-gray-900 hover:before:bg-gray-900 dark:text-gray-400 dark:before:bg-gray-700 dark:hover:text-white dark:hover:before:bg-gray-400 data-[active=true]:text-green-900 data-[active=true]:before:bg-green-900 dark:data-[active=true]:text-green-400 dark:data-[active=true]:before:bg-green-400"
                  >
                    {item.title}
                  </a>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </nav>
    </div>
  );
};
