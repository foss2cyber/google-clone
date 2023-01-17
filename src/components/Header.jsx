import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full h-16 top-0 left-0 right-0 fixed z-[100] bg-[gold]">
      <div className="flex flex-row flex-nowrap justify-between items-center">
        <ul className="inline-flex gap-4 space-x-4 space-y-auto">
          <li className="cursor-pointer ml-4 mr-auto text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://about.google/"
              title="About"
              target="_blank"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          <li className="cursor-pointer ml-2 mr-auto text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://store.google.com/"
              title="Store"
              target="_blank"
              rel="noreferrer"
            >
              Store
            </a>
          </li>
        </ul>
        <span className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 pl-2 pr-auto">
          <a
            href="https://github.com/foss2cyber/"
            title="Source Code"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} className="icon" />
          </a>
        </span>
        <button className="inline-flex font-oswald text-[beige] bg-blue-700 hover:bg-[#111] hover:border-[#FC139B] hover:drop-shadow-2xl hover:text-white gap-1 space-y-auto ease-in duration-300 delay-100">
          <a
            href="https://accounts.google.com/ServiceLogin?"
            title="Account"
            target="_blank"
            rel="noreferrer"
          >
            Sign&nbsp;In
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
