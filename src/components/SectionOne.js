import React from "react";
import logo_1 from '../images/Image0.svg';
import logo_2 from '../images/Image1.svg'
import logo_3 from '../images/Image2.svg'

const SectionOne = () => {
  return (
    <div>
      <div className="bg-[#404EED] -mt-1 relative w-full overflow-x-hidden">
        <img
          src={logo_1}
          className="hidden xl:block absolute z-10 bottom-0 top-auto scale-x-125"
          alt=""
        />
        <img
          src={logo_2}
          className="hidden xl:block absolute z-10 bottom-0 right-[-25%]"
          alt=""
        />
        <img
          src={logo_3}
          className="hidden xl:block absolute z-10 bottom-0 -left-[30%]"
          alt=""
        />
        <div
          className="text-[#fff] container max-w-[1200px] xl:px-0 px-7 xl:max-w-[900px] 
      mx-auto text-center xl:h-[555px] flex flex-col gap-5 pt-[50px] xl:pt-[120px]"
        >
          <h2
            className="font-[800] text-left xl:text-center text-[34px] md:text-[56px]
       font-['GintoNord'] z-20"
          >
            IMAGINE A PLACE...
          </h2>
          <p
            className="font-[400] text-left xl:text-center 
        text-[16px] md:text-[20px] leading-[26px] 
        md:leading-[32.5px] font-['gg sans'] w-[90%] md:w-[70%] xl:w-[90%] z-20 xl:self-center"
          >
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className="hidden xl:flex flex-row item-center justify-center gap-10 font-[500] z-20">
            <a
              href="#"
              className="bg-white text-black p-3 px-7 rounded-full hover:text-[#404EED]"
            >
              <p>
                <i className="fa-solid fa-download mr-2" />
                Download for Windows
              </p>
            </a>
            <a
              href="#"
              className="bg-[#23272a] text-white p-3 px-7 rounded-full"
            >
              Open Discord in your browser
            </a>
          </div>
          <div className="flex xl:hidden font-[500] z-20">
            <a
              href="#"
              className="bg-white text-black p-3 px-7 rounded-full hover:text-[#404EED]"
            >
              <p>
                <i className="fa-solid fa-download mr-2" />
                Download from Google Play
              </p>
            </a>
          </div>
          <img
            src="./images/Image2.svg"
            className="block md:hidden ml-[-80px]"
            alt=""
          />
          <div className="hidden md:flex xl:hidden mr-[-150px] mt-[-16%] justify-end">
            <img src="./images/Image1.svg" className="w-[70%]" alt="" />
          </div>
          {/* Mobile/Tablet Mode End */}
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
