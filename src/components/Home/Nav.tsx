import React from "react";

export const Nav = () => {
  function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle?.item(i)?.classList.toggle("hidden");
    }
  }
  return (
    <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
      <img
        src="http://acmelogos.com/images/logo-1.svg"
        alt="ACME"
        width="120"
      />
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
      <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <a
          href="/"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Home
        </a>
        <a
          href="/about"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          About
        </a>
        <a
          href="/gallery"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Gallery
        </a>
        <a
          href="/contact"
          className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
