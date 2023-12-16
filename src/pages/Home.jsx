import React, { useEffect } from "react";
import { Hero } from "../components/Hero";
import Service from "../components/Service";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import NewHero from "../components/NewHero";
import NewServiceSection from "../components/NewServiceSection";
import ScrollMarque from "../components/ScrollMarque";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20 md:w-[750px] w-[350px] lg:w-[1600px]  ">
      {/* <Hero /> */}
      <NewHero />

      <div className="mt-[100vh]">
        <ScrollMarque/>
        <NewServiceSection />
        {/* <Service /> */}
        <Process />
        <Testimonials />
        <Faq />
      </div>
    </div>
  );
};

export default Home;
