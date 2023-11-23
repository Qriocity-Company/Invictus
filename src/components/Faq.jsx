import React, { useState, useRef } from "react";
import robo from "../assets/robo.gif";

const faqs = [
  {
    id: 1,
    header: " What sets your branding services apart from competitors?",
    text: `Our brand enhancement approach goes beyond traditional design. We focus on crafting a strategic brand narrative, consistent visual directives, and provide tools that resonate with your target audience. This holistic approach ensures your brand not only looks good but also communicates its core values effectively.`,
  },
  {
    id: 2,
    header:
      "How do you ensure that the digital marketing strategies you employ will be effective for my business?",
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
  },
  {
    id: 3,
    header:
      "I'm new to digital marketing. How do you simplify the process for newcomers?",
    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`,
  },
  {
    id: 4,
    header:
      "Can you integrate third-party tools or platforms into the websites and apps you develop?",
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
  },
  {
    id: 5,
    header:
      "Do you offer post-development support for websites and applications?",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore voluptatibus laboriosam aperiam nemo vero maxime eligendi necessitatibus mollitia, at iste, alias nostrum debitis reiciendis, totam accusantium repudiandae autem nam.`,
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="card border-b-2 border-white mb-2 overflow-hidden p-2  md:w-full">
      <div className="header">
        <div
          className={`flex items-center justify-start text-lg ${
            active === id ? "active" : ""
          }`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="title py-4 flex-1 text-white  text-lg font-semibold leading-[120%] ">
            {header}
          </h5>
          {active === id ? <span>🗙</span> : <span>+</span>}
        </div>
      </div>
      <div
        ref={contentEl}
        className={`${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="accordion-body ">
          <p className="mb-0 pt-4">{text}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mx-4 ">
      <h1 className="font-bold text-[48px] relative my-12">
        FAQs
        <hr className="border-[3px] border-[#06E19D] w-[80%] mb-10 rounded-full  absolute  left-4 sliding-hr"  />
      </h1>
      <div className="flex flex-row gap-8 mt-10 ">
        <img
          src={robo}
          alt=""
          className="flex-1 w-[750px] h-[591px] shrink-0 hidden lg:flex"
        />

        <div className="flex-1 w-[350px] md:w-[550px]">
          <h1 className=" w-[300px] md:w-[567px] text-white text-[20px] md:text-[32px] not-italic font-bold leading-[120%]">
            Frequently Asked Questions
          </h1>
          <hr className=" border-2 border-white mt-4" />
          {faqs.map((faq, index) => {
            return (
              <AccordionItem
                key={index}
                active={active}
                handleToggle={handleToggle}
                faq={faq}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
