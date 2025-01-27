import { useContext } from "react";
import { MainContext } from "../layouts/Layout";

const Search: React.FC = () => {
  const { lookingFor, data, search } = useContext(MainContext);
  console.log(data);

  return (
    <div>
      {search ? (
        <div>
          <h2>Found 2 results for 'Earth'</h2>
          <section>
            {lookingFor?.map((item) => (
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
      ) : null}
    </div>
  );
};

export default Search;
