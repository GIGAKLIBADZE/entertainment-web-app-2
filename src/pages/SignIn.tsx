import Movie from "/images/movie.png";

const SignIn: React.FC = () => {
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
        <form className="w-full">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[2.3rem]"
          />
          <input
            type="text"
            placeholder="Password"
            className="w-full outline-none border-b border-[#5a698f] text-[1.5rem] font-light leading-normal text-[#fff] indent-[1.6rem] py-[1.7rem] mt-[0.7rem]"
          />
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
