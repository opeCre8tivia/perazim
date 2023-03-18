import React from "react";
import Button from "../Atomic/Button/button";

type Props = {};

const LeftImageSection = (props: Props) => {
  return (
    <section className="flex flex-col justify-center antialiased  text-gray-200 h-fit mt-10">
      <div className="w-full mx-auto p-4 sm:px-6 h-fit ">
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start justify-between">
          <a className="relative block group" href="#0">
            <div
              className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
              aria-hidden="true"
            ></div>
            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <img
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg"
                width="540"
                height="303"
                alt="Blog post"
              />
            </figure>
          </a>
          <div>
            <header>
              <div className="mb-3">
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                  <li className="m-1">
                    <a
                      className="inline-flex text-center text-white py-1 px-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Guard duty
                    </a>
                  </li>
                  <li className="m-1">
                    <a
                      className="inline-flex text-center text-white py-1 px-3 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Camera Installation
                    </a>
                  </li>
                  <li className="m-1">
                    <a
                      className="inline-flex text-center text-white py-1 px-3 rounded-full bg-gray-900 hover:bg-gray-600 transition duration-150 ease-in-out"
                      href="#0"
                    >
                      Investigation
                    </a>
                  </li>
                </ul>
              </div>
            </header>
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Your Security is our mission.
              </h2>
              <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
                Flowbite helps you connect with friends and communities of
                people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
              </p>
              <Button title="Find out more" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default LeftImageSection;