import React from "react";
import SlidingCards from "./SlidingCards";

const NewProducts = () => {
  return (
    <div className=" pt-8 px-44">
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl">New Products</p>
        <div className="flex gap-2 cursor-pointer">
          <div className="relative font-bold text-gray-500 text-xs tabb transition-all duration-300">
            <p className="text-primary border-b-2 border-primary">Laptops </p>
            <div className=" tab-b absolute w-0   h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative font-bold text-gray-500 text-xs tabb transition-all duration-300">
            <p className="">Smartphones </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative font-bold text-gray-500 text-xs tabb transition-all duration-300">
            <p className="">Cameras </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative font-bold text-gray-500 text-xs tabb transition-all duration-300">
            <p className="">Accessories </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="pt-12">
        <SlidingCards />
      </div>
    </div>
  );
};

export default NewProducts;
