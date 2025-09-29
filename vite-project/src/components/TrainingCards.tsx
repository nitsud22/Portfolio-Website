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
