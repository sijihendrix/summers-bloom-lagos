import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { ImageSearch } from "./ImageSearch";
import { imageProps } from "../../types";
import { Nav } from "../home/Nav";
import axios from "axios";

export const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
      )
      .then((response) => {
        setImages(response.data.hits);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [term]);
  return (
    <>
      <Nav gallery />
      <div className="container mx-auto p-5">
        <ImageSearch searchText={(text) => setTerm(text)} />

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
