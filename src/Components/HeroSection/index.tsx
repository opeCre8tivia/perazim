import Button from "../Atomic/Button/button";

const HeroSection = () => {
  return (
    <div className="w-full  h-fit md:fit md:flex justify-between gap-4 items-center">
      {/* LEFT */}
      <div className="w-full h-fit md:w-[50%] md:fit flex flex-col items-center justify-center">
        <h1 className="max-w-2xl mb-4 pl-6 pr-6 text-xl text-center font-extrabold tracking-tight leading-none md:text-3xl xl:text-5xl dark:text-white">
          Security Solutions for businesses and individuals
        </h1>
        <p className="max-w-2xl mb-6 pl-6 pr-6 font-light text-gray-500 text-center lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          We hold a reputation for both effective security solutions and the use
          of innovative technology in the protection of life and property
        </p>

        {/* buttons */}
        <div className="w-full flex justify-center">
          <Button title="Get started" />
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Speak to Sales
          </a>
        </div>
      </div>
      {/* RIGHT*/}
      <div className="w-full h-fit md:w-[50%] md:h-fit flex justify-center items-center">
        {/* hero image graphic */}
        <img
          alt="security guard"
          src="./perazimwebheroguard.png"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
