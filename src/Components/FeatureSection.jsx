import React from "react";

const FeatureSection = ({
  img,
  icon,
  title,
  subtitle,
  heading,
  description,
  reverse,
  bgCircle,
  iconBg,
}) => {
  return (
    <div className="w-full bg-white flex justify-center relative">
      <div
        className={`w-full max-w-[1536px] py-10 px-6 md:px-8 lg:px-20 flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between gap-8 relative mx-auto`}
      >
        {bgCircle && <div className={`absolute ${bgCircle}`} />}

      
        <div className="w-full md:w-120 z-0 md:pr-0">
          <div className="flex items-center gap-4 mb-8">
            <div className={`${iconBg} p-5 rounded-full`}>
              <img src={icon} alt="icon" className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-[17px] font-semibold">{title}</h3>
              <p className="text-gray-500 text-[14px] font-normal">
                {subtitle}
              </p>
            </div>
          </div>
          <h4 className="text-[30px] md:text-[30px] font-semibold mb-12">
            <span className="text-blue-600">Lorem Ipsum</span> {heading}
          </h4>
          <p className="text-gray-600 font-normal text-[16px] leading-8">
            {description}
          </p>
        </div>

   
        <div className="flex justify-center 2xl:w-[30%] xl:w-[40%] lg:w-[50%] md:w-[48%]">
          <img
            src={img}
            alt="feature"
            className="sm:max-w-xl z-1 lg:max-w-md md:max-w-sm max-w-sm 2xl:max-w-2xl xl:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
