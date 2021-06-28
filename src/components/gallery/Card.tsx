import React from "react";
import { CardProps } from "../../types";

export const Card = ({ image, carousel }: CardProps) => {
  return (
    <div
      className="max-w-md rounded
     overflow-hidden shadow-lg 
     cursor-pointer transition 
     duration-500 ease-in-out 
     transform 
     hover: shadow-2xl
     hover:-translate-y-1
      hover:scale-110"
    >
      <img
        src={image.webformatURL}
        alt="random"
        className={` ${carousel ? "w-96" : "w-full"} `}
      />
      {carousel ? (
        <> </>
      ) : (
        <>
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2 text-center">
              Nims
            </div>
          </div>
        </>
      )}
    </div>
  );
};
