import React from "react";
import { Container } from "../components";
import { CarouselWheel } from "../components/gallery/CarouselWheel";
import { CarouselWheelProps } from "../types";
import { Content } from "../components/home/Content";

export const Home = ({ images }: CarouselWheelProps) => {
  return (
    <>
      <Container component={Content}>
        <Content />
      </Container>

      <CarouselWheel images={images} />
    </>
  );
};
