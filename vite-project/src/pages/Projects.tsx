import { useState } from "react";
import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { ResearchCards } from "@/components/ResearchCards";
import { TrainingCards } from "@/components/TrainingCards";
import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import hanni from "../assets/hanni.jpg";
import { SocialLinks } from "@/components/Socials";
import { Footer } from "@/components/Footer";

function Projects() {
  return (
    <div className="w-full ">
      <Introduction></Introduction>

      <div className="w-full md:py-6 py-6 px-5 dark:bg-black  ">
        <div className="max-w-5xl mx-auto "></div>
      </div>
      <div className=" max-w-5xl mx-auto px-4 lg:px-0">
        {/* Main layout: Left = Content, Right = Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column: Header, Cards, Research */}
          <div className="w-full">
            {/* Header */}
            <div className="">
              <h2
                className="mt-10 scroll-m-20 md:text-3xl text-xl font-semibold transition-colors first:mt-0 text-left py-5"
                id="projects"
              >
                Projects
              </h2>
            </div>
            <Cards />

            {/* Spacer */}
            <div className="py-10"></div>

            {/* Research section */}
            <div className="py-2 w-full md:py-3 py-4 dark:bg-black ">
              <h2
                className="mt-10 scroll-m-20 md:text-3xl text-xl  font-semibold transition-colors first:mt-0 text-left py-5"
                id="research"
              >
                Research
              </h2>
            </div>
            <ResearchCards></ResearchCards>
            <div className="py-10 "></div>
            <div className="py-2 md:py-3 py-4 dark:bg-black ">
              <h2
                className="mt-10 scroll-m-20 lg:text-3xl text-xl tracking-wide font-semibold transition-colors first:mt-0 text-left py-5"
                id="training"
              >
                Training
              </h2>
            </div>
            <TrainingCards></TrainingCards>
          </div>

          {/* Right column: On this page sidebar */}
          <div className="hidden lg:block whitespace-nowrap list-outside text-left pr-4 py-5">
            <h2
              id="projects"
              className="scroll-m-20 text-xl font-semibold transition-colors first:mt-0 pb-2 pl-2"
            >
              On This Page
            </h2>
            {/* The list-inside class is on the parent ul */}
            <div className=" pl-2">
              <ul className="text-lg space-y-2 p  ">
                {/* Each link is wrapped in its own li */}
                <li>
                  <a
                    href="#projects"
                    className="text-gray-500 transition-colors duration-300 hover:text-black text-lg"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#college-outcomes-prediction"
                    className="text-gray-500 text-gray-500 transition-colors hover:text-black text-base pl-2"
                  >
                    Logistic Regression
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 text-gray-500 transition-colors  hover:text-black text-base pl-2"
                    href="#crawl-monitoring-dashboard"
                  >
                    Grafana Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="text-gray-500 text-gray-500 transition-colors hover:text-black text-lg"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    href="#rhetoric-detection"
                    className="text-gray-500 text-gray-500 transition-colors  hover:text-black text-base pl-2"
                  >
                    Rhetoric Detection
                  </a>
                </li>
                <li>
                  <a
                    href="#training"
                    className="text-gray-500 text-gray-500 transition-colors hover:text-black text-lg"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#logistic-regression"
                    className="text-gray-500 text-gray-500 transition-colors hover:text-black text-base pl-2"
                  >
                    HCAI EHR Training
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
