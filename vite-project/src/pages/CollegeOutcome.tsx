import datasample from "../assets/dataframe_sample.png";

function CollegeOutcome() {
  return (
    <div className="px-4 md:px-0  max-w-5xl mx-auto pt-4">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className=" w-full text-left">
          <h2 className="mt-10 scroll-m-20 lg:text-3xl md:text-2xl text-xl  tracking-wide font-semibold transition-colors first:mt-0 text-left py-5">
            Content
          </h2>
          <h3 className="text-xl font-semibold">Context</h3>
          <p>
            As part of my Machine Learning course at California State
            University, San Bernardino, for our final project we had the option
            of comparing different Machine Learning models or a code
            implementation of a Machine Learning algorithm. I chose to do a C++
            implementation of Logistic Regression.
          </p>
          <h3 className="text-xl font-semibold"> Goal</h3>
          <p>
            Use Logsitic Regression, a supervised learning model, to predict
            outcomes of College students.
          </p>
          <h3 className="text-xl font-semibold"> Logistic Regression</h3>
          <h3 className="text-xl font-semibold"> Dataset</h3>
          <p>
            The dataset used to train the model was obtained from the UCI
            Machine Learning Repository. The data was sourced from a higher
            education institutionin Portugal, containing 4426 records, 36
            attribrutes, and 3 outputs. Information was collected from students
            enrolled in undergraduate degrees ranging from Education to
            Technology.
          </p>
          <div className="py-2"></div>
          <img src={datasample} alt="datasample" />
        </div>
        {/* Right column: On this page sidebar */}

        <div className="hidden lg:block whitespace-nowrap list-outside text-left  py-8">
          <h2
            id="projects"
            className="scroll-m-20 text-xl font-semibold transition-colors first:mt-0 pb-2"
          >
            On This Page
          </h2>
          {/* The list-inside class is on the parent ul */}
          <div className=" ">
            <ul className="text-lg space-y-2 pl-1 ">
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
    </div>
  );
}

export default CollegeOutcome;
