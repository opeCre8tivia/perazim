import React, { useContext } from "react";
import Logo from "../Atomic/Logo/logo";
import NavBarLink from "../NavBarLink";
import { MdReorder } from "react-icons/md";
import { NavContext } from "../../context/NavContext";

const NavBarContent = () => {
  const { setShowMobileNav }: any = useContext(NavContext);
  return (
    <div className=" w-full h-[60px] flex justify-between overflow-hidden items-center px-10">
      {/* logo section */}
      <div className="w-fit h-[58px] flex justify-center items-center ">
        <Logo color="gray" long={true} />
      </div>

      {/* menu items */}
      <div className=" w-[70%] h-full px-5 hidden md:flex justify-end items-center gap-8">
        <NavBarLink title="Home" />
        <NavBarLink title="Our Services" />
        <NavBarLink title="About" />
        <NavBarLink title="Contact" />
      </div>

      {/* mobile phone icon */}
      <div
        onClick={() => setShowMobileNav(true)}
        className="  w-[40px] h-[40px] flex justify-center items-center sm:hidden"
      >
        <MdReorder size={30} />
      </div>
    </div>
  );
};

export default NavBarContent;
