/* eslint-disable react/prop-types */
import CalendlyButton from "../resuableComponent/Calendly";

const BannerContent = ({ img, title1, title2, desc }) => {
  return (
    <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 z-10">
      <img
        src={img}
        alt="main-background-image"
        className="md:w-full object-cover rounded-xl md:rounded-3xl"
      />
      {/* The text */}
      <div className="hidden md:flex flex-col items-start justify-center absolute top-0 md:left-16 lg:left-24 xl:left-44 3xl:left-80 w-full h-full">
        <p className="">
          <span className="text-transparent bg-clip-text bg-black-gradient md:text-3xl lg:text-4xl xl:text-5xl font-bold">
            {title1}{" "}
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-black-gradient md:text-3xl lg:text-4xl xl:text-5xl font-bold block md:mt-0 lg:mt-3">
            {title2}{" "}
          </span>
        </p>
        <p
          className="md:pt-2 lg:pt-6 md:text-xs lg:text-sm lg:text-[16px] font-semibold leading-snug md:w-[50%] xl:w-[30%]"
          style={{ lineHeight: "1.7" }}
        >
          {desc}
        </p>
        {/* Button */}
        <div className="md:mt-0 xl:mt-6 3xl:mt-8">
          <CalendlyButton />
        </div>
      </div>

      {/* For Mobile */}
      <div className="md:hidden flex flex-col items-start justify-center pt-6">
        <p className="">
          <span className="text-white text-2xl font-bold">{title1} </span>
          <span className="text-white text-2xl font-bold">{title2} </span>
        </p>
        <p className="pt-3 text-sm md:text-lg font-semibold leading-snug text-white text-opacity-70">
          {desc}
        </p>
        {/* Button */}
        <CalendlyButton />
      </div>
    </div>
  );
};

export default BannerContent;
