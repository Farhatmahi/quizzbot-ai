"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/logo.png";
import { AiFillHome } from "react-icons/ai";
import { FaPhone, FaPollH } from "react-icons/fa";
import { AiFillGift, AiFillFileText } from "react-icons/ai";

const Links = () => {
  const pathname = usePathname();
  const header = [
    {
      id: 1,
      name: "Home",
      link: "/home",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 4,
      name: "Membership",
      link: "/membership",
    },
    {
      id: 5,
      name: "Transaction",
      link: "/transaction",
    },
    {
      id: 5,
      name: "Saved Questions",
      link: "/saved-questions",
    },
  ];

  return (
    <div className="flex flex-col gap-5 ">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="mb-3"
          ></Image>
        </Link>
      </div>
      <div>
        {header?.map((header) => {
          return (
            <Link
              href={`${header.link} `}
              className={` ${
                pathname === header.link
                  ? ` bg-transparent bg-clip-text font-bold  text-[#FC495F] `
                  : ""
              } flex items-center gap-2 mb-5 `}
              key={header.id}
            >
              {header.name === "Home" ? (
                <>
                  <div className="flex items-center gap-2 justify-center ">
                    <AiFillHome></AiFillHome> <span>{header.name}</span>
                  </div>
                </>
              ) : (
                <></>
              )}
              {header.name === "About" ? (
                <>
                  <FaPollH></FaPollH> {header.name}
                </>
              ) : (
                <></>
              )}
              {header.name === "Contact" ? (
                <>
                  <FaPhone></FaPhone> {header.name}
                </>
              ) : (
                <></>
              )}
              {header.name === "Membership" ? (
                <>
                  <AiFillGift></AiFillGift> {header.name}
                </>
              ) : (
                <></>
              )}
              {header.name === "Transaction" ? (
                <>
                  <AiFillFileText></AiFillFileText> {header.name}
                </>
              ) : (
                <></>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
