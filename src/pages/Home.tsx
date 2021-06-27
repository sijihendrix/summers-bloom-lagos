import React from "react";
import { Container } from "../components";
import { CarouselWheelProps } from "../types";
import { Content } from "../components/home/Content";
import { OurStory } from "./OurStory";

export const Home = ({ images }: CarouselWheelProps) => {
  return (
    <>
      <Container component={Content}>
        <Content />
      </Container>
      <OurStory images={images} />
    </>
  );
};
