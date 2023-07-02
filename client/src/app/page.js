"use client";
import HomeHeader from "@/components/HomePgae/HomeHeader";
import AuthProvider from "@/context/AuthProvider";
import Image from "next/image";
import Banner from "../../public/assets/140shots_so.png";
import HomeMiddle from "@/components/HomePgae/HomeMiddle";

const page = () => {
  return (
    <>
      <HomeHeader />
      {/* Hero Image */}
      <Image
        src={Banner}
        width={200}
        height={160}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        style={{ height: "100%", width: "100%" }}
      />

      <HomeMiddle />
    </>
  );
};

export default page;
