import {
  MdOutlineArrowCircleDown,
  MdOutlineArrowCircleUp,
} from "react-icons/md";
import { useState } from "react";

const Faq1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "What is blockchain identity management?",
      answer:
        "Blockchain identity management is a decentralized way of verifying and managing digital identities using blockchain technology. It allows individuals and businesses to have secure, self-sovereign identities without relying on central authorities.",
    },
    {
      question: "How does blockchain improve digital identity security?",
      answer:
        "Blockchain enhances security by storing identity data in a decentralized, tamper-proof ledger, reducing the risk of hacks, identity theft, and unauthorized modifications. It uses cryptographic encryption to protect personal data.",
    },
    {
      question: "How does blockchain-based identity management work?",
      answer:
        "Blockchain identity management works by issuing verifiable credentials stored on the blockchain. Users can present these credentials for authentication without exposing their private data, ensuring privacy and security.",
    },
    {
      question:
        "What industries can benefit from blockchain identity management?",
      answer:
        "Blockchain identity solutions are beneficial for banking, healthcare, education, government, supply chain, travel, and e-commerce by enabling secure authentication, compliance, and fraud prevention.",
    },
    {
      question:
        "  How does blockchain identity help with KYC and AML compliance?",
      answer:
        "Blockchain identity management simplifies KYC (Know Your Customer) and AML (Anti-Money Laundering) processes by allowing businesses to verify customer identities instantly while maintaining data integrity and reducing costs.",
    },
    {
      question: "  Can blockchain identity management prevent identity theft?",
      answer:
        "Yes! Since identities are decentralized and cryptographically secured, hackers cannot alter or steal identity records, making identity theft significantly harder.",
    },
    {
      question: " What is a decentralized identity wallet?",
      answer:
        "A decentralized identity wallet allows users to store and manage their digital identity credentials securely on their devices. It enables them to share only necessary information without exposing full identity details.",
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
export default Faq1;
