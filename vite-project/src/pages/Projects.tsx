import { useState } from "react";

import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import { SocialLinks } from "@/components/Socials";
import { Footer } from "@/components/Footer";

function Projects() {
  return (
    <div className="width:100% ">
      <Introduction></Introduction>
      <div className="w-full border-b md:py-3 py-4 dark:bg-black px-4 md:px-8 lg:px-30">
        <h1 className="lg:text-3xl font-bold md:text-2xl text-xl text-left">
          Dustin Santoso
        </h1>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
          <p className="lg:text-lg md:text-m text-s text-left">
            Aspiring Data Engineer | Recent CS Graduate
          </p>

          <div className="flex space-x-4 text-xl">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-30">
        {" "}
        {/* Responsive horizontal padding */}
        <div className="py-2">
          <h2 className="mt-10 scroll-m-20  text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5">
            Projects
          </h2>
        </div>
        <Cards />
        <div className="py-10 "></div>
        <div className="py-2 w-full border-t md:py-3 py-4 dark:bg-black px-5">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5">
            Team Projects
          </h2>
        </div>
        <Cards />
        <div className="py-10 w-full border-b border-gray-200 dark:border-gray-700 bg-background"></div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Projects;
