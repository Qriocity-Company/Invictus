import React, {useState ,  useEffect } from 'react';
import "../index.css";
import darkbg from "../assets/hero/darkbg.png";
import bulb from "../assets/hero/brightBulb.png";
const NewHero = () => {
    
    const [middleText, setMiddleText] = useState(false);
    const [lastText, setLastText] = useState(false);
    const [paraText, setParaText] = useState(false)

   
  useEffect(() => {
  
    setTimeout(() => {
      setMiddleText(true);
    }, 500);

    setTimeout(() => {
      setLastText(true);
    }, 900);

    setTimeout(() => {
      setParaText(true);
    }, 1500);

   
  }, []);

  return (
    <div className="absolute top-0  left-0  h-screen w-full  flex flex-col
     justify-center items-center " style={{backgroundImage : `url(${darkbg})`, backgroundSize : "cover", backgroundPosition : "bottom" }} >
   
   {/* <div className="md:mt-20 mt-10">
              <div className=" lg:text-6xl md:text-4xl text-2xl text-center font-[700] text-white flex md:gap-5 gap-2 justify-center">
                <div className={`${first  ?  "hidden scale-150 " : "block " } ease-in-out duration-200 `}>Transform</div>
                <div className={`${first  ?  "hidden scale-150 " : "block " } ease-in-out duration-200 `}>
                  your
                </div>
                <div
                  className={`${first  ?  "hidden scale-150 " : "block " } text-[#06E39E]  ease-in-out duration-200 `}
                >
                  Brand
                </div>
              </div>
             
              <p
                className={`lg:text-4xl md:text-2xl  font-[200] text-white text-center mt-3`}
              >
                Empower your business with us
              </p>
   </div> */}
   <div className="md:mt-20 mt-10">
              <div className=" lg:text-8xl md:text-4xl text-2xl text-center font-[700] text-white flex md:gap-6 gap-2 justify-center">
                <div className="textanimation">Transform</div>
                <div className={middleText ? "textanimation" : "opacity-0"}>
                  your
                </div>
                <div
                  className={
                    lastText
                      ? "textanimation text-[#06E39E]"
                      : "opacity-0 text-[#06E39E]"
                  }
                >
                  Brand
                </div>
              </div>
              
              <p
                className={`${
                  paraText ? "textanimation" : "opacity-0"
                }  lg:text-4xl md:text-2xl  font-[200] text-white text-center mt-3`}
              >
                Empower your business with us
              </p>
            </div>
 
  <img src={bulb} className='  lg:w-[450px]  md:w-[400px] sm:w-[350px] w-[220px] ' />
    
    <div>
     
    </div>
  </div>
  )
}

export default NewHero