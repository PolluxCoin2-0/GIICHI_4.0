import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq4 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is blockchain in supply chain management?",
      answer:
        "Blockchain is a secure, transparent technology that records transactions, improving traceability, accountability, and security in supply chain operations.",
    },
    {
      question: "How does blockchain improve supply chains?",
      answer:
        "It offers enhanced transparency, reduces fraud, and increases efficiency by providing real-time data and secure transactions across all stakeholders.",
    },
    {
      question: "How does blockchain prevent counterfeiting?",
      answer:
        "By providing a secure, immutable record of every product’s journey, ensuring authenticity and reducing the risk of counterfeit goods.",
    },
    {
      question:
        " Is blockchain expensive for supply chains?",
      answer:
        "The initial investment may be high, but the long-term benefits, like reduced fraud and operational costs, usually provide a strong return on investment.",
    },
    {
      question:
        " How secure is blockchain?",
      answer:
        "Blockchain is highly secure, with encrypted and immutable records, ensuring that only authorized participants can access and update the data.",
    },
    {
      question: " What industries benefit from blockchain in supply chains?",
      answer:
        "Industries like retail, pharmaceuticals, food and agriculture, and logistics can all benefit from improved traceability, security, and efficiency.",
    },
   
  ];

  return (
    <div className="flex items-center justify-center mt-10 px-4 md:px-8 lg:px-12 xl:px-20 3xl:px-60 relative">
       <div className="hidden md:block spotlight spotlight-left"></div>
       <div className="hidden md:block spotlight2 spotlight-right"></div>
      <div className="text-center ">
     
        <p className="text-2xl md:text-3xl font-bold  mb-8">
          <span className="text-transparent bg-clip-text bg-green-gradient">
            Frequently Asked Questions
          </span>
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-orange-gradient bg-opacity-50 shadow-md px-4 md:px-6 py-4 rounded-2xl w-[300px] md:w-[500px] lg:w-[600px] xl:w-[1100px]"
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
export default Faq4;
