import React from "react";
import groupImage from "../assets/Group 6.png";
import webAppImage from "../assets/website-content 1.png";
import seoImage from "../assets/seo-tag 1.png";
import ARImage from "../assets/immersive 1.png";
import mobileImage from "../assets/coding (1) 1.png";
import secondpageImage from "../assets/17. Recent Activities 1.png";
import secondpageIconImage from "../assets/happy 1.png";
import thirdpageImage from "../assets/website-mockup-png-10 1.png";
import fourthpageImage from "../assets/focus-parallax-hero_1920x1000_ar-vr_0917_layer1-guy 1.png";
import starImage from "../assets/Star 1.png";
import pieImage from "../assets/pai Chart 1.png";
import facebookImage from "../assets/facebook 1.png";
import instaImage from "../assets/instagram 1.png";
import twitterImage from "../assets/twitter 1.png";
import linkdinImage from "../assets/linkedin 1.png";
import beneoshopImage from "../assets/beneoshop.png";
import caspioImage from "../assets/caspio.png";
import HyperGridImage from "../assets/HyperGrid.png";
import leotrippiImage from "../assets/leotrippi.png";
import bellImage from "../assets/Bell Angle 1.png";
import vectorImage from "../assets/Vector 1.png";
import frame20Image from "../assets/Frame 20.png";


