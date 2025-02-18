import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is DePIN?",
      answer:
        "DePIN is a decentralized network that allows individuals to contribute physical infrastructure (e.g., bandwidth, storage, energy) and earn rewards via blockchain technology.",
    },
    {
      question: "How does DePIN work?",
      answer:
        "Users contribute physical resources to the network and receive tokens in return. Blockchain ensures transparency, security, and automated transactions.",
    },
    {
      question: "What resources can I contribute?",
      answer:
        "You can contribute internet bandwidth, storage space, or energy to the network.",
    },
    {
      question:
        "How are rewards distributed?",
      answer:
        "Rewards are given based on the amount and quality of resources contributed, usually in the form of tokens.",
    },
    {
      question:
        "  Is DePIN secure?",
      answer:
        "Yes, it uses blockchain for transparency, security, and protection from fraud.",
    },
    {
      question: " How can I participate",
      answer:
        "Set up the required devices and contribute resources to start earning rewards in tokens.",
    },
   
  ];

  return (
    <div className="flex items-center justify-center mt-10 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold  mb-8">
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Frequently Asked Questions
          </span>
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-orange-gradient bg-opacity-50 shadow-md px-4 md:px-6 py-4 rounded-2xl w-[300px] md:w-[500px] lg:w-[600px] xl:w-[700px]"
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
export default Faq3;
