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
    <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="group flex flex-col md:flex-row lg:flex-col bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-md dark:hover:ring- dark:hover:ring-white dark:hover:ring-offset-2 dark:hover:ring-offset-neutral-300
hover:shadow-xl transition-shadow duration-300 w-full max-w-4xl"
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full md:aspect-[4/3] h-64 object-cover"
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
