import React from "react";
import Lils from "../../assests/dandelion.jpg";
import { lorem } from "../../helpers/lorem";

export const MainContent = () => {
  return (
    <main
      className={`container mx-auto flex flex-col items-center p-1  max-w-screen-lg`}
      id="about"
    >
      <h1 className="py-4 text-8xl text-bold">Our Story</h1>
      <span className="text-xl py-2"> We are a cake business</span>
      <img src={Lils} alt="Nims" className="w-9/12 py-2" />
      <p className="w-9/12 py-4">{lorem.generateSentences(9)} </p>
    </main>
  );
};
