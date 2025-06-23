import { useState } from "react";
import { FiMapPin, FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import { ResearchCards } from "@/components/ResearchCards";
import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import hanni from "../assets/hanni.jpg";
import { SocialLinks } from "@/components/Socials";
import { Footer } from "@/components/Footer";

function Projects() {
  return (
    <div className="width:100% ">
      <Introduction></Introduction>

      <div className="w-full border-b md:py-3 py-4 dark:bg-black  ">
        <div className="px-4 md:px-8 max-w-7xl mx-auto ">
          <h1 className="lg:text-3xl font-bold md:text-2xl text-xl text-left ">
            Dustin Santoso
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0 ">
            <p className="lg:text-lg md:text-m text-s text-left">
              Aspiring Data Engineer | Recent CS Graduate
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        {/* Main layout: Left = Content, Right = Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column: Header, Cards, Research */}
          <div className="lg:w-3/4 w-full">
            {/* Header */}
            <div className="">
              <h2
                id="projects"
                className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl  tracking-wide font-semibold transition-colors first:mt-0 text-left py-5"
              >
                Projects
              </h2>
            </div>

            {/* Cards */}
            <Cards />

            {/* Spacer */}
            <div className="py-10"></div>

            {/* Research section */}
            <div
              className="py-2 w-full border-t md:py-3 py-4 dark:bg-black px-5"
              id="research"
            >
              <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-wide transition-colors first:mt-0 text-left py-5">
                Research
              </h2>
            </div>
            <ResearchCards></ResearchCards>
            <div className="py-10 w-full border-b border-gray-200 dark:border-gray-700 bg-background"></div>
          </div>

          {/* Right column: On this page sidebar */}
          <div className="hidden lg:block lg:w-1/4 w-full items-start text-left">
            <div className="">
              <h2
                id="projects"
                className="mt-10 scroll-m-20 text-2xl font-semibold  transition-colors first:mt-0 py-5"
              >
                On this page
              </h2>
              <ul className="space-y-2 px-2 text-left">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-500 hover:text-black"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className="text-gray-500 hover:text-black"
                  >
                    Research
                  </a>
                </li>
              </ul>
              <div className="pt-10 ">
                <h2 className="mb-4 py-5 pb-1 mt-10 scroll-m-20 text-2xl font-semibold transition-colors first:mt-0 text-left border-t">
                  Contact Me
                </h2>
                <div className="space-y-3 px-2  text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <FiMail />
                    <a href="mailto:dustin.santoso025@gmail.com">
                      dustin.santoso025@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiLinkedin />
                    <a href="https://www.linkedin.com/in/dustinsantoso/">
                      linkedin.com/dustinsantoso
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <FiGithub />
                    <a href="https://github.com/nitsud22">
                      github.com/nitsud22
                    </a>
                  </p>
                </div>
              </div>
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
