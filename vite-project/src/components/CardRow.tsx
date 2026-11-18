import asa from "../assets/log.jpg";
import dash from "../assets/crawlbee_logo.png";
import ccse from "../assets/CCSE.png";
import { NavLink } from "react-router-dom";

export function Cards() {
  const cardData = [
    {
      id: "college-outcomes-prediction",
      image: asa,
      title: "Predicting College Student Outcomes Using Logistic Regression",
      description: (
        <>
          Implemented Logistic Regression from scracth in C++ to predict if
          students would 'Graduate' or 'Dropout'. The data to train the model
          was obtained from the UCI Machine Learning Respository and Wrangled
          using Python.
        </>
      ),
      path: "/college-outcomes",
    },
    {
      id: "crawl-monitoring-dashboard",
      image: dash,
      imageClassName: "w-1/4 md:w-1/4  aspect-square object-contain",
      title: "Web Crawler Health Monitoring Dashboard",
      description: (
        <>
          {" "}
          Worked with a team of UCR Data Science Fellows to create a real-time
          Web Crawler health monitoring dashboard for the industry partner
          CrawlBee.
        </>
      ),
      path: "/crawl-dashboard",
    },
    {
      id: "political-sentiment-detection",
      image: ccse,
      title:
        "Multimodal Approch To Political Sentiment Classification\n(Article In Progress)",
      description: <> </>,
      path: "/",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-10 ">
      {cardData.map((card, index) => (
        <NavLink to={card.path} key={index} className="w-full">
          <div
            className="group flex flex-row overflow-hidden bg-transparent dark:border-neutral-800 dark:bg-neutral-900"
            id={card.id}
            data-observe-section
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className={
                card.imageClassName ??
                "w-1/4 md:w-1/4 aspect-square object-cover"
              }
            />

            {/* Text Content */}
            <div className="flex w-2/3 flex-col pl-2 text-left ">
              <span className="text-normal font-semibold text-black dark:text-white md:mb-2 md:text-xl">
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
