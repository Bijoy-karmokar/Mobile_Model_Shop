import React from "react";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="my-10 text-center">
      <img
        className="w-full md:max-w-md lg:max-w-xl mx-auto"
        src={bannerImg}
        alt=""
      />
      <h2 className="font-thin text-7xl">Browse, Search, View, Buy</h2>
      <p className="text-lg text-gray-600 my-3">
        Best place to browse, search, view details and purchase of top flagship
        phones <br />
        of the current time - FlagshipFaceOff
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-1">
        <input type="text" className="bg-white w-2/3 h-12 px-4 shadow-lg focus:border-none focus:outline rounded" placeholder="Search phone by name or brand" />
        <button className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Search</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </form>
    </div>
  );
};

export default Banner;
