import { useContext } from "react";
import { MainContext } from "../layouts/Layout";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";

const Bookmarked: React.FC = () => {
  const { data, menu, setMenu, toggleBookmark } = useContext(MainContext);

  return (
    <div>
      <div className="mt-[2.4rem] px-[1.6rem]">
        <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff]">
          Bookmarked Movies
        </h2>
        <section className="mt-[2.4rem] flex justify-center flex-wrap gap-x-[1.5rem] gap-y-[1.6rem]">
          {data
            ?.filter(
              (item) => item.category === "Movie" && item.isBookmarked == true
            )
            .map((item) => (
              <div key={item.title} className="relative">
                <img
                  src={item.thumbnail.regular.small}
                  alt="Thumbnail"
                  className="w-[16.4rem] h-[11rem] rounded-[8px] object-contain"
                />
                <div
                  className="w-[3.2rem] h-[3.2rem] rounded-[50%] bg-[#10141e] flex items-center justify-center opacity-[0.5] absolute top-[0.8rem] left-[12.4rem]"
                  onClick={() => toggleBookmark(item.title)}
                >
                  <img
                    src={item.isBookmarked ? FullBookMark : EmptyBookMark}
                    alt="Bookmark"
                  />
                </div>
                <section className="flex items-center gap-[0.7rem] mt-[0.8rem]">
                  <small className="description">
                    {item.year}{" "}
                    <span className="opacity-[0.5] ml-[0.6rem]">•</span>
                  </small>
                  <div></div>
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
                      <span className="opacity-[0.5] ml-[0.6rem]">•</span>
                    </small>
                  </div>

                  <div></div>
                  <small className="description">{item.rating}</small>
                </section>
                <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.6rem]">
                  {item.title}
                </p>
              </div>
            ))}
        </section>
      </div>
      <div className="mt-[2.4rem] px-[1.6rem] pb-[6.1rem]">
        <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff]">
          Bookmarked TV Series
        </h2>
        <section className="mt-[2.4rem] flex justify-center flex-wrap gap-x-[1.5rem] gap-y-[1.6rem]">
          {data
            ?.filter(
              (item) =>
                item.category === "TV Series" && item.isBookmarked == true
            )
            .map((item) => (
              <div key={item.title} className="relative">
                <img
                  src={item.thumbnail.regular.small}
                  alt="Thumbnail"
                  className="w-[16.4rem] h-[11rem] rounded-[8px] object-contain "
                />
                <div className="w-[3.2rem] h-[3.2rem] rounded-[50%] bg-[#10141e] flex items-center justify-center opacity-[0.5] absolute top-[0.8rem] left-[12.4rem]">
                  <img src={EmptyBookMark} alt="Bookmark" />
                </div>
                <section className="flex items-center gap-[0.7rem] mt-[0.8rem]">
                  <small className="description">
                    {item.year}{" "}
                    <span className="opacity-[0.5] ml-[0.6rem]">•</span>
                  </small>
                  <div></div>
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
                      <span className="opacity-[0.5] ml-[0.6rem]">•</span>
                    </small>
                  </div>

                  <div></div>
                  <small className="description">{item.rating}</small>
                </section>
                <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.6rem]">
                  {item.title}
                </p>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Bookmarked;
