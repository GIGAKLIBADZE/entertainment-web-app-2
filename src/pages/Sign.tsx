import Movie from "/images/movie.png";
import { useState } from "react";
import { Ierrors } from "../types/Types";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/Types";

const Sign: React.FC = () => {
  const [userData, setUserData] = useState<IUser[] | null>(null);

  const [errors, setErrors] = useState<Ierrors>({
    emailError: false,
    passwordError: false,
    repeatPasswordError: false,
  });

  const [user, setUser] = useState<IUser>({
    userEmail: "",
    userPassword: "",
  });

  const checkValidation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({
      emailError: false,
      passwordError: false,
      repeatPasswordError: false,
    });

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    let repeatPassword = "";
    {
      Sign === "SignUp"
        ? (repeatPassword = (e.target as HTMLFormElement).repeatPassword.value)
        : null;
    }

    setUser({
      userEmail: email,
      userPassword: password,
    });

    {
      Sign === ":SignUp"
        ? setErrors((prevErrors) => ({
            ...prevErrors,
            emailError: !email,
            passwordError: !password,
            repeatPasswordError: !repeatPassword,
          }))
        : setErrors((prevErrors) => ({
            ...prevErrors,
            emailError: !email,
            passwordError: !password,
          }));
    }

    console.log(email, password);

    fetch("/user.json")
      .then((response) => response.json())
      .then((data) => {
        const registered = data.find(
          (d: IUser) => d.userEmail === email && d.userPassword === password
        );
        if (registered) {
          navigate("/Profile/Home");
        }
      })
      .catch((error) => console.error(error));
  };

  const { Sign } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-[4.8rem] pb-[4.8rem]">
      <img
        src={Movie}
        alt="Play"
        className="w-[3.2rem] h-[2.7rem] object-contain"
      />
      <div
        className={`w-[32.7rem] pt-[2.4rem] px-[2.4rem] ${
          Sign === ":SignIn"
            ? "pb-[3.2rem]"
            : Sign === ":SignUp"
            ? "pb-[2.6rem]"
            : null
        } rounded-[10px] bg-[#161d2f] mt-[5.8rem]`}
      >
        <h3 className="text-[3.2rem] font-light leading-normal tracking-[-0.5px] text-[#fff] ">
          {Sign === ":SignIn"
            ? "Log In"
            : Sign === ":SignUp"
            ? "Sign Up"
            : null}
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
          {/* // test */}
          {Sign === ":SignUp" ? (
            <div className="relative">
              <input
                name="repeatPassword"
                type="text"
                placeholder="Repeat Password"
                className="w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[0.7rem] cursor-pointer focus:border-[#fff] focus:cursor-text"
              />
              {errors.repeatPasswordError ? (
                <p className="text-[1.3rem] font-light leading-normal text-[#fc4747] absolute right-[1.7rem] mt-[-3.9rem]">
                  Can't be empty
                </p>
              ) : null}
            </div>
          ) : null}
          {Sign === ":SignIn" ? (
            <button className="w-full h-[4.8rem] rounded-[6px] bg-[#fc4747] outline-none text-[1.5rem] font-light leading-normal text-[#fff] mt-[5.4rem] cursor-pointer hover:bg-[#fff] hover:text-[#161d2f]">
              Login to your account
            </button>
          ) : (
            <button className="w-full h-[4.8rem] rounded-[6px] bg-[#fc4747] outline-none text-[1.5rem] font-light leading-normal text-[#fff] mt-[5.4rem] cursor-pointer hover:bg-[#fff] hover:text-[#161d2f]">
              Create an account
            </button>
          )}
          {Sign === ":SignIn" ? (
            <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
              Don’t have an account?
              <span
                className="text-[#fc4747] ml-[0.9rem] cursor-pointer"
                onClick={() => navigate("../:SignUp")}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p className="text-[1.5rem] font-light leading-normal text-[#fff] mt-[2.4rem] text-center">
              Already have an account?
              <span
                className="text-[#fc4747] ml-[0.9rem] cursor-pointer"
                onClick={() => navigate("../:SignIn")}
              >
                Sign In
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Sign;
