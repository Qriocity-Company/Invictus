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
            <a className="prev text-[24px] md:text-[48px]" onClick={() => minusSlide(-1)}>
              &#10094;
            </a>
            <div className="mySlides fade font-Poppins">
              <div className="content flex  flex-col items-center ">
                <div className="flex w-[300px] md:w-[633px] flex-col items-center gap-[29px] pt-[42px] pb-[46px] px-[31px] rounded-xl bg-white">
                  <span className="w-[250px] md:w-[499px] h-[31px] text-[#303030] text-center text-xl md:text-2xl not-italic font-semibold leading-[normal]">
                    It was a very good experience{" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px]  text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    Andreq Jackson
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Founder
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Company Name
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
                    Enjoyable  experience{" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px] text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    Andreq Jackson
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Founder
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Company Name
                  </p>
                </div>
              </div>
            </div>

            <div className="mySlides fade">
              <div className="content flex  flex-col items-center ">
                <div className="flex w-[300px] md:w-[633px] flex-col items-center gap-[29px] pt-[42px] pb-[46px] px-[31px] rounded-xl bg-white">
                  <span className="w-[250px] md:w-[499px] h-[31px] text-[#303030] text-center text-2xl not-italic font-semibold leading-[normal]">
                    Best so far {" "}
                  </span>
                  <p className="w-[280px] md:w-[571px] md:h-[213px] text-[#303030] text-center text-base not-italic font-normal leading-[normal]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cursus nibh mauris, nec turpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu. Elementum felis magna pretium
                    in tincidunt. Suspendisse sed magna eget nibh in turpis.
                    Consequat duis diam lacus arcu. urpis orci lectus maecenas.
                    Suspendisse sed magna eget nibh in turpis. Consequat duis
                    diam lacus arcu. Faucibus venenatis felis id augue sit
                    cursus pellentesque enim arcu.
                  </p>
                </div>
                <div className="credentials flex flex-col items-center mt-10">
                  <p className="flex flex-col justify-center shrink-0 text-white text-2xl not-italic font-medium leading-[normal]">
                    Andreq Jackson
                  </p>
                  <span className="shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Founder
                  </span>
                  <p className=" shrink-0 text-white text-xl not-italic font-normal leading-[normal]">
                    Company Name
                  </p>
                </div>
              </div>
            </div>
            <a className="next text-[24px] md:text-[48px] " onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
