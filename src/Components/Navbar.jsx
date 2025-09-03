import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md font-[Poppins] px-8 sm:px-16 py-6 flex justify-between items-center">
      
      <div className="text-[#1090CB] font-extrabold text-3xl sm:text-4xl tracking-wide">
        LOGO
      </div>

      <ul className="flex gap-8 lg:gap-12 items-center text-lg sm:text-xl font-medium">
        <li>
          <a href="#home" className="text-black hover:text-[#1090CB]">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-black hover:text-[#1090CB]">
            About us
          </a>
        </li>
        <li>
          <a href="#services" className="text-black hover:text-[#1090CB]">
            Services
          </a>
        </li>
        <li>
          <a href="#blog" className="text-black hover:text-[#1090CB]">
            Blog
          </a>
        </li>
        <li>
          <button className="bg-[#1090CB] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#0c75a5] transition text-lg sm:text-xl font-semibold">
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
