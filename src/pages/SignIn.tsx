import Movie from "/images/movie.png";
import { useState } from "react";
import { Ierrors } from "../types/Types";

const SignIn: React.FC = () => {
  const [errors, setErrors] = useState<Ierrors>({
    emailError: false,
    passwordError: false,
  });

  const checkValidation = (e: React.FormEvent<HTMLFormElement>) => {
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
  };

  return (
    <div className="flex flex-col items-center">
      <img
        src={Movie}
        alt="Play"
        className="w-[3.2rem] h-[2.7rem] object-contain"
      />
      <div className="w-[32.7rem] pt-[2.4rem] px-[2.4rem] pb-[3.2rem] rounded-[10px] bg-[#161d2f] mt-[5.8rem]">
        <h3 className="text-[3.2rem] font-light leading-normal tracking-[-0.5px] text-[#fff] w-[10rem]">
          Login
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

          <button className="w-full h-[4.8rem] rounded-[6px] bg-[#fc4747] outline-none text-[1.5rem] font-light leading-normal text-[#fff] mt-[5.4rem]">
            Login to your account
          </button>
          <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
            Don’t have an account?
            <span className="text-[#fc4747] ml-[0.9rem]">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
