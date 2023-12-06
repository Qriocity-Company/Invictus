import { React, useState, useEffect } from "react";
const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    if (slideIndex <= 2) setSlideIndex(slideIndex + n);
    else setSlideIndex(1);
  };
  const minusSlide = (n) => {
    if (slideIndex > 1) setSlideIndex(slideIndex + n);
    else setSlideIndex(3);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) setSlideIndex(1);
    if (n < 1) setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    const screenWidth = window.screen.width;
    if (screenWidth > 600) slides[slideIndex - 1].style.display = "flex";
    else {
      slides[slideIndex - 1].style.display = "block";
    }
    dots[slideIndex - 1].className += " active";
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="font-bold text-[48px] relative my-12">
        Testimonials
        <hr className="border-[3px] border-[#06E19D] w-[40%] mb-10 rounded-full  absolute  left-48 sliding-hr" />
      </h1>

      <div className="testimonial-container">
        <div className="outer-container">
          <div className="slideshow-container flex lg:gap-28 gap-3 items-center">
            <a
              className="prev text-[24px] md:text-[48px]"
              onClick={() => minusSlide(-1)}
            >
              &#10094;
            </a>
            <div className="mySlides fade font-Poppins">
              <div className="content flex  flex-col items-center ">
                <div className="flex w-[300px] md:w-[633px] flex-col items-center gap-[29px] pt-[42px] pb-[46px] px-[31px] rounded-xl bg-white">
                  <span className="w-[250px] md:w-[499px] h-[31px] text-[#303030] text-center text-xl md:text-2xl not-italic font-semibold leading-[normal]">
                    Increased website traffic by 300%{" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px]  text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    Anvictus Global Tech helped us completely revamp our website
                    and digital marketing strategy. Within just 6 months, we've
                    seen a 300% increase in website traffic and a significant
                    boost in leads and conversions. We're thrilled with the
                    results and highly recommend Anvictus to any business
                    looking to grow online.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    Sarah Jones
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    CEO
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Acme Corporation
                  </p>
                </div>
                <div className="dot-div">
                  <span className="dot" onClick={() => currentSlide(1)}></span>
                  <span className="dot" onClick={() => currentSlide(2)}></span>
                  <span className="dot" onClick={() => currentSlide(3)}></span>
                </div>
              </div>
            </div>

            <div className="mySlides fade">
              <div className="content flex  flex-col items-center ">
                <div className="flex w-[300px] md:w-[633px] flex-col items-center gap-[29px] pt-[42px] pb-[46px] px-[31px] rounded-xl bg-white">
                  <span className="w-[250px] md:w-[499px] h-[31px] text-[#303030] text-center text-2xl not-italic font-semibold leading-[normal]">
                    Delivered a seamless and successful mobile app launch{" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px] text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    We needed a reliable partner to develop our new mobile app.
                    Anvictus Global Tech exceeded our expectations with their
                    expertise, communication, and commitment to delivering a
                    high-quality product. The app launch was a huge success, and
                    we are grateful for Anvictus's efforts.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    David Lee
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    CEO
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    AppVentures
                  </p>
                </div>
              </div>
            </div>

            <div className="mySlides fade">
              <div className="content flex  flex-col items-center ">
                <div className="flex w-[300px] md:w-[633px] flex-col items-center gap-[29px] pt-[42px] pb-[46px] px-[31px] rounded-xl bg-white">
                  <span className="w-[250px] md:w-[499px] h-[31px] text-[#303030] text-center text-2xl not-italic font-semibold leading-[normal]">
                    Achieved a 20% increase in sales within 3 months{" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px] text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    We were struggling to reach our target audience online and
                    generate leads. Anvictus Global Tech developed a targeted
                    B2B marketing campaign that has exceeded our expectations.
                    Within just 3 months, we've achieved a 20% increase in sales
                    and are continuing to see positive results.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    John Smith
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Marketing Manager
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Tech Solutions Inc
                  </p>
                </div>
              </div>
            </div>
            <a
              className="next text-[24px] md:text-[48px] "
              onClick={() => plusSlides(1)}
            >
              &#10095;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
