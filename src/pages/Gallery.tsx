import React from "react";
import { Card } from "../components/gallery/Card";

import { imageProps, GalleryProps } from "../types";
import { Nav } from "../components/home/Nav";
import { Information } from "../components/gallery/Information";

export const Gallery = ({ images, isLoading, searchText }: GalleryProps) => {
  return (
    <>
      <Nav gallery />
      <Information />
      <div className="container mx-auto p-5">
        {!isLoading && images.length === 0 && (
          <h1 className="text-5xl text-center mx-auto mt-32">
            No Images Found
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6l text-center mx-auto mt-32">
            Loading Loading Loading
          </h1>
        ) : (
          <div className="grid grid-cols-2 gap-44  mx-auto max-w-4xl">
            {images.map((image: imageProps) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
