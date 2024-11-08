import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div style={{marginBottom:"20px"}} className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[250px]  lgl:w-[500px] lgl:h-[350px] z-10"
        src={bannerImg}
        alt="Awais-Ali"
      />
      <div className="absolute bottom-0 w-[350px] h-[200px] lgl:w-[500px] lgl:h-[370px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
