import React from "react";
import SignImg from "../components/SignImg";
import { Outlet } from "react-router-dom";

const SignLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-[4.8rem] pb-[4.8rem] xl:pt-[7.8rem] xl:pb-[25rem]">
      <SignImg />
      <div className="custom-container">
        <Outlet />
      </div>
    </div>
  );
};

export default SignLayout;
