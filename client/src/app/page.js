"use client";
import HomeHeader from "@/components/HomePgae/HomeHeader";
import AuthProvider from "@/context/AuthProvider";
import Image from "next/image";
import Banner from "../../public/assets/Home.png";
import HomeMiddle from "@/components/HomePgae/HomeMiddle";
import QuizbotWork from "@/components/HomePgae/QuizbotWork";
import ChoosePlan from "@/components/HomePgae/ChoosePlan";
import backgroundVideo from "../../public/assets/project.mp4";
import PageWarper from "@/components/PageWarper";

const page = () => {
  return (
    <>
      <HomeHeader />
      {/* Hero Image */}
      <div className="flex justify-center ">
        <Image src={Banner} width={0} height={0} className="mt-20" />
      </div>
      <HomeMiddle />
      <QuizbotWork />
      <ChoosePlan />
    </>
  );
};

export default page;
