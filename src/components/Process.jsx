import React from "react";
import brani from "../assets/brain.svg";
import concept from "../assets/concept.svg";
import handover from "../assets/handover.svg";
import implement from "../assets/implement.svg";
const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center font-Poppins">
      <h1 className="font-bold text-[48px] relative my-12">
        Our Process
        <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-48 sliding-hr" />
      </h1>

      <div className="animated-process border-b-2 border-white flex justify-between items-center w-full lg:w-[65%] my-8 py-4">
        <h1 className=" hidden md:flex  flex-col justify-center shrink-0 text-[#06E19D] lg:text-9xl md:text-7xl  not-italic font-semibold leading-[normal]">
          1
        </h1>
        <div className="flex flex-col gap-2 items-center  ">
          <img src={brani} alt=""  className="w-[80px] h-[80px] md:w-full md:h-full" />
          <h2 className="h-11 shrink-0 flex justify-center text-white lg:text-[32px] text-[18px] md:text-[28px] not-italic font-semibold leading-[normal]">
            Research
          </h2>
        </div>
        <p className="lg:w-[381px] h-[71px] w-[200px] md:w-[280px]  shrink-0 text-white  lg:text-2xl md:text-[18px] text-[12px] not-italic font-normal leading-[38px]">
          Analyzing your brand and market to craft a tailored online strategy.
        </p>
      </div>

      <div className="animated-process1 border-b-2 border-white flex justify-between items-center w-full lg:w-[65%] my-8 py-4">
        <h1 className="hidden md:flex w-[47px] h-[157px] flex-col justify-center shrink-0 text-[#06E19D]  lg:text-9xl md:text-7xl text-3xl  not-italic font-semibold leading-[normal]">
          2
        </h1>
        <div className="flex flex-col gap-2 items-center  ">
          <img src={concept} alt=""  className="w-[80px] h-[80px] md:w-full md:h-full" />
          <h2 className="h-11 shrink-0 flex justify-center text-white lg:text-[32px] text-[18px] md:text-[28px] not-italic font-semibold leading-[normal]">
            Concept
          </h2>
        </div>
        <p className="lg:w-[381px] h-[71px] w-[200px] md:w-[280px]  shrink-0 text-white  lg:text-2xl md:text-[18px] text-[12px] not-italic font-normal leading-[38px]">
          Designing unique branding, campaigns, and platforms to set you apart.
        </p>
      </div>

      <div className="animated-process2 border-b-2 border-white flex justify-between items-center w-full lg:w-[65%] my-8 py-4">
        <h1 className="hidden md:flex w-[47px] h-[157px] flex-col justify-center shrink-0 text-[#06E19D]  lg:text-9xl md:text-7xl text-3xl  not-italic font-semibold leading-[normal]">
          3
        </h1>
        <div className="flex flex-col gap-2 items-center  ">
          <img src={implement} alt=""  className="w-[80px] h-[80px] md:w-full md:h-full" />
          <h2 className="h-11 shrink-0 flex justify-center text-white lg:text-[32px] text-[18px] md:text-[28px] not-italic font-semibold leading-[normal]">
            Implement
          </h2>
        </div>
        <p className="lg:w-[381px]  w-[200px] md:w-[280px]  h-[71px] shrink-0 text-white  lg:text-2xl md:text-[18px] text-[12px] not-italic font-normal leading-[38px]">
          Executing data-driven solutions for maximum online impact and
          conversions.
        </p>
      </div>

      <div className=" animated-process3 border-b-2 border-white flex justify-between items-center w-full lg:w-[65%] my-8 py-4">
        <h1 className="hidden md:flex w-[47px] h-[157px] flex-col justify-center shrink-0 text-[#06E19D]  lg:text-9xl md:text-7xl text-3xl  not-italic font-semibold leading-[normal]">
          4
        </h1>
        <div className="flex flex-col gap-2 items-center  ">
          <img src={handover} alt="" className="w-[80px] h-[80px] md:w-full md:h-full" />
          <h2 className="h-11 shrink-0 flex justify-center text-white lg:text-[32px] text-[18px] md:text-[28px] not-italic font-semibold leading-[normal]">
            Handover
          </h2>
        </div>
        <p className="lg:w-[381px] h-[71px] w-[200px] md:w-[280px] shrink-0 text-white lg:text-2xl md:text-[18px] text-[12px] not-italic font-normal leading-[38px]">
          Delivering optimized digital assets with training for your continued
          success.
        </p>
      </div>
    </div>
  );
};

export default Process;
