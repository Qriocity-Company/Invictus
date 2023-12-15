import React from "react";
import footer from "../assets/footer.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";

import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  
  console.log(currentRoute)
  return (
    <>
     <footer className="flex flex-col">
      { currentRoute==="/contact"?'':<div className="lg:flex hidden relative md:w-[750px] lg:w-[1600px] py-20 shrink-0 bg-white  items-center justify-center ">
        <div className="flex flex-col gap-4 font-Poppins ml-40">
          <h1 className="flex w-[665.076px] h-[59.701px] flex-col   shrink-0 text-[#00251A] text-5xl not-italic font-bold leading-[normal]">
            Have a project in mind ?
          </h1>
          <p className="flex w-[344.521px] h-[59.701px] flex-col justify-center shrink-0 text-[#00251A] text-[40px] italic font-semibold leading-[normal]">
            Let's get to work.
          </p>  <Link to="/contact">
          <button className="text-[#00251A]  self-start mt-10 px-6 py-3 bg-gradient-to-r from-[#019267] to-[#06E19D] rounded-lg font-semibold ">
            Let's Connect
          </button></Link>
        </div>
        {/* <img src={footer} alt="" className="absolute right-0 bottom-0" /> */}
      </div>}
      <div className="flex lg:flex-row flex-col gap-[1rem] lg:gap-0 justify-between items-center px-16 mb-8 pt-20 pb-16">
        <img src={logo} alt="" className=" object-cover" />

        <div className="hidden lg:flex flex-row gap-20 justify-between items-center text-white font-Poppins">
          <Link to="/">Home</Link>

          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="flex gap-8 justify-between items-center text-[24px]">
          <Fa.FaFacebookF />
          <a href="https://www.linkedin.com/company/invictus-global-tech/"><Fa.FaLinkedin /></a>
          <a href="https://www.instagram.com/invictusglobaltech/"><Fa.FaInstagram /></a>
        </div>
      </div>
    </footer>
    <p className="py-5">© 2023 Invictus Global Tech | All right reserved. </p>
    </>
   
  );
};

export default Footer;
