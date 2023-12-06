import { React, useState } from "react";
import person from "../assets/person.svg";
import infi from "../assets/infi.svg";
import video from "../assets/video.svg";

const Value = () => {
  const [curr, setCurr] = useState(1);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[36px] md:text-[48px] relative my-12">
        What we value
        <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-52" />
      </h1>

      <div className="flex flex-col md:flex-row font-Poppins gap-10 lg:gap-40">
        <div className="flex  flex-col justify-center shrink-0 text-white md:text-[24px] text-[16px] lg:text-[32px] not-italic font-normal leading-[normal] gap-8">
          <h1
            className={`${
              curr == 1 ? "text-[#06E19D] border-b-2 border-[#06E19D]" : ""
            }`}
            onClick={() => setCurr(1)}
          >
            1 CUSTOMER SERVICE
          </h1>
          <h1
            className={`${
              curr == 2 ? "text-[#06E19D] border-b-2 border-[#06E19D]" : ""
            }`}
            onClick={() => setCurr(2)}
          >
            {" "}
            2 CONTINOUS IMPROVEMENT{" "}
          </h1>
          <h1
            className={`${
              curr == 3 ? "text-[#06E19D] border-b-2 border-[#06E19D]" : ""
            }`}
            onClick={() => setCurr(3)}
          >
            {" "}
            3 COMMUNICATION
          </h1>
        </div>
        <div>
          {curr == 1 ? (
            <section className=" w-[350px] h-[180px] lg:w-[611px] lg:h-[350px] shrink-0 rounded-[15px] justify-center flex flex-col gap-1 lg:gap-10 items-start p-10 bg-gradient-to-b from-[#019267] to-[#06E19D]">
              <img
                src={person}
                alt=""
                className=" lg:w-[151px] h-[75px] w-[75px] lg:h-[151px] shrink-0"
              />
              <span className=" w-[300px] lg:w-[517px] lg:h-24 flex-col justify-center shrink-0 text-black text-[12px] lg:text-[16px] not-italic font-normal">
                We are committed to providing our clients with exceptional
                service that exceeds expectations. We believe in building strong
                relationships based on mutual trust and respect, and we always
                go the extra mile to ensure their satisfaction.
              </span>
            </section>
          ) : (
            ""
          )}
          {curr == 2 ? (
            <section className=" w-[350px] h-[180px] lg:w-[611px] lg:h-[350px] shrink-0 rounded-[15px] justify-center flex flex-col gap-1 lg:gap-10 items-start p-10 bg-gradient-to-b from-[#019267] to-[#06E19D]">
              <img
                src={infi}
                alt=""
                className=" lg:w-[151px] h-[75px] w-[75px] lg:h-[151px] shrink-0"
              />
              <span className=" w-[300px] lg:w-[517px] lg:h-24 flex-col justify-center shrink-0 text-black text-[12px]  lg:text-[16px] not-italic font-normal">
                We are never satisfied with the status quo. We are constantly
                striving to improve our services, processes, and technologies to
                deliver even greater value to our clients. We encourage
                innovation and creativity, and we are always open to feedback
                and new ideas.
              </span>
            </section>
          ) : (
            ""
          )}
          {curr == 3 ? (
            <section className=" w-[350px] h-[180px] lg:w-[611px] lg:h-[350px] shrink-0 rounded-[15px] justify-center flex flex-col gap-1 lg:gap-10 items-start p-10 bg-gradient-to-b from-[#019267] to-[#06E19D]">
              <img
                src={video}
                alt=""
                className=" lg:w-[151px] h-[75px] w-[75px] lg:h-[151px] shrink-0"
              />
              <span className=" w-[300px] lg:w-[517px] lg:h-24 flex-col justify-center shrink-0 text-black text-[12px]  lg:text-[16px] not-italic font-normal">
                We believe in open, honest, and transparent communication with
                our clients, partners, employees, and stakeholders. We are
                committed to keeping everyone informed and involved in the
                decision-making process. We actively listen to concerns and
                feedback, and we value open dialogue and collaboration.
              </span>
            </section>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Value;
