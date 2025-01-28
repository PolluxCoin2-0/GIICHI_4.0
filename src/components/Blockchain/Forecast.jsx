/* eslint-disable react/prop-types */
import circle3Img from "../../assets/circle3.png";
import circle5Img from "../../assets/circle5.png";
import star2Img from "../../assets/star2.png";
import circle1Img from "../../assets/circle1.png";

const Forecast = ({ img1, img2, title1, title2, desc1, desc2 }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center mt-28 w-full px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-20">
        {/* images section */}
        <div className="hidden xl:inline-block relative -ml-12 w-[15%]">
          <img
            src={circle3Img}
            alt=""
            className="w-36 relative z-10 hidden md:block"
          />
          <img
            src={circle5Img}
            alt=""
            className=" w-28 absolute -top-20 left-20 z-20 hidden md:block "
          />
        </div>

        {/* block section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-12 w-full md:w-full 2xl:w-[70%]">
          <div className="flex flex-col items-center justify-center w-full md:w-[50%]">
            <img src={img1} alt="" className="w-60" />
            <p className="text-white text-xl font-semibold pt-10 px-0 xl:px-28 text-center">
              {title1}
            </p>
            <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-0 xl:px-28">
              {desc1}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center  w-full md:w-[50%] mt-12 md:mt-0">
            <img src={img2} alt="" className="w-72" />
            <p className="text-white text-xl font-semibold pt-16 px-0 xl:px-28 text-center">
              {title2}
            </p>
            <p className="text-sm md:text-[17px] font-normal text-white text-opacity-50 text-center pt-6 px-0 xl:px-28">
              {desc2}
            </p>
          </div>
        </div>

        {/* images section */}
        <div className="hidden xl:block w-[15%]">
          <img src={circle1Img} alt="" className="-mt-72 ml-12" />
          <img src={star2Img} alt="" className="mt-8 ml-40 object-cover w-16" />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
