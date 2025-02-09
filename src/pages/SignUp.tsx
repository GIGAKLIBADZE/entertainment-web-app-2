import React, { useState } from "react";
import { IUser } from "../types/Types";
import { useNavigate } from "react-router-dom";
import { IerrorsSignUp } from "../types/Types";

const SignUp: React.FC = () => {
  const [errors, setErrors] = useState<IerrorsSignUp>({
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
  });

  const [matchError, setMatchError] = useState({
    repeatPasswordError: false,
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
      repeatPasswordError: false,
    });

    setExistError({
      userexistError: false,
    });

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    const repeatPassword = (e.target as HTMLFormElement).repeatPassword.value;
    {
      let user = {
        email: email,
        password: password,
      };

      setErrors((prevErrors) => ({
        ...prevErrors,
        emailError: !email,
        passwordError: !password,
        repeatPasswordError: !repeatPassword,
      }));

      fetch("/user.json")
        .then((response) => response.json())
        .then((data) => {
          const registered = data.find(
            (d: IUser) => d.userEmail === email || d.userPassword === password
          );
          if (
            !registered &&
            user.email !== "" &&
            user.password !== "" &&
            password === repeatPassword &&
            localStorage.getItem("email") !== email &&
            localStorage.getItem("password") !== password
          ) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            navigate("/SignIn");
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
    }

    if (password !== repeatPassword) {
      setMatchError(() => ({
        repeatPasswordError: true,
      }));
    }
  };

  return (
    <div>
      <h3 className="text-[3.2rem] font-light leading-normal tracking-[-0.5px] text-[#fff] ">
        Sign Up
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
            className="caret-[#fc4747] w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[2.3rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
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
            type="password"
            placeholder="Password"
            onChange={() =>
              setErrors((prev) => ({ ...prev, passwordError: false }))
            }
            className="caret-[#fc4747] w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[0.7rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
          />
          {errors.passwordError ? (
            <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
              Can't be empty
            </p>
          ) : null}
        </div>
        <div className="relative">
          <input
            name="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            onChange={() => {
              setMatchError(() => ({
                repeatPasswordError: false,
              }));
              setErrors((prev) => ({ ...prev, repeatPasswordError: false }));
            }}
            className="caret-[#fc4747] w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[0.7rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
          />
          {errors.repeatPasswordError ? (
            <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
              Can't be empty
            </p>
          ) : null}
          {matchError.repeatPasswordError && !errors.repeatPasswordError ? (
            <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
              Passwords do not match
            </p>
          ) : null}
        </div>
        {existError.userexistError ? (
          <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] text-center mt-[2rem]">
            email or password (or both) already exist
          </p>
        ) : null}
        <button className="w-full h-[4.8rem] rounded-[6px] bg-[#fc4747] outline-none text-[1.5rem] font-light leading-normal text-[#fff] mt-[5.4rem] cursor-pointer hover:bg-[#fff] hover:text-[#161d2f]">
          Create an account
        </button>
        <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
          Already have an account?
          <span
            className="text-[#fc4747] ml-[0.9rem] cursor-pointer"
            onClick={() => {
              navigate("../SignIn");
              setErrors({
                emailError: false,
                passwordError: false,
                repeatPasswordError: false,
              });
            }}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
