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
    <div className="w-full flex flex-row space-x-10 items-center justify-center">
      {cardData.map((card, index) => (
        <Card key={index} className="w-150">
          <CardHeader>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-80 object-cover rounded-md"
            />
            <CardTitle className="mt-4">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
