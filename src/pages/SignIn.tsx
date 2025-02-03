import React, { useState } from "react";
import { IerrorsSignIn, IUser } from "../types/Types";
import { useNavigate } from "react-router-dom";
import SignImg from "../components/SignImg";
// import { useMediaQuery } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../layouts/Layout";

const SignIn: React.FC = () => {
  const [errors, setErrors] = useState<IerrorsSignIn>({
    emailError: false,
    passwordError: false,
  });

  const navigate = useNavigate();

  const checkValidation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({
      emailError: false,
      passwordError: false,
    });

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    // let user = {
    //   email: email,
    //   password: password,
    // };

    setErrors((prevErrors) => ({
      ...prevErrors,
      emailError: !email,
      passwordError: !password,
    }));

    fetch("/user.json")
      .then((response) => response.json())
      .then((data) => {
        const registered = data.find(
          (d: IUser) => d.userEmail === email && d.userPassword === password
        );
        if (
          registered ||
          (localStorage.getItem("email") === email &&
            localStorage.getItem("password") === password)
        ) {
          navigate("/Profile/Home");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col items-center pt-[4.8rem] pb-[4.8rem] md:pt-[8rem] md:pb-[47.3rem] xl:pt-[7.8rem] xl:pb-[25rem]">
      <SignImg />
      <div className="custom-container">
        <h3 className="text-[3.2rem] font-light leading-normal tracking-[-0.5px] text-[#fff] ">
          Log In
        </h3>
        <form onSubmit={checkValidation} className="w-full">
          <div className="relative">
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[2.3rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
            />
            {errors.emailError ? (
              <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
                Can't be empty
              </p>
            ) : null}
          </div>
          <div className="relative">
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[0.7rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
            />
            {errors.passwordError ? (
              <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
                Can't be empty
              </p>
            ) : null}
          </div>
          <button className="w-full h-[4.8rem] rounded-[6px] bg-[#fc4747] outline-none text-[1.5rem] font-light leading-normal text-[#fff] mt-[5.4rem] cursor-pointer hover:bg-[#fff] hover:text-[#161d2f]">
            Login to your account
          </button>
          <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
            Don’t have an account?
            <span
              className="text-[#fc4747] ml-[0.9rem] cursor-pointer"
              onClick={() => {
                navigate("../SignUp");
                setErrors({
                  emailError: false,
                  passwordError: false,
                });
              }}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
