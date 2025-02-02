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
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";

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
  filterData: () => void;
  toggleSearchBookmark: (x: string) => void;
  findResult: (e: React.FormEvent<HTMLFormElement>) => void;
  // tablet: boolean;
  // desktop: boolean;
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
  filterData: () => {},
  toggleSearchBookmark: () => {},
  findResult: () => undefined,
  // tablet: false,
  // desktop: false,
});

const Layout: React.FC = () => {
  let test: Idata[] | null | undefined = null;
  const [data, setData] = useState<Idata[] | null | undefined>(null);
  const [search, setSearch] = useState<boolean>(false);
  const [lookingFor, setLookingFor] = useState<Idata[] | null | undefined>(
    null
  );

  const [menu, setMenu] = useState<number>(1);

  const location = useLocation();
  console.log(location.pathname);

  // const tablet = useMediaQuery(`(min-width: 76.8rem)`);
  // const desktop = useMediaQuery(`(min-width: 414rem)`);

  const filterData = () => {
    if (location.pathname === "/Profile/Home") {
      setMenu(1);
    } else if (location.pathname === "/Profile/Movies") {
      setMenu(2);
    }
  };

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
            className={`w-[1.6rem] h-[1.6rem] object-contain ${
              location.pathname === "/Profile/Home" ? "invert brightness-0" : ""
            }`}
            onClick={() => {
              if (menu !== 1) {
                setMenu(1);
                navigate("/Profile/Home");
              }
              setSearch(false);
            }}
          />
          <img
            src={Movies}
            alt="Movies"
            className={`w-[1.6rem] h-[1.6rem] object-contain ${
              location.pathname === "/Profile/Movies"
                ? "invert brightness-0"
                : ""
            }`}
            onClick={() => {
              if (menu !== 2) {
                setMenu(2);
                navigate("/Profile/Movies");
              }
              setSearch(false);
            }}
          />
          <img
            src={TVSeries}
            alt="TV Series"
            className={`w-[1.6rem] h-[1.6rem] object-contain ${
              location.pathname === "/Profile/TVSeries"
                ? "invert brightness-0"
                : ""
            }`}
            onClick={() => {
              if (menu !== 3) {
                setMenu(3);
                navigate("/Profile/TVSeries");
              }
              setSearch(false);
            }}
          />
          <img
            src={Bookmarked}
            alt="Bookmarked"
            className={`w-[1.6rem] h-[1.6rem] object-contain ${
              menu === 4 ? "invert brightness-0" : ""
            }`}
            onClick={() => {
              if (menu !== 4) {
                setMenu(4);
                navigate("/Profile/Bookmarked");
              }
              setSearch(false);
            }}
          />
        </section>
        <img
          src={Profile}
          alt="Profile"
          className="w-[2.4rem] h-[2.4rem] border-solid border rounded-[50%] border-[#fff] "
        />
      </div>
      <form
        onSubmit={findResult}
        className="pl-[1.6rem] flex items-center gap-[1.9rem] mt-[2.6rem]"
      >
        <button>
          <img
            src={Search}
            alt="Search"
            className="w-[1.8rem] h-[1.8rem]"
            onClick={() => {
              setSearch(true);
              // navigate("/Profile/Search");
            }}
          />
        </button>
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="w-[60%] text-[1.6rem] font-light leading-normal text-[#fff] outline-none"
          name="search"
        />
      </form>
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
          filterData,
          toggleSearchBookmark,
          findResult,
          // tablet,
          // desktop,
        }}
      >
        <Outlet />
      </MainContext.Provider>
    </>
  );
};

export default Layout;
