import { useEffect, useState } from "react";
import { Idata } from "../types/Types";

const Home: React.FC = () => {
  const [data, setData] = useState<Idata[] | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/movie`);

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      const responseToJson = await response.json();
      setData(responseToJson);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  console.log("hi");
  return (
    <div>
      <div className="mt-[2.6rem] pl-[1.6rem]">
        <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff]">
          Trending
        </h2>
        <p></p>
        <section></section>
      </div>
      <div className="mt-[2.4rem] px-[1.6rem] pb-[6.1rem]">
        <h2 className="text-[2rem] font-light leading-normal tracking-[-0.31px] text-[#fff]">
          Reccomended for you
        </h2>
        <section className="mt-[2.4rem]">
          {/* {data?.map((item) => (
            <div key={item.title}>
              <img src={item.thumbnail.regular.small} alt="Movie thumbnail" />
            </div>
          ))} */}
          {data
            ?.filter((item) => item.isTrending === false)
            .map((item) => (
              <div key={item.title}>
                <img src={item.thumbnail.regular.small} alt="Thumbnail" />
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
