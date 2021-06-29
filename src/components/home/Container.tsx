import React from "react";
import { ContainerProps } from "../../types";

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="py-5 bg-hero-pattern bg-cover bg-no-repeat bg-fixed">
      {children}
    </div>
  );
};
