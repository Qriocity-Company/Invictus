import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get the current route location

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isRouteActive = (path) => {
    // Check if the current route matches the given path
    return location.pathname === path ? "font-bold text-[#05CF91]" : "";
  };

  return (
    <div className=" flex flex-row justify-between h-[66px] w-full items-center px-16 md:px-[48px] fixed top-0 max-w-[1600px] md:text-[12px] lg:text-[16px] z-20  backdrop-blur-[0.5rem]">
      <Link to="/">
        <img src={logo} className="mt-8" />
      </Link>
      <div className="hidden md:flex flex-row gap-6  ml-auto text-white font-Poppins">
        <Link to="/" className={isRouteActive("/")}>
          Home
        </Link>
        <Link to="/about" className={isRouteActive("/about")}>
          About Us
        </Link>
        <Link to="/services" className={isRouteActive("/services")}>
          Our Services
        </Link>
        <Link to="/contact" className={isRouteActive("/contact")}>
          Contact Us
        </Link>
      </div>
      <div className="md:hidden flex items-center ml-auto">
        {showMenu ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className=" font-Poppins md:hidden fixed top-0 left-0 w-[85vw] h-[100vh]  backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-end pr-12  bg-[#06E19D] text-black z-[50] font-semibold text-[24px] ">
          <HiX className=" text-2xl cursor-pointer " onClick={toggleMenu} />
          <Link to="/" className={isRouteActive("/")} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className={isRouteActive("/about")} onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/portfolio" className={isRouteActive("/portfolio")} onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link to="/services" className={isRouteActive("/services")} onClick={toggleMenu}>
            Our Services
          </Link>
          <Link to="/contact" className={isRouteActive("/contact")} onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
