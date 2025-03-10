/* eslint-disable react/prop-types */
import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex items-center justify-center mt-10 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 relative">
      <div className="hidden md:block spotlight spotlight-left"></div>
      <div className="hidden md:block spotlight2 spotlight-right"></div>
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold  mb-8">
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Frequently Asked Questions
          </span>
        </p>

        <div className="space-y-4 relative">
        <div className="hidden md:block spotlightOrange spotlightOrange-left"></div>
        <div className="hidden md:block spotlightOrange spotlightOrange-right"></div>
          {data.map((faq, index) => (
            <div
              key={index}
              className="bg-darkOrange-gradient bg-opacity-40 shadow-md px-4 md:px-6 py-4 rounded-2xl w-[300px] md:w-[500px] lg:w-[600px] xl:w-[1100px]"
            >
              <div
                className="flex flex-row items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <p className="syne-font text-sm md:text-[17px] text-start text-white">
                  {faq.question}
                </p>
                {activeIndex === index ? (
                  <MdOutlineArrowCircleUp size={24} color="#ffffff" />
                ) : (
                  <MdOutlineArrowCircleDown size={24} color="#ffffff" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-start syne-font text-xs md:text-sm mt-3 text-white text-opacity-80">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
