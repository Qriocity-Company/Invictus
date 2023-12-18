import React, {useState ,  useEffect } from 'react'
import darkbg from "../assets/hero/darkbg.png";
import bulb from "../assets/hero/brightbulb.png";
const NewHero = () => {
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);

    useEffect(()=>{

      setTimeout(()=>{
        setFirst(true);
      } , 1000)

    })

  return (
    <div className="absolute top-0  left-0  h-screen w-full  flex flex-col
     justify-center items-center " style={{backgroundImage : `url(${darkbg})`, backgroundSize : "cover", backgroundPosition : "bottom" }} >
   
   <div className="md:mt-20 mt-10">
              <div className=" lg:text-6xl md:text-4xl text-2xl text-center font-[700] text-white flex md:gap-5 gap-2 justify-center">
                <div className={`${first  ?  "hidden scale-150 " : "block " } ease-in-out duration-200 `}>Transform</div>
                <div className="">
                  your
                </div>
                <div
                  className="text-[#06E39E]"
                >
                  Brand
                </div>
              </div>
             
              <p
                className={`lg:text-4xl md:text-2xl  font-[200] text-white text-center mt-3`}
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