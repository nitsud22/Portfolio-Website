import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";

import { Footer } from "@/components/Footer";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Dustin Santoso";
  }, []);

  return (
    // 1. Added "flex flex-col min-h-screen" to the root container
    <div className="w-full flex flex-col min-h-screen bg-[#FAF9F6] ">
      {/* 2. Created a new wrapper with "flex-grow" for all content ABOVE the footer */}
      <div className="flex-grow">
        <div className="relative z-10">
          <Introduction />

          {/* 1. This is the Tab Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="relative h-full max-w-5xl mx-auto">
              <div className="absolute bottom-0 right-0 lg:w-2/3 px-4 lg:px-0 pointer-events-auto">
                {/* 2. Tab container */}
                <div className="hidden lg:flex gap-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. This is the main content block (now inside flex-grow) */}
        <div className="w-full bg-[#FAF9F6] dark:bg-black">
          <div className=" max-w-5xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:justify-end gap-7">
              <main
                className="lg:w-5/7 w-full text-left relative bg-[#FAF9F6] dark:bg-black 
                           rounded-b-lg lg:rounded-t-lg 
                           pt-10  pb-6 
                           md:pt-30  md:pb-8
                           lg:pt-0"
              >
                {/* --- START: ADDED HEADER --- */}
                <h2 className=" md:text-2xl text-xl font-semibold tracking-tight transition-colors whitespace-nowrap py-4 text-gray-900 dark:text-gray-100">
                  Projects
                </h2>
                {/* --- END: ADDED HEADER --- */}
                <Cards />
              </main>
            </div>
            {/* 3. The Footer was REMOVED from here */}
          </div>
        </div>
      </div>{" "}
      {/* 2. End of the "flex-grow" wrapper */}
      {/* 4. The Footer is now a sibling to the "flex-grow" div.
           We wrap it in the same containers to keep its background and centering. */}
      <div className="w-full bg-[#FAF9F6] dark:bg-black">
        <div className="max-w-5xl mx-auto px-4 lg:px-0">
          <div className="pt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div> // 1. End of the root container
  );
}

export default Projects;
