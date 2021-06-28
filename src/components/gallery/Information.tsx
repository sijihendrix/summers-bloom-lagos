import React from "react";

export const Information = () => {
  return (
    <div
      className={"container  p-12 pl-36 flex flex-col justify-between  pb-28"}
    >
      <h2 className={"text-4xl py-5 font-normal tracking-wide uppercase"}>
        Summersbloom Gallery{" "}
      </h2>
      <h3 className={"block text-2xl py-2 font-thin tracking-wide uppercase"}>
        Wedding Cakes, Birthday Cakes and More...
      </h3>
      <span className={"block text-lg py-2 font-thin tracking-wide capitalize"}>
        Here's some of the cakes we've made:
      </span>
    </div>
  );
};
