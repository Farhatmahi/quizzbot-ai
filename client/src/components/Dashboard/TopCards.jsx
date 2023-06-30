import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-24 gap-8 p-4 ">
      <div
        className="lg:col-span-2 col-span-1 bg-white flex justify-between items-center w-full border p-4 rounded-lg 
      "
      >
        <div className="flex flex-col w-full pb-4 mt-5">
          <p className="text-gray-600">Words Used</p>
          <p className="text-2xl font-bold">400/5000</p>
        </div>
        <p
          className="bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 flex justify-center items-center p-2 rounded-lg"
        >
          <span className="text-white text-lg">
            <AiOutlineLineChart className="h-20 w-16" />
          </span>
        </p>
      </div>
      <div
        className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg
       "
      >
        <div className="flex flex-col w-full pb-4 mt-5">
          <p className="text-gray-600">Membership</p>
          <p className="text-2xl font-bold">Trial Plan</p>
        </div>
        <p
          className="bg-gradient-to-r from-[#FC495F] from-62% via-[#FFc371] to-[#FF0000] to-38% 
       bg-size-200 flex justify-center items-center p-2 rounded-lg"
        >
          <span className="text-white text-lg">
            <BsFillPersonFill className="h-8 w-16" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
