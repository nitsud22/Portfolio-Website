import { Introduction } from "@/components/Introduction";
import { Cards } from "@/components/CardRow";
import { TrainingCards } from "@/components/TrainingCards";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

function Projects() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const [activeTab, setActiveTab] = useState("projects");

  // --- Tab Style Definitions ---
  const tabBaseStyle =
    "py-1 px-6 text-lg font-medium focus:outline-none rounded-t-lg transition-colors duration-150";
  const activeTabStyle = "bg-white dark:bg-black text-green-800";
  const inactiveTabStyle =
    "bg-gray-200 dark:bg-gray-700 text-gray-500 cursor-pointer dark:hover:bg-gray-600";

  return (
    // 1. Added "flex flex-col min-h-screen" to the root container
    <div className="w-full flex flex-col min-h-screen">
      {/* 2. Created a new wrapper with "flex-grow" for all content ABOVE the footer */}
      <div className="flex-grow">
        <div className="relative z-10">
          <Introduction />

          {/* 1. This is the Tab Overlay */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="relative h-full max-w-5xl mx-auto">
              <div className="absolute bottom-0 right-0 lg:w-2/3 px-4 lg:px-0 pointer-events-auto">
                {/* 2. Tab container */}
                <div className="hidden lg:flex gap-1">
                  <button
                    onClick={() => setActiveTab("projects")}
                    className={`${tabBaseStyle} ${
                      activeTab === "projects"
                        ? activeTabStyle
                        : inactiveTabStyle
                    }`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => setActiveTab("training")}
                    className={`${tabBaseStyle} ${
                      activeTab === "training"
                        ? activeTabStyle
                        : inactiveTabStyle
                    }`}
                  >
                    Trainings
                  </button>
                  <button
                    onClick={() => setActiveTab("certifications")}
                    className={`${tabBaseStyle} ${
                      activeTab === "certifications"
                        ? activeTabStyle
                        : inactiveTabStyle
                    }`}
                  >
                    Certifications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. This is the main content block (now inside flex-grow) */}
        <div className="w-full bg-white dark:bg-black">
          <div className=" max-w-5xl mx-auto px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row lg:justify-end gap-7">
              <main
                className="lg:w-2/3 w-full text-left relative bg-white dark:bg-black 
                           rounded-b-lg lg:rounded-t-lg 
                           pt-10  pb-6 
                           md:pt-30  md:pb-8
                           lg:pt-5"
              >
                {/* ... all your <section> tags ... */}
                <section
                  id="projects"
                  className={`scroll-m-[10vh] ${
                    activeTab === "projects" ? "block" : "lg:hidden"
                  }`}
                >
                  {/* --- START: ADDED HEADER --- */}
                  <h2 className="lg:hidden tracking-tight md:text-xl text-lg font-semibold mt-0 py-2 text-gray-900 dark:text-gray-100">
                    PROJECTS
                  </h2>
                  {/* --- END: ADDED HEADER --- */}
                  <Cards />
                </section>

                <section
                  id="training"
                  className={`scroll-m-[10vh] ${
                    activeTab === "training" ? "block" : "lg:hidden"
                  }`}
                >
                  {/* --- START: ADDED HEADER --- */}
                  <h2 className="lg:hidden md:text-2xl tracking-tight md:text-xl text-lg font-semibold mt-0 py-2 text-gray-900 dark:text-gray-100">
                    TRAININGS
                  </h2>
                  {/* --- END: ADDED HEADER --- */}
                  <TrainingCards />
                </section>
                <section
                  id="certifications"
                  className={`scroll-m-[10vh] hidden ${
                    activeTab === "certifications" ? "lg:block" : "lg:hidden"
                  }`}
                >
                  {/* --- START: ADDED HEADER --- */}
                  <h2 className="lg:hidden tracking-tight md:text-xl text-lg font-semibold mt-0 py-2 text-gray-900 dark:text-gray-100">
                    Certifications
                  </h2>
                  {/* --- END: ADDED HEADER --- */}

                  {/* --- START: MODIFIED CONTENT --- */}
                  <p className="text-normal font-semibold text-gray-700 dark:text-white md:mb-2 md:text-xl">
                    Currently working towards:
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ">
                      <li> CAHIMS Certification</li>
                      <li>EpicCare Ambulatory Proficient Self Study</li>
                    </ul>
                  </p>
                  {/* --- END: MODIFIED CONTENT --- */}
                </section>
              </main>
            </div>
            {/* 3. The Footer was REMOVED from here */}
          </div>
        </div>
      </div>{" "}
      {/* 2. End of the "flex-grow" wrapper */}
      {/* 4. The Footer is now a sibling to the "flex-grow" div.
           We wrap it in the same containers to keep its background and centering. */}
      <div className="w-full bg-white dark:bg-black">
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
