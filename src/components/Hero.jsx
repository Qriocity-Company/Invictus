import React from "react";
import hero from "../assets/header.gif";
export const Hero = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col gap-2 font-Poppins text-white  w-[350px] md:w-[500px] lg:w-[666px]">
        <h1 className="font-bold text-[48px] ">
          Empowering your brand's journey, from inception to scale.
        </h1>
        <hr className="border-4 border-[#06E19D] w-[20%] mb-10 rounded-full sliding-hr" />
        <p className="text-[24px] font-[500]">
          Invictus Global Tech crafts tailored digital strategies, fusing
          innovative moment marketing with impactful growth consulting to align
          with and amplify your brand's vision.
        </p>
        <a href="/contact">
          {" "}
          <button className="text-[#00251A]  self-start mt-10 px-6 py-3 bg-gradient-to-r from-[#019267] to-[#06E19D] rounded-lg font-semibold ">
            Let's Connect
          </button>
        </a>
      </div>
      <div>
        <img
          src={hero}
          alt=""
          className="hidden lg:block lg:w-[400px] lg:h-[400px]"
        />
      </div>
    </div>
  );
};
