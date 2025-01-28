import { useContext } from "react";
import { MainContext } from "../layouts/Layout";

const Movies: React.FC = () => {
  const { data } = useContext(MainContext);

  return (
    <div className="mt-[2.4rem] px-[1.6rem] pb-[6.1rem]">
      <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff]">
        Movies
      </h2>
      <section className="mt-[2.4rem] flex justify-center flex-wrap gap-x-[1.5rem] gap-y-[1.6rem]">
        {data
          ?.filter((item) => item.category === "Movie")
          .map((item) => (
            <div key={item.title}>
              <img
                src={item.thumbnail.regular.small}
                alt="Thumbnail"
                className="w-[16.4rem] h-[11rem] rounded-[8px] object-contain"
              />
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
  );
};

export default Movies;
