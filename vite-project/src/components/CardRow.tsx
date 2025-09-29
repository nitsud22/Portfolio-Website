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
          performed with a 91% accuracy.
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
          then connected to a Grafana front-end.
        </>
      ),
      path: "/crawl-dashboard",
    },
  ];

  return (
    <div className="w-full flex flex-col sgap-4 md:gap-6 lg:gap-10 ">
      {cardData.map((card, index) => (
        <NavLink to={card.path} key={index} className="w-full">
          <div
            className="group flex flex-col md:flex-row bg-white dark:bg-neutral-900 overflow-hidden w-full"
            id={card.id}
            data-observe-section
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="md:w-1/3 md:aspect-square aspect-auto h-60 md:h-64 object-cover transition-all duration-300 "
            />

            {/* Text Content */}
            <div className="flex flex-col text-left md:pl-3 py-4 md:p-0 w-full">
              <span className="md:text-2xl text-xl font-semibold mb-2 text-black dark:text-white transition-colors duration-300">
                {card.title}
              </span>
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
