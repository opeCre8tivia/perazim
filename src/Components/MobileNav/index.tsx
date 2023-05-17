import React, { useContext } from "react";
import Logo from "../Atomic/Logo/logo";
import { MdClear } from "react-icons/md";
import { NavContext } from "../../context/NavContext";
import Button from "../Atomic/Button/button";

type Props = {};

const MobileNav = (props: Props) => {
  const { showMobileNav, setShowMobileNav }: any = useContext(NavContext);
  return (
    <>
      {showMobileNav && (
        <div className="w-full min-h-[100vh] bg-white fixed top-0 left-0 z-50 sm:hidden ">
          <div className=" w-full h-[60px] flex justify-between overflow-hidden items-center px-10 ">
            {/* logo section */}
            <div className="w-fit h-[58px] flex justify-center items-center">
              <Logo color="gray" long={true} />
            </div>

            {/* mobile phone icon */}
            <div
              onClick={() => setShowMobileNav(false)}
              className="  w-[40px] h-[40px] flex justify-center items-center"
            >
              <MdClear size={30} />
            </div>
          </div>

          <div className="w-full h-full mt-10 flex flex-col justify-center items-center">
            <div className=" text-lg text-gray-300 font-bold text-center">
              Your security is our mission
            </div>
            <div className="flex justify-center items-center w-full h-fit  mt-5">
              <Button title="Our Services" />
              <Button
                title="Speak to sales"
                href="https://wa.me/256773576624"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
