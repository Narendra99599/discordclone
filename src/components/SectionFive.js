import React from "react";
import sectionFiveLogo from  '../images/section4Image.svg'

const SectionFive = () => {
  return (
    <div>
      <div class="bg-[#f6f6f6]">
        <div class="flex flex-col container max-w-[1200px] mx-auto items-center py-14 md:py-32 px-5">
          <h1
            class="font-[800] font-['GintoNord'] text-[20px] 
        leading-[19px] md:leading-[32px] text-left md:text-center md:text-[40px]"
          >
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p
            class="md:text-center md:w-[83%] md:text-[20px] 
      md:leading-[32.5px] text-[16px] leading-[26px] mt-[24px]"
          >
            Low-latency voice and video feels like you&apos;re in the same room.
            Wave hello over video, watch friends stream their games, or gather
            up and have a drawing session with screen share.
          </p>
          <img src={sectionFiveLogo} alt="" class="w-[100%]" />

          <div
            class="text-[32px] font-['ggSans'] font-[700] relative 
      w-[100%] flex flex-col items-center gap-[40px]"
          >
            {/* <img
              src={sectionFiveLogo}
              class="md:block hidden absolute top-0"
              alt=""
            /> */}
            <div class="md:text-center pt-[30px] leading-[38px]">
              Ready to start your journey?
            </div>

            <p
              class="bg-[#404EED] hidden md:block w-fit text-white text-[20px] 
          font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-full"
            >
              <i class="fa-solid fa-download mr-2"></i>
              Download for Windows
            </p>
          </div>
          <div
            class="bg-[#404EED] md:hidden flex justify-center items-center mt-4
         text-white text-[20px] font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-3xl"
          >
            <i class="fa-solid fa-download mr-2"></i>
            <p>Download from Google Play</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
