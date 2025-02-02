import Movie from "/images/movie.png";

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
