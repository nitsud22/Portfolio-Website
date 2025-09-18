import asa from "../assets/asa.jpeg";

import dash from "../assets/Crawlbee.png";
import { NavLink } from "react-router-dom";

export function Cards() {
  const cardData = [
    {
      id: "college-outcomes-prediction",
      image: asa,
      title: "Predicting College Student Outcomes with Logistic Regression",
      description: (
        <>
          A C++ implementation of Logistic Regression. The algorithm was given
          data pertaining to college students to predict each student's outcome,
          Graduate or Dropout. The model was able to predict whether a student
          would graduate or dropout with a accuracy of 91%
        </>
      ),
      path: "/college-outcomes",
    },
    {
      id: "crawl-monitoring-dashboard",
      image: dash,
      title: "Crawl Monitoring Dashboard",
      description: "...",
      path: "/crawl-dashboard",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10 ">
      {cardData.map((card, index) => (
        <NavLink to={card.path} key={index} className="w-full">
          {/* The scroll-mt class is removed from this div */}
          <div
            className="scroll-mt-[30vh] group flex flex-col md:flex-row bg-white dark:bg-neutral-900 overflow-hidden"
            id={card.id}
            data-observe-section
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="md:w-1/3 md:aspect-square h-64 object-cover transition-all duration-300 "
            />

            {/* Text Content */}
            <div className="flex flex-col text-left md:pl-3 py-4 md:p-0 w-full">
              <a className=" md:text-2xl text-md font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-gray-500 transition-colors duration-300 ">
                {card.title}
              </a>
              <p className="text-gray-700 text-sm dark:text-gray-300 hidden md:block">
                {card.description}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
