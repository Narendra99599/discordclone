import React from "react";
import logo_1 from '../images/logo.svg'
import { VscDebugRestartFrame } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div>
      <div className="bg-[#404EED] font-ggSans">
        <nav className="text-[#fff]  max-w-[1200px] mx-auto flex justify-between h-[72px] items-center xl:px-0 px-7">
          <div>
            <img src={logo_1} alt="" />
          </div>
          <div className="hidden xl:flex gap-5 font-ggSans font-[600] font-[16px]">
            <a href="#" className="capitalize hover:underline">
              download
            </a>
            <a href="#" className="capitalize hover:underline">
              nitro
            </a>
            <a href="#" className="capitalize hover:underline">
              discover
            </a>
            <a href="#" className="capitalize hover:underline">
              safety
            </a>
            <a href="#" className="capitalize hover:underline">
              support
            </a>
            <a href="#" className="capitalize hover:underline">
              blog
            </a>
            <a href="#" className="capitalize hover:underline">
              careers
            </a>
          </div>
          <div className="hidden xl:flex">
            <a href="#">
              <button className="bg-[#fff] px-4 self-center p-2 text-[#2c2f33] rounded-full font-[500] text-[14px]">
                Open Discord
              </button>
            </a>
          </div>
          <div className="xl:hidden block">
            <VscDebugRestartFrame className="fa-solid fa-bars text-[23px]"/>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
