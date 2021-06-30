import React from "react";

const items = [
  ["a", "b", "c"],
  ["Follow Us", "Instagram", "Twitter", "d"],
];
export const Footer = () => {
  return (
    <footer
      className={
        "container mx-auto flex flex-col items-center  bg-hero-pattern text-white p-10"
      }
    >
      <h2 className={"font-bold text-4xl my-4"}>SummersBloom</h2>
      <span className={"text-2xl"}>whole lot of sweet stuff going on here</span>

      <div className={"flex p-2"}>
        {items.map((arr, index) => (
          <List list={arr} key={index} />
        ))}
      </div>
    </footer>
  );
};

const List = ({ list }: ListProps) => {
  return (
    <ul className={"flex flex-col w-full p-3  "}>
      {list.map((item: string, index: number) => (
        <li key={index} className={"p-2"}>
          {item}
        </li>
      ))}
    </ul>
  );
};

type ListProps = {
  list: string[];
};
