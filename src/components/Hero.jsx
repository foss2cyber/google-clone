import React from "react";
import { FaCamera, FaMicrophone, FaSearch } from "react-icons/fa";

const Hero = () => {
  console.log("input");
  return (
    <div className="w-full min-h-screen bg-blue-200 relative">
      <div className="flex flex-col max-h-[580px] justify-center items-center px-4 py-8 m-auto text-center">
        <h1 className="block text-6xl lg:text-7xl xl:text-8xl sm:text-5xl mt-56 lg:mt-60 xl:mt-64 md:mt-48 sm:mt-40 mb-auto mx-auto drop-shadow-2xl hover:text-[#111] ease-in duration-300 delay-100 hover:shadow-[#111] hover:shadow-md rounded-2xl hover:backdrop-brightness-90">
          <span className="text-[#463AFF] hover:text-[#111]">G</span>
          <span className="text-[crimson] hover:text-[#111]">o</span>
          <span className="text-amber-500 hover:text-[#111]">o</span>
          <span className="text-[#463AFF] hover:text-[#111]">g</span>
          <span className="text-emerald-400 hover:text-[#111]">l</span>
          <span className="text-[crimson] hover:text-[#111]">e</span>
        </h1>
        <div className="h-full w-full m-auto px-4 py-3 relative">
          <form className="max-w-[780px] mx-auto my-4 p-4 flex flex-row flex-wrap justify-center items-center gap-4 rounded-3xl shadow-[#111] shadow-lg bg-pink-300 z-5">
            <input
              className="w-[584px] h-[44px] px-4 py-2 m-2 flex rounded-3xl focus-within:bg-white focus:outline-none bg-slate-200 shadow-md shadow-[#111] font-oswald tracking-wider placeholder:tracking-normal selection:bg-lime-300 placeholder:text-slate-400 font-semibold placeholder:font-normal"
              type="text"
              placeholder="TYPE"
              required
            />
            <button
              type="submit"
              className="hover:shadow-[#111] text-[#463AFF] hover:text-[#111] shadow-lg ease-in duration-200 delay-75 hover:bg-[beige] hover:border-[#FC139B]"
            >
              <FaSearch className="icon" size={20} title="Search" />
            </button>
            <button
              type="submit"
              className="inline-flex text-[#463AFF] hover:text-[#111] hover:shadow-[#111] shadow-lg ease-in duration-200 delay-75 hover:bg-[beige] hover:border-[#FC139B]"
            >
              <a
                className="px-2 py-auto"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <FaMicrophone className="icon" size={20} title="Voice Search" />
              </a>
              <span className="bg-[#463AFF]">
                <div className="h-[20px] w-[2px]"></div>
              </span>
              <a
                className="px-2 py-auto"
                href="https://www.google.com/imghp?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <FaCamera className="icon" size={20} title="Image Search" />
              </a>
            </button>
            <button
              type="submit"
              className="inline-flex text-[#463AFF] hover:text-[#111] hover:shadow-[#111] shadow-lg ease-in duration-200 delay-75 hover:bg-[beige] hover:border-[#FC139B]"
            >
              <a
                href="https://www.google.com/doodles"
                title="Feeling Lucky"
                target="_blank"
                rel="noreferrer"
              >
                I&apos;m&nbsp;Feeling&nbsp;Lucky
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
