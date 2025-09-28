import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";
import { TrainingCards } from "@/components/TrainingCards";
import { Footer } from "@/components/Footer";

function Projects() {
  return (
    <div className="w-full -mt-16 ">
      <Introduction />

      <div className="w-full dark:bg-black">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-7">
          <main className="lg:w-3/4 w-full text-left">
            <section id="projects" className="scroll-m-[10vh]">
              <h2 className="lg:mt-10 mt-15 md:text-2xl text-xl font-semibold py-5">
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
