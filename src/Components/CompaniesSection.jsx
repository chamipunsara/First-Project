import React from "react";
import beneoshopImage from "../assets/beneoshop.png";
import caspioImage from "../assets/caspio.png";
import HyperGridImage from "../assets/HyperGrid.png";
import leotrippiImage from "../assets/leotrippi.png";
import eclipse from "../assets/Ellipse 3.png";

const CompaniesSection = () => {
  return (
    <div className="bg-white mt-[184px] px-20 lg:px-20 relative w-full ">
     
      <img
        src={eclipse}
        alt="eclipse"
        className="absolute left-0 hidden sm:block z-0 sm:top-[0%] lg:top-[-70%]"
      />

    
      <div className="mx-auto px-3 py-3 text-center relative z-10">
        <h2 className="text-[24px] font-medium">You will be in good Company</h2>
      </div>

    
      <div className=" mx-auto flex flex-wrap justify-center items-center px-4 md:gap-20 gap-15 relative z-10  mt-[11px] sm:gap-16 lg:gap-15 xl:gap-25 2xl:gap-40">
        <img
          src={beneoshopImage}
          alt="beneoshop"
          className="object-contain max-h-[150px] max-w-[150px]"
        />
        <img
          src={caspioImage}
          alt="caspio"
          className="object-contain max-h-[150px] max-w-[150px]"
        />
        <img
          src={HyperGridImage}
          alt="hypergrid"
          className="object-contain max-h-[150px] max-w-[150px]"
        />
        <img
          src={leotrippiImage}
          alt="leotrippi"
          className="object-contain max-h-[150px] max-w-[150px]"
        />
      </div>
    </div>
  );
};

export default CompaniesSection;
