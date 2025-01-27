import React from "react";
import Movie from "/images/movie.png";
import All from "/images/icon-nav-home.svg";
import Movies from "/images/icon-nav-movies.svg";
import TVSeries from "/images/icon-nav-tv-series.svg";
import Bookmarked from "/images/icon-nav-bookmark.svg";
import Profile from "/images/image-avatar.png";
import Search from "/images/icon-search.svg";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Idata } from "../types/Types";
import { createContext } from "react";

export const MainContext = createContext<{
  fetchData: () => Promise<void>;
  data: Idata[] | null;
  setData: React.Dispatch<React.SetStateAction<Idata[] | null>>;
}>({
  fetchData: async () => {},
  data: null,
  setData: () => {},
});

const Layout: React.FC = () => {
  const [data, setData] = useState<Idata[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/movie`);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const responseToJson = await response.json();
      setData(responseToJson);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full h-[5.6rem] p-[1.6rem] bg-[#161d2f] flex items-center justify-between">
        <img
          src={Movie}
          alt="Movie"
          className="w-[2.5rem] h-[2rem] object-contain"
        />
        <section className="flex items-center gap-[2.4rem]">
          <img
            src={All}
            alt="All"
            className="w-[1.6rem] h-[1.6rem] object-contain"
          />
          <img
            src={Movies}
            alt="Movies"
            className="w-[1.6rem] h-[1.6rem] object-contain"
          />
          <img
            src={TVSeries}
            alt="TV Series"
            className="w-[1.6rem] h-[1.6rem] object-contain"
          />
          <img
            src={Bookmarked}
            alt="Bookmarked"
            className="w-[1.4rem] h-[1.6rem] object-contain"
          />
        </section>
        <img
          src={Profile}
          alt="Profile"
          className="w-[2.4rem] h-[2.4rem] border-solid border rounded-[50%] border-[#fff] "
        />
      </div>
      <div className="pl-[1.6rem] flex items-center gap-[1.9rem] mt-[2.6rem]">
        <img src={Search} alt="Search" className="w-[1.8rem] h-[1.8rem]" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="w-[60%] text-[1.6rem] font-light leading-normal text-[#fff] outline-none"
        />
      </div>
      <MainContext.Provider value={{ data, setData, fetchData }}>
        <Outlet />
      </MainContext.Provider>
    </>
  );
};

export default Layout;
