import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.gif";
const OurServices = () => {
  return (
    <div className="flex flex-col gap-20 my-20 w-[340px] md:w-[650px] lg:w-[1440px]">
      <div className="animated-service w-[280px] md:w-[600px] lg:w-[1087px]  h-[400px]  lg:h-[550px] bg-white shrink-0 rounded-l-[50px] flex justify-between  md:pl-2 lg:pl-10 py-5 self-end lg:mr-10">
        <div className="flex flex-col gap-4 justify-center ml-5">
          <span className="text-[#019267] text-[20px] md:text-2xl lg:text-4xl italic font-light leading-[normal] flex items-baseline">
            <h1 className="text-[#019267] text-[28px] md:text-[32px] lg:text-[50px] font-bold leading-[normal]">
              W
            </h1>
            ebsite & App development
          </span>

          <p className=" text-black md:text-lg lg:text-xl not-italic font-medium lg:leading-[34px] w-[250px] md:w-full">
            We build intuitive and engaging web and mobile applications that
            deliver exceptional user experiences and drive results.
          </p>
          <ul className="lg:w-[339px] lg:h-[203px] shrink-0 text-black text-[14px] lg:text-base not-italic font-normal leading-4 md:leading-5 lg:leading-[34px]">
            <li>• Website Design & Development</li>
            <li>• Shopify Store Development </li>
            <li>• Mobile & Web Application Development</li>
            <li>• oftware Development</li>
            <li>• Martech Integrations </li>
            <li>• Web Maintenance & Support</li>
          </ul>
        </div>
        <img src={service1} alt="" className="hidden lg:flex" />
      </div>

      <div className="animated-service1 w-[280px] md:w-[600px] lg:w-[1087px]  h-[400px]  lg:h-[550px] bg-white gap-20 rounded-r-[50px] flex justify-between  pl-3 lg:pl-10 py-5 ml-10">
        <div className="hidden lg:absolute w-[300px] h-[400px] rotate-[-25deg] shrink-0 rounded-[25px] bg-[#019267] mt-5 ml-7"></div>
        <img src={service2} alt="" className="relative lg:flex hidden" />
        <div className="flex flex-col gap-4 justify-center ml-5">
          <span className="text-[#019267] text-[20px] md:text-2xl lg:text-4xl italic font-light leading-[normal] flex items-baseline">
            <h1 className="text-[#019267] text-[28px] md:text-[32px] lg:text-[50px] font-bold leading-[normal]">
              B
            </h1>
            randing
          </span>

          <p className=" text-black md:text-lg lg:text-xl not-italic font-medium lg:leading-[34px] w-[250px] md:w-full">
            We develop compelling brand identities that capture the essence of
            your business and resonate with your target audience.
          </p>
          <ul className="lg:w-[339px] lg:h-[203px] shrink-0 text-black text-[14px] lg:text-base not-italic font-normal leading-4 md:leading-5 lg:leading-[34px]">
            <li> •Brand Strategy & Messaging</li>
            <li>• Logo Design</li>
            <li>• Visual Identity & Brand Guidelines</li>
            <li>• Brand Identity Collaterals </li>
            <li>• Promotional & Explainer Videos </li>
            <li>• Photography & Videography</li>
          </ul>
        </div>
      </div>

      <div className="animated-service w-[280px] md:w-[600px] lg:w-[1087px]  h-[500px]  lg:h-[600px] bg-white shrink-0 rounded-l-[50px] flex justify-between  md:pl-2 lg:pl-10 py-5 self-end lg:mr-10 ">
        <div className="flex flex-col gap-4 justify-start ml-5">
          <span className="text-[#019267] text-[20px] md:text-2xl lg:text-4xl italic font-light leading-[normal] flex items-baseline">
            <h1 className="text-[#019267] text-[28px] md:text-[32px] lg:text-[50px] font-bold leading-[normal]">
              D
            </h1>
            igital Marketing
          </span>
          <p className=" text-black md:text-lg lg:text-xl not-italic font-medium lg:leading-[34px] w-[250px] md:w-full">
            We leverage the power of digital marketing to reach your target
            audience and drive conversions. We develop data-driven strategies
            that maximize your marketing ROI.
          </p>
          <ul className="lg:w-[339px] lg:h-[203px] shrink-0 text-black text-[14px] lg:text-base not-italic font-normal leading-4 md:leading-5 lg:leading-[34px]">
            <li>• Social Media and Performance  Marketing</li>
            <li>
              • Search Engine Optimization (SEO) SMO SOCIAL MEDIA OPTIMIZATION 
              SEM - SEARCH ENGINE MARKETING {" "}
            </li>
            <li>• Influencer Marketing </li>
            <li>• Marketing Automation</li>
            <li>• Email MarketingContent Strategy  & Marketing </li>
            <li>• Affiliate Marketing</li>
            <li> • Marketplaces Promotion </li>
            <li>• Sales Funnel Development </li>
            <li>• Analytics & Data Insight</li>
          </ul>
        </div>
        <img src={service3} alt="" className="hidden lg:flex  w-[500px] " />
      </div>
      <div className="animated-service1 w-[280px] md:w-[600px] lg:w-[1087px]  h-[400px]  lg:h-[550px] bg-white gap-20 rounded-r-[50px] flex justify-between  pl-3 lg:pl-10 py-5 ml-10">
        <img src={service4} alt="" className=" lg:flex hidden" />
        <div className="flex flex-col gap-4 justify-center ml-5">
          <span className="text-[#019267] text-[20px] md:text-2xl lg:text-4xl italic font-light leading-[normal] flex items-baseline">
            <h1 className="text-[#019267] text-[28px] md:text-[32px] lg:text-[50px] font-bold leading-[normal]">
              B
            </h1>
            2B Marketing
          </span>

          <p className=" text-black md:text-lg lg:text-xl not-italic font-medium lg:leading-[34px] w-[250px] md:w-full">
            We understand the unique challenges of B2B marketing and tailor our
            strategies accordingly.
          </p>
          <ul className="lg:w-[339px] lg:h-[203px] shrink-0 text-black text-[14px] lg:text-base not-italic font-normal leading-4 md:leading-5 lg:leading-[34px]">
            <li> • LinkedIn Social Selling</li>
            <li>• Lead Generation</li>
            <li>• Content Marketing & Amplification</li>
            <li>• Account Based Marketing</li>
            <li>• Email Marketing </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
