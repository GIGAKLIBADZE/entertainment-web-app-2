import Movie from "/images/movie.png";
import { useContext } from "react";
import { MainContext } from "../layouts/Layout";

const SignImg: React.FC = () => {
  return (
    <img
      src={Movie}
      alt="Play"
      className="w-[3.2rem] h-[2.7rem] object-contain"
    />
  );
};

export default SignImg;
