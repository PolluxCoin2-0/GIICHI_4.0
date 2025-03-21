/* eslint-disable react/prop-types */
const Forecast = ({ data }) => {
  return (
    <div className="relative">
       <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <div className="flex flex-row justify-center mt-0 w-full px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-20">
        {/* block section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-12 w-full md:w-full">
          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[50%] 3xl:w-[40%]">
            <img
              src={data.img1}
              alt="forecast-image"
              className="h-96 object-contain "
            />
            <p className="text-white text-xl font-semibold pt-4 px-0 xl:px-28 text-center">
              {data.title1}
            </p>
            <p className="text-sm md:text-[17px] font-light text-white text-opacity-50 pt-6 px-0 xl:px-[85px] text-center leading-normal">
              {data.desc1}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-full md:w-[60%] lg:w-[50%] 3xl:w-[40%]">
            <img
              src={data.img2}
              alt="forecast-image"
              className="h-96 object-contain"
            />
            <p className="text-white text-xl font-semibold pt-4 px-0 xl:px-28 text-center ">
              {data.title2}
            </p>
            <p className="text-sm md:text-[17px] font-light text-white text-opacity-50 pt-6 px-0 xl:px-[85px] leading-normal text-center">
              {data.desc2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
