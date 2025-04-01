/* eslint-disable react/prop-types */
import BlockchainDepinImg from "../../../assets/depin.png";
import { DaoBlockchainFaq } from "../../../components/data/faqsData";
import Faq from "../../../components/resuableComponent/Faq";
import BannerContent from "../../../components/CommonComponent/BannerContent";
import { Link } from "react-router-dom";
import bgimg from "../../../assets/bitcoin-key-wallet.svg";
import Forecast from "../../../components/CommonComponent/Forecast";
import { DaoBlockchainForecast } from "../../../components/data/forecastData";

const comparisons = [
  {
    feature: "Governance",
    cefi: "Governance: Managed hierarchically, with decision-making bottlenecks at higher levels.",
    defi: "Governance: Governed by smart contracts, with rules embedded in code.",
  },
  {
    feature: "Trust",
    cefi: "Trust: Relies on established relationships and past experiences.",
    defi: "Trust: Built on cryptography and blockchain technology for security and transparency.",
  },
  {
    feature: "Decision-Making",
    cefi: "Decision-Making: Driven by expertise and seniority within the organization.",
    defi: "Decision-Making: Automated through AI, independent agents, and smart contracts.",
  },
  { feature: "Cost", cefi: "Operational Costs: Typically high due to administrative overhead and layers of management.", defi: "Operational Costs: Lower, thanks to decentralized governance and reduced administrative overhead." },
];

const DaoBlockchain = () => {
  return (
    <div className="pt-6 md:pt-12 mb-10">
      {/* Banner Image */}
      <BannerContent
        img={BlockchainDepinImg}
        title1="DAO Blockchain "
        title2="Development"
        desc="Automated, Decentralized, and High-Performance Business Structures."
      />

      {/* Bloackchain forecast */}
      <div className="mt-20">
        <Forecast data={DaoBlockchainForecast} />
      </div>

      {/* TOKEN DEVELOPMENT offerings */}
      <div className="bg-[#283430] bg-opacity-20  flex flex-row items-center space-x-32 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-60 mt-20 mb-20 p-10">
        <div>
          <img src={bgimg} alt="" className="" />
        </div>
        <div>
          <p className="text-white text-2xl font-semibold ">
            Reach Giichi and discuss your requirements with our DAO Development experts TODAY!
          </p>
          <div className="flex flex-row items-center space-x-6">
            <a
              type="button"
              href="https://wa.me/9266416198"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
              aria-label="Contact us "
              title="Click to contact us form"
            >
              Connect on Whatsapp
            </a>
            <Link to="/contact-us">
              <button
                type="button"
                className="mt-6 bg-green-gradient focus:outline-none cursor-pointer shadow-inner shadow-[#d4dfd1] px-6 lg:px-8 py-3 text-white  text-lg text-nowrap transform hover:scale-105 transition-transform duration-300"
                aria-label="Contact us "
                title="Click to contact us form"
              >
                Request a Free Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* DIFFERNCE BETWEEN CEFI VS DEFI */}
      <div className="mt-20 ">
        <p className="text-white text-4xl font-semibold text-center">
          DAO vs Traditional Organizations
        </p>
        <p className="text-white text-opacity-75 text-center px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-4">
        When comparing governance models for organizations, there are two primary options: COs (Traditional or Continuous Organizations) and DAOs. Both are powered by advanced crypto-economic principles and smart contracts.
        </p>
        <div className="flex gap-4 p-4 px-4 md:px-8 lg:px-12 xl:px-36 2xl:px-32 3xl:px-96 mt-6">
          <div className="w-1/2">
            <div>
              <div className="bg-green  text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold text-center">
                  Traditional Organizations
                </p>
              </div>
              <div className="bg-green bg-opacity-10 p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="text-white font-normal">{comp.cefi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div>
              <div className="bg-green text-white flex items-center space-x-4 p-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 text-blue"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="text-2xl font-semibold">AI DAOs</p>
              </div>
              <div className="bg-green bg-opacity-10 text-white p-4">
                {comparisons.map((comp, index) => (
                  <div
                    key={index}
                    className="border-b last:border-b-0 border-white border-opacity-5 py-4 flex flex-row space-x-4"
                  >
                    <p className="text-white">{index + 1}. </p>
                    <span className="font-normal text-white">{comp.defi}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <Faq data={DaoBlockchainFaq} />
      </div>
    </div>
  );
};

export default DaoBlockchain;
