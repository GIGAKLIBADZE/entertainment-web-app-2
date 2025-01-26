// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Idata } from "../types/Types";

const Home: React.FC = () => {
  //   const { id } = useParams<{ id: string }>();

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
      <div>
        <h2>Trending</h2>
        <p></p>
        <section>
          {data?.map((item) => (
            <p key={item.title}>{item.title}</p>
          ))}
        </section>
      </div>
      <div>
        <h2>Reccomended for you</h2>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
