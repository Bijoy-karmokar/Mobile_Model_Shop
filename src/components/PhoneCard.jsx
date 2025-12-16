import React from "react";

const PhoneCard = ({ phones }) => {
//   console.log(phones);
  const { name, image, description } = phones || {};

  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img src={image} alt="Image not found" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              View Details
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
