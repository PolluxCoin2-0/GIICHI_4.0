import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq5 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "How can blockchain benefit the real estate industry?",
      answer:
        "   Blockchain enhances transparency, security, and efficiency in real estate transactions. It helps with fraud prevention, faster property transfers, secure digital registries, and automated payments using smart contracts.",
    },
    {
      question: "What is real estate tokenization?",
      answer:
        "Real estate tokenization is the process of converting property assets into digital tokens on a blockchain. This allows fractional ownership, easier trading, and increased liquidity, making property investment more accessible.",
    },
    {
      question: "Can blockchain help prevent fraud in real estate?",
      answer:
        "Yes, blockchain’s immutable ledger records property ownership and transaction history securely. This prevents title fraud, identity theft, and unauthorized property transfers.",
    },
    {
      question:
        "What is a blockchain-powered digital registry?",
      answer:
        "A digital registry on blockchain stores property titles, ownership records, and transaction details in a tamper-proof and transparent system, reducing disputes and making property verification seamless.",
    },
    {
      question:
        " How does blockchain enhance real estate financing?",
      answer:
        "Blockchain enables decentralized mortgage securitization, where smart contracts automate payments and approvals, ensuring efficient loan processing, lower risks, and real-time reporting for lenders and investors.",
    },
    {
      question: " How does blockchain improve real estate construction management?",
      answer:
        "Blockchain streamlines procurement, contract management, and supply chain transparency in construction projects. It ensures authenticity of materials, prevents fraud, and optimizes project timelines.",
    },
    {
        question: "Is blockchain real estate software compliant with regulations?",
        answer:
          "Yes, blockchain-based real estate solutions adhere to jurisdictional regulations with compliance embedded in smart contracts, ensuring secure and legal transactions.",
      },
      {
        question: " How can blockchain reduce real estate transaction costs?",
        answer:
          "By eliminating intermediaries like brokers and banks, blockchain reduces processing fees, paperwork, and legal costs, making real estate transactions more affordable and efficient.",
      },
      {
        question: "Can blockchain make real estate investment more accessible?",
        answer:
          "Yes! Tokenized real estate allows fractional ownership, meaning investors can buy a share of a property rather than the entire asset, making real estate investments more affordable and liquid.",
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
export default Faq5;
