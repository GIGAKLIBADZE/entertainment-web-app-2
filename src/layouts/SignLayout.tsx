import React, { useState } from "react";
import SignImg from "../components/SignImg";
import { IUser } from "../types/Types";
import { useNavigate } from "react-router-dom";
import { IerrorsSignUp } from "../types/Types";
import { IerrorsSignIn } from "../types/Types";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Outlet } from "react-router-dom";
import { createContext } from "react";

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