const Homepage = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden ">

      <img
        src={vectorImage}
        alt="vector1"
        className="absolute"
        style={{
          left: "1848px",
          top: "280px",
          opacity: 1,
        }}
      />

      <img
        src={frame20Image}
        alt="vector2"
        className="absolute"
        style={{
          left: "-10px",
          top: "700px",
          opacity: 1,
          zIndex: 1
        }}
      />

       <div
          style={{
            position: "absolute",
            width: "700px",
            height: "450px",
            top: "180px",
            left: "-300px",
            transform: "rotate(0deg)",
            opacity: 0.8,
            background: "radial-gradient(circle at center, #DED9FF 80%, rgba(142, 121, 255, 0.6) 0%, rgba(142, 121, 255, 0) 100%)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(20px)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "510px",
            height: "550px",
            top: "130px",
            left: "1200px",
            transform: "rotate(0deg)",
            opacity: 1,
            background: "radial-gradient(circle at center, white 0%, #DED9FF 80%, rgba(222, 217, 255, 0) 100%)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(15px)"

          }}
        ></div>


      <div className=" mx-auto px-10 py-16 flex flex-col md:flex-row items-center justify-center gap-100 bg-[#1090CB1A] ">
        <div className="max-w-xl z-10">
          <h1 className="text-[40px] md:text-5xl font-semibold text-black mb-6 leading-tight w-[650px] h-[193px] ">
            Experienced <span className="text-blue-600">mobile and web</span> applications and website builders measuring.
          </h1>
          <p className="text-[#5C5C5C] text-[16px] font-normal text-lg leading-relaxed w-[545px] h-[125px] mb-10">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#1090CB] text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-[193px] h-[51px]" >Contact us</button>
            <button className="border border-[#1090CB] text-[#1090CB] px-6 py-3 rounded-lg hover:bg-blue-50 w-[193px] h-[51px]">View more</button>
          </div>
        </div>
        <img
          src={groupImage}
          alt="Group"
          className="w-full max-w-lg h-auto object-cover z-10"
        />
      </div>


      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {[
          { img: webAppImage, bg: "bg-[#EFEAFF]", title: "Web Application" },
          { img: seoImage, bg: "bg-[#ECFFDA]", title: "SEO" },
          { img: ARImage, bg: "bg-[#DAE6FF]", title: "AR/VR Solutions" },
          { img: mobileImage, bg: "bg-[#FFE5DA]", title: "Mobile Application" },
        ].map((item, index) => (
          <div key={index} className="flex gap-4 items-center p-6 bg-white rounded-lg shadow-md">
            <div className={`${item.bg} p-6 rounded-xl`}>
              <img src={item.img} alt={item.title} className="w-10 h-10" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply</p>
            </div>
          </div>
        ))}
      </div>


      <div className="mx-auto text-center px-6 py-12">
        <hr className="border-t-0.8 mx-auto mb-6 border-[#D2D2D2]" />

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
          Lorem Ipsum is simply dummy text of the printing.
        </h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto w-[600px] h-[64px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

       <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            top: "1300px",
            left: "1600px",
            transform: "rotate(0deg)",
            opacity: 0.8,
            background: "radial-gradient(circle at center, #DED9FF 80%,#FFFFFF00 20%, rgba(142, 121, 255, 0.6) 0%, rgba(142, 121, 255, 0) 100%)",
            borderRadius: "100%",
            zIndex: 100,
            filter: "blur(40px)",
          }}
        ></div>


        <div className="w-full md:w-1/2 max-w-lg p-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#08D3BB] p-5 rounded-full">
              <img src={secondpageIconImage} alt="icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lorem Ipsum is simply dummy text</h3>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <h4 className="text-2xl md:text-3xl font-semibold mb-4 w-[450px] h-[91px]">
            <span className="text-blue-600">Lorem Ipsum</span> is simply dummy text of the printing.
          </h4>
          <p className="text-gray-600 w-[425px] h-[141px]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
        </div>


        <div className="w-full md:w-1/2 flex justify-center ml-10 " >
          <img
            src={secondpageImage}
            alt="second"
            className="z-20 ml-50"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-40">

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={thirdpageImage}
            alt="second"
            className="w-[90%] h-auto max-w-[700px] rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#1090CB] p-5 rounded-full">
              <img src={secondpageIconImage} alt="icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lorem Ipsum is simply dummy text</h3>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <h4 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-blue-600">Lorem Ipsum</span> is simply dummy text of the printing.
          </h4>
          <p className="text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="w-full md:w-1/2 max-w-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#9208D3] p-5 rounded-full">
              <img src={secondpageIconImage} alt="icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Lorem Ipsum is simply dummy text</h3>
              <p className="text-gray-500 text-sm">Lorem Ipsum is simply dummy text</p>
            </div>
          </div>
          <h4 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-blue-600">Lorem Ipsum</span> is simply dummy text of the printing.
          </h4>
          <p className="text-gray-600">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "500px",
            top: "2700px",
            left: "1200px",
            transform: "rotate(0deg)",
            opacity: 0.8,
            background: "radial-gradient(circle at center, #DED9FF 80%,#FFFFFF00 20%, rgba(142, 121, 255, 0.6) 0%, rgba(142, 121, 255, 0) 100%)",
            borderRadius: "50%",
            zIndex: 1,
            filter: "blur(60px)",
          }}
        ></div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={fourthpageImage}
            alt="second"
            className="w-[90%] h-auto max-w-[700px] rounded-lg z-10"
          />
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-center gap-10">

        <img
          src={bellImage}
          alt="bell"
          className="absolute"
          style={{
            width: "120px",
            height: "120px",
            left: "1650px",
            transform: "rotate(350deg)",
            top: "3430px",
            zIndex: 10

          }}
        />

        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            top: "3600px",
            left: "1550px",
            transform: "rotate(0deg)",
            opacity: 1,
            background: "radial-gradient(72.77% 72.77% at 50% 50%, #FFD9EB 0%, rgba(255, 255, 255, 0) 100%)",
            borderRadius: "50%",
            zIndex: 0,
            filter: "blur(40px)",
          }}
        ></div>

        <div className="text-center bg-[#F4F4F4] pt-[60px] pb-[60px] px-6 rounded-[20px] w-full md:w-[800px] h-[459px] flex flex-col justify-center items-center space-y-10">
          <h4 className="text-[25px] font-semibold font-poppins">
            Lorem Ipsum is simply dummy text.
          </h4>
          <p className="text-[16px] font-normal font-poppins text-[#545454]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <button className="bg-[#1090CB] text-white px-6 py-3 rounded-[10px] hover:bg-blue-700 w-[153px] h-[49px] mt-10">
            View More
          </button>
        </div>


        <div className="text-center bg-[#1090CB] pt-[60px] pb-[60px] px-6 rounded-[20px] w-full md:w-[800px] h-[459px] flex flex-col justify-center items-center space-y-10 z-0">
          <h4 className="text-[25px] font-semibold font-poppins text-[#FFFFFF]">
            Lorem Ipsum is simply dummy text.
          </h4>
          <p className="text-[16px] font-normal font-poppins text-[#FFFFFF]">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS.
          </p>
          <button className="bg-white text-[#1090CB] px-6 py-3 rounded-[10px] hover:bg-gray-200 w-[153px] h-[49px] mt-10">
            View More
          </button>

        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto px-6 py-16 text-center pt-40">
          <h2 className="text-[24px] font-poppins font-medium mb-4">
            You will be in good Company</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-40 px-6 pb-10">
          <img src={beneoshopImage} alt="" className=" object-contain" />
          <img src={caspioImage} alt="" className=" object-contain" />
          <img src={HyperGridImage} alt="" className=" object-contain" />
          <img src={leotrippiImage} alt="" className=" object-contain" />
        </div>
      </div>

      <div className="bg-[#1090CB1A] py-50 mt-12 relative ">

        <img
          src={starImage}
          alt="star"
          className="absolute"
          style={{
            width: "66px",
            height: "66px",
            top: "-30px",
            left: "167px",
            transform: "rotate(-500deg)",
            opacity: 1,
          }}
        />

        <img
          src={pieImage}
          alt="star"
          className="absolute"
          style={{
            width: "66px",
            height: "66px",
            top: "90px",
            left: "1350px",
            opacity: 1,
          }}
        />

        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-20">
            Lorem Ipsum is simply dummy text of the printing.
          </h2>

          <div className="flex justify-center items-center gap-10">
            <input
              type="text"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white w-[532px] h-[63px]"
            />
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-[173px] h-[67px]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-12 flex flex-row space-x-35 justify-center">
        <div className="flex flex-col space-y-6 ">
          <div className="font-bold text-[16px] font-poppins text-[#00329B]">
            LOGO
          </div>

          <div className="text-[#515151] font-normal text-[16px] font-poppins max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins">@Lorem</div>
        </div>


        <div className="flex flex-col space-y-5 ">
          <div className="text-[#000000] font-medium text-[17px] font-poppins"> About us</div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins hover:text-[#1090CB]">Lorem</div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins hover:text-[#1090CB]">Portfolio
          </div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins hover:text-[#1090CB]">Careers
          </div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins hover:text-[#1090CB]">Contact us
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          <div className="text-[#000000] font-medium text-[17px] font-poppins">Contact us</div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
          <div className="text-[#515151] font-normal text-[16px] font-poppins">+908 89097 890</div>
        </div>


        <div className="flex flex-row space-x-10 position-absolute mt-40">
          <div className="w-10 h-10 rounded-full bg-[#FFFFFF] drop-shadow-xl/50 align-center flex justify-center items-center">
            <img src={facebookImage} alt="facebook" className="" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#FFFFFF] drop-shadow-xl/50 align-center flex justify-center items-center">
            <img src={instaImage} alt="facebook" className="" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#FFFFFF] drop-shadow-xl/50 align-center flex justify-center items-center">
            <img src={twitterImage} alt="facebook" className="" />
          </div>
          <div className="w-10 h-10 rounded-full bg-[#FFFFFF] drop-shadow-xl/50 align-center flex justify-center items-center">
            <img src={linkdinImage} alt="facebook" className="" />
          </div>
        </div>

      </div>

      <div className="text-center text-[#686868] font-normal text-[13px] font-poppins mb-6 p-10 border-t border-[0.8px] border-[#D2D2D2]">
        Copyright ® 2021 Lorem All rights Rcerved
      </div>
    </div>


  );
};

export default Homepage;
