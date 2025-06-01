import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import keeb from "../assets/keeb.jpg";
import newjeans from "../assets/newjeans.png";
import pixelart from "../assets/pixelart.jpg";
import radiant from "../assets/radiant.png";
import asa from "../assets/asa.jpeg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const images = [keeb, newjeans, pixelart, radiant, asa];

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <div className="p-1">
              <CardContent className="flex aspect-[16/9] w-full h-full items-center justify-center p-0 b">
                <img
                  src={src}
                  alt={`Carousel item ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
