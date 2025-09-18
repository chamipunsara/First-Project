import React from "react";
import starImage from "../assets/Star 1.png";
import pieImage from "../assets/pai Chart 1.png";

const NewsletterSection = () => {
  return (
    <div className="w-full mt-[43px]">
      <div className="bg-[#1090CB1A] py-35 relative w-full px-[20px]">
       
        <img
          src={starImage}
          alt="star"
          className="absolute w-12 h-12 sm:w-16 sm:h-16 top-[-20px] sm:top-[-30px] left-[10%] sm:left-[167px] rotate-[500deg]"
        />
        <img
          src={pieImage}
          alt="pie"
          className="absolute w-12 h-12 top-[18%] right-[8px] sm:w-16 sm:h-16 sm:top-[18%] sm:right-[25%]"
        />

       
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-10 text-center">
          <h2 className="text-[20px] sm:text-[30px] font-medium text-gray-800 mb-8 sm:mb-15 md:px-50">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-[14px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="text-[14px] sm:text-[16px] font-normal px-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white w-full sm:w-[532px] py-5"
            />
            <button className="bg-black text-white px-6 text-sm rounded-[10px] hover:bg-blue-700 w-full sm:w-[173px] py-5 ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
