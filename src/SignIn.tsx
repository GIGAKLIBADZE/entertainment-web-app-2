import Movie from "/images/movie.png";

const SignIn: React.FC = () => {
  return (
    <>
      <img src={Movie} alt="Play" />
      <div>
        <h3>Login</h3>
        <form>
          <input type="email" />
          <input type="text" />
          <button>Login to your account</button>
          <p>
            Don’t have an account?<span>Sign Up</span>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
