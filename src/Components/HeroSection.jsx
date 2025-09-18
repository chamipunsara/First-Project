import React from "react";
import groupImage from "../assets/Group 6.png";
import vectorImage from "../assets/Vector 1.png";
import frame20Image from "../assets/Frame 20.png";

const HeroSection = () => {
  return (
    <div className="relative w-full mt-[-10px]">
     
      <hr className="border border-[#C4C4C4] mx-auto w-full" />

   
      <img
        src={vectorImage}
        alt="vector1"
        className="absolute right-0 top-[30%] md:top-[25%] max-w-[150px] md:max-w-[250px] hidden sm:block"
      />
      <img
        src={frame20Image}
        alt="vector2"
        className="absolute left-0 top-[75%] md:top-[75%] max-w-[150px] md:max-w-[250px] hidden sm:block "
      />

 
      <div className="absolute w-[50%] sm:w-[300px] md:w-[400px] aspect-square  sm:top-[15%] sm:left-[35%] md:top-[12%] md:left-[48%] lg:top-[15%] lg:left-[55%]  xl:top-[15%] xl:left-[65%] 2xl:top-[15%] 2xl:left-[65%] top-[10%] left-[25%] rounded-full z-0 blur-[25px] bg-[radial-gradient(circle_at_center,#F3FFD9_0%,rgba(255,255,255,0)_100%)]"></div>
      <div className="absolute w-[50%] sm:w-[300px] md:w-[400px] aspect-square sm:top-[60%] sm:left-[15%] md:top-[30%] md:left-[2%] lg:top-[35%] lg:left-[1%]  xl:top-[15%] xl:left-[0%] 2xl:top-[15%] 2xl:left-[10%] top-[60%] left-[10%] rounded-full z-0 blur-[40px] bg-[radial-gradient(circle_at_center,#DED9FF_30%,rgba(222,217,255,0)_100%)]"></div>

   
      <div className="relative z-10 bg-[#1090CB1A]">
      
        <div className="max-w-[1440px] mx-auto px-5 sm:px-20 lg:px-15 2xl:px-20 py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4">
   
          <div className="text-center md:text-left md:mt-[128px]">
            <h1 className="sm:text-[40px] md:text-[40px] font-semibold text-black mb-[16px] 2xl:text-5xl text-[40px] leading-15">
              Experienced{" "}
              <span className="text-[#1090CB]">mobile and web </span> applications and website <br /> builders measuring.
            </h1>
            <p className="text-base font-normal text-gray-600 mb-[65px] leading-relaxed">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-[165px] ">
              <button className="bg-[#1090CB] text-white px-8 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto text-base font-normal">
                Contact us
              </button>
              <button className="border border-[#1090CB] text-[#1090CB] px-8 py-3 rounded-lg hover:bg-blue-50 sm:w-auto text-base font-normal bg-white">
                View more
              </button>
            </div>
          </div>

        
          <div className="flex justify-center md:justify-end w-full">
            <img
              src={groupImage}
              alt="Group"
              className="sm:max-w-md md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
