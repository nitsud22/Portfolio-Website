import asa from "../assets/log.jpg";
import dash from "../assets/Crawlbee.png";
import { NavLink } from "react-router-dom";

export function Cards() {
  const cardData = [
    {
      id: "college-outcomes-prediction",
      image: asa,
      title: "Predicting College Student Outcomes Using Logistic Regression",
      description: (
        <>
          Implemented Logistic Regression to predict if students would
          'Graduate' or 'Dropout'. The data to train the model was obtained from
          the UCI Machine Learning Respository and Wrangled using Python. The
          machine learning model was coded from scratch using C++. The model
        </>
      ),
      path: "/college-outcomes",
    },
    {
      id: "crawl-monitoring-dashboard",
      image: dash,
      title: "Web-Crawler Health Monitoring Dashboard",
      description: (
        <>
          {" "}
          Worked with a team of UCR Data Science Fellows to create an end-to-end
          solution for our coporate partner CrawlBee. Our solution was a
          real-time Web Crawler health monitoring dashboard that displayed key
          metrics. Used a custom API to feed into a MySQL Database which was
        </>
      ),
      path: "/crawl-dashboard",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10 ">
      {cardData.map((card, index) => (
        <NavLink to={card.path} key={index} className="w-full">
          <div
            className="group flex flex-row overflow-hidde bg-white dark:border-neutral-800 dark:bg-neutral-900"
            id={card.id}
            data-observe-section
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-1/3 aspect-square object-cover"
            />

            {/* Text Content */}
            <div className="flex w-2/3 flex-col pl-2 text-left ">
              <span className="text-lg font-semibold text-black dark:text-white md:mb-2 md:text-xl">
                {card.title}
              </span>
              {/* Description is now hidden on mobile */}
              <p className="hidden text-sm text-gray-700 dark:text-gray-300 md:block">
                {card.description}
              </p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
