import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-Raleway flex flex-col justify-between min-h-full">
      {/* <Header />
            <Footer /> */}
      <Outlet />
    </div>
  );
};

export default Main;
