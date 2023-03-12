import Button from "../Atomic/Button/button";

const HeroSection = () => {
  return (
    <div className="w-full  h-[90vh] md:h-[80vh]  md:flex justify-between gap-16 items-center">
      {/* LEFT */}
      <div className="w-full h-[40vh] md:w-[50%] md:h-[80vh]">
        {/* perazim hero text image */}
        <div className="text-red-500 text-[50px] text-center mt-10 font-bold">
          PERAZIM
        </div>
        {/* text content and button */}
        <div className="text-black text-center font-montserrat font-bold">
          SECURITY
        </div>

        {/* description */}
        <div className="mt-10 text-center font-dmsans text-[20px] w-[60%] mx-auto text-gray-600">
          We take care of security as you go about your business
        </div>

        {/* button */}
        <div className="flex justify-center items-center mt-6">
          <Button title="More" />
        </div>
      </div>
      {/* RIGHT*/}
      <div className="w-full h-[40vh] md:w-[50%] md:h-[80vh] flex justify-center items-center relative">
        {/* hero image graphic */}
        <img
          alt="security guard"
          src="./perazimwebheroguard.png"
          className="md:h-[80%] md:w-[80%]"
        />
      </div>
    </div>
    //0784209818
  );
};

export default HeroSection;
