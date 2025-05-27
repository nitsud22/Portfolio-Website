import { useState } from "react";

import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import { SocialLinks } from "@/components/Socials";
import { Footer } from "@/components/Footer";

function Projects() {
  return (
    <div className="width:100% ">
      <Introduction></Introduction>
      <div className="w-full border-b md:py-3 py-4 dark:bg-black md:px-8 lg:px-30">
        <h1 className="lg:text-3xl font-bold md:text-2xl text-xl md:text-left">
          Dustin Santoso
        </h1>

        <div className="flex justify-center md:justify-between items-center mt-1 flex-wrap">
          <p className="lg:text-lg md:text-m text-s">
            Aspiring ETL Developer | Recent CS Graduate | Sharing Kindness
          </p>

          <div className="flex space-x-4 text-xl mt-2 md:mt-0 ">
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-8 lg:px-30">
        {" "}
        {/* Responsive horizontal padding */}
        <div className="py-2">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5">
            Personal Projects
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
