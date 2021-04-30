import React from "react";
import { Card } from "../components/gallery/Card";
import { ImageSearch } from "../components/gallery/ImageSearch";
import { imageProps, GalleryProps } from "../types";
import { Nav } from "../components/home/Nav";

export const Gallery = ({ images, isLoading, searchText }: GalleryProps) => {
  return (
    <>
      <Nav gallery />
      <div className="container mx-auto p-5">
        <ImageSearch searchText={(text) => searchText(text)} />

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
          <div className="grid grid-cols-3 gap-6">
            {images.map((image: imageProps) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
