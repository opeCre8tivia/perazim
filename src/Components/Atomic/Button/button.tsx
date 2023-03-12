import React from "react";

type Props = {
  /**
   * Text that is rendered as button title
   */
  title: string;

  /**
   * Pass an object to change the buton styles
   */
  style?: object;
};

/**
 * Perazim block button
 */
const Button = ({ title, style }: Props) => {
  return (
    <div className="w-[80px] h-[53px] rounded-md bg-black text-white text-[12px] text-center flex justify-center items-center font-bold hover:bg-gray-600 ">
      {title}
    </div>
  );
};

export default Button;
