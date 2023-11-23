import React from "react";
import { Hero } from "../components/Hero";
import Service from "../components/Service";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
const Home = () => {
  return (
    <div className="mt-20 md:w-[750px] w-[350px] lg:w-[1600px]">
      <Hero />
      <Service />
      <Process />
      <Testimonials/>
      <Faq/>
    </div>
  );
};

export default Home;
