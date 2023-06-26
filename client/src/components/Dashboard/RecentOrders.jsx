import React from "react";
// import { data } from "../data/data.js";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div
      className="w-full col-span-1 relative lg:h-[70vh] 
    h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll"
    >
      <h1>Recent Document</h1>
      <ul>
        {/* {data.map((order, id) => ( */}
        <li
          // key={id}
          className="bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
        >
          <div className="inline">
            <div className="pl-2 flex  items-center">
              <div className="bg-purple-100 rounded-lg p-3">
                <FaShoppingBag className="text-purple-800" />
              </div>
              <p className="text-gray-800 font-bold ml-3">Total Words</p>
            </div>
            <div className="items-center lg:ml-16">
              <p className="lg:flex md:hiddentext-sm">Saved Document Title</p>
              <p className="text-gray-400 text-sm">Saved Documents Details </p>
            </div>
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
};

export default RecentOrders;
