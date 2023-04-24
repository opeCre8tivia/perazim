import React from "react";
import Logo from "../Atomic/Logo/logo";
import NavBarLink from "../NavBarLink";

const NavBarContent = () => {
  return (
    <div className=" w-full h-full flex justify-between overflow-hidden items-center">
      {/* logo section */}
      <div className="w-fit h-[58px] flex justify-center items-center">
        <Logo color="gray" long={true} />
      </div>

      {/* menu items */}
      <div className=" w-[70%] h-full px-10 hidden md:flex justify-end items-center gap-8">
        <NavBarLink title="Home" />
        <NavBarLink title="Our Services" />
        <NavBarLink title="About" />
        <NavBarLink title="Contact" />
      </div>
      {/* mobile phone icon */}
      <div className="  w-[40px] h-[40px] flex justify-center items-center p-3 rounded-full bg-primary-400 shadow-lg sm:hidden"></div>
    </div>
  );
};

export default NavBarContent;
