import { useState } from "react";

import { Cards } from "@/components/CardRow";

function Projects() {
  return (
    <div className="width:100% ">
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
