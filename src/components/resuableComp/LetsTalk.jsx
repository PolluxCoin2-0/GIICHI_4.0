/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LetsTalk = ({ buttonText }) => {
  return (
    <div className="pt-0 lg:pt-6 pb-12">
      
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-32 3xl:px-64 mt-6">
        
        <div className="bg-orange-gradient bg-opacity-50 rounded-2xl p-8 md:p-12 lg:p-16 shadow-inner shadow-lightGray">
          <p className="hidden md:block text-center ">
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-sm lg:text-lg font-semibold">
              We accelerate your business's journey to Web 3 with over 15 years
              of expertise,
              <br />
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-sm lg:text-lg font-semibold">
              backed by a team of 1000+ professionals and a proven record of
              1200+ successful
              <br />
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-sm lg:text-lg font-semibold">
              enterprise implementations.
            </span>
          </p>

          <p className="block md:hidden text-center">
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              We accelerate your business's{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              journey to Web 3 with over 15 years{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              of expertise, backed by a team by{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              over 1000 experts and with of{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              1000+ professionals and a proven{" "}
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              {" "}
              record of 1200+ successful
            </span>
            <span className="text-transparent bg-clip-text bg-yellow-gradient text-md font-semibold">
              {" "}
              enterprise implementations
            </span>
          </p>

          {/* Buttons */}
          <div className="flex flex-row justify-center mt-6">
            <div
              className="flex flex-row items-center bg-green-gradient px-6 md:px-12 py-2 md:py-3 text-black rounded-full text-lg md:text-xl font-semibold shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => window.open("https://wa.me/9266416198", "_blank")}
            >
              <button
                type="button"
                className="text-nowrap text-sm md:text-lg cursor-pointer"
                aria-label="Connect-on-whatsapp" title="Connect on WhatsApp"
              >
                {buttonText}
              </button>
              <MdOutlineKeyboardArrowRight size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LetsTalk;
