import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import pervezHossainImage from "../../../public/pervez hossain.jpg";
import Image from "next/image";
import { AuthContext } from "@/context/AuthProvider";

const Header = ({ open, setOpen }) => {
  const user = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-between">
      <button
        className={`${
          open ? "transition-all duration-700" : "ml-8"
        } bg-gradient-to-r from-[#FC495F] to-[#FFc371] w-9 h-9 rounded-full lg:flex md:flex items-center justify-center cursor-pointer transition-all duration-700 hidden`}
        onClick={() => setOpen(!open)}
      >
        <FaBars className="text-white text-lg hover:text-black" />
      </button>
      <div className="flex justify-end items-center gap-8 pt-4 py-2 z-0 relative">
        {user && <h2>{user?.user?.displayName}</h2>}
        <div className="rounded-full bg-gradient-to-r from-[#FC495F] to-[#FFc371] p-1">
          {user?.user?.photoURL === null ? (
            <Image
              src={
                "https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/corporate-user-icon.png"
              }
              alt="Avater Image"
              width={50}
              height={50}
              className="rounded-full"
            ></Image>
          ) : (
            <Image
              src={user?.user?.photoURL}
              alt={user?.user?.displayName}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
