import asa from "../assets/asa.jpeg";
import haerin from "../assets/haerin.jpg";
import bae from "../assets/bae.jpg";
import logreg from "../assets/logreg.png";
import { Link } from "react-router-dom";

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
      image: logreg,
      title: "Predicting College Student Outcomes with Logistic Regression",
      description: (
        <>
          As part of my Machine Learning course at CSUSB we were tasked with a
          final project. Either you could use sci-kit learn to test the
          differences of several Machine Learning models or you could implement
          a machine learning algorithm from scratch using a language of your
          choice. I chose the second option. I implemented the supervised
          learning alogrithm : Logistic Regression on a dataset of college
          students for binary classification. The model was able to predict
          whether a student would graduate or dropout witha 91% accuracy.
        </>
      ),
      path: "/page-one",
    },
    {
      image: haerin,
      title: "Card Two",
      description: "...",
      path: "/page-two",
    },
    {
      image: bae,
      title: "Card Three",
      description: "...",
      path: "/page-three",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10">
      {cardData.map((card, index) => (
        <Link to={card.path} key={index} className="w-full">
          <div className="group flex flex-col md:flex-row bg-white dark:bg-neutral-900 overflow-hidden">
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="md:w-1/3 md:aspect-square h-64 lg:h-80 object-cover"
            />

            {/* Text Content */}
            <div className="flex flex-col md:text-left md:pl-3 p-4 md:p-0 w-full">
              <h3 className="text-3xl font-semibold mb-2 text-gray-900 dark:text-white">
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
