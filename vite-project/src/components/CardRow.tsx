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
      image: "https://via.placeholder.com/300x180",
      title: "Card One",
      description: "This is the first card description.",
    },
    {
      image: "https://via.placeholder.com/300x180",
      title: "Card Two",
      description: "This is the second card description.",
    },
    {
      image: "https://via.placeholder.com/300x180",
      title: "Card Three",
      description: "This is the third card description.",
    },
  ];

  return (
    <div className=" flex flex-row space-x-20 items-center justify-center">
      {cardData.map((card, index) => (
        <Card key={index} className="w-80">
          <CardHeader>
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <CardTitle className="mt-4">{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
