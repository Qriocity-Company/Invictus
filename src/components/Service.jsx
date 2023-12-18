import React from "react";
import * as Ai from "react-icons/ai";
import ui from "../assets/ui-ux.gif";
import brand from "../assets/brand.gif";
import digita from "../assets/digital.gif";
import b2b from "../assets/b2b.gif";
import { Link } from "react-router-dom";
import '../styles/service.css'

const Service = () => {
  return (
    <div className=" mt-20 ">

     

      <div className="flex flex-col justify-center  md:w-[750px] w-[350px] lg:w-full font-Poppins gap-20">
        <h1 className="font-bold text-[48px] relative mt-28 my-2 w-fit absolute left-[50%] translate-x-[-50%]">
          Our Services
          <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-48 sliding-hr" />
        </h1>

        <div className=" animated-service flex flex-row justify-between py-12 px-2 md:px-12 lg:px-24 lg:pl-48 w-[330px] md:w-[700px] lg:w-[1400px] h-[251px] shrink-0 bg-[#F4FFFB] rounded-r-full">
          <div className="flex flex-col gap-2 ">
            <span className="w-[347px] h-[34px] shrink-0 text-[#019267] text-lg md:text-2xl not-italic font-medium leading-[normal]">
              Website & App development
            </span>
            <p className=" w-[300px] md:w-[605px] h-[71px] shrink-0 text-black text-sm md:text-xl  not-italic font-normal md:leading-[34px]">
              We build intuitive and engaging web and mobile applications that
              deliver exceptional user experiences and drive results.
            </p>
            <button className="flex  text-black py-2 mt-4 items-center gap-2 hover:cursor-pointer hover:text-[#019267]">
              <Link to="/services" className="flex gap-2 items-center">
                {" "}
                Learn More <Ai.AiOutlineArrowRight />
              </Link>
            </button>
          </div>
          <img
            src={ui}
            alt=""
            className="w-[253px] h-[182px] shrink-0 hidden md:flex"
          />
        </div>

        <div className="animated-service1  flex flex-row justify-between  px-2 md:px-12 lg:px-24 lg:pl-48 w-[330px] md:w-[700px] lg:w-[1400px] h-[251px] shrink-0 bg-[#F4FFFB] rounded-r-full">
          <div className="flex flex-col gap-2 mt-12">
            <span className="w-[347px] h-[34px] shrink-0 text-[#019267] text-lg md:text-2xl not-italic font-medium leading-[normal]">
              Branding
            </span>
            <p className="w-[300px] md:w-[605px] h-[71px] shrink-0 text-black text-sm md:text-xl  not-italic font-normal md:leading-[34px]">
              We develop compelling brand identities that capture the essence of
              your business and resonate with your target audience.
            </p>
            <button className="flex  text-black py-2 mt-4 items-center gap-2 hover:cursor-pointer hover:text-[#019267]">
              <Link to="/services" className="flex gap-2 items-center">
                {" "}
                Learn More <Ai.AiOutlineArrowRight />
              </Link>
            </button>
          </div>
          <img
            src={brand}
            alt=""
            className="w-[250px] h-[250px] shrink-0 hidden md:flex"
          />
        </div>

        <div className="animated-service2  flex flex-row justify-between px-2 md:px-12 lg:px-24 lg:pl-48 w-[330px] md:w-[700px] lg:w-[1400px] h-[251px] shrink-0 bg-[#F4FFFB] rounded-r-full">
          <div className="flex flex-col gap-2 mt-12">
            <span className="w-[347px] h-[34px] shrink-0 text-[#019267] text-lg md:text-2xl not-italic font-medium leading-[normal]">
              Digital Marketing
            </span>
            <p className="w-[300px] md:w-[605px] h-[71px] shrink-0 text-black text-sm md:text-xl  not-italic font-normal md:leading-[34px]">
              We leverage the power of digital marketing to reach your target
              audience and drive conversions. 
            </p>
            <button className="flex  text-black py-2 items-center gap-2 hover:cursor-pointer hover:text-[#019267]">
              <Link to="/services" className="flex gap-2 ">
                {" "}
                Learn More <Ai.AiOutlineArrowRight />
              </Link>
            </button>
          </div>
          <img
            src={digita}
            alt=""
            className="w-[252px] h-[252px] shrink-0 hidden md:flex"
          />
        </div>

        <div className="animated-service3  flex flex-row justify-between px-2 md:px-12 lg:px-24 lg:pl-48 w-[330px] md:w-[700px] lg:w-[1400px] h-[251px] shrink-0 bg-[#F4FFFB] rounded-r-full">
          <div className="flex flex-col gap-2 mt-12 ">
            <span className="w-[347px] h-[34px] shrink-0 text-[#019267] text-lg md:text-2xl not-italic font-medium leading-[normal]">
              B2B Marketing
            </span>
            <p className="w-[300px] md:w-[605px]  h-[71px] shrink-0 text-black text-sm md:text-xl  not-italic font-normal md:leading-[34px]">
              We understand the unique challenges of B2B marketing and tailor
              our strategies accordingly.
            </p>
            <button className="flex  text-black py-2 items-center gap-2 hover:cursor-pointer hover:text-[#019267]">
              <Link to="/services" className="flex gap-2 ">
                {" "}
                Learn More <Ai.AiOutlineArrowRight />
              </Link>
            </button>
          </div>
          <img
            src={b2b}
            alt=""
            className="w-[247px] h-[247px] shrink-0 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
