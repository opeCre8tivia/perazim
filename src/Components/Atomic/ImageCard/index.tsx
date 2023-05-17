import React from "react";
import Button from "../Button/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  caption: string;
  uri: string;
};

const ImageCard = ({ uri, title, caption }: Props) => {
  return (
    <div className="w-full h-fit md:w-[32%] md:h-fit bg-white ">
      <Image
        className="rounded-t-lg"
        src={uri}
        width={350}
        height={250}
        alt="image showing one of the services"
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <div className="mb-3 text-[15px] text-justify text-gray-700 ">
          {caption}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
