import React from "react";
import camera from "../assets/camera-s.png";
import headset from "../assets/headset-s.png";
import lappy from "../assets/lappy.png";
import { ArrowRightCircleIcon } from "lucide-react";
import NewProducts from "../component/NewProducts";

const Homepage = () => {
  return (
    <div className="">
      <div className="w-full h-12 px-44  flex items-center ">
        <div className=" flex items-center gap-6 text-xs cursor-pointer">
          <p className="text-primary border-b-2 border-primary">Home</p>
          <div className="relative tab transition-all duration-300">
            <p className="">Hot deals </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative tab transition-all duration-300">
            <p className="">Categories </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative tab transition-all duration-300">
            <p className="">Laptops </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative tab transition-all duration-300">
            <p className="">Smartphones </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative tab transition-all duration-300">
            <p className="">Cameras </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
          <div className="relative tab transition-all duration-300">
            <p className="">Accessories </p>
            <div className=" tab-b absolute w-0  h-[1.5px] bg-primary mt-0.5"></div>
          </div>
        </div>
      </div>
      <div className=" flex items-center px-44 justify-between gap-12 mt-16">
        <div className="catProd w-72 bg-gray-300 relative overflow-hidden">
          <div className="w-4/5 z-50 absolute h-full scale-[200%] bg-primary/90 rotate-45 -top-32 -left-32"></div>
          <div className="absolute z-50 flex flex-col text-white px-5 justify-center gap-4 pt-7">
            <p className="font-bold w-1/2 text-2xl">Laptop Collections</p>
            <button className="flex items-center gap-2 text-xs">
              SHOP NOW <ArrowRightCircleIcon size={10} />
            </button>
          </div>
          <img className="w-full h-full" src={lappy} alt="lappy" />
        </div>
        <div className="catProd w-72 bg-gray-300 relative overflow-hidden">
          <div className="w-4/5 z-50 absolute h-full scale-[200%] bg-primary/90 rotate-45 -top-32 -left-32"></div>
          <div className="absolute z-50 flex flex-col text-white px-5 justify-center gap-4 pt-7">
            <p className="font-bold w-1/2 text-2xl">Accessories Collection</p>
            <button className="flex items-center gap-2 text-xs">
              SHOP NOW <ArrowRightCircleIcon size={10} />
            </button>
          </div>
          <img className="w-full h-full" src={headset} alt="lappy" />
        </div>
        <div className="catProd w-72 bg-gray-300 relative overflow-hidden">
          <div className="w-4/5 z-50 absolute h-full scale-[200%] bg-primary/90 rotate-45 -top-32 -left-32"></div>
          <div className="absolute z-50 flex flex-col text-white px-5 justify-center gap-4 pt-7">
            <p className="font-bold w-1/2 text-2xl">Cameras Collection</p>
            <button className="flex items-center gap-2 text-xs">
              SHOP NOW <ArrowRightCircleIcon size={10} />
            </button>
          </div>
          <img className="w-full h-full" width={288} src={camera} alt="lappy" />
        </div>
      </div>

      <NewProducts />
      <section className="bg-gray-300 py-4 gap-9 w-full flex items-center justify-center">
        <img src={lappy} alt="" className="w-96" />
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex flex-col w-20 h-20 text-white bg-primary justify-center items-center rounded-full">
              <p className="font-bold text-sm">02</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="flex flex-col w-20 h-20 text-white bg-primary justify-center items-center rounded-full">
              <p className="font-bold text-sm">02</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="flex flex-col w-20 h-20 text-white bg-primary justify-center items-center rounded-full">
              <p className="font-bold text-sm">02</p>
              <p className="text-sm">Days</p>
            </div>
            <div className="flex flex-col w-20 h-20 text-white bg-primary justify-center items-center rounded-full">
              <p className="font-bold text-sm">02</p>
              <p className="text-sm">Days</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="font-bold uppercase text-2xl text-slate-800">
              hot deal this week
            </p>
            <p className="text-2xl font-light">New Collection Up to 50% OFF</p>
            <button className="text-white px-3 py-1 w-36 bg-primary rounded-full">
              Shop now
            </button>
          </div>
        </div>
        <img src={headset} alt="" className="w-96" />
      </section>
    </div>
  );
};

export default Homepage;
