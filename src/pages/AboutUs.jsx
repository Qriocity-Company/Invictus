import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import ic1 from "../assets/icon1.svg";
import ic2 from "../assets/icon2.svg";
import ic3 from "../assets/icon3.svg";
import ic4 from "../assets/icon4.svg";
import abtImg1 from "../assets/about-img1.png";
import abtImg2 from "../assets/about-img2.png";
import Value from "../components/Value";

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-20 my-20 w-[350px] md:w-[750px] lg:w-[1600px] justify-center  items-center font-Poppins">
      <div className="relative lg:w-[1600px] lg:h-[1000px] md:w-[750px] w-[350px] md:h-[750px] h-[500px] shrink-0 bg-white justify-start gap-10 items-center flex ">
        <div className="flex flex-col gap-5 lg:ml-20 ml-5">
          <span className=" justify-center text-[#019267] text-xl italic font-medium leading-[34px]">
            Who are we.
          </span>
          <h3 className=" md:w-[400px] w-[300px] lg:w-[666px] lg:h-[202px] justify-center shrink-0 relative text-black lg:text-5xl md:text-3xl text-xl  not-italic font-bold leading-[normal]">
            We’re a digital agency based in Valencia.
            <hr className="border-[3px] border-[#06E19D] w-[20%] mb-10 rounded-full  absolute  md:left-56 left-14" />
          </h3>
          <p className="md:w-[400px] w-[300px]  lg:w-[603px] h-[164px] flex-col justify-center shrink-0 text-black  text-base md:text-2xl not-italic font-medium leading-[normal]">
            Invictus Global Tech crafts tailored digital strategies, fusing
            innovative moment marketing with impactful growth consulting to
            align with and amplify your brand's vision.
          </p>
        </div>

        <div className="relative hidden md:flex">
          <img src={about1} alt="" className=" md:w-[200px] lg:w-[400px]"/>
          <img src={about2} alt="" className="absolute top-[50%] left-[50%] animated-img md:w-[200px] lg:w-[400px] " />
        </div>

        <div className=" flex flex-col w-[300px] md:w-[650px] lg:w-[1280px] mx-24  h-[387px] shrink-0 rounded-[25px] absolute -left-[20%]  md:-left-[6%] lg:left-[2%] top-[95%]  bg-gradient-to-r from-[#019267] to-[#06E19D] z-10 justify-center items-center">
          <span className="text-[#F1FFFB] text-sm md:text-lg lg:text-xl italic font-semibold leading-[34px]">
            Our vision
          </span>
          <h1 className="flex w-[280px] md:w-[600px] lg:w-[1225px] h-[88px] flex-col justify-center shrink-0 text-white text-center text-xl md:text-2xl lg:text-5xl not-italic font-bold leading-[normal]">
            We aspire do to what others cannot.
          </h1>
          <p className="flex w-[250px] md:w-[550px] lg:w-[885px] h-[164px] flex-col justify-center shrink-0 text-white text-center text-sm md:text-base lg:text-2xl not-italic font-medium leading-[normal]">
            Invictus Global Tech crafts tailored digital strategies, fusing
            innovative moment marketing with impactful growth consulting to
            align with and amplify your brand's vision.
          </p>
        </div>
      </div>

      <div className="mt-[400px] flex flex-col items-center justify-center ">
        <h1 className="font-bold text-[48px] relative my-12">
          What we offer
          <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-52 sliding-hr" />
        </h1>

        <div className="flex justify-between items-start w-full gap-40 ">
          <div className="flex flex-col gap-16">
            <section className="animated-service flex flex-col items-start justify-center gap-3">
              <img src={ic1} alt="" />
              <p className="flex w-[232px] h-[45px] flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                Self paced courses
              </p>
              <span
                className="flex w-[325px] h-[63px] flex-col justify-center shrink-0
                text-white text-base not-italic font-normal leading-[34px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </section>

            <section className="animated-service1 flex flex-col items-start justify-center gap-4">
              <img src={ic2} alt="" />
              <p className="flex w-[232px] h-[45px] flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                Self paced courses
              </p>
              <span
                className="flex w-[325px] h-[63px] flex-col justify-center shrink-0
                text-white text-base not-italic font-normal leading-[34px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </section>

            <section className="animated-service2 flex flex-col items-start justify-center gap-4">
              <img src={ic3} alt="" />
              <p className="flex w-[232px] h-[45px] flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                Self paced courses
              </p>
              <span
                className="flex w-[325px] h-[63px] flex-col justify-center shrink-0
                text-white text-base not-italic font-normal leading-[34px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </section>

            <section className="animated-service3 flex flex-col items-start justify-center gap-4">
              <img src={ic4} alt="" />
              <p className="flex w-[232px] h-[45px] flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                Self paced courses
              </p>
              <span
                className="flex w-[325px] h-[63px] flex-col justify-center shrink-0
                text-white text-base not-italic font-normal leading-[34px]"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </section>
          </div>
          <div className="relative mt-40 lg:flex hidden">
            <img src={abtImg1} alt="" />
            <img
              src={abtImg2}
              alt=""
              className="absolute top-[50%] left-[50%] animated-img "
            />
          </div>
        </div>
      </div>
      <Value />
    </div>
  );
};

export default AboutUs;
