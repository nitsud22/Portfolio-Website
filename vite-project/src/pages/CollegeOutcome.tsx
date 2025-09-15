function CollegeOutcome() {
  return (
    <div className="px-4 md:px-0  max-w-5xl mx-auto pt-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className=" w-full">
          <h2 className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl  tracking-wide font-semibold transition-colors first:mt-0 text-left py-5">
            Content
          </h2>
        </div>
        {/* Right column: On this page sidebar */}
        <div className="hidden lg:block whitespace-nowrap list-outside text-left pr-4">
          <h2
            id="projects"
            className="scroll-m-20 text-xl font-semibold transition-colors first:mt-0 py-2"
          >
            On This Page
          </h2>
          {/* The list-inside class is on the parent ul */}
          <div className="">
            <ul className="text-lg space-y-2 list-inside pl-2 ">
              {/* Each link is wrapped in its own li */}
              <li>
                <a
                  href="#projects"
                  className="transition-colors duration-500 text-gray-500 hover:text-black text-base pl-2"
                >
                  Projects
                </a>
                <li>
                  <a
                    href="#college-outcomes-prediction"
                    className="text-gray-500 hover:text-black text-base pl-2"
                  >
                    Logistic Regression
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 hover:text-black text-base pl-2"
                    href="#crawl-monitoring-dashboard"
                  >
                    Grafana Dashboard
                  </a>
                </li>
              </li>

              <li>
                <a href="#research" className="text-black ">
                  Research
                </a>
                <li>
                  <a
                    href="#rhetoric-detection"
                    className="text-gray-500 hover:text-black text-base pl-2"
                  >
                    Rhetoric Detection
                  </a>
                </li>
              </li>
              <li>
                <a href="#training" className="text-black ">
                  Training
                </a>
                <li>
                  <a
                    href="#logistic-regression"
                    className="text-gray-500 hover:text-black text-base pl-2"
                  >
                    HCAI EHR Training
                  </a>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeOutcome;
