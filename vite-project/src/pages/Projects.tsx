import { ResearchCards } from "@/components/ResearchCards";
import { TrainingCards } from "@/components/TrainingCards";
import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";

function Projects() {
  useEffect(() => {
    document.title = "Dustin Santoso";

    const sections = Array.from(
      document.querySelectorAll("[data-observe-section]")
    );
    const navLinks = document.querySelectorAll("div.lg\\:block ul a");

    if (!sections.length || !navLinks.length) return;

    const parentMap: { [key: string]: string } = {
      "college-outcomes-prediction": "projects",
      "crawl-monitoring-dashboard": "projects",
      "rhetoric-detection": "research",
      "ochin-training": "training",
    };

    const updateActiveLink = () => {
      let currentSectionId = "";
      const triggerLinePixels = window.innerHeight * 0.35;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const id = section.getAttribute("id");
        if (sectionTop < triggerLinePixels && id) {
          currentSectionId = id;
        }
      });

      // --- NEW LOGIC TO HANDLE THE BOTTOM OF THE PAGE ---
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10; // -10px buffer

      if (isAtBottom && sections.length > 0) {
        // If at the bottom, force the last section to be active
        currentSectionId =
          sections[sections.length - 1].getAttribute("id") ?? "";
      }
      // --- END OF NEW LOGIC ---

      if (!currentSectionId && sections.length > 0) {
        currentSectionId = sections[0].getAttribute("id") ?? "";
      }

      const parentId = parentMap[currentSectionId];

      navLinks.forEach((link) => {
        const linkId = link.getAttribute("href")?.substring(1);

        if (linkId === currentSectionId || linkId === parentId) {
          link.setAttribute("data-active", "true");
        } else {
          link.removeAttribute("data-active");
        }
      });
    };

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, []);

  return (
    <div className="w-full ">
      <Introduction />

      <div className="w-full md:py-6 py-6 px-5 dark:bg-black  ">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <div>
              <h2
                className="mt-10 scroll-m-[10vh] md:text-3xl text-xl font-semibold transition-colors first:mt-0 text-left py-5"
                id="projects"
                data-observe-section
              >
                Projects
              </h2>
            </div>
            <Cards />

            <div className="py-10"></div>

            <div>
              <h2
                className="mt-10 scroll-m-[10vh] md:text-3xl text-xl  font-semibold transition-colors first:mt-0 text-left py-5"
                id="research"
                data-observe-section
              >
                Research
              </h2>
            </div>
            <ResearchCards />
            <div className="py-10 "></div>
            <div>
              <h2
                className="mt-10 scroll-m-[10vh] lg:text-3xl text-xl tracking-wide font-semibold transition-colors first:mt-0 text-left py-5"
                id="training"
                data-observe-section
              >
                Training
              </h2>
            </div>
            <TrainingCards />
          </div>

          <div className="hidden lg:block self-start sticky top-8 whitespace-nowrap list-outside text-left py-8 ">
            <h2
              id="on-this-page"
              className="scroll-m-20 text-2xl font-semibold transition-colors first:mt-0 pb-2 "
            >
              On This Page
            </h2>
            <div>
              <ul className="text-lg space-y-2 pl-1 ">
                <li>
                  <a
                    href="#projects"
                    className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:text-green-900"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#college-outcomes-prediction"
                    className="relative block pl-6 text-gray-500 transition-colors duration-200 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:bg-gray-200 before:transition-colors before:duration-200 hover:text-gray-900 hover:before:bg-gray-900 data-[active=true]:text-green-900 data-[active=true]:before:bg-green-900"
                  >
                    Logistic Regression
                  </a>
                </li>
                <li>
                  <a
                    href="#crawl-monitoring-dashboard"
                    className="relative block pl-6 text-gray-500 transition-colors duration-200 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:bg-gray-200 before:transition-colors before:duration-200 hover:text-gray-900 hover:before:bg-gray-900 data-[active=true]:text-green-900 data-[active=true]:before:bg-green-900"
                  >
                    Grafana Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:text-green-900"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#rhetoric-detection"
                    className="relative block pl-6 text-gray-500 transition-colors duration-200 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:bg-gray-200 before:transition-colors before:duration-200 hover:text-gray-900 hover:before:bg-gray-900 data-[active=true]:text-green-900 data-[active=true]:before:bg-green-900"
                  >
                    Rhetoric Detection
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="block text-lg text-gray-500 transition-colors hover:text-black data-[active=true]:text-green-900"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#ochin-training"
                    className="relative block pl-6 text-gray-500 transition-colors duration-200 before:absolute before:left-0 before:top-1/2 before:h-4 before:w-0.5 before:-translate-y-1/2 before:bg-gray-200 before:transition-colors before:duration-200 hover:text-gray-900 hover:before:bg-gray-900 data-[active=true]:text-green-900 data-[active=true]:before:bg-green-900"
                  >
                    HCAI EHR Training
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
