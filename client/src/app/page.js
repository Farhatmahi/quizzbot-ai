"use client";
import HomeHeader from "@/components/HomePgae/HomeHeader";
import AuthProvider from "@/context/AuthProvider";
import Image from "next/image";
import Banner from "../../public/assets/140shots_so.png";
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
      <video
        src={backgroundVideo}
        autoPlay
        loop
        muted
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* <Image
        src={Banner}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        // sizes="(max-width: 768px) 100vw,
        //       (max-width: 1200px) 50vw,
        //       33vw"
        // style={{ height: "100%", width: "100%" }}
      /> */}

      <HomeMiddle />
      <QuizbotWork />
      <ChoosePlan />
    </>
  );
};

export default page;
