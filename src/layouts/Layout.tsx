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
});

const Layout: React.FC = () => {
  const [data, setData] = useState<Idata[] | null | undefined>(null);
  const [search, setSearch] = useState<boolean>(false);
  const [lookingFor, setLookingFor] = useState<Idata[] | null | undefined>(
    null
  );

  const [menu, setMenu] = useState<number>(1);

  const location = useLocation();

  const filterData = () => {
    if (location.pathname === "/Profile/Home") {
      setMenu(1);
    } else if (location.pathname === "/Profile/Movies") {
      setMenu(2);
    } else if (location.pathname === "/Profile/TVSeries") {
      setMenu(3);
    } else if (location.pathname === "/Profile/Bookmarked") {
      setMenu(4);
    }
  };

  console.log(location.pathname);

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

    setLookingFor(filteredData);
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
            className="w-[1.6rem] h-[1.6rem] object-contain"
            onClick={() => {
              if (menu !== 1) {
                setMenu(1);
                navigate("/Profile/Home");
              }
            }}
          />
          <img
            src={Movies}
            alt="Movies"
            className="w-[1.6rem] h-[1.6rem] object-contain"
            onClick={() => {
              if (menu !== 2) {
                setMenu(2);
                navigate("/Profile/Movies");
              }
            }}
          />
          <img
            src={TVSeries}
            alt="TV Series"
            className="w-[1.6rem] h-[1.6rem] object-contain"
            onClick={() => {
              if (menu !== 3) {
                setMenu(3);
                navigate("/Profile/TVSeries");
              }
            }}
          />
          <img
            src={Bookmarked}
            alt="Bookmarked"
            className="w-[1.4rem] h-[1.6rem] object-contain"
            onClick={() => {
              if (menu !== 4) {
                setMenu(4);
                navigate("/Profile/Bookmarked");
              }
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
              navigate("/Profile/Search");
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
        }}
      >
        <Outlet />
      </MainContext.Provider>
    </>
  );
};

export default Layout;
