import React from "react";
import section_image from '../images/section1Image.svg'

const SectionTwo = () => {
  return (
    <div>
      <div
        className="flex container max-w-[1200px] mx-auto 
    items-center py-14 md:py-36 flex-col md:flex-row px-7 md:px-0"
      >
        <div className="md:w-[50%]">
          <img src={section_image} alt="" />
        </div>
        <div className="md:w-[50%]">
          <div className="w-[95%] xl:w-[60%] mx-auto">
            <h1
              className="font-[700] text-[20px] sm:text-[28px]
         md:text-[48px] font-['ggSans'] leading-[24px]
          md:leading-[57.6px] mt-5 md:mt-0"
            >
              Create an invite-only place where you belong
            </h1>
            <p className="font-['ggSans'] text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
