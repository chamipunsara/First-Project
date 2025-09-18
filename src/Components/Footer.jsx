import React from "react";
import facebookImage from "../assets/facebook 1.png";
import instaImage from "../assets/instagram 1.png";
import twitterImage from "../assets/twitter 1.png";
import linkdinImage from "../assets/linkedin 1.png";

const Footer = ({id}) => {
  return (
    <>
      <div id={id}> 
      <div className="max-w-[1600px] mx-auto mt-12 mb-12 flex flex-col md:flex-row justify-between items-start gap-10 lg:px-20 px-4">

        <div className="flex flex-col space-y-5 max-w-sm">
          <div className="font-bold text-[16px] text-[#00329B]">LOGO</div>
          <div className="text-[#515151] font-normal text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="text-[#515151] font-normal text-[16px]">@Lorem</div>
        </div>

        <div className="flex flex-col space-y-5">
          <div className="text-black font-medium text-[17px]">About us</div>
          <div className="text-gray-600 hover:text-[#1090CB] cursor-pointer">Lorem</div>
          <div className="text-gray-600 hover:text-[#1090CB] cursor-pointer">Portfolio</div>
          <div className="text-gray-600 hover:text-[#1090CB] cursor-pointer">Careers</div>
          <div className="text-gray-600 hover:text-[#1090CB] cursor-pointer">Contact us</div>
        </div>

  
        <div className="flex flex-col space-y-5 max-w-sm">
          <div className="text-black font-medium text-[17px]">Contact us</div>
          <div className="text-gray-600 text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="text-gray-600 text-[16px]">+908 89097 890</div>
        </div>

 
        <div className="flex flex-row space-x-4 self-center md:self-end">
          {[facebookImage, instaImage, twitterImage, linkdinImage].map((icon, idx) => (
            <div
              key={idx}
              className="w-10 h-10 rounded-full bg-white shadow flex justify-center items-center drop-shadow-md"
            >
              <img src={icon} alt="social-icon" />
            </div>
          ))}
        </div>
      </div>

   
      <div className="text-center text-gray-500 font-normal text-[13px] mb-6 p-6 border-t border-gray-300">
        Copyright ® 2021 Lorem All rights Reserved
      </div>
      </div>
    </>
  );
};

export default Footer;
