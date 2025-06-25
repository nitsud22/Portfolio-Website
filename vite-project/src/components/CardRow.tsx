import asa from "../assets/asa.jpeg";
import haerin from "../assets/haerin.jpg";
import bae from "../assets/bae.jpg";
import logreg from "../assets/logreg.png";
import dash from "../assets/crawl-dash.png";
import { NavLink, useNavigate } from "react-router-dom";

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
      image: asa,
      title: "Predicting College Student Outcomes with Logistic Regression",
      description: (
        <>
          A C++ implementation of Logistice Regression. I used the algorithm on
          a dataset of college students for binary classification. The model was
          able to predict whether a student would graduate or dropout witha 91%
          accuracy.
        </>
      ),
      path: "/collegeoutcomes",
    },
    {
      image: dash,
      title: "Real-time Crawl Monitoring Dashboard for CrawlBee ",
      description: "...",
      path: "/page-two",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10">
      {cardData.map((card, index) => (
        <NavLink to={card.path} key={index} className="w-full">
          <div className="group flex flex-col md:flex-row bg-white dark:bg-neutral-900 overflow-hidden">
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="md:w-1/3 md:aspect-square h-55 2xl:h-80 object-cover"
            />

            {/* Text Content */}
            <div className="flex flex-col text-left md:pl-3 py-4 md:p-0 w-full">
              <h3 className="lg:text-3xl md:text-2xl text-md font-semibold mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h3>
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
