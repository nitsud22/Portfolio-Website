import { useState } from "react";

import { Cards } from "@/components/CardRow";
import { Introduction } from "@/components/Introduction";
import { SocialLinks } from "@/components/Socials";

function Projects() {
  return (
    <div className="width:100% ">
      <Introduction></Introduction>
      <div className="w-full border-b md:py-3 py-4 dark:bg-black px-5">
  <h1 className="lg:text-3xl font-bold md:text-2xl text-xl md:text-left">Dustin Santoso</h1>

  <div className="flex justify-center md:justify-between items-center mt-1 flex-wrap">
    <p className="lg:text-lg md:text-m text-s">
      Aspiring ETL Developer | Building connections through tech
    </p>
    
    <div className="flex space-x-4 text-xl mt-2 md:mt-0 ">
        <SocialLinks></SocialLinks>
    </div>
  </div>
</div>

      <div className="py-2">
        {" "}
        <h2 className="jusimt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 px-5">
          Personal Projects
        </h2>
      </div>
      <Cards></Cards>
      <div className="py-10"></div>
      <div className="py-2">
        <h2 className="jusimt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-left py-5 px-5 ">
          Team Projects
        </h2>
      </div>
      <Cards></Cards>
      <div className="py-10"></div>
      <div className="py-10 padding-10 w-full border-t border-gray-200 dark:border-gray-700 bg-background"></div>
    </div>
  );
}

export default Projects;
