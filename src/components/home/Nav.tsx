import React from "react";
import { toggleMenu } from "../../helpers/toggleMenu";
import { NavProps } from "../../types";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assests/instagram.svg";

export const Nav = ({ gallery }: NavProps) => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-5  text-white mx-auto dark:bg-gray-800 max-w-screen-lg opacity-100  ">
      <Link to="/">
        {/* <img
          src={Logo}
          alt="Cake stuff"
          width="60"
          className="rounded-full shadow  max-w-full h-auto align-middle border-none cursor-pointer"
        /> */}
        <Logo />
      </Link>
      <div className="flex md:hidden">
        <button id="hamburger" onClick={toggleMenu}>
          <img
            className={`toggle block`}
            src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            width="40"
            height="40"
            alt="img"
          />
          <img
            className={`toggle hidden`}
            src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
            width="40"
            height="40"
            alt="img"
          />
        </button>
      </div>
      <div
        className={`toggle hidden md:flex w-full md:w-auto text-center text-2xl text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none ${
          gallery ? "text-black" : ""
        }`}
      >
        <a
          className={`block md:inline-block py-2 px-4  hover:text-gray-800 hover:text-underline  font-bold no-underline`}
          href="/"
        >
          Home
        </a>
        <a
          className="block md:inline-block no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
          href="/#about "
        >
          About
        </a>
        <a
          className="block md:inline-block  no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
          href="/gallery"
        >
          Gallery
        </a>
        <a
          className="inline-block  no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
          href="/"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
