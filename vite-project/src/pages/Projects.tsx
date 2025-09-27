import { useEffect } from "react";
import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";

import { TrainingCards } from "@/components/TrainingCards";
import { Footer } from "@/components/Footer";

function Projects() {
  // --- START: New useEffect for scroll position ---
  useEffect(() => {
    // 1. Check if a saved scroll position exists
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      // 2. If it exists, scroll to that position
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
      // 3. Remove it so it doesn't interfere with normal scrolling
      sessionStorage.removeItem("scrollPosition");
    }

    // 4. This function will run when the component unmounts (user navigates away)
    const handleBeforeUnload = () => {
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // 5. Cleanup function to save position when navigating within the app
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    };
  }, []);
  // --- END: New useEffect for scroll position ---

  useEffect(() => {
    document.title = "Dustin Santoso";
  }, []);

  return (
    <div className="w-full -mt-16 ">
      <Introduction />

      <div className="w-full dark:bg-black">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-7">
          <main className="w-4/5 text-left">
            <section id="projects" className="scroll-m-[10vh]">
              <h2 className="mt-10 md:text-2xl text-xl font-semibold py-5">
                PROJECTS
              </h2>
              <Cards />
            </section>

            <section id="training" className="scroll-m-[10vh]">
              <h2 className="mt-10 lg:text-2xl text-xl font-semibold py-5">
                TRAINING
              </h2>
              <TrainingCards />
            </section>
          </main>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Projects;
