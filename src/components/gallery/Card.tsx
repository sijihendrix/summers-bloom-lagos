import React from "react";
import { CardProps } from "../../types";

export const Card = ({ image, carousel }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
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
            <div className="font-bold text-purple-500 text-xl mb-2">Nims</div>
          </div>
        </>
      )}
    </div>
  );
};
