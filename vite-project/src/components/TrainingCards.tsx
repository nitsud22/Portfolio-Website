import ochin from "../assets/Ochin.webp";

import { NavLink } from "react-router-dom";

export function TrainingCards() {
  const cardData = [
    {
      image: ochin,
      id: "ochin-training",
      title:
        "HCAI - Health Information And Electronic Records Analyst Training ",
      description: (
        <>
          Currently receiving hands on training with EPIC, SQL, Tablaeu, and
          Crystal Reports. As well as gaining foundational knowledge of
          healthcare IT systems, Security, and Compliance. Will have completed
          1552 hours of training, obtained the CAHIMS certification, and
          completed an internship by the end of the program.
        </>
      ),
      path: "",
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
              className="w-1/4 md:w-1/3 aspect-square object-cover"
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
