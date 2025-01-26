import React from "react";
import Movie from "/images/movie.png";
import All from "/images/icon-nav-home.svg";
import Movies from "/images/icon-nav-movies.svg";
import TVSeries from "/images/icon-nav-tv-series.svg";
import Bookmarked from "/images/icon-nav-bookmark.svg";
import Profile from "/images/image-avatar.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full h-[5.6rem] p-[1.6rem] bg-[#161d2f] flex items-center">
        <img src={Movie} alt="Movie" />
        <section>
          <img src={All} alt="All" />
          <img src={Movies} alt="Movies" />
          <img src={TVSeries} alt="TV Series" />
          <img src={Bookmarked} alt="Bookmarked" />
        </section>
        <img src={Profile} alt="Profile" />
      </div>
    </>
  );
};

export default Home;
