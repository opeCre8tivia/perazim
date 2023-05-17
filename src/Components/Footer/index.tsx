import Link from "next/link";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-gray-100 dark:bg-gray-100">
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex flex-col justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="/perazimlogo.png"
            style={{ width: "80px", height: "80px", objectFit: "contain" }}
          />
          Perazim Security
        </a>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          We hold a reputation for both effective security solutions and the use
          of innovative technology in the protection of life and property
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <ScrollIntoView selector="#about">
              <div className="mx-5 hover:underline">About</div>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#services" alignToTop={true}>
              <div className="mx-5 hover:underline">Our services</div>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#contact" alignToTop={true}>
              <div className="mx-5 hover:underline">Contact</div>
            </ScrollIntoView>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Perazim security™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
