import { useContext } from "react";
import { MainContext } from "../layouts/Layout";
import Search from "/images/icon-search.svg";

const SearchArea: React.FC = () => {
  const { findResult, setSearch } = useContext(MainContext);

  return (
    <form
      onSubmit={findResult}
      className="pl-[1.6rem] flex items-start gap-[1.9rem] mt-[2.6rem] md:pl-[2.9rem] 
      md:gap-[2.4rem] xl:pt-[6.8rem] xl:mt-0 xl:ml-[3.6rem] xl:pl-0"
    >
      <button>
        <img
          src={Search}
          alt="Search"
          className="w-[1.8rem] h-[1.8rem] md:w-[2.4rem] md:h-[2.4rem] xl:w-[3.2rem] xl:h-[3.2rem]"
          onClick={() => {
            setSearch(true);
          }}
        />
      </button>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="caret-[#fc4747] w-full mr-[1.6rem] md:mr-[] xl:mr-[3.5rem] text-[1.6rem] font-light leading-normal 
        text-[#fff] outline-none md:text-[2.4rem] xl:wfull cursor-pointer focus:cursor-text focus:border-b 
        focus:border-[#5a698f] pb-[1.5rem]"
        name="search"
      />
    </form>
  );
};

export default SearchArea;
