import React from "react";
import { FaBookmark, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
    const links= <>
       <li><NavLink className={({isActive})=>(isActive ? "bg-blue-500 underline text-white" : " ")} to="/">Home</NavLink></li>
       <li><NavLink className={({isActive})=>(isActive ? "bg-blue-500 underline text-white" : " ")} to="/about">About</NavLink></li>
       <li><NavLink className={({isActive})=>(isActive ? "bg-blue-500 underline text-white" : " ")} to="/cart"><FaShoppingCart size={25}></FaShoppingCart></NavLink></li>
       <li><NavLink className={({isActive})=>(isActive ? "bg-blue-500 underline text-white" : " ")} to="/favourite"><FaBookmark size={25}></FaBookmark></NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm  mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 text-lg  mt-3 w-52 p-2 shadow"
          >
            {
                links
            }
          </ul>
        </div>
        <NavLink to={'/'} className="text-xl md:text-3xl font-bold">FlagshipFaceOff</NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal text-lg gap-2 px-1">
          {
            links
          }
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
