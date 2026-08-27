import React from "react";
import {
  DollarSign,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-[3px] bg-[#1E1F29] border-b-primary  px-44">
      <div className="w-full h-12  flex items-center">
        <div className=" w-full flex justify-between items-center ">
          <div className="flex gap-2 text-white">
            <div className="flex gap-1 items-center">
              <Phone size={14} className="text-xs text-primary " />
              <p className="text-xs cursor-pointer hover:text-primary">
                01229320923
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <Mail size={14} className="text-xs text-primary " />
              <p className="text-xs cursor-pointer hover:text-primary">
                3hjddhhdn
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <MapPin size={14} className="text-xs text-primary " />
              <p className="text-xs cursor-pointer hover:text-primary">
                1232 lokoja
              </p>
            </div>
          </div>
          <div className="flex gap-2 text-white">
            <div className="flex gap-1 items-center">
              <DollarSign size={14} className="text-xs text-primary " />
              <p className="text-xs cursor-pointer hover:text-primary">USD</p>
            </div>
            <Link to={"/myaccount"}>
              <div className="flex gap-1 items-center">
                <User size={14} className="text-xs text-primary " />
                <p className="text-xs cursor-pointer hover:text-primary">
                  My account
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-between items-center  h-20">
        <div className="">
          <p className="text-3xl text-white font-extrabold">
            ELECTRO
            <span className="text-3xl text-primary font-extrabold">.</span>
          </p>
        </div>
        <div className="bg-white rounded-4xl gap-3 flex  items-center">
          <div className="flex gap-2 items-center p-2">
            <select
              name=""
              id=""
              className="  border-none  focus:outline-none text-gray-500"
            >
              <option value="en" className="text-gray-500">
                All Categories
              </option>
              <option value="fr" className="text-gray-500">
                category 1
              </option>
              <option value="es" className="text-gray-500">
                category 2
              </option>
            </select>
            <div className=" w-px  bg-gray-500"></div>
          </div>
          <input type="text" placeholder="Search here" />
          <button className="bg-primary  rounded-r-4xl text-white p-2 px-6 ">
            Search
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center flex-col cursor-pointer">
            <div className="relative">
              <span className="absolute -top-3 -right-3 text-white text-xs bg-primary flex items-center justify-center rounded-full h-5 w-5">
                2
              </span>
              <Heart size={20} className="text-white" />
            </div>
            <p className="text-white">Your Wishlist</p>
          </div>
          <Link to={"/cart"}>
            <div className="flex items-center justify-center flex-col cursor-pointer">
              <div className="relative">
                <span className="absolute -top-3 -right-3 text-white text-xs bg-primary flex items-center justify-center rounded-full h-5 w-5">
                  3
                </span>
                <ShoppingCart size={20} className="text-white" />
              </div>
              <p className="text-white">Your Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
