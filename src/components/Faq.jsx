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
      question: "What is blockchain development?",
      answer:
        "Blockchain development involves designing, building, and deploying decentralized applications (dApps), smart contracts, and custom blockchain solutions that ensure transparency, security, and efficiency in digital transactions.",
    },
    {
      question: "What industries can benefit from blockchain technology?",
      answer:
        "Blockchain is widely used in industries like finance, healthcare, supply chain, real estate, gaming, government, and entertainment, improving security, transparency, and automation.",
    },
    {
      question: " What are the key benefits of blockchain development?",
      answer:
        "Blockchain offers benefits such as enhanced security, decentralization, immutability, faster transactions, reduced costs, and trustless operations, making it ideal for various business applications.",
    },
    {
      question: " What are smart contracts, and how do they work?",
      answer:
        "Smart contracts are self-executing digital contracts with predefined rules written in code. They automatically trigger actions when conditions are met, eliminating intermediaries and reducing fraud.",
    },
    {
      question: "  How much does blockchain development cost?",
      answer:
        "The cost depends on factors like project complexity, blockchain type, smart contract functionality, and integration needs. Custom blockchain solutions can range from a few thousand to hundreds of thousands of dollars.",
    },
    {
      question: "   How long does it take to develop a blockchain application?",
      answer:
        "Development time varies based on project scope and complexity. A basic dApp may take a few weeks, while a full-fledged blockchain platform may require several months of development and testing.",
    },
    {
      question: "  Which blockchain platforms do you work with?",
      answer:
        "We specialize in various blockchain frameworks, including Ethereum, Polygon, BNB Chain, Solana, Avalanche, Polkadot, Cosmos, and custom Layer 2/3 solutions.",
    },
    {
      question: "  Can you integrate blockchain with existing business systems?",
      answer:
        "Yes, we provide blockchain integration services to connect blockchain networks with existing enterprise systems, ensuring seamless operations and improved efficiency.",
    },
    {
      question: " How do you ensure security in blockchain development?",
      answer:
        "We follow best practices such as smart contract audits, rigorous security testing, encryption techniques, and compliance with industry standards to prevent vulnerabilities and cyber threats.",
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
                onClick={() => toggleFaq(index)} // Toggle FAQ on click
              >
                <p className="syne-font text-sm md:text-[17px] text-start text-white">
                  {faq.question}
                </p>
                {faqState[index] ? (
                  <MdOutlineArrowCircleUp size={24} color="#ffffff"/>
                ) : (
                  <MdOutlineArrowCircleDown size={24} color="#ffffff"/>
                )}
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out text-white ${
                  faqState[index] ? "max-h-40" : "max-h-0"
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
