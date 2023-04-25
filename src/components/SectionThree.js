import React from "react";
import sectionThreeLogo from '../images/section2Image.svg'

const SectionThree = () => {
  return (
    <div>
      <div className="bg-[#f6f6f6]">
        <div
          className="flex container max-w-[1200px] mx-auto items-center
     py-14 md:py-36 flex-col md:flex-row px-7 md:px-0"
        >
          <div className="block md:hidden md:w-[50%]">
            <img src={sectionThreeLogo} alt="" />
          </div>
          <div className="md:w-[50%]">
            <div className="w-[95%] xl:w-[60%] mx-auto">
              <h1
                className="font-[700] text-[20px] sm:text-[28px] md:text-[48px] 
      font-['ggSans'] leading-[24px] md:leading-[57.6px] mt-5 md:mt-0"
              >
                Where hanging out is easy
              </h1>
              <p className="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
                Grab a seat in a voice channel when you're free. Friends in your
                server can see you're around and instantly pop in to talk
                without having to call.
              </p>
            </div>
          </div>
          <div className="md:w-[50%] md:block hidden">
            <img src={sectionThreeLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
