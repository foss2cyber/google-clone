import React from "react";
import {
  FaCoffee,
  FaEnvelopeOpen,
  FaGlobe,
  FaGoogle,
  FaMap,
  FaReact,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-28 bottom-0 left-0 right-0">
      <div className="flex flex-col lg:flex-row xl:flex-row flex-nowrap justify-between items-center space-x-auto gap-4 space-y-2 m-2 p-4">
        <h3 className="inline-flex text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100">
          <FaGlobe className="icon" size={20} />
        </h3>
        <ul className="inline-flex gap-4 space-x-4 space-y-auto">
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://ads.google.com/intl/en/home/"
              title="Advertising"
              target="_blank"
              rel="noreferrer"
            >
              Advertising
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://www.google.com/intl/en/business/"
              title="Business"
              target="_blank"
              rel="noreferrer"
            >
              Business
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://google.com/search/howsearchworks/?fg=1"
              title="Search"
              target="_blank"
              rel="noreferrer"
            >
              How Search works
            </a>
          </li>
        </ul>
        <ul className="inline-flex gap-4 space-x-4 space-y-auto">
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://policies.google.com/privacy?hl=en&fg=1"
              title="Privacy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <a
              href="https://policies.google.com/terms?hl=en&fg=1"
              title="Terms"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100 font-oswald">
            <form>
              <select className="rounded-2xl px-1 mx-1 ease-in duration-300 delay-100 focus:outline-none border-[#463AFF] border hover:border-[#FC139B] bg-transparent">
                <option>--&nbsp;Settings&nbsp;--</option>
                <option>Search&nbsp;settings</option>
                <option>Dark&nbsp;Theme</option>
              </select>
            </form>
          </li>
        </ul>
      </div>
      <hr className="border-[#463AFF] mx-2" />
      <div className="flex flex-col lg:flex-row xl:flex-row flex-nowrap justify-between items-center space-x-auto gap-4 space-y-2 m-2 p-4">
        <h3 className="inline-flex text-md font-oswald text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100">
          &copy;&nbsp;2022&nbsp;&middot;&nbsp;
          <a href="/#" title="Portfolio" target="_blank" rel="noreferrer">
            Ishan&nbsp;Velle
          </a>
        </h3>
        <button className="inline-flex font-oswald text-[#463AFF] hover:bg-[#111] hover:border-[#FC139B] hover:drop-shadow-2xl hover:text-white gap-1 ease-in duration-300 delay-100">
          Made with&nbsp;
          <FaCoffee
            className="icon text-[#c4682b] hover:text-slate-200"
            size={25}
            title="Coffee"
          />
          &nbsp;
          <span>
            <a
              href="https://tailwindcss.com/"
              title="Tailwind"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                height="25"
                viewBox=".15 .13 799.7 479.69"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                  fill="#06b6d4"
                ></path>
              </svg>
            </a>
          </span>
          &nbsp;
          <span>
            <a
              href="https://reactjs.org/"
              title="React"
              target="_blank"
              rel="noreferrer"
            >
              <FaReact
                className="hover:text-[cyan] text-[darkcyan] icon"
                size={25}
              />
            </a>
          </span>
        </button>
        <ul className="inline-flex gap-4 space-x-4 space-y-auto">
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100">
            <a
              href="https://mail.google.com/"
              title="Gmail"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelopeOpen className="icon" size={20} />
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100">
            <a
              href="https://www.google.com/maps"
              title="Maps"
              target="_blank"
              rel="noreferrer"
            >
              <FaMap className="icon" size={20} />
            </a>
          </li>
          <li className="cursor-pointer text-[#463AFF] hover:text-[#111] ease-in duration-300 delay-100">
            <a
              href="https://www.google.com/intl/en/about/products"
              title="Products"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle className="icon" size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
