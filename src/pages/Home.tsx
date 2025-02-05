import { MainContext } from "../layouts/Layout";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";
import "swiper/swiper-bundle.css";
import SearchResult from "../components/SearchResult";
import SearchArea from "../components/SearchArea";

const Home: React.FC = () => {
  const { data, toggleBookmark, search } = useContext(MainContext);

  return (
    <div>
      {search ? (
        <div>
          <SearchArea />
          <SearchResult />
        </div>
      ) : (
        <div>
          <SearchArea />
          <div className="entertainment-container">
            <h2 className="title">Trending</h2>
            <p></p>
            <section className="mt-[1.6rem]">
              <Swiper spaceBetween={10} slidesPerView={"auto"}>
                {data
                  ?.filter((item) => item.isTrending === true)
                  .map((item) => (
                    <SwiperSlide style={{ width: "24.5rem" }} key={item.title}>
                      <div>
                        <img
                          src={item.thumbnail.regular.small}
                          alt="Thumbnail"
                          className="w-[24rem] h-[14rem] rounded-[8px] relative"
                        />
                        <div
                          className="bookmark-container"
                          onClick={() => {
                            toggleBookmark(item.title);
                          }}
                        >
                          <img
                            src={
                              item.isBookmarked ? FullBookMark : EmptyBookMark
                            }
                            alt="Bookmark"
                          />
                        </div>
                        <section className="flex items-center gap-[0.8rem] ml-[1.6rem] absolute top-[8.6rem]">
                          <small className="description !text-[1.2rem]">
                            {item.year}{" "}
                            <span className="opacity-[0.5] ml-[0.8rem]">•</span>
                          </small>

                          <div className="flex items-center gap-[0.4rem]">
                            <img
                              src={
                                item.category === "Movie"
                                  ? "/images/icon-nav-movies.svg"
                                  : "/images/icon-nav-tv-series.svg"
                              }
                              alt="Category"
                              className={`w-[1.2rem]
                        ${
                          item.category === "Movie"
                            ? "h-[1.2rem]"
                            : "h-[0.7rem]"
                        }
                      `}
                            />
                            <small className="description !text-[1.2rem]">
                              {item.category}{" "}
                              <span className="opacity-[0.5] ml-[0.8rem]">
                                •
                              </span>
                            </small>
                          </div>

                          <small className="description !text-[1.2rem]">
                            {item.rating}
                          </small>
                        </section>
                        <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.4rem] ml-[1.6rem] absolute top-[10.5rem]">
                          {item.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                {/* </SwiperSlide> */}
                ...
              </Swiper>
            </section>
          </div>
          <div className="entertainment-container">
            <h2 className="title">Recommended for you</h2>
            <section className="items-container">
              {data
                ?.filter((item) => item.isTrending === false)
                .map((item) => (
                  <div key={item.title} className="relative w-full">
                    <img
                      src={item.thumbnail.regular.large}
                      alt="Thumbnail"
                      className="w-full rounded-[8px] object-cover "
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
          <div className="mt-[2.4rem] px-[1.6rem] pb-[1.6rem]"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
