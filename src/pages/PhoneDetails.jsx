import React from "react";
import { MdAddShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import Button from "./Button";
import { addFavourite } from "../Utility";

const PhoneDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // console.log(data,id);
  const singlePhone = data.find((phone) => phone.id === parseInt(id));
//   console.log(singlePhone);
  const {
    brand,
    camera_info,
    description,
    storage,
    price,
    name,
    model,
    image,
  } = singlePhone;

  const handleFavourite =()=>{
    addFavourite(singlePhone);
  }

  return (
    <div className="py-10">
      <img src={image} className="w-full md:w-auto mx-auto " alt="" />
      <div className="flex justify-between items-center mt-5">
        <p className="text-3xl md:text-5xl">{name}</p>
        <div className="flex gap-3">
          <Button label={<MdAddShoppingCart size={20}></MdAddShoppingCart>}></Button>
         <Button onClick={handleFavourite} label={<MdBookmarkAdd size={20}></MdBookmarkAdd>}></Button>
        </div>
      </div>

      <div className="mt-5 space-y-5">
        <h3 className="text-5xl font-thin">Details:</h3>
        <p><span className="font-bold">Brand</span>:{brand}</p>
        <p><span className="font-bold">Model</span>:{model}</p>
        <p><span className="font-bold">Storage</span>:{storage}</p>
        <p><span className="font-bold">Price</span>:512GB:${price["512GB"]}</p>
        <p><span className="font-bold">Camera_info</span>:{camera_info}</p>
        <p><span className="font-bold">Description</span>:{description}</p>
      </div>
    </div>
  );
};

export default PhoneDetails;
