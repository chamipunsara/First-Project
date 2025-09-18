import React from "react";
import webAppImage from "../assets/website-content 1.png";
import seoImage from "../assets/seo-tag 1.png";
import ARImage from "../assets/immersive 1.png";
import mobileImage from "../assets/coding (1) 1.png";

const services = [
  { img: webAppImage, bg: "bg-[#EFEAFF]", title: "Web Application" },
  { img: seoImage, bg: "bg-[#ECFFDA]", title: "SEO" },
  { img: ARImage, bg: "bg-[#DAE6FF]", title: "AR/VR Solutions" },
  { img: mobileImage, bg: "bg-[#FFE5DA]", title: "Mobile Application" },
];

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-[20px] mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {services.map((item, index) => (
          <div key={index} className="flex gap-4 items-center p-1">
            <div className={`${item.bg} p-6 rounded-2xl`}>
              <img src={item.img} alt={item.title} className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-[20px] font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-[15px] font-normal">Lorem Ipsum is simply</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
