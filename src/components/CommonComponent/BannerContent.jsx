/* eslint-disable react/prop-types */
import CalendlyButton from "../resuableComponent/Calendly"

const BannerContent = ({img, title1, title2, desc}) => {
    return (
        <div className="relative w-full mx-auto flex flex-col md:flex-row justify-center px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-32 3xl:px-60 z-10">
        <img
          src={img}
          alt="blockchain-bg-image"
          className="md:w-full md:h-[400px] object-cover rounded-xl md:rounded-3xl"
        />
        {/* The text */}
        <div className="flex flex-col items-start justify-center absolute top-0 lg:left-24 xl:left-44 2xl:left-80 w-full h-full">
          <p className="">
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-3xl lg:text-4xl xl:text-5xl font-bold">
             {title1}{" "}
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-black-gradient md:text-3xl lg:text-4xl xl:text-5xl  font-bold">
              {title2}{" "}
            </span>
          </p>
          <p className="pt-6 lg:text-[16px] font-semibold leading-snug w-[30%]">
            {desc}
          </p>
          {/* Button */}
          <CalendlyButton />
          {/* transform translate-y-full text-white p-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 */}
        </div>
       
      </div>
    )
}

export default BannerContent;