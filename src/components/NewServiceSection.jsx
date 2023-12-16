import React , {useState , useEffect} from "react";

import service1 from "../assets/hero/service1.png";
import service2 from "../assets/hero/service2.png";
import service3 from "../assets/hero/service3.png";
import service4 from "../assets/hero/service4.png";

const NewServiceSection = () => {
    const [photos, setPhotos] = useState([service1 , service2 , service3 , service4]);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 2000);
    
        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
      }, [photos]);

  return (
    <div className="w-5/6 mx-auto mt-20">
     <h1 className="font-bold text-[48px] relative mt-28 my-2 w-fit  left-[50%] translate-x-[-50%] md:mb-20 mb-10">
          Our Services
          <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-48 sliding-hr" />
        </h1>
      <div className="flex  md:flex-row flex-col-reverse  lg:gap-20 md:gap-10 gap-5    justify-center items-center ">
        {currentPhotoIndex === 0 && <div className="max-w-lg ">
          <h1 className="text-[30px] font-[700]">Digital Marketing</h1>
          <ul className="list-disc" >
            <li>Social Media Marketing</li>
            <li>Performance Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Influencer Marketing</li>
            <li>Marketing Automation</li>
            <li>Email MarketingContent Strategy  & Marketing</li>
            <li>Affiliate Marketing</li>
            <li>Marketplaces Promotion</li>
            <li>Sales Funnel Development</li>
            <li>Analytics & Data Insight</li>
          </ul>
        </div>}
        {currentPhotoIndex === 1 &&    <div className="max-w-lg ">
          <h1 className="text-[30px] font-[700]">Branding & Advertising</h1>
          <ul className="list-disc" >
            <li>Brand Strategy & Messaging</li>
            <li>Logo Design</li>
            <li>Visual Identity & Brand Guidelines</li>
            <li>Brand Identity Collaterals</li>
            <li>Promotional & Explainer Videos</li>
            <li>Photography & Videography</li>
           
          </ul>
        </div>}
        {currentPhotoIndex === 2 &&   <div className="max-w-lg ">
          <h1 className="text-[30px] font-[700]">Website & App development</h1>
          <ul className="list-disc" >
            <li>Website Design & Development</li>
            <li>Shopify Store Development</li>
            <li>Mobile & Web Application Development</li>
            <li>Software Development</li>
            <li>Martech Integrations</li>
            <li>Web Maintenance & Support</li>
           
          </ul>
        </div>}
        {currentPhotoIndex === 3 &&      <div className="max-w-lg ">
          <h1 className="text-[30px] font-[700]">B2B Marketing</h1>
          <ul className="list-disc" >
            <li>Social Media Marketing</li>
            <li>Performance Marketing</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Influencer Marketing</li>
            <li>Marketing Automation</li>
            <li>Email MarketingContent Strategy  & Marketing</li>
            <li>Affiliate Marketing</li>
            <li>Marketplaces Promotion</li>
            <li>Sales Funnel Development</li>
            <li>Analytics & Data Insight</li>
          </ul>
        </div>}
        <div className="max-w-lg ">
          <img src={photos[currentPhotoIndex]}  className="lg:w-full md:w-5/6 "/>
        </div>
      </div>
     
    
      </div>
      
    
  );
};

export default NewServiceSection;
