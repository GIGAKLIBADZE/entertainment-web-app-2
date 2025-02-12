import { useContext } from "react";
import { MainContext } from "../layouts/Layout";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";
import HoveredItem from "./HoveredItem";

const SearchResult: React.FC = () => {
  const { lookingFor, search, toggleBookmark, data, toggleSearchBookmark } =
    useContext(MainContext);

  return (
    <div className="mt-[2.4rem] pb-[1.6rem]">
      {search ? (
        <div className="entertainment-container">
          <h2 className="title">
            {lookingFor?.length
              ? `Found ${lookingFor?.length} results for 'Earth'`
              : "No result"}
          </h2>
          <section className="items-container">
            {lookingFor?.map((item) => (
              <div key={item.title} className="relative w-full">
                <div className="relative parent">
                  <img
                    src={item.thumbnail.regular.large}
                    alt="Thumbnail"
                    className="item-image"
                  />
                  <div
                    className="bookmark-container"
                    onClick={() => {
                      toggleBookmark(item.title);
                      toggleSearchBookmark(item.title);
                    }}
                  >
                    <img
                      src={item.isBookmarked ? FullBookMark : EmptyBookMark}
                      alt="Bookmark"
                    />
                  </div>
                  <HoveredItem />
                </div>
                <section className="flex items-center gap-[0.6rem] mt-[0.8rem] md:gap-[0.8rem]">
                  <small className="description">
                    {item.year}{" "}
                    <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                      •
                    </span>
                  </small>
                  <div className="flex items-center gap-[0.4rem]">
                    <img
                      src={
                        item.category === "Movie"
                          ? "/images/icon-nav-movies.svg"
                          : "/images/icon-nav-tv-series.svg"
                      }
                      alt="Category"
                      className={`w-[1rem]
                        ${item.category === "Movie" ? "h-[1rem]" : "h-[0.7rem]"}
                      `}
                    />
                    <small className="description">
                      {item.category}{" "}
                      <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                        •
                      </span>
                    </small>
                  </div>
                  <small className="description">{item.rating}</small>
                </section>
                <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.6rem] md:text-[1.8rem]">
                  {item.title}
                </p>
              </div>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResult;
