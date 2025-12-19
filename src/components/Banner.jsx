import React, { useState } from "react";
import bannerImg from "../assets/banner.png";
import Button from "../pages/Button";

const Banner = ({handleSearch}) => {
    const [searchText,setSearchText] = useState("")
    // console.log(searchText);
    
    
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
      <form onSubmit={(e)=>{
        handleSearch(e,searchText)
        setSearchText(" ");
      }} className="flex flex-col md:flex-row items-center justify-center gap-1">
        <input type="text" value={searchText} onChange={e=>setSearchText(e.target.value)} className="bg-white w-2/3 h-12 px-4 shadow-lg focus:border-none focus:outline rounded" placeholder="Search phone by name or brand" />
        <Button type="submit" label={"Search"}></Button>
      </form>
    </div>
  );
};

export default Banner;
