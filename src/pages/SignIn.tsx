import React, { useState } from "react";
import { IerrorsSignIn, IUser } from "../types/Types";
import { useNavigate } from "react-router-dom";

const SignIn: React.FC = () => {
  const [errors, setErrors] = useState<IerrorsSignIn>({
    emailError: false,
    passwordError: false,
  });

  const [existError, setExistError] = useState({
    userexistError: false,
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

    setErrors((prevErrors) => ({
      ...prevErrors,
      emailError: !email,
      passwordError: !password,
    }));

    fetch("/user.json")
      .then((response) => response.json())
      .then((data) => {
        const registered = data.find(
          (d: IUser) => d.userEmail === email || d.userPassword === password
        );
        if (
          registered ||
          (localStorage.getItem("email") === email &&
            localStorage.getItem("password") === password)
        ) {
          navigate("/profile/home");
        } else if (
          registered ||
          localStorage.getItem("email") === email ||
          localStorage.getItem("password") === password
        ) {
          setExistError({ userexistError: true });
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h3 className="text-[3.2rem] font-light leading-normal tracking-[-0.5px] text-[#fff] ">
        Log In
      </h3>
      <form onSubmit={checkValidation} className="w-full">
        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={() =>
              setErrors((prev) => ({ ...prev, emailError: false }))
            }
            className="custom-input mt-[2.3rem]"
          />
          {errors.emailError ? (
            <p className="custom-error">Can't be empty</p>
          ) : null}
        </div>
        <div className="relative">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={() =>
              setErrors((prev) => ({ ...prev, passwordError: false }))
            }
            className="custom-input"
          />
          {errors.passwordError ? (
            <p className="custom-error">Can't be empty</p>
          ) : null}
        </div>
        {existError.userexistError ? (
          <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] text-center mt-[2rem]">
            email or password (or both) already exist
          </p>
        ) : null}
        <button className="custom-button">Login to your account</button>
        <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
          Don’t have an account?
          <span
            className="text-[#fc4747] ml-[0.9rem] cursor-pointer"
            onClick={() => {
              navigate("../sign-up");
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
  );
};

export default SignIn;
