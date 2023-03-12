import React from "react";

type Props = {
  /**
   * When true renders both text and image
   */
  long: boolean;

  /**
   * Diffrent variants of text color
   */
  color?: "red" | "gray";
};

const Logo = ({ long, color = "red" }: Props) => {
  return (
    <div className="min-w-[100px] w-auto h-[100px] flex justify-center items-center mt-6 gap-1">
      <div className="w-[80px] h-[80px] flex justify-center items-center">
        <img
          alt="perazim logo"
          src="./perazimlogo.png"
          width="50px"
          height="50px"
        />
      </div>
      {long && (
        <div className={`text-lg  text-${color}-500 font-bold hidden md:block`}>
          PERAZIM SECURITY
        </div>
      )}
    </div>
  );
};

export default Logo;
