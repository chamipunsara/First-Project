import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = ({ logo, links, button }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(links[0]?.href.replace("#", ""));
  const navItems = [...links];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white font-[Poppins] border-b border-[#cecece] z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-[1536px] mx-auto">
        <div className="text-[#1090CB] font-bold text-[29px]">{logo}</div>

       
        <ul className="hidden sm:flex gap-8 items-center font-normal text-[16px]">
          {navItems.map((link, i) => {
            const section = link.href.replace("#", "");
            const isActive = activeLink === section;
            return (
              <li key={i} className="relative">
                <Link
                  to={section}
                  smooth
                  duration={500}
                  spy
                  offset={-50}
                  onSetActive={() => setActiveLink(section)}
                  className={`cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "text-[#1090CB] font-medium"
                      : "text-black hover:text-[#1090CB]"
                  }`}
                >
                  {link.label}
                </Link>
                {isActive && (
                  <span className="absolute -top-2 left-[0px] transform -translate-x-1/2 w-2 h-2 bg-[#08D3BB] rounded-full"></span>
                )}
              </li>
            );
          })}

          <li className="relative">
            <Link
              to={button.href.replace("#", "")}
              smooth
              duration={500}
              offset={-50}
              spy={false}
              className={`px-4 py-1.5 rounded-[4px] text-[13px] font-normal bg-[#1090CB] text-white hover:bg-[#0C75A5] transition cursor-pointer ${
                activeLink === button.href.replace("#", "") ? "font-medium" : ""
              }`}
              onClick={() => setActiveLink(button.href.replace("#", ""))}
            >
              {button.label}
            </Link>
            {activeLink === button.href.replace("#", "") && (
              <span className="absolute -top-3 left-[0px] transform -translate-x-1/2 w-2 h-2 bg-[#08D3BB] rounded-full"></span>
            )}
          </li>
        </ul>

     
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-black focus:outline-none"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
{isOpen && (
  <>
 
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
      onClick={() => setIsOpen(false)}
    ></div>

    <div className="sm:hidden fixed top-0 left-0 w-full z-50">
   
      <div className="flex justify-end p-4 bg-white border-b border-[#cecece]">
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl text-black focus:outline-none"
        >
          <HiOutlineX />
        </button>
      </div>

      <ul className="flex flex-col items-center gap-4 py-4 font-normal text-[16px] bg-white">
        {navItems.map((link, i) => {
          const section = link.href.replace("#", "");
          const isActive = activeLink === section;
          return (
            <li key={i} className="relative">
              <Link
                to={section}
                smooth
                duration={500}
                spy
                offset={-50}
                onClick={() => {
                  setActiveLink(section);
                  setIsOpen(false);
                }}
                className={`cursor-pointer transition-colors duration-300 ${
                  isActive
                    ? "text-[#1090CB] font-medium"
                    : "text-black hover:text-[#1090CB]"
                }`}
              >
                {link.label}
              </Link>
              {isActive && (
                <span className="absolute -top-1 left-[0px] transform -translate-x-1/2 w-2 h-2 bg-[#08D3BB] rounded-full"></span>
              )}
            </li>
          );
        })}

        <li className="relative">
          <Link
            to={button.href.replace("#", "")}
            smooth
            duration={500}
            offset={-50}
            className={`px-4 py-1.5 rounded-[4px] text-[13px] font-normal bg-[#1090CB] text-white hover:bg-[#0C75A5] transition cursor-pointer ${
              activeLink === button.href.replace("#", "") ? "font-medium" : ""
            }`}
            onClick={() => {
              setActiveLink(button.href.replace("#", ""));
              setIsOpen(false);
            }}
          >
            {button.label}
          </Link>
          {activeLink === button.href.replace("#", "") && (
            <span className="absolute -top-2 left-[-5px] transform -translate-x-1/2 w-2 h-2 bg-[#08D3BB] rounded-full"></span>
          )}
        </li>
      </ul>
    </div>
  </>
)}

    </nav>
  );
};

export default Navbar;
