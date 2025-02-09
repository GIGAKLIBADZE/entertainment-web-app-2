import React from "react";
import Movie from "/images/movie.png";
import All from "/images/icon-nav-home.svg";
import Movies from "/images/icon-nav-movies.svg";
import TVSeries from "/images/icon-nav-tv-series.svg";
import Bookmarked from "/images/icon-nav-bookmark.svg";
import Profile from "/images/image-avatar.png";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Idata } from "../types/Types";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

export const MainContext = createContext<{
  fetchData: () => Promise<void>;
  data: Idata[] | null | undefined;
  setData: React.Dispatch<React.SetStateAction<Idata[] | null | undefined>>;
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
  lookingFor: Idata[] | null | undefined;
  toggleBookmark: (x: string) => void;
  menu: number;
  setMenu: React.Dispatch<React.SetStateAction<number>>;

  toggleSearchBookmark: (x: string) => void;
  findResult: (e: React.FormEvent<HTMLFormElement>) => void;
  tablet: boolean;
  desktop: boolean;
}>({
  fetchData: async () => {},
  data: null,
  setData: () => {},
  search: false,
  setSearch: () => {},
  lookingFor: null,
  toggleBookmark: () => {},
  menu: 1,
  setMenu: () => {},
  toggleSearchBookmark: () => {},
  findResult: () => undefined,
  tablet: false,
  desktop: false,
});

const Layout: React.FC = () => {
  const [data, setData] = useState<Idata[] | null | undefined>(null);
  const [search, setSearch] = useState<boolean>(false);
  const [lookingFor, setLookingFor] = useState<Idata[] | null | undefined>(
    null
  );

  const [menu, setMenu] = useState<number>(1);

  const location = useLocation();

  const tablet = useMediaQuery(`(min-width: 768px)`);
  const desktop = useMediaQuery(`(min-width: 414rem)`);

  location.pathname === "/Profile/Movies" ? console.log(location.pathname) : "";

  const toggleSearchBookmark = (title: string) => {
    setLookingFor((prev) =>
      prev?.map((item) => {
        return {
          ...item,
          isBookmarked:
            item.title === title ? !item.isBookmarked : item.isBookmarked,
        };
      })
    );
  };

  const toggleBookmark = (title: string) => {
    setData((prev) =>
      prev?.map((item) => {
        return {
          ...item,
          isBookmarked:
            item.title === title ? !item.isBookmarked : item.isBookmarked,
        };
      })
    );
  };

  const navigate = useNavigate();

  const findResult = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = (e.target as HTMLFormElement).search.value.toLowerCase();

    const filteredData = data?.filter((item) =>
      item.title.toLowerCase().includes(search)
    );

    // return test;
    // setData(filterData);
    //
    setLookingFor(filteredData);
    // setData(lookingFor);
  };

  const fetchData = async () => {
    return fetch("/data.json")
      .then((response) => response.json())
      .then((responseToJson) => setData(responseToJson))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="xl:flex">
      <div></div>
      <div className="flex flex-col xl:flex-row ">
        <div className="upper-layout-container">
          <img
            src={Movie}
            alt="Movie"
            className="w-[2.5rem] h-[2rem] object-contain md:w-[3.2rem]"
          />
          <section className="flex items-center gap-[2.4rem] md:gap-[3.2rem] xl:flex-col xl:gap-[4rem] xl:mt-[-40.5rem]">
            <img
              src={All}
              alt="All"
              className={`w-[1.6rem] h-[1.6rem] object-contain md:w-[2rem] md:h-[2rem] hover:invert-[38%] hover:sepia-[100%] hover:saturate-[600%] 
                hover:hue-rotate-[-10deg] hover:brightness-[100%] hover:contrast-[200%] cursor-pointer ${
                  location.pathname === "/profile/home"
                    ? "invert brightness-0"
                    : ""
                }`}
              onClick={() => {
                if (menu !== 1) {
                  setMenu(1);
                  navigate("/profile/home");
                }
                setSearch(false);
              }}
            />
            <img
              src={Movies}
              alt="Movies"
              className={`w-[1.6rem] h-[1.6rem] object-contain md:w-[2rem] md:h-[2rem] hover:invert-[38%] hover:sepia-[100%] hover:saturate-[600%] 
                hover:hue-rotate-[-10deg] hover:brightness-[100%] hover:contrast-[200%] cursor-pointer ${
                  location.pathname === "/profile/movies"
                    ? "invert brightness-0"
                    : ""
                }`}
              onClick={() => {
                if (menu !== 2) {
                  setMenu(2);
                  navigate("/profile/movies");
                }
                setSearch(false);
              }}
            />
            <img
              src={TVSeries}
              alt="TV Series"
              className={`w-[1.6rem] h-[1.6rem] object-contain md:w-[2rem] md:h-[2rem] hover:invert-[38%] hover:sepia-[100%] hover:saturate-[600%] 
                hover:hue-rotate-[-10deg] hover:brightness-[100%] hover:contrast-[200%] cursor-pointer  ${
                  location.pathname === "/profile/tv-series"
                    ? "invert brightness-0"
                    : ""
                }`}
              onClick={() => {
                if (menu !== 3) {
                  setMenu(3);
                  navigate("/profile/tv-series");
                }
                setSearch(false);
              }}
            />
            <img
              src={Bookmarked}
              alt="Bookmarked"
              className={`w-[1.4rem] h-[1.6rem] object-contain md:w-[1.7rem] md:h-[2rem] hover:invert-[38%] hover:sepia-[100%] hover:saturate-[600%] 
                hover:hue-rotate-[-10deg] hover:brightness-[100%] hover:contrast-[200%] cursor-pointer ${
                  location.pathname === "/profile/bookmarked"
                    ? "invert brightness-0"
                    : ""
                }`}
              onClick={() => {
                if (menu !== 4) {
                  setMenu(4);
                  navigate("/profile/bookmarked");
                }
                setSearch(false);
              }}
            />
          </section>
          <img
            src={Profile}
            alt="Profile"
            className="w-[2.4rem] h-[2.4rem] border-solid border rounded-[50%] border-[#fff] md:w-[3.2rem] md:h-[3.2rem] xl:w-[4rem] xl:h-[4rem]"
          />
        </div>
      </div>
      <MainContext.Provider
        value={{
          data,
          setData,
          fetchData,
          search,
          setSearch,
          lookingFor,
          toggleBookmark,
          menu,
          setMenu,

          toggleSearchBookmark,
          findResult,
          tablet,
          desktop,
        }}
      >
        <Outlet />
      </MainContext.Provider>
    </div>
  );
};

export default Layout;
