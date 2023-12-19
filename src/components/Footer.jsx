import React from "react";
import footer from "../assets/footer.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import * as Fa from "react-icons/fa";

import { useLocation } from 'react-router-dom';

import footerImg from  "../assets/hero/contimg.png";

const Footer = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  
  console.log(currentRoute)
  return (
    <>
     <footer className="flex flex-col  mt-20">
   
      { currentRoute==="/contact"?'':
      <div className="flex   md:w-[750px] lg:w-[1600px] py-20 shrink-0  md:h-[100vh]   " style={{backgroundImage : `url(${footerImg})`, backgroundSize : "cover", backgroundPosition : "bottom" }}>
        <div className="flex  flex-col items-start  gap-4 font-Poppins md:w-[60%] w-5/6 mx-auto p-10 m-10">
          <h1 className="font-[900] md:text-[60px] text-[32px]  text-white">
            Have a project in mind ?
          </h1>
          <p className="font-[500] md:text-[40px] text-[24px]  text-white">
            Let's get to work.
          </p>  <Link to="/contact">
          <button className="text-[#00251A]  self-start mt-10 px-6 py-3 bg-gradient-to-r from-[#019267] to-[#06E19D] rounded-lg font-semibold ">
            Let's Connect
          </button></Link>
        </div>
      
      </div>}



      <div className="w-5/6 mx-auto flex lg:flex-row flex-col gap-[1rem] lg:gap-0 justify-between items-center px-16 md:mt-0 mt-40 mb-8 pt-20 md:pb-16 pb-8">
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
