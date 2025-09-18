import React from "react";
import bellImage from "../assets/Bell Angle 1.png";
import frame26 from "../assets/Frame 26.png";

const CardsSection = () => {
  return (
    <section className="relative w-full px-5 sm:px-20 mt-[198px]">
   
      <img
        src={bellImage}
        alt="bell"
        className="absolute left-[70%] top-[47%] md:left-[77%] md:top-[-9%] max-w-[110px] max-h-[110px] rotate-[350deg] z-20 2xl:top-[-12%] 2xl:left-[78%] sm:top-[48%] sm:left-[70%] lg:top-[-10%] lg:left-[83%] xl:top-[-10%] xl:left-[85%] " 
      />
      <img
        src={frame26}
        alt="vector2"
        className="absolute 2xl:right-[-10%] 2xl:top-[30%] xl:right-[-10%] xl:top-[30%] lg:right-[-10%] lg:top-[30%]  md:right-[-10%] md:top-[30%]  sm:right-[-10%] sm:top-[70%] z-0 hidden sm:block"
      />

     
      <div className="flex flex-col md:flex-row gap-[50px] relative z-10 justify-center">

        <div className="bg-[#F4F4F4] rounded-2xl shadow-md w-full md:w-[48%] xl:w-[572px] xl:h-[459px] 2xl:w-[572px] 2xl:h-[459px] flex flex-col">
          <div className="flex flex-col justify-between flex-1 pt-[64px] px-[24px] sm:px-[48px]">
            <div className="text-center">
              <h4 className="text-[22px] font-semibold mb-[36px]">
                Lorem Ipsum is simply <br /> dummy text.
              </h4>
              <p className="text-[15px] text-gray-600 leading-relaxed mb-[36px]">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br />
                mobile and web applications and website builders <br />
                measuring dozens of completed projects. We build and <br />
                develop mobile applications for several top platforms, <br />
                including Android & IOS.
              </p>
            </div>
            <div className="flex justify-center pb-[49px]">
              <button className="bg-[#1090CB] text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 w-[140px] h-[44px] transition">
                View More
              </button>
            </div>
          </div>
        </div>

       
        <div className="bg-[#1090CB] text-white rounded-2xl shadow-md w-full md:w-[48%] xl:w-[572px] xl:h-[459px] 2xl:w-[572px] 2xl:h-[459px] flex flex-col">
          <div className="flex flex-col justify-between flex-1 pt-[64px] px-[24px] sm:px-[48px]">
            <div className="text-center">
              <h4 className="text-[22px] font-semibold mb-[36px]">
                Lorem Ipsum is simply <br /> dummy text.
              </h4>
              <p className="text-[15px] leading-relaxed mb-[36px]">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced <br />
                mobile and web applications and website builders <br />
                measuring dozens of completed projects. We build and <br />
                develop mobile applications for several top platforms, <br />
                including Android & IOS.
              </p>
            </div>
            <div className="flex justify-center pb-[49px]">
              <button className="bg-white text-[#1090CB] px-5 py-2.5 rounded-lg hover:bg-gray-200 w-[140px] h-[44px] transition">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
