import Link from "next/link";
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

  /**
   * href passed to next js Link component for navigation
   */

  href?: string;
};

/**
 * Perazim block button
 */
const Button = ({ title, style, href }: Props) => {
  return (
    <Link href={href ? href : "#"}>
      <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg  bg-gradient-to-tr from-orange-400 to-red-500 hover:bg-orange-300 focus:ring-4 focus:ring-orange-300 dark:focus:ring-gray-900">
        {title}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default Button;
