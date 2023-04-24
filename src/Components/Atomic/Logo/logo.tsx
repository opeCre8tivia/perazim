import Image from "next/image";
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
    <div className="flex w-fit h-fit justify-center items-center m-1">
      <div className="flex justify-center items-center">
        <Image
          alt="perazim logo"
          src="/perazimlogo.png"
          width={50}
          height={50}
        />
      </div>
      {long && (
        <div className={`text-lg  text-${color}-500 font-bold px-4`}>
          PERAZIM SECURITY
        </div>
      )}
    </div>
  );
};

export default Logo;
