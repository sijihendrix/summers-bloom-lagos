import React from "react";
// import Lils from "../../assests/dandelion.jpg";
import { lorem } from "../../helpers/lorem";

export const MainContent = () => {
  return (
    <main
      className={`container mx-auto flex flex-col items-start p-6 pl-36 bg-dandelion bg-cover bg-no-repeat bg-fixed text-white bg-left h-screen`}
      id="about"
    >
      <h1 className="py-4 text-8xl text-bold text-center">Our Story</h1>
      <p className="text-4xl py-2 text-center"> We are a cake business</p>
      <p className="w-6/12 py-4 text-left">{lorem.generateSentences(14)} </p>
    </main>
  );
};
