import React from "react";
import Play from "/images/icon-play.svg";

const HoveredItem: React.FC = () => {
  return (
    <div className="bg-black/50 w-full absolute h-[100%] top-0 child cursor-pointer">
      <div
        className="absolute w-[41.8%] rounded-[2.9rem] h-[27.6%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      flex items-center justify-center gap-[16.2%] bg-white/25"
      >
        <img src={Play} alt="Play" className="w-[25.6%]" />
        <span className="text-[1.8rem] font-light leading-normal text-white">
          Play
        </span>
      </div>
    </div>
  );
};

export default HoveredItem;
