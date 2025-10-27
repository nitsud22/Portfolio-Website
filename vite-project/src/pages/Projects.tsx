import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";
import { TrainingCards } from "@/components/TrainingCards";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="w-full -mt-16 ">
      <div className="relative z-10">
        <Introduction />
      </div>

      <div className="w-full dark:bg-black">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-end gap-7">
          <main className="lg:w-2/3 w-full text-left relative pt-10 md:pt-30 lg:pt-0 ">
            <section id="projects" className="scroll-m-[10vh]">
              <h2 className=" tracking-tight md:text-2xl text-xl font-semibold mt-4 md:mt-0 py-2 md:py-5 text-gray-500">
                PROJECTS
              </h2>
              <Cards />
            </section>

            <section id="training" className="scroll-m-[10vh]">
              <h2 className=" md:text-2xl tracking-tight text-xl font-semibold mt-4 md:mt-0 py-2 md:py-5 text-gray-500">
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
