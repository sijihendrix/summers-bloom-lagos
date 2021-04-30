import React from "react";
import Background from "../../assests/pexels-flower.jpg";
import { ContainerProps } from "../../types";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-5"
    >
      {children}
    </div>
  );
};
