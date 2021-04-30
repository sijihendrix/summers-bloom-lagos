import React from "react";
import { Card } from "./Card";
import { imageProps, CarouselWheelProps } from "../../types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const CarouselWheel = ({ images }: CarouselWheelProps) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <main className="p-10">
      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        arrows={false}
        autoPlaySpeed={4000}
        autoPlay={true}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        customTransition="all .5"
      >
        {images.map((image: imageProps) => (
          <Card key={image.id} image={image} carousel />
        ))}
      </Carousel>
    </main>
  );
};
