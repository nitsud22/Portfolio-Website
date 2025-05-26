import asa from "../assets/asa.jpeg";
import haerin from "../assets/haerin.jpg";
import bae from "../assets/bae.jpg";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function Cards() {
  const cardData = [
    {
      image: asa,
      title: "Title",
      description: "description.",
    },
    {
      image: haerin,
      title: "Card Two",
      description: "This is the second card description.",
    },
    {
      image: bae,
      title: "Card Three",
      description: "This is the third card description.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 ">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group flex flex-col md:flex-row  bg-white dark:bg-neutral-900 overflow-hidden transition-shadow duration-300 w-full "
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="md:w-1/3 md:aspect-square h-64 lg:h-100 object-cover"
          />

          {/* Text Content */}
          <div className="flex flex-col justify-center p-6 w-full ">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
              {card.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
