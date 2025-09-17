import cspan from "../assets/CCSE.png";

import { Link } from "react-router-dom";

export function ResearchCards() {
  const cardData = [
    {
      image: cspan,
      id: "rhetoric-detection",
      title: "A multi-modal approach to rhetorical polarization detection",
      description: <></>,
      path: "/page-one",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10">
      {cardData.map((card, index) => (
        <Link to={card.path} key={index} className="w-full">
          <div
            className="group scroll-mt-[30vh] flex flex-col md:flex-row bg-white dark:bg-neutral-900 overflow-hidden"
            id={card.id}
            data-observe-section
          >
            <img
              src={card.image}
              alt={card.title}
              className="md:w-1/3 md:aspect-square h-64  object-cover"
            />
            <div className="flex flex-col md:text-left md:pl-3 p-4 md:p-0 w-full">
              <h3 className="md:text-2xl text-md font-semibold mb-2 text-gray-900 ">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 hidden md:block">
                {card.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
