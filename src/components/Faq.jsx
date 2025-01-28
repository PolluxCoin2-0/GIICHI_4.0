import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq = () => {
  const [faqState, setFaqState] = useState({}); // State to manage each FAQ's open/close state

  const toggleFaq = (index) => {
    setFaqState((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state of the specific FAQ
    }));
  };

  const faqData = [
    {
      question: "What is user testing?",
      answer:
        "User testing is a process in which real users evaluate a product or service by using it to find usability issues. Participants should represent the target audience of the product or service being tested.",
    },
    {
      question: "Why is user testing important?",
      answer:
        "User testing helps identify issues with your product early, improving user satisfaction and reducing development costs.",
    },
    {
      question: "Who should participate in user testing?",
      answer:
        "Participants should represent the target audience of the product or service being tested.",
    },
    {
      question: "What is the difference between UX and UI design?",
      answer:
        "UX design focuses on the overall experience of the user, while UI design concentrates on the visual and interactive aspects of a product.",
    },
    {
      question: "What are the key principles of UX design?",
      answer:
        "Key principles of UX design include usability, accessibility, consistency, and a user-centered approach.",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-20 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60">
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
              className="bg-orange-gradient bg-opacity-50 shadow-md px-4 md:px-6 py-4 lg:py-6 rounded-2xl w-[300px] md:w-[500px] lg:w-[600px] xl:w-[700px]"
            >
              <div
                className="flex flex-row items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)} // Toggle FAQ on click
              >
                <p className="syne-font text-sm md:text-lg lg:text-xl text-start text-white">
                  {faq.question}
                </p>
                {faqState[index] ? (
                  <MdOutlineArrowCircleUp size={28} color="#ffffff"/>
                ) : (
                  <MdOutlineArrowCircleDown size={28} color="#ffffff"/>
                )}
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white ${
                  faqState[index] ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-start syne-font text-xs md:text-sm mt-3 text-white">
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
