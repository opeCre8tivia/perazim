import React from "react";
import Button from "../Button/button";
import Link from "next/link";

type Props = {
  title: string;
  caption: string;
  href: string;
};

const ImageCard = ({ href, title, caption }: Props) => {
  return (
    <div className="w-full md:w-[32%] md:min-h-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a>
        <img
          className="rounded-t-lg"
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          alt=""
          style={{ width: "150px", height: "150px" }}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {caption}
        </p>

        <Link href={href}>
          <Button title="Read more" />
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
