import React from "react";
import Logo from "../Atomic/Logo/logo";
import NavBarLink from "../NavBarLink";

const NavBarContent = () => {
  return (
    <div className="flex justify-between h-[80px] overflow-hidden items-center mx-auto w-5/6 mt-4">
      {/* logo section */}
      <div>
        <Logo color="gray" long={true} />
      </div>

      {/* menu items */}
      <div className=" hidden md:flex justify-between items-center gap-8">
        <NavBarLink title="Home" />
        <NavBarLink title="Our Services" />
        <NavBarLink title="About" />
        <NavBarLink title="Contact" />
      </div>
      {/* mobile phone icon */}
      <div className=" w-[40px] h-[40px] flex justify-center items-center p-3 rounded-full bg-primary-400 shadow-lg"></div>
    </div>
  );
};

export default NavBarContent;
