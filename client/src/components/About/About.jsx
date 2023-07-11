"use client";
import React from "react";
import HomeHeader from "../HomePgae/HomeHeader";
import demo from "../../../public/assets/demo.mp4";

const About = () => {
  return (
    <div className="">
      <div>
        <HomeHeader />
        <video
          src={demo}
          autoPlay
          loop
          muted
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default About;
