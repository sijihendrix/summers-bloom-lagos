import React from "react";
import { Nav } from "../components/home/Nav";
import { MainContent } from "../components/our-story/MainContent";
import { CarouselWheel } from "../components/gallery/CarouselWheel";
import { CarouselWheelProps } from "../types";

export const OurStory = ({ images }: CarouselWheelProps) => {
  return (
    <>
      <Nav gallery />
      <MainContent />
      <CarouselWheel images={images} />
    </>
  );
};
