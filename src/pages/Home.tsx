import { MainContext } from "../layouts/Layout";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";
import "swiper/swiper-bundle.css";
import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SearchResult from "../components/SearchResult";
import SearchArea from "../components/SearchArea";

const Home: React.FC = () => {
  const {
    data,
    menu,
    setMenu,
    toggleBookmark,
    search,
    toggleSearchBookmark,
    lookingFor,
    filterData,
    tablet,
  } = useContext(MainContext);

  console.log(tablet);

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
            <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff] md:text-[3.2rem] md:tracking-[-0.5px]">
              Trending
            </h2>
            <p></p>
            <section className="mt-[1.6rem]">
              <Swiper
                // modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={"auto"}
                // navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {/* <SwiperSlide> */}
                {data
                  ?.filter((item) => item.isTrending === true)
                  .map((item) => (
                    <SwiperSlide style={{ width: "24.5rem" }} key={item.title}>
                      <div>
                        <img
                          src={
                            tablet
                              ? item.thumbnail.trending.large
                              : item.thumbnail.trending.small
                          }
                          alt="Thumbnail"
                          className="w-[24rem] h-[14rem] rounded-[8px] relative"
                        />
                        <div
                          className="w-[3.2rem] h-[3.2rem] rounded-[50%] bg-[#10141e] flex items-center justify-center opacity-[0.5] absolute top-[0.8rem] left-[20rem]"
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
                        <p className="text-[1.5rem] font-medium leading-normal text-[#fff] mt-[0.4rem] ml-[1.6rem] absolute top-[10.5rem]">
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
            <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff] md:text-[3.2rem] md:tracking-[-0.5px]">
              Recommended for you
            </h2>
            <section className="mt-[2.4rem] grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-[1.5rem] gap-y-[1.6rem] mx-auto">
              {/* <div className="flex flex-wrap gap-x-[1.5rem] gap-y-[1.6rem] mx-auto"> */}
              {/* <div className="grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-[1.5rem] gap-y-[1.6rem] mx-auto"> */}
              {data
                ?.filter((item) => item.isTrending === false)
                .map((item) => (
                  <div key={item.title} className="relative w-full">
                    <img
                      src={item.thumbnail.regular.small}
                      alt="Thumbnail"
                      className="w-full rounded-[8px] object-cover "
                    />
                    <div
                      className="w-[3.2rem] h-[3.2rem] rounded-[50%] bg-[#10141e] flex items-center justify-center opacity-[0.5] absolute top-[0.8rem] right-[0.8rem] z-10"
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

              {/* {data
                ?.filter((item) => item.isTrending === false)
                .map((item) => (
                  <div key={item.title} className="relative">
                    <img
                      src={item.thumbnail.regular.small}
                      alt="Thumbnail"
                      className="w-[16.4rem] h-[11rem] rounded-[8px] object-contain "
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
                ))} */}
            </section>
          </div>
          <div className="mt-[2.4rem] px-[1.6rem] pb-[1.6rem]"></div>
        </div>
      )}
    </div>
  );
};

export default Home;
