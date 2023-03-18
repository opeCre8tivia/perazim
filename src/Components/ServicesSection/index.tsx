import React from "react";
import ImageCard from "../Atomic/ImageCard";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <div className="w-full h-fit flex justify-between items-center flex-wrap gap-4 md:gap-2 pt-20 pb-20 pl-6 pr-6 bg-[url('/bg-orange.png')] bg-no-repeat bg-cover">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </div>
  );
};

export default ServicesSection;