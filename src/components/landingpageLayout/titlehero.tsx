"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export function TitleHeroComponent() {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    })
  );

  return (
    <div className="h-max bg-neutral-950 ">
      <div className="flex justify-center px-10">
        <Carousel plugins={[plugin.current]} className=" w-full max-w-[1000px]">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={"/titlleHeroREal.jpeg"}
                width={1000}
                height={0}
                alt="Title Hero image"
                className=" opacity-90 shadow-2xl border-2 border-neutral-800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/titlleHeroREal.jpeg"}
                width={1000}
                height={0}
                alt="Title Hero image"
                className="  opacity-90 shadow-2xl border-2 border-neutral-800"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/titlleHeroREal.jpeg"}
                width={1000}
                height={0}
                alt="Title Hero image"
                className=" opacity-90 shadow-2xl border-2 border-neutral-800"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
