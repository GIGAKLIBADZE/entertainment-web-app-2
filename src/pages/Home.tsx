import { MainContext } from "../layouts/Layout";
import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EmptyBookMark from "/images/icon-bookmark-empty.svg";
import FullBookMark from "/images/icon-bookmark-full.svg";

import "swiper/swiper-bundle.css";
import SearchResult from "../components/SearchResult";
import SearchArea from "../components/SearchArea";
import HoveredItem from "../components/HoveredItem";

const Home: React.FC = () => {
  const { data, toggleBookmark, search } = useContext(MainContext);

  return (
    <div className="xl:w-[91.6%]">
      <SearchArea />
      {search ? (
        <div>
          <SearchResult />
        </div>
      ) : (
        <div>
          <div className="entertainment-container pr-0">
            <h2 className="title">Trending</h2>
            <section className="mt-[1.6rem]">
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={10}
                breakpoints={{
                  375: {
                    slidesPerView: "auto",
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: "auto",
                    spaceBetween: 20,
                  },
                }}
              >
                {data
                  ?.filter((item) => item.isTrending === true)
                  .map((item) => (
                    <SwiperSlide
                      className="swiper-slide"
                      key={item.title}
                      style={{ width: "70rem" }}
                    >
                      <div className="relative parent  xl:max-w-[47rem] slide-content md:w-[47rem] increase">
                        <img
                          src={item.thumbnail.regular.small}
                          alt="Thumbnail"
                          className="w-[24rem] h-[14rem] rounded-[8px] relative md:w-[47rem] md:h-[23rem]"
                        />
                        <div
                          className="bookmark-container absolute "
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
                        <HoveredItem />
                        <div />
                        <section className="flex items-center gap-[0.8rem] ml-[1.6rem] absolute top-[8.6rem] md:top-[15.4rem]">
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
                        <p className="text-[1.4rem] font-medium leading-normal text-[#fff] mt-[0.4rem] ml-[1.6rem] absolute top-[10.5rem] md:top-[17.6rem]">
                          {item.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                ...
              </Swiper>
            </section>
          </div>
          <div className="entertainment-container">
            <h2 className="title">Recommended for you</h2>
            <section className="items-container ">
              {data
                ?.filter((item) => item.isTrending === false)
                .map((item) => (
                  <div key={item.title} className="relative w-full">
                    <div className="relative parent ">
                      <img
                        src={item.thumbnail.regular.large}
                        alt="Thumbnail"
                        className="item-image max-w-[100%]"
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
                      <HoveredItem />
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
