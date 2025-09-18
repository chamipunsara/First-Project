import React from "react";

import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import FeatureSection from "../components/FeatureSection";
import CardsSection from "../components/CardsSection";
import CompaniesSection from "../components/CompaniesSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";

import secondpageImage from "../assets/17. Recent Activities 1.png";
import thirdpageImage from "../assets/website-mockup-png-10 1.png";
import fourthpageImage from "../assets/focus-parallax-hero_1920x1000_ar-vr_0917_layer1-guy 1.png";
import secondpageIconImage from "../assets/happy 1.png";

const Homepage = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <ServicesSection />
      </div>
      <div id="services">
        <SectionHeader />
      </div>

      <FeatureSection
        img={secondpageImage}
        icon={secondpageIconImage}
        title="Lorem Ipsum is simply dummy text"
        subtitle="Lorem Ipsum is simply dummy text"
        heading="is simply dummy text of the printing."
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS."
        bgCircle="w-[250px] h-[250px] md:w-[505px] md:h-[505px] top-[10%] left-[95%] rounded-full blur-[10px] bg-[radial-gradient(#DED9FF_0%,_rgba(255,255,255,0)_100%)] z-20 hidden sm:block"
        iconBg="bg-[#08D3BB]"
      />

      <FeatureSection
        img={thirdpageImage}
        icon={secondpageIconImage}
        title="Lorem Ipsum is simply dummy text"
        subtitle="Lorem Ipsum is simply dummy text"
        heading="is simply dummy text of the printing."
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS."
        iconBg="bg-[#1090CB]"
        reverse
        bgCircle="w-[200px] h-[250px] md:w-[400px] md:h-[500px] top-[5px] right-[70%] rounded-full blur-[50px] z-0 bg-[radial-gradient(72.77%_72.77%_at_50%_50%,#F3FFD9_0%,rgba(255,255,255,0)_100%)] hidden sm:block"
      />

      <FeatureSection
        img={fourthpageImage}
        icon={secondpageIconImage}
        title="Lorem Ipsum is simply dummy text"
        subtitle="Lorem Ipsum is simply dummy text"
        heading="is simply dummy text of the printing."
        description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & IOS."
        iconBg="bg-[#9208D3]"
        bgCircle="w-[400px] h-[450px] md:w-[400px] md:h-[400px] sm:top-[48%] sm:left-[35%] md:top-[16%] md:left-[60%] rounded-full blur-[10px] bg-[radial-gradient(circle_at_center,#DED9FF_10%,_rgba(255,255,255,0)_100%)] hidden sm:block 2xl:top-[16%] 2xl:left-[70%]"
      />

      <div id="blog">
        <CardsSection />
      </div>
      <CompaniesSection />
      <NewsletterSection />
      <Footer id="contact" />
    </>
  );
};

export default Homepage;
