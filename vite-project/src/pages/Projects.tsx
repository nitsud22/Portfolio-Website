import { useEffect } from "react";
import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";
import { ResearchCards } from "@/components/ResearchCards";
import { TrainingCards } from "@/components/TrainingCards";
import { Footer } from "@/components/Footer";
import { ScrollSpySidebar } from "@/components/ScrollSpySidebar"; // 1. Import the new component

// 2. Define your navigation structure in an array
const navItems = [
  { id: "projects", title: "Projects", level: 1 as const },

  { id: "research", title: "Research", level: 1 as const },

  { id: "training", title: "Training", level: 1 as const },
];

function Projects() {
  // The old useEffect for scroll spying is no longer needed here!
  useEffect(() => {
    document.title = "Dustin Santoso";
  }, []);

  return (
    <div className="w-full ">
      <Introduction />

      <div className="w-full dark:bg-black">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-10">
          <main className="w-full text-left">
            {/* All sections and h2 tags inside here will now be left-aligned */}
            <section id="projects" className="scroll-m-[10vh]">
              <h2 className="mt-10 md:text-3xl text-xl font-semibold py-5">
                Projects
              </h2>
              <Cards />
            </section>

            <section id="research" className="scroll-m-[10vh]">
              <h2 className="mt-10 md:text-3xl text-xl font-semibold py-5">
                Research
              </h2>
              <ResearchCards />
            </section>

            <section id="training" className="scroll-m-[10vh]">
              <h2 className="mt-10 lg:text-3xl text-xl font-semibold py-5">
                Training
              </h2>
              <TrainingCards />
            </section>
          </main>
          {/* 3. Render the component and pass the items */}
          <aside className="hidden lg:block pt-16 ">
            <ScrollSpySidebar items={navItems} />
          </aside>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
