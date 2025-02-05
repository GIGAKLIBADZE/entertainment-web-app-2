import { useContext } from "react";
import { MainContext } from "../layouts/Layout";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";
import SearchResult from "../components/SearchResult";
import SearchArea from "../components/SearchArea";

const Bookmarked: React.FC = () => {
  const { data, toggleBookmark, search } = useContext(MainContext);

  return (
    <div className="w-full">
      <SearchArea />
      {search ? (
        <div>
          <SearchResult />
        </div>
      ) : (
        <div>
          <div>
            <div className="entertainment-container">
              <h2 className="title">Bookmarked Movies</h2>
              <section className="items-container">
                {data
                  ?.filter(
                    (item) =>
                      item.category === "Movie" && item.isBookmarked == true
                  )
                  .map((item) => (
                    <div key={item.title} className="relative w-full">
                      <img
                        src={item.thumbnail.regular.small}
                        alt="Thumbnail"
                        className="w-full rounded-[8px] object-cover"
                      />
                      <div
                        className="bookmark-container"
                        onClick={() => toggleBookmark(item.title)}
                      >
                        <img
                          src={item.isBookmarked ? FullBookMark : EmptyBookMark}
                          alt="Bookmark"
                        />
                      </div>
                      <section className="flex items-center gap-[0.6rem] mt-[0.8rem] md:gap-[0.8rem]">
                        <small className="description">
                          {item.year}{" "}
                          <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                            •
                          </span>
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
                            <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                              •
                            </span>
                          </small>
                        </div>

                        <div></div>
                        <small className="description">{item.rating}</small>
                      </section>
                      <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.6rem] md:text-[1.8rem]">
                        {item.title}
                      </p>
                    </div>
                  ))}
              </section>
            </div>
            <div className="entertainment-container">
              <h2 className="title">Bookmarked TV Series</h2>
              <section className="items-container">
                {data
                  ?.filter(
                    (item) =>
                      item.category === "TV Series" && item.isBookmarked == true
                  )
                  .map((item) => (
                    <div key={item.title} className="relative w-full">
                      <img
                        src={item.thumbnail.regular.small}
                        alt="Thumbnail"
                        className="w-full rounded-[8px] object-cover"
                      />
                      <div className="bookmark-container">
                        <img src={EmptyBookMark} alt="Bookmark" />
                      </div>
                      <section className="flex items-center gap-[0.6rem] mt-[0.8rem] md:gap-[0.8rem]">
                        <small className="description">
                          {item.year}{" "}
                          <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                            •
                          </span>
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
                            <span className="opacity-[0.5] ml-[0.6rem] md:ml-[0.8rem]">
                              •
                            </span>
                          </small>
                        </div>

                        <div></div>
                        <small className="description">{item.rating}</small>
                      </section>
                      <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.6rem] md:text-[1.8rem]">
                        {item.title}
                      </p>
                    </div>
                  ))}
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarked;
