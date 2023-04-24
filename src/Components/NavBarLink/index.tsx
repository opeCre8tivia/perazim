import React from "react";

type Props = {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const NavBarLink = ({ title, href, onClick }: Props) => {
  return (
    <div className="transition duration-500 hover:text-primary-300 hover:text-red-500">
      {title}
    </div>
  );
};

export default NavBarLink;
