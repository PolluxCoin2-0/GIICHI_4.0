import circle2Img from "../assets/circle2.png";
import circle3Img from "../assets/circle3.png";
import star5Img from "../assets/star5.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const LetsTalk = () => {
  return (
    <div className="px-0 xl:px-20 2xl:px-32 pt-12">

        {/* circle element */}
      <div className="relative inline-block ">
        <img src={circle2Img} alt="" className="w-28 h-auto relative z-10 hidden md:block" />
        <img
          src={circle3Img}
          alt=""
          className="w-28 h-auto absolute top-0 left-12 z-20 hidden md:block"
        />
      </div>

      {/* content */}
      <div className="bg-orange-gradient bg-opacity-50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-inner shadow-lightGray">
        <p className="hidden md:block text-center">
        <span className="text-transparent bg-clip-text bg-yellow-gradient md:text-sm lg:text-lg font-semibold">We turbocharge your business’s transition to Web 3 with our 15+ years of <br/></span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient md:text-sm lg:text-lg font-semibold">experience, supported by over 1000 experts and with track record of 1200+ <br/></span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient md:text-sm lg:text-lg font-semibold">successful enterprise implementations</span>
        </p>

        <p className="block md:hidden text-center">
        <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">We turbocharge your business’s </span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">transition to Web 3 with our 15+ </span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">years of experience, supported </span>
       <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">by over 1000 experts and with </span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">track record of 1200+ successful </span>
        <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold"> enterprise implementations</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-row justify-center mt-6">
        <div className="flex flex-row items-center bg-green-gradient px-6 md:px-12 py-3 text-black rounded-full text-xl font-semibold shadow-lg">
        <button
          type="button"
          className=""
        >
          Lets Talk
        </button>
        <MdOutlineKeyboardArrowRight size={28}/>
        </div>
        </div>
      </div>

      {/* stars */}
      <div className="hidden md:flex justify-end mt-12 ">
        <img src={star5Img} alt="" className="w-12 object-contain"/>
        <img src={star5Img} alt="" className="w-12 pb-14 object-contain"/>
      </div>
    </div>
  );
};

export default LetsTalk;
