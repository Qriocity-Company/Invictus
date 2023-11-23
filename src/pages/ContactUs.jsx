import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import letTalk from "../assets/letstalk.svg";
import getintouch from "../assets/getintouch.svg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your logic to handle the form data (e.g., send it to a server)
  };
  return (
    <div className="h-screen flex justify-center items-center mt-20 w-full max-w-[1440px]">
      <div className="flex lg:flex-row flex-col  w-full mx-40 gap-36">
        <div className="flex flex-col items-center mt-20">
          <div>
            {" "}
            <img src={letTalk} className="w-[350px] md:w-full mt-[500px] md:mt-0" />
          </div>
          <div className="bg-white rounded-full">
            <img src={getintouch} />
          </div>
        </div>
        <div className=" relative w-[350px] md:w-[600px] text-black ml-auto  pt-5  bg-white rounded-md shadow-md">
          <div className="w-[200px] h-[90px] bg-[#00251A] transform  absolute -rotate-45 -top-4 -left-1/4 "></div>
          <div className=" relative mx-6 mb-20 ">
            <div className="relative text-[12px] md:text-[17px] font-[400] text-right font-Poppins ">
              Any question or remarks? Just write us a message!
            </div>
            <span className="absolute -bottom-1 right-0 h-1 bg-[#019267] w-[100px]"></span>
          </div>
          <form onSubmit={handleSubmit} className="px-5">
            <div className="mb-4 px-5">
              <label
                htmlFor="username"
                className="block text-black  font-Poppins font-[400] text-[16px] "
              >
                Name *
              </label>
              <input
                required
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border py-2  px-3 focus:outline-none focus:border-none border-b-2 border-b-black  border-x-0 border-t-0"
              />
            </div>

            <div className="mb-4 px-5">
              <label
                htmlFor="email"
                className="block text-black  font-Poppins font-[400] text-[16px] "
              >
                Email *
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border py-2  px-3 focus:outline-none focus:border-none border-b-2 border-b-black  border-x-0 border-t-0"
              />
            </div>

            <div className="mb-4 px-5">
              <label
                htmlFor="message"
                className="block text-black text-sm mb-2 font-Poppins font-[400] text-[16px]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border  py-2 px-3 focus:outline-none focus:border-none border-b-2 border-b-black border-x-0 border-t-0"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-black w-full text-white py-3 px-4 mb-10 flex justify-center items-center "
            >
              <span className="font-Poppins font-bold text-[24px] "> Let’s talk! </span>
              <BsArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
